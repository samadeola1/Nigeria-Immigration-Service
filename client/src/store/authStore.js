import { create } from "zustand";
import Cookies from "js-cookie"; // Import js-cookie

// Define the initial state for our authentication store
const initialState = {
  user: null, // Will store user details (name, email, etc.)
  token: null, // Will store the authentication token
  isAuthenticated: false, // Boolean flag to indicate login status
  loading: false, // To indicate if an auth operation is in progress
};

// Create the Zustand store
export const useAuthStore = create((set, get) => ({
  // Added 'get' for accessing current state
  ...initialState, // Spread the initial state

  // Action to set loading state
  setLoading: (isLoading) => set({ loading: isLoading }),

  // Action to handle user login
  login: (userData, token, rememberMe = false) => {
    // Store user data and token in the state
    set({
      user: userData,
      token: token,
      isAuthenticated: true,
      loading: false,
    });

    // Store token in a cookie
    if (rememberMe) {
      // Set cookie to expire in 7 days (or any duration you prefer)
      Cookies.set("authToken", token, {
        expires: 7,
        secure: true,
        sameSite: "Lax",
      });
      Cookies.set("userData", JSON.stringify(userData), {
        expires: 7,
        secure: true,
        sameSite: "Lax",
      });
    } else {
      // Set session cookie (expires when browser closes)
      Cookies.set("authToken", token, { secure: true, sameSite: "Lax" });
      Cookies.set("userData", JSON.stringify(userData), {
        secure: true,
        sameSite: "Lax",
      });
    }
  },

  // Action to handle user logout
  logout: () => {
    // Reset state to initial values
    set({ ...initialState });
    // Remove cookies
    Cookies.remove("authToken");
    Cookies.remove("userData");
  },

  // Action to initialize state from cookies (will be used on app load)
  initializeAuthFromCookies: () => {
    const token = Cookies.get("authToken");
    const userDataString = Cookies.get("userData");

    if (token && userDataString) {
      try {
        const userData = JSON.parse(userDataString);
        set({
          user: userData,
          token: token,
          isAuthenticated: true,
          loading: false,
        });
        console.log("Auth state initialized from cookies.");
      } catch (e) {
        console.error("Failed to parse user data from cookie:", e);
        // Clear invalid cookies if parsing fails
        Cookies.remove("authToken");
        Cookies.remove("userData");
        set({ ...initialState });
      }
    } else {
      set({ ...initialState }); // Ensure state is reset if no valid cookies
    }
  },
}));
