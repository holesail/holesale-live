import "./App.css";
import { HomeSection } from "./HomeSection";
import { Process } from "./Process";
import Features from "./components/Features";
import { Navbar } from "./components/Navbar";
import { Powered } from "./components/powered";

export default function App() {
  return (
    <>
      <Powered />
      <Navbar />
      <HomeSection />
      <Process />
      <Features />
    </>
  );
}
