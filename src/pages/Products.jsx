import React, { useEffect, useState } from "react";
import { Card } from "antd";
const { Meta } = Card;
import { Button, Flex } from "antd";

import { useDispatch } from "react-redux";
import { addtocart } from "../redux-toolkit/Reducer";
function Products() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);
  const callapi = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((value) => setdata(value));

    setloading(false);
  };
  useEffect(() => {
    callapi();
  }, []);
  console.log(data);

  const dispatch = useDispatch();
  if (loading) {
    return <h1>Loading.......</h1>;
  }

  return (
    <main className="grid grid-cols-4 gap-3 pt-6 bg-slate-300 pl-16 ">
      {data.map((value, index) => {
        return (
          <div key={index}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={<img alt="example" src={value?.image} />}
            >
              <Meta description={value?.title} />
              <br />
              <div className="flex flex-row items-center font-bold gap-2">
                <span>Rs-</span>

                <Meta description={value?.price} />
              </div>
              <br />
              <Flex gap="small" wrap="wrap">
                <Button
                  type="primary"
                  onClick={() => dispatch(addtocart(value))}
                >
                  Add To Cart
                </Button>
              </Flex>
            </Card>
          </div>
        );
      })}
    </main>
  );
}

export default Products;
