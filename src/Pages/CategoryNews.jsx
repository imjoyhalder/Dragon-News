import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
    
    const news = useLoaderData()
   
    return (
        <div>
            <h2 className="font-semibold mb-3">Dragon Nes Home</h2>
            <p className="text-gray-400 text-sm mb-2">
                {news.length} News Found On This Category
            </p>
            <div className="flex flex-col gap-3">
                {
                    news.map(singleNews=> <NewsCard key={singleNews.id} singleNews={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;