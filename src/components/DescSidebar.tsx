import Avatar from "../baseline-component/avatar/Avatar";
import Badge from "../baseline-component/badges/Badge";
import { SidebarSection } from "../baseline-component/sidebarSection/SidebarSection";

const ApprovalIcon = () => (
  <span className="flex items-center justify-center w-5 h-5 text-green-600 dark:text-green-400">
    <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
      <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
    </svg>
  </span>
);

const DescSidebar = ({ pr }) => {
  const renderReviewer = (item, i) => (
    <div key={i} className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Avatar src={`https://github.com/${item.user}.png`} />
        <span className="dark:text-gray-300  text-black">{item.user}</span>
      </div>
      {item.state === "approved" && <ApprovalIcon />}
    </div>
  );

  const renderBadge = (item, i) => (
    <Badge key={i} variant="success" size="sm">
      {item}
    </Badge>
  );

  const renderParticipant = (item, i) => (
    <Avatar key={i} src={`https://github.com/${item}.png`} />
  );

  return (
    <div className="flex flex-col">
      <SidebarSection
        title="Reviewers"
        items={pr.pr.reviews}
        emptyText="No reviewers"
        renderItem={renderReviewer}
      />

      <SidebarSection
        title="Labels"
        items={pr.pr.labels}
        emptyText="No labels"
        renderItem={renderBadge}
      />

      <SidebarSection
        title="Projects"
        items={pr.pr.projects}
        emptyText="None Yet"
        renderItem={renderBadge}
      />

      <SidebarSection
        title="Milestone"
        items={pr.pr.milestone}
        emptyText="No milestone"
        renderItem={renderBadge}
      />

      <SidebarSection
        title={`${pr.pr.participants.length} participants`}
        items={pr.pr.participants}
        emptyText="No participants"
        renderItem={renderParticipant}
      />
    </div>
  );
};

export default DescSidebar;
