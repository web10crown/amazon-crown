import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";
import Loader from "./Loader";
import { useState } from "react";
import Router from "next/router";

const Layout = ({ children }) => {
	const [loading, setLoading] = useState(false);

	Router.events.on("routeChangeStart", (url) => {
		setLoading(true);
	});
	Router.events.on("routeChangeComplete", (url) => {
		setLoading(false);
	});
	return (
		<>
			<Head>
				<title>Amazon | India</title>
				<meta
					name="description"
					content="Online Shopping India - Buy mobiles, laptops, cameras, books, watches, apparel, shoes and e-Gift Cards. Free Shipping & Cash on Delivery"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/logo/fav.webp" />
			</Head>
			<Navbar />
			<Banner />
			{loading ? <Loader /> : children}
			<Footer />
		</>
	);
};
export default Layout;
