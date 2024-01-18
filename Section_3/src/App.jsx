import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts"
import Examples from "./components/Examples";


function App() {
  return (
    //Fragments are simply used as a html tag without any key word <> childrens can be wrapped here </>
    <>
      <Header></Header>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
