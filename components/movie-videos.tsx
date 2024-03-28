import { API_URL } from "../app/(home)/page";

const getVideos = async (id: number) => {
  const res = await fetch(`${API_URL}/${id}/videos`);
  const json = await res.json();
  // throw new Error("error");
  return json;
};

export default async function MovieVideos({ id }: { id: number }) {
  const videos = await getVideos(id);
  return (
    <div>
      <h1>Videos</h1>
      <ul>
        {videos.map((video: any) => (
          <li key={video.id}>
            <a href={video.url} target="_blank">
              {video.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
