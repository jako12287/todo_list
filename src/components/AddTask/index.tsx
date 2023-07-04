import { Controller, useForm } from "react-hook-form";
import CustomButtom from "../CustomButton"
import CustomInput from "../CustomInput"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import { Label } from "reactstrap";
import { ErrorMessage } from "@hookform/error-message";
import { optionStatus } from "../../utils/options";

const Schema = yup.object().shape({
    task: yup.string().required("Task is required"),
    status: yup.string().required("Status is required")

});



const FormAddTask = () => {
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
    return <form
        onSubmit={handleSubmit(onSubmit)}
        className="grow h-80 flex flex-col justify-evenly items-center w-full"
    >

        <div className="flex flex-col relative w-full ps-20 pe-20">
            <Label className="text-labelText font-Regular">Status</Label>
            <Controller
                name="status"
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <select {...field} id="status" className="h-12 bg-primary border-secondary border-2 rounded-lg pe-4">
                        <option value="">Select an status</option>
                        {optionStatus.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                )}
            />
            <ErrorMessage
                errors={errors}
                name="status"
                render={({ message }) => <p className="text-red-600 absolute top-20">{message}</p>}
            />
        </div>
        <CustomInput
            options={{
                label: "Task",
                _id: "task",
                name: "task",
                errors: errors,
                control: control,
                placeholder: "Task",
                type: "text"
            }}
        />
        <div>
            <CustomButtom>Create</CustomButtom>
        </div>
    </form>
}

export default FormAddTask