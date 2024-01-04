"use client";
import {TypedStrings} from "@/ui/components/typed";

const Hero = ({ mouse }) => {
  return (
    <div className="section started" style={{ height: "96vh" }}>
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <span>GM! My name is</span>
            <div className="h-title glitch-effect" data-text="Angello Lazar">
              <span>Angello Lazar</span>
            </div>
            <TypedStrings 
              strings={[
                "I am a dreamer.",
                "I am a software engineer.",
                "I am a blockchain nerd.",
                "I am a fitness freak."
              ]}
              options={{
                loop: true,
                typeSpeed: 80,
                backSpeed: 40,
                backDelay: 800,
              }}
            />
          </div>
        </div>
      </div>
      {mouse && (
        <a href="#" className="mouse_btn">
          <span className="ion ion-mouse"></span>
        </a>
      )}
    </div>
  );
};

export default Hero;