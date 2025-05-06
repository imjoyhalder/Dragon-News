import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap- items-center bg-gray-300 py-2 ">
            <p className="bg-[#D72050] text-base-100 px-3 py-1 ml-2">Latest</p>
            <Marquee speed={100} pauseOnHover={true} className="space-x-5 bg-gray-300 py-1">
                <Link to='/news'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, odit?
                </Link>
                <Link to='/news'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, odit?
                </Link>
                <Link to='/news'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, odit?
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;