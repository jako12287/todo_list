import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">404 - Not Found</h1>
            <p className="text-lg text-gray-600">
                The page you are looking for does not exist.
            </p>
            <Link to={"/"} className="text-secondary font-Bold text-2xl m-3 hover:text-red-600">
                but you can start here
            </Link>
        </div>
    );
};

export default NotFoundPage;
