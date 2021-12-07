import logo from "./logo.svg";
import "./App.css";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import { useState } from "react";
import AddButton from "./components/AddButton";
import ReturnButton from "./components/ReturnButton";

function App() {
  const movies = [
    {
      id: 0,
      title: "Chucky",
      description:
        "After a vintage Chucky doll turns up at a suburban yard sale, an idyllic American town is thrown into chaos as a series of horrifying murders begin to expose the town’s hypocrisies and secrets. Meanwhile, the arrival of enemies — and allies — from Chucky’s past threatens to expose the truth behind the killings, as well as the demon doll’s untold origins.",
      posterURL: "images/chucky.jpg",
      rating: 4,
    },
    {
      id: 1,
      title: "The Wheel of Timeky",
      description:
        "Follow Moiraine, a member of the shadowy and influential all-female organization called the “Aes Sedai” as she embarks on a dangerous, world-spanning journey with five young men and women. Moiraine believes one of them might be the reincarnation of an incredibly powerful individual, whom prophecies say will either save humanity or destroy it.",
      posterURL: "images/La-Roue-du-temps.jpg",
      rating: 4,
    },
    {
      id: 2,
      title: "Riverdale",
      description:
        "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale’s wholesome facade.",
      posterURL: "images/riverdale.jpg",
      rating: 4.5,
    },
  ];
  const [films, setFilms] = useState(movies);
  const [show, setShow] = useState(false);

  const handleAddClickBtn = () => setShow(true);
  const handleReturnClickBtn = () => setShow(false);

  const addMovie = (x) => {
    setFilms([...films, x]);
  };

  return (
    <div className="App">
      <div>
        {show ? (
          <div>
            <ReturnButton onClick={handleReturnClickBtn} />
            <AddMovie addMovie={addMovie} />
          </div>
        ) : (
          <div>
            <AddButton onClick={handleAddClickBtn} />
            <MovieList movies={films} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
