import React from "react"
import "./InputField.scss"

interface Props extends React.HTMLProps<HTMLInputElement>{
    label: string
    icon: string
}
const InputField: React.FC<Props> = ({label, icon, ...props}) => {
    const iconElement = icon ? <i className="far fa-credit-card"></i> : ""
    return (
        <div className="input-field-container">
            <span>{label}</span>
            <div className="input-field">
                <input {...props} />
                {iconElement}                
            </div>
        </div>
    )
}

export default InputField