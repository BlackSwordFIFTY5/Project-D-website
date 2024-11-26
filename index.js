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

window.addEventListener('load', function() {
    // Hide the loading screen when everything has loaded
    document.getElementById('loading').style.display = 'none';

    const filePath = window.location.pathname;

    const fileName = filePath.split('/').pop(); // Extract the last part of the path

    if (fileName === 'provinces.html') {
        let province = this.sessionStorage.getItem('province');
        togglePrefecture(province);
    }
    
        if (fileName === 'cars.html') {
        let car = this.sessionStorage.getItem('car');
        toggleCar(car)
    }
});


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


if (document.getElementById('gunma'))
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

function removeTracks () {
    const prefectures = ['gunma', 'tochigi', 'ibaraki', 'saitama', 'chiba', 'tokyo', 'kanagawa'];

    prefectures.forEach(function (prefecture) {
        if (document.getElementById(`${prefecture}-area-active`)) {
            document.getElementById(`${prefecture}-area-active`).id = `${prefecture}-area`;
            document.getElementById(`${prefecture}-province-data`).style.display = 'none';
            console.log(`Removing ${prefecture}`)
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

if(document.getElementById("main-menu")) {

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

    document.getElementById("province-button").addEventListener('click', function() {
        document.getElementById("main-menu").style.display = 'none';
        document.getElementById("province-list").style.display = 'block';
    })

    document.getElementById("cars-button").addEventListener('click', function() {
        document.getElementById("main-menu").style.display = 'none';
        document.getElementById("cars-list").style.display = 'block';
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

}


if (document.getElementById("barrier")) {
    document.getElementById("barrier").addEventListener('click', function() {
        // Get the current number from the textContent, parse it as an integer, increment by 1, and then set the new value
        var currentNumber = parseInt(document.getElementById("blogs-number").textContent);
        document.getElementById("blogs-number").textContent = currentNumber + 1;
    });
}

function removeSections() {

    const sections = ['gunma', 'tochigi', 'saitama', 'ibaraki', 'kanagawa', 'chiba', 'tokyo'];
    const provinces = ['akina', 'akagi', 'myogi', 'usui', 'momiji', 'irohazaka', 'enna-skyline', 'happogahara', 'shomaru', 'sadamine', 'maze', 'tsuchisaka', 'tsukuba', 'yabitsu', 'nagao', 'nanamagari','tsubaki', 'chiba', 'tokyo'];

    sections.forEach(function (section) {
        document.getElementById(`${section}-section`).style.display = 'none';
    })
    provinces.forEach(function (province) {
        document.getElementById(`${province}-section`).style.display = 'none';
        if(document.getElementById(`${province}-section-button`)) {
            document.getElementById(`${province}-section-button`).className = 'sidenav-button';
        }
    })
}


function toggleTracks(prefecture) {

    const prefectureTracks = document.getElementById(`${prefecture}-tracks`);
    const prefectureButton = document.getElementById(`${prefecture}-section-button`);
    const prefectureButtonActive = document.getElementById(`${prefecture}-section-button-active`);

    if(!prefectureButtonActive) {
        prefectureButton.id = `${prefecture}-section-button-active`;
        prefectureButton.className = 'sidenav-button-active';
        prefectureTracks.style.display = 'block';
    } else {
        prefectureButtonActive.id = `${prefecture}-section-button`;
        prefectureButtonActive.className = 'sidenav-button';
        prefectureTracks.style.display = 'none';
    }
}

function toggleProvince(province) {
    document.getElementById(`${province}-section`).style.display = 'block';
    document.getElementById(`${province}-section-button`).className = 'sidenav-button-active';
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

    toggleProvince(province)

}

if (document.getElementById('gunma-section-button')) {
    document.getElementById("gunma-section-button").addEventListener('click', function() {
        toggleTracks('gunma');
    });
}
if (document.getElementById('gunma-section-button-active')) {
    document.getElementById("gunma-section-button-active").addEventListener('click', function() {
        toggleTracks('gunma');
    });
}

if (document.getElementById("tochigi-section-button")) {
    document.getElementById("tochigi-section-button").addEventListener('click', function() {
        toggleTracks('tochigi');
    });
}
if (document.getElementById("tochigi-section-button-active")) {
    document.getElementById("tochigi-section-button-active").addEventListener('click', function() {
        toggleTracks('tochigi');
    });
}

if (document.getElementById("saitama-section-button")) {
    document.getElementById("saitama-section-button").addEventListener('click', function() {
        toggleTracks('saitama');
    });
}
if (document.getElementById("saitama-section-button-active")) {
    document.getElementById("saitama-section-button-active").addEventListener('click', function() {
        toggleTracks('saitama');
    });
}

if (document.getElementById("ibaraki-section-button")) {
    document.getElementById("ibaraki-section-button").addEventListener('click', function() {
        toggleTracks('ibaraki');
    });
}
if (document.getElementById("ibaraki-section-button-active")){
    document.getElementById("ibaraki-section-button-active").addEventListener('click', function() {
        toggleTracks('ibaraki');
    });
}

if (document.getElementById("kanagawa-section-button")) {
    document.getElementById("kanagawa-section-button").addEventListener('click', function() {
        toggleTracks('kanagawa');
    });
}
if (document.getElementById("kanagawa-section-button-active")) {
    document.getElementById("kanagawa-section-button-active").addEventListener('click', function() {
        toggleTracks('kanagawa');
    });
}

if (document.getElementById('akina-section-button')) {
    document.getElementById('akina-section-button').addEventListener('click', function() {
        togglePrefecture('akina');
    })
}

if (document.getElementById('akagi-section-button')) {
    document.getElementById('akagi-section-button').addEventListener('click', function() {
        togglePrefecture('akagi');
    })
}

if (document.getElementById('myogi-section-button')) {
    document.getElementById('myogi-section-button').addEventListener('click', function() {
        togglePrefecture('myogi');
    })
}

if (document.getElementById('usui-section-button')) {
    document.getElementById('usui-section-button').addEventListener('click', function() {
        togglePrefecture('usui');
    })
}

if (document.getElementById('momiji-section-button')) {
    document.getElementById('momiji-section-button').addEventListener('click', function() {
        togglePrefecture('momiji');
    })
}

if (document.getElementById('irohazaka-section-button')) {
    document.getElementById('irohazaka-section-button').addEventListener('click', function() {
        togglePrefecture('irohazaka');
    })
}

if (document.getElementById('enna-skyline-section-button')) {
    document.getElementById('enna-skyline-section-button').addEventListener('click', function() {
        togglePrefecture('enna-skyline');
    })
}

if (document.getElementById('happogahara-section-button')) {
    document.getElementById('happogahara-section-button').addEventListener('click', function() {
        togglePrefecture('happogahara');
    })
}

if (document.getElementById('shomaru-section-button')) {
    document.getElementById('shomaru-section-button').addEventListener('click', function() {
        togglePrefecture('shomaru');
    })
}

if (document.getElementById('sadamine-section-button')) {
    document.getElementById('sadamine-section-button').addEventListener('click', function() {
        togglePrefecture('sadamine');
    })
}

if (document.getElementById('maze-section-button')) {
    document.getElementById('maze-section-button').addEventListener('click', function() {
        togglePrefecture('maze');
    })
}

if (document.getElementById('tsuchisaka-section-button')) {
    document.getElementById('tsuchisaka-section-button').addEventListener('click', function() {
        togglePrefecture('tsuchisaka');
    })
}

if (document.getElementById('tsukuba-section-button')) {
    document.getElementById('tsukuba-section-button').addEventListener('click', function() {
        togglePrefecture('tsukuba');
    })
}

if (document.getElementById('yabitsu-section-button')) {
    document.getElementById('yabitsu-section-button').addEventListener('click', function() {
        togglePrefecture('yabitsu');
    })
}

if (document.getElementById('nagao-section-button')) {
    document.getElementById('nagao-section-button').addEventListener('click', function() {
        togglePrefecture('nagao');
    })
}

if (document.getElementById('nanamagari-section-button')) {
    document.getElementById('nanamagari-section-button').addEventListener('click', function() {
        togglePrefecture('nanamagari');
    })
}

if (document.getElementById('tsubaki-section-button')) {
    document.getElementById('tsubaki-section-button').addEventListener('click', function() {
        togglePrefecture('tsubaki');
    })
}

if (document.getElementById('chiba-section-button')) {
    document.getElementById('chiba-section-button').addEventListener('click', function() {
        togglePrefecture('chiba');
    })
}

if (document.getElementById('tokyo-section-button')) {
    document.getElementById('tokyo-section-button').addEventListener('click', function() {
        togglePrefecture('tokyo');
    })
}

$("#akina-track").on('click', function(e) {
    e.preventDefault();
    sessionStorage.setItem('province', 'akina')
    window.location.replace('provinces.html')
});
$("#akagi-track").on('click', function(e) {
    e.preventDefault();
    sessionStorage.setItem('province', 'akagi')
    window.location.replace('provinces.html')
});
$("#myogi-track").on('click', function(e) {
    e.preventDefault();
    sessionStorage.setItem('province', 'myogi')
    console.log("myogi")
    window.location.replace('provinces.html')
});
$("#usui-track").on('click', function(e) {
    e.preventDefault();
    sessionStorage.setItem('province', 'usui')
    console.log("usui")
    window.location.replace('provinces.html')
});
$("#momiji-track").on('click', function(e) {
    e.preventDefault();
    sessionStorage.setItem('province', 'momiji')
    console.log("momiji")
    window.location.replace('provinces.html')
});
$("#irohazaka-track").on('click', function(e) {
    e.preventDefault();
    sessionStorage.setItem('province', 'irohazaka')
    console.log("irohazaka")
    window.location.replace('provinces.html')
});
$("#enna-skyline-track").on('click', function(e) {
    e.preventDefault();
    sessionStorage.setItem('province', 'enna-skyline')
    console.log("enna-skyline")
    window.location.replace('provinces.html')
});
$("#happogahara-track").on('click', function(e) {
    e.preventDefault();
    sessionStorage.setItem('province', 'happogahara')
    console.log("happogahara")
    window.location.replace('provinces.html')
});
$("#shomaru-track").on('click', function(e) {
    e.preventDefault();
    sessionStorage.setItem('province', 'shomaru')
    console.log("shomaru")
    window.location.replace('provinces.html')
});
$("#sadamine-track").on('click', function(e) {
    e.preventDefault();
    sessionStorage.setItem('province', 'sadamine')
    console.log("sadamine")
    window.location.replace('provinces.html')
});
$("#maze-track").on('click', function(e) {
    e.preventDefault();
    sessionStorage.setItem('province', 'maze')
    console.log("maze")
    window.location.replace('provinces.html')
});
$("#tsuchisaka-track").on('click', function(e) {
    e.preventDefault();
    sessionStorage.setItem('province', 'tsuchisaka')
    console.log("tsuchisaka")
    window.location.replace('provinces.html')
});
$("#tsukuba-track").on('click', function(e) {
    e.preventDefault();
    sessionStorage.setItem('province', 'tsukuba')
    console.log("tsukuba")
    window.location.replace('provinces.html')
});
$("#yabitsu-track").on('click', function(e) {
    e.preventDefault();
    sessionStorage.setItem('province', 'yabitsu')
    console.log("yabitsu")
    window.location.replace('provinces.html')
});
$("#nagao-track").on('click', function(e) {
    e.preventDefault();
    sessionStorage.setItem('province', 'nagao')
    console.log("nagao")
    window.location.replace('provinces.html')
});
$("#nanamagari-track").on('click', function(e) {
    e.preventDefault();
    sessionStorage.setItem('province', 'nanamagari')
    console.log("nanamagari")
    window.location.replace('provinces.html')
});
$("#tsubaki-track").on('click', function(e) {
    e.preventDefault();
    sessionStorage.setItem('province', 'tsubaki')
    console.log("tsubaki")
    window.location.replace('provinces.html')
});
$("#chiba-track").on('click', function(e) {
    e.preventDefault();
    sessionStorage.setItem('province', 'chiba')
    console.log("chiba")
    window.location.replace('provinces.html')
});
$("#tokyo-track").on('click', function(e) {
    e.preventDefault();
    sessionStorage.setItem('province', 'tokyo')
    console.log("tokyo")
    window.location.replace('provinces.html')
});

function toggleCar(car){
    const cars = ['ae86', 'fd3s', 'fc3s'];

    cars.forEach(function(carRemove){
        if (document.getElementById(`${carRemove}-section`)) {
            document.getElementById(`${carRemove}-section`).style.display = 'none';
            document.getElementById(`${carRemove}-section-button`).className = 'sidenav-button';
        }
    })

    if (document.getElementById(`${car}-section`)) {
        document.getElementById(`${car}-section`).style.display = 'block';
        document.getElementById(`${car}-section-button`).className = 'sidenav-button-active';
    }
}

if (document.getElementById('ae86-section-button')) {
    document.getElementById('ae86-section-button').addEventListener('click', function() {
        toggleCar('ae86');
    })
}
if (document.getElementById('fd3s-section-button')) {
    document.getElementById('fd3s-section-button').addEventListener('click', function() {
        toggleCar('fd3s');
    })
}
if (document.getElementById('fc3s-section-button')) {
    document.getElementById('fc3s-section-button').addEventListener('click', function() {
        toggleCar('fc3s');
    })
}

$("#ae86-button").on('click', function(e) {
    e.preventDefault();
    sessionStorage.setItem('car', 'ae86')
    console.log("ae86")
    window.location.replace('cars.html')
});
$("#fd3s-button").on('click', function(e) {
    e.preventDefault();
    sessionStorage.setItem('car', 'fd3s')
    console.log("fd3s")
    window.location.replace('cars.html')
});
$("#fc3s-button").on('click', function(e) {
    e.preventDefault();
    sessionStorage.setItem('car', 'fc3s')
    console.log("fc3s")
    window.location.replace('cars.html')
});
