import { useEffect, useState } from "react";

const useChefs = () => {
  const [chefsData, setChefsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => {
        setChefsData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return [chefsData, loading];
};

export default useChefs;
