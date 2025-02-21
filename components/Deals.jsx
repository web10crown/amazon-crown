import { publicRequest } from "@/request";
import styles from "@/styles/components/Deals.module.css";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Deals = () => {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        productsHandler();
    },[])

    const productsHandler = async () =>{
        try {
            const res = await axios.get(`${publicRequest}/api/products`);
            const filteredDeals = res.data.filter(product => product.cat.toLowerCase().includes("deal"));
            setProducts(filteredDeals);
        } catch (error) {
            console.log(error);
        }
       
    }
    

    const handleScroll = (direction) => {
		const cards = document.querySelector("#scrollL");
		const scrollAmount = cards.offsetWidth;
		cards.scrollBy({
			left: direction === "left" ? -scrollAmount : scrollAmount,
			behavior: "smooth",
		});
	};


    return (
      
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.leftArrow} onClick={() => handleScroll("left")}>
                        &larr;
                    </div>
                    <h2>Today’s Deals</h2>
                    {/* <Link href="/products?cat=deal" style={{ textDecoration: "none", color: "black" }}> */}
                        <div id="scrollL" className={styles.cards}>

                            {products.map((product) => (


                                <div className={styles.productCard}>
                                    <div className={styles.badge}>Hot</div>
                                    <div className={styles.productTumb}>
                                        <img
                                            src={product.img}
                                            alt=""
                                        />
                                    </div>
                                    <div className={styles.productDetails}>

                                        <h4>
                                            {product.name}
                                        </h4>
                                        <p>
                                            {product.brand}
                                        </p>
                                        <div className={styles.productBottomDetails}>
                                            <div className={styles.productPrice}>
                                                <small>{product.price + 23}</small>{product.price}
                                            </div>
                                            <div className={styles.productLinks}>
                                                <a href="">
                                                    <FaHeart />
                                                </a>
                                                <a href="">
                                                    <FaShoppingCart />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    {/* </Link> */}
                    <div className={styles.rightArrow} onClick={() => handleScroll("right")}>
                        &rarr;
                    </div>
                </div>
            </div>
       
    );
};

export default Deals;
