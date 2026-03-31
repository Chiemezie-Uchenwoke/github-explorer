import {type GitHubUser } from "../types/github.user.types";

interface GitHubUserResponse {
  success: boolean;
  data: GitHubUser | null;
  error?: string;
}

const githubService = {
    findGitHubUser: async function(url: string): Promise<GitHubUserResponse> {
        try {
            const response = await fetch(url);

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
}

export default githubService;