import "./App.css";
import * as card from "./components/movielist";
function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <card.MoviesList />
      </section>
    </div>
  );
}

export default App;
