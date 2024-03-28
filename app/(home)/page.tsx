import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../../utils";

export const metadata = {
  title: "Home"
};

const getMovies = async () => {
  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie: any) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
