import styles from "./index.module.css";

interface ButtonProps {
    disabled: boolean;
    children?: React.ReactNode;
    variant: "blue" | "outline";
    clickHandler?: () => unknown;
}

export const Button = (props: ButtonProps) : React.JSX.Element => {
    const {disabled, children, variant, clickHandler} = props;
    
    let renderContent = (children: React.ReactNode) => {
        if (disabled) {
            return ( <span className={styles.span}>{children}</span> );
        } else {
            return ( <span className={styles.span} onClick={clickHandler}>{children}</span> );
        }
    }
   
    return (
        <div className={[styles.root, disabled ? styles.disabled : " ", styles[variant || "default"]].join(" ")}>
            {renderContent(children)}
        </div>
    )
}

