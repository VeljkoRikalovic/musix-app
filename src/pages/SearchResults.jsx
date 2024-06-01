import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getSearch } from "../data/api";
import Loading from "../components/Loading";
import ErrorMessage from "../components/Main/ErrorMessage";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchAlbums from "../components/Search/SearchAlbums";
import SearchArtists from "../components/Search/SearchArtists";
import SearchSongs from "../components/Search/SearchSongs";

function SearchResults() {
  const [view, setView] = useState("albums");
  const search = useParams();

  const data = useQuery({
    queryKey: ["searchResult"],
    queryFn: () => getSearch(search),
  });

  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["searchResult"] });
  }, [queryClient, search]);

  if (data.status === "pending") return <Loading />;
  if (data.status === "error") return <ErrorMessage />;

  return (
    <div className="p-3">
      <div className="flex flex-col items-center justify-center gap-[1rem] p-3 sm:flex-row md:gap-[7rem]">
        <button
          onClick={() => setView("albums")}
          className="btn btn-neutral"
          disabled={view === "albums"}
        >
          Albums
        </button>
        <button
          onClick={() => setView("artists")}
          className="btn btn-neutral"
          disabled={view === "artists"}
        >
          Artists
        </button>
        <button
          onClick={() => setView("songs")}
          className="btn btn-neutral"
          disabled={view === "songs"}
        >
          Songs
        </button>
      </div>
      {view === "albums" && <SearchAlbums info={data.data.albums} />}
      {view === "artists" && <SearchArtists info={data.data.artists} />}
      {view === "songs" && <SearchSongs info={data.data.tracks} />}
    </div>
  );
}

export default SearchResults;
