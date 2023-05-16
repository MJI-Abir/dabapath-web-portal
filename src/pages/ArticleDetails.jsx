import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const ArticleDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const article = location.state.article;

  useEffect(() => {
    console.log(location)
  }, [])
  

  return (
    <div className="dark:bg-gray-900 py-12 min-h-screen">
      <img
        className="mx-auto w-1/2 mb-8 my-10 rounded-lg"
        src={article.articleImage}
        alt=""
      />
      <h1 className="text-center  text-white text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-center  text-white mb-8">{article.date_published}</p>
      <div className="text-center prose text-white max-w-none">{article.description}</div>
    </div>
  );
};

export default ArticleDetails;
