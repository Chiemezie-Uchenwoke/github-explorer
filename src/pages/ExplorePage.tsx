import MainLayout from "../components/layout/MainLayout";
import SearchGitHubUser from "../components/ExplorePage/Search";
import useFetchGithubUser from "../hooks/useFetchGithubUser";
import Loader from "../components/ui/Loader";

const ExplorePage = () => {
    const {
        searchText,
        setSearchText,
        error, 
        loading,
        userData,
        handleFetchGithubUser,
    } = useFetchGithubUser();

    return (
        <>
            <MainLayout>
                {
                    error && (
                        <p className="border border-red-400 bg-red-300 text-white text-sm w-9/10 max-w-lg mx-auto">
                            {error}
                        </p>
                    )
                }

                {
                    loading && (
                        <Loader />
                    )
                }

                <SearchGitHubUser 
                    searchText={searchText}
                    setSearchText={setSearchText}
                />

            </MainLayout>
        </>
    )
}

export default ExplorePage;