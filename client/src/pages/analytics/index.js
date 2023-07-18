import BarCustomChart from '@/components/charts/BarCustomChart';
import LineCustomChart from '@/components/charts/LineChart';
import React, { useContext, useEffect, useState } from 'react'
import { ResponsiveContainer, Line, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import {Card, Grid, Row, Text} from '@nextui-org/react';
import { UserContext } from '@/contexts/UserContext';
const data = [
  { label: 'January', views: 21, bookmarks: 41, likes:30 },
  { label: 'February', views: 35, bookmarks: 79, likes:30 },
  { label: 'March', views: 75, bookmarks: 57,likes:30},
  { label: 'April', views: 51, bookmarks: 47,likes:30},
  { label: 'May', views: 41, bookmarks: 63 ,likes:30},
  { label: 'June', views: 47, bookmarks: 71 ,likes:30}
];

const challenges = [
  { label: 'January', quiz: 21, challenges: 41, posts:30 },
  { label: 'February', quiz: 35, challenges: 79, posts:30 },
  { label: 'March', quiz: 75, challenges: 57,posts:30},
  { label: 'April', quiz: 51, challenges: 47,posts:30},
  { label: 'May', quiz: 41, challenges: 63 ,posts:30},
  { label: 'June', quiz: 47, challenges: 71 ,posts:30}
];



 
export default function Analytics({data , data2}) {



const {user} = useContext(UserContext)
const [likes,setlikescount]= useState(0);
const [comments,setCommentscount]= useState(0);
const [bookmarks,setBookmarkscount]= useState(0);
const [views,setViewscount]= useState(0);
const [devRank,setDevRank]= useState(user.level);
const [challengesPosted, setChallengesSubmitted]=useState(0)

useEffect(() => {
  console.log(data , user)
  let posts= data.filter((item) => {
      return item.username == user.username;
     }
  );
  console.log(posts)
  posts.map((post)=>{
    console.log(4)
setlikescount(2)
setCommentscount(comments+post.comments.length)
setBookmarkscount(bookmarks+post.bookmarks.length)
setViewscount(views+post.views)



  })
  console.log(posts)
  let challenges= data2.filter((item) => {
    console.log(item)
    return item.author == user.username;
   }
);

  setChallengesSubmitted(challenges.length)

}, []);
const list = [
  {
    title: "Likes",
    count: likes,
  },
  {
    title: "Comments",
    count: comments,
  },
  {
    title: "Bookmarks",
    count: bookmarks,
  },
  {
    title: "Views",
    count: views,
  },
  {
    title: "Challenges Posted",
    count: challengesPosted,
  },
  {
    title: "Quizzes Solved",
    count: "Upcoming",
  },
  {
    title: "Developer Rank",
    count: devRank,
  },
 
];

  return (
    <div className="row">
      <div className="col-md-12">
        <h2>Developer Statistics and Charts</h2>

      </div>


      <Card css={{ mw: "100%" }}>
      <Grid.Container gap={1} justify="flex-start">
      {list.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card  isPressable>
            <Card.Body css={{ p: 0 }}>
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text css={{color:"$primary"}} b>{item.title}</Text>
                <Text css={{ color: "#F5A524", fontWeight: "$semibold", fontSize: "$sm" }}>
                  {item.count}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
    </Card>
      <LineCustomChart data={data} title="Post Interaction (last 6 months)"labels={["views","bookmarks","likes"]}></LineCustomChart>
      <BarCustomChart data={data} title="Post Interaction (last 6 months)"labels={["views","bookmarks","likes"]}></BarCustomChart>
      <LineCustomChart data={challenges}title="Performance and Metrics(last 6 months)" labels={["quiz", "challenges","posts" ]}></LineCustomChart>
      <BarCustomChart data={challenges} title="Performance and Metrics(last 6 months)"labels={["quiz","challenges","posts"]}></BarCustomChart>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
 
  const res = await fetch(`http://localhost:5500/allpost`);
  const data = await res.json();

   
  const res2 = await fetch(`http://localhost:5500/getall`,{
    method: "GET", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
      'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNmMGJhZjBhZGNlZTNjMzVmZDVlZTQiLCJpYXQiOjE2ODE5MTE0ODN9.q3qtFx7HbfLbZje1BLgn3q7RsIfVgW2rnVsMDIfnXbg'

    }
  })
  const data2 = await res2.json()

  // Pass data to the page via props
  return { props: { data , data2 } };



}


Analytics.auth = false;