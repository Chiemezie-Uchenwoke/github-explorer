import type React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout = ({children}: MainLayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />

            <main className="flex-1">
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default MainLayout;