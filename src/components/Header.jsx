import PropTypes from "prop-types";
import { IoMenu } from "react-icons/io5";
import avatar from "../assets/avatar.png";
import settings from "../assets/settings.svg";
import notifction from "../assets/notification.svg";
import searchIcon from "../assets/search-icon.svg";

Header.propTypes = {};

export function Header() {
  return (
    <div className="w-full text-slate-800 px-5 py-5 md:px-8 flex items-center justify-between">
      <div className="text-3xl cursor-pointer md:hidden">
        <IoMenu />
      </div>
      <div>
        <h2 className="font-semibold text-xl md:text-2xl">Dashboard</h2>
      </div>
      <div className="flex gap-7 items-center">
        <div className="py-2 px-4 hidden lg:flex gap-2 items-center cursor-pointer rounded-full bg-slate-100">
          <img src={searchIcon} className="size-5" />
          <input
            className="bg-slate-100 w-full"
            type="text"
            placeholder="Search something"
          />
        </div>
        <div className="p-2 hidden md:block cursor-pointer rounded-full bg-slate-100">
          <img src={notifction} className="size-7" />
        </div>
        <div className="p-2 hidden md:block cursor-pointer rounded-full bg-slate-100">
          <img src={settings} className="size-7" />
        </div>
        <div className="size-14 rounded-full overflow-hidden">
          <img src={avatar} className="object-cover w-full cursor-pointer" />
        </div>
      </div>
    </div>
  );
}