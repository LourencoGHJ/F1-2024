const IMAGES = [
    {
      "id": "image-1",
      "src": "assets/img/maxver01.png",
      "alt": "Max Verstappen",
      "title": "Max Verstappen"
    },
    {
      "id": "image-2",
      "src": "assets/img/chalec01.png",
      "alt": "Charles Leclerc",
      "title": "Charles Leclerc"
    },
    {
      "id": "image-3",
      "src": "assets/img/lannor01.png",
      "alt": "Lando Norris",
      "title": "Lando Norris"
    },
    {
      "id": "image-4",
      "src": "assets/img/carsai01.png",
      "alt": "Carlos Sainz",
      "title": "Carlos Sainz"
    },
    {
      "id": "image-5",
      "src": "assets/img/serper01.png",
      "alt": "Sergio Perez",
      "title": "Sergio Perez"
    },
    {
      "id": "image-6",
      "src": "assets/img/oscpia01.png",
      "alt": "Oscar Piastre",
      "title": "Oscar Piastre"
    },
    {
      "id": "image-7",
      "src": "assets/img/georus01.png",
      "alt": "George Russel",
      "title": "George Russel"
    },
    {
      "id": "image-8",
      "src": "assets/img/lewham01.png",
      "alt": "Lewis Hamilton",
      "title": "Lewis Hamilton"
    },
    {
      "id": "image-9",
      "src": "assets/img/feralo01.png",
      "alt": "Fernando Alonso",
      "title": "Fernando Alonso"
    },
    {
      "id": "image-10",
      "src": "assets/img/yuktsu01.png",
      "alt": "Yuki Tsunoda",
      "title": "Yuki Tsunoda"
    },
    {
      "id": "image-11",
      "src": "assets/img/lanstr01.png",
      "alt": "Lance Stroll",
      "title": "Lance Stroll"
    },
    {
      "id": "image-12",
      "src": "assets/img/danric01.png",
      "alt": "Daniel Riccardo",
      "title": "Daniel Riccardo"
    },
    {
      "id": "image-13",
      "src": "assets/img/olibea01.png",
      "alt": "Oliver Bearman",
      "title": "Oliver Bearman"
    },
    {
      "id": "image-14",
      "src": "assets/img/nichul01.png",
      "alt": "Nico Hulkenberg",
      "title": "Nico Hulkenberg"
    },
    {
      "id": "image-15",
      "src": "assets/img/piegas01.png",
      "alt": "Pierre Gasly",
      "title": "Pierre Gasly"
    },
    {
      "id": "image-16",
      "src": "assets/img/alealb01.png",
      "alt": "Alexander Albon",
      "title": "Alexander Albon"
    },
    {
      "id": "image-17",
      "src": "assets/img/estoco01.png",
      "alt": "Eseban Ocon",
      "title": "Eseban Ocon"
    },
    {
      "id": "image-18",
      "src": "assets/img/kevmag01.png",
      "alt": "Kevin Magnussen",
      "title": "Kevin Magnussen"
    },
    {
      "id": "image-19",
      "src": "assets/img/guazho01.png",
      "alt": "Guanyu Zhou",
      "title": "Guanyu Zhou"
    },
    {
      "id": "image-20",
      "src": "assets/img/valbot01.png",
      "alt": "Valtteri Botas",
      "title": "Valtteri Botas"
    },
    {
      "id": "image-21",
      "src": "assets/img/logsar01.png",
      "alt": "Logan Sargeant",
      "title": "Logan Sargeant"
    }
  ]


const navEl = document.querySelector('#gallery-nav');
const galleryEl = document.querySelector("#gallery");

const RADIUS = 250; // distance (radius) from center of gallery
const START_INDEX = 2; // index of item for load animation

function setupGalleryAndNav() {
    // add 2 extra elements at beginning to "compensate" for mask positioning
    const extraElStart1 =  document.createElement("div");
    galleryEl.appendChild(extraElStart1);
   
    IMAGES.forEach(image => {
        const galleryImg = document.createElement('img');
        galleryImg.src = image.src;
        galleryImg.alt = image.alt;
        galleryEl.title = image.title;
        gallery.appendChild(galleryImg);
    });
    // add 2 extra elements at end to "compensate" for mask positioning
    const extraElEnd1 =  document.createElement("div");
    galleryEl.appendChild(extraElEnd1);

    // create button for each image
    IMAGES.forEach((image, index) => {
        const button = document.createElement('button');
        button.title = image.title;

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.title = image.title;

        button.appendChild(img);
        navEl.appendChild(button);

      // position  button around the circle
        const buttonRect = button.getBoundingClientRect();
        const buttonSize = buttonRect.width;
        
        // calculate position
        const angle = (index / IMAGES.length) * 360;
        const x = Math.cos(angle * (Math.PI / 180)) * RADIUS;
        const y = Math.sin(angle * (Math.PI / 180)) * RADIUS;

        // center the buttons around the middle of the <nav> container
        button.style.position = 'absolute';
        button.style.left = `calc(50% + ${x - (buttonSize / 2)}px)`;
        button.style.top = `calc(50% + ${y - (buttonSize / 2)}px)`;

        // button event listener
        button.addEventListener('click', () => {
            // remove active
            navEl.querySelectorAll("button.active").forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // scroll to selected image
            const imgToScroll = document.querySelector(`#gallery img[src="${image.src}"]`);
             imgToScroll.scrollIntoView({ behavior: 'smooth' });
        });

        // load inital image
        if (index === START_INDEX) {
            setTimeout(() => button.click(),150);
        }
    });
}

setupGalleryAndNav();
