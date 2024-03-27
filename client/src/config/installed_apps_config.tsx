import zepplin from "../assets/zeplin.png";
import figma from "../assets/figma.png";
import meta from "../assets/meta.png";
import angular from "../assets/Angular.png";
import vue from "../assets/vue.png";

type data = {
  source: {
    title: string;
    element: JSX.Element;
  };
  amount: number;
  status: string;
  userID: number;
  joined: string;
  group: string;
};

export const installedAppData: data[] = [
  {
    source: {
      title: "Zepplin",
      element: <img src={zepplin} alt="not found" className="h-[44px] w-[44px]" />,
    },
    amount: 686.0,
    status: "Active",
    userID: 114423,
    joined: "October",
    group: "Design",
  },
  {
    source: {
      title: "Figma",
      element: <img src={figma} alt="not found" className="h-[44px] w-[44px]" />,
    },
    amount: 864.0,
    status: "Pending",
    userID: 76223,
    joined: "June",
    group: "Finance",
  },
  {
    source: {
      title: "Meta",
      element: <img src={meta} alt="not found" className="h-[44px] w-[44px]" />,
    },
    amount: 176.0,
    status: "Cancelled",
    userID: 89453,
    joined: "March",
    group: "Coding",
  },
  {
    source: {
      title: "Angular",
      element: <img src={angular} alt="not found" className="h-[44px] w-[44px]" />,
    },
    amount: 49.0,
    status: "Active",
    userID: 11467,
    joined: "February",
    group: "Marketing",
  },
  {
    source: {
      title: "Vue",
      element: <img src={vue} alt="not found" className="h-[44px] w-[44px]" />,
    },
    amount: 999.0,
    status: "Active",
    userID: 67385,
    joined: "October",
    group: "Finance",
  },
];
