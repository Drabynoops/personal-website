import React from 'react'
import Card from './Card'

export default function ProjectPage() {
    return (
        <div className="row component-body">
            <div className="col-lg-6 col-md-12">
                <Card
                    title="The thing you set your eyes upon"
                    content="That's right! This very website is a project unto itself! It is self-hosted on AWS as a means to show
                    that I have had the knowledge to do such things. In addition, it allows for future use of the many tools of AWS to add
                    features later to further expand my knowledge and functionality of the website."
                    technologiesUsed="HTML, CSS, Javascript, React, Bootstrap"
                    projectLink="https://github.com/Drabynoops/personal-website"
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
                    technologiesUsed="GameMaker Studio 1.4"
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
                    technologiesUsed="GameMaker Studio 1.4"
                    projectLink="https://mikescrew.itch.io/freq-show"
                />
            </div>
            <div className="col-lg-6 col-md-12">
                <Card
                    title="Untitled Database Project"
                    content="During my one-year co-op with Thomson Reuters, a co-worker and I were asked to help on a project with another department.
                    Without going into the purpose of the project, they needed a database created from the amalgamated data coming from several company
                    programs. This project was done with a custom built Python script that ran the functionality to combine the data, update the database,
                    download the database, etc. Everything else was done on AWS using multiple technologies."
                    technologiesUsed="DynamoDB, Lambda, Step Functions, Python"
                />
            </div>
            <div className="col-lg-6 col-md-12">
                <Card
                title="Untitled Angular Project"
                content="My second project while working for Thomson Reuters with the same team as the database project. We were assigned with taking an existing
                front-end written in Angular.js and making it interact with TR's backend cloud technologies. We learned the framework and the technologies as we
                did development on this project. As a result of this project, my teammate and I were kept beyond our original time. During this extended time I continued
                to work on the front end. Eventually, I convinced the team to convert to Angular 5 and rewrote the front end during another extension. When my time ended
                the project was handed on to a new co-op employee, who I trained."
                technologiesUsed="Angular.js, Angular 5, HTML, CSS, Typescript"
                />
            </div>
        </div>   
    )
}
