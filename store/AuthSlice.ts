import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./store";
import Constants from "expo-constants";

interface user {
  username: string;
  email: string;
  password: string;
  profileImage: string;
  userId: string;
}

interface AuthState {
  user: user | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (
      state,
      action: PayloadAction<{ user: user; token: string }>
    ) => {
      (state.isLoading = false),
        (state.error = null),
        (state.user = action.payload.user),
        (state.token = action.payload.token);
    },
    loginFail: (state, action: PayloadAction<{ error: string }>) => {
      (state.isLoading = false), (state.error = action.payload.error);
    },
    signupStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    signupSucess: (
      state,
      action: PayloadAction<{ user: user; token: string }>
    ) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    signupFail: (state, action: PayloadAction<{ error: string }>) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
  },
});
console.log(AuthSlice.actions);
console.log(AuthSlice.selectors);
console.log(AuthSlice);
const {
  loginStart,
  loginFail,
  loginSuccess,
  signupFail,
  signupSucess,
  signupStart,
} = AuthSlice.actions;

// type LoginProps = {
//   username: string;
//   password: string;
// };
export const login =
  (username: string, password: string): AppThunk =>
  async (dispatch) => {
    const { BACKEND_API_ENDPOINT } = Constants.expoConfig?.extra || {};

    try {
      dispatch(loginStart());

      const response = await fetch(`${BACKEND_API_ENDPOINT}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const { token, user } = await response.json();
      dispatch(loginSuccess({ user, token }));
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      dispatch(loginFail({ error: errorMessage }));
    }
  };
export const signup =
  (username: string, password: string, email: string): AppThunk =>
  async (dispatch) => {
    const { BACKEND_API_ENDPOINT } = Constants.expoConfig?.extra || {};

    try {
      dispatch(signupStart());

      const response = await fetch(
        `${BACKEND_API_ENDPOINT}/api/auth/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, password }),
        }
      );

      if (!response.ok) {
        const message = await response.json();
        const errMsg = message.message;
        dispatch(signupFail(errMsg));
        return "yessir";
      }

      const { token, user } = await response.json();
      console.log("what we got from the server user ", user);
      console.log("what we got from the server token ", token);

      console.log(token, user);
      dispatch(signupSucess({ user, token }));
      return { user, token };
    } catch (error) {
      console.log("not hello sign up");
      console.log(error);
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      dispatch(signupFail({ error: errorMessage }));
    }
  };

export default AuthSlice.reducer;
