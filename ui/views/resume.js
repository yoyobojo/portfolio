const Resume = () => {
  return (
    <div className="section resume section_" id="resume">
      <div className="content pt-4">
        <div className="cols pt-4">
          <div className="col col-md">
            <div className="title">
              <div className="title_inner mb-2">Experience</div>
            </div>
            <div className="resume-items">
              <div className="resume-item active">
                <div className="date">Aug. 2022 - Present</div>
                <div className="name">Founder & Software Engineer | Suave Tech Solutions</div>
                <ul className="dotted-list">
                  <li>Managing a team of 4 developers while leading all sales and design pitches</li>
                  <li>Built unique websites and CRUD apps with technologies including Django, Flask, VueJS, React, and Solidity</li>
                  <li>Consulted for clients ranging from scalable AI solutions using WebRTC P2P networking all the way to writing extensive documentation for how codebases should function and why</li>
                </ul>
              </div>
              <div className="resume-item">
                <div className="date">June 2021 - Present</div>
                <div className="name">Founder & Software Engineer | DataEarn</div>
                <ul className="dotted-list">
                  <li>Architected a universal parser to clean and intepret JSON, HTML, CSV data from various platforms like TikTok</li>
                  <li>Built NextTS app for users to view their collected personal data and be able to monetize it</li>
                  <li>Designed 20+ interactive wireframes and mockups using Sketch and InVision of which 10+ were used</li>
                </ul>
              </div>
              <div className="resume-item">
                <div className="date">June 2021 - Aug. 2022</div>
                <div className="name">Consultant & Software Engineer | IBM iX</div>
                <ul className="dotted-list">
                  <li>Built a dashboard with ReactJS and Express API framework to manage thousands of individual's sensitive healthcare data</li>
                  <li>Collaborated with and pitched to local governments/clients on new features of the dashboard</li>
                  <li>Worked in a small team within an Agile framework to using Confluence/Jira to tackle tasks effectively and efficiently</li>
                </ul>
              </div>
              <div className="resume-item">
                <div className="date">Sept. 2018 - Dec. 2020</div>
                <div className="name">Lead Front-End Developer | Raeri</div>
                <ul className="dotted-list">
                  <li>Developed website with HTML/CSS purposed for relaunch as presented on Bloomsburg’s Businessweek</li>
                  <li>Created an admin dashboard using AngularJS and NodeJS's Express for clients to check logistic statistics live</li>
                  <li>Presented new user interface design to C-level board that helped increase marketing ROI on website by 20%</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col-md">
            <div className="title">
              <div className="title_inner mb-2">Education</div>
            </div>
            <div className="resume-items">
              <div className="resume-item">
                <div className="date">Sept. 2017 - May 2021</div>
                <div className="name">New York University</div>
                <p>
                  B.A. in Economics and a Joint-Minor in Computer Science and 
                  Mathematics from New York University's College of Arts and Sciences
                </p>
              </div>
            </div>
            <div className="title mt-4 pt-4">
              <div className="title_inner mb-1">Extracurricular</div>
            </div>
            <div className="resume-items">
              <div className="resume-item">
                <div className="date">Sept. 2018 - March 2021</div>
                <div className="name">Founder | NYU Blockchain Club</div>
                <p>
                  Co-founded the club to shed light on the possibilities blockchain 
                  technology brings to the digital realm and financial sector
                </p>
              </div>
              <div className="resume-item">
                <div className="date">Jan. 2018 - March 2021</div>
                <div className="name">Member | Quantitative Finance Society</div>
                <p>
                  Discussed and meeting about finance-related topics and issues, 
                  as well as cryptocurrencies, twice a week
                </p>
              </div>
              <div className="resume-item">
                <div className="date">Aug. 2017 - May 2019</div>
                <div className="name">Goalkeeper | NYU Men’s Varsity Soccer</div>
                <ul className="dotted-list">
                  <li>
                    Competed in the NCAA Division III and NCAA 
                    National Tournament, achieving UAA All-Academic
                  </li>
                  <li>
                    Dedicated over 35 hours a week to practice, lifting, 
                    team meetings, traveling, and competitions nation-wide
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;