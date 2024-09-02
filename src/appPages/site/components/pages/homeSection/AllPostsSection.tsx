"use client";
import * as React from "react";
import { useGetAllPostsQuery } from "@/redux/api/post";
import styles from "./AllPosts.module.scss";
import PostCard from "../../../../../../ui/postCard/PostCard";

const AllPostsSection: React.FC = () => {
  const { data } = useGetAllPostsQuery();

  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.results}>
        {data && data.map((post) => <PostCard key={post.id} postItem={post} />)}
      </div>
    </div>
  );
};
export default AllPostsSection;
