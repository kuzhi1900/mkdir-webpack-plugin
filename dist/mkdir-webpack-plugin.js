!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o=e();for(var r in o)("object"==typeof exports?exports:t)[r]=o[r]}}(global,(()=>{return t={138:(t,e,o)=>{const r=o(147),s=o(17);t.exports=class{constructor(t){this.options=t}apply(t){t.hooks.emit.tap("DirWebpackPlugin",(t=>{console.log("creat directions:",this.options.dirs);const e=t.options.output.path;this.options.dirs.map((t=>{const o=s.join(e,t);return this.mkdirSync(o)}))}))}mkdirSync(t){return!!r.existsSync(t)||(this.mkdirSync(s.dirname(t))?(r.mkdirSync(t),!0):void 0)}}},147:t=>{"use strict";t.exports=require("fs")},17:t=>{"use strict";t.exports=require("path")}},e={},function o(r){var s=e[r];if(void 0!==s)return s.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,o),i.exports}(138);var t,e}));