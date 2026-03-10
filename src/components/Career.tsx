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

          {/* Education Block */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications</h4>
                <h5>University of Bangalore</h5>
              </div>
              <h3>2021 - 2024</h3>
            </div>
            <p>
              Completed my BCA at SB College of Management Studies. Built a strong foundation in computer science, programming, and completed hands-on cloud computing training with AWS, Azure, and Google Cloud.
            </p>
          </div>

          {/* Training Block */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Trainee (MERN)</h4>
                <h5>Entri Elevate & Illinois Tech US</h5>
              </div>
              <h3>2024 - 2025</h3>
            </div>
            <p>
              Engineered backend services and APIs utilizing Node.js and MongoDB. Implemented version control and API testing workflows with Git and Postman while mastering responsive web design.
            </p>
          </div>

          {/* Project Block */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Project</h4>
                <h5>CricTrackerPro</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed a live cricket score application delivering real-time match updates using third-party sports APIs. Built dynamic UI with React.js and Tailwind, secured with Firebase, and managed database operations with Node.js and MongoDB.
            </p>
          </div>

          {/* Current Role Block */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Administrator</h4>
                <h5>Kadambur English Medium School</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Managing and maintaining the school's IT infrastructure. Providing technical support, troubleshooting hardware and software issues, and ensuring smooth daily technological operations for the past 7 months.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;