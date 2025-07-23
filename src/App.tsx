import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Projects,
  Skills,
  Timeline,
} from "./components";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
