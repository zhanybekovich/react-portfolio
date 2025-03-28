import "./banner.scss";
import BannerImg from "../../assets/banner-img.png";
import AccentBtn from "../AccentBtn/AccentBtn";

export default function Banner({ aboutData }) {
  console.log(aboutData);
  return (
    <section className="banner">
      <div className="container banner-container">
        <div className="banner-text">
          <h1 className="banner-title">Hello</h1>
          <p className="banner-description">Hello</p>

          <AccentBtn url="#">Скачать резюме</AccentBtn>
        </div>
        <img className="banner-img" src={BannerImg} alt="John Doe" />
      </div>
    </section>
  );
}
