import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import RightNav from "../Components/layout-component/RightNav";

const NewsDetails = () => {

    const newsItem = useLoaderData();
    console.log(newsItem)

    const {
        title,
        rating,
        total_view,
        author,
        thumbnail_url,
        details,
        tags,
        id,
    } = newsItem;

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 grid grid-cols-12 gap-5">
                <section className="col-span-9">
                    <h2 className="font-semibold mb-3">Dragon News</h2>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src={newsItem?.thumbnail_url}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">{newsItem?.title}</h2>
                            <p>{newsItem?.details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${newsItem?.category_id}`} className="btn btn-primary">Back to Category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;