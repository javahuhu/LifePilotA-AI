import type { LoginData } from "../types/auth.types";


export const loginUser = async(data:LoginData) => {
    const response = await fetch("http://localhost:8000/users/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data),
    });

    if(!response.ok){
        const err = await response.json();

        throw new Error(err.detail || "Login Failed");
    };

    return response.json();
}