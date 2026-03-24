import HomePageHero from "../components/HomePage/Hero";
import MainLayout from "../components/layout/MainLayout";
import Features from "../components/HomePage/Features";
import HowItWorks from "../components/HomePage/HowItWorks";
import Explore from "../components/HomePage/Explore";

const HomePage = () => {
    return (
        <>
            <MainLayout>
                <HomePageHero />
                <Features />
                <HowItWorks />
                <Explore />
            </MainLayout>
        </>
    )
}

export default HomePage;