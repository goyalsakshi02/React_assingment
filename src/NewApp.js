import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const NewApp = () => {
  const [apiArr, setApiArr] = useState([]);
  const [date, setDate] = useState(""); 
  const [title, setTitle] = useState('');

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=589773f1ae1943cb9ce6fef69f973fb8"
      )
      .then((apiArr) => {
        setApiArr(apiArr?.data?.articles);
      })
      .catch((error) => {
       
      });
  }, []);

  const unique = [...new Set(apiArr.map((item) => item.source.name))];

  function handleCatData(catName) {
    var newArr = apiArr.filter((item) => item?.source?.name == catName);
    const titles = [...new Set(newArr.map((catName) => catName.title, catName.publishedAt))]
    const date = [...new Set(newArr.map((catName) => catName.publishedAt ))]
    setTitle(newArr)
    // setDate(date)
  }

  function handleDescription(value) { 
    setDate(value)
  }

  return (
    <div class="container">
      
      <div className="leftpane">
        
        {unique.map((item, i) => (
           
           <div onClick={() => handleCatData(item)} key={i}>
                {item}
            </div>
        ))}
      </div>
     
     <div className="middlepane">{title && title.map((value) => <div onClick={() => handleDescription(value)}>{value.title}{"   "}{value.publishedAt}</div>)}</div>
     
     <div className="rightpane">{date && <div>{date.description}{"   "} <img style={{width:"80px",height:"80px"}}src={date.urlToImage}></img></div>}</div>
    
    </div>
  );
};
export default NewApp;
