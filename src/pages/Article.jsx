import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";

const Article = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("/api/articles/")
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Article;
