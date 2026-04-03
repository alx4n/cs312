import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import logo from "@/public/assets/logo.svg";

export const Logo = () => {
    return (
        <Link href="/">
            <Image src={logo} alt="Bowl of food" className={styles.root}>
            </Image>
        </Link>
    )
};