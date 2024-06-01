import { GoHeartFill } from "react-icons/go";
import { useSongs } from "../../data/Context";
import { msToMAndS, truncateText } from "../../hooks/hooks";

function MySongs() {
  const { favSongs, removeFavSong } = useSongs();

  if (!favSongs.length || favSongs.length === 0)
    return (
      <p className="flex items-center justify-center p-5 text-center text-3xl">
        Oops, you didn&apos;t add any songs to your favorite song list, start by
        adding your favorites songs..
      </p>
    );

  return (
    <div className="flex h-[80vh] flex-wrap items-center justify-center gap-3  overflow-y-auto text-center sm:p-3">
      {favSongs.map((info) => {
        return (
          <div
            key={info.preview}
            className="flex h-[12rem] w-[90%] flex-col justify-between rounded-2xl bg-background p-2 opacity-70 sm:gap-4 sm:p-5 md:h-[20rem] md:w-[30%] lg:h-[13rem]"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <h2 className="text-xl font-medium">
                  {truncateText(info.name, 25)}
                </h2>
                <p className="text-accentOne">{info.artist}</p>
              </div>
              <div
                onClick={() => removeFavSong(info)}
                className="cursor-pointer p-2"
              >
                <GoHeartFill />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <audio
                className="w-[7rem] sm:w-[9rem]"
                controls
                src={info.preview}
              />
              <p>{msToMAndS(info.duration)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MySongs;
