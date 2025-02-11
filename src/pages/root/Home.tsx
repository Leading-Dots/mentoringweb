import ListComponent from "@/components/home/ListComponent";
import SessionRequestComponent from "@/components/home/SessionRequestComponent";

const Home = () => {
  return (
    <main className="container p-2 space-y-5">
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center justify-between">
          <SessionRequestComponent />
        </div>

        <div className="flex items-center justify-between">
          <ListComponent />
        </div>
      </div>
    </main>
  );
};

export default Home;
