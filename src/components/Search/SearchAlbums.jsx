import AlbumItem from "../Main/AlbumItem";

function SearchAlbums({ info }) {
  return (
    <div className="flex h-[75vh] flex-wrap justify-center gap-2 overflow-y-auto p-2 text-center">
      {info.items.map((e) => {
        return <AlbumItem key={e.data.coverArt.sources[0].url} e={e.data} />;
      })}
    </div>
  );
}

export default SearchAlbums;
