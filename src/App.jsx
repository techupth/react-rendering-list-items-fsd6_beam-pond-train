import DataMovies from "./data/movies";

function App() {
  let datas = DataMovies;
  return (
    <div className="App">
      <section className="bg-[#E0EAFF] flex flex-col items-center justify-center">
        <p className="text-black text-[40px] mt-[70px] mb-[70px] font-medium">
          Movie List Section
        </p>
        {/* Render Movie Lists Here */}
        {datas.map((e) => {
          return (
            <div className="w-[400px] h-[250px] bg-white mb-[70px] p-[15px] flex justify-between rounded-[10px]">
              <img
                src={e.image}
                alt=""
                className="w-[102px] h-[100px] rounded-[10px]"
              />
              <div className="w-[240px] h-[211px] flex flex-col gap-[10px]">
                <p>Title: {e.title}</p>
                <p>Year: {e.year}</p>
                <p>Runtime: {e.runtime}</p>
                <p className="flex">
                  Genres:{" "}
                  {e.genres.map((a) => {
                    return (
                      <button className="w-[68px] h-[27px] bg-[#EAAC99] rounded-full flex items-center justify-center text-[13px] ml-[5px]">
                        {a}
                      </button>
                    );
                  })}
                </p>
                <p>IMDB Ratigs: {e.imdbRating}</p>
                <p>IMDB Votes: {e.imdbVotes}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;

