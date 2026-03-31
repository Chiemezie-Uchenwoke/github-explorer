interface SearchGitHubUserProps {
    searchText: string;
    setSearchText: (value: string) => void;
}

const SearchGitHubUser = ({searchText, setSearchText}: SearchGitHubUserProps) => {
    return (
        <section className="my-12 py-8 w-full max-w-lg mx-auto flex flex-col gap-8 items-center">
            <input 
                type="search"
                placeholder="Enter a github username..." 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)} 
                className="w-9/10 border border-text-primary placeholder:text-text-primary/70 px-3 h-12 lg:h-16 rounded text-text-primary/80"
            />

            <button 
                type="submit"
                className="bg-blue-default text-text-primary py-3 px-8 rounded-2xl w-9/10 font-medium active:translate-y-1 cursor-pointer hover:translate-y-0.5 transition duration-200"
            >
                Search
            </button>
        </section>
    )
}

export default SearchGitHubUser;