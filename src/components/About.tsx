import React from 'react'
import './About.css'

const About: React.FC = () => {
    return (
        <section className='about-section-container'>
            <div className="project-description">
                <h2>What's Cravr?</h2>
                <p>Cravr is a web application built with TypeScript and React. Have you ever been hungry, but not exactly sure what you're craving? With Cravr, you can figure out what you're craving in seconds by answering a series of questions. Fill out the form, submit, and see beautifully curated recipe recommendations based on your search. Check out the <a href="" target="blank" rel="noreferrer">Spoonacular API</a> for more recipes.</p>
            </div>
            <h3>Team</h3>
            <div className="profiles">
                <article className="team-profile">
                    <h4>Tony Hsu</h4>
                </article>
                <article className="team-profile">
                    <h4>Ricardo Tovar</h4>
                </article>
                <article className="team-profile">
                    <h4>Eric Wang</h4>
                </article>
            </div>
        </section>
    )
}

export default About;