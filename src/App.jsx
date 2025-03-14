import "./app.scss";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import RecentPostSection from "./components/RecentPostSection/RecentPostSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <RecentPostSection />
      </main>
    </>
  );
}

export default App;
