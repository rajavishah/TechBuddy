import Submission from "@/components/submissions/Submission";
import { UserContext } from "@/contexts/UserContext";
import { Table } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
function Submissions({ data }) {
  console.log(data);

  const [challenges, setChallenges] = useState([]);
  let { user } = useContext(UserContext);
  useEffect(() => {
    console.log(user)
    setChallenges(
      data.filter((item) => {
       return item.author == user.username;
      })
    );
  }, []);

  return (
    <>
      {challenges.map((i) => {
        return <Submission data={i}></Submission>;
      })}
    </>
  );
}

// This gets called on every request
export async function getStaticProps(context) {
  // Fetch data from external API
  const res = await fetch(`http://localhost:5500/getall`,{
    method: "GET", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
      'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNmMGJhZjBhZGNlZTNjMzVmZDVlZTQiLCJpYXQiOjE2ODE5MTE0ODN9.q3qtFx7HbfLbZje1BLgn3q7RsIfVgW2rnVsMDIfnXbg'

    }
  })
 const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Submissions;
Submissions.auth = false;
