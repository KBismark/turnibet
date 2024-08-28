 module.exports = exports;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onClick = void 0;
ACTIONS: registerActions("App.js");
var onClick = function (props) {
    console.log(props);
    alert('You just clicked on me!');
};
exports.onClick = onClick;
setAction('onClickMe', exports.onClick);
