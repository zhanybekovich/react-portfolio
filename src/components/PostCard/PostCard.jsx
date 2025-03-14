import "./post-card.scss";

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <h3 className="post-card-title">
        <a href="#">{post.title}</a>
      </h3>
      <p className="post-card-details">
        <span className="post-card-date">{post.date}</span>
        {post.categories.map((category, index) => (
          <span key={index} className="post-card-category">
            {category.name}
          </span>
        ))}
      </p>
      <p className="post-card-excerpt">{post.excerpt}</p>
    </div>
  );
}
