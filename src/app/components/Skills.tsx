import React from 'react';

function Skills() {
    const skills = [
        "Digital Marketing",
        "Shopify",
        "Shopify",
        "HTML",
        "CSS",
        "Typescript",
        "React",
        "Nextjs",
    ];

    return (
        <div className="div">
            <h2 className="myskills">My Skills</h2>
            <div className="divv">
                {skills.map((skill, index) => (
                    <span className="span" key={index}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Skills;
