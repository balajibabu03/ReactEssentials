import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcepts";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/Header/TabButton";


function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts!</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} ></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[1]} ></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2]} ></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]} ></CoreConcept>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;