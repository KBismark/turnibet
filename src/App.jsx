import { createComponent } from "xolus";
import Head from './components/Head'
import Header from './components/TopHeader'
import HeroTips from "./components/HeroTip";
import { TipStyles } from "./components/TipSlice";
import AfterheroSideTips from "./components/AfterHeroSideTips";
import AfterheroContent from "./components/AfterHeroContent";
import Footer from "./components/Footer";

const App = createComponent({
    template({ storage, parentRef, props, init}){
        return (
            <template>
                <html lang="en" >
                    <Slot>{Head}</Slot>
                    <body style="margin:0px;">
                        <script><>{init()}</></script>
                        <script src="/assets/statestore.js"></script>
                        <script src="/assets/xolus.js"></script>
                        <script src="/assets/actions.bundle.js"></script>
                        <style><>{css}</></style>
                        <style><>{TipStyles}</></style>
                        <Slot>{Header}</Slot>
                        <main>
                            <section id="hero" >
                                <div class="hero-content">
                                    
                                    <div className="over-tablet-screen d-elements d-flex" >
                                        <svg  xmlns="http://www.w3.org/2000/svg"  width="244"  height="244"  viewBox="0 0 24 24"  fill="none"  stroke="rgba(43,43,43,0.2)"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 21l3.5 -2l-4.5 -4l2 -4.5" /><path d="M7 6l2 4l5 .5l4 2.5l2.5 3" /><path d="M4 20l5 -1l1.5 -2" /><path d="M15 7a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><path d="M9.5 5a.5 .5 0 1 0 0 -1a.5 .5 0 0 0 0 1z" fill="currentColor" /></svg>
                                        <div style="justify-content:flex-end;" className="d-flex">
                                            <svg  xmlns="http://www.w3.org/2000/svg"  width="174"  height="174"  viewBox="0 0 24 24"  fill="none"  stroke="rgba(43,43,43,0.2)"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12a8 8 0 0 0 8 4" /><path d="M7.5 13.5a12 12 0 0 0 8.5 6.5" /><path d="M12 12a8 8 0 0 0 -7.464 4.928" /><path d="M12.951 7.353a12 12 0 0 0 -9.88 4.111" /><path d="M12 12a8 8 0 0 0 -.536 -8.928" /><path d="M15.549 15.147a12 12 0 0 0 1.38 -10.611" /></svg>
                                        </div>
                                    </div>
                                    <div id="hero-login" className="over-tablet-screen d-block hero-login">
                                            <div className="over-tablet-screen">
                                                <div className="svg">
                                                   
                                                    
                                                </div>
                                                <h2>
                                                    VIP is free until you win. Log in now.
                                                </h2>
                                                <form style="width:100%" action="/viplogin" method="post">
                                                    <input required name="email" type="email" placeholder="eg. example@email.com" />
                                                    <input required minLength="8" min="8" name="password" type="password" placeholder="password" />
                                                    <button type="submit" onClick="onJoinVIP" >Log in as VIP member</button>
                                                </form>
                                            </div>

                                    </div>
                                    <h1 id="hero-text" class="head-font" style="position:relativ;" >
                                        <div> <span>Boost</span> your <span className="page-color" >WINNINGS</span></div> 
                                        <div className="last" >best sports betting tips</div>
                                    </h1>
                                    <Slot>{HeroTips}</Slot>
                                </div>
                            </section>

                            <section id="after-hero">
                                <Slot>{AfterheroContent}</Slot>
                                <Slot>{AfterheroSideTips}</Slot>
                            </section>
                        </main>
                        <Slot>{Footer}</Slot>
                        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                    </body>
                </html>
            </template>
            
        )
    },
    async templateData({ storage, parentRef, props, done}){
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
    background-image: url(/assets/images/hero/hero2.jpg);
}
.white-bg{
    background-color: #ebebeb;
    color: #242424;
}
.white-inactive{
    background-color: rgba(43,43,43,0.3);
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

#hero-login{
    display:block;
    margin: 2.5% 2% 0px 0px;
    position: absolute;right:0;
    top:0;bottom:0;
    width: 450px;
}
#hero-login form input{
    width: 100%;
    padding: 11px 15px;
    background-color:rgba(43,43,43,0.3);
    outline:none;
    border:1px solid rgba(43,43,43,0.8);
    border-radius: 10px;
    margin-bottom: 20px;
    font-size:17px;
    font-weight:500;
    color:#ebebeb;
}
#hero-login form div{
    width: 100%;
    display:flex;
    justify-content:center;
}
#hero-login form button{
    width: 100%;
    text-align:center;
    max-width:100%;
}
.hero-login-head .svg{
    padding: 10px;
    border-radius: 6px;
    background-color: rgba(43,43,43,0);
    margin-right: 10px;
}
.d-elements{
    position: absolute;right:0;top:0;bottom:0;margin: 0px 1%; 0 0;width: 750px;flex-direction:column;justify-content:space-between;
}
#hero-text .last{
    font-size: 85%;
}
#after-hero{
    margin: 1% 2.5%;
    display: flex;
    flex-flow: wrap;
    justify-content:space-around;
}
.border-heading{
    color: #13934f;
    padding: 7px 10px 7px 20px;
    border-left: 4px solid #13934f;
    border-radius: 3px 0px 0px 3px;
    background-color:#13934f05;
}
@media screen and (max-width: 1090px){
    #hero-login,#hero-login.d-block,#hero-login.d-block.over-tablet-screen,.hero-login{
        display:none;
    }
}
@media screen and (max-width: 860px){
    #after-hero{
        margin: 1% 0;
    }
    #hero-login,.hero-login{
        display:none;
    }
}
@media screen and (max-width: 770px){
    #hero-text{
        text-align:center;
    }
    #hero-text .last{
        font-size: 50%;
    }
    #hero-login,.hero-login{
        display:none;
    }
}
@media screen and (max-width: 450px){
    button.white-inactive{
        background-color: rgba(43,43,43,0.5);
    }
    .white-inactive{
        background-color: rgba(43,43,43,0.5);
    }
    #after-hero{
        margin: 150px 0px 1%;
    }
    .border-heading{
        border-left: none;
        background-color:#13934f17;
    }
}
`
.replace(/\n/gs,'').replace(/\s\s/gs,' ').replace(/\s\s/gs,' ')