import React from "react"
import "./Projects.css";
import Notebook from "../../assets/images/notebook.jpg";
import Listproject from "./ListofProject/Listproject";

const Projects = () => {
    return (
        <>
            <div class="container project">
                <h1 className="col-12 mt-3 mb-1 text-center text-uppercase">Top Recent Projects</h1>
                <hr />
                <p className="pb-3 text-center">👉 Here are my top 3 Recent Project with live link and source code</p>
                <div class="row" id="ads">
                    
                    {/* project 1 */}

                    <div class="col-md-4">
                        <div class="card rounded">
                            <div class="card-image">
                                <span class="card-notify-badge">Full Stack</span>
                                <img src={Notebook} alt="project1" />
                            </div>
                            <div class="card-image-overly m-auto mt-3">
                                <span class="card-detail-badge">Node</span>
                                <span class="card-detail-badge">Express</span>
                                <span class="card-detail-badge">React</span>
                                <span class="card-detail-badge">MongoDB</span>
                                <span class="card-detail-badge">Git</span>
                            </div>
                            <div class="card-body text-center">
                                <div class="ad-title m-auto">
                                    <h5 class="text-uppercase">
                                        Notebook Website
                                    </h5>
                                </div>
                                <a href="https://github.com/as23july/notebook-react" class="ad-btn"> View</a>
                            </div>
                        </div>
                    </div>

                    {/* project 2 */}

                    <div class="col-md-4">
                        <div class="card rounded">
                            <div class="card-image">
                                <span class="card-notify-badge">Python</span>
                                <img src={Notebook} alt="project1" />
                            </div>
                            <div class="card-image-overly m-auto mt-3">
                                <span class="card-detail-badge">Python</span>
                                <span class="card-detail-badge">OpenCV</span>
                                <span class="card-detail-badge">Numpy</span>
                                <span class="card-detail-badge">Git</span>
                            </div>
                            <div class="card-body text-center">
                                <div class="ad-title m-auto">
                                    <h5 class="text-uppercase">
                                        Air Canvas Application
                                    </h5>
                                </div>
                                <a href="https://github.com/as23july/Air-canvas" class="ad-btn"> View</a>
                            </div>
                        </div>
                    </div>

                    {/* project 3 */}

                    <div class="col-md-4">
                        <div class="card rounded">
                            <div class="card-image">
                                <span class="card-notify-badge">Full Stack</span>
                                <img src={Notebook} alt="project1" />
                            </div>
                            <div class="card-image-overly m-auto mt-3">
                                <span class="card-detail-badge">HTML/CSS</span>
                                <span class="card-detail-badge">JavaScript</span>
                                <span class="card-detail-badge">Bootstrap</span>
                                <span class="card-detail-badge">Git</span>
                            </div>
                            <div class="card-body text-center">
                                <div class="ad-title m-auto">
                                    <h5 class="text-uppercase">
                                        Dynamic Website
                                    </h5>
                                </div>
                                <a href="https://github.com/as23july/Infinitisolar" class="ad-btn"> View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Projects