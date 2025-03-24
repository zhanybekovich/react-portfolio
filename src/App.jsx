import "./app.scss";
import Banner from "./components/Banner/Banner";
import FeatWorks from "./components/FeatWorks/FeatWorks";
import Header from "./components/Header/Header";
import RecentPostSection from "./components/RecentPostSection/RecentPostSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <RecentPostSection />
        <FeatWorks />
      </main>
    </>
  );
}

export default App;
