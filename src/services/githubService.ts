import {type GitHubUser } from "../types/github.user.types";

interface GitHubUserResponse {
  success: boolean;
  data: GitHubUser | null;
  error?: string;
}

const githubService = {
    findGitHubUser: async function(searchText: string): Promise<GitHubUserResponse> {
        try {
            const apiUrl = "https://api.github.com/users";
            const response = await fetch(`${apiUrl}/${searchText}`);

            if (response.status === 404) {
                return {
                    success: false,
                    data: null,
                    error: "User not found"
                };
            }

            if (!response.ok) {
                return {
                    success: false,
                    data: null,
                    error: `Request failed with status ${response.status}`
                };
            }

            const data = await response.json();

            return {
                success: true,
                data
            };
        } catch(err) {
            console.error(err);
            return {
                success: false,
                data: null,
                error: "Network error"
            }
        }
    },

    fetchGitHubRepos: async function(url: string) {
         try {
            const response = await fetch(url);

            if (response.status === 404) {
                return {
                    success: false,
                    data: null,
                    error: "Repos not found"
                };
            }

            if (!response.ok) {
                return {
                    success: false,
                    data: null,
                    error: `Request failed with status ${response.status}`
                };
            }

            const data = await response.json();

            return {
                success: true,
                data
            };
        } catch(err) {
            console.error(err);
            return {
                success: false,
                data: null,
                error: "Network error"
            }
        }
    }
}

export default githubService;