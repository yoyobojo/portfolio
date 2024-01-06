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
            description="Morbi nulla arcu, pellentesque sed egestas in."
          >
            Frontend Frameworks
          </TechnologyHighlight>
          <TechnologyHighlight 
            src="/images/logos/api-logo.svg"
            description="Morbi nulla arcu, pellentesque sed egestas in."
          >
            Rest APIs & Web Sockets
          </TechnologyHighlight>
          <TechnologyHighlight 
            src="/images/logos/aws-logo.svg"
            description="Morbi nulla arcu, pellentesque sed egestas in."
          >
            AWS Services
          </TechnologyHighlight>
          <TechnologyHighlight 
            src="/images/logos/azure-devops-logo.svg"
            description="Morbi nulla arcu, pellentesque sed egestas in."
          >
            Azure Devops
          </TechnologyHighlight>
          <TechnologyHighlight 
            src="/images/logos/foundry-logo.png"
            description="Morbi nulla arcu, pellentesque sed egestas in."
          >
            Foundry / Anvil
          </TechnologyHighlight>
          <TechnologyHighlight 
            src="/images/logos/network-logo.svg"
            description="Morbi nulla arcu, pellentesque sed egestas in."
          >
            Peer-to-Peer Networking
          </TechnologyHighlight>
        </div>
      </div>
    </div>
  );
};

export default Services;