interface FeaturesCardProps {
    title: string;
    desc: string;
}

const FeaturesCard = ({title, desc}: FeaturesCardProps) => {
    return (
        <article className="bg-muted-bg py-8 lg:py-10 px-4 lg:px-6 flex flex-col gap-5 rounded-2xl select-none hover:-translate-y-3 transition duration-300 ease-in-out">
            <h3 className="text-text-primary/90 capitalize text-lg font-medium"> {title} </h3>

            <p className="text-text-primary/50">
                {desc}
            </p>
        </article>
    )
}

export default FeaturesCard;