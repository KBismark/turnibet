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
