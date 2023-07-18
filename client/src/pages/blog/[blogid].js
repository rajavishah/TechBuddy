import Comments from "@/components/blog/Comments";
import { useRouter } from "next/router";
import { Container } from "@nextui-org/react";
import DetailLayout from "@/components/common/DetailLayout";
function BlogDetail({ data }) {
  const router = useRouter();
  const blogid = router.query.blogid;
  console.log(data.post.comments)
  return (
    <>
      <DetailLayout data={data.post} colors={["#910838","#44041A","#F31260"]}></DetailLayout>
    <Comments post_id={data.post._id} comments={data.post.comments}></Comments> 
    
    </>
  );
}

BlogDetail.auth = false;
BlogDetail.skipLayout = false;

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  const { params } = context;
console.log(params)
  const res = await fetch(`http://localhost:5500/posts/${params.blogid}`,{
    method: "GET", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
      'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNmMGJhZjBhZGNlZTNjMzVmZDVlZTQiLCJpYXQiOjE2ODE5MTE0ODN9.q3qtFx7HbfLbZje1BLgn3q7RsIfVgW2rnVsMDIfnXbg'

    }
  })
  const data = await res.json();

  // try {
  //   const response = await fetch(
  //     `http://localhost:5500/posts/${params.blogid}`,
  //     {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ views: data.views + 1 }),
  //     }
  //   );

  //   if (response.ok) {
  //   } else {
  //     throw new Error("Something went wrong");
  //   }
  // } catch (error) {
  //   console.error(error);
  // }
  // Pass data to the page via props
  return { props: { data } };
}

export default BlogDetail;
