import "./recent-post.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import Link from "../Link/Link";

export default function RecentPostSection() {
  return (
    <section className="recent-post">
      <div className="container">
        <div className="recent-post-top">
          <SectionTitle>Recent Posts</SectionTitle>
          <Link url="#">View all</Link>
        </div>
      </div>
    </section>
  );
}
