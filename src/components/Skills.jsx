import React from "react";

function Skills(){

const skills = [

"HTML",
"CSS",
"Bootstrap",
"JavaScript",
"jQuery",
"PHP",
"MySQL",
"SQL",
"React JS"

];

return(

<section className="skills">

<h2>Technical Skills</h2>

<div className="skills-grid">

{skills.map((skill,index)=>(
<div className="skill-card" key={index}>
{skill}
</div>
))}

</div>

</section>

)

}

export default Skills