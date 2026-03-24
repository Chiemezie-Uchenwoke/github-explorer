import { Link } from "react-router";
import { motion } from "motion/react";

const HomePageHero = () => {
    return (
        <section className="w-19/20 lg:w-9/10 max-w-7xl mx-auto min-h-[60vh] 2xl:min-h-[50vh] flex flex-col gap-6 lg:gap-10 items-center justify-center py-12">
            <motion.h2 
                className="text-blue-default font-semibold text-3xl md:text-4xl lg:text-6xl text-center w-9/10 max-w-2xl mx-auto "
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0, transition: {duration: 0.3}}}
            > 
                Discover the Developers Behind the Code 
            </motion.h2>

            <p className="text-text-primary/70 text-center text-lg lg:text-2xl w-9/10 max-w-xl mx-auto">
                Search any GitHub username and instantly explore their profile, repositories, and contributions.
            </p>

            <Link 
                to={"/explore"}
                className="bg-text-primary/90 py-3 px-10 rounded-2xl font-semibold my-3 hover:brightness-90 transition duration-200 lg:text-xl"
            >
                Start Exploring
            </Link>
        </section>
    )
}

export default HomePageHero;