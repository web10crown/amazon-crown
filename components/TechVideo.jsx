import { publicRequest } from "@/request";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "@/styles/components/TechVideo.module.css";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const TechVideo = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        productsHandler();
    }, [])

    const productsHandler = async () => {
        try {
            const res = await axios.get(`${publicRequest}/api/products`);
            const filteredDeals = res.data.filter(product => product.cat.toLowerCase().includes("footwear"));
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

                        <div className={styles.container}>
                            <div className={styles.card}>
                                <div className={styles.bgtext}>{product.brand}</div>
                                <div className={styles.imgContainer}>
                                    <div className={styles.imgBx}>
                                        <img
                                            src={product.img}
                                        />
                                    </div>
                                </div>

                                <div className={styles.contentBx}>
                                    <h2>{product.name}</h2>
                                    <a href="#">Buy Now</a>
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

export default TechVideo;
