import MainLayout from "../components/layout/MainLayout";
import SearchGitHubUser from "../components/ExplorePage/Search";
import useFetchGithubUser from "../hooks/useFetchGithubUser";
import Loader from "../components/ui/Loader";
import UserModal from "../components/ui/UserModal";
import { useEffect} from "react";
import { AnimatePresence } from "motion/react";

const ExplorePage = () => {
    const {
        searchText,
        repos,
        setSearchText,
        error, 
        setError,
        loading,
        userData,
        setUserData,
        handleFetchGithubUser,
    } = useFetchGithubUser();

    useEffect(() => {
        if (!error) return;

        const handleDisplayError = () => {
            setError("");
        }

        const timer = setTimeout(handleDisplayError, 3000);

        return () => clearTimeout(timer);
    }, [error, setError]);

    return (
        <MainLayout>
            {
                error && (
                    <p className="border border-red-400 bg-red-400 text-white text-sm w-9/10 max-w-lg mx-auto rounded-xl py-3 px-4 mt-4">
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
                handleFetchGithubUser={handleFetchGithubUser}
            />

            <AnimatePresence mode="wait">
                {
                    userData && (
                        <UserModal 
                            avatarUrl={userData.avatar_url}
                            name={userData.name}
                            login={userData.login}
                            bio={userData.bio ?? ""}
                            location={userData.location ?? ""}
                            followers={userData.followers}
                            following={userData.following}
                            publicRepos={userData.public_repos}
                            onClick={() => setUserData(null)}
                            repos={repos ? repos : []}
                        />
                    )
                }
            </AnimatePresence>

        </MainLayout>
    )
}

export default ExplorePage;