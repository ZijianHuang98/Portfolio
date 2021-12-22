import "./topbar.scss"
import EmailIcon from '@mui/icons-material/Email';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Zijian</a>
                    <div className="itemContainer">
                        <InsertEmotiIcon className="icon" />
                        <span>+1 314 532 0668</span>
                    </div>
                    <div className="itemContainer">
                        <EmailIcon className="icon" />
                        <span>jessehuang05@yahoo.com</span>
                    </div>
                </div>
                <div className="right">

                </div>
            </div>
        </div>
    )
}
