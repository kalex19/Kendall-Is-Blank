var button = $('button')
var note = $('.note')
var k = $('.k')
var e = $('.e')
var n = $('.n')
var d = $('.d')
var a = $('.a')
var l = $('.l')
var ll = $('.ll')
var url = $('.gift')
var array = []

button.on('click', selectWord)

function selectWord(){
  var adj = $('.adjInput').val()  
if(adj == "kind"){
  array.push("1")
  k.append(`<p>${adj}</p>`)
  note.text("You are so thoughtful & kind 🌸 ")
  $('.adjInput').val("");
} else if(adj == "empowered"){
  array.push("2")
  e.append(`<p>${adj}</p>`)
  note.text("You are so thoughtful & kind 🌸 ")
  $('.adjInput').val("");
} else if(adj == "naturally pretty"){
  array.push(3)
  n.append(`<p>${adj}</p>`)
  note.text("You are so thoughtful & kind 🌸 ")
  $('.adjInput').val("");
} else if(adj == "developer"){
  array.push(4)
  d.append(`<p>${adj}</p>`)
  note.text("She's rocking this! 👩🏽‍💻")
  $('.adjInput').val("");
} else if(adj == "adventurous"){
  array.push(5)
  a.append(`<p>${adj}</p>`)
  note.text("Niiice. You two must be close 😜 ")
  $('.adjInput').val("");
}else if(adj == "lovely"){
  array.push(6)
  l.append(`<p>${adj}</p>`)
  note.text("Niiice. You two must be close 😜 ")
  $('.adjInput').val("");
} else if(adj == "limitless"){
  array.push(7)
  ll.append(`<p>${adj}</p>`)
  note.text("Niiice. You two must be close 😜 ")
  $('.adjInput').val("");
} else {
   note.text("That word is not fleek enough for Kendall 😒 Try again.")
  $('.adjInput').val("");
}

if(array.length === 7){
  url.text("https://starbucks.cashstar.com/recipient-experience/redemption/ZjY1MDA2MzIyZTBhOWYwZjkyZ/b6a27c8d1c9547dba91d95e77cc6f1aa/?continue=true")
}
}