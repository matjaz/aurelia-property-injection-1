"use strict";

System.register(["aurelia-dependency-injection"], function (_export, _context) {
    var InvocationHandler, InvocationHandlerWrapper;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_aureliaDependencyInjection) {
            InvocationHandler = _aureliaDependencyInjection.InvocationHandler;
        }],
        execute: function () {
            _export("InvocationHandlerWrapper", InvocationHandlerWrapper = function (_InvocationHandler) {
                _inherits(InvocationHandlerWrapper, _InvocationHandler);

                function InvocationHandlerWrapper() {
                    _classCallCheck(this, InvocationHandlerWrapper);

                    return _possibleConstructorReturn(this, _InvocationHandler.apply(this, arguments));
                }

                InvocationHandlerWrapper.prototype.invoke = function invoke(container, dynamicDependencies) {
                    var instance = _InvocationHandler.prototype.invoke.call(this, container, dynamicDependencies);
                    return this.injectProperties(container, instance);
                };

                InvocationHandlerWrapper.prototype.injectProperties = function injectProperties(container, instance) {
                    if ("injectProperties" in this.fn) {
                        var dependencies = this.fn["injectProperties"];
                        for (var property in dependencies) {
                            instance[property] = container.get(dependencies[property]);
                        }
                        if ("afterConstructor" in instance) {
                            instance.afterConstructor.call(instance);
                        }
                    }
                    return instance;
                };

                return InvocationHandlerWrapper;
            }(InvocationHandler));

            _export("InvocationHandlerWrapper", InvocationHandlerWrapper);
        }
    };
});