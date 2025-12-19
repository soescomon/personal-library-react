import Button from "./Button"
export default function BookItem({title, author, onMove}) {
    return(
        <div>
            <h1>{title}</h1>
            <h2>{author}</h2>
            <Button label="Move to read books" onClick={onMove}/>

        </div>
    )
}