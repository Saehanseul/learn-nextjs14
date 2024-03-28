import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
interface IParams {
  id: string;
}
export async function generateMetadata({
  params: { id }
}: {
  params: IParams;
}) {
  const movie = await getMovie(id);
  return {
    title: movie.title
  };
}

export default async function MovieDetail({
  params: { id }
}: {
  params: IParams;
}) {
  console.log("moonsae");

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
