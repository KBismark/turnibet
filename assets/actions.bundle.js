(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
 module.exports = exports;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onClick = void 0;
ACTIONS: registerActions("a224");
var onClick = function (props) {
    console.log(props);
    alert('You just clicked on me!');
};
exports.onClick = onClick;
setAction('onClickMe', exports.onClick);

},{}],2:[function(require,module,exports){
 module.exports = exports;
var _a = require("statestorejs"), getStore = _a.getStore, updateStore = _a.updateStore;
ACTIONS: registerActions("c77f");
var onClick = function (_a) {
    var componentRef = _a.componentRef, storage = _a.storage, tab = _a.tab;
    var currentTab = (getStore(storage, componentRef) || {}).currentTab;
    if (currentTab === tab)
        return;
    var headNode = getComponentNode(componentRef);
    var activeNodes = Object.values(headNode.getElementsByClassName('white-bg') || {});
    var clickedNodes = Object.values(headNode.getElementsByClassName(tab) || {});
    headNode.getElementsByClassName("".concat(componentRef, "-").concat(currentTab))[0].style.display = 'none';
    headNode.getElementsByClassName("".concat(componentRef, "-").concat(tab))[0].style.display = 'block';
    activeNodes.forEach(function (element) {
        element.classList.remove('white-bg');
        element.classList.add('white-inactive');
    });
    clickedNodes.forEach(function (element) {
        element.classList.remove('white-inactive');
        element.classList.add('white-bg');
    });
    updateStore(storage, componentRef, {
        actors: [],
        store: { currentTab: tab }
    });
};
setAction('onToday', function (props) {
    props.tab = 'today';
    onClick(props);
});
setAction('onYesterday', function (props) {
    props.tab = 'yesterday';
    onClick(props);
});
setAction('onThird', function (props) {
    props.tab = 'third';
    onClick(props);
});
setAction('onSecond', function (props) {
    props.tab = 'second';
    onClick(props);
});
setAction('onFirst', function (props) {
    props.tab = 'first';
    onClick(props);
});

},{"statestorejs":undefined}],3:[function(require,module,exports){
 module.exports = exports;
ACTIONS: registerActions("x2ed4");
var onClick = function (_a) {
    var componentRef = _a.componentRef, storage = _a.storage;
    var headNode = getComponentNode(componentRef);
    var off_Nodes = Object.values(headNode.getElementsByClassName('off') || {});
    var on_Nodes = Object.values(headNode.getElementsByClassName('on') || {});
    off_Nodes.forEach(function (element) {
        element.style.display = "";
        element.classList.remove('off');
        element.classList.add('on');
    });
    on_Nodes.forEach(function (element) {
        element.style.display = "none";
        element.classList.remove('on');
        element.classList.add('off');
    });
};
setAction('onClick', onClick);

},{}],4:[function(require,module,exports){
 module.exports = exports;
ACTIONS: registerActions("x61c5");
setAction('onJoinVIP', function (_a) {
    var parentRef = _a.parentRef, componentRef = _a.componentRef, storage = _a.storage;
    alert('Joined Vip');
    console.log(getComponentNode(componentRef));
});

},{}]},{},[1,2,3,4]);
