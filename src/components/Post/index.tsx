import classes from './Post.module.css'

type PostProps = {
    title: string
}

export default function Post({
    title
}: PostProps) {
    return (
        <article className={classes.post}>
            <h3 className={classes.post__title}>{title}</h3>
            <div>
                <span>12 Feb 2020</span>
                <span>Design, Pattern</span>
            </div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </article>
    )
}