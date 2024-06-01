import { HiMusicNote } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";
import ButtonSidebar from "./ButtonSidebar";
import { FaCompactDisc } from "react-icons/fa";
import { GiMicrophone } from "react-icons/gi";

function Sidebar() {
  return (
    <div className="text-md row-span-2 flex flex-col gap-3 bg-secondaryOne p-1   sm:p-4 sm:text-2xl">
      <ButtonSidebar nav="homepage">
        <HiHome />
        Homepage
      </ButtonSidebar>
      <ButtonSidebar nav="myArtists">
        <GiMicrophone />
        My artists
      </ButtonSidebar>
      <ButtonSidebar nav="myAlbums">
        <FaCompactDisc />
        My albums
      </ButtonSidebar>
      <ButtonSidebar nav="mySongs">
        <HiMusicNote />
        My songs
      </ButtonSidebar>
    </div>
  );
}

export default Sidebar;
