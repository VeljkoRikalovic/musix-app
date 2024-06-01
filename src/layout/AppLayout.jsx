import Content from "../components/Main/Content";
import Header from "../components/header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="grid h-[100vh] grid-cols-[0.25fr_1fr] grid-rows-[0.2fr_1fr_1fr] gap-2 overflow-hidden bg-background text-text">
      <Header />
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
}

export default AppLayout;
