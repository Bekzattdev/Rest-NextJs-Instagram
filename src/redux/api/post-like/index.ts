import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getLikesByPostId: build.query<
      POSTLIKE.GetLikesByPostId.Response,
      POSTLIKE.GetLikesByPostId.Arg
    >({
      query: (post) => ({
        url: `post/get-like/${post.postId}`,
        method: "GET",
      }),
      providesTags: ["post-like"],
    }),
    postLikeAction: build.mutation<
      POSTLIKE.PostLikeAction.Response,
      POSTLIKE.PostLikeAction.Arg
    >({
      query: (post) => ({
        url: "post/like",
        method: "POST",
        body: { postId: post.postId },
      }),
      invalidatesTags: ["post-like"],
    }),
    postUnlikeAction: build.mutation<
      POSTLIKE.PostUnlikeAction.Response,
      POSTLIKE.PostUnlikeAction.Arg
    >({
      query: (post) => ({
        url: "post/unlike",
        method: "DELETE",
        body: { postId: post.postId },
      }),
      invalidatesTags: ["post-like"],
    }),
  }),
});
export const {
  useGetLikesByPostIdQuery,
  usePostLikeActionMutation,
  usePostUnlikeActionMutation,
} = api;
