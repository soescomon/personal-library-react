# My Library App

A simple React application that allows users to manage their personal library by adding books to a **Read List** or a **Wishlist**.

## Features

- Add books with title and author
- Save books into:
  - Read Books list
  -  Wishlist
- Move books from Wishlist to Read Books
- Reusable components (Button, Input, BookItem)
- Dynamic rendering using `.map()`
- State management with React Hooks (`useState`)

## Technologies Used

- React (with Vite)
- JavaScript (ES6)
- HTML & CSS (inline styling)

## Project Structure
```bash
src/
│── App.jsx
│── BookWrapper.jsx
│── Button.jsx
│── Input.jsx
│── Header.jsx
│── BookItem.jsx
│── FormInput.jsx
│── ReadBooksList.jsx
│── WishlistList.jsx
```

## How It Works

- The app uses a main component (`BookWrapper`) to manage the global state.
- Users input a book title and author.
- Books can be added to either:
  - Read Books list
  - Wishlist
- Wishlist items can be moved to the Read Books list.

## How to Run

1. Clone the repository:
```bash
   git clone https://github.com/soescomon/personal-library-react
```

2.  Navigate to the project folder:
```bash
cd personal-library-react
```

3. Install dependencies:
```bash
npm install
```

4. Run the app:
```bash
npm run dev
```