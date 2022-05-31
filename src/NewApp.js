import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';

const NewApp = () => {
  const [apiArr, setApiArr] = useState([]);
  const [allTitle, setAllTitle] = useState('');
  const [descrip, setDescrip] = useState(""); 
  const [title, setTitle] = useState('');

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=589773f1ae1943cb9ce6fef69f973fb8"
      )
      .then((apiArr) => {
        setApiArr(apiArr?.data?.articles);
      })
      .catch((error) => { console.log(error)
       
      });
  }, []);
  
  
  const unique = [...new Set(apiArr.map((item) => item?.source?.name))];

  const handleSource = (item , i) => {
    const alTitlDate = [ ...new Set(apiArr.map((item) => item))]
    setAllTitle(alTitlDate)
    setTitle([])
   
  }

  function handleCatData(catName) {
    var newArr = apiArr.filter((item) => item?.source?.name == catName);
    setTitle(newArr)
    setAllTitle([])
    
  }

  function handleDescription(value) { 
    setDescrip(value)
  }

 
  return (
    <div className="container">
      
      <div className="leftpane">
          
          <div className="data" onClick={(item) => handleSource(item)} >sources</div>
          
         {
              unique.map((item, i) => (
            
            <div className="data" onClick={() => handleCatData(item)} key={i}>
                  {item}
              </div>
          ))}

      </div>
     
     
      <div className="middlepane">
        
        {allTitle && allTitle.map((value) => <div onClick= {() => handleDescription(value)}><div className="title">{value.title}</div><div className="date">{moment(value.publishedAt).format("DD/MM/YYYY")}</div></div>)} 
     
        {title && title.map((value) => <div onClick= {() => handleDescription(value)}><div className="title">{value.title}</div><div className="date">{moment(value.publishedAt).format("DD/MM/YYYY")}</div><div></div></div>)}
        
      </div>
     
      <div className="rightpane">
           
            {descrip && <div><div className="image"><img style={{width:"100%",height:"auto"}}src={descrip.urlToImage}></img></div><div className="descrip">{descrip.description}</div></div>}
            
      </div>
    
   
     </div>
  );
};
export default NewApp;