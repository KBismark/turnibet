import { createComponent } from "xolus";
import Tips from "./ContentTip";
import {get} from 'guther'

const serverData = new Map();

const ContentTips = createComponent({
    template({ storage, parentRef, props}){
        const componentRef = useRef(storage);
        const data = serverData.get(`${storage}${componentRef}`);
        serverData.delete(`${storage}${componentRef}`)
        const tipdaysData = data.today&&data.previous?[data.previous, data.today]:Object.values(data)
        return (
            <template>
                <div id="after-hero-content">
                    <Map data={tipdaysData}>{Tips}</Map>
                    <style><>{css}</></style>
                </div>
            </template>
            
        )
    },
    async templateData({ storage, parentRef, props, done}){
        const ref = useRef(storage);
        get({id: 'free-tips'})
        .then((data)=>{
            serverData.set(`${storage}${ref}`, data);
            done(ref)
        })
        .catch((err)=>{
            serverData.set(`${storage}${ref}`, {});
            done(ref)
        });
        const tipdaysData = [];
        return <template-data done={false}></template-data>
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
