import { Base } from "@/ui/layouts/base"
import { About, Hero, Resume, Services, Skills, Contact } from "@/ui/views";

import dynamic from "next/dynamic";
const Clients = dynamic(() => import("@/ui/views/clients"), {
  ssr: false,
});
const Portfolio = dynamic(() => import("@/ui/views/portfolio"), {
  ssr: false,
});
const Blog = dynamic(() => import("@/ui/views/blog"), {
  ssr: false,
});

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
