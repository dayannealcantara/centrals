import { HomeIcon } from "@components/icons/home";
import { SidebarResource } from "../components/core/sidebar/types";
import { FingerprintIcon } from "@components/icons/fingerprint";

export const MENU_RESOURCES_CONFIGS: SidebarResource[] = [
  {
    id: "inicio",
    title: "Início",
    item: <HomeIcon customSize="3rem" />,
    path: "/",
  },
  {
    id: "central",
    title: "Centrais",
    item: <FingerprintIcon customSize="3rem" />,
    path: "/centrais",
  },
];
