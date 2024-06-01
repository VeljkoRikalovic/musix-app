import { useNavigate } from "react-router-dom";

function SearchArtists({ info }) {
  const navigate = useNavigate();
  return (
    <div className="m-2 flex h-[75vh] flex-wrap items-center justify-center gap-5 overflow-y-auto">
      {info.items.map((e) => {
        const id = e.data.uri.substring(15);
        return (
          <div
            onClick={() => navigate(`/artistsId/${id}`)}
            className="card w-40 cursor-pointer items-center bg-secondaryOne p-4 shadow-xl sm:w-60"
            key={e.data.uri}
          >
            <img
              src={e.data.visuals.avatarImage?.sources[0].url}
              alt="artist image"
            />
            <div className="flex gap-10 p-3">
              <h2>{e.data.profile.name}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SearchArtists;
