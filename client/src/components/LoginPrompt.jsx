import { Link } from "react-router-dom";
import img from "../assets/AdobeStock_687366383.webp";

export function LoginPrompt() {
    return (
        <div className='flex flex-col items-center p-4 mt-10 rounded-lg'>
            <Link to="/login" className='text-white'>
                <div className='bg-blue-600 p-4 rounded-lg'>
                    <p className='text-lg font-semibold text-center'>Please login or register to save your tasks!</p>
                </div>
            </Link>
            <img src={img} alt="Task list" className='mb-36 mt-20 h-96' />
        </div>
    );
}
