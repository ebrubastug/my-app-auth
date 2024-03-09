"use client";

import * as React from "react";
import styles from "./styles.module.scss";
import Httper from "../../service/Api";
import { FcBookmark } from "react-icons/fc";


function BlogCard() {
  const [countryParam, setCountryParam] = React.useState("");
  const [response, setResponse] = React.useState("");
  const [myList, setMyList] = React.useState([]);

  //const's
  const randomUrl = `https://uselessfacts.jsph.pl/api/v2/facts/random?language=${countryParam}`;
  const todayUrl = `https://uselessfacts.jsph.pl/api/v2/facts/today?language=${countryParam}`;

  React.useEffect(() => {
    checkList();
    request(todayUrl);
  },[countryParam]);

  const request = async (urlType) => {
    return setResponse(await Httper("get", urlType));
  };

  const handleClick = (e) => {
    setCountryParam(e.target.value);
  };

  const checkList = async (response) => {
    if(localStorage?.getItem("myList")?.length > 2){
     return setMyList(JSON.parse(await localStorage?.getItem("myList")));
    }
  };

  const addList = async  (response) => {
    setMyList([...myList, { response }]); 
    localStorage?.setItem("myList", JSON.stringify(myList))
  }
  
  console.log(myList);

  return (
    <>
      <div className="container">
        <div href={`/${response?.id}`} className={styles.card}>
          <div className={styles.cardBody}>
            <h3>{response?.text}</h3>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <select
            aria-label="Default select example"
            className={styles.btn}
            onChange={(e) => handleClick(e)}
          >
            <option value="en">En</option>
            <option value="de">De</option>
            <option value="tr">Tr</option>
          </select>
          <button
            type="button"
            className={styles.btn}
            onClick={() => request(todayUrl)}
          >
            Today
          </button>
          <button
            type="button"
            className={styles.btn}
            onClick={() => request(randomUrl)}
          >
            Random
          </button>
          <button
            type="button"
            className={styles.save}
            onClick={() => addList(response)}
          >
            <FcBookmark size={60} />
          </button>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
