import Link from "next/link";
import styles from "./PostsSection.module.scss";
import { useGetMyPostsQuery } from "@/redux/api/post";

const PostsSection = () => {
  const { data } = useGetMyPostsQuery();

  return (
    <div className={`${styles.myPostsContainer} container`}>
      <h1>My Posts</h1>
      {data?.length === 0 ? (
        <div className={styles.noPostsMessage}>
          <span>You {`don't`} have any posts yet, but you can create one</span>
          <Link href="/create-post">Create Post</Link>
        </div>
      ) : (
        data?.map((post) => (
          <div className={styles.postCard} key={post.id}>
            <h3>Post #{post.id}</h3>
            <p>{post.caption}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default PostsSection;
