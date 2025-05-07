import { FaEye } from 'react-icons/fa';

const NewsCard = ({ singleNews = {}}) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = singleNews;

  return (
    <div className="card w-full bg-base-100 shadow-md rounded-xl">
      <div className="flex items-center gap-3 p-4">
        <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
        <div>
          <h2 className="font-semibold">{author.name}</h2>
          <p className="text-sm text-gray-500">
            {new Date(author.published_date).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="px-4 pb-2">
        <h1 className="text-lg font-bold">{title}</h1>
        <img src={thumbnail_url} alt="Thumbnail" className="w-full h-48 object-cover rounded-md my-3" />
        <p className="text-gray-600 text-sm">{details.slice(0, 200)}...</p>
        <span className="text-blue-500 font-semibold cursor-pointer">Read More</span>
      </div>
      <div className="flex items-center justify-between px-4 py-3 border-t mt-2 text-sm text-gray-600">
        <div className="flex gap-1 text-orange-400">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>⭐</span>
          ))}
          <span className="ml-2 text-black">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye className="text-gray-500" />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
