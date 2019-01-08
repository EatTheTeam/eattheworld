function loader(element) {
    return new Promise((resolve, reject) => {
        element.addEventListener('load', () => resolve(element), false);
        element.addEventListener('error', e => reject(e), false);
    });
}

app.provider('LoaderService', function () {
    this.$get = () => {
        class LoaderService {
            static loadJS(src, ignoreLoaded = false) {
                if (!ignoreLoaded) {
                    const cached = LoaderService.getLoaded(src);
                    if (cached)
                        return Promise.resolve(cached);
                }

                const script = document.createElement('script');
                script.src = src;
                script.type = 'text/javascript';
                document.body.appendChild(script);

                return loader(script).then(e => LoaderService.addLoaded(src, e));
            }

            static loadCSS(href, ignoreLoaded = false) {
                if (!ignoreLoaded) {
                    const cached = LoaderService.getLoaded(href);
                    if (cached)
                        return Promise.resolve(cached);
                }

                const style = document.createElement('link');
                style.rel = 'stylesheet';
                style.type = 'text/css';
                style.href = href;
                document.head.appendChild(style);

                return loader(style).then(e => LoaderService.addLoaded(href, e));
            }

            static isLoaded(src) {
                return LoaderService.loaded.some(([s,]) => src === s);
            }

            static addLoaded(src, element) {
                if (!this.isLoaded(src))
                    LoaderService.loaded.push([src, element]);
                return element;
            }

            static getLoaded(src) {
                return LoaderService.loaded.find(([s,]) => src === s);
            }
        }
        LoaderService.loaded = [];
        return LoaderService;
    }
});