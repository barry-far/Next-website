import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder,<br></br> Scrum Master</h4>
                <h6>Karaj, Iran</h6>
                <h5>Mizegerd Digital Agency</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
            •	Spearheaded 110+ Agile sprints across web and mobile platforms, boosting client satisfaction by 40%.<br></br>
            •	Engineered onboarding frameworks, slashing ramp-up time by 50% for new team members.<br></br>
            •	Orchestrated backlog refinement and sprint planning, achieving 90%+ sprint goal success rate.

            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Scrum Master</h4>
                <h6>Peterborough, ON, Canada</h6>
                <h5>Accuparan Inc.</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
            •	Directed Agile delivery for a C#-based scientific application integrated with DLS hardware, reducing lead times by 30%.<br></br>
•	Instituted disaster-recovery protocols and automated pipelines, cutting response times by 40%.<br></br>
•	Mentored cross-functional teams, elevating velocity by 31% and enhancing collaboration.

            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
              <h4>Co-Founder, <br></br> Next.js Developer</h4>
              <h6>Sydney, Australia</h6>
                <h5>iVPN</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            •	Built and launched a Progressive Web App (PWA), improving mobile accessibility and decreasing load times by 40%, which enhanced user engagement.<br></br>
•	Improved SEO and performance through server-side rendering (SSR), leading to a 15% traffic boost from organic search in the first month.<br></br>

            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
              <h4>Scrum Master <br></br> (Co-op)</h4>
                <h6>Etobicoke, ON, Canada</h6>
                <h5>Vosyn AI</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            •	Facilitated sprint execution for 40+ developers on an AI-driven SaaS platform, driving a 35% productivity surge.<br></br>
•	Guided retrospectives to implement continuous improvements, amplifying team performance.<br></br>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
