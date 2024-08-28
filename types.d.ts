
type Reference<N=any> = {current: null|undefined|N}
export interface Component{
    template<P>(props: {
        storage: string;
        parentRef: string;
        props?: P,
        index?: number,
        init?: ()=>string;
    }): {};
    templateData<P>(props: {
        storage: string;
        parentRef: string;
        done: (ref: string)=>void;
        props?: P,
        index?: number,
    }): {}
}

type ActionsProps<P=any> = {
    storage: string;
    parentRef: string;
    slotRef: Reference<String>
}
declare function getAction(name: ActionsNames|(string&{}), parentRef: string, componentRef: string): any
declare function setAction(name: string, action: (props: ActionsProps)=>any):void;
declare function registerActions(actionPath: string):void;
declare function useRef(storage: string):string;
const track_it: (...args: never[])=>never;
const getRef: (...args: never[])=>never;

NAMES: type ActionsNames = 'onClickMe';