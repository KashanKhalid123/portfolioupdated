import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./Skillsinput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        
        
      
        <SkillsInput
          title="Typescript"
          link="https://www.typescriptlang.org/"
        />
        
        <SkillsInput title="Python" link="https://www.python.org/" />

        
        <SkillsInput title="Nodejs" link="https://nodejs.org/en" />
        
        
        <SkillsInput
          title="HTML5"
          link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        />
        <SkillsInput
          title="CSS3"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <SkillsInput title="VS Code" link="https://code.visualstudio.com/" />
        
        <SkillsInput title="Git" link="https://git-scm.com/" />
        <SkillsInput title="Github" link="https://github.com/" />
       
        <SkillsInput title="Canva" link="https://www.canva.com/" />
        
       
        <SkillsInput title="Vercel" link="https://vercel.com/" />
        
      </div>
    </div>
  );
};

export default Skills;