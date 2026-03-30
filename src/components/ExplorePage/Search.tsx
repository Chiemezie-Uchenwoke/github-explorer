interface SearchGitHubUserProps {
    searchText: string;
    setSearchText: (value: string) => void;
}

const SearchGitHubUser = ({searchText, setSearchText}: SearchGitHubUserProps) => {
    return (
        <section>
            <input 
                type="search"
                placeholder="Enter a github username..." 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)} 
            />

            <button type="submit">
                Search
            </button>
        </section>
    )
}

export default SearchGitHubUser;