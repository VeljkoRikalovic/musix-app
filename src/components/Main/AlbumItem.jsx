import { useNavigate } from "react-router-dom";
import { truncateText } from "../../hooks/hooks";

function AlbumItem({ e }) {
  const navigate = useNavigate();
  const id = e.uri.substring(14);

  return (
    <div
      onClick={() => navigate(`/albumId/${id}`)}
      className="card w-40 cursor-pointer items-center justify-center bg-secondaryOne p-4 shadow-xl sm:w-60"
    >
      <img src={e.coverArt.sources[0].url} alt="album logo" />

      <div className="card-body items-center justify-center">
        <h2 className="card-title">{truncateText(e.name, 25)}</h2>
        <p>{e.artists.items[0].profile.name}</p>
      </div>
    </div>
  );
}

export default AlbumItem;
