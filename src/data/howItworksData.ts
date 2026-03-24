import { type HowItWorksData } from "../types/works.types";
import { FaSearch, FaUser } from "react-icons/fa";
import { FiCode } from "react-icons/fi";

const howItWorksData: HowItWorksData[] = [
    {
        id: 1,
        icon: FaSearch,
        title: "Search a Username",
        desc: "Enter any GitHub username in the search bar"
    },
    {
        id: 2,
        icon: FaUser,
        title: "View Their Profile",
        desc: "See their bio, stats and public information"
    },
    {
        id: 3,
        icon: FiCode,
        title: "Explore Their Work",
        desc: "Browse repositories and discover their projects"
    },
];

export default howItWorksData;