interface SearchGitHubUserProps {
    searchText: string;
    setSearchText: (value: string) => void;
    handleFetchGithubUser: () => void;
}

const SearchGitHubUser = ({searchText, setSearchText, handleFetchGithubUser}: SearchGitHubUserProps) => {

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();
        handleFetchGithubUser();
    }

    return (
        <form 
            className="my-10 py-8 px-4 w-full max-w-lg mx-auto flex flex-col gap-8 items-center"
            onSubmit={handleSubmit}
        >
            <input 
                type="search"
                placeholder="Enter a github username..." 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)} 
                className="w-full border border-text-primary placeholder:text-text-primary/70 px-3 h-12 lg:h-16 rounded-2xl outline-0 focus:border-blue-pri text-text-primary/80"
            />

            <button 
                type="submit"
                disabled={searchText === ""}
                className="bg-blue-pri text-text-primary py-3 px-8 rounded-2xl w-full font-medium active:translate-y-1 cursor-pointer hover:translate-y-0.5 transition duration-200 disabled:bg-blue-default/80 disabled:hover:translate-y-0"
            >
                Search
            </button>
        </form>
    )
}

export default SearchGitHubUser;