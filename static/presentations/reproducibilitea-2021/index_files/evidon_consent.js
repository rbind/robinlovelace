var checkoutExternalUrls = [
    '/checkout-external', '/tickets-external', '/signin/checkout'
];

window.EB = window.EB || {};


EB.EvidonConsent = (function () {
    return {
        _flattenEvidonStore: function (obj, acc, cb) {
            var index, to, nextSource, nextKey;

            Object.keys(obj).forEach(function (key) {
                typeof obj[key] === 'object' ? cb(obj[key], acc, cb) : acc.push({ [key]: obj[key] });
            });

            // ES5 polyfill for supporting IE11 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
            if (typeof Object.assign !== 'function') {
                Object.defineProperty(Object, 'assign', {
                    value: function assign(target) {
                        'use strict';
                        if (target === null || target === undefined) {
                            throw new TypeError('Cannot convert undefined or null to object');
                        }

                        to = Object(target);

                        for (index = 1; index < arguments.length; index++) {
                            nextSource = arguments[index];

                            if (nextSource !== null && nextSource !== undefined) {
                                for (nextKey in nextSource) {
                                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                                        to[nextKey] = nextSource[nextKey];
                                    }
                                }
                            }
                        }
                        return to;
                    },
                    writable: true,
                    configurable: true
                });
            }

            return acc.reduce(function (acc, obj) {
                return Object.assign(acc, obj);
            }, {});
        },
        shouldDisableEvidon: function () {
            return checkoutExternalUrls.includes(window.location.pathname) || this.isInsideIframe();
        },
        isInsideIframe: function () {
            try {
                return window.self !== window.top;
            } catch (e) {
                return true;
            }
        },
        hasEvidonConsent: function (category) {
            var i = 0, evidonConsentFlags = {};

            for (i; i < window.localStorage.length; i++) {
                if (/^_evidon_consent_ls_\d+/.test(window.localStorage.key(i))) {
                    evidonConsentFlags = this._flattenEvidonStore(
                        JSON.parse(window.localStorage.getItem(window.localStorage.key(i))),
                        [],
                        this._flattenEvidonStore
                    );
                };
            }

            if (this.shouldDisableEvidon() || evidonConsentFlags[category]) {
                return true;
            }
            else {
                return false;
            }
        },
        pixelRenderHelper: function (comment, url, isProd = false, isValidTld = true) {
            var bodyComment,
                img;

            if (isValidTld) {
                if (isProd) {
                    bodyComment = document.createComment(comment);
                    img = document.createElement('img');
                    img.className = 'is-hidden-accessible';
                    img.src = url;
                    img.height = '1';
                    img.width = '1';
                    img.alt = '';

                    document.body.appendChild(bodyComment);
                    document.body.appendChild(img);
                } else {
                    bodyComment = document.createComment(comment + '  PIXEL OMITTED :  ' + url);
                    document.body.appendChild(bodyComment);
                }
            }
        }
    };
})();
