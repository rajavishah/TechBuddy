import { useEffect, useState } from "react";
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
import TechGrid from "@/components/common/TechGrid";
function Blog({ data }) {
  const [posts, setPosts] = useState(data);
  const [postsSet,setPostsSet]=useState([])
  const [currentPage, setPage] = useState(1);
  const [filters, setFilters] = useState([]);
  // async function myHandler(req, res) {
  //   const session = await getSession({ req })
  //   if (!session) {
  //     res.status(401).json({ message: 'Unauthorized' })
  //     return
  //   }
  
  //   try {
  //     const response = await axios.post('', {
  //       session: session,
  //     })
  //     res.status(200).json(response.data)
  //   } catch (error) {
  //     console.error(error)
  //     res.status(500).json({ message: 'Server Error' })
  //   }
  // }
  console.log(data)
  const clickhandler = (e) => {
    const searchVal = e.target.value;

    const searchResults = data.filter((item) => {
      return item.title.toLowerCase().includes(searchVal.toLowerCase());
    });
    setPosts(searchResults);
  };
  const changeFilters = (value, event) => {

    if(value=="Remove Filter"){
      return  setPosts(data);
     
    }
    filters.includes(value)
      ? setFilters(filters.filter((item) => item != value))
      : filters.push(value);
    console.log(value);
    const searchResults = data.filter((it) => {
      return it.tags.includes(value);
    });
    console.log(searchResults);
    setPosts(searchResults);
  };
  const changePage = (page) => {
    console.log(page);
  };

  useEffect(()=>{
    let itemsPerPage=4;
    let counter=0;
    let page=0;
data.map((i)=>{
  counter++;

  if(counter%itemsPerPage==0){
    console.log("here")
    page=page+1;
    console.log(page)
  // postsSet.push({pageId:page, posts:[]})
  //   page++;
 
  // // postsSet[page-1].posts.push(i)
  // setPostsSet(postsSet)
  // console.log(postsSet)
  }
 //console.log(postsSet)
 

})


  },[posts,postsSet])
  return (
    <div className={styles.main}>
      <div>
        <Text size="x-large">Hi Rohan, whats on your mind today? </Text>
         {console.log(postsSet)}
        <Input
          clearable
          underlined
          size="xl"
          placeholder="Search"
          onChange={() => {
            clickhandler(event);
          }}
        />
      </div>

     
      <TechGrid changeFilters={changeFilters}></TechGrid>
      <Link href={"blog/first"}>
        <Button color="secondary">Add post</Button>
      </Link>
      <div className={styles.postlist}>
        {posts.map((item) => {
          return <Post data={item}></Post>;
        })}
        <Pagination
          loop
          color="success"
          onChange={(page) => {
            changePage(page);
          }}
          shadow
          total={10}
          initialPage={1}
        />
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

export default Blog;
Blog.auth = false;
