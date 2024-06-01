import { useNavigate } from "react-router-dom";
import { useSongs } from "../../data/Context";
import { truncateText } from "../../hooks/hooks";

function MyAlbums() {
  const { favAlbum } = useSongs();
  const navigate = useNavigate();

  if (!favAlbum.length || favAlbum.length === 0)
    return (
      <p className="flex items-center justify-center p-5 text-center text-3xl">
        Oops, you didn&apos;t add any albums to your favorite album list, start
        by adding your favorites albums..
      </p>
    );

  return (
    <div className="flex h-[80vh] flex-wrap justify-center gap-2 overflow-y-auto p-2 text-center">
      {favAlbum.map((e) => (
        <div
          onClick={() => navigate(`/albumId/${e.id.id}`)}
          className="card w-40 cursor-pointer items-center justify-center bg-secondaryOne p-4 shadow-xl sm:w-60"
          key={e.id.id}
        >
          <img src={e.img} alt="album logo" />

          <div className="card-body items-center justify-center">
            <h2 className="card-title">{truncateText(e.name, 25)}</h2>
            <p>{e.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyAlbums;
