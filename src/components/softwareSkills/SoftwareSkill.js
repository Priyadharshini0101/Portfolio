import React from "react";
import "./SoftwareSkill.scss";
import cLogo from '../../assets/stack/C.svg';
import cppLogo from '../../assets/stack/Cpp.svg';
import htmlLogo from '../../assets/stack/HTML.svg';
import javaLogo from '../../assets/stack/Java.svg';
import cssLogo from '../../assets/stack/CSS.svg';
import jsLogo from '../../assets/stack/Javascript.svg';
import bootstrapLogo from '../../assets/stack/Bootstrap.svg';
import lessLogo from '../../assets/stack/Less.svg';
import sassLogo from '../../assets/stack/Sass.svg';
import androidLogo from '../../assets/stack/Android.svg';
import kotlinLogo from '../../assets/stack/Kotlin.svg';
import mysqlLogo from '../../assets/stack/My SQL.svg';
import reactLogo from '../../assets/stack/React JS.svg';
import tailwindCssLogo from '../../assets/stack/Tailwind CSS.svg';
import reduxLogo from '../../assets/stack/Redux.svg';
import typescriptLogo from '../../assets/stack/Typescript.svg'
import materialUILogo from '../../assets/stack/Material UI.svg'
import firebaseLogo from '../../assets/stack/Firebase.svg'
import githubLogo from '../../assets/stack/Github.svg';
import gitLogo from '../../assets/stack/Git.svg'

const skillsSection = {
  title: "Tech Stack",
  subTitle: "Passionate developer eager to learn, grow, strengthen technical skills",
  skills: [
  
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C",
      imgSrc:cLogo,
    },
    {
      skillName: "C++",
      imgSrc:cppLogo,
    },
    {
      skillName: "Java",
      imgSrc:javaLogo,
    },
    {
      skillName: "Android",
      imgSrc:androidLogo,
    },
    {
      skillName:"Kotlin",
      imgSrc:kotlinLogo,
    }

   ,
    {
      skillName: "HTML5",
      imgSrc: htmlLogo,
    },
    {
      skillName: "CSS3",
      imgSrc:cssLogo,
    },
    {
      skillName: "Javascript",
      imgSrc: jsLogo,
    },
    
    {
      skillName: "Bootstrap",
      imgSrc:bootstrapLogo,
    },
     
    {
      skillName: "Less",
      imgSrc: lessLogo,
    },
    
    {
      skillName: "Sass",
      imgSrc:sassLogo,
    },
    {
      skillName: "React JS",
      imgSrc:reactLogo,
    },
    {
      skillName: "Tailwind CSS",
      imgSrc:tailwindCssLogo,
    },
    {
      skillName: "Redux",
      imgSrc: reduxLogo,
    },
    {
      skillName: "Typescript",
      imgSrc:typescriptLogo,
    },
    {
      skillName: "Material UI",
      imgSrc: materialUILogo,
    },
   
     
    {
      skillName: "My SQL",
      imgSrc:mysqlLogo,
    },
    {
      skillName: "Firebase",
      imgSrc:firebaseLogo,
    },
   
   
  
    {
      skillName: "Git",
      imgSrc:gitLogo,
    },
    {
      skillName: "Github",
      imgSrc:githubLogo,
    },
   
  ],
  display: true // Set false to hide this section, defaults to true
};
export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <img className="stack"  alt={skills.skillName} src={skills.imgSrc}></img>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
