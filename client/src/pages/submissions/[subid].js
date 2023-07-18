import RandomComponent from "@/components/challenge/MockItem";
import DetailLayout from "@/components/common/DetailLayout";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SubmissionDetail({data}) {


  const notify = () => toast("Wow so easy!");
    const router = useRouter()
    const reqParams = router.query.subid
    console.log(data)
    return ( <>
     <Button onClick={notify} css={{marginLeft:"40%"}}>Register</Button>
     <ToastContainer />
    </> );
}

SubmissionDetail.auth = true;
SubmissionDetail.skipLayout =false;



// This gets called on every request
export async function getServerSideProps(context) {
    // Fetch data from external API
   const {params} = context
 console.log(params)
    const res = await fetch(`http://localhost:4000/submissions/${params.subid}`)
    const data = await res.json()
     console.log(data)
    // Pass data to the page via props
    return { props: { data } }
  }
  

  export default SubmissionDetail;
