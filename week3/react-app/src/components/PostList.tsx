import NewPost from "./NewPost";
import Post from "./Post"
import classes from './PostList.module.css'

function PostList(): React.JSX.Element {
    return (
        <>
        <NewPost />
        <ul className={classes.posts}>
            <Post author="Hehe" body="haha"/>
            <Post author="Haha" body="hehe" />
        </ul>
        </>
    )
}

export default PostList;