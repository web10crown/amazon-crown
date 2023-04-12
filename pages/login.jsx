import styles from "@/styles/pages/Login.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { publicRequest } from "../request";
import { useRouter } from "next/router";

const Login = () => {
	const [phone, setPhone] = useState("");
	const [pass, setPass] = useState("");
	const router = useRouter();

	const submitHandler = async (e) => {
		e.preventDefault();
		const data = {
			phone,
			pass,
		};
		try {
			const res = await axios.post(
				`${publicRequest}/api/auth/login`,
				data
			);
			if (res.status === 200) {
				alert(`welcome ${res.data.name}`);
				router.push("/");
			}
		} catch (err) {
			alert(`please fill right details ${err.response.data}`);
			console.log(err);
		}
	};
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.top}>
						<div className={styles.logoContainer}>
							<div className={styles.logo}>
								<Image
									src="/logo/black.png"
									alt="Amazon.In"
									fill
									sizes="auto"
									priority={true}
								/>
							</div>
						</div>
					</div>
					<div className={styles.center}>
						<form onSubmit={submitHandler}>
							<h2>Sign In</h2>

							<b>Mobile number</b>
							<div className={styles.mobile}>
								<select name="IN +91">
									<option value="India"> +91 India</option>
									<option value="Canada"> +1 canada</option>
								</select>
								<input
									type="text"
									placeholder="Mobile number"
									pattern="[0-9]{10}"
									required
									onChange={(e) => setPhone(e.target.value)}
								/>
							</div>
							<b>Password</b>
							<input
								type="password"
								placeholder="At least 6 characters"
								required
								minLength="6"
								onChange={(e) => setPass(e.target.value)}
							/>

							<button>Continue</button>
							<div className={styles.terms}>
								<p>
									By continuing, you agree to Amazon's
									Conditions of Use and Privacy Notice.
								</p>
							</div>
						</form>
					</div>
					<div className={styles.bottom}>
						<p>New to Amazon?</p>

						<Link
							href="register"
							style={{ color: "black", textDecoration: "none" }}
						>
							<div className={styles.btn}>
								Create your Amazon account
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
