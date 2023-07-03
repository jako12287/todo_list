interface Props {
    text1: string
    text2: string
    text3: string
}

const InformationCard = ({ text1, text2, text3 }: Props) => {
    return <div className="flex-1 flex flex-col justify-evenly items-center bg-secondary shadow-custom text-primary ">
        <p className="font-SemiBold text-mediumText">{text1}</p>
        <p className="font-Bold text-bigText">{text2}</p>
        <p className="font-SemiBold  text-mediumText">
            {text3}
        </p>
    </div>
}

export default InformationCard