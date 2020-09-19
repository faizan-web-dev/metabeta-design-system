'use strict';Object.defineProperty(exports,'__esModule',{value:true});var Vue=require('vue');require('lodash/upperFirst'),require('lodash/camelCase');function _interopDefaultLegacy(e){return e&&typeof e==='object'&&'default'in e?e:{'default':e}}var Vue__default=/*#__PURE__*/_interopDefaultLegacy(Vue);function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}//
//
//
//
//
//
//
//
//
//
var script = {
  name: 'MbRadioGroup',
  data: function data() {
    return {
      checkedArr: []
    };
  },
  props: {
    alignment: {
      type: String,
      default: 'horizontal'
    },
    checkedValues: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    checkedEmit: function checkedEmit(checkedInput) {
      this.checkedArr.push(checkedInput);
      this.$emit('inputChanged', this.checkedArr);
    },
    uncheckedEmit: function uncheckedEmit(uncheckedInput) {
      var _this = this;

      this.checkedArr.filter(function (checkedItem) {
        return _this.checkedArr.includes(checkedItem);
      });
      this.$emit('inputChanged', this.checkedArr);
    }
  },
  components: {
    MbRadio: function MbRadio$1() {
      return Promise.resolve().then(function(){return MbRadio});
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "mb-checkbox-group"
  }, _vm._l(_vm.value, function (checkboxIndex, i) {
    return _vm._ssrNode("<ul" + _vm._ssrClass(null, _vm.alignment) + " data-v-7f626aad>", "</ul>", [_vm._ssrNode("<li data-v-7f626aad>", "</li>", [_c('mb-radio', {
      attrs: {
        "name": checkboxIndex.name,
        "is-checked": _vm.checkedValue[i],
        "label": checkboxIndex.label
      },
      on: {
        "unchecked": _vm.uncheckedEmit,
        "checked": _vm.checkedEmit
      }
    })], 1)]);
  }), 0);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-7f626aad_0", {
    source: ".mb-checkbox-group .horizontal[data-v-7f626aad]{display:flex;margin-right:1rem}.mb-checkbox-group .horizontal[data-v-7f626aad]:last-child{margin-right:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-7f626aad";
/* module identifier */

var __vue_module_identifier__ = "data-v-7f626aad";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
var script$1 = {
  name: 'MbCheckboxGroup',
  data: function data() {
    return {
      checkedArr: []
    };
  },
  props: {
    alignment: {
      type: String,
      default: 'horizontal'
    },
    checkedValues: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    checkedEmit: function checkedEmit(checkedInput) {
      this.checkedArr.push(checkedInput);
      this.$emit('inputChanged', this.checkedArr);
    },
    uncheckedEmit: function uncheckedEmit(uncheckedInput) {
      var _this = this;

      this.checkedArr.filter(function (checkedItem) {
        return _this.checkedArr.includes(checkedItem);
      });
      this.$emit('inputChanged', this.checkedArr);
    }
  },
  components: {
    MbCheckbox: function MbCheckbox$1() {
      return Promise.resolve().then(function(){return MbCheckbox});
    }
  }
};/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "mb-checkbox-group"
  }, _vm._l(_vm.value, function (checkboxIndex, i) {
    return _vm._ssrNode("<ul" + _vm._ssrClass(null, _vm.alignment) + " data-v-57a6394d>", "</ul>", [_vm._ssrNode("<li data-v-57a6394d>", "</li>", [_c('mb-checkbox', {
      attrs: {
        "name": checkboxIndex.name,
        "is-checked": _vm.checkedValue[i],
        "label": checkboxIndex.label
      },
      on: {
        "unchecked": _vm.uncheckedEmit,
        "checked": _vm.checkedEmit
      }
    })], 1)]);
  }), 0);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-57a6394d_0", {
    source: ".mb-checkbox-group .horizontal[data-v-57a6394d]{display:flex;margin-right:1rem}.mb-checkbox-group .horizontal[data-v-57a6394d]:last-child{margin-right:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$1 = "data-v-57a6394d";
/* module identifier */

var __vue_module_identifier__$1 = "data-v-57a6394d";
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject shadow dom */

