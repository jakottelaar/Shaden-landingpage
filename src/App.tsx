import "./App.css";
import Layout from "./Layout";
import Banner from "./components/Banner";
import FriendSection from "./components/FriendSection";
import StatsSection from "./components/StatsSection";
import UpcomingServerFeatureSection from "./components/UpcomingFeaturesSection";

function App() {
  return (
    <>
      <Layout>
        <Banner />
        <StatsSection />
        <FriendSection />
        <UpcomingServerFeatureSection />
      </Layout>
    </>
  );
}

export default App;
