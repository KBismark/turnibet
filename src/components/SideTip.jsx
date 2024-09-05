import { createComponent } from "xolus";
import TipSlice from "./TipSlice";
import {get} from 'guther'
import { getTodaysDate } from "../../utils";

const serverData = new Map();
const arr = []
const defaultData = {
    'three-way': {
        previous: arr, today: arr,
        title: 'Three Way Tips',
        id: 'three-way',
    },
    dangerous: {
        previous: arr, today: arr,
        title: 'Today or Never',
        id: 'dangerous',
    },
    oracle: {
        previous: arr, today: arr,
        title: 'Three Way Tips',
        id: 'oracle',
    },
}
const Tips = createComponent({
    template({ storage, parentRef, props}){
        const componentRef = useRef(storage);
        const data = serverData.get(`${storage}${componentRef}`);
        serverData.delete(`${storage}${componentRef}`);
        const todaysDate = getTodaysDate();

        return (
            <template>
                <article>
                    <div className="bg-heading" style="flex-directio:column;align-items: center;">
                        <h2 className="page-color" style="text-align:center;text-transform:uppercase;margin:10px;"><>{data.title}</></h2>
                        <div className="flex-cn">
                            <div className="white-inactive j-bt on">
                                <div className="page-white-color" style="margin-right: 20px">Today's tips</div>
                                <button className="white-bg" onClick="onClick" >Previous</button>
                            </div>
                            <div className="white-inactive j-bt off" style="display:none;">
                                <div className="page-white-color" style="margin-right: 20px">Previous tips</div>
                                <button className="white-bg" onClick="onClick" >Today</button>
                            </div>
                        </div>
                        <div style="text-align:center;font-size:12px;margin: 5px 0px;" className="page-white-color on"><>{data.date?data.date.today:todaysDate}</></div>
                        <div style="text-align:center;font-size:12px;margin: 5px 0px;display:none;" className="page-white-color off"><>{data.date?data.date.previous:todaysDate}</></div>
                    </div>
                    <div className="tipspace">
                        <div className="tips on">
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
                            <Map data={data.today}>{TipSlice}</Map>
                        </div>
                        <div className="tips off" style="display:none;">
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
                            <Map data={data.previous}>{TipSlice}</Map>
                        </div>
                        <div className="tip-alert">Gambling can be addictive. Bet responsibly. Adults only!</div>
                    </div>
                </article>
            </template>
            
        )
    },
    async templateData({ storage, parentRef, props, done}){
        const ref = useRef(storage);
        get({id: props})
        .then((data)=>{
            serverData.set(`${storage}${ref}`, data);
            done(ref)
        })
        .catch((err)=>{
            serverData.set(`${storage}${ref}`, defaultData[props]||data);
            done(ref)
        });
        const data = {
            ...defaultData.dangerous,
            title: 'Not Available'
        }
        return <template-data done={false}></template-data>
    }
})

export default Tips;