import HomePageHero from "../components/HomePage/Hero";
import MainLayout from "../components/layout/MainLayout";
import Features from "../components/HomePage/Features";
import HowItWorks from "../components/HomePage/HowItWorks";

const HomePage = () => {
    return (
        <>
            <MainLayout>
                <HomePageHero />
                <Features />
                <HowItWorks />
            </MainLayout>
        </>
    )
}

export default HomePage;