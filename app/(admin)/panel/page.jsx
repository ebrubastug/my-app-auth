"use client";
import * as React from "react";

export default function PanelPage() {
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    console.log("girdi");
    setList(JSON.parse(localStorage.getItem("myList")));
  }, []);

  const removeItem = (id) => {
    const newList = list?.filter((item) => {
      return item?.response.id !== id;
    });

    setList(newList);
    localStorage.setItem("myList", JSON.stringify(newList));
  };

  return (
    <>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"
      ></script>
      <div>
        {list?.map((item) => {
          {
            {
              if (item?.response?.text) {
                return (
                  <>
                    <button onClick={() => removeItem(item?.response?.id)}>
                      Delete
                    </button>
                    <p>{item?.response?.text}</p>
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
