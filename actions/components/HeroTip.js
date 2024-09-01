const { getStore, updateStore } = require("statestorejs");


ACTIONS: registerActions("c77f");

const onClick = ({componentRef, storage, tab})=>{
    const {currentTab} = getStore(storage, componentRef)||{};
    if(currentTab === tab) return;
    const headNode = getComponentNode(componentRef);
    const activeNodes = Object.values(headNode.getElementsByClassName('white-bg')||{});
    const clickedNodes = Object.values(headNode.getElementsByClassName(tab)||{});
    headNode.getElementsByClassName(`${componentRef}-${currentTab}`)[0].style.display='none';
    headNode.getElementsByClassName(`${componentRef}-${tab}`)[0].style.display='block';
    activeNodes.forEach(element => {
        element.classList.remove('white-bg')
        element.classList.add('white-inactive')
    });
   clickedNodes.forEach(element => {
        element.classList.remove('white-inactive')
        element.classList.add('white-bg');
    });

    updateStore(storage, componentRef, {
        actors: [],
        store: {currentTab: tab}
    })
};



setAction('onToday', (props)=>{
    props.tab = 'today';
    onClick(props)
})
setAction('onYesterday', (props)=>{
    props.tab = 'yesterday';
    onClick(props)
})
setAction('onThird', (props)=>{
    props.tab = 'third';
    onClick(props)
})
setAction('onSecond', (props)=>{
    props.tab = 'second';
    onClick(props)
})
setAction('onFirst', (props)=>{
    props.tab = 'first';
    onClick(props)
})
