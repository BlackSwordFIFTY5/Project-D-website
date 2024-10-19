/*if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // true for mobile device
    document.getElementById("style").setAttribute('href', 'index-mobile.css');
    document.getElementById("script").setAttribute('src', 'index-mobile.js');
} else {
    // false for not mobile device
    document.getElementById("style").setAttribute('href', 'index.css');
    document.getElementById("script").setAttribute('src', 'index.js');
}*/



document.getElementById("top-menu-button-mobile").addEventListener('click', function() {
    
    const header = "header-div";
    const headerActive = "header-div-active";
    const state = document.getElementById("header-div");
    const stateActive = document.getElementById("header-div-active");
    const menuBarState = document.getElementById("top-menu-button-mobile");
    const menuBarStateActive = document.getElementById("top-menu-button-mobile-active");

    if (menuBarState) {
        menuBarState.id = 'top-menu-button-mobile-active';
        state.id = headerActive;
    } else {
        menuBarStateActive.id = 'top-menu-button-mobile';
        stateActive.id = header;
    }
});

window.addEventListener('load', function() {
    // Hide the loading screen when everything has loaded
    document.getElementById('loading').style.display = 'none';
});




function removeTracks () {
    const provinces = ['gunma', 'tochigi', 'ibaraki', 'saitama', 'chiba', 'tokyo', 'kanagawa'];

    provinces.forEach(function (province) {
        document.getElementById(`${province}-province-data-m`).style.display = 'none';
        console.log(`Removing ${province}`)
    })
}

document.getElementById("province-button-m").addEventListener('click', function() {
    document.getElementById("main-menu-m").style.display = 'none';
    document.getElementById("province-list-m").style.display = 'block';
    removeTracks();
})

document.getElementById("cars-button-m").addEventListener('click', function() {
    document.getElementById("main-menu-m").style.display = 'none';
    document.getElementById("cars-list-m").style.display = 'block';
    removeTracks();
})

const backButton = document.querySelectorAll('#back-button-m');

backButton.forEach(function (button) {
    button.addEventListener('click', function() {
        document.getElementById("province-list-m").style.display = 'none';
        document.getElementById("cars-list-m").style.display = 'none';

        document.getElementById("main-menu-m").style.display = 'block'
        removeTracks();
    })
})

const backButtonP = document.querySelectorAll('#back-button-p-m');

backButtonP.forEach(function (button) {
    button.addEventListener('click', function () {

        document.getElementById('province-list-m').style.display = 'block';
        document.getElementById('cars-list-m').style.display = 'none';
        document.getElementById('main-menu-m').style.display = 'none';
        removeTracks();
    })
})

document.getElementById("gunma-button-m").addEventListener('click', function() {
    document.getElementById("main-menu-m").style.display = 'none';
    document.getElementById("cars-list-m").style.display = 'none';
    document.getElementById("province-list-m").style.display = 'none';

    document.getElementById("gunma-province-data-m").style.display = 'block';
})

document.getElementById("tochigi-button-m").addEventListener('click', function() {
    document.getElementById("main-menu-m").style.display = 'none';
    document.getElementById("cars-list-m").style.display = 'none';
    document.getElementById("province-list-m").style.display = 'none';

    document.getElementById("tochigi-province-data-m").style.display = 'block';
})

document.getElementById("ibaraki-button-m").addEventListener('click', function() {
    document.getElementById("main-menu-m").style.display = 'none';
    document.getElementById("cars-list-m").style.display = 'none';
    document.getElementById("province-list-m").style.display = 'none';

    document.getElementById("ibaraki-province-data-m").style.display = 'block';

})

document.getElementById("saitama-button-m").addEventListener('click', function() {
    document.getElementById("main-menu-m").style.display = 'none';
    document.getElementById("cars-list-m").style.display = 'none';
    document.getElementById("province-list-m").style.display = 'none';

    document.getElementById("saitama-province-data-m").style.display = 'block';
})

document.getElementById("chiba-button-m").addEventListener('click', function() {
    document.getElementById("main-menu-m").style.display = 'none';
    document.getElementById("cars-list-m").style.display = 'none';
    document.getElementById("province-list-m").style.display = 'none';

    document.getElementById("chiba-province-data-m").style.display = 'block';
})

document.getElementById("tokyo-button-m").addEventListener('click', function() {
    document.getElementById("main-menu-m").style.display = 'none';
    document.getElementById("cars-list-m").style.display = 'none';
    document.getElementById("province-list-m").style.display = 'none';

    document.getElementById("tokyo-province-data-m").style.display = 'block';
})

document.getElementById("kanagawa-button-m").addEventListener('click', function() {
    document.getElementById("main-menu-m").style.display = 'none';
    document.getElementById("cars-list-m").style.display = 'none';
    document.getElementById("province-list-m").style.display = 'none';

    document.getElementById("kanagawa-province-data-m").style.display = 'block';
})