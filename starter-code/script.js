let btn = document.querySelectorAll('.mainDestList a');

btn.forEach(list => {
    list.addEventListener('click', function showInner() {
        fetch("data.json")
            .then(response => response.json())
            .then(data => showInfo(data))

        function showInfo(data) {
            var i;
            if(list.getAttribute('class') === 'moon') {
                var i = 0;
                console.log(i);

            } else if (list.getAttribute('class') === 'mars') {
                var i = 1;
                console.log(i);

            } else if(list.getAttribute('class') === 'europa') {
                var i = 2;
                console.log(i);

            } else if(list.getAttribute('class') === 'titan') {
                var i = 3;
                console.log(i);
            }

            console.log(i);
            document.querySelector('#destTit').innerText = data.destinations[i].name;
            document.querySelector('.see').innerText = data.destinations[i].description;
            document.querySelector('.planet').setAttribute('src', `assets/destination/image-${list.getAttribute('class')}.png`)
            document.querySelector('.km').innerText = data.destinations[i].distance;
            document.querySelector('.days').innerText = data.destinations[i].travel;
        }
    });
})



let crew = document.querySelectorAll('.crew a');

crew.forEach(list => {
    list.addEventListener('click', function showInner() {
        fetch("data.json")
            .then(response => response.json())
            .then(data => showInfo(data))

        function showInfo(data) {
            var j;
            if(list.getAttribute('class') === 'douglas') {
                var i = 0;
                console.log(i);

            } else if (list.getAttribute('class') === 'mark') {
                var i = 1;
                console.log(i);

            } else if(list.getAttribute('class') === 'victor') {
                var i = 2;
                console.log(i);

            } else if(list.getAttribute('class') === 'ansari') {
                var i = 3;
                console.log(i);
            }

            
            console.log(list.getAttribute('class'));

            // console.log(i);
            document.querySelector('#destTit').innerText = data.crew[i].name;
            document.querySelector('.see').innerText = data.crew[i].bio;
            document.querySelector('.crewMates').setAttribute('src', `assets/crew/image-${list.getAttribute('class')}.png`)
            document.querySelector('#role').innerText = data.crew[i].role;
        }
    });
})

let tech = document.querySelectorAll('li');

tech.forEach(list => {
    list.addEventListener('click', function showInner() {
        fetch("data.json")
            .then(response => response.json())
            .then(data => showInfo(data))

        function showInfo(data) {
            var j;
            if(list.getAttribute('class') === 'techOne') {
                var i = 0;
                console.log(i);

            } else if (list.getAttribute('class') === 'techTwo') {
                var i = 1;
                console.log(i);

            } else if(list.getAttribute('class') === 'techThree') {
                var i = 2;
                console.log(i);

            } 
    
            console.log(list.getAttribute('class'));

            // console.log(i);
            document.querySelector('#descLaunch').innerText = data.technology[i].name;
            document.querySelector('.descLaunchTxt').innerText = data.technology[i].description;
            document.querySelector('.termImg').setAttribute('src', `assets/technology/image-${list.getAttribute('class')}-portrait.jpg`)
            document.querySelector('.dispNone').setAttribute('src', `assets/technology/image-${list.getAttribute('class')}-landscape.jpg`)
            // document.querySelector('#role').innerText = data.crew[i].role;
        }
    });
})

const hamMenu = document.querySelector(".hamburgerMenu");
const offScreen = document.querySelector(".offScreen");
const body = document.querySelector('body');

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreen.classList.toggle("active");
  body.classList.toggle('hidflow');
});