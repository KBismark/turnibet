const {createStore} = require('statestorejs');

const DynamicNodes = {};
let currentActionPath = '';
const Actions = {}
const setAction = (name, action)=>{
    let actions = Actions[currentActionPath];
    if(!actions){
        actions = Actions[currentActionPath] = {}
    }
    actions[name] = action;
}

const getAction = (name, parentRef, componentRef)=>{
    const source = componentRef.split('-').slice(0,-1).join('-')
    return Actions[source]&&Actions[source][name] ? Actions[source][name]({parentRef, componentRef, storage: 'BigStore'}) : undefined
}

const registerActions = (actionPath)=>{
    currentActionPath = actionPath;
};

const getComponentNode = (ref)=>{
    let node = DynamicNodes[ref];
    if(!node){
        node = document.getElementsByClassName(ref);
        if(node&&node.length>0){
            return DynamicNodes[ref] = node[0];
        }
    }
    return node
}

!function(){
    // Setup data  store
    for(let storename in storage){
        createStore('BigStore', storename, storage[storename].value);
    }
    
}()

