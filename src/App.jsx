import "./App.css";
import TimeCard from "./components/TimeCard/TimeCard";
import UserCard from "./components/UserCard/UserCard";
import data from "./data.json";

function App() {
  const createTimeCard = (info) => {
    return <TimeCard {...info} />;
  };
  return (
    <div className="App">
      <main>
        <UserCard />
        <section className="cardGrid">{data.map(createTimeCard)}</section>
      </main>
    </div>
  );
}

export default App;
