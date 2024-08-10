import React from "react";
import InboxHead from "./inbox-head";
import InboxContent from "./inbox-content";

export default function InboxMain({ activeMailData }: any) {
  console.log("Active Mail Data:", activeMailData);
  return (
    <div className="w-full">
      <InboxHead />

      <InboxContent activeMailData={activeMailData} />
    </div>
  );
}
