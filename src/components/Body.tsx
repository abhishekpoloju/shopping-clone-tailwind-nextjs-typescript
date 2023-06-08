import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CardComponent } from "./CardComponent";
export interface obj {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
export const Body = () => {
  const [data, setData] = useState<Array<obj>>();
  useEffect(() => {
    const response=fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setData(json))
  }, []);
  return <div className="absolute top-[120px] ">
    <div className="grid grid-cols-4">
      {
        data?.map((singleData)=>{
          return <>
            <CardComponent {...singleData}/>
          </>
        })
      }
    </div>
  </div>;
};
