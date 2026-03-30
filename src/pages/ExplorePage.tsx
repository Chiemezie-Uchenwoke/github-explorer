import MainLayout from "../components/layout/MainLayout";
import SearchGitHubUser from "../components/ExplorePage/Search";
import { useState } from "react";

const ExplorePage = () => {
    const [searchText, setSearchText] = useState("");

    return (
        <>
            <MainLayout>
                <SearchGitHubUser 
                    searchText={searchText}
                    setSearchText={setSearchText}
                />
            </MainLayout>
        </>
    )
}

export default ExplorePage;