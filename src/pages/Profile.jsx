import PropTypes from "prop-types";
import { LeftSidebar } from "../components/LeftSidebar";
import { Header } from "../components/Header";
import { FaLocationDot } from "react-icons/fa6";
import profilePicture from "../assets/profilepicure.jpg";

Profile.propTypes = {};

export function Profile() {
  const badges = [
    "Fashion",
    "Travalling",
    "Karoke",
    "Nature",
    "Art",
    "Uno",
    "Anime",
    "Music",
  ];
  return (
    <div className="w-full min-h-screen grid md:grid-cols-[300px,_auto]">
      <LeftSidebar />
      <div className="">
        <Header />
        <div className="p-5 grid lg:grid-cols-[2fr,_1fr] gap-4">
          <div className="space-y-4">
            {/* profile header section */}
            <div className="rounded-xl grid xl:grid-cols-[1fr,_2fr] gap-4 overflow-hidden text-slate-600 bg-slate-50">
              <img
                className="object-cover object-top h-full w-full"
                src={profilePicture}
              />
              <div className="p-5">
                <h1 className="text-3xl font-semibold">User Name, 22</h1>
                <div className="flex items-center gap-2 text-slate-500">
                  <FaLocationDot />
                  <p className="">Place</p>
                </div>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                  sint cillum sint consectetur cupidatat.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {badges.map((item, index) => (
                    <p
                      key={index}
                      className="bg-primary-100 text-primary-800 cursor-pointer py-2 px-4 rounded-lg"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            {/* profile image section */}
            <div className="rounded-xl space-y-2 p-4 bg-slate-50">
              <p className="text-slate-600 text-lg px-4">Photos</p>
              <div className="flex gap-2 flex-wrap">
                <img
                  src="https://source.unsplash.com/random"
                  className="size-52 mx-auto rounded-xl"
                />
                <img
                  src="https://source.unsplash.com/random"
                  className="size-52 mx-auto rounded-xl"
                />
                <img
                  src="https://source.unsplash.com/random"
                  className="size-52 mx-auto rounded-xl"
                />
                <img
                  src="https://source.unsplash.com/random"
                  className="size-52 mx-auto rounded-xl"
                />
              </div>
            </div>
            {/* about section */}
            <div className="rounded-xl space-y-4 p-4 bg-slate-50 ">
              <p className="text-slate-600 text-lg px-4">About</p>
              <div className="grid xl:grid-cols-2 gap-4 px-4 text-slate-400">
                <div className="space-y-4">
                  <div className="grid grid-cols-2">
                    <p>Live In: </p>
                    <p className="text-slate-600">Tblise, Georgia </p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Home Town: </p>
                    <p className="text-slate-600">Saint Peterbug, Rusia </p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Education: </p>
                    <p className="text-slate-600">
                      Bachlors of Software Engineering
                    </p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Language: </p>
                    <p className="text-slate-600">English, Russia </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="grid grid-cols-2">
                    <p>Live In: </p>
                    <p className="text-slate-600">Tblise, Georgia </p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Home Town: </p>
                    <p className="text-slate-600">Saint Peterbug, Rusia </p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Education: </p>
                    <p className="text-slate-600">
                      Bachlors of Software Engineering
                    </p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Language: </p>
                    <p className="text-slate-600">English, Russia </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {/* Message section */}
            <div className="rounded-xl space-y-4 p-4 bg-slate-50 ">
              <p className="text-slate-600 text-lg px-4">Messages</p>
              <div className="p-1 bg-primary-100 rounded-xl flex gap-2">
                <button className="text-primary-800 px-4 py-2 rounded-xl flex-grow bg-slate-50">
                  Chats
                </button>
                <button className="text-primary-800 px-4 py-2 flex-grow rounded-xl">
                  Requests
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {/* // chat users */}
                <div className="flex gap-2 text-slate-600">
                  <img
                    src="https://source.unsplash.com/random"
                    className="size-16 rounded-full"
                  />
                  <div className="flex-grow flex items-center">
                    <div className="px-4">
                      <p className="text-slate-800 text-lg">Username</p>
                      <p>messages....</p>
                    </div>
                    <p className="text-sm ml-auto text-slate-400">6:00am</p>
                  </div>
                </div>
                <div className="flex gap-2 text-slate-600">
                  <img
                    src="https://source.unsplash.com/random"
                    className="size-16 rounded-full"
                  />
                  <div className="flex-grow flex items-center">
                    <div className="px-4">
                      <p className="text-slate-800 text-lg">Username</p>
                      <p>messages....</p>
                    </div>
                    <p className="text-sm ml-auto text-slate-400">6:00am</p>
                  </div>
                </div>
                <div className="flex gap-2 text-slate-600">
                  <img
                    src="https://source.unsplash.com/random"
                    className="size-16 rounded-full"
                  />
                  <div className="flex-grow flex items-center">
                    <div className="px-4">
                      <p className="text-slate-800 text-lg">Username</p>
                      <p>messages....</p>
                    </div>
                    <p className="text-sm ml-auto text-slate-400">6:00am</p>
                  </div>
                </div>
                <div className="flex gap-2 text-slate-600">
                  <img
                    src="https://source.unsplash.com/random"
                    className="size-16 rounded-full"
                  />
                  <div className="flex-grow flex items-center">
                    <div className="px-4">
                      <p className="text-slate-800 text-lg">Username</p>
                      <p>messages....</p>
                    </div>
                    <p className="text-sm ml-auto text-slate-400">6:00am</p>
                  </div>
                </div>
                <div className="flex gap-2 text-slate-600">
                  <img
                    src="https://source.unsplash.com/random"
                    className="size-16 rounded-full"
                  />
                  <div className="flex-grow flex items-center">
                    <div className="px-4">
                      <p className="text-slate-800 text-lg">Username</p>
                      <p>messages....</p>
                    </div>
                    <p className="text-sm ml-auto text-slate-400">6:00am</p>
                  </div>
                </div>
              </div>
            </div>
            {/* My contact online section */}
            <div className="rounded-xl space-y-4 p-4 bg-slate-50 ">
              <p className="text-slate-600 text-lg px-4">Messages</p>
              <div className="flex flex-wrap gap-4">
                <img
                  src="https://source.unsplash.com/random"
                  className="rounded-full size-16 mx-auto"
                />
                <img
                  src="https://source.unsplash.com/random"
                  className="rounded-full size-16 mx-auto"
                />
                <img
                  src="https://source.unsplash.com/random"
                  className="rounded-full size-16 mx-auto"
                />
                <img
                  src="https://source.unsplash.com/random"
                  className="rounded-full size-16 mx-auto"
                />
                <img
                  src="https://source.unsplash.com/random"
                  className="rounded-full size-16 mx-auto"
                />
                <img
                  src="https://source.unsplash.com/random"
                  className="rounded-full size-16 mx-auto"
                />
                <img
                  src="https://source.unsplash.com/random"
                  className="rounded-full size-16 mx-auto"
                />
                <img
                  src="https://source.unsplash.com/random"
                  className="rounded-full size-16 mx-auto"
                />
                <img
                  src="https://source.unsplash.com/random"
                  className="rounded-full size-16 mx-auto"
                />
                <img
                  src="https://source.unsplash.com/random"
                  className="rounded-full size-16 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
