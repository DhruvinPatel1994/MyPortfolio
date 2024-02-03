// About.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../src/about.css';

import BBG from '../src/assets/Dhruvinpic.jpg';

import resumePDF from './assets/Dhruvin CV.pdf'; // Replace with the actual path to your PDF resume

export default function About() {
    return (
        <>
            <section id="about">
                <div className="aboutMe">
                    <h2 className="my-name">Dhruvin Patel</h2>
                    <p className="my-details">
                        I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.
                        I have a strong understanding of design and a keen eye for detail.
                        Proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.
                    </p>
                    {/* Uncomment the link below once you have a valid resume PDF path */}
                    {/* <Link to={resumePDF} target="_blank" className="resumeLink">
                        View Resume (PDF)
                    </Link> */}
                    <div className="my-resume-btn-container">

                    <button onClick={() => window.open(resumePDF, '_blank')} className="my-resume-btn">
                        View Resume
                    </button>
                    </div>
                    <div className="about-image">
                    <img src={BBG} alt="profile" className="" />
                    </div>
                </div>

                {/* <div className="skills">
                    <span className="skillsTitle">What I Do</span>
                    <div className="skillBar">
                        <div className="skillBarText">
                            <h2>UI/UX Design</h2>
                            <p>This is a demo text, you can write your own content here.</p>
                        </div>
                    </div>

                    <div className="skillBar">
                        <div className="skillBarText">
                            <h2>Web Design</h2>
                            <p>This text can be changed while making a production-ready website.</p>
                        </div>
                    </div>

                    <div className="skillBar">
                        <div className="skillBarText">
                            <h2>App Design</h2>
                            <p>You can write text related to mobile app development.</p>
                        </div>
                    </div>
                </div> */}
            </section>
        </>
    );
}
