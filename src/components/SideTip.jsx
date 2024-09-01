import { createComponent } from "xolus";
import TipSlice from "./TipSlice";

const Tips = createComponent({
    template({ storage, parentRef, props}){
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
        ];

        const data = {
            title: 'Three Way Tips',
            id: 'three-way',
            today: datas,
            previous: datas
        }

        return (
            <template>
                <article>
                    <div className="bg-heading" style="flex-directio:column;align-items: center;">
                        <h2 className="page-color" style="text-align:center;text-transform:uppercase;"><>{data.title}</></h2>
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
                    </div>
                </article>
            </template>
            
        )
    },
    async templateData({ storage, parentRef, props, done}){
        const data = {previous: [], today: []}
        return <template-data done={true}></template-data>
    }
})

export default Tips;