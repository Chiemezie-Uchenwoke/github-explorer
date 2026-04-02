import { type IconType } from "react-icons";

interface HowItWorksProps {
    icon: IconType;
    title: string;
    desc: string;
}

const HowItWorksCard = ({icon, title, desc}: HowItWorksProps) => {
    const Icon = icon;

    return (
        <article className="bg-card border border-blue-pri/30 py-8 lg:py-10 px-4 lg:px-6 flex flex-col gap-5 rounded-2xl select-none shadow-lg shadow-text-primary/1 transition duration-300 ease-in-out hover:-translate-y-3">
            <span className="w-12 h-12 flex justify-center items-center bg-blue-pri rounded-full text-text-primary text-xl border border-blue-light/20">
                <Icon />
            </span>

            <h3 className="text-text-primary/90 capitalize text-lg font-medium">
                {title}
            </h3>

            <p className="text-text-primary/50 text-sm">
                {desc}
            </p>
        </article>
    )
}

export default HowItWorksCard;