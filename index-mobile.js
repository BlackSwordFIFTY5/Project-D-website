// Function to load the appropriate JS file based on device type
function loadScript(src) {
    // Remove the existing script if it exists
    const existingScript = document.getElementById('dynamic-script');
    if (existingScript) {
        existingScript.parentNode.removeChild(existingScript);
    }

    // Create a new script element
    const script = document.createElement('script');
    script.src = src;
    script.id = 'dynamic-script';
    script.async = true; // Optional: load the script asynchronously

    // Append the new script to the body or head
    document.body.appendChild(script);
}

// Check device type and load appropriate files
if (isMobileDevice()) {
    // Change CSS file
    document.getElementById('style').href = 'index-mobile.css';
    // Load mobile JS file
    loadScript('index-mobile.js');
} else {
    // Change CSS file
    document.getElementById('style').href = 'index.css';
    // Load regular JS file
    loadScript('index.js');
}

// Sample function to determine if the device is mobile
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}



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

const backButtonM = document.querySelectorAll('#back-button-m');

backButtonM.forEach(function (button) {
    button.addEventListener('click', function() {
        document.getElementById("province-list-m").style.display = 'none';
        document.getElementById("cars-list-m").style.display = 'none';

        document.getElementById("main-menu-m").style.display = 'block'
        removeTracks();
    })
})

const backButtonPM = document.querySelectorAll('#back-button-p-m');

backButtonPM.forEach(function (button) {
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
