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
