import React from "react"
import "./InputField.scss"

interface InputFieldProps extends React.HTMLProps<HTMLInputElement> {
    icon: string
    label: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputField: React.FC<InputFieldProps> = ({icon, label, ...props}) => {
    return (
        <div className="input-field">
            <i className={icon}></i>
            <input {...props}/>
            <label>{label}</label>
        </div>
    )
}

export default InputField