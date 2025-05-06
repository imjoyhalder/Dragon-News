import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-resources/refs/heads/main/demo-data/categories.json')
            .then(resp => resp.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className="font-semibold">All Category({categories.length})</h2>
            <div className="flex flex-col gap-2 pt-4">
                {
                    categories.map(category => (
                        <NavLink
                            to={`/category/${category.id}`}
                            key={category.id}
                            className="btn"
                        >
                            {category.name}
                        </NavLink>
                    ))

                }
                <NavLink to="/news">Bal</NavLink>
            </div>
        </div>
    );
};

export default LeftNavbar;