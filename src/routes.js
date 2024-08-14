import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";
import VideoAi from "views/admin/studio/video/VideoAi";
import VoiceAi from "views/admin/studio/audio/VoiceAi";

const routes = [
  {
    name: "Home",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Home",
    layout: "/",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "My Avatar",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Studio AI",
    layout: "/admin",
    path: "admin",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <VideoAi />,
    secondary: false,
    subRoutes: [
      {
        name: "Video AI",
        path: "video-ai",
        icon: <MdBarChart className="h-6 w-6" />,
        component: <VideoAi />,
      },
      {
        name: "Voice AI",
        layout: "/admin",
        path: "voice-ai",
        icon: <MdBarChart className="h-6 w-6" />,
        component: <VoiceAi />,
      },
    ],
  },
  {
    name: "My Agents",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Analytics",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
];
export default routes;
