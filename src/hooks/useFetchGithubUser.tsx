import { useState } from "react";
import githubService from "../services/githubService";
import { type GitHubUser, type GitHubRepos } from "../types/github.user.types";

interface GitHubUserResponse {
    success: boolean;
    data: GitHubUser | null;
    error?: string;
}

interface GitHubRepoResponse {
    success: boolean;
    data: GitHubRepos[] | null;
    error?: string;
}

const useFetchGithubUser = () => {
    const [searchText, setSearchText] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState<GitHubUser | null>(null);
    const [repos, setRepos] = useState<GitHubRepos[] | null>([]);

    const handleFetchGithubUser = async () => {
        setLoading(true);
        try {
            const response: GitHubUserResponse = await githubService.findGitHubUser(`${searchText}`);

            if (!searchText) {
                setError("Enter a valid github username");
                setUserData(null);
                return;
            };

            if (!response.success) {
                setError(response.error ?? "Something went wrong");
                setUserData(null);
                return;
            } 

            if (response.data) {
                setError("");
                setSearchText("");
                setUserData(response.data);

                const repos: GitHubRepoResponse = await githubService.fetchGitHubRepos(response.data.repos_url);

                if (repos.success) {
                    setRepos(repos.data);
                } else {
                    setRepos([]);
                }
            }   

            
        } catch(err) {
            console.error(err);
            setUserData(null);
            setError("Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return {
        searchText,
        setSearchText,
        error, 
        setError,
        loading,
        userData,
        setUserData,
        handleFetchGithubUser,
        repos,
    }
}

export default useFetchGithubUser;