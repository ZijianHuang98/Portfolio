import "./topbar.scss"
import {EmojiEmotions,Email} from "@material-ui/icons"

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Zijian</a>
                    <div className="itemContainer">
                        < EmojiEmotions className="icon" />
                        <span>+1 314 532 0668</span>
                    </div>
                    <div className="itemContainer">
                        <Email className="icon" />
                        <span>jessehuang05@yahoo.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
