import React, { useMemo, useState } from "react";

// https://api.npms.io/v2/search?q=axios
const NpmSearch = () => {
  const [q, setQ] = useState("");
  const [data, setData] = useState([]);
  const [favPackage, setFavPackage] = useState("");

  const search = async () => {
    try {
      const result = await fetch(`https://api.npms.io/v2/search?q=${q}`);
      const response = await result.json();
      setData(response);
      setQ("");
    } catch (err) {
      throw err;
    }
  };

  const memoizedVal = useMemo(() => data, [data]);

  return (
    <>
      <h1>Npm search</h1>
      <label>Search: </label>
      <input value={q} onChange={(e) => setQ(e.target.value)} />
      <button onClick={search}>Search</button>

      {data.length !== 0 && (
        <div
          style={{
            height: "10rem",
            overflowX: "scroll",
            border: "0.2px solid black",
            margin: "1rem 0",
          }}
        >
          {memoizedVal.results.map((e, index) => (
            <div key={index}>
              <input
                type="radio"
                id={e.package.name}
                name="favPackage"
                value={e.package.name}
                onChange={(e) => setFavPackage(e.target.value)}
              />
              <label htmlFor={e.package.name}>{e.package.name}</label>
            </div>
          ))}
        </div>
      )}
      {favPackage && (
        <p>
          You fav package is : <b>{favPackage}</b>
        </p>
      )}
    </>
  );
};

export default NpmSearch;
