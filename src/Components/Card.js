import React from 'react'

export default function Card({title, content, projectLink, technologiesUsed, imageLink}) {

    return (
        <div className="project">
            {title && <h3 className="title">{title}</h3>}
            <div className="content col-12">
                {content}
            </div>
            <div className="bottom-card">
                {(technologiesUsed || projectLink) && <hr />}
                {technologiesUsed && <div className="col-12">Technologies Used: {technologiesUsed}</div>}
                {projectLink && <div className="col-12"><a href={projectLink}>Link to the project</a></div>}
            </div>
            
        </div>
    )
}
