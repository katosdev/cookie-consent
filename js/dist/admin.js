module.exports=function(t){var n={};function o(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}return o.m=t,o.c=n,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var s in t)o.d(e,s,function(n){return t[n]}.bind(null,s));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=4)}([function(t,n){t.exports=flarum.core.compat.app},function(t,n){t.exports=flarum.core.compat["components/SettingsModal"]},function(t,n){t.exports=flarum.extensions["fof-components"]},,function(t,n,o){"use strict";o.r(n);var e=o(0),s=o.n(e);var i=o(1),r=o.n(i),a=o(2).settings.items,c=a.StringItem,l=a.SelectItem,f=function(t){var n,o;function e(){return t.apply(this,arguments)||this}o=t,(n=e).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o;var s=e.prototype;return s.oninit=function(n){t.prototype.oninit.call(this,n)},s.className=function(){return"CookieConsentSettingsModal Modal--medium"},s.title=function(){return app.translator.trans("fof-cookie-consent.admin.settings.title")},s.form=function(){return[m("div",{className:"Form-group"},m("h2",null,app.translator.trans("fof-cookie-consent.admin.settings.configuration_title")),m("div",{className:"Form-group"},m("label",null,app.translator.trans("fof-cookie-consent.admin.settings.consentText")),m("textarea",{required:!0,className:"FormControl",bidi:this.setting("fof-cookie-consent.consentText")})),m(c,{name:"fof-cookie-consent.buttonText",setting:this.setting.bind(this)},app.translator.trans("fof-cookie-consent.admin.settings.buttonText")),m("h3",null,app.translator.trans("fof-cookie-consent.admin.settings.configuration_button_title")),m("div",{className:"Form-section"},m(c,{name:"fof-cookie-consent.learnMoreLinkText",setting:this.setting.bind(this),required:!0},app.translator.trans("fof-cookie-consent.admin.settings.learnMoreLinkText")),m(c,{name:"fof-cookie-consent.learnMoreLinkUrl",setting:this.setting.bind(this)},app.translator.trans("fof-cookie-consent.admin.settings.learnMoreLinkUrl"))),m("h2",null,app.translator.trans("fof-cookie-consent.admin.settings.theme_title")),m("div",{className:"Form-group"},m("label",null,app.translator.trans("fof-cookie-consent.admin.settings.ccTheme")),l.component({options:{blocky:app.translator.trans("fof-cookie-consent.admin.settings.themes.blocky"),edgeless:app.translator.trans("fof-cookie-consent.admin.settings.themes.edgeless"),classic:app.translator.trans("fof-cookie-consent.admin.settings.themes.classic"),custom:app.translator.trans("fof-cookie-consent.admin.settings.themes.custom"),no_css:app.translator.trans("fof-cookie-consent.admin.settings.themes.no_css")},value:this.setting("fof-cookie-consent.ccTheme")(),onchange:this.setting("fof-cookie-consent.ccTheme"),setting:this.setting.bind(this),required:!0})),m("h3",null,app.translator.trans("fof-cookie-consent.admin.settings.theme_popup_title")),m("div",{className:"Form-section"},m(c,{name:"fof-cookie-consent.backgroundColor",setting:this.setting.bind(this)},app.translator.trans("fof-cookie-consent.admin.settings.backgroundColor")),m(c,{name:"fof-cookie-consent.textColor",setting:this.setting.bind(this)},app.translator.trans("fof-cookie-consent.admin.settings.textColor"))),m("h3",null,app.translator.trans("fof-cookie-consent.admin.settings.theme_dismiss_title")),m("div",{className:"Form-section"},m(c,{name:"fof-cookie-consent.buttonBackgroundColor",setting:this.setting.bind(this)},app.translator.trans("fof-cookie-consent.admin.settings.buttonBackgroundColor")),m(c,{name:"fof-cookie-consent.buttonTextColor",setting:this.setting.bind(this)},app.translator.trans("fof-cookie-consent.admin.settings.buttonTextColor"))))]},e}(r.a);s.a.initializers.add("fof-cookie-consent",(function(){s.a.extensionSettings["fof-cookie-consent"]=function(){return s.a.modal.show(f)}}))}]);
//# sourceMappingURL=admin.js.map