var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$2 = {
  name: "MbApp",
  props: {
    isLoading: {
      type: Boolean,
      default: true
    },
    expanded: {
      type: Boolean
    }
  }
};/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('main', {
    class: _vm.expanded ? 'is-expended' : 'is-collapsed'
  }, [_vm._t("left-bar"), _vm._ssrNode(" "), _vm._t("title-bar"), _vm._ssrNode(" "), _vm._t("content-bar"), _vm._ssrNode(" "), _vm.isLoading ? _vm._ssrNode("<div>", "</div>", [_c('mb-loader')], 1) : _vm._ssrNode("<div>", "</div>", [_vm._t("content-bar", [_c('router-view', {
    key: _vm.$route.fullPath
  })])], 2)], 2);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = "data-v-12942a59";
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$2 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);//
//
//
//
//
//
//
//
//
//
//
//
var script$3 = {
  components: {
    MbAvatar: function MbAvatar$1() {
      return Promise.resolve().then(function(){return MbAvatar});
    },
    MbNavigationList: function MbNavigationList$1() {
      return Promise.resolve().then(function(){return MbNavigationList});
    }
  },
  props: {
    currentWorkspace: {
      type: [Array, Object],
      default: function _default() {}
    },
    organizations: {
      type: [Array, Object],
      default: function _default() {}
    },
    programs: {
      type: [Array, Object],
      default: function _default() {}
    }
  }
};/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('section', {
    staticClass: "mb-organization"
  }, [_vm._ssrNode("<div class=\"current\" data-v-051c0468>", "</div>", [_c('mb-avatar', {
    attrs: {
      "avatar": _vm.currentWorkspace
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div" + _vm._ssrClass("organization-menu", {
    expanded: 'expanded'
  }) + " data-v-051c0468>", "</div>", [_vm._l(_vm.organizations, function (org) {
    return _c('mb-navigation-list', {
      key: org._id,
      attrs: {
        "type": "organization",
        "avatar": org,
        "title": "Organizations"
      }
    });
  }), _vm._ssrNode(" "), _vm._l(_vm.programs, function (prg) {
    return _c('mb-navigation-list', {
      key: prg._id,
      attrs: {
        "type": "program",
        "avatar": prg,
        "title": "Programs"
      }
    });
  })], 2)], 2);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-051c0468_0", {
    source: ".mb-organizations[data-v-051c0468]{position:fixed;right:50px}.mb-organizations .organization-menu[data-v-051c0468]{min-width:250px;max-height:0}.mb-organizations .expand[data-v-051c0468]{max-height:initial}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$3 = "data-v-051c0468";
/* module identifier */

var __vue_module_identifier__$3 = "data-v-051c0468";
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject shadow dom */

var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$4 = {
  data: function data() {
    return {
      burgerButton: {
        name: 'hamburger'
      }
    };
  },
  components: {
    MbEdgesLayout: function MbEdgesLayout$1() {
      return Promise.resolve().then(function(){return MbEdgesLayout});
    }
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  }
};/* script */
var __vue_script__$4 = script$4;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('header', {
    staticClass: "mb-topbar",
    class: {
      'active': _vm.active
    }
  }, [_c('mb-edges-layout', [_c('template', {
    slot: "title"
  }, [_c('mb-button', {
    attrs: {
      "isBefore": _vm.burgerButton
    }
  }), _vm._v(" "), _c('h1', [_vm._v(_vm._s(_vm.title))])], 1), _vm._v(" "), _c('template', {
    slot: "actions"
  }, [_c('mb-organization'), _vm._v(" "), _c('mb-user')], 1)], 2), _vm._ssrNode(" "), _vm._t("mb-header-extra")], 2);
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$4 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-67793296_0", {
    source: ".mb-topbar[data-v-67793296]{position:fixed;top:0;left:0;width:100%}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$4 = "data-v-67793296";
/* module identifier */

var __vue_module_identifier__$4 = "data-v-67793296";
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject shadow dom */

var __vue_component__$4 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$5 = {
  props: {
    tabs: {
      type: Array,
      default: []
    }
  },
  methods: {
    switchTab: function switchTab(tabIndex) {
      this.tabs.forEach(function (tab) {
        tab.active = false;
      });
      this.tabs[tabIndex].active = true;
    }
  }
};/* script */
var __vue_script__$5 = script$5;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('section', {
    staticClass: "mb-tabs"
  }, [_vm._ssrNode("<nav><ul>" + _vm._ssrList(_vm.tabs, function (tab, index) {
    return "<li" + _vm._ssrClass(null, {
      active: tab.active
    }) + ">" + _vm._ssrEscape("\n        " + _vm._s(tab.name) + "\n      ") + "</li>";
  }) + "</ul></nav> "), _vm._ssrNode("<div class=\"tab-wrapper\">", "</div>", _vm._l(_vm.tabs, function (tab) {
    return _vm._ssrNode("<div" + _vm._ssrClass("mb-tab", {
      active: tab.active
    }) + ">", "</div>", [_vm._t(tab.name)], 2);
  }), 0)], 2);
};

var __vue_staticRenderFns__$5 = [];
/* style */

var __vue_inject_styles__$5 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-1a3f46f4_0", {
    source: ".mb-tabs ul{display:flex;align-items:center;justify-content:flex-start}.mb-tabs ul li{position:relative;padding:1rem}.mb-tabs ul li.active::after{background-color:#4786f6;position:absolute;left:0;bottom:-.25rem}.mb-tabs .tab-wrapper{width:100%;height:auto}.mb-tabs .tab-wrapper .mb-tab{display:none}.mb-tabs .tab-wrapper .mb-tab.active{display:block}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$5 = undefined;
/* module identifier */

var __vue_module_identifier__$5 = "data-v-1a3f46f4";
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject shadow dom */

var __vue_component__$5 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$6 = {
  name: "MbModal",
  data: function data() {
    return {
      iconClose: {
        name: 'close'
      }
    };
  },
  props: {
    size: {
      type: String,
      default: 'l'
    },
    title: {
      type: String,
      default: ''
    },
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    modalVisibility: {
      get: function get() {
        console.log(this.isVisible);
        return this.isVisible;
      },
      set: function set(value) {
        this.isVisible = value;
      }
    }
  },
  components: {
    MbHeaderActions: function MbHeaderActions$1() {
      return Promise.resolve().then(function(){return MbHeaderActions});
    },
    MbButton: function MbButton$1() {
      return Promise.resolve().then(function(){return MbButton});
    }
  }
};/* script */
var __vue_script__$6 = script$6;
/* template */

var __vue_render__$6 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('section', {
    staticClass: "mb-modal",
    class: [_vm.modalVisibility ? 'is-visible' : 'is-hidden', _vm.size]
  }, [_vm._ssrNode("<div class=\"content\" data-v-2b57fbb4>", "</div>", [_c('mb-header-actions', {
    attrs: {
      "is-visible": ""
    }
  }, [_c('template', {
    slot: "header-title"
  }, [_c('h3', [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('mb-button', {
    attrs: {
      "priority": "base",
      "label": "close",
      "iconBefore": _vm.iconClose
    },
    on: {
      "click": function click($event) {
        _vm.modalVisibility = false;

        _vm.$emit('on-close');
      }
    }
  })], 1)], 2), _vm._ssrNode(" "), _vm._t("header"), _vm._ssrNode(" "), _vm._t("content")], 2)]);
};

var __vue_staticRenderFns__$6 = [];
/* style */

var __vue_inject_styles__$6 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-2b57fbb4_0", {
    source: ".mb-modal[data-v-2b57fbb4]{position:fixed;top:0;left:0;bottom:0;right:0;width:100vw;height:100vh;max-width:100vw;max-height:100vh;z-index:500}.mb-modal.is-visible[data-v-2b57fbb4]{display:block;transition:.4s cubic-bezier(.4,.14,.3,1)}.mb-modal.is-hidden[data-v-2b57fbb4]{display:none;transition:.2s cubic-bezier(.4,.14,.3,1)}.mb-modal .content[data-v-2b57fbb4]{position:absolute;top:10vh;left:50%;transform:translateX(-50%);background-color:#fff}.mb-modal .content.xl[data-v-2b57fbb4]{box-shadow:0 .5 1 rgba(246,250,251,.48),0 0 1px rgba(246,250,251,.48);width:75vw}.mb-modal .content.l[data-v-2b57fbb4]{box-shadow:0 .5 1 rgba(246,250,251,.48),0 0 1px rgba(246,250,251,.48);width:60vw}.mb-modal .content.m[data-v-2b57fbb4]{border-radius:.5rem;box-shadow:0 .5 1 rgba(246,250,251,.48),0 0 1px rgba(246,250,251,.48);width:50vw}.mb-modal .content.s[data-v-2b57fbb4]{border-radius:.375rem;box-shadow:0 .5 1 rgba(246,250,251,.48),0 0 1px rgba(246,250,251,.48);width:35vw}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$6 = "data-v-2b57fbb4";
/* module identifier */

var __vue_module_identifier__$6 = "data-v-2b57fbb4";
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject shadow dom */

var __vue_component__$6 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, createInjectorSSR, undefined);var MbModal=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$6});//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$7 = {
  data: function data() {
    return {
      iconClose: {
        name: 'close'
      },
      iconLeftNav: {
        name: 'arrow-left'
      },
      iconRightNav: {
        name: 'arrow-right',
        m: m
      },
      drawerContent: null
    };
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    contentId: {
      type: [String, Number]
    },
    hasConfirmationModadl: {
      type: Boolean,
      default: false
    },
    onRefresh: {
      type: Function,
      default: function _default() {}
    }
  },
  watch: {
    contentId: function contentId(newValue) {
      this.drawerContent = newValue;
      this.onRefresh(newValue);
    }
  },
  components: {
    MbModal: function MbModal$1() {
      return Promise.resolve().then(function(){return MbModal});
    },
    MbButton: function MbButton$1() {
      return Promise.resolve().then(function(){return MbButton});
    },
    MbHeaderActions: function MbHeaderActions$1() {
      return Promise.resolve().then(function(){return MbHeaderActions});
    }
  },
  computed: {
    sideMenuHasContent: function sideMenuHasContent() {
      return !!this.$slots['drawer-content-side'] || !!this.$defaultSlots['drawer-content-side'];
    },
    drawerVisibility: {
      get: function get() {
        return this.isVisible;
      },
      set: function set(value) {
        this.isVisible = value;
      }
    }
  }
};/* script */
var __vue_script__$7 = script$7;
/* template */

