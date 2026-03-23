import type React from "react";
import NavBar from "./NavBar";

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
        </>
    )
}

export default MainLayout;