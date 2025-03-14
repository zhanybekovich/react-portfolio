import "./recent-post.scss";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function RecentPostSection() {
  return (
    <section className="recent-post">
      <div className="container">
        <div className="recent-post-top">
          <SectionTitle>Recent Posts</SectionTitle>
        </div>
      </div>
    </section>
  );
}
