import HomePageHero from "../components/HomePage/Hero";
import MainLayout from "../components/layout/MainLayout";
import Features from "../components/HomePage/Features";

const HomePage = () => {
    return (
        <>
            <MainLayout>
                <HomePageHero />
                <Features />
            </MainLayout>
        </>
    )
}

export default HomePage;