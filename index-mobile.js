// Function to load the appropriate JS file based on device type

const filePath = window.location.pathname;

const fileName = filePath.split('/').pop();


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
    document.getElementById('loading').style.display = 'none'; // Extract the last part of the path

    if (fileName === 'provinces.html') {
        let province = this.sessionStorage.getItem('province');
        togglePrefecture(province);
    }
    if (fileName === 'cars.html') {
        let car = this.sessionStorage.getItem('car');
        toggleCar(car);
    }
});




function removeTracks () {
    const provinces = ['gunma', 'tochigi', 'ibaraki', 'saitama', 'chiba', 'tokyo', 'kanagawa'];

    provinces.forEach(function (province) {
        document.getElementById(`${province}-province-data-m`).style.display = 'none';
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

if (document.getElementById('barrier')){
    document.getElementById("barrier").addEventListener('click', function() {
        // Get the current number from the textContent, parse it as an integer, increment by 1, and then set the new value
        var currentNumber = parseInt(document.getElementById("blogs-number").textContent);
        document.getElementById("blogs-number").textContent = currentNumber + 1;
    });
}

function removeSections() {

    const sections = ['gunma', 'tochigi', 'saitama', 'ibaraki', 'kanagawa', 'chiba', 'tokyo'];
    const provinces = ['akina', 'akagi', 'myogi', 'usui', 'momiji', 'irohazaka', 'enna-skyline', 'happogahara', 'shomaru', 'sadamine', 'maze', 'tsuchisaka', 'tsukuba', 'yabitsu', 'nagao', 'nanamagari','tsubaki'];

    sections.forEach(function (section) {
        document.getElementById(`${section}-section`).style.display = 'none';
    })
    provinces.forEach(function (province) {
        document.getElementById(`${province}-section`).style.display = 'none';
        if (document.getElementById(`${province}-track-m`)){
            document.getElementById(`${province}-track-m`).className = 'title-buttons';
        }
    })
}

function toggleProvince(province) {
    document.getElementById(`${province}-section`).style.display = 'block';
}

function toggleTitleButtons(province){

    const button = document.getElementById(`${province}-track-m`);

    if(button.className === 'title-buttons') {
        button.className = 'title-buttons-active';
    } else {
        button.className = 'title-buttons';
    }
}

function togglePrefecture(province) {

    removeSections()

    if (province === 'akina' || province === 'akagi' || province === 'myogi' || province === 'usui') {
        document.getElementById('gunma-section').style.display = 'block';
    } else if (province === 'momiji' || province === 'irohazaka' || province === 'enna-skyline' || province === 'happogahara') {
        document.getElementById('tochigi-section').style.display = 'block';
    } else if (province === 'shomaru' || province === 'sadamine' || province === 'maze' || province === 'tsuchisaka') {
        document.getElementById('saitama-section').style.display = 'block';
    } else if (province === 'tsukuba') {
        document.getElementById('ibaraki-section').style.display = 'block';
    } else if (province === 'yabitsu' || province === 'nagao' || province === 'nanamagari' || province === 'tsubaki') {
        document.getElementById('kanagawa-section').style.display = 'block';
    } else if (province === 'chiba') {
        document.getElementById('chiba-section').style.display = 'block';
    } else if (province === 'tokyo') {
        document.getElementById('tokyo-section').style.display = 'block';
    }

    toggleProvince(province);
    toggleTitleButtons(province);

}

$("#akina-track-m").on('click', function(e) {
    e.preventDefault();
    if (fileName === 'provinces.html') {
        togglePrefecture('akina');
    } else {
        sessionStorage.setItem('province', 'akina');
        window.location.replace('provinces.html');
    }
});
$("#akagi-track-m").on('click', function(e) {
    e.preventDefault();
    if (fileName === 'provinces.html') {
        togglePrefecture('akagi');
    } else {
        sessionStorage.setItem('province', 'akagi');
        window.location.replace('provinces.html');
    }
});
$("#myogi-track-m").on('click', function(e) {
    e.preventDefault();
    if (fileName === 'provinces.html') {
        togglePrefecture('myogi');
    } else {
        sessionStorage.setItem('province', 'myogi');
        window.location.replace('provinces.html');
    }
});
$("#usui-track-m").on('click', function(e) {
    e.preventDefault();
    if (fileName === 'provinces.html') {
        togglePrefecture('usui');
    } else {
        sessionStorage.setItem('province', 'usui');
        window.location.replace('provinces.html');
    }
});
$("#momiji-track-m").on('click', function(e) {
    e.preventDefault();
    if (fileName === 'provinces.html') {
        togglePrefecture('momiji');
    } else {
        sessionStorage.setItem('province', 'momiji');
        window.location.replace('provinces.html');
    }
});
$("#irohazaka-track-m").on('click', function(e) {
    e.preventDefault();
    if (fileName === 'provinces.html') {
        togglePrefecture('irohazaka');
    } else {
        sessionStorage.setItem('province', 'irohazaka');
        window.location.replace('provinces.html');
    }
});
$("#enna-skyline-track-m").on('click', function(e) {
    e.preventDefault();
    if (fileName === 'provinces.html') {
        togglePrefecture('enna-skyline');
    } else {
        sessionStorage.setItem('province', 'enna-skyline');
        window.location.replace('provinces.html');
    }
});
$("#happogahara-track-m").on('click', function(e) {
    e.preventDefault();
    if (fileName === 'provinces.html') {
        togglePrefecture('happogahara');
    } else {
        sessionStorage.setItem('province', 'happogahara');
        window.location.replace('provinces.html');
    }
});
$("#shomaru-track-m").on('click', function(e) {
    e.preventDefault();
    if (fileName === 'provinces.html') {
        togglePrefecture('shomaru');
    } else {
        sessionStorage.setItem('province', 'shomaru');
        window.location.replace('provinces.html');
    }
});
$("#sadamine-track-m").on('click', function(e) {
    e.preventDefault();
    if (fileName === 'provinces.html') {
        togglePrefecture('sadamine');
    } else {
        sessionStorage.setItem('province', 'sadamine');
        window.location.replace('provinces.html');
    }
});
$("#maze-track-m").on('click', function(e) {
    e.preventDefault();
    if (fileName === 'provinces.html') {
        togglePrefecture('maze');
    } else {
        sessionStorage.setItem('province', 'maze');
        window.location.replace('provinces.html');
    }
});
$("#tsuchisaka-track-m").on('click', function(e) {
    e.preventDefault();
    if (fileName === 'provinces.html') {
        togglePrefecture('tsuchisaka');
    } else {
        sessionStorage.setItem('province', 'tsuchisaka');
        window.location.replace('provinces.html');
    }
});
$("#tsukuba-track-m").on('click', function(e) {
    e.preventDefault();
    if (fileName === 'provinces.html') {
        togglePrefecture('tsukuba');
    } else {
        sessionStorage.setItem('province', 'tsukuba');
        window.location.replace('provinces.html');
    }
});
$("#yabitsu-track-m").on('click', function(e) {
    e.preventDefault();
    if (fileName === 'provinces.html') {
        togglePrefecture('yabitsu');
    } else {
        sessionStorage.setItem('province', 'yabitsu');
        window.location.replace('provinces.html');
    }
});
$("#nagao-track-m").on('click', function(e) {
    e.preventDefault();
    if (fileName === 'provinces.html') {
        togglePrefecture('nagao');
    } else {
        sessionStorage.setItem('province', 'nagao');
        window.location.replace('provinces.html');
    }
});
$("#nanamagari-track-m").on('click', function(e) {
    e.preventDefault();
    if (fileName === 'provinces.html') {
        togglePrefecture('nanamagari');
    } else {
        sessionStorage.setItem('province', 'nanamagari');
        window.location.replace('provinces.html');
    }
});
$("#tsubaki-track-m").on('click', function(e) {
    e.preventDefault();
    if (fileName === 'provinces.html') {
        togglePrefecture('tsubaki');
    } else {
        sessionStorage.setItem('province', 'tsubaki');
        window.location.replace('provinces.html');
    }
});

function toggleCarsTitleButtons(car){

    const button = document.getElementById(`${car}-button-m`);

    if(button.className === 'title-buttons') {
        button.className = 'title-buttons-active';
    } else {
        button.className = 'title-buttons';
    }
}

function toggleCar(car){
    const cars = ['ae86', 'fd3s', 'fc3s'];

    cars.forEach(function(carRemove){
        if (document.getElementById(`${carRemove}-section`)) {
            document.getElementById(`${carRemove}-section`).style.display = 'none';
            if (document.getElementById(`${carRemove}-button-m`)){
                document.getElementById(`${carRemove}-button-m`).className = 'title-buttons';
            }
        }
    })

    if (document.getElementById(`${car}-section`)) {
        document.getElementById(`${car}-section`).style.display = 'block';
        if (document.getElementById(`${car}-button-m`)){
            document.getElementById(`${car}-button-m`).className = "title-buttons-active";
        }
    }
}

$("#ae86-button-m").on('click', function(e) {
    e.preventDefault();
    if (fileName === 'cars.html') {
        toggleCar('ae86');
    } else {
        sessionStorage.setItem('car', 'ae86');
        window.location.replace('cars.html');
    }
});
$("#fd3s-button-m").on('click', function(e) {
    e.preventDefault();
    if (fileName === 'cars.html') {
        toggleCar('fd3s');
    } else {
        sessionStorage.setItem('car', 'fd3s');
        window.location.replace('cars.html');
    }
});
$("#fc3s-button-m").on('click', function(e) {
    e.preventDefault();
    if (fileName === 'cars.html') {
        toggleCar('fc3s');
    } else {
        sessionStorage.setItem('car', 'fc3s');
        window.location.replace('cars.html');
    }
});
