import { GoHeart, GoHeartFill } from "react-icons/go";
import { useSongs } from "../../data/Context";
import { msToMAndS, truncateText } from "../../hooks/hooks";

function Song(info) {
  const { addFavSong, favSongs, removeFavSong } = useSongs();
  const info2 = info.info;
  const check = info.info.name;
  return (
    <div className="my-3 flex h-[8rem] flex-col items-center justify-between rounded-2xl bg-secondaryOne p-3 sm:m-3 sm:h-[5rem] sm:flex-row">
      <div>
        <h3>{truncateText(info.info.name, 25)}</h3>
      </div>
      <div className="flex items-center justify-center gap-1 sm:gap-3 sm:p-3">
        <audio
          className="w-[7rem] sm:w-[9rem]"
          controls
          src={info.info.preview_url}
        />
        <span>{msToMAndS(info.info.duration_ms)}</span>
        {favSongs.some((e) => e.name === check) ? (
          <button onClick={() => removeFavSong(info2)}>
            <GoHeartFill />
          </button>
        ) : (
          <button
            onClick={() =>
              addFavSong({
                name: info.info.name,
                artist: info.info.artists[0].name,
                preview: info.info.preview_url,
                duration: info.info.duration_ms,
              })
            }
          >
            <GoHeart />
          </button>
        )}
      </div>
    </div>
  );
}

export default Song;
