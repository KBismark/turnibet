import { createComponent } from "xolus";
import TipSlice from "./TipSlice";
import Tips from "./ContentTip";

const TIP_IDS = ['free-today', 'free-previous']

const ContentTips = createComponent({
    template({ storage, parentRef, props}){
        return (
            <template>
                <div id="after-hero-content">
                    <Map data={TIP_IDS}>{Tips}</Map>
                    <style><>{css}</></style>
                </div>
            </template>
            
        )
    },
    async templateData({ storage, parentRef, props, done}){
        return <template-data done={true}></template-data>
    }
})

export default ContentTips;


const css = `
#after-hero-content{
    width: 56%;
    max-width: 800px;
    margin:20px auto;
}
#after-hero-content article{
    margin-bottom: 3.3rem;
}
#after-hero-content .white-inactive{
    border-radius: 90px;
    display: flex;
    align-items: center;
    padding: 3px 3px 3px 30px;
}
#after-hero-content .tipspace{
    padding: 20px 10px;
    padding-left: 20px;
    border-left: 2px solid #eee;
}
@media screen and (max-width: 860px){
    #after-hero-content{
        width: 100%;
        padding: 0 10px;
    }
}
@media screen and (max-width: 450px){
    #after-hero-content .tipspace{
        border-left:none;
       padding-left: 10px;
    }
}
`
.replace(/\n/gs,'').replace(/\s\s/gs,' ').replace(/\s\s/gs,' ')
