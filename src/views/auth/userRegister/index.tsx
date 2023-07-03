import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomButtom from "../../../components/CustomButton";
import { Link } from "react-router-dom";
import InformationCard from "../../../components/InformationCard";
import CustomInput from "../../../components/CustomInput";

const Schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Enter a valid email").required("Enter an email"),
    password: yup.string().required("Password is required"),
});


const UserRegister = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(Schema),
    });

    const onSubmit = (values: object) => {
        console.log(values);
    };

    return <div className="h-screen flex select-none">
        <InformationCard
            text1="To Do List"
            text2="Thanks for registering"
            text3="Make each day more productive"
        />
        <div className="flex-1 bg-texture bg-center bg-contain bg-repeat flex justify-center items-center flex-col ">
            <p className="font-SemiBold text-mediumText flex items-end flex-1 ">
                User register
            </p>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grow h-80 flex flex-col justify-evenly items-center w-full"
            >
                <CustomInput
                    options={{
                        label: "Name",
                        _id: "name",
                        name: "name",
                        errors: errors,
                        control: control,
                        placeholder: "Enter your name",
                        type: "text"
                    }}
                />
                <CustomInput
                    options={{
                        label: "Email",
                        _id: "email",
                        name: "email",
                        errors: errors,
                        control: control,
                        placeholder: "email@email.com",
                        type: "email"
                    }}
                />
                <CustomInput
                    options={{
                        label: "Password",
                        _id: "password",
                        name: "password",
                        errors: errors,
                        control: control,
                        placeholder: "Enter the password",
                        type: "password"
                    }}
                />
                <div>
                    <CustomButtom>Save</CustomButtom>
                </div>
            </form>
            <Link
                to={"/"}
                className="flex-1 text-primaryLink font-Medium text-button underline cursor-pointer"
            >
                I have an account
            </Link>

        </div>
    </div>
}

export default UserRegister