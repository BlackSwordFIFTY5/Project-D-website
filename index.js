<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=100%, initial-scale=1.0">
    <title>PROJECT.D</title>
    <link id="style" rel="stylesheet"  href="index.css">
    <link rel="icon" href="Images/favicon.ico">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" defer></script>
    <script id="script" src="index.js" defer></script>
</head>
<body id="index-body"> 
    <div id="loading">Loading...</div>
    <div id="background-mobile"></div>
    <div id="background-desktop"></div>

    <header>
        <div id="header-div">  <!-- This div will house the logo and the title buttons-->
            <span id="top-menu-button-mobile">
                <div id="menu-svg-box">
                    <svg version="1.1" id="Capa-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 283.426 283.426" xml:space="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <rect x="0" y="40.84" style="fill:#ffffff;" width="283.426" height="47.735"></rect> <rect x="0" y="117.282" style="fill:#ffffff;" width="283.426" height="47.735"></rect> <rect x="0" y="194.851" style="fill:#ffffff;" width="283.426" height="47.735"></rect> </g> </g></svg>
                </div>
            </span>
            <h1 id="main-title-logo">
                PROJECT.D
            </h1>
            <div id="title-menu">
                <div id="main-menu-m">
                    <a href="index.html">
                        <div class="title-buttons" id="menu-button-m">
                            <p>MAIN MENU</p>
                        </div>
                    </a>
                    <div class="title-buttons" id="province-button-m">
                        <p>PROVINCES</p>
                    </div>
                    <div class="title-buttons" id="cars-button-m">
                        <p>CARS</p>
                    </div>
                    <a href="blogs.html">
                        <div class="title-buttons" id="blog-button-m">
                            <p>BLOGS</p>
                        </div>
                    </a>
                    <a href="about-us.html">
                        <div class="title-buttons">
                            <p>ABOUT <i><b>PROJECT.D</b></i></p>
                        </div>
                    </a>
                </div>
                <div id="province-list-m">
                    <div class="title-buttons" id="gunma-button-m">
                        <p>GUNMA</p>
                    </div>
                    <div class="title-buttons" id="tochigi-button-m">
                        <p>TOCHIGI</p>
                    </div>
                    <div class="title-buttons" id="saitama-button-m">
                        <p>SAITAMA</p>
                    </div>
                    <div class="title-buttons" id="ibaraki-button-m">
                        <p>IBARAKI</p>
                    </div>
                    <div class="title-buttons" id="chiba-button-m">
                        <p>CHIBA</p>
                    </div>
                    <div class="title-buttons" id="tokyo-button-m">
                        <p>TOKYO</p>
                    </div>
                    <div class="title-buttons" id="kanagawa-button-m">
                        <p>KANAGAWA</p>
                    </div>
                    <div class="title-buttons" id="back-button-m">
                        <p><b>BACK</b></p>
                    </div>
                </div>
    
                <div id="cars-list-m">
                    <div class="title-buttons" id="ae86-button-m">
                        <p>TOYOTA AE86 TRUENO</p>
                    </div>
                    <div class="title-buttons" id="rx7fd-button-m">
                        <p>MAZDA RX7 (FD3S)</p>
                    </div>
                    <div class="title-buttons" id="rx7fc-button-m">
                        <p>MAZDA RX7 (FC3S)</p>
                    </div>
                    <div class="title-buttons" id="back-button-m">
                        <p><b>BACK</b></p>
                    </div>
                </div>
                
                <div id="gunma-province-data-m">
                    <a href="gunma.html#akina-section">    
                        <div class="title-buttons" id="akina-track-m">
                            <p>MOUNT AKINA</p>
                        </div>
                    </a>
                    <a href="gunma.html#akagi-section">    
                        <div class="title-buttons" id="akagi-track-m">
                            <p>MOUNT AKAGI</p>
                        </div>
                    </a>
                    <a href="gunma.html#myogi-section">    
                        <div class="title-buttons" id="myogi-track-m">
                            <p>MOUNT MYOGI</p>
                        </div>
                    </a>
                    <a href="gunma.html#usui-section">    
                        <div class="title-buttons" id="usui-track-m">
                            <p>MOUNT USUI</p>
                        </div>
                    </a>
                    <div class="title-buttons" id="back-button-p-m">
                        <p><b>BACK</b></p>
                    </div>
                </div>
    
                <div id="tochigi-province-data-m">
                    <a href="tochigi.html#momiji-section">    
                        <div class="title-buttons" id="momiji-track-m">
                            <p>MOMIJI LINE</p>
                        </div>
                    </a>
                    <a href="tochigi.html#irohazaka-section">    
                        <div class="title-buttons" id="irohazaka-track-m">
                            <p>IROHAZAKA</p>
                        </div>
                    </a>
                    <a href="tochigi.html#enna-skyline-section">    
                        <div class="title-buttons" id="enna-skyline-track-m">
                            <p>ENNA SKYLINE</p>
                        </div>
                    </a>
                    <a href="tochigi.html#happogahara-section">    
                        <div class="title-buttons" id="happogahara-track-m">
                            <p>HAPPOGAHARA</p>
                        </div>
                    </a>
                    <div class="title-buttons" id="back-button-p-m">
                        <p><b>BACK</b></p>
                    </div>
                </div>
    
                <div id="ibaraki-province-data-m">
                    <a href="ibaraki.html#tsukuba-section">    
                        <div class="title-buttons" id="tsukuba-track-m">
                            <p>TSUKUBA</p>
                        </div>
                    </a>
                    <div class="title-buttons" id="back-button-p-m">
                        <p><b>BACK</b></p>
                    </div>
                </div>
    
                <div id="chiba-province-data-m">
                    <a href="chiba.html">    
                        <div class="title-buttons" id="chiba-track-m">
                            <p>CHIBA TRACK</p>
                        </div>
                    </a>
                    <div class="title-buttons" id="back-button-p-m">
                        <p><b>BACK</b></p>
                    </div>
                </div>
    
                <div id="saitama-province-data-m">
                    <a href="saitama.html#shomaru-section">    
                        <div class="title-buttons" id="shomaru-track-m">
                            <p>SHOMARU PASS</p>
                        </div>
                    </a>
                    <a href="saitama.html#sadamine-section">    
                        <div class="title-buttons" id="sadamine-track-m">
                            <p>SADAMINE PASS</p>
                        </div>
                    </a>
                    <a href="saitama.html#maze-section">    
                        <div class="title-buttons" id="maze-track-m">
                            <p>MAZE PASS</p>
                        </div>
                    </a>
                    <a href="saitama.html#tsuchisaka-section">    
                        <div class="title-buttons" id="tsuchisaka-track-m">
                            <p>TSUCHISAKA</p>
                        </div>
                    </a>
                    <div class="title-buttons" id="back-button-p-m">
                        <p><b>BACK</b></p>
                    </div>
                </div>
    
                <div id="tokyo-province-data-m">
                    <a href="tokyo.html">    
                        <div class="title-buttons" id="tokyo-track-m">
                            <p>TOKYO TRACK</p>
                        </div>
                    </a>
                    <div class="title-buttons" id="back-button-p-m">
                        <p><b>BACK</b></p>
                    </div>
                </div>
    
                <div id="kanagawa-province-data-m">
                    <a href="kanagawa.html#nagao-sectiom">    
                        <div class="title-buttons" id="nagao-track-m">
                            <p>NAGAO PASS</p>
                        </div>
                    </a>
                    <a href="kanagawa.html#nanamagari-sectiom">    
                        <div class="title-buttons" id="nanamagari-track-m">
                            <p>NANAMAGARI</p>
                        </div>
                    </a>
                    <a href="kanagawa.html#tsubaki-sectiom">    
                        <div class="title-buttons" id="tsubaki-track-m">
                            <p>TSUBAKI LINE</p>
                        </div>
                    </a>
                    <a href="kanagawa.html#yabitsu-sectiom">    
                        <div class="title-buttons"  id="yabitsu-track-m">
                            <p>YABITSU</p>
                        </div>
                    </a>
                    <div class="title-buttons" id="back-button-p-m">
                        <p><b>BACK</b></p>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
    <div class="background-image">
        <div class="menu">
            <div id="main-menu">
                <div class="menu-buttons" id="main-menu-button">
                    <p>MAIN MENU</p>
                </div>
                <div class="menu-buttons" id="province-button">
                    <p>PROVINCES</p>
                </div>
                <div class="menu-buttons" id="cars-button">
                    <p>CARS</p>
                </div>
                <a href="blogs.html">
                    <div class="menu-buttons" id="blog-button">
                        <p>BLOGS</p>
                    </div>
                </a>
                <a href="about-us.html">
                    <div class="menu-buttons" id="about-button">
                    <p>ABOUT <i><b>PROJECT.D</b></i></p>
                    </div>
                </a>
            </div>

            <div id="province-list">
                <div class="menu-buttons" id="gunma-button">
                    <p>GUNMA</p>
                </div>
                <div class="menu-buttons" id="tochigi-button">
                    <p>TOCHIGI</p>
                </div>
                <div class="menu-buttons" id="saitama-button">
                    <p>SAITAMA</p>
                </div>
                <div class="menu-buttons" id="ibaraki-button">
                    <p>IBARAKI</p>
                </div>
                <div class="menu-buttons" id="chiba-button">
                    <p>CHIBA</p>
                </div>
                <div class="menu-buttons" id="tokyo-button">
                    <p>TOKYO</p>
                </div>
                <div class="menu-buttons" id="kanagawa-button">
                    <p>KANAGAWA</p>
                </div>
                <div class="menu-buttons" id="back-button">
                    <p><b>BACK</b></p>
                </div>
            </div>

            <div id="cars-list">
                <div class="menu-buttons" id="ae86-button">
                    <p>TOYOTA AE86 TRUENO</p>
                </div>
                <div class="menu-buttons" id="rx7fd-button">
                    <p>MAZDA RX7 (FD3S)</p>
                </div>
                <div class="menu-buttons" id="rx7fc-button">
                    <p>MAZDA RX7 (FC3S)</p>
                </div>
                <div class="menu-buttons" id="back-button">
                    <p><b>BACK</b></p>
                </div>
            </div>
            
            <div id="gunma-province-data">
                <a href="gunma.html#akina-section">    
                    <div class="menu-buttons" id="akina-track">
                        <p>MOUNT AKINA</p>
                    </div>
                </a>
                <a href="gunma.html#akagi-section">    
                    <div class="menu-buttons" id="akagi-track">
                        <p>MOUNT AKAGI</p>
                    </div>
                </a>
                <a href="gunma.html#myogi-section">    
                    <div class="menu-buttons" id="myogi-track">
                        <p>MOUNT MYOGI</p>
                    </div>
                </a>
                <a href="gunma.html#usui-section">    
                    <div class="menu-buttons" id="usui-track">
                        <p>MOUNT USUI</p>
                    </div>
                </a>
                <div class="menu-buttons" id="back-button-p">
                    <p><b>BACK</b></p>
                </div>
            </div>

            <div id="tochigi-province-data">
                <a href="tochigi.html#momiji-section">    
                    <div class="menu-buttons" id="momiji-track">
                        <p>MOMIJI LINE</p>
                    </div>
                </a>
                <a href="tochigi.html#irohazaka-section">    
                    <div class="menu-buttons" id="irohaazaka-track">
                        <p>IROHAZAKA</p>
                    </div>
                </a>
                <a href="tochigi.html#enna-skyline-section">    
                    <div class="menu-buttons" id="enna-skyline-track">
                        <p>ENNA SKYLINE</p>
                    </div>
                </a>
                <a href="tochigi.html#happogahara-section">    
                    <div class="menu-buttons" id="happogahara-track">
                        <p>HAPPOGAHARA</p>
                    </div>
                </a>
                <div class="menu-buttons" id="back-button-p">
                    <p><b>BACK</b></p>
                </div>
            </div>

            <div id="ibaraki-province-data">
                <a href="ibaraki.html#tsukuba-section">    
                    <div class="menu-buttons" id="tsukuba-track">
                        <p>TSUKUBA</p>
                    </div>
                </a>
                <div class="menu-buttons" id="back-button-p">
                    <p><b>BACK</b></p>
                </div>
            </div>

            <div id="chiba-province-data">
                <a href="">    
                    <div class="menu-buttons" id="chiba-track">
                        <p>CHIBA TRACK</p>
                    </div>
                </a>
                <div class="menu-buttons" id="back-button-p">
                    <p><b>BACK</b></p>
                </div>
            </div>

            <div id="saitama-province-data">
                <a href="saitama.html#shomaru-section">    
                    <div class="menu-buttons" id="shomaru-track">
                        <p>SHOMARU PASS</p>
                    </div>
                </a>
                <a href="saitama.html#sadamine-section">    
                    <div class="menu-buttons" id="sadamine-track">
                        <p>SADAMINE PASS</p>
                    </div>
                </a>
                <a href="saitama.html#maze-section">    
                    <div class="menu-buttons" id="maze-track">
                        <p>MAZE PASS</p>
                    </div>
                </a>
                <a href="saitama.html#tsuchisaka-section">    
                    <div class="menu-buttons" id="tsuchisaka-track">
                        <p>TSUCHISAKA</p>
                    </div>
                </a>
                <div class="menu-buttons" id="back-button-p">
                    <p><b>BACK</b></p>
                </div>
            </div>

            <div id="tokyo-province-data">
                <a href="tokyo.html">    
                    <div class="menu-buttons" id="tokyo-track">
                        <p>TOKYO TRACK</p>
                    </div>
                </a>
                <div class="menu-buttons" id="back-button-p">
                    <p><b>BACK</b></p>
                </div>
            </div>

            <div id="kanagawa-province-data">
                <a href="kanagawa.html#nagao-section">    
                    <div class="menu-buttons" id="nagao-track">
                        <p>NAGAO PASS</p>
                    </div>
                </a>
                <a href="kanagawa.html#nanamagari-section">    
                    <div class="menu-buttons" id="nanamagari-track">
                        <p>NANAMAGARI</p>
                    </div>
                </a>
                <a href="kanagawa.html#tsubaki-section">    
                    <div class="menu-buttons" id="tsubaki-track">
                        <p>TSUBAKI LINE</p>
                    </div>
                </a>
                <a href="kanagawa.html#yabitsu-section">    
                    <div class="menu-buttons"  id="yabitsu-track">
                        <p>YABITSU</p>
                    </div>
                </a>
                <div class="menu-buttons" id="back-button-p">
                    <p><b>BACK</b></p>
                </div>
            </div>
        </div>

        <div class="map-container">

            <div id="imgmap">
                <img src="Images/map-of-japan.png" usemap="#image-map">
            
                <map name="image-map" id="japan-map">
                    <div id="gunma-area">
                        <area id="gunma-map" target="_self" alt="Gunma" title="Gunma" href="" coords="618,284,583,264,557,276,547,296,542,303,541,310,539,317,528,337,513,353,478,365,468,369,459,376,448,389,434,414,428,424,428,432,424,441,425,447,434,454,444,455,459,462,471,467,475,468,485,477,490,493,494,508,494,561,496,566,498,568,500,573,503,574,508,578,512,581,518,582,520,584,524,581,528,572,531,567,551,547,559,534,566,528,573,521,583,514,589,509,595,503,601,498,606,493,615,489,623,484,627,484,641,481,689,483,700,485,708,485,710,483,709,480,703,479,694,473,688,469,685,464,687,457,685,446,681,439,675,434,666,428,658,421,649,413,647,407,648,378,643,368,638,360,632,352,627,345,623,329,623,306,624,291" shape="poly">
                    </div>
                    <div id="tochigi-area">
                        <area id="tochigi-map" target="_self" alt="Tochigi" title="Tochigi" href="tochigi.html" coords="784,195,772,195,764,198,758,198,754,201,751,204,748,207,742,208,735,216,732,221,728,229,723,234,720,239,720,243,716,249,709,256,705,261,692,264,684,266,679,269,666,275,654,280,639,279,634,284,632,290,631,309,629,316,629,327,632,336,639,348,648,362,655,379,657,387,657,401,660,409,667,416,670,417,675,423,677,424,683,429,688,436,691,442,692,452,697,459,705,467,714,470,719,474,725,475,728,479,734,479,741,477,748,473,759,469,766,466,775,460,780,456,785,452,790,448,799,442,812,435,829,419,840,397,848,389,853,378,853,289,851,281,851,257,852,250,837,232,825,225,817,221,811,213,800,207,796,201" shape="poly">
                    </div>
                    <div id="ibaraki-area">
                        <area id="ibaraki-map" target="_self" alt="Ibaraki" title="Ibaraki" href="ibaraki.html" coords="901,275,874,275,868,270,862,270,861,276,865,284,865,342,870,353,865,364,866,385,858,400,852,407,849,414,840,427,819,447,806,456,799,459,797,462,788,468,784,470,773,478,761,481,755,484,750,487,750,491,756,494,761,503,768,510,771,515,776,522,789,521,800,514,807,512,824,502,829,502,852,520,864,531,871,538,886,547,896,551,901,552,905,550,911,546,921,541,931,533,940,528,945,525,973,525,981,526,985,524,980,517,974,512,967,499,963,491,956,473,951,451,949,449,948,419,944,409,945,369,948,360,948,342,954,332,954,321,955,315,959,310,962,302,966,297,973,276,978,261,977,255,973,252,970,251,963,248,958,245,953,244,939,243,934,250,932,256,925,262,921,263,916,269,912,274" shape="poly">
                    </div>
                    <div id="chiba-area">
                        <area id="chiba-map" target="_self" alt="Chiba" title="Chiba" href="chiba.html" coords="826,513,782,537,786,555,792,569,796,591,800,596,799,609,803,617,805,634,811,634,815,630,828,626,834,622,841,619,855,619,861,625,864,626,870,633,871,636,877,639,880,644,880,650,878,656,863,680,857,687,840,700,836,704,828,717,828,781,832,813,836,820,841,831,843,845,845,852,851,851,854,845,862,837,864,834,864,828,869,817,870,811,875,806,882,803,893,795,906,791,911,787,915,786,923,777,928,775,943,760,948,749,949,744,952,737,951,731,944,714,945,659,948,650,948,641,951,640,954,631,959,620,971,607,982,600,990,595,997,589,1002,588,1008,586,1023,571,1021,566,1013,565,1001,560,983,543,974,538,972,536,948,536,940,540,934,545,927,549,921,553,914,557,899,564,879,555,864,546,851,533,841,523" shape="poly">
                    </div>
                    <div id="saitama-area">    
                        <area id="saitama-map" target="_self" alt="Saitama" title="Saitama" href="saitama.html" coords="677,489,634,489,615,499,605,506,597,513,589,520,587,526,577,532,575,538,565,545,555,558,544,569,537,583,535,590,537,595,541,599,544,600,547,603,551,604,555,606,559,610,563,611,566,614,574,617,586,620,592,621,592,627,597,627,595,626,598,619,603,610,611,600,616,597,629,597,635,599,639,604,644,606,669,607,688,603,698,602,741,602,746,606,786,608,787,592,783,592,780,582,769,547,767,535,753,515,736,497,725,493,687,493" shape="poly">
                    </div>
                    <div id="tokyo-area">
                        <area id="tokyo-map" target="_self" alt="Tokyo" title="Tokyo" href="tokyo.html" coords="672,616,694,612,738,612,751,616,788,617,791,623,792,639,787,644,783,644,777,649,771,657,765,660,726,661,719,663,715,666,710,667,703,671,650,671,646,664,642,658,635,651,628,645,623,641,614,636,608,635,606,633,606,627,608,621,617,608,628,607,632,612,639,615,650,616" shape="poly">
                    </div>
                    <div id="kanagawa-area">
                        <area id="kanagawa-map" target="_self" alt="Kanagawa" title="Kanagawa" href="kanagawa.html" coords="712,679,650,679,651,694,647,699,635,710,621,718,611,721,586,737,588,739,595,740,601,744,605,749,611,758,615,764,618,770,618,774,621,786,624,797,630,803,636,804,641,800,640,791,642,783,648,776,652,776,658,770,664,765,666,765,670,760,673,755,679,752,690,749,703,749,712,745,749,745,755,747,760,753,762,756,768,760,770,764,768,760,771,768,776,778,782,777,787,773,786,763,781,751,778,746,772,729,772,723,768,714,768,676,765,673,732,673,721,677,713,683" shape="poly">
                    </div>
                </map>
            </div>
        
        </div>
    </div>
</body>
</html>
