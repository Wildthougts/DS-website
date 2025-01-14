import Footer2 from "@/components/footers/Footer2";

import Header8 from "@/components/headers/Header8";
import Home8 from "@/components/homes/home-8";
import Hero1 from "@/components/homes/home-8/heros/Hero1";
import Hero3 from "@/components/homes/home-8/heros/Hero3";
import { modernMultipage } from "@/data/menu";
import dynamic from "next/dynamic";
const ParallaxContainer = dynamic(
  () => import("@/components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);
export const metadata = {
  title: "Darlington Sheriff Portfolio Website",
  description: "Nigeria Christain Content Creator, Filmaker & Photographer",
};
export default function Home8ImageParallax2MultiPage() {
  return (
    <>
      <div className="theme-modern">
        <div className="page" id="top">
          <div className="dark-mode">
            <nav className="main-nav dark transparent stick-fixed wow-menubar">
              <Header8 links={modernMultipage} />
            </nav>{" "}
          </div>
          <main id="main">
            <ParallaxContainer
              className="home-section bg-dark-1 bg-dark-alpha-30 light-content parallax-5 scrollSpysection"
              id="home"
              style={{
                backgroundImage: "url(/assets/images/sdweb.png)",
              }}
            >
              <Hero3 />
            </ParallaxContainer>

            <Home8 eadge2 />
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer2 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
