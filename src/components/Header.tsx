import React, { useState } from "react";
import { Typography } from "../baseline-component/typography/Typography";
import Badge from "../baseline-component/badges/Badge";
import DropdownButton from "../baseline-component/dropdown-button/DropdownButton";
import Tabs from "../baseline-component/tab/Tabs";

const Header = ({ data }) => {
  const [tab, setTab] = useState("Local");
  const tabItems = [
    {
      label: "Local",
      value: "local",
      icon: "",
    },
    {
      label: "Codespaces",
      value: "codespaces",
      icon: "",
    },
  ];
  const { pr } = data;
  return (
    <div className="flex flex-row justify-between px-7 mb-3 py-4">
      <div>
        <Typography variant="h1" className="tracking-wide mb-4">
          {pr && pr?.title}
        </Typography>
        <Badge variant="merged" size="xl" className="bg-[#8957e5] mr-2 ">
          <img src="/icons/merged.svg" className="mr-1" /> {pr.state}
        </Badge>{" "}
        <Typography variant="subtitle">
          <Typography variant="bold" className="text-gray-500 ">
            {" "}
            {pr.merged_by}
          </Typography>{" "}
          merged 1 commit into{" "}
          <Badge variant="info" className="rounded-sm">
            {pr.base}
          </Badge>{" "}
          from{" "}
          <Badge variant="info" className="rounded-sm">
            {pr.head}
          </Badge>{" "}
          on {pr.merged_at}{" "}
        </Typography>
      </div>
      <div>
        <DropdownButton label="Code" responsiveWidth="sm">
          <div className="dark:bg-body-bg dark:text-white text-black bg-transparent p-6">
            <Tabs tabs={tabItems} activeTab={tab} onTabChange={setTab} />
          </div>
        </DropdownButton>
      </div>
    </div>
  );
};

export default Header;
