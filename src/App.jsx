import "./App.css";
import TimeCard from "./components/TimeCard/TimeCard";
import UserCard from "./components/UserCard/UserCard";

function App() {
  return (
    <div className="App">
      <main>
        <UserCard />
        <section className="cardGrid">
          <TimeCard />
        </section>
      </main>
    </div>
  );
}

export default App;
