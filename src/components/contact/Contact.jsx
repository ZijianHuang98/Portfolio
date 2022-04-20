
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./contact.scss";

export default function Contact() {


  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h1>Get In Touch</h1>
        <h3>You can reach out me through email, phone calls, and  even Github and LinkedIn :)</h3>
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
                    <div className="itemContainer">
        <GitHubIcon fontSize="large"color="secondary"/>
            <span>https://github.com/ZijianHuang98</span>
            </div>
            <div className="itemContainer">
        <LinkedInIcon fontSize="large" color="primary"/>
            <span>www.linkedin.com/in/zhk2x</span>
            </div>
            <h3>Thank you so much for veiwing my website, hope you enjoy it </h3>
      </div>
    </div>
  );
}