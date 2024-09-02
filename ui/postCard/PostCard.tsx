/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import scss from "./PostCard.module.scss";
import {
  useGetLikesByPostIdQuery,
  usePostLikeActionMutation,
  usePostUnlikeActionMutation,
} from "@/redux/api/post-like";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Image from "next/image";

interface IProps {
  postItem: POST.PostData;
}

const PostCard: React.FC<IProps> = ({ postItem }) => {
  const { mediaType, mediaUrl, caption, createdAt } = postItem;
  const { data } = useGetLikesByPostIdQuery({ postId: postItem.id });

  const [postLike, { isLoading: isLiking }] = usePostLikeActionMutation();
  const [postUnlike, { isLoading: isUnliking }] = usePostUnlikeActionMutation();

  const handleLike = () => {
    postLike({ postId: postItem.id });
  };

  const handleUnlike = () => {
    postUnlike({ postId: postItem.id });
  };

  return (
    <div className={scss.postCard}>
      {mediaType === "PHOTO" ? (
        <img src={mediaUrl} alt={caption || "Photo"} />
      ) : // <Image
      //   src={mediaUrl}
      //   alt={caption || "Photo"}
      //   width={700}
      //   height={500}
      //   quality={70}
      // />
      mediaType === "VIDEO" ? (
        <video controls>
          <source src={mediaUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : null}

      <p>{caption}</p>
      <div className={scss.postActions}>
        <span>All Likes {data?.likesCount}</span>
        {data?.isLike ? (
          <button
            onClick={handleUnlike}
            disabled={isUnliking}
            className={scss.unlikeButton}
          >
            <FaHeart className={scss.unlikeIcon} />
            {isUnliking ? "Unliking..." : "Unlike"}
          </button>
        ) : (
          <button
            onClick={handleLike}
            disabled={isLiking}
            className={scss.likeButton}
          >
            <FaRegHeart className={scss.likeIcon} />
            {isLiking ? "Liking..." : "Like"}
          </button>
        )}
      </div>
      <small className={scss.postDate}>
        Created at: {new Date(createdAt).toLocaleString()}
      </small>
    </div>
  );
};

export default PostCard;
