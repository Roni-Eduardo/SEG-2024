import { supabase } from "../@libs/supabase";
import { ICredential } from "../types/index";

const signIn = async (credentail: ICredential) => {
    const {data, error} = await supabase.auth.signInWithPassword({email: credentail.username, password: credentail.password});
    
    if (error) throw error;

    return data;
}

export const AuthService = {
    signIn
}