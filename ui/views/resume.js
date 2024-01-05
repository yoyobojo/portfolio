const Resume = () => {
  return (
    <div className="section resume section_" id="resume">
      <div className="content">
        <div className="cols">
          <div className="col col-md">
            <div className="title">
              <div className="title_inner mb-1">Experience</div>
            </div>
            <div className="resume-items">
              <div className="resume-item active">
                <div className="date">Aug. 2022 - Present</div>
                <div className="name">Founder & Software Engineer | Suave Tech Solutions</div>
                <ul className="dotted-list">
                  <li>Managing a team of 4 developers while leading all sales and design pitches</li>
                  <li>Built unique websites and CRUD apps with technologies including Django, Flask, VueJS, AngularJS on AWS web services</li>
                  <li>Designed 20+ interactive wireframes and mockups using Sketch and InVision of which 10+ were used</li>
                </ul>
              </div>
              <div className="resume-item">
                <div className="date">June 2021 - Aug. 2022</div>
                <div className="name">Consultant & Software Engineer | IBM iX</div>
                <ul className="dotted-list">
                  <li>Managing a team of 4 developers while leading all sales and design pitches</li>
                  <li>Built unique websites and CRUD apps with technologies including Django, Flask, VueJS, AngularJS on AWS web services</li>
                  <li>Designed 20+ interactive wireframes and mockups using Sketch and InVision of which 10+ were used</li>
                </ul>
              </div>
              <div className="resume-item">
                <div className="date">2009 - 2010</div>
                <div className="name">Lead Front-End Developer | Raeri</div>
                <ul className="dotted-list">
                  <li>Managing a team of 4 developers while leading all sales and design pitches</li>
                  <li>Built unique websites and CRUD apps with technologies including Django, Flask, VueJS, AngularJS on AWS web services</li>
                  <li>Designed 20+ interactive wireframes and mockups using Sketch and InVision of which 10+ were used</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col-md">
            <div className="title">
              <div className="title_inner mb-1">Education</div>
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
                <div className="date">March 2020 - March 2021</div>
                <div className="name">NYU Entrepreneurship Club</div>
                <p>
                  B.A. in Economics and a Joint-Minor in Computer Science and 
                  Mathematics from New York University's College of Arts and Sciences
                </p>
              </div>
              <div className="resume-item">
                <div className="date">2004 - 2006</div>
                <div className="name">NYU Men’s Varsity Soccer</div>
                <ul className="dotted-list">
                  <li>Competed in the NCAA Division III and NCAA National Tournament, achieving UAA All-Academic</li>
                  <li>Dedicated over 35 hours a week to practice, lifting, team meetings, traveling, and competitions nation-wide</li>
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