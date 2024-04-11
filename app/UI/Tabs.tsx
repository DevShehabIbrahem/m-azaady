import { Tab } from "@headlessui/react";
import React, { useState } from "react";

type Props = {};

const Tabs = (props: Props) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  let [categories] = useState({
    Products: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Articles: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Reviews: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });
  return (
    <div className="w-full max-w-md px-2 py-4 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-white p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-full py-2.5 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-[#FF951D] focus:outline-none focus:ring-2",
                  selected
                    ? "bg-[#ff961d4b] text-[#FF951D] shadow"
                    : "text-[#828282] border-2 hover:bg-[#ff961d8d] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            ></Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Tabs;
