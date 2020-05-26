import React from 'react'

export default function Card({title, content, projectLink, imageLink}) {

    return (
        <div className="project">
            {title && <h3 className="title">{title}</h3>}
            <div className="content col-12">
                {content}
            </div>
            {/*Here will go technologies used. Supplementary info*/}
            {projectLink && <a href={projectLink}>Link to the project</a>}
        </div>
    )
}
