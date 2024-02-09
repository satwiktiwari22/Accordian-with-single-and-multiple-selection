import { useEffect, useState } from "react";
import "./LoadMore.css";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [Message, setMessage] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  return (
    <div>
      <h2>
        {" > "}Page {count + 1}
      </h2>
      <div className="products-container">
        {loading
          ? "Loading..."
          : data.products &&
            data.products.map((product) => {
              return (
                <div className="product-card" key={product.id}>
                  <h3>{product.title}</h3>
                  <img src={product.thumbnail} alt="" />
                  <p>
                    <b>Brand- </b> {product.brand}
                  </p>
                  <p>
                    <b>Description- </b> {product.description}
                  </p>
                  <p>
                    <b>Price- </b> {product.price}$ (
                    {product.discountPercentage}% off)
                  </p>
                </div>
              );
            })}
      </div>
      <h2
        style={{
          color: "red",
          textAlign: "center",
          fontWeight: "500",
        }}
      >
        {Message}
      </h2>

      {!loading && (
        <button
          className="load-more"
          onClick={() => {
            count < 4
              ? setCount((prev) => prev + 1)
              : setMessage("Sorry Limit exceeded !!!");
          }}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default LoadMore;
