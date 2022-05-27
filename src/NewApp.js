import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from 'moment';

const NewApp = () => {
  const [apiArr, setApiArr] = useState([]);
//   const [allDate, setAllDate] = useState(""); 
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
      .catch((error) => {
       
      });
  }, []);
  
   console.log("apiarr", apiArr)
    const unique = [...new Set(apiArr.map((item) => item?.source?.name))];

    const handleSource = (item , i) =>{
        console.log("swaswde=>...")
    const alTitlDate = [ ...new Set(apiArr.map((item) => item))]
    console.log("jdejdiejdikj",alTitlDate)
   // const alDate = [ ...new Set(apiArr.map((item) => item?.publishedAt))]
    setAllTitle(alTitlDate)
    setTitle([])
    // setAllDate(alDate)
    }

    // console.log("allTitle", allTitle)
    // console.log("allDitle", allDate)

  function handleCatData(catName) {
    var newArr = apiArr.filter((item) => item?.source?.name == catName);
    // const titles = [...new Set(newArr.map((catName) => catName.title))]
    // const date = [...new Set(newArr.map((catName) => catName.publishedAt ))]
    setTitle(newArr)
    setAllTitle([])
    
    // console.log("titles",titles)
    // setDate(date)
  }

  function handleDescription(value) { 
    setDescrip(value)
  }

  return (
    <div className="container">
      
      <div className="leftpane">
          
          <div onClick={(item) => handleSource(item)} >sources</div>
          
        
        {
            unique.map((item, i) => (
           
           <div onClick={() => handleCatData(item)} key={i}>
                {item}
            </div>
        ))}

        </div>
     
     
     <div className="middlepane">
        
        {allTitle && allTitle.map((value) => <div onClick= {() => handleDescription(value)}><div>{value.title}</div><div>{moment(value.publishedAt).format("DD/MM/YYYY")}</div></div>)} 
     
        {title && title.map((value) => <div onClick= {() => handleDescription(value)}><div>{value.title}</div><div>{moment(value.publishedAt).format("DD/MM/YYYY")}</div><div></div></div>)}</div>
     
        <div className="rightpane">
           
            {descrip && <div><div><img style={{width:"80px",height:"80px"}}src={descrip.urlToImage}></img></div><div>{descrip.description}</div></div>}</div>
    
   
    </div>
  );
};
export default NewApp;
