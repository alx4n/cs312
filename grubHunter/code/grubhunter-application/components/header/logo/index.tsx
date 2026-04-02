import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import logo from "code/grubhunter-application/public/assets/logo.svg";

export const Logo = () => {
    return (
        <Link href="@/pages/index">
            <Image src={logo} alt="Two R's" >
            </Image>
        </Link>
    )
};