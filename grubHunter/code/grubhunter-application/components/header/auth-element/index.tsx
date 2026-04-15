import { Button } from "@/components/button";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./index.module.css";
import Link from "next/link";

export const AuthElement = () : React.JSX.Element => {
    let {data: session, status} = useSession();
    let output: React.JSX.Element = <></>;
    if (status == "authenticated") {
        output = (
            <div className={styles.root}>
                <p>Hi, {session?.user.name}</p>
                <nav className={styles.name}>
                    <Button disabled={false} variant="outline">
                        <Link href={`/list/${session?.user.fdlst_private_userId}`}>Your Wishlist</Link>
                    </Button>
                    <Button disabled={false} variant="blue" clickHandler={signOut}>Sign out</Button>
                </nav>
            </div>
        )
    } else {
        output = (
            <nav className={styles.root}>
                <Button disabled={false} variant="blue" clickHandler={signIn}>
                    Sign in
                </Button>
            </nav>
        )
    }

    return output;
}