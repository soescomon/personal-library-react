import Button from "./Button"
export default function BookItem({title, author, onMove}) {
    return(
        <div style={{ textAlign: "center" }}>
            <h2 style={{fontSize: "26px"}}>{title}</h2>
            <h3 style={{fontSize: "20px"}}> Written by: {author}</h3>
             {onMove && (<Button label="Move to read books" onClick={onMove} />
            )}

        </div>
    )
}