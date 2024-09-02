namespace POST {
  interface PostData {
    id: number;
    userId: number;
    caption: string;
    mediaUrl: string;
    mediaType: "PHOTO" | "VIDEO";
    createdAt: string;
    updatedAt: string;
  }
  namespace GetMyPosts {
    type Response = PostData;
    type Arg = void;
  }
}
