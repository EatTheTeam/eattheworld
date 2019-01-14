'use strict';

app.component('threeViewer', {
    templateUrl: 'components/three-viewer.html',
    controller: 'threeViewerController',
    bindings: {
        model: "@"
    }
});

app.controller('threeViewerController', class ThreeViewerController {
    constructor (LoaderService, ThreeService, $scope, $element) {
        this.isSetup = false;

        this.LoaderService = LoaderService;
        this.ThreeService = ThreeService;
        this.Container = $element.find('.three-view').get(0);

        $scope.$on('$destroy', () => this.$onDestroy());
        let model = undefined;
        Object.defineProperty(this, 'model', {
            set: v => {
                if (typeof v !== 'string')
                    return;
                model = v;
                if (this.isSetup)
                    this.Load(model);
            },
            get: () => model
        })
    }
    async $onInit() {
        await this.ThreeService.load();
        if (!Detector.webgl) {
            Detector.addGetWebGLMessage();
            return;
        }
        this.InitScene();
        this.SetupRenderer();
        this.SetupControls();
        this.SetupLoaders();
        this.SetupResizer();
        this.Render();
        this.isSetup = true;
        this.Load(this.model);
    }
    $onDestroy() {
        if (this.CurrentAnimationFrame)
            cancelAnimationFrame(this.CurrentAnimationFrame);

        // https://discourse.threejs.org/t/how-to-completely-clean-up-a-three-js-scene-from-a-web-app-once-the-scene-is-no-longer-needed/1549/11
        // https://stackoverflow.com/questions/44736714/vue-deallocating-memory-using-three-js-between-routes?noredirect=1&lq=1
        // console.log('dispose renderer!');
        if (this.Renderer) {
            this.Renderer.dispose();
            this.Renderer.forceContextLoss();
            this.Renderer.context = null;
            this.Renderer.domElement = null;
            this.Renderer = null;
        }
        if (this.Scene)
            this.Scene.traverse(object => {
                if (!object.isMesh)
                    return;

                console.log('dispose geometry!');
                object.geometry.dispose();

                if (object.material.isMaterial)
                    ThreeViewerController.DisposeMaterial(object.material);
                else for (const material of object.material)
                    ThreeViewerController.DisposeMaterial(material)
            });
        this.Scene = null;
        this.Ambient = null;
        this.Camera = null;
        this.Controls = null;
        this.MaterialLoader = null;
        this.ObjectLoader = null;
    }
    static DisposeMaterial(material) {
        console.log('dispose material!');
        material.dispose();

        // dispose textures
        for (const key of Object.keys(material)) {
            const value = material[key];
            if (value && typeof value === 'object' && 'minFilter' in value) {
                console.log('dispose texture!');
                value.dispose()
            }
        }
    }
    InitScene() {
        this.Camera = new THREE.PerspectiveCamera(45, this.Container.clientWidth / this.Container.clientHeight, 1, 1000);
        this.Camera.position.z = 3;

        this.Scene = new THREE.Scene();
        this.Ambient = new THREE.AmbientLight(0xffffff, 1.0);
        this.Scene.add(this.Ambient);
    }
    SetupLoaders() {
        const baseUrl = './resources/models/';
        this.MaterialLoader = new THREE.MTLLoader();
        this.MaterialLoader.setBaseUrl(baseUrl);
        this.MaterialLoader.setPath(baseUrl);
        this.ObjectLoader = new THREE.OBJLoader();
        this.ObjectLoader.setPath(baseUrl);
    }
    Load(name) {
        const materialSource = `${name}\\${name}.mtl`;
        const objectSource = `${name}\\${name}.obj`;
        this.MaterialLoader.load(materialSource, materials => {
            materials.preload();
            // materials.materials.default.map.magFilter = THREE.NearestFilter;
            // materials.materials.default.map.minFilter = THREE.LinearFilter;

            this.ObjectLoader.setMaterials(materials);
            this.ObjectLoader.load(objectSource, object => this.Scene.add(object));
        });
    }
    ResizeView() {
        this.Camera.aspect = this.Container.clientWidth / this.Container.clientHeight;
        this.Camera.updateProjectionMatrix();
        this.Renderer.setSize(this.Container.clientWidth, this.Container.clientHeight);
    }
    Render() {
        this.CurrentAnimationFrame = requestAnimationFrame(() => this.Render());
        this.Controls.update();
        this.Renderer.render(this.Scene, this.Camera);
    }
    SetupRenderer() {
        this.Renderer = new THREE.WebGLRenderer();
        this.Renderer.setPixelRatio(window.devicePixelRatio);
        this.Renderer.setSize(this.Container.clientWidth, this.Container.clientHeight);
        this.Renderer.setClearColor(new THREE.Color("hsl(0, 0%, 10%)"));
        this.Container.appendChild(this.Renderer.domElement);
    }
    SetupControls() {
        this.Controls = new THREE.OrbitControls(this.Camera, this.Renderer.domElement);
        this.Controls.enableDamping = true;
        this.Controls.dampingFactor = 0.25;
        this.Controls.enableZoom = true;
    }
    SetupResizer() {
        this.LoaderService.loadJS('../vendor/css-element-queries/ResizeSensor.js')
            .then(() => new ResizeSensor(this.Container, () => this.ResizeView()));
    }
});
