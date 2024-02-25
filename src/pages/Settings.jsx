import PropTypes from "prop-types";
import { LeftSidebar } from "../components/LeftSidebar";
import { Header } from "../components/Header";

Settings.propTypes = {};

export function Settings() {
  return (
    <div className="w-full min-h-screen grid md:grid-cols-[300px,_auto]">
      <LeftSidebar />
      <div className="">
        <Header />
        <div className="p-5 space-y-4"></div>
      </div>
    </div>
  );
}
