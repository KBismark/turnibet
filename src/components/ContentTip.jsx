import { createComponent } from "xolus";
import TipSlice from "./TipSlice";

const Tips = createComponent({
    template({ storage, parentRef, props}){
        return (
            <template>
                <article>
                    <div className="border-heading" style="">
                        <h2 className="page-color" style="text-transform:capitalize;"><>{props.title}</></h2> 
                    </div>
                    <div className="tipspace">
                        <div className="tips">
                            <div style="display:flex;">
                                <div style="width: 60%;padding: 10px 15px;">
                                    <div className="tip-head">Match</div>
                                </div>
                                <div style="width: 20%;padding: 10px 15px;">
                                    <div className="tip-head">Tips</div>
                                </div>
                                <div style="width: 20%;padding: 10px 15px; margin-right: 5px;">
                                    <div className="tip-head">Results</div>
                                </div>
                            </div>
                            <Map data={props.tips}>{TipSlice}</Map>
                        </div>
                    </div>
                </article>
            </template>
            
        )
    },
    async templateData({ storage, parentRef, props, done}){
        return <template-data done={true}></template-data>
    }
})

export default Tips;