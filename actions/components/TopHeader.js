

ACTIONS: registerActions("x61c5");

setAction('onJoinVIP', ({parentRef, componentRef, storage})=>{
    alert('Joined Vip');
    console.log(getComponentNode(componentRef));
    
})
