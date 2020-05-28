import React from 'react'
import profilePicture from '../images/profile.jpg'

export default function Home() {
    return (
        <>
            <div className="row component-body">
                    <div className="col-lg-8 col-md-12">
                        <h3>This is the page about me!</h3>
                        <div>
                            Ever since I was young I've had an interest in technology. Eventually manifested itself in 
                            me taking my first programming class while in high school. By the time I left I had learned
                            BASIC, Visual Basic, and some web-based programming. I was set on pursuing what I believed 
                            was the degree to accomplish my goals. Computer Science.
                        </div>
                        <br />
                        <div>
                            After some personal issues that led to me transferring schools a couple of times I discovered
                            that University of Wisconsin Stout had a Game Design and Development program and I applied with
                            great enthusiasm. My time there was fundamental as it allowed me the oppurtunity to participate
                            in several games. It is also where I was required to take my co-op program where I got my
                            professional experience.
                        </div>
                        <br />
                        <div>
                            Towards the end of my time at UW Stout and the time after I've had some struggles with depression.
                            It was as a result of this that I stayed away from the thing I loved for so long. I even began to 
                            doubt if it really was the field for me.  However, with the support of my friends, family, and health
                            professinoals I have decided that this feeling will pass.  I will continue to search for a place somewhere
                            I can use the skills I've developed and continue to improve myself.
                        </div>
                        <br />
                        <div>
                            On a less serious note, I have been greatly influenced by several forms of media. In particular, I have a 
                            great interest in the stories of anime and video games. Please start a conversation about time travel with me!
                            If you'd like to talk about something more "professional" I also like talking about Clean Code by Robert C. Martin.
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <img className="profile" src={profilePicture} alt="Profile"/>
                    </div>
            </div>
        </>
    )
}
