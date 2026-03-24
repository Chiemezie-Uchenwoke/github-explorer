import { type IconType } from "react-icons";

interface HowItWorksProps {
    icon: IconType;
    title: string;
    desc: string;
}

const HowItWorksCard = ({icon, title, desc}: HowItWorksProps) => {
    const Icon = icon;

    return (
        <article className="bg-blue-muted py-8 lg:py-10 px-4 lg:px-6 flex flex-col gap-5 rounded-2xl select-none hover:scale-95 transition duration-300 ease-in-out group">
            <span className="w-12 h-12 flex justify-center items-center bg-primary rounded-lg text-text-primary/80 text-xl border border-text-primary/25 group-hover:animate-pulse">
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