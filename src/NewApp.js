import React from "react"
import {useState,useEffect} from "react" 
import axios from "axios"
const NewApp = () => {
    
    const [apiArr, setApiArr] = useState([]);
    
    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines/sources?apiKey=baebdb27500542c78c84eb4c5d17d745").then(apiArr=> {
            console.log("data ==>>",apiArr)
            setApiArr(apiArr?.data.sources)
        }).catch(error => {
            console.log(error)
        });
      }, []);

      return(
        <>
           <div class>Asssignment</div>
            <div class='data'>
                {
                apiArr?.map(item =>
                    
                )
            }
            </div>

        </>
    
    );

};
export default NewApp