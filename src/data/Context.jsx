import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/hooks";

const ContextData = createContext();

function ContextProvider({ children }) {
  const [favSongs, setFavSongs] = useLocalStorageState([], "songs");
  const [favArtist, setFavArtist] = useLocalStorageState([], "artists");
  const [favAlbum, setFavAlbum] = useLocalStorageState([], "albums");

  function addFavSong({ name, artist, preview, duration }) {
    setFavSongs([...favSongs, { name, artist, preview, duration }]);
  }

  function removeFavSong(info) {
    const newArr = favSongs.filter((el) => {
      return el.name !== info.name;
    });
    setFavSongs(newArr);
  }

  function addFavArtist({ name, img, id, key }) {
    setFavArtist([...favArtist, { name, img, id, key }]);
  }

  function removeFavArtist(info) {
    const newArr = favArtist.filter((el) => {
      return el.name !== info.name;
    });
    setFavArtist(newArr);
  }

  function addFavAlbum({ name, img, artist, id }) {
    setFavAlbum([...favAlbum, { name, img, artist, id }]);
  }

  function removeFavAlbum(info) {
    const newArr = favAlbum.filter((el) => {
      return el.name !== info.name;
    });
    setFavAlbum(newArr);
  }

  return (
    <ContextData.Provider
      value={{
        favSongs,
        addFavSong,
        removeFavSong,
        favArtist,
        addFavArtist,
        removeFavArtist,
        favAlbum,
        addFavAlbum,
        removeFavAlbum,
      }}
    >
      {children}
    </ContextData.Provider>
  );
}

function useSongs() {
  const context = useContext(ContextData);
  if (context === undefined)
    throw new Error("Context was used outside context provider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { ContextProvider, useSongs };
