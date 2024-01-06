import { TechnologyHighlight } from "@/ui/components";

const SERVICES_ITEMS = [
  {
    img: "react-logo.svg",
    desc: "You name it, anything from NextJS to EXTJS and everything in between.",
    text: "Frontend Frameworks"
  },
  {
    img: "api-logo.svg",
    desc: "Built some E2E backend services usually using Express frameworks and sometimes websockets.",
    text: "Rest APIs & Web Sockets"
  },
  {
    img: "aws-logo.svg",
    desc: "There's so much to learn with AWS, but used plenty of their services like EC2 and Kubernetes.",
    text: "AWS Services"
  },
  {
    img: "azure-devops-logo.svg",
    desc: "By no means an expert, but I can make my way around Azure Devops when it comes to CI/CD.",
    text: "Azure Devops"
  },
  {
    img: "foundry-logo.png",
    desc: "I'll say it now - Foundry is better than hardhat by a longshot. Much easier to navigate and really powerful.",
    text: "Foundry / Anvil"
  },
  {
    img: "network-logo.svg",
    desc: "Started dabbling in this working at PintSwap, a peer-to-peer OTC exchange.",
    text: "Peer-to-Peer Networking"
  }
]

const Services = () => {
  return (
    <div className="section service section_" id="services">
      <div className="content">
        <div className="title">
          <div className="title_inner">Familiar Technologies</div>
        </div>
        <div className="service-items">
          {SERVICES_ITEMS.map(({ img, desc, text }, i) => (
            <TechnologyHighlight 
              src={`/images/logos/${img}`}
              description={desc}
              key={`services-${i}`}
            >
              {text}
            </TechnologyHighlight>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;