import Logo from "./Logo";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="col-span-2 flex items-center justify-between bg-secondaryOne text-xl">
      <Logo />
      <SearchBar />
      <div></div>
      <div></div>
    </div>
  );
}

export default Header;
