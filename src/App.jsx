import "./App.css";
import { HomeSection } from "./HomeSection";
import { Process } from "./Process";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Steps } from "./components/Steps";
import { Powered } from "./components/powered";

export default function App() {
  return (
    <>
      <Powered />
      <Navbar />
      <HomeSection />
      <Process />
      <Features />
      <Steps />
      <Footer />
    </>
  );
}
