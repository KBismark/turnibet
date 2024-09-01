
ACTIONS: registerActions("a224");
export const onClick = (props)=>{
    console.log(props);
    
    alert('You just clicked on me!');
}

setAction('onClickMe', onClick)
