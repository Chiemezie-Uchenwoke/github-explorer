import { Link } from "react-router";

const Explore = () => {
    return (
        <div className="flex flex-col gap-8 lg:gap-12 items-center bg-secondary py-16 lg:py-20">
            <h2 className="text-center text-text-primary/90 text-3xl lg:text-4xl capitalize font-semibold">
                Ready to explore GitHub?
            </h2>

            <Link to={"/explore"} className="bg-blue-pri text-white py-3 px-12 rounded-2xl font-medium text-lg hover:brightness-90 duration-200">
                Find a Developer
            </Link>
        </div>
    )
}

export default Explore;