app.service('ThreeService', class ThreeService {
    constructor(LoaderService) {
        this.loaded = false;
        this.loading = false;
        this.LoaderService = LoaderService;

        this.sources = {
            three: '../vendor/three/three.js',
            detector: '../vendor/three/Detector.js',
            mtlloader: '../vendor/three/MTLLoader.js',
            objloader: '../vendor/three/OBJLoader.js',
            orbit: '../vendor/three/OrbitControls.js',
            resize: '../vendor/threex.windowresize/threex.windowresize.js'
        };
    }

    async load() {
        if (this.loaded || this.loading)
            return Promise.resolve(this);
        this.loading = true;
        await this.LoaderService.loadJS(this.sources.three);
        await Promise.all([
            this.sources.detector,
            this.sources.mtlloader,
            this.sources.objloader,
            this.sources.orbit,
            this.sources.resize
        ].map(this.LoaderService.loadJS));
        this.loading = false;
        this.loaded = true;
        return this;
    }
});