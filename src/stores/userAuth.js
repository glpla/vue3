import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserAuthStore = defineStore("user-auth", () => {
  const user = ref(null);
  const profile = ref(null);
  const setProfile = async (profileData) => {
    if (!user.value) {
      profile.value = null;
      return;
    }
    if (!profile.value) {
      // fetch profile data from server
    }
  };
  const setAuth = (userSession) => {
    if (!userSession) {
      user.value = null;
      return;
    }
    user.value = userSession.user;
  };
  return { user, profile, setProfile, setAuth };
});
