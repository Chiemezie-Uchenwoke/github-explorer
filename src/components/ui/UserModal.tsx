import { IoMdClose } from "react-icons/io";

interface UserModalProps {
    avatarUrl: string; 
    name: string;
    login: string;
    bio: string;
    location: string;
    followers: number;  
    following: number;
    publicRepos: number;
    onClick: () => void;
}

const UserModal = ({avatarUrl, name, login, bio, location, followers, following, publicRepos, onClick}: UserModalProps) => {
    return (
        <div className="w-full h-screen fixed top-0 bg-primary/50 flex justify-center items-center z-200">
            <div className="w-9/10 max-w-lg h-4/5 bg-primary border border-text-primary/8 py-8 px-4 sm:px-5 overflow-y-auto flex flex-col gap-4 rounded-2xl shadow-lg relative">
                <button 
                    onClick={onClick}
                    className="text-text-primary/80 border border-text-primary/20 self-start w-10 h-10 rounded-full flex justify-center items-center text-lg absolute right-4 top-8 sm:right-5 cursor-pointer bg-text-primary/1 hover:bg-text-primary/5 duration-200"
                >
                    <IoMdClose />
                </button>

                {/* Avatar */}
                <div className="w-25 h-25 rounded-full overflow-hidden border border-text-primary/5">
                    <img src={avatarUrl} alt={`Github profile image of ${name}`} />
                </div>

                {/* Name and Username */}
                <div className="flex flex-col gap-3">
                    <h2 className="font-semibold text-text-primary text-xl lg:text-2xl"> 
                        {name}
                    </h2>
                    <p className="text-text-primary font-medium"> {login} </p>
                </div>
                
                {/* Bio */}
                <p className="text-text-primary/80">
                    {bio}
                </p>

                <p className="flex gap-2 text-text-primary/80">
                    <span> {followers} followers </span>
                    <span> | </span>
                    <span> {following} following </span>
                    <span> | </span>
                    <span> {publicRepos} public repos </span>
                </p>

                <p className="text-text-primary/80">
                    {location}
                </p>

            </div>
        </div>
    )
}

export default UserModal;