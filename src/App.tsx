import { ConnectionBlock } from "./components/ConnectionBlock/ConnectionBlock";
import { Header } from "./components/Header/Header";
import { Questionnaire } from "./components/Questionnaire/Questionnaire";
import { Team } from "./components/Team/Team";
import { Travel } from "./components/Travel/Travel";

function App() {
  return (
    <>
      <Header />
      <Travel />
      <Team />
      <Questionnaire />
      <ConnectionBlock />
    </>
  );
}

export default App;
