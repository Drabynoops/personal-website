import React from 'react'
import profilePicture from '../images/profile.jpg'

export default function Home() {
    return (
        <>
            <div className="row about">
                <div className="col-6">
                    <div className="col-10 offset-1">
                        <h3> Welcome to my website!</h3>
                        <div>
                            This is one of the many web-based homes of Brendan Bard.
                        </div>
                        <br />
                        <div>
                            I am an all-around programmer currently based out of Wisconsin. However, if
                            I had to choose a skill set I have the most experience in it would be web development.
                            However, this is almost strictly related to the code based side of things. Design is 
                            not my forte.
                        </div>
                        <br />
                        <div>
                            My primary passion in doing projects, much like this website, is to learn something new. 
                            Nothing excites me more than digging into something with only basic knowledge and growing as I become more familiar with it.
                        </div>
                        <br />
                        <div>
                            If you are visiting this website in it's early stages, you will find that I'm missing a location for my resume and
                            the projects I've worked on. As such, it is pretty much a glorified self-indulgence. However, it's still better than
                            it's previous state.
                        </div>
                        <br />
                        <div>
                            Free free to contact me using any of the social links in the top right corner. If you wish to contact me by email and the mailto
                            link isn't working for you the address to use is brendan.bard@gmail.com. I will try to respond to you as quickly as possible!
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <img className="profile" src={profilePicture} alt="Profile"/>
                </div>
            </div>
        </>
    )
}
