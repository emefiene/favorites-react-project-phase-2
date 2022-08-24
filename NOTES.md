#### FAVORITES ###
Favorites is a budget management web application built with react.js, favorite will help users manage their expenses and the same time prevent unnecessary expenses, its goal focus is easy to use and saves time.
The application is built using react hooks like useState, useEffect,useParams, e.tc. and State dynamically controls it.

### Favorite has ten component functions.
App, Category, FavoritesCard,FavoritesContainer, Footer, Form, Header,ItemsDetails,RenderCart,Search.

### App
The app is the parent component that renders child components, it uses useEffect to fetch db.json data asynchronously. It also contains features like handleDelete, handleSubmit, addToCart.

### FavoritesContainers
It's a child of App and parent to FavoritesCards, items are passed from the parent to the child as props, and items passed through App to FavoritesContainers are iterated with map and rendered in FavoritesCards.

### FavoritesCard
It's a child of FavoritesContainer, items are passed through as props, FavoritesCard renders each items in the array passed as props.

### Forms
Controlled form in React are those in which form data is handled by the component's state. Forms are used to store information in a document section. The information from this form is typically sent to a server to perform an action. With a controlled component, the input’s value is always driven by the React state. While this means you have to type a bit more code, you can now pass the value to other UI elements too, or reset it from other event handlers.

### ItemsDetails
These dynamically render each item using useParams. The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path> . Child routes inherit all params from their parent routes. ItemsDetails contains "Add to Cart", "Delete" buttons and routes to the Home and Form page.

### Search
Items are searched and also filtered into different categories using the filter method.

### RenderCart
This displays all items in the cart for the user to remove items or see the sum total of purchases before proceeding to check out.

### Features
* Create Items/items/new
* List items/items
* Home page/
* Display more Items infor(Click to proceed)/items/:id
* Delete Item
* Add to Cart
* Like item


### MVP ###
* Home Page
* Create Items
* List Items


### Stretch Goals
* Display more Items infor(Click to proceed)/items/:id
* Delete Item
* Add to Cart
* Like Item

