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
        ]

        const data = {
            title: 'Free Betting Tips - Today',
            id: 'free-today',
            tips: datas
        }
        return (
            <template>
                <article>
                    <div className="border-heading" style="">
                        <h2 className="page-color" style="text-transform:capitalize;"><>{data.title}</></h2> 
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
                            <Map data={data.tips}>{TipSlice}</Map>
                        </div>
                    </div>
                </article>
            </template>
            
        )
    },
    async templateData({ storage, parentRef, props, done}){
        const data = {tips: []}
        return <template-data done={true}></template-data>
    }
})

export default Tips;