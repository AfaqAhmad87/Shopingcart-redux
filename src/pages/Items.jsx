import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteitem } from "../redux-toolkit/Reducer";
function Items() {
  const [data2, setdata2] = useState();

  const dispatch = useDispatch();
  const result = useSelector((state) => state.add.array);
  console.log(result.length);
  const valueresult = result.map((el) => el.price);
  const plus = valueresult.reduce((acc, current) => acc + current, 0);
  console.log(data2);
  useEffect(() => {
    setdata2(plus);
  });
  return (
    <>
      <div className="w-[90vw]  m-auto">
        {result.map((value, index) => {
          return (
            <div key={index}>
              <div className="flex flex-row justify-between pb-20">
                <h1 className="h-9">
                  <img src={value?.image} alt="" height={50} width={100} />
                </h1>
                <h1 className="pt-10">{value?.title}</h1>
                <h1 className="pt-10">
                  <span>price-{value?.price}</span>
                </h1>
                <div className="pt-9">
                  <DeleteOutlined onClick={() => dispatch(deleteitem(index))} />
                </div>
              </div>
            </div>
          );
        })}
        {result.length == 0 ? (
          <h1 className="font-extrabold flex flex-row justify-center p-4">
            Please Add To Cart A product
          </h1>
        ) : (
          <h1></h1>
        )}
        <button className="w-90vw m-auto flex flex-row justify-center font-semibold text-4xl p-4 bg-slate-400 rounded-md text-gray-50">
          Pay now {data2}
        </button>
        <br />
        <br />
      </div>
    </>
  );
}

export default Items;
