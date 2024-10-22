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

function provinceLoaded(province) {
    document.getElementById(`${province}-area-active`).addEventListener('load', function () {
        document.getElementById('loading').style.display = 'none';
    })
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
