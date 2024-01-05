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
                <div className="date">2011 - 2012</div>
                <div className="name">Front-end Developer - Google Inc</div>
                <p>
                  Duis ipsum ligula, feugiat nec auctor vitae, porta sit amet
                  urna. Praesent ex lorem, porta nec aliquet eu, ullamcorper
                  eget nibh.
                </p>
              </div>
              <div className="resume-item">
                <div className="date">2009 - 2010</div>
                <div className="name">Senior Developer - Abc Inc</div>
                <p>
                  Morbi nulla arcu, pellentesque sed egestas in, tempor eget
                  felis. Nullam tincidunt augue in leo feugiat, quis interdum
                  nisi sollicitudin.
                </p>
              </div>
            </div>
          </div>
          <div className="col col-md">
            <div className="title">
              <div className="title_inner mb-1">Education</div>
            </div>
            <div className="resume-items">
              <div className="resume-item">
                <div className="date">2007 - 2008</div>
                <div className="name">Art University of New York</div>
                <p>
                  Morbi nulla arcu, pellentesque sed egestas in, tempor eget
                  felis. Nullam tincidunt augue in leo feugiat, quis interdum
                  nisi sollicitudin.
                </p>
              </div>
              <div className="resume-item">
                <div className="date">2004 - 2006</div>
                <div className="name">Front-end Course</div>
                <p>
                  Duis ipsum ligula, feugiat nec auctor vitae, porta sit amet
                  urna. Praesent ex lorem, porta nec aliquet eu, ullamcorper
                  eget nibh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;