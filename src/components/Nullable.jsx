import { createComponent } from "xolus";

const Null = createComponent({
    template(){
        return (
            <template>
                <style></style>
            </template>
            
        )
    },
    async templateData(){
        return <template-data done={true}></template-data>
    }
})

export default Null;