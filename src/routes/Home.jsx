import About from "../components/home/About";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Statistics from "../components/home/Statistics";
import TopProjects from "../components/home/TopProjects";

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <About />
      <Services />
      <TopProjects />
    </>
  );
}
