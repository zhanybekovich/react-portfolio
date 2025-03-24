import "./app.scss";
import Banner from "./components/Banner/Banner";
import FeatWorks from "./components/FeatWorks/FeatWorks";
import Footer from "./components/Footer/Footer";
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
      <Footer />
    </>
  );
}

export default App;
