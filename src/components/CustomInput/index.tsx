import { ErrorMessage } from "@hookform/error-message"
import { Control, Controller } from "react-hook-form"
import { Input, Label } from "reactstrap"
import { InputType } from "reactstrap/types/lib/Input"
interface Props {
    options: {
        label: string
        name: string
        _id: string
        placeholder: string
        type?: InputType | undefined
        control?: Control<any> | undefined;
        errors: object
    }
}

const CustomInput = ({ options }: Props) => {
    const { name, placeholder, type, control, errors, _id, label } = options
    return <div className="flex flex-col relative w-full ps-20 pe-20">
        <Label className="text-labelText font-Regular" htmlFor={_id}>{label}</Label>
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field }) => (
                <Input
                    id={_id}
                    placeholder={placeholder}
                    type={type}
                    className="h-12 bg-primary border-secondary border-2 rounded-lg"
                    {...field}
                />
            )}
        />
        <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => <p className="text-red-600 absolute top-20">{message}</p>}
        />
    </div>
}

export default CustomInput