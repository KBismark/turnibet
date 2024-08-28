
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
    const source = componentRef.split(':').slice(0, -1).join(':')
    return Actions[source]&&Actions[source][name] ? Actions[source][name]({parentRef, slotRef: {current: componentRef}, storage: 'BigStore'}) : undefined
}

const registerActions = (actionPath)=>{
    currentActionPath = actionPath;
};
