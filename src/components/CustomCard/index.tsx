import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    width?: string
    height?: string
}

const CustomCard = ({ children, width = "w-cardPrimary", height = "" }: Props) => {
    return <div className={`flex flex-col items-center border-2 border-customBlack ${width} ${height} rounded-card bg-primary shadow-custom`} > {children}</div >;
};

export default CustomCard;
