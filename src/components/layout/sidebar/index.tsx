import React from "react";
import Header from "./Header";
import useStore from "@/store/context";
import Collection from "./Collection";
import { DataDisplay } from "@/components";

const Sidebar = () => {
  const { state } = useStore();
  const { collections } = state;

  return (
    <aside className="w-[300px] border-r">
      <Header />
      {collections.length > 0 ? (
        collections.map((collection) => (
          <Collection data={collection} key={collection.id} />
        ))
      ) : (
        <DataDisplay.Empty.Collection />
      )}
    </aside>
  );
};

export default Sidebar;
