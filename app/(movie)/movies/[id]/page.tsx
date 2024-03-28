import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({
  params: { id }
}: {
  params: { id: number };
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
