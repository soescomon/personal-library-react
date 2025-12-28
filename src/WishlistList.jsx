import BookItem from "./BookItem"
import Header from "./Header"

export default function WishlistList({wishlist,moveToRead }) {
    return(
        <>
            <Header name="Wishlist"/>
            <div>
                {wishlist.map((item, index) =>
                <BookItem  key={index} title={item.title} author={item.author} onMove={() => moveToRead(index)}/>
            )}
            </div>
            
        </>
    )
}