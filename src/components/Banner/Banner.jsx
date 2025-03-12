import "./banner.scss";
import BannerImg from "../../assets/banner-img.png";
export default function Banner() {
  return (
    <section className="banner">
      <div className="container banner-container">
        <div className="banner-text">
          <h1 className="banner-title">Hi, I am John, Creative Technologist</h1>
          <p className="banner-description">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <img className="banner-img" src={BannerImg} alt="John Doe" />
      </div>
    </section>
  );
}
