import styles from "@/styles/components/Loader.module.css";
import Image from "next/image";

const Loader = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.imgContainer}>
						<Image
							src="/loading.svg"
							alt="LOADING..."
							fill
							sizes="auto"
							priority={true}
						/>
					</div>
				</div>
			</div>
		</>
	);
};
export default Loader;
