import PropTypes from "prop-types";
import { Header } from "../components/Header";
import { LeftSidebar } from "../components/LeftSidebar";

Dashboard.propTypes = {};

export function Dashboard() {
  return (
    <div className="w-full min-h-screen grid md:grid-cols-[300px,_auto]">
      <div className="bg-slate-500 hidden md:block">
        <LeftSidebar />
      </div>
      <div className="">
        <Header />
      </div>
    </div>
  );
}
