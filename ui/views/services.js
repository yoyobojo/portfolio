import { TechnologyHighlight } from "../components";

const Services = () => {
  return (
    <div className="section service section_" id="services">
      <div className="content">
        <div className="title">
          <div className="title_inner">Familiar Technologies</div>
        </div>
        <div className="service-items">
          <TechnologyHighlight 
            src="/images/logos/react-logo.svg"
            description="You name it, anything from NextJS to EXTJS and everything in between."
          >
            Frontend Frameworks
          </TechnologyHighlight>
          <TechnologyHighlight 
            src="/images/logos/api-logo.svg"
            description="Built some E2E backend services usually using Express frameworks and sometimes websockets."
          >
            Rest APIs & Web Sockets
          </TechnologyHighlight>
          <TechnologyHighlight 
            src="/images/logos/aws-logo.svg"
            description="There's so much to learn with AWS, but used plenty of their services like EC2 and Kubernetes."
          >
            AWS Services
          </TechnologyHighlight>
          <TechnologyHighlight 
            src="/images/logos/azure-devops-logo.svg"
            description="By no means an expert, but I can make my way around Azure Devops when it comes to CI/CD."
          >
            Azure Devops
          </TechnologyHighlight>
          <TechnologyHighlight 
            src="/images/logos/foundry-logo.png"
            description="I'll say it now - Foundry is better than hardhat by a longshot. Much easier to navigate and really powerful."
          >
            Foundry / Anvil
          </TechnologyHighlight>
          <TechnologyHighlight 
            src="/images/logos/network-logo.svg"
            description="Began dabbling in this working working at PintSwap, a peer-to-peer OTC exchange."
          >
            Peer-to-Peer Networking
          </TechnologyHighlight>
        </div>
      </div>
    </div>
  );
};

export default Services;