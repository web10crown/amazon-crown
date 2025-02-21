import Crousal from "../components/Crousal";
import Deals from "../components/Deals";
import Furnitures from "../components/Furnitures";
import Kitchen from "../components/Kitchen";
import Sports from "../components/Sports";
import Grocery from "../components/Grocery";
import Cookerware from "../components/Cookerware";
import { publicRequest } from "../request";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Lipstick from "@/components/Lipstick";
import TechVideo from "@/components/TechVideo";
import FurnitureVideo from "@/components/FurnitureVideo";
import BrandScroller from "@/components/BrandScroller";
import Summersale from "@/components/Summersale";


export default function Home() {
  const router = useRouter();

// useEffect for geting product data from data base to reduce connecion time of data loading on next page

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await axios.get(`${publicRequest}/api/products/`)
  //       .catch((error) => {console.log(error)});
  //   };
  //   getData();
  // }, []);

  // useeffect for payment confirmation =========================>

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      alert("Order placed! You will receive an email confirmation.");
      router.push("/");
    }

    if (query.get("canceled")) {
      alert(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
      router.push("/");
    }
  }, []);

  return (
    <>
      <Crousal />
      <BrandScroller />
      <Lipstick />

      <Kitchen />
      <Deals />
      <Furnitures />

      <FurnitureVideo />
  
      <Grocery />
      <Cookerware />
      <Sports />
      <Summersale />
      {/* <TechVideo /> */}
    </>
  );
}
