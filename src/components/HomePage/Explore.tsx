import { Link } from "react-router";

const Explore = () => {
    return (
        <div className="flex flex-col gap-8 items-center py-2">
            <h2 className="text-center text-text-primary/90 text-3xl lg:text-4xl capitalize font-semibold">
                Ready to explore GitHub?
            </h2>

            <Link to={"/explore"} className="bg-blue-dark text-white py-3 px-12 rounded-2xl font-medium text-lg">
                Find a Developer
            </Link>
        </div>
    )
}

export default Explore;