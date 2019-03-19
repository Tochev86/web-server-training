fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data);
    })
});

LocationSearch = (event) => {
    event.preventDefault();
    console.log(event.currentTarget[0].value);
}
