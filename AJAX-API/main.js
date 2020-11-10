
//Exercise 1 

let book="physics of the future"
book = book.split(' ').join('%20')

let ISBN = 9782806269171



const useData = function (response) {
    console.log(response);
}


const fetchBookByISBN = function (isbn) {
    const url= `https://www.googleapis.com/books/v1/volumes?q=${isbn}`
    
    $.ajax({
    method: "GET",
    url: url,
    success:useData ,
    error: function (xhr,text,error) {
        console.log(xhr);
        console.log(text);
        console.log(error);
    }
    


})
}

const fetchBookByTitle = function (isbn) {
    const url= `https://www.googleapis.com/books/v1/volumes?q=${book}`
    
    $.ajax({
    method: "GET",
    url: url,
    success:useData ,
    error: function (xhr,text,error) {
        console.log(xhr);
        console.log(text);
        console.log(error);
    }
    


})
}
fetchBookByISBN(ISBN)
fetchBookByTitle(book)

