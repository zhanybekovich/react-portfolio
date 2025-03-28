import "./app.scss";
import Banner from "./components/Banner/Banner";
import FeatWorks from "./components/FeatWorks/FeatWorks";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RecentPostSection from "./components/RecentPostSection/RecentPostSection";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const [pageData, setPageData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const baseUrl = "http://portfolio.test/api";

  return (
    <>
      <Header />
      <main>{isLoading ? <Spinner /> : <h1>Hello</h1>}</main>
      <Footer />
    </>
  );
}

export default App;
