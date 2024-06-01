import { useNavigate } from "react-router-dom";
import { useSongs } from "../../data/Context";

function MyArtists() {
  const { favArtist } = useSongs();
  const navigate = useNavigate();

  if (!favArtist.length || favArtist.length === 0) {
    return (
      <p className="flex items-center justify-center p-5 text-center text-3xl">
        Oops, you didn&apos;t add any artists to your favorite artist list,
        start by adding your favorites artists..
      </p>
    );
  }
  return (
    <div className="m-2 flex h-[80vh] flex-wrap items-center justify-center gap-5 overflow-y-auto">
      {favArtist.map((e) => (
        <div
          onClick={() => navigate(`/artistsId/${e.id}`)}
          className="card w-40 cursor-pointer items-center bg-secondaryOne p-4 shadow-xl sm:w-60"
          key={e.id}
        >
          <img src={e.img} alt="artist image" />
          <div className="flex gap-10 p-3">
            <h2>{e.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyArtists;
