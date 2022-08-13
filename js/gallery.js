let gallery = document.getElementById('gallery');

function removeClasses() {
    let buttons = document.getElementsByClassName('btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
}

function filterSelection(cateogry, btnID) {
    removeClasses();
    document.getElementById(`${btnID}`).classList.add('active');

    fetch('json/images.json')
        .then(response => response.json())
        .then(data => {
            let image = data.image;
            let str = "";
            for (key in image) {
                if (image[key].imgCateogry == cateogry) {
                    str +=
                        `<div class="col-md-3 m-2">
                            <div class="card">
                                <img class="card-img-top" src="${image[key].imgSource}" alt="Hostel Images">
                                <div class="card-body">
                                    <p class="card-text">${image[key].imgCateogry}</p>
                                </div>
                            </div>
                    </div>
                    `;
                }
            }
            gallery.innerHTML = str;
        });
}


byDefault = function () {
    removeClasses();
    document.getElementById("1").classList.add('active');

    fetch('json/images.json')
        .then(response => response.json())
        .then(data => {
            let image = data.image;
            let str = '';
            for (key in image) {
                str +=
                    `<div class="col-md-3 m-2">
                    <div class="card">
                        <img class="card-img-top" src="${image[key].imgSource}" alt="Card image cap">
                        <div class="card-body">
                            <p class="card-text">${image[key].imgCateogry}</p>
                        </div>
                    </div>
             </div>
            `;
                gallery.innerHTML = str;
            }
        })
}
byDefault()