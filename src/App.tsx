import {
  About,
  Contact,
  Header,
  Hero,
  Projects,
  Skills,
  // Timeline,
} from "./blocks";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        {/* The Timeline block might not be necessary */}
        {/* <Timeline /> */}
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
