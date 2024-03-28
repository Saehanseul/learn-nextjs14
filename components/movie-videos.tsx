import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css";

const getVideos = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}/videos`);
  const json = await res.json();
  // throw new Error("error");
  return json;
};

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video: any) => (
        <iframe
          key={video.id}
          src={`https://www.youtube.com/embed/${video.key}`}
          title={video.name}
          allowFullScreen
        />
      ))}
    </div>
  );
}
