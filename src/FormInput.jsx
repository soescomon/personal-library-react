import Input from "./Input";
import Button from "./Button";

export default function FormInput({values, setValues, addReadBook, addWishlist}) {
    return(
        <>
            <Input name="title" value={values.title} onChange={(e)=> setValues({...values, title: e.target.value})} placeholder="Title"/>
            <Input name="author" value={values.author} onChange={(e)=> setValues({...values, author: e.target.value})} placeholder="Author"/>

            <Button  label="Add to Read Books" onClick={addReadBook}/>
            <Button  label="Add Wishlist" onClick={addWishlist}/>
        </>
    )
   
}