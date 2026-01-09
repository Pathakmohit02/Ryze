import React from "react";
import "./Articles.css";

const Articles = () => {
  const articles = [
    {
      title: "Motif used Ryze audits ti win new retiners",
      desc: "Turned audits into a repeatable sales asset - faster audits, clearer proof, and stronger sales conversations.",
      img: "/article1.avif",
    },
    {
      title: "Sanar AI increased Google Search ROAS by 4.3x in 8 weeks",
      desc: "Turned category momentum into predictable growth- without adding headcount or slowing product velocity.",
      img: "/article2.avif",
    },
    {
      title: "Ashley Furniture improved ROAS by running Google + Meta on autopilot",
      desc: "E-commerce performance across Search, Shopping/PMax, and Meta with weekly automated optimization cycles.",
      img: "/article3.avif",
    },
  ];

  return (
    <section className="articles">
      <div className="articles-container">
        {articles.map((s, index) => (
          <div key={index} className="article-card">
            <img src={s.img} alt={s.title} />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;
