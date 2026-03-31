import { PulseLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="w-full h-screen fixed top-0 bg-primary/50 flex justify-center items-center z-200">
            <PulseLoader 
                size={13}
                margin={5}
                color="#f6f6f6"
            />
        </div>
    )
}

export default Loader;