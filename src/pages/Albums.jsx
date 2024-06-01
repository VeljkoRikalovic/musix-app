import { useQuery } from "@tanstack/react-query";
import { getAlbums } from "../data/api";
import AlbumItem from "../components/Main/AlbumItem";
import Loading from "../components/Loading";
import ErrorMessage from "../components/Main/ErrorMessage";

function Albums() {
  const data = useQuery({
    queryKey: ["albums"],
    queryFn: getAlbums,
  });

  if (data.status === "pending") return <Loading />;
  if (data.status === "error") return <ErrorMessage />;

  const items = data?.data?.albums?.items;

  return (
    <div className="flex h-[90vh] flex-wrap justify-center gap-2 overflow-y-auto p-2 text-center">
      {items?.map((e) => {
        return <AlbumItem key={e.data.name} e={e.data} />;
      })}
    </div>
  );
}

export default Albums;
