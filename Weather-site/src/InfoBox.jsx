import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const InfoBox =({info })=>{
    const HOT_URL = "https://plus.unsplash.com/premium_photo-1673240845240-2fce9077a6e9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGF6eXxlbnwwfHwwfHx8MA%3D%3D";
    
    const COLD_URL = "https://images.unsplash.com/photo-1549562969-349ced0da61a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGR8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1676212747574-c401d596e853?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbnl8ZW58MHx8MHx8fDA%3D";
    return( 
        <>
        <div className="InfoBox">
           
      <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}> 
      <CardActionArea>
        <CardMedia
          component="img"
          height="140" 
          image= {
            info.humidity > 80 ? RAIN_URL 
            : info.temp > 15 ? HOT_URL
            : COLD_URL
          }
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            {info.city}{
            info.humidity > 80 ? <ThunderstormIcon /> 
            : info.temp > 15 ? <WbSunnyIcon/>
            : <AcUnitIcon/>
          }
          </Typography>
          <Typography variant="body2" color="text.secondary" component ="span" >
                <div> Temperature - {info.temp}&deg;C </div>
                <div> Humidity -  {info.humidity} </div>
                <div> Maximum temperature -  {info.tempMax}&deg;C </div>
                <div> Minimum temperature - {info.tempMin}&deg;C </div>
                <div> The Weather is like <b>{info.weather}</b> and temperature feels like <b>{info.feelsLike}&deg;C</b> </div>
          </Typography> 
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        </div>
        </>
    )
}

export default InfoBox