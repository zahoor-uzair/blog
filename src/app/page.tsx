import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LandingPage from "../components/landing-page";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <LandingPage />
      <Footer />
    </main>
  );
}
