
ACTIONS: registerActions("App.js");
export const onClick = (props)=>{
    console.log(props);
    
    alert('You just clicked on me!');
}

setAction('onClickMe', onClick)
