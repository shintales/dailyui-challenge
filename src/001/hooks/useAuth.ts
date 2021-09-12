import { useState } from "react"

const useAuth = () => {
    const [username, setUsername] = useState<string|undefined>(undefined)
    const [password, setPassword] = useState<string|undefined>(undefined)

    const validate = () => {
        if (username && password)
            alert("Successful login")
        else {
            let message = ""
            if (!username) message+="Please enter a username\n"
            if (!password) message+="Please enter a password\n"
            alert(message)
        }
    }

    return {
        username, setUsername,
        password, setPassword,
        validate
    }
}

export default useAuth