var __vue_render__$7 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('section', {
    staticClass: "mb-transition-drawer",
    class: _vm.drawerVisibility ? 'mb-state-visible' : 'mb-state-hidden'
  }, [_c('mb-header-actions', {
    attrs: {
      "is-visible": "",
      "alignment": "reverse"
    }
  }, [_c('template', {
    slot: "header-actions"
  }, [_c('div', {
    staticClass: "button-group"
  }, [_c('mb-button', {
    attrs: {
      "priority": "base",
      "iconBefore": _vm.iconClose
    },
    on: {
      "click": function click($event) {
        _vm.drawerVisibility = false;

        _vm.$emit('on-close');
      }
    }
  }), _vm._v(" "), _c('mb-button', {
    attrs: {
      "priority": "base",
      "iconBefore": _vm.iconLeftNav
    },
    on: {
      "click": function click($event) {
        return _vm.$emit('on-prev');
      }
    }
  }), _vm._v(" "), _c('mb-button', {
    attrs: {
      "priority": "base",
      "iconBefore": _vm.iconRightNav
    },
    on: {
      "click": function click($event) {
        return _vm.$emit('on-next');
      }
    }
  })], 1), _vm._v(" "), _vm._t("drawer-header-actions")], 2), _vm._v(" "), _c('template', {
    slot: "header-title"
  }, [_vm._t("drawer-title")], 2)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"main\" data-v-256a5557>", "</div>", [_vm._ssrNode("<div class=\"drawer-content\" data-v-256a5557>", "</div>", [_vm._t("drawer-content")], 2), _vm._ssrNode(" "), _vm.sideMenuHasContent ? _vm._ssrNode("<aside class=\"drawer-content-side\" data-v-256a5557>", "</aside>", [_vm._t("drawer-content-side")], 2) : _vm._e()], 2), _vm._ssrNode(" "), _vm.hasConfirmationModal ? _c('mb-modal') : _vm._e()], 2);
};

var __vue_staticRenderFns__$7 = [];
/* style */

var __vue_inject_styles__$7 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-256a5557_0", {
    source: ".mb-transition-drawer[data-v-256a5557]{position:fixed;top:0}.mb-transition-drawer.mb-state-visible[data-v-256a5557]{transition:all .4s cubic-bezier(.4,.14,.3,1);right:0}.mb-transition-drawer.mb-state-hidden[data-v-256a5557]{transition:all .2s cubic-bezier(.4,.14,.3,1);right:-100%}.main .drawer-content[data-v-256a5557]{flex-grow:2}.main .drawer-side-menu[data-v-256a5557]{flex-grow:1}.main .header-actions[data-v-256a5557]{display:flex;width:100%;justify-content:space-between}.main .header-actions .button-group[data-v-256a5557]{justify-self:flex-start}.main .header-actions .button-group button[data-v-256a5557]{margin-right:1rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$7 = "data-v-256a5557";
/* module identifier */

var __vue_module_identifier__$7 = "data-v-256a5557";
/* functional template */

var __vue_is_functional_template__$7 = false;
/* style inject shadow dom */

