import React from 'react'
import { Link } from 'react-router-dom';
import IconLink from './IconLink'

export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-md fixed-top navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#links" aria-controls="links" aria-expanded="false" aria-label="Toggle naviation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <Link to="/">
                <div className="navbar-brand" style={{color: "white"}}>
                    Brendan Bryan Bard
                </div>
            </Link>
            <div className="collapse navbar-collapse" id="links"> 
                <div className="navbar-nav mr-auto">
                    <Link to="/projects" style={{ textDecoration: 'none' }}>
                        <h6 className="navbar navbar-nav nav-links">
                            Projects
                        </h6>
                    </Link>
                    <Link to="/resume" style={{ textDecoration: 'none' }}>
                        <h6 className="navbar navbar-nav nav-links">
                            Resume
                        </h6>
                    </Link>
                </div>
                    
                <div className="navbar-nav ml-auto">
                    <IconLink group="fas" icon="envelope" link="mailto: brendan.bard@gmail.com" />
                    <IconLink group="fab" icon="twitter-square" link="https://www.twitter.com/Drabynoops" />
                    <IconLink group="fab" icon="linkedin" link="https://www.linkedin.com/in/brendanbard" />
                    <IconLink group="fab" icon="github-square" link="https://github.com/Drabynoops" />
                </div>
            </div>
        </nav>
    )
}
