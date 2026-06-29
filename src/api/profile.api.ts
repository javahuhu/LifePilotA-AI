import { supabase } from "../lib/supabase";
import type { SignUpData } from "../types/auth.types";

export const userProfile = async (userId: string, data: SignUpData) => {

    await supabase.from("profile").insert({
        id: userId,
        first_name: data.firstName,
        middle_name: data.middleName,
        last_name: data.lastName,
    });


}