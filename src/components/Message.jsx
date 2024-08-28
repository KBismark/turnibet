import { createComponent } from "xolus";

const Message = createComponent({
    template({ storage, parentRef, props}){
        const {name} = props;
        return (
            <template>
                <div id="message">
                    <p>
                       Hello <span><>{name}</>!</span>
                       <br/>
                       Welcome to your very first Xolus application.
                       <br/>
                       Change the trailing name, "John" of the currennt url to your name and press enter.
                    </p>
                    <p className="default">
                        <a href="/">Go back</a> to home page.
                    </p>
                </div>
            </template>
            
        )
    },
    async templateData({ storage, parentRef, props, done}){
        const {name} = props;
        return <template-data done={true}></template-data>
    }
})

export default Message;

