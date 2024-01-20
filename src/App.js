import "./App.scss";
import "./App.scss";
import Header from "./components/Shared/components/Header";
import Tab from "./components/Shared/components/Tab";
import Recipe from "./components/Recipe/Recipe";

function App() {
  return (
    <div className="main">
      <Header />
      <Tab />
      <Recipe />
    </div>
  );
}

export default App;
