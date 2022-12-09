import { useEffect, useState } from "react";
import Movies from "./Components/Movies";

function App() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => setMovies(movies));
  }, []);

  return (
    <div>
      <h1>Hello from React!</h1>
      <Movies movies={movies}/>
    </div>
  )
}

export default App;