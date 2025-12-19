import BookItem from "./BookItem";
import Header from "./Header";

export default function ReadBooksList({readBooks}) {
    return(
    <>
        <Header name="Read Books"/>
        <div>
            {readBooks.map((item,index)=>
            <BookItem key={index} title={item.title} author={item.author}/>
            )}
        </div>
    </>
    )
}