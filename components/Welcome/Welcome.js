import Info from "../Info/Info";
import FeelGuilty from "./FeelGuilty";
import WelcomeSection from "./WelcomeSection";

export default function Welcome() {
  return (
    <>
      <WelcomeSection />
      <FeelGuilty />
      <Info />
    </>
  );
}
