let arrFirst = [];
let arrImg = [];
let arrEtc = [];

window.onload = function() {
    getUser()
}

const getUser = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(users => {
            for (var i = 0; i < users.results.length; i++) {
                // console.log(users.results[i].name.first);
                arrImg.push(users.results[i].picture.thumbnail);
                arrFirst.push(users.results[i].name.first + ' ' + users.results[i].name.last);
                arrEtc.push(users.results[i].dob.age + ' ' + users.results[i].gender + ' ' + users.results[i].cell);
            }
            // console.log(users.results[0].name.first);
            // arrFirst.push(users.results[0].name.first);
        });
}

var butt = document.getElementById('bFetch');
butt.addEventListener('click', function scrape() {
     let ul = document.getElementById('peopleUL');
     const li = document.createElement('li');
     const li1 = document.createElement('li');
     const li2 = document.createElement('li');
     const li3 = document.createElement('li');
     const li4 = document.createElement('li');

     const img = document.createElement('img');
     const img1 = document.createElement('img');
     const img2 = document.createElement('img');
     const img3 = document.createElement('img');
     const img4 = document.createElement('img');

     for (var a = 0; a < arrFirst.length; a++) {
         
         if (a == 0) {
            img.src = arrImg[a];
            li.innerHTML = arrFirst[a];
            ul.appendChild(li);
            ul.appendChild(img);
         }
         if (a == 1) {
            img1.src = arrImg[a];
            li1.innerHTML = arrFirst[a];
            ul.appendChild(li1);
            ul.appendChild(img1);
         }
         if (a == 2) {
            img2.src = arrImg[a];
            li2.innerHTML = arrFirst[a];
            ul.appendChild(li2);
            ul.appendChild(img2);
         }
         if (a == 3) {
            img3.src = arrImg[a];
            li3.innerHTML = arrFirst[a];
            ul.appendChild(li3);
            ul.appendChild(img3);
         }
         if (a == 4) {
            img4.src = arrImg[a];
            li4.innerHTML = arrFirst[a];
            ul.appendChild(li4);
            ul.appendChild(img4);
         }
         
     }
    
    // arrFirst.map((index) => {
    //     console.log(index)
    //     li.innerHTML = index;
    //     ul.appendChild(li);

    // })
})