import { useContext, useEffect, useState } from "react";
import { getSession, signIn, signOut } from "next-auth/react";
import Post from "@/components/blog/Post";
import AddPostForm from "@/components/blog/AddPostForm";
import Link from "next/link";
import styles from "../../styles/Blog.module.scss";
//import { getSession } from 'next-auth/client'
//import axios from 'axios'
import {
  Pagination,
  Input,
  Text,
  Badge,
  Grid,
  Button,
} from "@nextui-org/react";

import { UserContext } from "@/contexts/UserContext";
function MyPosts({ data }) {
  const [posts, setPosts] = useState(data);
  const [postsSet,setPostsSet]=useState([])
  const [currentPage, setPage] = useState(1);
  const [filters, setFilters] = useState([]);

  let { user } = useContext(UserContext);
  useEffect(() => {
    console.log(data.filter((item) => {
        return item.username == user.username;
       }))
    setPosts(
      data.filter((item) => {
       return item.username == user.username;
      })
    );


  }, []);

 
  return (
    <div className={styles.main}>
    
        <Text size="x-large">Your Posts</Text>
      
      
      
      <div className={styles.postlist}>
        {posts.map((item) => {
          return <Post data={item}></Post>;
        })}
       
      </div>
    </div>
  );
}
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
 
  const res = await fetch(`http://localhost:5500/allpost`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };



}

export default MyPosts;
MyPosts.auth = false;
