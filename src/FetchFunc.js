import React from "react"
import {useState,useEffect} from "react" 
import axios from "axios"
const FetchFunc = () => {
    
    const [apiArr, setApiArr] = useState([]);
    
    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines/sources?apiKey=baebdb27500542c78c84eb4c5d17d745").then(apiArr=> {
            console.log("data ==>>",apiArr)
            setApiArr(apiArr?.data?.sources)
        }).catch(error => {
            console.log(error)
        });
      }, []);

 return(
        <>
            <div className="name">
            <h1>Practice Integrating API using fetch</h1>
            </div>
            <div style={{height:"400px",overflowY:"scroll"}}>
                <table border='1'>
                    <tr>
                        <td colSpan={2}>NEWS</td>
                    </tr>
                    <tr>
                        
                        <th width="800px" colSpan={2}>sources</th>
                        
                    </tr>
                        {
                            apiArr?.map(item =>
                                <tr key={item?.id}>
                                    <td  width="400px">Name</td>
                                    <td  width="400px">{item?.name}</td>
                                </tr>
                            )
                        }
                </table>
            </div>
        </>
    
    );

};
export default FetchFunc;