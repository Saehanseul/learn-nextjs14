import { API_URL } from "../app/(home)/page";

const getMovie = async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(`${API_URL}/${id}`);
  const json = await res.json();
  return json;
};

export default async function MovieInfo({ id }: { id: number }) {
  const movie = await getMovie(id);
  return (
    <div>
      <h1>Info</h1>
      <ul>{movie.title}</ul>
    </div>
  );
}
