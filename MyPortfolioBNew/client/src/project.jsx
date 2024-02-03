import React from 'react';
import { Link } from 'react-router-dom';
import '../src/index.css';
import '../src/project.css';

import project1Image from '../src/assets/project11.png';
import project2Image from '../src/assets/project22.png';
import project3Image from '../src/assets/project33.png';

export default function Project() {
    return (
        <>
            <section id="works">
                <h2 className="worksTitle">My Projects</h2>
                <span className="worksDesc">
                    I take pride in paying attention to the smallest details and making sure my work is pixel perfect.
                    I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
                </span>

                <div className="my-work-container">
                    <div className="my-work-wrapper">

                        <div className="my-work-card">
                            <div className="my-wok-image">
                            <img src={project1Image} alt="project1" className="worksImg" />
                            </div>
                            <div className="my-work-title">Sure Bank</div>
                            <div className="my-work-details">Sure Bank employs cutting-edge web development technologies, utilizing HTML, CSS, and JavaScript for an interactive user interface. Our commitment to security is evident through advanced encryption protocols, and the efficiency of our web services is ensured by backend technologies like Node.js and Python. Continuously staying abreast of the latest frameworks, we prioritize delivering a modern, user-friendly, and secure online banking experience.</div>
                        </div>

                        <div className="my-work-card">
                            <div className="my-wok-image">
                            <img src={project2Image} alt="project1" className="worksImg" />
                            </div>
                            <div className="my-work-title">Paradise Island</div>
                            <div className="my-work-details">Paradise Island's website employs HTML5, CSS3, and JavaScript for a visually stunning and responsive design. Using server-side technologies like PHP or Node.js ensures efficient data handling, delivering a seamless experience for visitors exploring our paradise online.</div>
                        </div>

                        <div className="my-work-card">
                            <div className="my-wok-image">
                            <img src={project3Image} alt="project1" className="worksImg" />
                            </div>
                            <div className="my-work-title">Ammons Poems</div>
                            <div className="my-work-details">The Ammons Poems website is meticulously crafted using a blend of modern web development technologies. Leveraging HTML5, CSS3, and JavaScript, the site ensures an engaging and responsive user interface, seamlessly adapting to various devices. Backed by server-side technologies like Node.js, the website prioritizes efficient data processing, providing a smooth and dynamic experience for poetry enthusiasts exploring the profound works of Ammons.</div>
                        </div>

                    </div>
                </div>
                
                {/* <div className="worksImgs">
                    <div className="workItem">
                        <img src={project1Image} alt="project1" className="worksImg" />
                        <div className="workDetails">
                            <h3>Project 1</h3>
                            <p>
                                Short description of your role and the outcome for Project 1 goes here.
                                You can provide details like technologies used, your responsibilities, and the impact of the project.
                            </p>
                        </div>
                    </div>
                    <div className="workItem">
                        <img src={project2Image} alt="project2" className="worksImg" />
                        <div className="workDetails">
                            <h3>Project 2</h3>
                            <p>
                                Short description of your role and the outcome for Project 2 goes here.
                            </p>
                        </div>
                    </div>
                    <div className="workItem">
                        <img src={project3Image} alt="project3" className="worksImg" />
                        <div className="workDetails">
                            <h3>Project 3</h3>
                            <p>
                                Short description of your role and the outcome for Project 3 goes here.
                            </p>
                        </div>
                    </div>
                </div> */}
            </section>
        </>
    );
}
