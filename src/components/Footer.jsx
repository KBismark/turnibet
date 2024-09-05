import { createComponent } from "xolus";

const Footer = createComponent({
    template({ storage, parentRef, props}){
        const xml = 'http://www.w3.org/2000/svg'
        return (
            <template>
                <footer id="footers">
                    <section className="first-sect">
                        <h2 className="page-color" >Pay Only After A Win. Join Our VIP Winners</h2>
                        <div className="d-flex j-cn" style="margin-top: 20px;">
                            <button onClick="onJoinVIP" >Become a VIP member</button>
                        </div>
                    </section>
                    <section>
                        <div className="get-social">
                            <h2 className="page-color" >Get In Touch</h2>
                            <div className="d-flex j-cn">
                                <ul class="link-list d-flex" style='display:block;'>
                                    
                                    <li>
                                        <a href="mailto:" style="align-items:center;" className="d-flex j-cn page-white-color">
                                            <div style="font-size: 18px;margin-left:5px;" className="page-white-color nonlinkable">Email: invisibletips@gmail.com</div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/" style="align-items:center;margin-top:5px;background:#000;border-radius:5px;padding:5px 0px;" className="d-flex j-cn nonlinkable">
                                            <svg  xmlns={xml}  width="28"  height="36"  viewBox="0 0 24 24"  fill="none"  stroke="#ebebeb"  strokeWidth="1"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                                            <div style="font-size: 18px;margin-left:5px;" className="page-white-color nonlinkable">@invisibletipster</div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div style="color:#ebebeb;text-align:center;margin:1rem 10px;font-size:90%">
                            <div>Copyright &copy; 2024. All rights reserved</div>
                        </div>
                    </section>
                    <style><>{css}</></style>
                </footer>
            </template>
            
        )
    },
    async templateData({ storage, parentRef, props, done}){
        return <template-data done={true}></template-data>
    }
})

export default Footer;


const css = `
#footers{
    margin-top:3.3rem;
    display:flex;justify-content:space-around;
    flex-flow: wrap;
}
#footers section{
    margin:1.3rem 10px 0px 10px;
}
#footers h2{
    margin-bottom: 0px;text-align:center;
}
`