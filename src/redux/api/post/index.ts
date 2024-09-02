import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getAllPosts: build.query<POST.PostData[], void>({
      query: () => ({
        url: "post/get-all",
        method: "GET",
      }),
    }),
    getMyPosts: build.query<POST.GetMyPosts.Response[], POST.GetMyPosts.Arg>({
      query: () => ({
        url: "post/get-my",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllPostsQuery, useGetMyPostsQuery } = api;
