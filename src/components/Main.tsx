import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profilePic from '../assets/images/profile.jpg'

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePic} alt="Tejaswini V" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/vtejaswini1705" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/tejaswini-v-15b851387/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Tejaswini V</h1>
          <p>Data Engineer & Analyst | 3+ Years Experience</p>
           <p>
            Skilled in SQL, Python, Tableau, Power BI, and Cloud (AWS/Azure). 
            Passionate about building data pipelines, analytics dashboards, and 
            delivering insights that drive smarter decisions.
          </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/vtejaswini1705" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/tejaswini-v-15b851387/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
