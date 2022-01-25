# MyReads Project

This is the submission version for the final assessment project for Udacity's React Fundamentals course. 

- allow user to search books and add them to a thier own reading shelves
- check the [demo](https://my-reads-project.netlify.app/)
## Run the app

to run the project localy, run the following command in the terminal:
```bash
$ npm install
$ npm start
```

## Final Project structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── pages
    │   ├── ListBooks.js # The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.
    │   └── SearchBooks.js #The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.
    ├── components
    │   ├── Books.js # The Books component is used to display every book in the app.
    │   ├── Bookshelf.js # The Bookshelf component is used to display the bookshelf which contains the books as children.
    │   └── EmptyResult.js # The EmptyResult component is used to display a message when no books are found.
    ├── services
    │   ├── api.js # The API service url and headers are stored here.
    │   └── BooksAPI.js # The BooksAPI service is used to fetch books from the server.
    ├── utils
    │   └── bookshelfs.js # The bookshelfs utility is a list for all the bookshelfs.
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   ├── arrow-drop-down.svg
    │   └── undraw_empty_re_opql.svg # This is the default image for the EmptyResult component if no books are found (open source illustration by undraw.co).
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(bookId, shelf)
```

* bookId: `<String>` containing the `id` attribute of a book
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
