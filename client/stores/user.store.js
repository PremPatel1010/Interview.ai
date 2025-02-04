import { create } from "zustand";
import axios from '../config/axios.js'
import { toast } from "react-hot-toast";


export const useUserStore = create((set, get) => ({
	user: null,
	loading: false,
	checkingAuth: true,
  

	signup: async ({ email, password, confirmPassword }) => {
		set({ loading: true });

		if (password !== confirmPassword) {
			set({ loading: false });
			return toast.error("Passwords do not match");
		}

		try {
			const res = await axios.post("/users/register", { email, password });
			set({ user: res.data, loading: false });
			toast.success("Signup successful!");
		} catch (error) {
			set({ loading: false });
			if (error.response) {
				// Handle specific status codes
				if (error.response.status === 500) {
					toast.error("Internal server error. Please try again later.");
					console.error("Internal server error:", error.response.data);
				} else {
					toast.error(`Server error: ${error.response.data.message || error.response.statusText}`);
					console.error("Server response:", error.response.data);
				}
			} else if (error.request) {
				toast.error("No response from server. Please try again later.");
				console.error("No response received:", error.request);
			} else {
				toast.error("An error occurred while sending the request.");
				console.error("Error:", error.message);
			}
		}
	},

  login: async (email, password) => {
		set({ loading: true });

		try {
			const res = await axios.post("/users/login", { email, password });
      toast.success("Logged in successfully");
			set({ user: res.data, loading: false });
		} catch (error) {
			set({ loading: false });
			toast.error(error.response.data.message || "An error occurred");
		}
	},

		logout: async () => {
			try {
				await axios.get("/users/logout");
				set({ user: null });
				toast.success("Logged out successfully");
			} catch (error) {
				toast.error("Failed to logout");
				console.log(error);
			}
		},

		checkAuth: async () => {
			set({ checkingAuth: true });

			try {
				const response = await axios.get("/users/profile", {
					withCredentials: true // This will include cookies in the request
				});
				set({ user: response.data, checkingAuth: false });
			} catch (error) {
				set({ checkingAuth: false, user: null });
			}
		},

}))
