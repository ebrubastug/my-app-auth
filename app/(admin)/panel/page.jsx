"use client";
import * as React from "react";
import styles from "./styles.module.scss";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineDeleteSweep } from "react-icons/md";

export default function PanelPage() {
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    setList(JSON.parse(localStorage.getItem("myList")));
  }, []);

  const removeItem = (id) => {
    const newList = list?.filter((item) => {
      return item?.response.id !== id;
    });

    setList(newList);
    localStorage.setItem("myList", JSON.stringify(newList));
  };

  const clearList = () => {
    localStorage.clear();
    setList([]);
    return list;
  };

  return (
    <>
      <div className={styles.titleBox}>
        <h1>Save Panel</h1>
        <button className={styles.titleButton} onClick={() => clearList()}>
          <MdOutlineDeleteSweep size={20} />
        </button>
      </div>
      <hr />
      <div style={{marginTop:25}}>
        {list?.map((item) => {
          {
            {
              if (item?.response?.text) {
                return (
                  <>
                    <div className={styles.saveBox}>
                      <div className={styles.text}>{item?.response?.text}</div>
                      <button
                        className={styles.button}
                        onClick={() => removeItem(item?.response?.id)}
                      >
                        <RiDeleteBinLine />
                      </button>
                    </div>
                  </>
                );
              }
            }
          }
        })}
      </div>
    </>
  );
}
