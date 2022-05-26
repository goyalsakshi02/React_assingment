import React from "react"
import {useState,useEffect} from "react" 
import axios from "axios"
import NewApp from "./NewApp";

const FetchFunc = () => {
    
    const [apiArr, setApiArr] = useState([]);
    
    useEffect(() => {
        axios.get("https://newsapi.org/v2/top-headlines/sources?apiKey=589773f1ae1943cb9ce6fef69f973fb8").then(apiArr=> {
            console.log("data ==>>",apiArr)
            setApiArr(apiArr?.data?.sources)
        }).catch(error => {
            console.log(error)
        });
      }, []);

     const name1 =  apiArr?.map((item) => item?.name)
        console.log("hello",name1)

 return(
        <>
           
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
                                    <td  width="400px">{item?.name}</td>
                                    <td width="400px">name</td>
                                </tr>
                            
                            )
                           
                        }
                         <tr> <td><NewApp /></td></tr>
                </table>
            </div>
        </>
    
    );

};
export default FetchFunc;