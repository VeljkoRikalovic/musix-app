import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getAlbums, getSongs, getArtists } from "../data/api";

function Homepage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  queryClient.prefetchQuery({ queryKey: ["albums"], queryFn: getAlbums });
  queryClient.prefetchQuery({ queryKey: ["songs"], queryFn: getSongs });
  queryClient.prefetchQuery({ queryKey: ["artists"], queryFn: getArtists });

  return (
    <>
      <div className="h-[90vh] overflow-y-auto p-0 text-center">
        <div className="hero-content mt-4 flex-col gap-[3rem]">
          <h1 className="text-2xl font-bold sm:text-5xl">
            Welcome to the Musix app
          </h1>
          <p className="py-6 text-2xl">Start by discovering new </p>
          <div className="flex flex-col flex-wrap items-center justify-center gap-4  sm:flex-row md:gap-[5rem]">
            <div className="group h-[15rem] w-[12rem] rounded-[25px] bg-[url('/public/albums.jpg')] bg-cover sm:h-[20rem] sm:w-[15rem] sm:*:invisible">
              <button
                className="bg-white mt-10 cursor-pointer bg-accentOne px-4 py-2 text-3xl uppercase transition hover:shadow-[0.5rem_0.5rem_#afbdac,-0.5rem_-0.5rem_#e8ece7] active:translate-x-0.5 active:translate-y-0.5  group-hover:visible"
                onClick={() => navigate("/albums")}
              >
                Albums
              </button>
            </div>
            <div className="group h-[15rem] w-[12rem] rounded-[25px] bg-[url('/public/artist.jpg')] bg-cover sm:h-[20rem] sm:w-[15rem] sm:*:invisible">
              <button
                className="bg-white mt-10 bg-accentOne px-4 py-2 text-3xl uppercase transition hover:shadow-[0.5rem_0.5rem_#afbdac,-0.5rem_-0.5rem_#e8ece7] active:translate-x-0.5 active:translate-y-0.5 group-hover:visible"
                onClick={() => navigate("/artists")}
              >
                Artists
              </button>
            </div>
            <div className="group h-[15rem] w-[12rem] rounded-[25px] bg-[url('/public/song.jpg')] bg-cover sm:h-[20rem] sm:w-[15rem] sm:*:invisible">
              <button
                className="bg-white mt-10 cursor-pointer bg-accentOne px-4 py-2 text-3xl uppercase transition hover:shadow-[0.5rem_0.5rem_#afbdac,-0.5rem_-0.5rem_#e8ece7] active:translate-x-0.5 active:translate-y-0.5 group-hover:visible"
                onClick={() => navigate("/songs")}
              >
                Songs
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
