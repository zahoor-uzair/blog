import Headcards from "@/components/headcards";
import Mainpost from "@/components/mainpost";
import SideList from "@/components/sidelist";

export default function Home() {
  return (
    <main>
      <Headcards />
      <div className="flex justify-between flex-wrap md-justify-center align-center my-6">
        <Mainpost />
        <SideList />
      </div>
    </main>
  );
}
