import { ReactNode } from "react"
// import { Button } from "reactstrap"

interface Props {
    children: ReactNode
}
const CustomButtom: React.FC<Props> = ({ children }) => { return <h1 className="text-primaryLink border border-customGreen2">{children}</h1> }


export default CustomButtom