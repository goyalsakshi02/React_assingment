import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const NewApp = () => {
  const [apiArr, setApiArr] = useState([]);
  const [categoryData, setCategoryData] = useState([]); //id,name
  const [categoryWiseData, setcategoryWiseData] = useState([]); //filter bassis id
  const [date, setDate] = useState(""); 
  const [title, setTitle] = useState('');

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=589773f1ae1943cb9ce6fef69f973fb8"
      )
      .then((apiArr) => {
        console.log("data ==>>", apiArr);
        // setApiArr(apiArr?.data?.sources)
        // console.log(apiArr.data.sources);
        setApiArr(apiArr?.data?.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("ApiArr", apiArr);

  //    catArr
  //   apiArr.map(apiArr.category =>
  //     )

  //    apiArr.map(category =>
  //     );

  // var newArr =   apiArr.filter(item => item?.category == "general")

  const unique = [...new Set(apiArr.map((item) => item.source.name))];

  //   apiArr?.map((item, id) =>
  //     item?.catogary
  //     console.log("item-value",item)
  //   )

  function handleCatData(catName) {
    var newArr = apiArr.filter((item) => item?.source?.name == catName);
    console.log("catname", newArr)
    const titles = [...new Set(newArr.map((catName) => catName.title, catName.publishedAt))]
    const date = [...new Set(newArr.map((catName) => catName.publishedAt ))]
    setTitle(newArr)
    // setDate(date)
  }

  function handleDescription(value) { 
    setDate(value)
  }

  console.log("Urls", title)
  console.log("title", date)
  return (
    <>
      <div></div>
      <div className="">
        {unique.map((item, i) => (
            <div onClick={() => handleCatData(item)} key={i}>
                {item}
            </div>
        ))}
      </div>
     <div>{title && title.map((value) => <div onClick={() => handleDescription(value)}>{value.title}{"   "}{value.publishedAt}</div>)}</div>
     <div>{date && <div>{date.description}{"   "} <img style={{width:"80px",height:"80px"}}src={date.urlToImage}></img></div>}</div>
    </>
  );
};
export default NewApp;