var __vue_component__$7 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$8 = {
  name: "MbButton",
  data: function data() {
    return {
      responsiveLabelOnly: '',
      responsiveIconOnly: ''
    };
  },
  props: {
    type: {
      type: String,
      default: 'button'
    },
    href: {
      type: String,
      default: '/',
      required: false
    },
    isBefore: {
      type: Object,
      default: function _default() {}
    },
    isAfter: {
      type: Object,
      default: function _default() {}
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    priority: {
      type: String,
      default: 'base'
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'm'
    },
    iconBefore: {
      type: Object,
      default: function _default() {}
    },
    iconAfter: {
      type: Object,
      default: function _default() {}
    },
    label: {
      type: String,
      default: ''
    },
    onDesktop: {
      type: String,
      default: 'default'
    },
    onLaptop: {
      type: String,
      default: 'default'
    },
    onTablet: {
      type: String,
      default: 'default'
    },
    onPhone: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    componentType: function componentType() {
      return this.type === 'link' ? 'a' : 'button';
    }
  },
  components: {
    MbIcon: function MbIcon$1() {
      return Promise.resolve().then(function(){return MbIcon});
    }
  },
  created: function created() {
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;

    switch (windowWidth) {
      case windowWidth > 1367:
        this.responsiveIconOnly = this.onDesktop === 'icon-only';
        this.responsiveLabelOnly = this.onDesktop === 'label-only';
        break;

      case windowWidth > 768 && windowWidth < 1367:
        this.responsiveIconOnly = this.onLaptop === 'icon-only';
        this.responsiveLabelOnly = this.onLaptop === 'label-only';
        break;

      case windowWidth > 568 && windowWidth < 768:
        this.responsiveIconOnly = this.onTablet === 'icon-only';
        this.responsiveLabelOnly = this.onTablet === 'label-only';
        break;

      case windowWidth < 568:
        this.responsiveIconOnly = this.onPhone === 'icon-only';
        this.responsiveLabelOnly = this.onPhone === 'label-only';
        break;
    }
  }
};/* script */
var __vue_script__$8 = script$8;
/* template */

var __vue_render__$8 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('keep-alive', [_c(_vm.componentType, {
    tag: "component",
    class: ['mb-button', "mb-type-" + _vm.type, "mb-priority-" + _vm.priority, "mb-color-" + _vm.color, "mb-size-" + _vm.size],
    attrs: {
      "type": _vm.type != 'link' ? _vm.type : null,
      "href": _vm.type === 'link' ? _vm.href : false,
      "disabled": _vm.isDisabled
    },
    on: {
      "click": function click($event) {
        return _vm.$emit('click', $event);
      },
      "mouseenter": function mouseenter($event) {
        return _vm.$emit('mouseenter', $event);
      },
      "mouseleave": function mouseleave($event) {
        return _vm.$emit('mouseleave', $event);
      }
    }
  }, [!_vm.responsiveLabelOnly && _vm.isBefore ? _c('mb-icon', {
    attrs: {
      "name": _vm.type === 'action' ? _vm.iconBefore.name = 'dropdown' : _vm.iconBefore.name
    }
  }) : _vm._e(), _vm._v(" "), !_vm.responsiveIconOnly ? _c('span', {
    staticClass: "mb-button-label"
  }, [_vm._v(_vm._s(_vm.label))]) : _vm._e(), _vm._v(" "), !_vm.responsiveLabelOnly && _vm.isAfter ? _c('mb-icon', {
    attrs: {
      "name": _vm.type === 'action' ? _vm.iconBefore.name = 'dropdown' : _vm.iconBefore.name
    }
  }) : _vm._e()], 1)], 1);
};

var __vue_staticRenderFns__$8 = [];
/* style */

var __vue_inject_styles__$8 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-33483bef_0", {
    source: "@font-face{font-family:\"IBM Plex Sans\";src:local(\"?\"),url(~@/assets/fonts/ibm-plex-sans.woff2) format(\"woff2\"),url(~@/assets/fonts/ibm-plex-sans.woff) format(\"woff\"),url(~@/assets/fonts/ibm-plex-sans.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:\"IBM Plex Sans\";src:local(\"?\"),url(~@/assets/fonts/ibm-plex-sans-italic.woff2) format(\"woff2\"),url(~@/assets/fonts/ibm-plex-sans-italic.woff) format(\"woff\"),url(~@/assets/fonts/ibm-plex-sans-italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:\"IBM Plex Sans\";src:local(\"?\"),url(~@/assets/fonts/ibm-plex-sans-medium.woff2) format(\"woff2\"),url(~@/assets/fonts/ibm-plex-sans-medium.woff) format(\"woff\"),url(~@/assets/fonts/ibm-plex-sans-medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:\"IBM Plex Sans\";src:local(\"?\"),url(~@/assets/fonts/ibm-plex-sans-mediumitalic.woff2) format(\"woff2\"),url(~@/assets/fonts/ibm-plex-sans-mediumitalic.woff) format(\"woff\"),url(~@/assets/fonts/ibm-plex-sans-mediumitalic.ttf) format(\"truetype\");font-weight:500;font-style:italic}.mb-button{align-items:center;justify-content:center}.mb-button .mb-button-label{margin:0}.mb-button.mb-size-s{padding:.25rem .5rem;font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:.75rem;line-height:1rem;line-height:1rem;font-weight:400;font-style:normal;letter-spacing:0}.mb-button.mb-size-m{padding:.5rem .75rem;font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:.875rem;line-height:1.25rem;line-height:1.25rem;font-weight:400;font-style:normal;letter-spacing:0}.mb-button.mb-size-l{padding:.75rem 1rem;font-family:\"IBM Plex Sans\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Arial,sans-serif;font-size:1rem;line-height:1.5rem;line-height:1.5rem;font-weight:400;font-style:normal;letter-spacing:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$8 = undefined;
/* module identifier */

var __vue_module_identifier__$8 = "data-v-33483bef";
/* functional template */

var __vue_is_functional_template__$8 = false;
/* style inject shadow dom */

var __vue_component__$8 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, createInjectorSSR, undefined);var MbButton=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$8});//
//
//
//
//
//
//
//
//
var script$9 = {
  name: "MbFooterActions",
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    side: {
      type: String,
      default: 'right'
    }
  }
};/* script */
var __vue_script__$9 = script$9;
/* template */

var __vue_render__$9 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.isVisible ? _c('footer', [_vm._t("footer-title"), _vm._ssrNode(" "), _vm._ssrNode("<aside class=\"actions\">", "</aside>", [_vm._t("footer-actions")], 2)], 2) : _vm._e();
};

var __vue_staticRenderFns__$9 = [];
/* style */

var __vue_inject_styles__$9 = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-13bbeb40_0", {
    source: ".actions{display:flex;align-items:center;justify-content:flex-end}.actions+button,.actions+div{margin:0 .75rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$9 = undefined;
/* module identifier */

var __vue_module_identifier__$9 = "data-v-13bbeb40";
/* functional template */

var __vue_is_functional_template__$9 = false;
/* style inject shadow dom */

var __vue_component__$9 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, undefined, createInjectorSSR, undefined);var MbFooterActions=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$9});//
//
//
//
//
//
//
//
//
//
//
//
//
var script$a = {
  name: "MbHeaderActions",
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    side: {
      type: String,
      default: 'right'
    },
    alignment: {
      type: String,
      default: 'default'
    }
  }
};/* script */
var __vue_script__$a = script$a;
/* template */

