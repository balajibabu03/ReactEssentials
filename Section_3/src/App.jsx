import { useState } from "react";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcepts";
import TabButton from "./components/Header/TabButton";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";


function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleClick(selected){
    setSelectedTopic(selected)
    console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>
  if(selectedTopic){
    tabContent = 
      <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
  }
  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts!</h2>
          <ul>
            {
              CORE_CONCEPTS.map((conceptsItem)=>(
                <CoreConcept key={conceptsItem.title} {...conceptsItem}/>
              ))
            
            //here below items are created based on data by looping
            /* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} ></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[1]} ></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2]} ></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]} ></CoreConcept> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic=== "components"} onSelect={() => handleClick("components")} >Components</TabButton>
            <TabButton isSelected={selectedTopic=== "jsx"} onSelect={() => handleClick("jsx")} >JSX</TabButton>
            <TabButton isSelected={selectedTopic=== "props"} onSelect={() => handleClick("props")} >Props</TabButton>
            <TabButton isSelected={selectedTopic=== "state"} onSelect={() => handleClick("state")} >State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
