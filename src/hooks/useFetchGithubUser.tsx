import { useState } from "react";
import githubService from "../services/githubService";
import { type GitHubUser } from "../types/github.user.types";

interface GitHubUserResponse {
    success: boolean;
    data: GitHubUser | null;
    error?: string;
}

const useFetchGithubUser = () => {
    const [searchText, setSearchText] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState<GitHubUser | null>(null);

    const handleFetchGithubUser = async () => {
        setLoading(true);
        try {
            const response: GitHubUserResponse = await githubService.findGitHubUser(`${searchText}`);

            if (!response.success) {
                setError(response.error ?? "Something went wrong");
                setUserData(null);
                return;
            } 

            setError("");
            setSearchText("");
            setUserData(response.data);
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
    }
}

export default useFetchGithubUser;