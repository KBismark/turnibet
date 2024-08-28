import { createComponent } from "xolus";
import TipSlice from "./TipSlice";

const HeroTips = createComponent({
    template({ storage, parentRef, props}){
        const data = [
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
        return (
            <template>
                <div id="hero-tips">
                    <div style="display:flex;justify-content:center;">
                        <div className="buttons">
                            <button className="white-inactive" onClick="onClickMe" >Satuday</button>
                            <button className="white-inactive" onClick="onClickMe" >Sunday</button>
                            <button className="white-inactive" onClick="onClickMe" >Monday</button>
                            <button className="white-inactive" onClick="onClickMe" >Yesterday</button>
                            <button onClick="onClickMe" className="white-bg" >Today</button>
                            
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
                                <div style="width: 20%;padding: 10px 15px;">
                                    <div className="tip-head">Results</div>
                                </div>
                            </div>
                            <Map data={data}>{TipSlice}</Map>
                        </div>
                    </div>
                    <style><>{css}</></style>
                </div>
            </template>
            
        )
    },
    async templateData({ storage, parentRef, props, done}){
        const data = [];
        return <template-data done={true}></template-data>
    }
})

export default HeroTips;

const css = `
#hero-tips{
    padding: 20px 0px 0px 0px;
    margin: 1% 4% 0;
    max-width: 700px;
    background: #000000;
    border-radius: 0px 0px 20px 20px;
}
#hero-tips .buttons{
    padding: 3px;
    display: flex;
    align-items: center;
    background: #000000;
}
#hero-tips .buttons button{
    margin: 10px;
}
#hero-tips .tipspace{
    border-radius: 0px 0px 20px 20px;
    padding: 10px 20px 20px 20px;
    background: #ffffff;
}
`
.replace(/\n/gs,'').replace(/\s\s/gs,' ').replace(/\s\s/gs,' ')