var __vue_render__$a = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.isVisible ? _c('header', {
    staticClass: "header",
    class: _vm.alignment === '' || _vm.alignment === 'default' ? 'default' : 'reverse'
  }, [_vm._ssrNode("<section class=\"title\">", "</section>", [_vm._t("header-title")], 2), _vm._ssrNode(" "), _vm._ssrNode("<aside class=\"actions\">", "</aside>", [_vm._t("header-actions")], 2)], 2) : _vm._e();
};

var __vue_staticRenderFns__$a = [];
/* style */

var __vue_inject_styles__$a = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-148bfd61_0", {
    source: ".header{display:flex}.header.default{flex-direction:column}.header.reverse{flex-direction:column-reverse}.header .actions{display:flex;align-items:center;justify-content:flex-end}.header .actions+button,.header .actions+div{margin:0 .75rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$a = undefined;
/* module identifier */

var __vue_module_identifier__$a = "data-v-148bfd61";
/* functional template */

var __vue_is_functional_template__$a = false;
/* style inject shadow dom */

var __vue_component__$a = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$a, __vue_script__$a, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, undefined, createInjectorSSR, undefined);var MbHeaderActions=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$a});//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$b = {
  name: "MbPanel",
  components: {
    MbHeaderActions: function MbHeaderActions$1() {
      return Promise.resolve().then(function(){return MbHeaderActions});
    },
    MbFooterActions: function MbFooterActions$1() {
      return Promise.resolve().then(function(){return MbFooterActions});
    }
  },
  props: {
    type: {
      type: String,
      default: 'base'
    }
  }
};/* script */
var __vue_script__$b = script$b;
/* template */

var __vue_render__$b = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('section', {
    class: _vm.type
  }, [_c('mb-header-actions', {
    attrs: {
      "is-visible": _vm.$slots.headerActions || _vm.$scopedSlots.headerActions
    }
  }, [[_vm._t("header-title")], _vm._v(" "), [_vm._t("header-actions")]], 2), _vm._ssrNode("\n  Test\n  "), _vm._t("content"), _vm._ssrNode(" "), _c('mb-footer-actions', {
    attrs: {
      "is-visible": _vm.$slots.footerActions || _vm.$scopedSlots.footerActions
    }
  }, [[_vm._t("header-actions")]], 2)], 2);
};

var __vue_staticRenderFns__$b = [];
/* style */

var __vue_inject_styles__$b = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-0e5cc715_0", {
    source: ".base{border:none;background-color:#fff;border-radius:.375rem;padding:1rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$b = undefined;
/* module identifier */

var __vue_module_identifier__$b = "data-v-0e5cc715";
/* functional template */

var __vue_is_functional_template__$b = false;
/* style inject shadow dom */

var __vue_component__$b = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$b,
  staticRenderFns: __vue_staticRenderFns__$b
}, __vue_inject_styles__$b, __vue_script__$b, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
var script$c = {
  name: "MbTooltip",
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top'
    }
  }
};/* script */
var __vue_script__$c = script$c;
/* template */

var __vue_render__$c = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "tooltip",
    class: [_vm.isVisible ? '_visible' : '', _vm.position]
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$c = [];
/* style */

var __vue_inject_styles__$c = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-99e1ca40_0", {
    source: ".tooltip{position:absolute;visibility:hidden}.tooltip_visible{visibility:visible}.tooltip.top{top:0}.tooltip.left{left:0}.tooltip.right{right:0}.tooltip.bottom{bottom:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$c = undefined;
/* module identifier */

var __vue_module_identifier__$c = "data-v-99e1ca40";
/* functional template */

var __vue_is_functional_template__$c = false;
/* style inject shadow dom */

var __vue_component__$c = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$c,
  staticRenderFns: __vue_staticRenderFns__$c
}, __vue_inject_styles__$c, __vue_script__$c, __vue_scope_id__$c, __vue_is_functional_template__$c, __vue_module_identifier__$c, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
//
//
var script$d = {
  name: "MbEdgesLayout",
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    side: {
      type: String,
      default: 'right'
    },
    elementType: {
      type: String,
      default: 'div'
    }
  }
};/* script */
var __vue_script__$d = script$d;
/* template */

var __vue_render__$d = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.isVisible ? _c(_vm.elementType, {
    tag: "component"
  }, [_vm._t("title"), _vm._v(" "), _c('aside', {
    staticClass: "actions"
  }, [_vm._t("actions")], 2)], 2) : _vm._e();
};

var __vue_staticRenderFns__$d = [];
/* style */

var __vue_inject_styles__$d = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-61b28338_0", {
    source: ".actions{display:flex;align-items:center;justify-content:flex-end}.actions+button,.actions+div{margin:0 .75rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$d = undefined;
/* module identifier */

var __vue_module_identifier__$d = "data-v-61b28338";
/* functional template */

var __vue_is_functional_template__$d = false;
/* style inject shadow dom */

var __vue_component__$d = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$d,
  staticRenderFns: __vue_staticRenderFns__$d
}, __vue_inject_styles__$d, __vue_script__$d, __vue_scope_id__$d, __vue_is_functional_template__$d, __vue_module_identifier__$d, false, undefined, createInjectorSSR, undefined);var MbEdgesLayout=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$d});//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$e = {
  props: {
    type: {
      type: String,
      default: 'user'
    },
    title: {
      type: [String, Number]
    },
    links: {
      type: [Array, Object]
    }
  },
  components: {
    MbAvatar: function MbAvatar$1() {
      return Promise.resolve().then(function(){return MbAvatar});
    }
  }
};/* script */
var __vue_script__$e = script$e;
/* template */

var __vue_render__$e = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "mb-navigation-list"
  }, [_vm._ssrNode("<h5>" + _vm._ssrEscape(_vm._s(_vm.title)) + "</h5> "), _vm._ssrNode("<nav>", "</nav>", [_vm._ssrNode("<ul class=\"nav-link\">", "</ul>", _vm._l(_vm.links, function (link) {
    return _vm._ssrNode("<li>", "</li>", [_c('router-link', {
      attrs: {
        "to": link.url
      }
    }, [_c('mb-avatar', {
      attrs: {
        "type": _vm.type,
        "avatar": link.data
      }
    })], 1)], 1);
  }), 0)])], 2);
};

