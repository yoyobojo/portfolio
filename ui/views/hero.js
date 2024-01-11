'use client';
import { TypedStrings, GlitchText } from '@/ui/components';

const Hero = ({ mouse }) => {
  return (
    <div className="section started" style={{ height: '96vh' }}>
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <span>GM! My name is</span>
            <GlitchText text="Angello Lazar" />
            <TypedStrings
              strings={[
                'I am a dreamer.',
                'I am an engineer.',
                'I am a blockchain nerd.',
                'I am a fitness freak.'
              ]}
              options={{
                loop: true,
                typeSpeed: 80,
                backSpeed: 40,
                backDelay: 800
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
