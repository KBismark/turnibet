import { createComponent } from "xolus";
import Tips from "./SideTip";

const TIP_IDS = ['three-way', 'oracle', 'dangerous']

const SideTips = createComponent({
    template({ storage, parentRef, props}){
        return (
            <template>
                <div id="after-hero-side-tip">
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

export default SideTips;


const css = `
.bg-heading{
    background-color: #000;
    padding: 7px 10px;
}
#after-hero-side-tip{
    width: 36%;
    min-width: 425px;
    
}
#after-hero-side-tip article{
    margin-bottom: 3.3rem;
    border: 1px solid #eee;
}
#after-hero-side-tip .white-inactive{
    border-radius: 90px;
    display: flex;
    align-items: center;
    padding: 3px 3px 3px 30px;
}
#after-hero-side-tip .tipspace{
    padding: 10px 10px 15px;
    background: #ebebeb;
}
#after-hero-side-tip .tip-container{
    border-left: none;
}
#after-hero-side-tip .tip{
    border-top: 1px solid #d3d3d3;
}
#after-hero-side-tip .tip-alert{
    margin: 20px 10px 0px;
    border-radius: 10px;
    padding: 10px;
    background-color:rgba(147, 55, 19, 0.144);
    color: rgb(147, 55, 19);
    font-weight:500;
    font-size:15px;
    text-align:center;
}
@media screen and (max-width: 860px){
    #after-hero-side-tip{
        min-width: auto;
        width: 100%
    }
}
`
.replace(/\n/gs,'').replace(/\s\s/gs,' ').replace(/\s\s/gs,' ')
