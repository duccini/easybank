import data from "@/_data/posts.json";
import Image from "next/image";

import "./styles.css";

export default function Posts() {
  const posts = data.posts;

  const listArticles = posts.map((post) => {
    // console.log(`/@/${post.image}.jpg`);

    return (
      <article key={post.id}>
        <div className="image-wrap">
          <Image
            alt={post.tile}
            width={339.1}
            height={250}
            src={`/${post.image}`}
            quality={100}
          />
        </div>
        <div className="content">
          <h4>By {post.author}</h4>
          <h3>{post.title}</h3>
          <p>{post.text}</p>
        </div>
      </article>
    );
  });

  return (
    <section className="posts">
      <div className="posts-wrap">
        <h2>Latest Articles</h2>
        <div className="list-articles">{listArticles}</div>
      </div>
    </section>
  );
}
