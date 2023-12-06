import { DataDisplay, Layout } from "@/components";
import useStore from "@/context/context";
import React from "react";
import Collection from "./Collection";

const Sidebar = () => {
  const { state } = useStore();
  const { collections } = state;

  return (
    <aside className="w-[300px] border-r">
      <Layout.Sidebar.Header />
      {collections.length > 0 ? (
        collections.map((collection) => (
          <Collection data={collection} key={collection.$id} />
        ))
      ) : (
        <DataDisplay.Empty.Collection />
      )}
    </aside>
  );
};

export default Sidebar;