var __vue_staticRenderFns__$e = [];
/* style */

var __vue_inject_styles__$e = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-180c8184_0", {
    source: ".mb-navigation-list li{padding:.5rem;margin:0 .5rem;border-radius:.375rem}.mb-navigation-list li:hover{background-color:#dde2e5}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$e = undefined;
/* module identifier */

var __vue_module_identifier__$e = "data-v-180c8184";
/* functional template */

var __vue_is_functional_template__$e = false;
/* style inject shadow dom */

var __vue_component__$e = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$e,
  staticRenderFns: __vue_staticRenderFns__$e
}, __vue_inject_styles__$e, __vue_script__$e, __vue_scope_id__$e, __vue_is_functional_template__$e, __vue_module_identifier__$e, false, undefined, createInjectorSSR, undefined);var MbNavigationList=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$e});//
//
//
//
//
//
//
var script$f = {
  name: "MbCheckbox",
  data: function data() {
    return {
      checkState: false
    };
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    checkEvent: function checkEvent() {
      if (!this.checkState) {
        this.checkState = true;
        this.$emit('checked', this.name);
      } else {
        this.checkState = false;
        this.$emit('unchecked', this.name);
      }
    }
  },
  created: function created() {
    this.checkState = this.checked;
  }
};/* script */
var __vue_script__$f = script$f;
/* template */

var __vue_render__$f = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "checkbox",
    on: {
      "click": _vm.checkEvent
    }
  }, [_vm._ssrNode("<input type=\"checkbox\"" + _vm._ssrAttr("name", _vm.name) + _vm._ssrAttr("checked", _vm.checkState) + "> <label" + _vm._ssrAttr("for", _vm.name) + ">" + _vm._ssrEscape(_vm._s(_vm.label)) + "</label>")]);
};

var __vue_staticRenderFns__$f = [];
/* style */

var __vue_inject_styles__$f = undefined;
/* scoped */

var __vue_scope_id__$f = undefined;
/* module identifier */

var __vue_module_identifier__$f = "data-v-a602c0ac";
/* functional template */

var __vue_is_functional_template__$f = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$f = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$f,
  staticRenderFns: __vue_staticRenderFns__$f
}, __vue_inject_styles__$f, __vue_script__$f, __vue_scope_id__$f, __vue_is_functional_template__$f, __vue_module_identifier__$f, false, undefined, undefined, undefined);var MbCheckbox=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$f});//
//
//
//
//
//
var script$g = {
  name: "MbFieldset"
};/* script */
var __vue_script__$g = script$g;
/* template */

var __vue_render__$g = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('fieldset', {
    staticClass: "mb-fieldset"
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__$g = [];
/* style */

var __vue_inject_styles__$g = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-e92c3c60_0", {
    source: ".mb-fieldset{position:relative;appearance:none;box-sizing:border-box;display:flex;align-items:center}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$g = undefined;
/* module identifier */

var __vue_module_identifier__$g = "data-v-e92c3c60";
/* functional template */

var __vue_is_functional_template__$g = false;
/* style inject shadow dom */

var __vue_component__$g = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$g,
  staticRenderFns: __vue_staticRenderFns__$g
}, __vue_inject_styles__$g, __vue_script__$g, __vue_scope_id__$g, __vue_is_functional_template__$g, __vue_module_identifier__$g, false, undefined, createInjectorSSR, undefined);var MbFieldset=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$g});//
//
//
//
//
//
//
//
var script$h = {
  name: "MbInput",
  data: function data() {
    return {
      inputValue: ''
    };
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: null
    },
    iconAfter: {
      type: Object,
      default: function _default() {}
    },
    iconBefore: {
      type: Object,
      default: function _default() {}
    }
  },
  components: {
    MbIcon: function MbIcon$1() {
      return Promise.resolve().then(function(){return MbIcon});
    },
    MbFieldset: function MbFieldset$1() {
      return Promise.resolve().then(function(){return MbFieldset});
    }
  },
  watch: {
    value: function value(newValue) {
      this.$emit('changed', newValue);
      this.inputValue = newValue;
    }
  },
  created: function created() {
    this.inputValue = this.value;
  }
};/* script */
var __vue_script__$h = script$h;
/* template */

var __vue_render__$h = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('mb-fieldset', [_vm.iconBefore ? _c('mb-icon', {
    staticClass: "input-icon",
    class: {
      iconBefore: 'icon-before'
    },
    attrs: {
      "iconBefore": _vm.iconBefore,
      "iconAfter": _vm.iconBefore
    },
    on: {
      "click": function click($event) {
        return _vm.emit('icon-clicked');
      }
    }
  }) : _vm._e(), _vm._v(" "), _vm.type === 'checkbox' ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputValue,
      expression: "inputValue"
    }],
    staticClass: "mb-input",
    class: [{
      'has-before-icon': _vm.iconBefore
    }, {
      'has-after-icon': _vm.iconAfter
    }],
    attrs: {
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.inputValue) ? _vm._i(_vm.inputValue, null) > -1 : _vm.inputValue
    },
    on: {
      "change": function change($event) {
        var $$a = _vm.inputValue,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;

        if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);

          if ($$el.checked) {
            $$i < 0 && (_vm.inputValue = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.inputValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.inputValue = $$c;
        }
      }
    }
  }) : _vm.type === 'radio' ? _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputValue,
      expression: "inputValue"
    }],
    staticClass: "mb-input",
    class: [{
      'has-before-icon': _vm.iconBefore
    }, {
      'has-after-icon': _vm.iconAfter
    }],
    attrs: {
      "type": "radio"
    },
    domProps: {
      "checked": _vm._q(_vm.inputValue, null)
    },
    on: {
      "change": function change($event) {
        _vm.inputValue = null;
      }
    }
  }) : _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inputValue,
      expression: "inputValue"
    }],
    staticClass: "mb-input",
    class: [{
      'has-before-icon': _vm.iconBefore
    }, {
      'has-after-icon': _vm.iconAfter
    }],
    attrs: {
      "type": _vm.type
    },
    domProps: {
      "value": _vm.inputValue
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) {
          return;
        }

        _vm.inputValue = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.iconAfter ? _c('mb-icon', {
    staticClass: "input-icon",
    class: {
      iconAfter: 'icon-after'
    },
    attrs: {
      "iconBefore": _vm.iconBefore,
      "iconAfter": _vm.iconAfter
    },
    on: {
      "click": function click($event) {
        return _vm.emit('icon-clicked');
      }
    }
  }) : _vm._e()], 1);
};

