import { useEffect, useState } from "react";
import { Typography } from "../baseline-component/typography/Typography";
import Tabs from "../baseline-component/tab/Tabs";
import { PRTimeline } from "./Timeline";
import DescSidebar from "./DescSidebar";

import Card from "../baseline-component/card/Card";
import Header from "./Header";
import { ThemeToggle } from "./ThemeToggle";
import { PR } from "../utils/types/pr";

const Main = () => {
  const [prData, setPrData] = useState<{ pr: PR } | null>(null);
  const [tab, setTab] = useState("conversation");

  const tabItems = [
    {
      label: "Conversation",
      value: "conversation",
      icon: "",
      count: 3,
    },
    {
      label: "Commits",
      value: "commits",
      icon: "",
      count: 1,
    },
    {
      label: "Checks",
      value: "checks",
      icon: "",
      count: 5,
    },
    {
      label: "Files changed",
      value: "files",
      icon: "",
      count: 1,
    },
  ];
  const fetchData = async () => {
    const response = await fetch("./content.json");
    const data = await response.json();
    setPrData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (!prData) return <div>Loading…</div>;

  const events = prData.pr.timeline.map((item, idx) => ({
    id: `${item.type}-${idx}`,
    ...item,
    avatarUrl:
      item.type === "comment"
        ? `https://github.com/${item.user}.png`
        : undefined,
  }));

  return (
    <div className="dark:bg-body-bg">
      <div className="pt-2 pl-2">
        {" "}
        <ThemeToggle />
      </div>

      <Header data={prData} />

      <div className="px-7">
        <Tabs
          tabs={tabItems}
          activeTab={tab}
          onTabChange={setTab}
          showStat={true}
        />

        <br />

        {tab === "conversation" ? (
          <div className="flex gap-4 p">
            <div className="w-9/12">
              <PRTimeline events={events} />
              <Card
                size="lg"
                borderColorClass="border-[#8957e5] border-2"
                className="bg-transparent my-4"
              >
                <Typography variant="h4" className="">
                  Pull request successfully merged and closed
                </Typography>
                <Typography variant="subtitle">
                  You're all set — the branch has been merged.
                </Typography>
              </Card>
            </div>

            <div className="flex-1 ">
              <DescSidebar pr={prData} />
            </div>
          </div>
        ) : (
          <Typography variant="h3">No Items</Typography>
        )}
      </div>
    </div>
  );
};

export default Main;
