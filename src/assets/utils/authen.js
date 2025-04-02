import { supabase } from "@/assets/utils/supabase";
import { useUserAuthStore } from "@/stores/userAuth";
const userAuth = useUserAuthStore();
export const register = async (formData) => {
  let { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    console.log("Register", error);
    alert("Register Fail");
    return;
  }
  // insert fprofile
  userAuth.setAuth(data.session);
  return true;
};
export const login = async (formData) => {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    console.log("Login", error);
    alert("Login Fail");
    return;
  }
  userAuth.setAuth(data.session);
  return true;
};
