import { createComponent } from "xolus";

const Message = createComponent({
    template({ storage, parentRef, props}){
        return (
            <template>
                <div id="message">
                    <p className="default">
                        Visit <a href="/user/John">this page</a> to see some cool magic.
                    </p>
                </div>
            </template>
            
        )
    },
    async templateData({ storage, parentRef, props, done}){
        return <template-data done={true}></template-data>
    }
})

export default Message;

