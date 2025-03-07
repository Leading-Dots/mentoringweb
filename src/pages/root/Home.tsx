import { DialogLoader } from "@/components/common/DialogLoader";
import ListComponent from "@/components/home/ListComponent";
import SessionRequestComponent from "@/components/home/SessionRequestComponent";
import SessionsComponent from "@/components/home/SessionsComponent";
import React from "react";

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  if(isLoading) {
    <DialogLoader />
  }
  return (
    <main className="container p-2 space-y-5">
      <div className="max-w-4xl space-y-4 mx-auto">
        <SessionsComponent  />
      </div>
      <div className="flex items-center justify-between">
        <SessionRequestComponent  />
      </div>
      <div className="flex items-center justify-between max-w-4xl">
        <ListComponent  />
      </div>
    </main>
  );
};

export default Home;
