
import { FcTodoList } from "react-icons/fc"
const Loader = () => {
    return <div className="flex justify-center items-center h-screen flex-col">
        <div className="animate-spin rounded-full h-40 w-40 border-t-2 border-b-2 border-secondary"></div>
        Wait Please
        <FcTodoList size={30} />
    </div>
}

export default Loader