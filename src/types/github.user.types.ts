export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  repos_url: string;
  name: string;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  hireable: boolean | null;
  site_admin: boolean;
  type: string;
}

export interface GitHubRepos {
  id: number;
  name: string;
}