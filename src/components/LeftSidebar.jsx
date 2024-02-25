import PropTypes from "prop-types";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";
import { useUiContext } from "../context/UiContexts";
import { useNavigate } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";

LeftSidebar.propTypes = {};

export function LeftSidebar() {
  const [broken, setBroken] = useState(
    window.matchMedia("(max-width: 768px)").matches,
  );
  const { setBreakPointHelper, toggleHelper, setToggleHelper } = useUiContext();
  const navigate = useNavigate();

  useEffect(() => {
    setBreakPointHelper(broken);
  }, [broken]);

  return (
    <>
      <Sidebar
        toggled={toggleHelper}
        onBackdropClick={() => setToggleHelper(false)}
        backgroundColor="#f8fafc"
        customBreakPoint="768px"
        onBreakPoint={setBroken}
      >
        <div className="logo py-8 px-8 hidden md:block">
          <h1 className="text-4xl font-bold text-primary-400">DashUI</h1>
        </div>
        <Menu>
          <MenuItem
            icon={<CgProfile />}
            className="text-xl font-semibold text-slate-500"
            onClick={() => {
              setToggleHelper(false);
              navigate("/profile");
            }}
          >
            {" "}
            Profile{" "}
          </MenuItem>
          <MenuItem
            icon={<IoSettingsSharp />}
            className="text-xl font-semibold text-slate-500"
            onClick={() => {
              setToggleHelper(false);
              navigate("/settings");
            }}
          >
            {" "}
            Settings{" "}
          </MenuItem>
          <MenuItem
            icon={<MdOutlineSpaceDashboard />}
            className="text-xl font-semibold text-slate-500"
            onClick={() => {
              setToggleHelper(false);
              navigate("/dashboard");
            }}
          >
            {" "}
            Dashboard{" "}
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}
