$(appReady)

const API_URL = "https://mggreads.herokuapp.com/books"
// const API_URL = "http://localhost:3000/books"

function appReady(){
  getBooks().then(showBooks);;
}

function getBooks(){
  return $.get(API_URL)
}

function showBooks(books){
  console.log(books);
  const source = $("#books-template").html();
  const template = Handlebars.compile(source);
  const html = template({
    books
  })
  $('#books').append(html);
}

$(document).on('click', '#book-title', function(){
  let id = $(this).data('book')
  window.location = `/book.html?id=${id}`
})
