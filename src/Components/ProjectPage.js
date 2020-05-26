import React from 'react'
import Card from './Card'

export default function ProjectPage() {
    return (
        <div className="row">
            <div className="col-lg-6 col-md-12">
                <Card
                    title="The thing you set your eyes upon"
                    content="That's right! This very website is a project unto itself! It is self-hosted on AWS as a means to show
                    that I have had the knowledge to do such things. In addition, it allows for future use of the many tools of AWS to add
                    features later to further expand my knowledge and functionality of the website. Frameworks used include React and
                    Bootstrap. If I had one criticism it's that my design sense could use some work."
                />
            </div>
            <div className="col-lg-6 col-md-12">
                <Card 
                    title="Mike's Trip (Fall 2016 UW Stout Game Jam)"
                    content="Mike's Trip was the first project I really participated in during my time at UW Stout.
                    Being the person on the team with the most experience at the time I was donned with the mantle
                    of 'lead programmer'.  During this project I helped with and handled a large brunt of the coding.
                    This included working on the AI of the boss, determining the direction of projectiles, and an (admittedly)
                    complicated system for determining hit detection. I was minorly involved in communication with the
                    artist."
                    projectLink="https://mikescrew.itch.io/mikes-trip"
                />
            </div>
            <div className="col-lg-6 col-md-12">
                <Card
                    title="Freq Show (Spring 2017 Global Game Jam)"
                    content="The second of my game jams after joining UW Stout. This project was done with the same team as Mike's Trip.
                    I stepped back from the role of lead programmer in this one both at the request of another team member who wanted the 
                    experience and at necessity as I had to leave early for work. This project, while not perfect, was very helpful in
                    learning state machines. That would have been a very useful concept for Mike's Trip! There are two seperate usages of
                    state machines in this game. One is the game state, where you toggle between different 'frequencies' (in accordance with
                    the game jam's theme) and the state machines of the enemies."
                    projectLink="https://mikescrew.itch.io/freq-show"
                />
            </div>
        </div>   
    )
}
