import Input from "./Input";
import Button from "./Button";

export default function FormInput({values, setValues, addReadBook, addWishlist}) {
    return(
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>

            <Input name="title" value={values.title} onChange={(e)=> setValues({...values, title: e.target.value})} placeholder="Title"/>
            <Input name="author" value={values.author} onChange={(e)=> setValues({...values, author: e.target.value})} placeholder="Author"/>
            
            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>

            <Button  label="Add to Read Books" onClick={addReadBook}/>
            <Button  label="Add to Wishlist" onClick={addWishlist}/>
            
            </div>
        </div>
    )
   
}