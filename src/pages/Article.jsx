/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import ArticleCard from "../components/cards/articleCard";
import data from "../article-data.json";

const Article = () => {
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   console.log(data)
  //   fetch("./article-data.json")
  //     .then((response) => {
  //       console.log(response);
  //       setArticles(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('error fetching data: ', error);
  //     });
  // }, []);

  return (
    <div className="dark:bg-gray-900 py-12">
      <div className="w-1/3 mx-auto">
        {data.map((article) => (
          <ArticleCard className="" key={article.id} article={article} />
        ))}
        ;
      </div>
    </div>
  );
};

export default Article;
