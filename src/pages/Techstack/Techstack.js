import React from "react"
import "./Techstack.css"
import { TechstackList } from "../../utilitis/TechstackList"
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';

const Techstack = () => {
    return (
        <>
            <div class="container techstack">
                <RubberBand>
                    <h1 className="col-12 mt-3 mb-1 text-center text-uppercase">Tecnology Stack</h1>
                    <hr />
                    <p className="pb-3 text-center">👉 Including Programming Language, Frameworks, Databases, Front-end & Back-end tools and APIs</p>
                </RubberBand>
                <div class="row">
                    {TechstackList.map((tech) => (

                        <div key={tech._id} class="col-md-3">
                            <div class="card m-2">
                                <Fade left>
                                    <div class="card-content">
                                        <div class="card-body">
                                            <div class="media d-flex justify-content-center">
                                                <div class="align-self-center">
                                                    <tech.icon className="tech-icon" />
                                                </div>
                                                <div class="media-body">
                                                    <h5>{tech.name}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}
export default Techstack