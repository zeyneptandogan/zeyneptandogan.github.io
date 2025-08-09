import Typewriter from "./Typewriter"
import Image from "next/image";

export default function Intro() {
    return (
        <div className="container-fluid" >
        <div id="intro" className="container">
            <div className="row container d-flex align-items-center px-5" style={{ minHeight: "100vh" }}>
                <div className="col-sm-12 col-md-7 text-start ps-5 py-5 text-white">
                    <h1 className="display-5">Hey,<br /> I am <b>Zeynep Tandogan</b></h1> 
                    <div>
                      <Typewriter words={['Machine Learning Engineer', 'Data Scientist', 'AI Enthusiast']} />
                    </div>
                    <div className="pt-2">
                      <i className="bi bi-geo-alt-fill"></i><span className="ps-2">Loussane, Switzerland</span>
                    </div>
                </div>
                <div className="col-sm-12 col-md-5 text-center py-5 text-white">
                  <Image src="/images/profile.jpeg" className="img-fluid rounded-4 shadow" width={600} height={600} style={{ width: "30vh" }} alt="Profile"/>
                  <p className="lead pt-4"> A Computer Science MSc student at EPFL (graduating March 2026), focused on machine learning, LLM alignment, and scalable AI systems. </p>
                  <a href="#about" className="btn btn-outline-light rounded-pill px-4 py-2">
                    <i className="bi bi-caret-down-fill"></i> More About Me
                  </a>
                </div>
            </div>
        </div>
      </div>
    )
}