import { createComponent } from "xolus";


const TipSlice = createComponent({
    template({ storage, parentRef, props, index}){
        return (
            <template>
                <div className={`tip-container ${props.status.toLowerCase()}`}>
                    <div className="tip" >
                        <div style="width: 60%;">
                            <div><>{props.teams.home}</> <strong> vs </strong> <>{props.teams.away}</></div>
                        </div>
                        <div style="width: 20%;">
                            <div><>{props.tip}</></div>
                        </div>
                        <div style="width: 20%;">
                            <div className="status"><>{props.status}</></div>
                        </div>
                    </div>
                    <div className="tip-info">
                        <div className="tip-point">
                            <span className="point league"></span>
                            <span><>{props.league}</></span>
                        </div>
                        <div className="tip-point">
                            <span className="point time"></span>
                            <span><>{props.startTime}</></span>
                        </div>
                    </div>
                </div>
            </template>
            
        )
    },
    async templateData({ storage, parentRef, props, done}){
        return <template-data done={true}></template-data>
    }
})

export default TipSlice;

export const TipStyles = `
.tip-container{
    margin-bottom: 7px;
}
.tip-container.won{
    border-left: 3px solid #09bb5d;
}
.tip-container.won .status{
    color: #09bb5d;
}
.tip-container.lost{
    border-left: 3px solid rgb(187, 45, 1);
}
.tip-container.lost .status{
    color: rgb(187, 45, 1);
}
.tip-container.pending{
    border-left: 3px solid rgb(53, 78, 6);
}
.tip-container.pending .status{
    color: rgb(53, 78, 6);
}
.tip-container.live{
    border-left: 3px solid rgb(9, 4, 90);
}
.tip-container.live .status{
    color: rgb(9, 4, 90);
}
.tips .tip-head{
    font-weight: 700;
    font-size: 20px;
}
.tip{
    display:flex;
    font-weight: 500;
    font-size: 16px;
    border-top: 1px solid #eee;
}
.tip>div{
    padding: 10px 15px;
}
.tip .status{
    text-transform: capitalize;
    font-weight: 600;
    margin-right: 5px;
}
.tip-info{
    display:flex;
    align-items: center;
    padding: 5px 15px
}
.tip-info .tip-point{
    display:flex;
    align-items: center;
    font-size: 13px;
    margin-right: 25px;
}
.tip-point .point{
    width: 8px; height: 8px;
    border-radius: 50%;
    margin-right: 7px;
}
.tip-point .point.league{
    background: rgb(231, 136, 11);
}
.tip-point .point.league+span{
    text-transform: capitalize;
}
.tip-point .point.time{
    background: rgb(9, 4, 90);
}
`.replace(/\n/gs,'').replace(/\s\s/gs,' ').replace(/\s\s/gs,' ')
