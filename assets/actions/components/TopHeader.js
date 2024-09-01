 module.exports = exports;
ACTIONS: registerActions("x61c5");
setAction('onJoinVIP', function (_a) {
    var parentRef = _a.parentRef, componentRef = _a.componentRef, storage = _a.storage;
    alert('Joined Vip');
    console.log(getComponentNode(componentRef));
});
