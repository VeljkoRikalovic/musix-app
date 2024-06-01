import { useNavigate } from "react-router-dom";

function ButtonSidebar({ children, nav }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(nav);
  };

  return (
    <button
      onClick={handleClick}
      className="font-dm text-white shadow-green-400/75 mt-8 inline-flex items-center justify-between rounded-xl bg-accentOne px-1 py-3 text-base font-medium shadow-xl transition-transform duration-200 ease-in-out hover:scale-[1.02] sm:px-6"
    >
      {children}
    </button>
  );
}

export default ButtonSidebar;
