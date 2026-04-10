import { IoMdClose } from "react-icons/io";
import {type GitHubRepos } from "../../types/github.user.types";
import { useState } from "react";
import { motion } from "motion/react";

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
    repos: GitHubRepos[];
}

const UserModal = ({avatarUrl, name, login, bio, location, followers, following, publicRepos, onClick, repos}: UserModalProps) => {
    const [isRepoVisible, setIsRepoVisible] = useState(false);
    return (
        <motion.div 
            className="w-full h-screen fixed top-0 bg-primary/50 flex justify-center items-center z-200"
            initial={{ opacity: 0, scale: 0.90}}
            animate={{ opacity: 1, scale: 1}}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25 }}
        >
            <div 
                className="w-9/10 max-w-lg h-9/10 max-h-120 bg-primary border border-text-primary/8 py-8 px-4 sm:px-5 rounded-2xl shadow-lg relative"
            >
                <button 
                    onClick={onClick}
                    className="text-text-primary/80 border border-text-primary/20 self-start w-10 h-10 rounded-full flex justify-center items-center text-lg absolute right-4 top-8 sm:right-5 cursor-pointer bg-text-primary/1 hover:bg-text-primary/5 duration-200"
                >
                    <IoMdClose />
                </button>

                <div className="h-full w-full">
                    {/* Child - 1 */}
                    <div className="w-full h-30">
                        {/* Avatar */}
                        <div className="w-25 h-25 rounded-full overflow-hidden border border-text-primary/5 shrink-0">
                            <img 
                                src={avatarUrl} 
                                alt={`Github profile image of ${name}`} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Child - 2 */}
                    <div className="flex flex-col gap-6 overflow-y-auto h-[calc(100%-7.5rem)]">
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

                        {
                            !isRepoVisible && (
                                <button 
                                    onClick={() => setIsRepoVisible((prev: boolean) => !prev)}
                                    className="cursor-pointer self-start bg-blue-pri py-2 px-8 rounded-2xl text-text-primary font-semibold shadow my-2"
                                >
                                    View Repositories
                                </button>
                            )
                        }

                        {
                            isRepoVisible && (
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-between items-center">
                                        <h3 className="font-bold text-text-primary">Repositories</h3>

                                        <button 
                                            onClick={() => setIsRepoVisible(prev => !prev)}
                                            className="cursor-pointer bg-gold text-xs py-1 px-2 rounded-2xl hover:brightness-90 duration-200 font-medium mr-3"
                                        >
                                            Hide Repos
                                        </button>
                                    </div>

                                    <ul className="flex flex-col gap-2">
                                        {
                                            repos.map(r => {
                                                return (
                                                    <li key={r.id} className="list-disc list-inside text-text-primary/80">
                                                        {r.name}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default UserModal;