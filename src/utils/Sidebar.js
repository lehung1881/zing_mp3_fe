import icons from "./icons";
const { MdOutlineLibraryMusic } = icons;

export const sidebar = [
  {
    path: "personal",
    title: "Cá nhân",
    icon: <MdOutlineLibraryMusic size={24}/>
  },
  {
    path: "",
    title: "Khám phá",
    end: true,
    icon: <MdOutlineLibraryMusic size={24}/>
  },
  {
    path: "zing-chart",
    title: "#zingchart",
    icon: <MdOutlineLibraryMusic size={24}/>
  },
  {
    path: "follow",
    title: "Theo dõi",
    icon: <MdOutlineLibraryMusic size={24}/>
  },
]