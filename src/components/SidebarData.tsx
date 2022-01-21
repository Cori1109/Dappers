import React from "react";
import * as FaIcons from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaIcons.FaHome />,
  },
  {
    title: "Create",
    path: "/create",
    icon: <FaIcons.FaBuffer />,
  },
  {
    title: "Token Creation",
    path: "/token_creation",
    icon: <FaIcons.FaEthereum />,
  },
  {
    title: "Deploy DAPP",
    path: "/deploy_dapp",
    icon: <FaIcons.FaRss />,
  },
  {
    title: "User Manual Videos",
    path: "/videos",
    icon: <FaIcons.FaYoutubeSquare />,
  },
  {
    title: "Open Ticket",
    path: "/ticket",
    icon: <FaIcons.FaTicketAlt />,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: <FaIcons.FaChartBar />,
  },
  {
    title: "Documents",
    path: "/documents",
    icon: <FaIcons.FaFileWord />,
  },
];
