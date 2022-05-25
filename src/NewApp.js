import React from "react"
import {useState,useEffect} from "react" 
import axios from "axios"
const NewApp = () => {
    
    const [apiArr, setApiArr] = useState([]);
    const [categoryData, setCategoryData] = useState(['general']);
    
    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines/sources?apiKey=baebdb27500542c78c84eb4c5d17d745").then(apiArr=> {
            console.log("data ==>>",apiArr)
            // setApiArr(apiArr?.data?.sources)
            // console.log(apiArr.data.sources);
            setApiArr(apiArr.data.sources);
        }).catch(error => {
            console.log(error)
        });
      }, []);


     const handlecatogary = (value) => {
         let arr =[]
         arr = apiArr?.map((item, id) =>
            item?.category
        )

     }

      apiArr?.map((item, id) =>
        console.log(item)
        
        )


      return(
        <>
           <div>Asssignment</div>
            <div className='data' >
                {
                    
                apiArr?.map((item, id) =>
                  <h1 key={id}>{item?.category}</h1>  
                  
                 )
                 
            }
            </div>

        </>
    
    );

};
export default NewApp