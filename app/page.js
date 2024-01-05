import { Base } from "@/ui/layouts/base";
import Hero from "@/ui/views/hero";
import About from "@/ui/views/about";
import Resume from "@/ui/views/resume";
import Services from "@/ui/views/services";
import Contact from "@/ui/views/contact";
import Skills from "@/ui/views/skills";

import dynamic from "next/dynamic";
const Portfolio = dynamic(() => import("@/ui/views/portfolio"), {
  ssr: false,
});

const Page = () => {
  return (
    <Base>
      <Hero mouse={true} />
      <About />
      <Resume />
      <Skills coding={false} design={false} />
      <Services />
      <Portfolio />
      <Contact />
    </Base>
  );
};
export default Page;
