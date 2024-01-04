import { Base } from "@/ui/layouts/base"
import { About, Hero, Resume, Services, Skills, Contact, Clients, Portfolio, Blog } from "@/ui/views";

const Page = () => {
  return (
    <Base>
      <Hero mouse={true} />
      <About />
      <Resume />
      <Skills />
      <Services />
      <Clients />
      <Portfolio />
      <Blog />
      <Contact />
    </Base>
  );
};
export default Page;
