import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Sakshi = () => {
const [apiArr, setApiArr] = usestate([])

useEffect(() => {
    axios
      .get(
        "https://fakestoreapi.com/products"
      .then((apiArr) => {
        setApiArr(apiArr?.data);
        console.log("swwd=>.....",apiArr?.data )
      })
      .catch((error) => {
        console.log(error);
      }))
    // fakeApi();
  }, [])

  return(
      <h1>hello</h1>
  )
}