var __vue_staticRenderFns__$h = [];
/* style */

var __vue_inject_styles__$h = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-28a2ddf0_0", {
    source: ".mb-input+.has-after-icon{padding-right:50px}.mb-input+.has-after-icon.input-icon{position:absolute;top:50%;transform:translateY(-50%);right:10px}.mb-input+.has-before-icon{padding-left:50px}.mb-input+.has-before-icon.input-icon{position:absolute;top:50%;transform:translateY(-50%);left:10px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$h = undefined;
/* module identifier */

var __vue_module_identifier__$h = "data-v-28a2ddf0";
/* functional template */

var __vue_is_functional_template__$h = false;
/* style inject shadow dom */

var __vue_component__$h = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$h,
  staticRenderFns: __vue_staticRenderFns__$h
}, __vue_inject_styles__$h, __vue_script__$h, __vue_scope_id__$h, __vue_is_functional_template__$h, __vue_module_identifier__$h, false, undefined, createInjectorSSR, undefined);//
//
//
//
//
//
//
var script$i = {
  name: "MbRadio",
  data: function data() {
    return {
      radioState: false
    };
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    radioEvent: function radioEvent() {
      if (!this.radioState) {
        this.radioState = true;
        this.$emit('checked', this.name);
      } else {
        this.radioState = false;
        this.$emit('unchecked', this.name);
      }
    }
  },
  created: function created() {
    this.radioState = this.checked;
  }
};/* script */
var __vue_script__$i = script$i;
/* template */

var __vue_render__$i = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "radiobox",
    on: {
      "click": _vm.radioEvent
    }
  }, [_vm._ssrNode("<input type=\"radio\"" + _vm._ssrAttr("name", _vm.name) + _vm._ssrAttr("checked", _vm.radioState) + _vm._ssrAttr("value", _vm.name) + "> <label" + _vm._ssrAttr("for", _vm.name) + ">" + _vm._ssrEscape(_vm._s(_vm.label)) + "</label>")]);
};

var __vue_staticRenderFns__$i = [];
/* style */

var __vue_inject_styles__$i = undefined;
/* scoped */

var __vue_scope_id__$i = undefined;
/* module identifier */

var __vue_module_identifier__$i = "data-v-132a8a74";
/* functional template */

var __vue_is_functional_template__$i = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var __vue_component__$i = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$i,
  staticRenderFns: __vue_staticRenderFns__$i
}, __vue_inject_styles__$i, __vue_script__$i, __vue_scope_id__$i, __vue_is_functional_template__$i, __vue_module_identifier__$i, false, undefined, undefined, undefined);var MbRadio=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$i});function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}//
//
//
//
var script$j = {
  name: "MbIcon",
  data: function data() {
    return {
      svg: ''
    };
  },
  iconBefore: {
    type: Object,
    default: {
      name: {
        type: String,
        default: ''
      },
      size: {
        type: Number,
        default: 40
      }
    }
  },
  iconAfter: {
    type: Object,
    default: {
      name: {
        type: String,
        default: ''
      },
      size: {
        type: Number,
        default: 40
      }
    }
  },
  created: function created() {
    this.svg = commonjsRequire("../../assets/icons/".concat(this.iconBefore.name || this.iconAfter.name, ".svg"));
  }
};/* script */
var __vue_script__$j = script$j;
/* template */

var __vue_render__$j = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c(_vm.iconBefore.name || _vm.iconAfter.name, {
    tag: "div",
    class: _vm.iconBefore ? 'float__left' : 'float__right',
    attrs: {
      "width": _vm.iconBefore.size || _vm.iconAfter.size
    },
    domProps: {
      "innerHTML": _vm._s(_vm.svg)
    }
  });
};

var __vue_staticRenderFns__$j = [];
/* style */

var __vue_inject_styles__$j = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-bcb364d0_0", {
    source: ".float__right[data-v-bcb364d0]{float:right}.float__left[data-v-bcb364d0]{float:left}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$j = "data-v-bcb364d0";
/* module identifier */

var __vue_module_identifier__$j = "data-v-bcb364d0";
/* functional template */

var __vue_is_functional_template__$j = false;
/* style inject shadow dom */

var __vue_component__$j = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$j,
  staticRenderFns: __vue_staticRenderFns__$j
}, __vue_inject_styles__$j, __vue_script__$j, __vue_scope_id__$j, __vue_is_functional_template__$j, __vue_module_identifier__$j, false, undefined, createInjectorSSR, undefined);var MbIcon=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$j});//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$k = {
  props: {
    type: {
      type: String,
      default: 'user'
    },
    avatar: {
      type: Object,
      default: function _default() {}
    }
  }
};/* script */
var __vue_script__$k = script$k;
/* template */

var __vue_render__$k = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "mb-avatar"
  }, [_vm._ssrNode("<img" + _vm._ssrAttr("src", _vm.avatar.avatarUrl ? _vm.avatar.avatarUrl : _vm.defaultImages.getImage(_vm.type, 'icon')) + _vm._ssrClass("avatar-image", _vm.type == 'organization' ? 'org-icon' : 'user-icon') + " data-v-f3aef0e8> <div class=\"avatar-text\" data-v-f3aef0e8><p class=\"mb-label\" data-v-f3aef0e8>" + _vm._ssrEscape("\n      " + _vm._s(_vm.avatar.name) + "\n    ") + "</p> " + (_vm.avatar.desc ? "<p class=\"mb-desc\" data-v-f3aef0e8><small data-v-f3aef0e8>" + _vm._ssrEscape("\n        " + _vm._s(_vm.avatar.desc) + "\n      ") + "</small></p>" : "<!---->") + "</div>")]);
};

var __vue_staticRenderFns__$k = [];
/* style */

