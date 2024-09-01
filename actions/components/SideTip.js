

ACTIONS: registerActions("x2ed4");

const onClick = ({componentRef, storage})=>{
    const headNode = getComponentNode(componentRef);
    const off_Nodes = Object.values(headNode.getElementsByClassName('off')||{});
    const on_Nodes = Object.values(headNode.getElementsByClassName('on')||{});
    off_Nodes.forEach(element => {
        element.style.display=""
        element.classList.remove('off')
        element.classList.add('on')
    });
    on_Nodes.forEach(element => {
        element.style.display="none";
        element.classList.remove('on')
        element.classList.add('off')
    });
};

setAction('onClick', onClick)
