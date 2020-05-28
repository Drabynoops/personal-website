import React from 'react'
import { Link } from 'react-router-dom'

export default function Resume() {
    return (
        <div className="container component-body">
            <div className="row cover-letter">
                <div className="col">
                    <div>
                        I am an all-around programmer currently based out of Wisconsin. I offer practical experience
                        in software design, coding, testing and integration.  If I had to choose a skill set I have 
                        the most experience in it would be web development.
                    </div>
                    <br />
                    <div>
                        My primary passion in doing projects, much like this website, is to learn something new. 
                        Nothing excites me more than digging into something with only basic knowledge and growing as I become more familiar with it.
                        I find pleasure in projects that I have a lot of knowledge on when I can both apply that knowledge and learn something new.
                    </div>
                    <br />
                    <div>
                        My most recent experience is as an intern at Thomson Reuters. While there I used my knowledge to take a complex web application
                        that was written in AngularJS and give it enhancement, which included porting it to Angular's latest version (at the time). 
                        In addition, I refactored the code, improved it's quality and significantly decreased the complexity. I was recognized for exceeding
                        expectations on the project as asked to remain on the team beyond the completion of my initial internship.
                    </div>
                    <br />
                    <div>
                        I have been described as an innovative collaborator who is "detail-oriented, focused, and has a passion for excellence". My work in
                        computer science and my internship experience will allow me to quickly adapt to new environments and deliver results.
                    </div>
                    <br />
                    <div>
                        Free free to contact me using any of the social links in the top right corner. If you wish to contact me by email and the mailto
                        link isn't working for you the address to use is brendan.bard@gmail.com. I will try to respond to you as quickly as possible!
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <h3>Download the resume here: </h3>
                </div>
                <div className="col-3">
                    <h2>
                        <a href="\files\Bard.Brendan.Res.Software.WebDeveloper.pdf" download>PDF</a>
                    </h2>
                </div>
                <div className="col-3">
                    <h2>
                        <a href="\files\Bard.Brendan.Res.Software.WebDeveloper.docx" download>DOCX</a>
                    </h2>
                </div>
                <br />
            </div>
        </div>
        

    )
}
