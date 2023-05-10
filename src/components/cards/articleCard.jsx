import React from "react";

const ArticleCard = ({ imageUrl, title, author, date }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition duration-300">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="flex items-center mb-4">
          <div className="text-sm font-medium">{author}</div>
          <div className="text-gray-600 text-sm ml-2">{date}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
