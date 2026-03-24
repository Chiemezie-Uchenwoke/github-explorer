import HowItWorksCard from "../ui/HowItWorksCard";
import howItWorksData from "../../data/howItworksData";

const HowItWorks = () => {
    return (
        <section className="w-19/20 lg:w-9/10 max-w-7xl mx-auto flex flex-col gap-10 lg:gap-14 items-center py-16 lg:py-20">
            <h2 className="text-text-primary/90 font-semibold text-3xl capitalize">How It Works</h2>

            <div className="grid grid-cols-1 min-[750px]:grid-cols-3 gap-8 w-full">
                {
                    howItWorksData.map(step => {
                        return (
                            <HowItWorksCard 
                                key={step.id}
                                {...step}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default HowItWorks;