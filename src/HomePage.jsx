import { HomeSection } from "./HomeSection";
import { Process } from "./Process";
import { Features } from "./components/Features";
import { Steps } from "./components/Steps";

export function HomePage() {
  return (
    <>
      <HomeSection />
      <Process />
      <Features />
      <Steps />
    </>
  );
}
