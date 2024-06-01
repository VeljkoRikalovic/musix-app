import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage";
import MyArtists from "./pages/favorites/MyArtists";
import MySongs from "./pages/favorites/MySongs";
import MyAlbums from "./pages/favorites/MyAlbums";
import Albums from "./pages/Albums";
import Artists from "./pages/Artists";
import Songs from "./pages/Songs";
import SearchResults from "./pages/SearchResults";
import Album from "./components/Main/Album";
import Artist from "./components/Main/Artist";
import { ContextProvider } from "./data/Context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="homepage" />} />
              <Route path="homepage" element={<Homepage />} />
              <Route path="albums" element={<Albums />} />
              <Route path="albumId/:id" element={<Album />} />
              <Route path="artists" element={<Artists />} />
              <Route path="artistsId/:id" element={<Artist />} />
              <Route path="albums" element={<Albums />} />
              <Route path="songs" element={<Songs />} />
              <Route path="myArtists" element={<MyArtists />} />
              <Route path="myAlbums" element={<MyAlbums />} />
              <Route path="mySongs" element={<MySongs />} />
              <Route path="searchResults/:search" element={<SearchResults />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </QueryClientProvider>
  );
}

export default App;
