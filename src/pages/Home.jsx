import CustomerSay from "../Components/CustomerSay";
import Event from "../Components/Event";
import HeroSection from "../Components/HeroSection";
import OurMenu from "../Components/OurMenu";
import WeProvide from "../Components/WeProvide";

function Home() {
  return (
    <div style={{ marginTop: "120px" }}>
      <HeroSection />
      <OurMenu />
      <WeProvide />
      <Event />
      <CustomerSay />
    </div>
  )
}

export default Home;