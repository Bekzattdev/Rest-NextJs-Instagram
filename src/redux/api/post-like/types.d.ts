namespace POSTLIKE {
  namespace GetLikesByPostId {
    type Arg = Pick<Response, "postId">;
    interface Response {
      postId: number;
      likesCount: number;
      isLike: boolean;
      likedUsers: [
        {
          username: string;
          photo: string;
          likedAt: string;
        },
      ];
    }
  }
  namespace PostLikeAction {
    type Arg = GetLikesByPostId.Arg;
    interface Response {
      userId: number;
      postId: number;
      createdAt: string;
      updatedAt: string;
    }
  }
  namespace PostUnlikeAction {
    type Arg = GetLikesByPostId.Arg;
    type Response = Pick<PostLikeAction.Response, "postId" | "userId">;
  }
}
