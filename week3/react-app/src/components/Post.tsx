import React from "react";
import classes from './Post.module.css';
import type { postProps } from "./custom.ts";

function Post(props: postProps): React.JSX.Element {
    return (
        <li className={classes.post}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
        </li>
    )
}

export default Post;