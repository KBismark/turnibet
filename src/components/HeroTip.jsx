import { createComponent } from "xolus";
import TipSlice from "./TipSlice";
import {getHeroDays} from '../../utils'
import { useRef } from "../../types";

const HeroTips = createComponent({
    template({ storage, parentRef, props}){
        const componentRef = useRef(storage);
        const datas = [
            {
                teams: {
                    home: 'Man City',
                    away: 'Chelsea'
                },
                tip: 'Home win',
                status: 'pending',
                league: 'Premier League',
                startTime: '19 : 30 PM (GMT+0000)'
            },
            {
                teams: {
                    home: 'Real Madrid',
                    away: 'Real Betis'
                },
                tip: 'Over 2.5',
                status: 'live',
                league: 'Laliga',
                startTime: '19 : 30 PM (GMT+0000)'
            }
        ]
        
        const data = {
            monday: datas,
            tuesday: datas,
            wednesday: datas,
            thursday: datas.map((e)=>{const a = {...e};a.league = 'Ghana Premier league'; return a}),
            friday: datas,
            saturday: datas,
            sunday: datas
        }

        const herodays = getHeroDays().reverse();

        return (
            <template>
                <div id="hero-tips">
                    <div style="display:flex;justify-content:center;">
                        <div className="buttons over-mobile-screen d-flex">
                            <button className="white-inactive first" onClick="onFirst" ><>{herodays[4]}</></button>
                            <button className="white-inactive second" onClick="onSecond" ><>{herodays[3]}</></button>
                            <button className="white-inactive third" onClick="onThird" ><>{herodays[2]}</></button>
                            <button className="white-inactive yesterday" onClick="onYesterday" >Yesterday</button>
                            <button onClick="onToday" className="white-bg today" >Today</button>
                            
                        </div>
                        <div className="buttons under-mobile-screen d-flex">
                            <button className="white-inactive first" onClick="onFirst" ><>{herodays[4].slice(0,3)}</></button>
                            <button className="white-inactive second" onClick="onSecond" ><>{herodays[3].slice(0,3)}</></button>
                            <button className="white-inactive third" onClick="onThird" ><>{herodays[2].slice(0,3)}</></button>
                            <button className="white-inactive yesterday" onClick="onYesterday" >Yesterday</button>
                            <button onClick="onToday" className="white-bg today" >Today</button>
                            
                        </div>
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
                            <div className={`${componentRef}-first`} style="display:none;"><Map data={data[herodays[4]]}>{TipSlice}</Map></div>
                            <div className={`${componentRef}-second`} style="display:none;"><Map data={data[herodays[3]]}>{TipSlice}</Map></div>
                            <div className={`${componentRef}-third`} style="display:none;"><Map data={data[herodays[2]]}>{TipSlice}</Map></div>
                            <div className={`${componentRef}-yesterday`} style="display:none;"><Map data={data[herodays[1]]}>{TipSlice}</Map></div>
                            <div className={`${componentRef}-today`}><Map data={data[herodays[0]]}>{TipSlice}</Map></div>
                        </div>
                    </div>
                    <style><>{css}</></style>
                </div>
            </template>
            
        )
    },
    async templateData({ storage, parentRef, props, done}){
        const datas = [];
        const data = {
            monday: datas,
            tuesday: datas,
            wednesday: datas,
            thursday: datas,
            friday: datas,
            saturday: datas,
            sunday: datas
        }

        const herodays = getHeroDays()

        const store = {
            currentTab: 'today'
        };
        return <template-data done={true}>{store}</template-data>
    }
})

export default HeroTips;

const css = `
#hero-tips{
    padding: 20px 0px 0px 0px;
    margin: 0.8% 4% 0;
    max-width: 700px;
    background: rgba(0,0,0,0.8);
    border-radius: 0px 0px 20px 20px;
    position: relative;
    z-index:2;
}
#hero-tips .buttons{
    align-items: center;
    /*overflow-x:auto;*/
}
#hero-tips .buttons button{
    margin: 10px;
    text-transform:capitalize;
}
#hero-tips .tipspace{
    border-radius: 0px 0px 20px 20px;
    padding: 10px 20px 20px 20px;
    background: #ffffff;
}

@media screen and (max-width: 450px){
    #hero-tips{
        margin: 1% 0 0 0;
        width: 100%;
    }
    #hero-tips .buttons button{
        padding: 6px 10px;
        margin: 10px 5px;
        font-size: 14px;
    }
}
`
.replace(/\n/gs,'').replace(/\s\s/gs,' ').replace(/\s\s/gs,' ')
