"use client";
export const DesignSkills = () => {
  return (
    <div className="section skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">Design Skills</div>
        </div>
        <div className="skills">
          <ul>
            <li>
              <div className="name">Web Design</div>
              <div className="progress">
                <div className="percentage" style={{ width: "70%" }}>
                  <span className="percent">70%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Illustrations</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Photoshop</div>
              <div className="progress">
                <div className="percentage" style={{ width: "75%" }}>
                  <span className="percent">75%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Graphic Design</div>
              <div className="progress">
                <div className="percentage" style={{ width: "80%" }}>
                  <span className="percent">80%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export const CodingSkills = () => {
  const skills = [
    { id: 1, title: "JS / TS", value: 100 },
    { id: 2, title: "SQL", value: 90 },
    { id: 3, title: "Python", value: 75 },
    { id: 4, title: "Solidity", value: 70 },
    { id: 5, title: "Rust", value: 40 },
  ];
  return (
    <div className="section skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">Coding Skills</div>
        </div>
        <div className="skills circles">
          <ul>
            {skills.map((skill) => (
              <li key={skill.id}>
                <div className="name">{skill.title}</div>
                <div className={`progress p${skill.value}`}>
                  <div
                    className="percentage"
                    style={{ width: `${skill.value}%` }}
                  >
                    <span className="percent">{skill.value}%</span>
                  </div>
                  <span>{skill.value}%</span>
                  <div className="slice">
                    <div className="bar" />
                    <div className="fill" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export const Knowledge = () => {
  return (
    <div className="section skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">Knowledgable Languages</div>
        </div>
        <div className="skills list">
          <ul>
            <li>
              <LanguageHighlight src="/images/logos/javascript-logo.svg">
                Javascript / Typescript (Expert)
              </LanguageHighlight>
            </li>
            <li>
              <LanguageHighlight src="/images/logos/nodejs-logo.svg">
                NodeJS / Express (Expert)
              </LanguageHighlight>
            </li>
            <li>
              <LanguageHighlight src="/images/logos/database-logo.svg">
                SQL / NoSQL (Intermediate)
              </LanguageHighlight>
            </li>
            <li>
              <LanguageHighlight src="/images/logos/python-logo.svg">
                Python / Django (Intermediate)
              </LanguageHighlight>
            </li>
            <li>
              <LanguageHighlight src="/images/logos/solidity-logo.svg">
                Solidity (Beginner)
              </LanguageHighlight>
            </li>
            <li>
              <LanguageHighlight src="/images/logos/linux-logo.svg">
                Linux Systems (Beginner)
              </LanguageHighlight>
            </li>
            <li>
              <LanguageHighlight src="/images/logos/web-dev-logo.svg">
                HTML / CSS (Expert)
              </LanguageHighlight>
            </li>
            <li>
              <LanguageHighlight src="/images/logos/rust-logo.svg">
                Rust (Beginner)
              </LanguageHighlight>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

import { Fragment } from "react";
import { LanguageHighlight } from "@/ui/components";
const Skills = ({
  design = true,
  coding = true,
  knowledge = true,
}) => {
  return (
    <Fragment>
      <div className="skills section_ pt-4" id="skills">
      {coding && <CodingSkills />}
      {design && <DesignSkills />}
      {knowledge && <Knowledge />}
      </div>
    </Fragment>
  );
};

export default Skills;