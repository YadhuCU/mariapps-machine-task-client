import PropTypes from "prop-types";
import { LeftSidebar } from "../components/LeftSidebar";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

Settings.propTypes = {};

export function Settings() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    name: "",
    place: "",
    liveIn: "",
    homeTown: "",
    education: "",
    language: "",
    bio: "",
  });

  useEffect(() => {
    if (!sessionStorage.token) {
      navigate("/");
    }
  }, []);

  const handleUpdate = () => {
    alert("updated successfully");
    handleCancel();
    navigate("/profile");
  };

  const handleCancel = () => {
    setUserDetails({
      name: "",
      place: "",
      liveIn: "",
      homeTown: "",
      education: "",
      language: "",
      bio: "",
    });
  };

  return (
    <div className="w-full min-h-screen grid md:grid-cols-[300px,_auto]">
      <LeftSidebar />
      <div className="">
        <Header />
        <div className="p-5 space-y-4 grid xl:grid-cols-[2fr,_1fr]">
          {/* Profile updatation section */}
          <div className="space-y-4">
            <div className="grid xl:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-slate-900">Name</label>
                <input
                  value={userDetails.name}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, name: e.target.value })
                  }
                  className="px-5 py-3 border placeholder:text-slate-400 border-slate-300 rounded-xl outline-none"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-slate-900">Place</label>
                <input
                  value={userDetails.place}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, place: e.target.value })
                  }
                  className="px-5 py-3 border placeholder:text-slate-400 border-slate-300 rounded-xl outline-none"
                  type="text"
                  placeholder="Your place"
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-slate-900">Live In</label>
                <input
                  value={userDetails.liveIn}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, liveIn: e.target.value })
                  }
                  className="px-5 py-3 border placeholder:text-slate-400 border-slate-300 rounded-xl outline-none"
                  type="text"
                  placeholder="You'r Live in"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-slate-900">Home Town</label>
                <input
                  value={userDetails.homeTown}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, homeTown: e.target.value })
                  }
                  className="px-5 py-3 border placeholder:text-slate-400 border-slate-300 rounded-xl outline-none"
                  type="text"
                  placeholder="Your home town"
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-slate-900">Education</label>
                <input
                  value={userDetails.education}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      education: e.target.value,
                    })
                  }
                  className="px-5 py-3 border placeholder:text-slate-400 border-slate-300 rounded-xl outline-none"
                  type="text"
                  placeholder="Your Education"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-slate-900">Language</label>
                <input
                  value={userDetails.language}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, language: e.target.value })
                  }
                  className="px-5 py-3 border placeholder:text-slate-400 border-slate-300 rounded-xl outline-none"
                  type="text"
                  placeholder="Your Languages"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-slate-900">About Yourself</label>
              <textarea
                value={userDetails.bio}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, bio: e.target.value })
                }
                className="px-5 py-3 border placeholder:text-slate-400 border-slate-300 rounded-xl outline-none"
                type="text"
                placeholder="Your Bio"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleCancel}
                className="ml-auto px-4 py-2 font-semibold rounded-xl bg-danger-400 text-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 rounded-xl font-semibold bg-primary-400 text-slate-50"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
