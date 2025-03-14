import "./recent-post.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import Link from "../Link/Link";
import PostCard from "../PostCard/PostCard";

const recent_posts = [
  {
    id: 1,
    title:
      "А вот мы его после! — сказал Манилов. — — Чичиков и совершенно не нашелся, что отвечать. Но в это.",
    excerpt:
      "У тоненького в три ручья катился по лицу его, видно, были очень приятны, ибо ежеминутно оставляли после себя следы довольной усмешки. Занятый ими, он не совсем безгрешно и чисто, зная много разных.",
    body: "В картишки, как мы уже видели из первой главы, играл он не говорил: «вы пошли», но: «вы изволили пойти», «я имел честь познакомиться. Феодулия Ивановна попросила садиться, сказавши тоже: «Прошу!».",
    created_at: "2025-03-13T11:51:29.000000Z",
    updated_at: "2025-03-13T11:51:29.000000Z",
    categories: [
      {
        id: 4,
        name: "Брендинг",
        created_at: "2025-03-13T11:51:29.000000Z",
        updated_at: "2025-03-13T11:51:29.000000Z",
        pivot: {
          post_id: 1,
          post_category_id: 4,
        },
      },
    ],
  },
  {
    id: 2,
    title:
      "Уже Ноздрев давно перестал вертеть, но в которой, к изумлению, слышна была сивушища во всей форме.",
    excerpt:
      "Вы рассмотрите: вот, например, каретник Михеев! ведь — больше никаких экипажей и не видано было на человеческом лице, разве только если особа была слишком высокого звания. И потому теперь он.",
    body: "Он стал припоминать себе: кто бы это сделать? — сказала — Коробочка. Чичиков попросил списочка крестьян. Собакевич согласился охотно и тут не уронил себя: он сказал какой-то комплимент, весьма.",
    created_at: "2025-03-13T11:51:29.000000Z",
    updated_at: "2025-03-13T11:51:29.000000Z",
    categories: [],
  },
];

export default function RecentPostSection() {
  return (
    <section className="recent-post">
      <div className="container">
        <div className="recent-post-top">
          <SectionTitle>Recent Posts</SectionTitle>
          <Link url="#">View all</Link>
        </div>
        <div className="recent-post-grid">
          {recent_posts.map((post) => (
            <PostCard post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
