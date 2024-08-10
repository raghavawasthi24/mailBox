import React from "react";
import InboxHead from "./inbox-head";
import InboxContent from "./inbox-content";

export default function InboxMain({ activeMailData, currentUser }: any) {
  console.log("Active Mail Data:", activeMailData);
  return (
    <div className="bg-muted4 h-full relative">
      <InboxHead currentUser={currentUser} />
      <InboxContent activeMailData={activeMailData} currentUser={currentUser} />
    </div>
  );
}
