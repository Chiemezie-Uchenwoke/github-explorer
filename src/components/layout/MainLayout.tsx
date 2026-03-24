import type React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({children}: MainLayoutProps) => {
    return (
        <>
            <NavBar />

            <main>
                {children}
            </main>

            <Footer />
        </>
    )
}

export default MainLayout;