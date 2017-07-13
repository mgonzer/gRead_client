$(appReady)

const API_URL = "https://mggreads.herokuapp.com"
// const API_URL = "http://localhost:3000"

function appReady() {
  getAuthors()
}

function getAuthors() {
  $.get(`${API_URL}/authors`).then(showAuthors)
}

function showAuthors(authors) {
  console.log(authors);
  const source = $("#authors-template").html();
  const template = Handlebars.compile(source);
  const html = template({
    authors
  })
  console.log(authors);
  $('#author-name').append(html);
}


$('#add-author').click(function() {
  let author = $("#author-name").val();
  let id = $('select option:selected').data('id');
  console.log(id);
  $('#author-list').append(`<li data-authorId:${id}>${author}</li>`)
})

$('#add-book').click(function(event) {
  event.preventDefault();
  let title = $("#book-title").val()
  let genre = $("#book-genre").val()
  let cover_image = $("#book-imageUrl").val()
  let description = $("#book-description").val()
  let re = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi.test(cover_image);
  let obj = {
    title: title,
    genre: genre,
    cover_image: cover_image,
    description: description
  }
  if(title=='' || genre=='' || re == false || description ==''){
    alert("Please enter valid information")
  }else {
    console.log(obj);
    $.post(`${API_URL}/books`, obj)
    }
})
