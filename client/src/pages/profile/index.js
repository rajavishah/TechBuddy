
import { Card, Grid, Row, Text} from "@nextui-org/react";
import { useRouter } from 'next/router'
export default function Profile() {
    const router = useRouter()
  const list = [
    {
      title: "Edit Profile",
      img: "/profile.jpg",
      href:"/profile/userprofile"
    },
    {
      title: "Developer Analytics",
      img: "/analytics.jpg",
      href:"/analytics"
    },
    {
      title: "My Challenges",
      img: "/challenges.jpg",
      href:"/challenges/mychallenges"
    },
    {
      title: "My Submissions",
      img: "/files.jpg",
      href:"/submissions"
    },
    {
        title: "Quiz (Coming soon)",
        img: "/quiz.jpg",
        href:"/quiz"
      },
      {
        title: "My Posts",
        img: "/quiz.jpg",
        href:"/blog/mypost"
      }
   
  ];

function goToPage(value) {
  console.log(value)
    router.push(value)
  }

  return (
   
    <Grid.Container gap={3} justify="flex-start" direction="row" wrap="wrap" >
     
     
      {list.map((item, index) => (
        <Grid xs={3} sm={5} key={index} >
           
          <Card onClick={()=>{goToPage(item.href)}}isPressable style={{flexDirection:"row-reverse"}} >
          
            <Card.Body  css={{ p: 0 }} >
           
              <Card.Image
              // src={"https://nextui.org" + item.img}
src={item.img}
                objectFit="cover"
                width="100%"
                height={140}
                alt={item.title}
              />
             
            </Card.Body>
            
            <Card.Footer css={{ justifyItems: "center",alignItems:"center"}}>
          
              <Row wrap="wrap" justify="center" align="center">
                <Text b>{item.title}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  {item.price}
                </Text>
              </Row>
              
            </Card.Footer>
        
          </Card>
          
        </Grid>
      ))}
    </Grid.Container>
  );
}
Profile.auth = true;