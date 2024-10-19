if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // true for mobile device
    document.getElementById("style").setAttribute('href', 'index-mobile.css');
    document.getElementById("script").setAttribute('src', 'index-mobile.js');
} else {
    // false for not mobile device
    document.getElementById("style").setAttribute('href', 'index.css');
    document.getElementById("script").setAttribute('src', 'index.js');
}
  

function toggleProvinceData(targetProvince) {

    const provinces = ['gunma', 'tochigi', 'ibaraki', 'saitama', 'chiba', 'tokyo', 'kanagawa'];

    if (document.getElementById(`${targetProvince}-area-active`)) {

        document.getElementById(`${targetProvince}-province-data`).style.display = 'none';
        document.getElementById('main-menu').style.display = 'block';
        document.getElementById('province-list').style.display = 'none';
        document.getElementById('cars-list').style.display = 'none';

        if (document.getElementById(`${targetProvince}-area-active`))
            document.getElementById(`${targetProvince}-area-active`).id = `${targetProvince}-area`;

        provinces.forEach(function (province) {
            if (province !== targetProvince) {
                document.getElementById(`${province}-province-data`).style.display = 'none';
                if (document.getElementById(`${province}-area-active`)) {
                    document.getElementById(`${province}-area-active`).id = `${province}-area`;
                }

            }
        })
    } else {
        document.getElementById(`${targetProvince}-province-data`).style.display = 'block';
        document.getElementById('main-menu').style.display = 'none';
        document.getElementById('province-list').style.display = 'none';
        document.getElementById('cars-list').style.display = 'none';

        if (document.getElementById(`${targetProvince}-area`))
            document.getElementById(`${targetProvince}-area`).id = `${targetProvince}-area-active`;

        provinces.forEach(function (province) {
            if (province !== targetProvince) {
                document.getElementById(`${province}-province-data`).style.display = 'none';
                if (document.getElementById(`${province}-area-active`)) {
                    document.getElementById(`${province}-area-active`).id = `${province}-area`;
                }
            }
        })
    }

}




$("#gunma-map").on('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    toggleProvinceData('gunma');
});

$("#tochigi-map").on('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    toggleProvinceData('tochigi');
});

$("#ibaraki-map").on('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    toggleProvinceData('ibaraki');
});

$("#saitama-map").on('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    toggleProvinceData('saitama');
});

$("#chiba-map").on('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    toggleProvinceData('chiba');
});

$("#tokyo-map").on('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    toggleProvinceData('tokyo');
});

$("#kanagawa-map").on('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    toggleProvinceData('kanagawa');
});



document.getElementById("province-button").addEventListener('click', function() {
    document.getElementById("main-menu").style.display = 'none';
    document.getElementById("province-list").style.display = 'block';
})

document.getElementById("cars-button").addEventListener('click', function() {
    document.getElementById("main-menu").style.display = 'none';
    document.getElementById("cars-list").style.display = 'block';
})

const backButton = document.querySelectorAll('#back-button');

backButton.forEach(function (button) {
    button.addEventListener('click', function() {
        document.getElementById("province-list").style.display = 'none';
        document.getElementById("cars-list").style.display = 'none';

        removeTracks();
        //document.getElementById('gunma-province-data').style.display = 'none'

        document.getElementById("main-menu").style.display = 'block'
    })
})

function removeTracks () {
    const provinces = ['gunma', 'tochigi', 'ibaraki', 'saitama', 'chiba', 'tokyo', 'kanagawa'];

    provinces.forEach(function (province) {
        if (document.getElementById(`${province}-area-active`)) {
            document.getElementById(`${province}-area-active`).id = `${province}-area`;
            document.getElementById(`${province}-province-data`).style.display = 'none';
            console.log(`Removing ${province}`)
        }
    })
}


const backButtonP = document.querySelectorAll('#back-button-p');

backButtonP.forEach(function (button) {
    button.addEventListener('click', function () {

        //document.getElementById('gunma-province-data').style.display = 'none'

        document.getElementById('province-list').style.display = 'block';
        document.getElementById('cars-list').style.display = 'none';
        document.getElementById('main-menu').style.display = 'none';

        removeTracks();
    })
})

document.getElementById("gunma-button").addEventListener('click', function() {
    document.getElementById("main-menu").style.display = 'none';
    document.getElementById("cars-list").style.display = 'none';
    document.getElementById("province-list").style.display = 'none';

    document.getElementById("gunma-province-data").style.display = 'block';
    document.getElementById("gunma-area").id = "gunma-area-active";
})

document.getElementById("tochigi-button").addEventListener('click', function() {
    document.getElementById("main-menu").style.display = 'none';
    document.getElementById("cars-list").style.display = 'none';
    document.getElementById("province-list").style.display = 'none';

    document.getElementById("tochigi-province-data").style.display = 'block';
    document.getElementById("tochigi-area").id = "tochigi-area-active";
})

document.getElementById("ibaraki-button").addEventListener('click', function() {
    document.getElementById("main-menu").style.display = 'none';
    document.getElementById("cars-list").style.display = 'none';
    document.getElementById("province-list").style.display = 'none';

    document.getElementById("ibaraki-province-data").style.display = 'block';
    document.getElementById("ibaraki-area").id = "ibaraki-area-active";

})

document.getElementById("saitama-button").addEventListener('click', function() {
    document.getElementById("main-menu").style.display = 'none';
    document.getElementById("cars-list").style.display = 'none';
    document.getElementById("province-list").style.display = 'none';

    document.getElementById("saitama-province-data").style.display = 'block';
    document.getElementById("saitama-area").id = "saitama-area-active";
})

document.getElementById("chiba-button").addEventListener('click', function() {
    document.getElementById("main-menu").style.display = 'none';
    document.getElementById("cars-list").style.display = 'none';
    document.getElementById("province-list").style.display = 'none';

    document.getElementById("chiba-province-data").style.display = 'block';
    document.getElementById("chiba-area").id = "chiba-area-active";
})

document.getElementById("tokyo-button").addEventListener('click', function() {
    document.getElementById("main-menu").style.display = 'none';
    document.getElementById("cars-list").style.display = 'none';
    document.getElementById("province-list").style.display = 'none';

    document.getElementById("tokyo-province-data").style.display = 'block';
    document.getElementById("tokyo-area").id = "tokyo-area-active";
})

document.getElementById("kanagawa-button").addEventListener('click', function() {
    document.getElementById("main-menu").style.display = 'none';
    document.getElementById("cars-list").style.display = 'none';
    document.getElementById("province-list").style.display = 'none';

    document.getElementById("kanagawa-province-data").style.display = 'block';
    document.getElementById("kanagawa-area").id = "kanagawa-area-active";
})

window.addEventListener('load', function() {
    // Hide the loading screen when everything has loaded
    document.getElementById('loading').style.display = 'none';
});
