import Navbar from "../components/navbar"
import Headcards from "@/components/headcards";
import Mainpost from "@/components/mainpost";
import SideList from "@/components/sidelist";
import Footer from "../components/footer";



export default function Home() {
  return (
  <main className="container m-auto"> 
   <Navbar />
      <Headcards />
      <div className="flex justify-between flex-wrap md-justify-center align-center my-6">
        <Mainpost />
        <SideList />
      </div>
      <Footer />
  </main>
  );
}
