import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    children: ReactNode;
    URI?: string
}
const CustomButtom: React.FC<Props> = ({ children, URI = "" }) => {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate(URI)} className="w-60 h-10 rounded-full bg-secondary text-primary text-button font-SemiBold hover:bg-secondaryHover shadow-btn">
            {children}
        </button>
    );
};

export default CustomButtom;
