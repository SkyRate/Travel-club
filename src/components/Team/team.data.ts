import { ITeamBlock } from "./team.interface";
import Sasha from "../../assets/Sasha.jpg";
import Malena from "../../assets/Malena.jpg";
import Igor from "../../assets/Igor.jpg";

export const TeamBlockData: ITeamBlock[] = [
  {
    image: Sasha,
    name: "Саша",
    socialF: "Facebook",
    socialT: "Twitter",
    linkF: "https://www.facebook.com/",
    linkT: "https://twitter.com/",
  },
  {
    image: Malena,
    name: "Малена",
    socialF: "Facebook",
    socialT: "Twitter",
    socialI: "Instagram",
    linkF: "https://www.facebook.com/",
    linkT: "https://twitter.com/",
    linkI: "https://www.instagram.com/",
  },
  {
    image: Igor,
    name: "Игорь",
    socialT: "Twitter ",
    socialI: "Instagram ",
    linkT: "https://twitter.com/",
    linkI: "https://www.instagram.com/",
  },
];
