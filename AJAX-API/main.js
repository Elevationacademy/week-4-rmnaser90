
// //Exercise 1 

// let book="physics of the future"
// book = book.split(' ').join('%20')

// let ISBN = 9782806269171



// const useData = function (response) {
//     console.log(response);
// }


// const fetchBookByISBN = function (isbn) {
//     const url= `https://www.googleapis.com/books/v1/volumes?q=${isbn}`

//     $.ajax({
//     method: "GET",
//     url: url,
//     success:useData ,
//     error: function (xhr,text,error) {
//         console.log(xhr);
//         console.log(text);
//         console.log(error);
//     }
// })
// }

// const fetchBookByTitle = function (isbn) {
//     const url= `https://www.googleapis.com/books/v1/volumes?q=${book}`

//     $.ajax({
//     method: "GET",
//     url: url,
//     success:useData ,
//     error: function (xhr,text,error) {
//         console.log(xhr);
//         console.log(text);
//         console.log(error);
//     }
// })
// }
// fetchBookByISBN(ISBN)
// fetchBookByTitle(book)


// //Exercise 2 and 3

// let book = "physics of the future"
// let ISBN = 9782806269171

// const useData = function (response) {
// // console.log(response);
// for (const book of response.items) {

//    let text = `title: ${book.volumeInfo.title}
// Author: ${book.volumeInfo.authors[0]} 
// ISBN: ${book.volumeInfo.industryIdentifiers[0].identifier}   `
// console.log(text);
// }    
// }

// const fetchBook = function (queryType, queryValue) {
//     if (queryType == 'title') {
//         queryValue = queryValue.split(' ').join('%20')
//     }
//     const url = `https://www.googleapis.com/books/v1/volumes?q=${queryValue}`
//     $.ajax({
//         method: "GET",
//         url: url,
//         success: useData,
//         error: function (xhr, text, error) {
//             console.log(xhr);
//             console.log(text);
//             console.log(error);
//         }
//     })
// }
// fetchBook('title',book)



// Exercise 4, 5, and extension

$('.button').click(function name(params) {
    let giphy=$('input').val()

    $.ajax({

        method: 'GET',
        url: `http://api.giphy.com/v1/gifs/search?q=${giphy}&api_key=VErPmAEgchSowqKOrRJh4HXFyS5q1m0b&limit=5`,
        success: function (response) {
            const map1 = response.data.map(x => x.embed_url);
            console.log(map1);
            $('#div').empty()
            for (const gif of response.data) {
                $('#div').append($(`
            <div>
            <iframe src="${gif.embed_url}" frameborder="0"></iframe>
            <button class="btn" data-favorite=false>add</button>
            </div>
            `))
        }
       console.log(response);
        },
        error: function (xhr, text, error) {
            console.log('error');
        }
    
    })


})

let favoriteGifs =[]

$('#div').on('click','.btn',function () {
    if ($(this).data('favorite')==false) {
        $(this).data('favorite',true)
        const url=$(this).closest('div').find('iframe').attr('src')
        favoriteGifs.push({url})
        console.log(favoriteGifs);
    }else{console.log("it's already added");}
    

})

