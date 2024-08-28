import { createComponent } from "xolus";
import Message from "./components/Message";
import DefaultMessage from './components/DefaultMessage'
import Head from './components/Head'
import Header from './components/TopHeader'
import HeroTips from "./components/HeroTip";
import { TipStyles } from "./components/TipSlice";

const App = createComponent({
    template({ storage, parentRef, props, init}){
        let ref = useRef(storage);
        const {username} = props;
        return (
            <template>
                <html lang="en" >
                    <Slot>{Head}</Slot>
                    <body>
                        <script><>{init()}</></script>
                        <script src="/assets/xolus.js"></script>
                        <script src="/assets/actions.bundle.js"></script>
                        <style><>{css}</></style>
                        <style><>{TipStyles}</></style>
                        <Slot>{Header}</Slot>
                        <main>
                            <section id="hero" >
                                <div class="hero-content">
                                    <h1 id="hero-text" class="head-font">
                                        <div> <span>Boost</span> your <span className="page-color" >EARNINGS</span></div> 
                                        <div style="font-size:85%;">best sports betting tips</div>
                                    </h1>
                                    <Slot>{HeroTips}</Slot>
                                </div>
                            </section>
                            <Slot props={{name: username}}>
                                {username ? Message : DefaultMessage}
                            </Slot>
                            <br/>
                            <button onClick="onClickMe" >Click on me <>{username}</></button>
                        </main>
                    </body>
                </html>
            </template>
            
        )
    },
    async templateData({ storage, parentRef, props, done}){
        const {username} = props;
        return <template-data done></template-data>
    }
})

export default App;


const css = `
.page-color{
    color: #13934f;
}
.page-white-color{
    color: #ebebeb;
}
#hero{
    background-image: url(/assets/images/hero/hero.jpg);
}
button{
    background-color: #13934f;
    color: #ebebeb;
    font-weight: 600;
    text-align: center;
    padding: 12px 25px;
    border-radius: 90px;
    outline: none;
    border: none; 
    cursor: pointer;
    font-size: 17px;
    max-width: 320px;
}
button:hover{
    background-color: #09bb5d;
}
button.white-bg{
    background-color: #ebebeb;
    color: #242424;
}
button.white-bg:hover{
    background-color: #ffffff;
}
button.white-inactive{
    background-color: rgba(43,43,43,0.3);
}
`
.replace(/\n/gs,'').replace(/\s\s/gs,' ').replace(/\s\s/gs,' ')