import { useState } from "react";
import Header from "./Header";
import FormInput from "./formInput";
import ReadBooksList from "./ReadBooksList";
import WishlistList from "./WishlistList";

export default function BookWrapper() {
    const [values, setValues] = useState({title:"", author:""});
    const [wishlist, setWishlist] = useState([]);
    const [readBooks, setReadBooks] = useState([]);

    function addReadBook(){
        setReadBooks([...readBooks, values])
        setValues({ title: "", author: "" });
    }

    function addWishlist(){
        setWishlist([...wishlist, values])
        setValues({ title: "", author: "" });
    }

    function moveToRead(index){
        setReadBooks([...readBooks, wishlist[index]])
        setWishlist(wishlist.filter((_, i) => i !== index));
    }

    return(
        <div style={{ minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#ddebf7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"   
}}>
            <div style={{padding: "30px", borderRadius: "10px", width: "400px", display: "flex", flexDirection: "column",alignItems: "center", gap: "20px",}}>
            <Header name="My library" />
            <FormInput values={values} setValues={setValues} addReadBook={addReadBook} addWishlist={addWishlist}/>
            <ReadBooksList readBooks={readBooks}/>
            <WishlistList wishlist={wishlist} moveToRead={moveToRead}/>
            </div>
        </div>
    )

}