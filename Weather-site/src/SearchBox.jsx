import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
import { colors } from '@mui/material';



const SearchBox = ({updateInfo})=>{
    let [city , setCity] = useState("");
    let [error , setError] = useState(false  );

    const API_URL = "http://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "eba60eeb5bb7b7b2f672762c157f753a"
    
    let getWeaherInfo = async()=>{
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
        let result = { 
             city : city,
             temp : jsonResponse.main.temp,
             tempMin : jsonResponse.main.temp_min,
             tempMax : jsonResponse.main.temp_max,
             humidity : jsonResponse.main.humidity,
             feelsLike : jsonResponse.main.feels_like,
             weather : jsonResponse.weather[0].description,
    
        };
          
        console.log(result); 
        return result;
            
        } catch (error) {
            throw error;
        }
    
}
        
    

    let handleChange = (evt)=>{
        setCity(evt.target.value);
    } 
    let handleSubmit = async(evt)=>{
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeaherInfo();
            updateInfo(newInfo); 
            
        } catch (error) {
            setError(true );   

        }
       
    }
    return(
        <>
        <div className='SearchBox'> 
           <form onSubmit={handleSubmit}>
           <TextField  id="city" label="City name" variant="outlined" required value={city} onChange={handleChange}/>
           <br/>
           <br/>
           <Button variant="contained" type = "submit">Search</Button>
            {error &&  <p style={{color: "red "}}> No such place exist </p>}
           </form>
           </div>
        </> 
    )
}
export default SearchBox;