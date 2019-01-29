app.directive('circleRotate', () => {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, ctrl) {
            const violatile = [];

            const basename = attrs.circleRotate || 'circle-rotate';
            const speed = parseInt(attrs.circleRotateSpeed || "32");
            const radius = parseInt(attrs.circleRotateRadius || "200");
            const zoom = parseInt(attrs.circleRotateZoom || "0");
            const container = element[0];
            const children = container.children;
            const childCount = children.length;

            /*scope.$on('$destroy', function() {
                for (const e of violatile)
                    e.remove();
            });*/

            function addStyle(content) {
                const style = document.createElement('style');
                style.type = 'text/css';
                container.appendChild(style);
                style.innerHTML = content;
                violatile.push(style);
            }
            function addStyleRule(selector, content) {
                addStyle(`${selector} { ${content} }`);
            }
            function addAnimation(name, rules) {
                addStyle(`@keyframes ${name} {
                    ${rules.map(e => `${e.state} { ${e.body} }`).join('\n')}
                }`);
            }
            function addFromToAnimation(name, from, to) {
                return addAnimation(name, [
                    { state: 'from', body: from },
                    { state: 'to', body: to }
                ]);
            }

            for (let i = 0; i < childCount; i++) {
                const child = children[i];
                const name = basename + '-' + i;
                const offsetAngle = 180 + 360/childCount * i;
                addFromToAnimation(name,
                    `transform: translate(-50%, -50%) rotateZ(${-offsetAngle}deg) translateY(${radius}px) rotateZ(${offsetAngle}deg);`,
                    `transform: translate(-50%, -50%) rotateZ(${360-offsetAngle}deg) translateY(${radius}px) rotateZ(${offsetAngle-360}deg);`
                );
                child.style.animation = zoom ?
                    `${name} ${speed}s linear ${zoom}s infinite, ${name} ${zoom}s ease-out 0s 1` :
                    `${name} ${speed}s linear`;
                const selector = `${basename}-e${i}`;
                child.classList.add('circle-rotate', selector);
                addStyleRule("." + selector, "animation: " + (zoom ?
                    `${name} ${speed}s linear ${zoom}s infinite, ${name} ${zoom}s ease-out 0s 1` :
                    `${name} ${speed}s linear`));
            }

            if (zoom) {
                container.classList.add('circle-rotate-zoom');
                container.style.animationDuration = zoom + "s";
                /*
                for (let i = 0; i < childCount; i++) {
                    const child = children[i];
                    child.style.animationDuration = zoom + "s";
                }
                $(container).one("animationend", () => {
                    container.classList.remove('circle-rotate-zoom');
                    for (let i = 0; i < childCount; i++) {
                        const child = children[i];
                        child.style.animationDuration = speed + "s";
                        child.style.animationDelay = -speed+zoom + "s";
                    }
                });
                */
            }

            const observer = new MutationObserver(mutations => {
                for (const mutation of mutations.filter(e => e.type === 'childList')) {
                    //console.log(mutation);
                }
            });
            observer.observe(container, {
                childList: true,
                attributes: true
            });
        }
    };
});