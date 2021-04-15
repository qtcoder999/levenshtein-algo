export default function () {
  fetch('https://www.azquotes.com/author/10823-Friedrich_Nietzsche?p=2', {
    mode: 'no-cors',
  })
    .then((response) => response.text)
    .then((data) => console.log(data))
}
