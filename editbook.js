$(appReady);

const API_URL = "https://mggreads.herokuapp.com/books"
// const API_URL = "http://localhost:3000/books"
let id = parseQuery(window.location.search)

function parseQuery(query){
  return query.split('=')[1]
}

function appReady(){
  getBook()
}

function getBook(){
  $.get(`${API_URL}/${id}`)
  .then(showBook)
}

function showBook(book){
  console.log(book);
  const source = $("#book-template").html();
  const template = Handlebars.compile(source);
  const html = {
    "id": book.id,
    "title": book.title,
    "genre": book.genre,
    "description": book.description,
    "cover_image": book.cover_image
  }

  $('#books').append(template(html));
}
