import data from "@/_data/posts.json";
import Image from "next/image";

import online from "@/public/icon-online.svg";
import budgeting from "@/public/icon-budgeting.svg";
import onboarding from "@/public/icon-onboarding.svg";
import api from "@/public/icon-api.svg";

export default function Home() {
  const posts = data.posts;

  const listArticles = posts.map((post) => {
    console.log(`/@/${post.image}.jpg`);

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
    <main>
      <div className="homehero">
        <div className="container"></div>
      </div>

      <div className="middle">
        <div className="container">
          <div className="section1_header">
            <h2>Why choose Easybank?</h2>
            <p>
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>

          <div className="section1_icons">
            <div className="section1_icon">
              <Image
                src={online}
                width={80}
                height={80}
                alt="Online Banking"
                quality={100}
              />
              <h3>Online Banking</h3>
              <p>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>

            <div className="section1_icon">
              <Image
                src={budgeting}
                width={80}
                height={80}
                alt="Online Banking"
                quality={100}
              />
              <h3>Simple Budgeting</h3>
              <p>
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </div>

            <div className="section1_icon">
              <Image
                src={onboarding}
                width={80}
                height={80}
                alt="Online Banking"
                quality={100}
              />
              <h3>Fast Onboarding</h3>
              <p>
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>

            <div className="section1_icon">
              <Image
                src={api}
                width={80}
                height={80}
                alt="Online Banking"
                quality={100}
              />
              <h3>Open API</h3>
              <p>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="articles">
        <div className="container">
          <h2>Latest Articles</h2>
          <div className="list-articles">{listArticles}</div>
        </div>
      </section>
    </main>
  );
}
