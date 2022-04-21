
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "./contact.scss";


export default function Contact() {


  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2 className='header'>Thank you so much for visiting my website, hope you enjoy it </h2>
        <hr />
        <h1>Get in touch</h1>
        {/* <div className="itemContainer">
        <HomeIcon/>
            <span>7782 W Bruno Ave, St.Louis, MO, 63117</span>
            </div>

                    <div className="itemContainer">
                        <AlternateEmailIcon className="icon" />
                        <span>huangxiaobai98@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <PhoneIphoneIcon className="icon" />
                        <span>314-532-0668</span>
                    </div> */}
        <div className="info">
          <h3>You can reach out me through email, phone calls, and  even Github and LinkedIn :)</h3>
        </div>

        <div className="itemContainer">
          <GitHubIcon  color="secondary" onClick={() => window.open('https://github.com/zijian98')} className="icon" sx={{ fontSize: 50 }}/>
          <LinkedInIcon  color="primary" onClick={() => window.open('https://www.linkedin.com/in/zhk2x/')} className="icon" sx={{ fontSize: 50 }}/>
          <EmailIcon className="icon" onClick={() => window.open('mailto:jessehuang05@yahoo.com')} sx={{ fontSize: 50 }}/>
          <LocalPhoneIcon className="icon"  onClick={() => window.open('tel:314-532-0668')} sx={{ fontSize: 50 }}/>
          
        </div>

      </div>
    </div>
  );
}