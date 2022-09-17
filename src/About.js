import CoffeeIcon from '@mui/icons-material/Coffee';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";
export default function About() {
 const navigate = useNavigate();
 return (
  <div style={{textAlign: 'center',backgroundColor: '#C2F9E4',height:710}} >
   <CoffeeIcon style={{ color: "#277970" ,fontSize:100}}/>
   <h1 style={{ color: "#277970" ,fontFamily: 'Helvetica'}}>About Simply Recipes 
</h1>
<br></br>
<h1>Who We Are</h1>

<p style={{width: '100%',textAlign: 'center'}}>
Simply Recipes is a home cooking blog , here to help you cook delicious meals with less stress and more joy. We offer recipes and cooking advice for home cooks, by home cooks. Helping create “kitchen wins” is what we’re all about.



<h1>Our History</h1>



Our recipes primarily use fresh, unprocessed ingredients but we also believe there is a time and a place for canned, frozen, and other prepared ingredients. We believe in a diet that includes a wide variety of foods: real butter and cream, extra virgin olive oil, eggs, lots of fruits and vegetables, and protein from meat, fish, beans, and cheese. Plus cake for dessert.



Have feedback for us? We’d love to hear from you! Please contact the team at contact@recipes.com.

<h1>Diversity & Inclusion</h1>
Everyone is welcome at the Simply Recipes table: people of all races, religions, genders, sexual orientations, ages, backgrounds, and abilities. We strive to be a resource for every home cook, and we consciously work to make this inclusion felt in every part of the site, from the individuals we hire to the recipes we share.



</p>
  <br></br>

<Button style={{ backgroundColor: "#277970",color:"white",fontSize:20}} variant="outlined"  onClick={() => {
          return navigate(-1);
        }}
        > <ArrowBackIosNewIcon />Back</Button>
  </div>

 )
}




