
import { Card1 } from "@/components/home/cards/Card1";
import { Card2 } from "@/components/home/cards/Card2";
import { Card3 } from "@/components/home/cards/Card3";
import { Card4 } from "@/components/home/cards/Card4";
import { Card5 } from "@/components/home/cards/Card5";
import { Grid } from "@nextui-org/react";

function HomePage({data}) {
    return (
      <div>
      
        <h1>Trending Posts(Upcoming)</h1>
        <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={4}>
        <Card1 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card2 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card3 />
      </Grid>
      <Grid xs={12} sm={5}>
        <Card4 />
      </Grid>
      <Grid xs={12} sm={7}>
        <Card5 />
      </Grid>
    </Grid.Container>
      </div>
    )
  }
  
  export default HomePage;
  