var __vue_inject_styles__$k = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-f3aef0e8_0", {
    source: "@font-face{font-family:\"IBM Plex Sans\";src:local(\"?\"),url(~@/assets/fonts/ibm-plex-sans.woff2) format(\"woff2\"),url(~@/assets/fonts/ibm-plex-sans.woff) format(\"woff\"),url(~@/assets/fonts/ibm-plex-sans.ttf) format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:\"IBM Plex Sans\";src:local(\"?\"),url(~@/assets/fonts/ibm-plex-sans-italic.woff2) format(\"woff2\"),url(~@/assets/fonts/ibm-plex-sans-italic.woff) format(\"woff\"),url(~@/assets/fonts/ibm-plex-sans-italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:\"IBM Plex Sans\";src:local(\"?\"),url(~@/assets/fonts/ibm-plex-sans-medium.woff2) format(\"woff2\"),url(~@/assets/fonts/ibm-plex-sans-medium.woff) format(\"woff\"),url(~@/assets/fonts/ibm-plex-sans-medium.ttf) format(\"truetype\");font-weight:500;font-style:normal}@font-face{font-family:\"IBM Plex Sans\";src:local(\"?\"),url(~@/assets/fonts/ibm-plex-sans-mediumitalic.woff2) format(\"woff2\"),url(~@/assets/fonts/ibm-plex-sans-mediumitalic.woff) format(\"woff\"),url(~@/assets/fonts/ibm-plex-sans-mediumitalic.ttf) format(\"truetype\");font-weight:500;font-style:italic}.mb-avatar[data-v-f3aef0e8]{display:flex;align-items:center}.mb-avatar .avatar-image[data-v-f3aef0e8]{width:32px;height:32px;object-fit:cover}.mb-avatar .user-icon[data-v-f3aef0e8]{border-radius:50%}.mb-avatar .org-icon[data-v-f3aef0e8]{border-radius:.25rem}.mb-avatar .avatar-text[data-v-f3aef0e8]{display:block;margin-left:.75rem}.mb-avatar .avatar-text .mb-label[data-v-f3aef0e8]{margin:0;font-weight:500;line-height:1rem;font-size:.875rem}.mb-avatar .avatar-text .mb-desc[data-v-f3aef0e8]{margin:0;line-height:.75rem;font-size:.75rem}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__$k = "data-v-f3aef0e8";
/* module identifier */

var __vue_module_identifier__$k = "data-v-f3aef0e8";
/* functional template */

var __vue_is_functional_template__$k = false;
/* style inject shadow dom */

var __vue_component__$k = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$k,
  staticRenderFns: __vue_staticRenderFns__$k
}, __vue_inject_styles__$k, __vue_script__$k, __vue_scope_id__$k, __vue_is_functional_template__$k, __vue_module_identifier__$k, false, undefined, createInjectorSSR, undefined);var MbAvatar=/*#__PURE__*/Object.freeze({__proto__:null,'default': __vue_component__$k});var tryGet = function tryGet(value) {
  try {
    var r = value();

    if (typeof r !== 'undefined') {
      if (r === null) {
        return '';
      }

      return r;
    }

    return '';
  } catch (e) {
    return '';
  }
};

Vue__default['default'].prototype.tryGet = tryGet;

var DefaultImages = /*#__PURE__*/function () {
  function DefaultImages() {
    _classCallCheck(this, DefaultImages);

    this.images = {
      investor: {
        icon: 'http://cdn.metabeta.com/static/images/accelerator/icon.png',
        logo: 'http://cdn.metabeta.com/static/images/accelerator/logo.png'
      },
      startup: {
        icon: 'http://cdn.metabeta.com/static/images/startup/icon.png',
        logo: 'http://cdn.metabeta.com/static/images/startup/logo.png'
      },
      program: {
        icon: 'http://cdn.metabeta.com/static/images/program/icon.png',
        logo: 'http://cdn.metabeta.com/static/images/program/logo.png'
      },
      user: {
        icon: 'http://cdn.metabeta.com/static/images/user/icon.png'
      }
    };
  }

  _createClass(DefaultImages, [{
    key: "getImage",
    value: function getImage(entity, type) {
      try {
        var url = this.images["".concat(entity)]["".concat(type)];
        return url;
      } catch (error) {
        throw new Error("Could not get default ".concat(type, " image for ").concat(entity));
      }
    }
  }]);

  return DefaultImages;
}();

Vue__default['default'].prototype.defaultImages = new DefaultImages();var components=/*#__PURE__*/Object.freeze({__proto__:null,MbRadioGroup: __vue_component__,MbCheckboxGroup: __vue_component__$1,MbApp: __vue_component__$2,MbOrganization: __vue_component__$3,MbTopbar: __vue_component__$4,MbTabs: __vue_component__$5,MbModal: __vue_component__$6,MbDrawer: __vue_component__$7,MbButton: __vue_component__$8,MbFooterActions: __vue_component__$9,MbHeaderActions: __vue_component__$a,MbPanel: __vue_component__$b,MbTooltip: __vue_component__$c,MbEdgesLayout: __vue_component__$d,MbNavigationList: __vue_component__$e,MbCheckbox: __vue_component__$f,MbFieldset: __vue_component__$g,MbInput: __vue_component__$h,MbRadio: __vue_component__$i,MbIcon: __vue_component__$j,MbAvatar: __vue_component__$k});var install = function installMetabetaDesignSystem(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Default export is library as a whole, registered via Vue.use()
exports.MbApp=__vue_component__$2;exports.MbAvatar=__vue_component__$k;exports.MbButton=__vue_component__$8;exports.MbCheckbox=__vue_component__$f;exports.MbCheckboxGroup=__vue_component__$1;exports.MbDrawer=__vue_component__$7;exports.MbEdgesLayout=__vue_component__$d;exports.MbFieldset=__vue_component__$g;exports.MbFooterActions=__vue_component__$9;exports.MbHeaderActions=__vue_component__$a;exports.MbIcon=__vue_component__$j;exports.MbInput=__vue_component__$h;exports.MbModal=__vue_component__$6;exports.MbNavigationList=__vue_component__$e;exports.MbOrganization=__vue_component__$3;exports.MbPanel=__vue_component__$b;exports.MbRadio=__vue_component__$i;exports.MbRadioGroup=__vue_component__;exports.MbTabs=__vue_component__$5;exports.MbTooltip=__vue_component__$c;exports.MbTopbar=__vue_component__$4;exports.default=plugin;