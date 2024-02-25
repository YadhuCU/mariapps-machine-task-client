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
        <div className="p-5 space-y-4 grid xl:grid-cols-[2fr,_1fr]">
          {/* Profile updatation section */}
          <div className="space-y-4">
            <div className="grid xl:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-slate-900">Name</label>
                <input
                  className="px-5 py-3 border placeholder:text-slate-400 border-slate-300 rounded-xl outline-none"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-slate-900">Place</label>
                <input
                  className="px-5 py-3 border placeholder:text-slate-400 border-slate-300 rounded-xl outline-none"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-slate-900">Live In</label>
                <input
                  className="px-5 py-3 border placeholder:text-slate-400 border-slate-300 rounded-xl outline-none"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-slate-900">Home Town</label>
                <input
                  className="px-5 py-3 border placeholder:text-slate-400 border-slate-300 rounded-xl outline-none"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
            </div>
            <div className="grid xl:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-slate-900">Education</label>
                <input
                  className="px-5 py-3 border placeholder:text-slate-400 border-slate-300 rounded-xl outline-none"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-slate-900">Language</label>
                <input
                  className="px-5 py-3 border placeholder:text-slate-400 border-slate-300 rounded-xl outline-none"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-slate-900">About Yourself</label>
              <textarea
                className="px-5 py-3 border placeholder:text-slate-400 border-slate-300 rounded-xl outline-none"
                type="text"
                placeholder="Your email address"
              />
            </div>
            <div className="flex gap-2">
              <button className="ml-auto px-4 py-2 font-semibold rounded-xl bg-danger-400 text-slate-50">
                Cancel
              </button>
              <button className="px-4 py-2 rounded-xl font-semibold bg-primary-400 text-slate-50">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
