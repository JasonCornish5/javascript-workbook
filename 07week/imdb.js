let col1Title = [];
let col1Img = [];
let col1Year = [];
let input = document.getElementById('inputt')
let butt = document.getElementById('button');
let h11 = document.getElementById('h11');
let img1 = document.getElementById('img1');
let p1 = document.getElementById('p1');
let h12 = document.getElementById('h12');
let img2 = document.getElementById('img2');
let p2 = document.getElementById('p2');
let h13 = document.getElementById('h13');
let img3 = document.getElementById('img3');
let p3 = document.getElementById('p3');

butt.addEventListener('click', function grabVal(){
    let inputVal = input.value;
    let url = `http://www.omdbapi.com/?apikey=8a9d48cb&s=${inputVal}`;
    console.log(url);

    const grabMovie = () => {
        fetch(url)
            .then(res => res.json())
            .then(movie => {
                h11.innerHTML = movie.Search[1].Title;
                img1.src = movie.Search[1].Poster;
                p1.innerHTML = movie.Search[1].Year;
                h12.innerHTML = movie.Search[2].Title;
                img2.src = movie.Search[2].Poster;
                p2.innerHTML = movie.Search[2].Year;
                h13.innerHTML = movie.Search[3].Title;
                img3.src = movie.Search[3].Poster;
                p3.innerHTML = movie.Search[3].Year;
            });
    }
    grabMovie();
})















