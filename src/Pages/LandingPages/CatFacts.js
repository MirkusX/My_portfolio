import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { CounterContext } from "./LandingPagesFiles/CounterContext";
import axios from "axios";

export const CatFacts = () => {
  const { count } = useContext(CounterContext);
  const [url, setUrl] = useState("https://catfact.ninja/facts");
  const [data, setData] = useState();
  const [error, setError] = useState();

  const getData = () => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((response) => {
        setError(response);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  if (data) {
    return (
      <>
        <h1>Cat facts lmao xd caturday i luv cats</h1>
        <ul>
          {data.data.map((item, index) => {
            return <li key={index}>{item.fact}</li>;
          })}
        </ul>
        <h1>{count}</h1>
        {/* <button onClick={setUrl(data.data.next_page_url)}>
          Load more facts
        </button> */}
      </>
    );
  } else if (error) {
    return (
      <>
        <p>Failed to load</p>
      </>
    );
  } else {
    return <p>Loading data...</p>;
  }
};
