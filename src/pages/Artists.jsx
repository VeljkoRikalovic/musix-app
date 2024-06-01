import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getArtists } from "../data/api";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ErrorMessage from "../components/Main/ErrorMessage";

function Artists() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["artists"] });
  }, [queryClient]);

  const data = useQuery({
    queryKey: ["artists"],
    queryFn: getArtists,
  });

  if (data.status === "pending") return <Loading />;
  if (data.status === "error") return <ErrorMessage />;

  const artists = data?.data?.artists?.items;

  return (
    <div className="m-2 flex h-[90vh] flex-wrap items-center justify-center gap-5 overflow-y-auto">
      {artists.map((e) => {
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

export default Artists;
