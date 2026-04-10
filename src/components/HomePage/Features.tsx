import featuresData from "../../data/featuresData";
import FeaturesCard from "../ui/FeaturesCard";

const Features = () => {
    return (
        <section className="bg-secondary w-full">
            <div className="w-19/20 lg:w-9/10 max-w-7xl mx-auto flex flex-col gap-10 lg:gap-14 items-center py-16 lg:py-20">
                <h2 className="text-text-primary/90 font-semibold text-2xl lg:text-3xl capitalize text-center">Features you can explore</h2>

                <div className="grid grid-cols-1 min-[750px]:grid-cols-3 gap-8">
                    {
                        featuresData.map(feature => {
                            return (
                                <FeaturesCard 
                                    key={feature.id}
                                    {...feature}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Features;