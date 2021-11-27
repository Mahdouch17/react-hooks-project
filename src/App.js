import logo from "./logo.svg";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  var movies = [
    {
      id: 0,
      title: "Chucky",
      description:
        "After a vintage Chucky doll turns up at a suburban yard sale, an idyllic American town is thrown into chaos as a series of horrifying murders begin to expose the town’s hypocrisies and secrets. Meanwhile, the arrival of enemies — and allies — from Chucky’s past threatens to expose the truth behind the killings, as well as the demon doll’s untold origins.",
      posterURL: "images/chucky.jpg",
      rating: "80%",
    },{
      id: 1,
      title: "ChucThe Wheel of Timeky",
      description:
      "Follow Moiraine, a member of the shadowy and influential all-female organization called the “Aes Sedai” as she embarks on a dangerous, world-spanning journey with five young men and women. Moiraine believes one of them might be the reincarnation of an incredibly powerful individual, whom prophecies say will either save humanity or destroy it.",
      posterURL: "images/La-Roue-du-temps.jpg",
      rating: "81%",
    },
    {
      id: 2,
      title: "Riverdale",
      description:
      "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale’s wholesome facade.",
      posterURL: "images/riverdale.jpg",
      rating: "86%",
    }
  ];
  return (
    <div className="App">
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
