import { supabase } from "../lib/supabase";
import type { LoginData, SignUpData } from "../types/auth.types";


export const loginUser = async (data: LoginData) => {
    const { data: result, error } =
        await supabase.auth.signInWithPassword({
            email: data.email,
            password: data.password
        });

    if (error) throw new Error(error.message);

    return result
}

export const signupUser = async (data: SignUpData) => {

    if (data.password !== data.confirmPassword) {
        throw new Error("Password Does Not Match");
    }

    const { data: authData, error } =
        await supabase.auth.signUp({
            email: data.email,
            password: data.password
        });

    if (error) throw new Error(error.message);

    const userId = authData.user?.id;

    if (userId) {
        await supabase.from("profile").insert({
            id: userId,
            first_name: data.firstName,
            middle_name: data.middleName,
            last_name: data.lastName,

        });
    }

    return authData;
}