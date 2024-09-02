import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query<AUTH.GetResponse, AUTH.GetRequest>({
      query: () => ({
        url: "/auth/user",
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
    login: build.mutation<AUTH.PostLoginResponse, AUTH.PostLoginRequest>({
      query: (loginData) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: loginData,
      }),
      invalidatesTags: ["auth"],
    }),
    register: build.mutation<
      AUTH.PostRegisterResponse,
      AUTH.PostRegisterRequest
    >({
      query: (registerData) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: registerData,
      }),
      invalidatesTags: ["auth"],
    }),
    logout: build.mutation<AUTH.PostLogoutResponse, AUTH.PostLogoutRequest>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["auth"],
    }),
    refreshToken: build.mutation<
      AUTH.PatchRefreshTokenResponse,
      AUTH.PatchRefreshTokenRequest
    >({
      query: (refreshTokenData) => ({
        url: "/auth/refresh",
        method: "PATCH",
        body: refreshTokenData,
      }),
      invalidatesTags: ["auth"],
    }),
    forgot: build.mutation<AUTH.PostForgotResponse, AUTH.PostForgotRequest>({
      query: (forgotData) => ({
        url: "/auth/forgot",
        method: "POST",
        body: forgotData,
      }),
      invalidatesTags: ["auth"],
    }),
    resetPassword: build.mutation<
      AUTH.PatchResetPasswordResponse,
      AUTH.PatchResetPasswordRequest
    >({
      query: (resetPasswordData) => ({
        url: "/auth/reset-password",
        method: "PATCH",
        body: resetPasswordData,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useGetMeQuery,
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useRefreshTokenMutation,
  useForgotMutation,
  useResetPasswordMutation,
} = api;
