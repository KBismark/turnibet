import { createComponent } from "xolus";

const Header = createComponent({
    template({ storage, parentRef, props}){
        return (
            <template>
                <header>
                    <div class="brand-logo">
                        <a href="/" class="head-font nonlinkable">turniBets</a>
                    </div>
                    <nav style="" className="horizontal over-tablet-screen">
                        <ul>
                            <li>
                                <button style="background-color: rgba(43,43,43,0.6);" onClick="onClickMe" >Previous Tips</button>
                            </li>
                            <li>
                                <button onClick="onClickMe" >Join VIP</button>
                            </li>
                            
                        </ul>
                    </nav>
                    <div className="under-tablet-screen">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="36"  height="36"  viewBox="0 0 24 24"  fill="none"  stroke="#ffffff"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16" /><path d="M7 12h13" /><path d="M10 18h10" /></svg>
                    </div>
                </header>
            </template>
            
        )
    },
    async templateData({ storage, parentRef, props, done}){
        return <template-data done></template-data>
    }
})

export default Header;



