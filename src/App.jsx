import "./App.css";
import movies from "./data/movies";

function App() {
  let movie = movies;
  return (
    <div className="App">
      <section className="flex flex-col items-center gap-20 ">
        {/* Render Movie Lists Here */}
        <h1 className="text-center mt-[50px] text-[40px] ">
          Movie List Section
        </h1>
        {movie.map((i) => {
          return (
            <div className="w-[400px] h-[250px] bg-[#917C7C] rounded-[10px] flex flex-row">
              <img
                src={i.image}
                className="w-[102px] h-[100px] rounded-[10px] ml-2 mt-2"
              />

              <div className="w-[240px] h-[211px] flex flex-col gap-[10px]">
                <p>Title: {i.title}</p>
                <p>Year: {i.year}</p>
                <p>Runtime: {i.runtime}</p>
                <p className="flex">
                  Genres:{" "}
                  {i.genres.map((a) => {
                    return (
                      <button className="w-[68px] h-[27px] bg-[#EAAC99] rounded-full flex items-center justify-center text-[13px] ml-[5px]">
                        {a}
                      </button>
                    );
                  })}
                </p>
                <p>IMDB Rating: {i.imdbRating}</p>
                <p>IMDB Votes: {i.imdbVotes}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
