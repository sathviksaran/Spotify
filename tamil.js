console.log("Welcome to Spotify")

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/31.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let title = document.getElementById('title');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {id: '30', songName: "Adiye", filePath: "songs/31.mp3", coverPath: "covers/31.jpeg", video:"HRD2-_bU4K0", lyrics: "Adiyae neethaaanadi Enn bothai thaenae Mutham konju Sagiyae neeyaaradi Kai theendum pournami Konjam nillu Pennae pennae Undhan kayyil naanum Koodum neram Enna vittu chellaadhae Kannae kannae Neelum kaalam vendum Vaaraayo arugilae Poovae kaadhal pookkum poovae Saaral veesa eeraam Ennai konjum mazhaiyil unn vaasam Kenjum nenjam unnai kenjum Pularum kaalai vendaam Iravin kulirae ennai kollaadhae Iravugal neela Imaigalum mooda Idaiveli yaeno kanmaniyae Yugangalai thaandi Viralgalai pootti Muthangalai thinbom adiyae Saalarathin velichathilae Arumbugiren Mei kadalil alaigalilae Suzhaluthae kavizhuthae Manam adhuvae Adiyae neethaaanadi Enn bothai thaenae Mutham konju Sagiyae neeyaaradi Kai theendum pournami Konjam nillu Pennae pennae Undhan kayyil naanum Koodum neram Enna vittu chellaadhae Kannae kannae Neelum kaalam vendum Vaaraayo arugilae Poovae kaadhal pookkum poovae Saaral veesa eeraam Ennai konjum mazhaiyil unn vaasam Kenjum nenjam unnai kenjum Pularum kaalai vendaam Iravin kulirae ennai kollaadhae Poovae kaadhal pookkum poovae Saaral veesa eeraam Ennai konjum mazhaiyil unn vaasam Kenjum nenjam unnai kenjum Pularum kaalai vendaam Iravin kulirae ennai kollaadhae"},
    {id: '31', songName: "Anbe En Anbe", filePath: "songs/32.mp3", coverPath: "covers/32.jpeg", video:"WD_bnSxlj98", lyrics: "Anbae En Anbae Un Vizhi Paarka Ithanai Naalai Thavithaen Kanavae Kanavae Kan Urangamal Ulagam Muzhuthai Maranthaen Kannil Sudum Veyil Kaalam Un Nenjil Kulir Pani Kaalam Anbil Adai Mazhai Kaalam Ini Aruginil Vasapadum Sugam Sugam Nee Nee Oru Nadhi Azhai Aanai Naan Naan Adhil Vizhum Ilai Aanaen Undhan Madiyinil Mithanthiduveno Undhan Karai Thoda Pizhaithiduvenooh Malaiyinilae Pirakum Nadhi Kadalinilae Kalakum Manadhinilae Irupadhellam Mounathilae Kalakum Anbae En Anbae Un Vizhi Paarka Ithanai Naalai Thavithaen Kanavae Kanavae Kan Urangamal Ulagam Muzhuthai Maranthaen Nee Nee Pudhu Kattalaigal Vithika Naan Naan Udan Kattupattu Nadaka Indha Ulagathai Jeyithiduvenae Anbu Devathaiku Parisalipenae Yedhai Koduthom Yedhai Yeduthom Theriyavilai Kanakku Yengu Tholainthom Yengu Kidaithom Puriyavilai Namaku Anbae En Anbae Un Vizhi Paarka Hoooooohoho Kanavae Kanavae Kan Urangamal Hoooooohoho Kannil Sudum Veyil Kaalam Un Nenjil Kulir Pani Kaalam Anbil Adai Mazhai Kaalam Ini Aruginil Vasapadum Sugam Sugam"},
    {id: '32', songName: "Donu Donu Donu", filePath: "songs/33.mp3", coverPath: "covers/33.jpeg", video:"A_z5g0_hJN8", lyrics: "Donu Donu Donu Naa Unnoda Gold Meenu Sceneu Sceneu Sceneu Nee Thotathellam Sceneu Maanu Maanu Maanu Naan Unnoda Caffineu Goneu Goneu Goneu Nee Paathale Naan Goneu Gundaana Kanaala Kuthama Kuthatha Nee Unna Thandhalum Pathaathadi Roja Poo Dhegathaal Raja Naan Saanjuten Un Munne En Gethu Nikkadhadi Uruguthey Unthan Aanmai Paarthu Mayanguthey Indha Paavai Thaan Thavikuthey Yellai Thaandi Paarkka Thadukuthey Pen Naanam Thaan Uruguthey Mayanguthey Thavikuthey Thadukuthey Pen Naanam Thaan I'm A Loyal Husband Giving You Royal Treatment And Your Daily Shopping Is Guarenteed You're Ma Meesai Maama I'm Your Naughty Maami Giving You A Life Time Service Warranty I'm A Loyal Husband Giving You Royal Treatment And Your Daily Shopping Is Guarenteed You're Ma Meesai Maama I'm Your Naughty Maami Giving You A Life Time Service Warranty Hey Vaa Maa Twinkleu Come And Mingleu Namma Kaatula Naan Thaan Kingu Modern Manmadha Aasa Koodudha Kanna Kattudha Give Me Ringu Naan Sokkuren Di Vikkuren Di Othaiyila Nikkurendi Naan Thithikavaa Pathikavaa Oththaikkotha Aada Ready Uruguthey Mayanguthey Ehh Thavikuthey Thadukuthey Pen Naanam Thaan Uruguthey Unthan Aanmai Paarthu Mayanguthey Indha Paavai Thaan Thavikuthey Yellai Thaandi Paarkka Thadukuthey Pen Naanam Thaan Donu Donu Donu Naa Unnoda Gold Meenu Sceneu Sceneu Sceneu Nee Thotathellam Sceneu Maanu Maanu Maanu Naan Unnoda Caffineu Goneu Goneu Goneu Nee Paathale Naan Goneu Gudnaana Kanaala Kuthama Kuthatha Nee Unna Thandhalum Pathaathadi Roja Poo Dhegathaal Raja Naan Saanjuten Un Munne En Gethu Nikkadhadi I'm A Loyal Husband Giving You Royal Treatment And Your Daily Shopping Is Guarenteed You're Ma Meesai Maama I'm Your Naughty Maami Giving You A Life Time Service Warranty I'm A Loyal Husband Giving You Royal Treatment And Your Daily Shopping Is Guarenteed You're Ma Meesai Maama I'm Your Naughty Maami Giving You A Life Time Service Warranty"},
    {id: '33', songName: "Enna Solla", filePath: "songs/34.mp3", coverPath: "covers/34.jpeg", video:"2P_0Q8CIjw8", lyrics: "Enna Solla Aethu Solla Kannodu Kanpesa Vaarthai Illa Ennennavo Ullukkulla Vella Sollama En Vekkam Thalla Chinna Chinna Aasa Ulla Thikki Thikki Pesa Malligapo Vaasam Konjam Kaathoda Veesa Uthu Uthu Paarka Nenjil Muthu Mutha Verka Putham Puthu Vaazhka Enna Unnodu Serka Ennodu Nee Unnodu Naan Ondrodu Naam Ondraagum Naal Ennodu Nee Unnodu Naan Ondraagum Naal Ennodu Nee Unnodu Naan Ondrodu Naam Ondraagum Naal Ennodu Nee Unnodu Naan Ondraagum Naal Sollaamal Kollamal Nenjodu Kaathal Sera Nenjodu Kaathal Sera Moocu Muttuthey Ennaalum Ennaalum Kaikorthu Pogum Paathai Kaikorthu Pogum Paathai Kannil Thondruthey Sollatha Ennangal Pollatha Aasaigal Unnala Seruthey Bhaaram Kooduthey Thedatha Thedalgal Kaanaatha Kaatchigal Unnodu Kaanbathil Neram Poguthey Chinna Chinna Aasa Ulla Thikki Thikki Pesa Malligapo Vaasam Konjam Kaathoda Veesa Uthu Uthu Paarka Nenjil Muthu Mutha Verka Putham Puthu Vaazhka Enna Unnodu Serka Ennodu Nee Unnodu Naan Ondrodu Naam Ondraagum Naal Ennodu Nee Unnodu Naan Ondraagum Naal Ennodu Nee Unnodu Naan Ondrodu Naam Ondraagum Naal Ennodu Nee Unnodu Naan Ondragum Naal Enna Solla Aethu Solla Kannodu Kanpesa Vaarthai Illa Ennennavo Ullukkulla Vella Sollama En Vekkam Thalla"},
    {id: '34', songName: "Idhazhin Oram", filePath: "songs/35.mp3", coverPath: "covers/35.jpeg", video:"lZORMUufA_Y", lyrics: "Idhazhin Oru Oram Siriththaai Anbe Nijamaai Ithu Pothum Siripaai Anbe En Naadiyai Silirkka Vaithaai En Iravellaam Velicham Thanthaai En Aan Garvam Maranthindru Un Munne Paniya Vaithaai Sollu Nee I Love You Neethaan En Kurunji Poo En Kadhal Endrum True Will Make Sure You Never Feel Go Oh Ellaam Maranthu Un Pinnaal Varuven Nee Sammathithaal Naan Nilavaiyum Tharuven Un Nizhal Tharai Padum Thooram Nadanthen Antha Nodiyaithaan Kavithayaai Varai Oh Penne En Kanne Senthene Vaa Munne En Uyirukkul Peyarai Vaithaai En Naadiyai Silirka Vaithaai En Iravellaam Velicham Thanthaai En Aan Garvam Maranthindru Un Munne Paniya Vaithaai Oh Penne En Kannae Senthene Vaa Munne En Uyirukkul Peyarai Vaithaai Oh Penne En Kanne Senthene Vaa Munne En Uyirukkul Peyarai Vaithaai Sollu Nee I Love You Neethaan En Kurunji Poo En Kadhal Endrum True Will Make Sure You Never Feel Go Sollu Nee I Love You Neethaan En Kurunji Poo En Kadhal Endrum True Will Make Sure You Never Feel Go"},
    {id: '35', songName: "Kanave Kanave", filePath: "songs/36.mp3", coverPath: "covers/36.jpeg", video:"MofM9B2NZpY", lyrics: "Mounamaana Maranam Ondru Uyirai Kondu Ponadhae Uyaramaana Kanavu Indru Tharaiyil Veezhnthu Ponadhey Thisaiyum Ponadhu Thimirum Ponadhu Thanimai Theeyile Vaadinen Nizhalum Ponadhu Nijamum Ponadhu Enakkul Ennaiye Thedinen Kanavae Kanavae Kalaivadheno Kanaakkal Kanamaai Karaivadheno Ninaive Ninaive Araivadheno Enadhu Ulagam Udaivadheno Kangal Rendum Neerile Meenai Pola Vaazhuthey Kadavulum Pen Idhayamum Irukkutha Ada illaiyaa Naanum Inge Valiyile Neeyum Ango Sirippile Kaatril Engum Thedinen Pesippona Vaarthaiyai Idhu Niyayamaa Manam Thaangumaa En Aasaigal Athu Paavamaa Kanavae Kanavae Kanaakkal Kanamaai Ninaive Ninaive Araivadheno Enadhu Ulagam Udaivadheno"},
    {id: '36', songName: "Naa Ready", filePath: "songs/37.mp3", coverPath: "covers/37.jpeg", video:"szvt1vD0Uug", lyrics: "Naa Ready Dhaan Varava Annan Naa Erangi Varava Thael Kodukku Singatha Seendaathapa Evan Thaduthum En Route u Maaraadhappa Na Ready Dhaan Varava Annan Naa Thaniya Varava Thara Nadungura Parai Adikanum Naa Aadathan Veral Idukula Theepandham Naa Yethathan Pathaathu Bottle Naa Kudikka Andala Konda Cheers Adikka Keda Vetti Kondanga Da Yenpasi Naa Thanikka Pogayala Aruvadikku Thayaarana Opponent a Kalaiyeduthu Thalavaliya Pokkipadhu Enga Thalayeluthu Aadadha Aatam Potta Katti Vachi Koni Le Katti Lorry Le Yethi Arththupoda Anupuduvom Factory Ku Dei Ella Blueprint Um Theriyum Mission Successful ah Mudiyum Idaye Vandha Unnayum Padayal Veppen Kolasammaikki Adhoda Aadu Sarayam Beedi Suruttu Gang La Illa Poyi Purattu Velayat Pola Vela Nadathum World Wide Link Ey Ella Oorum Namma Rules Uruvadhu Da Namma Tools Aththana Peru Asaivum Orae Mari Syncu Singles Illa Gumbal Sanda Gelichi Gelichi Kalachi Poiten Paththavachu Pogaya Utta Power Kick! Pogayala Pogayala Power Kick! Milaga Thatti Mutti Kuzhambulla Kothikudhu Paar Andha Kaal Azhagu Adi Dhadi Vettu Kuthu Engal Vettu Samayal Vara Ada Kalanthirukku Kaththi Palla Kaththi Enga Nna Kutha Kaathirukku Adhu Dha Kanakku Indha Kaththi Vera Ragam Vena Sketch’u Enakku Puridha Unakku Milli Ulla Ponaa Podhum Ghilli Vella Varuvan Da Milli Ulla Ponaa Podhum Ghilli Vella Varuvan Paar Oorukull Enakoru Pear Irukku Kettalae Adhirum Paar Unakku Poster Adi Annan Ready Kondadi Koluthanum Di Naa Ey Ann Varar Valivudu Annan Naa Erangi Varava Thael Kodukku Singatha Seendaathapa Evan Thaduthum En Route’u Maaraadhappa Naan Ready Dhaan Varava Annan Naa Thaniya Varava Thara Nadungura Parai Adikanum Naa Aadathan Veral Idukula Theepandham Naa Yethathan Pathaathu Bottle Naa Kudikka Andala Konda Cheers Adikka Keda Vetti Kondanga Da Yenpasi Naa Thanikka"},
    {id: '37', songName: "Nee Partha Vizhigal", filePath: "songs/38.mp3", coverPath: "covers/38.jpeg", video:"_IuJsaMqtqc", lyrics: "Nee Paartha Vizhigal Nee Paartha Nodigal Kettaalum Varumaa Ketkaatha Varamaa Idhu Pothuma Idhil Avasarama Innum Vendumaa Athil Nirainthiduma Naan Paartha Naal Nam Vasam Varuma Uyir Thanguma En Vizhigalil Muthal Vali Nijamadi Penne Tholaivinil Unnai Nizhavinil Kanden Nadamada Valiyadi Penne Varai Murai Illai Vathaikirai Ennai Methuvaga Nee Partha Vizhigal Nee Partha Nodigal Kettaalum Varummaa Kekaatha Varamaa Nizhal Tharum Ival Paarvai Vazhi Engum Ini Thevai Uyire Uyire Uyir Nee Than Endral Udane Varuvaai Udal Saagum Munnaal Annalidnri Kulir Veesum Idhu Enthan Sirai Vasam Ithil Nee Matum Vendum Penne Nijamadi Penne Tholaivinil Unnai Nizhavinil Kanden Nadamada Valiyadi Penne Varai Murai Illai Vathaikirai Ennai Methuvaga Nee Partha Vizhigal Nee Partha Nodigal Kettaalum Varummaa Ketkaatha Varamaa Idhu Pothuma Idhil Avasarama Innum Vendumaa Athil Nirainthiduma Naan Paartha Naal Nam Vasam Varuma Uyir Thanguma"},
    {id: '38', songName: "Ranjithame", filePath: "songs/39.mp3", coverPath: "covers/39.jpeg", video:"unQlCp-lL6I", lyrics: "Kattu Malli Katti Vachaa Vatta Karuppu Pottu Vachaa Sandhiranil Rendu Vachaa Saara Paambu Iduppa Vachaa Natchathira Thotti Vachaa Karumbu Kodu Nethi Vachaa Inji Vetti Kannam Vachaa Immathoondu Vetkam Vachaa Nethi Pottil Enna Thooki Pottu Pola Vachavale Sutthu Pottu Oore Paakka Kannu Pattu Vandhavale Thethu Pallu Orathula Uchu Kottum Nerathula Pattunu Pathiye Uchcha Kattam Thottavale Ranjithame Hey Ranjithame Hey Ranjithame Ranjithame Manasa Kalaikum Mandhirame Ranjithame Ranjithame Unna Udhadu Valikka Konjanume Adi Ranjithame Ranjithame Manasa Kalaikum Mandhirame Ranjithame Ranjithame Unna Udhadu Valikka Konjanume Vandhadhum Vandhadhum Vandhadhum Manasu Sathirame Sathirame Naan Nithira Nithira Nithira Kedukkum Sathirame Sathirame Kattu Malli Katti Vachaa Gala Galakka Pottu Vachaa Sandhiranil Rendu Vachaa Saara Paambu Iduppa Vachaa Vacha Pottil Enna Thooki Nethi Kamathi Pottu Vachavale Uchu Kottum Nerathakkula Uchcha Kattam Thottavale Ranjithame Hey Ranjithame Alangaara Alli Nelaa Aada Pottu Ninnaale Alungaadha Atha Maga Aada Vandhale Ada Kathu Vacha Mutham Anju Aaru Thandhale Mala Oothu Mooligaya Moocha Thandhale Onnaga Rendanga Eppa Thedhi Nappanga Moonaanga Naalanga Nalla Sedhi Nappanga Aamanaga Aamanaga Vaaranga Vaaranga Adi Sandhaname Sanjalame Muthu Petha Rathiname Ranjithame Hey Ranjithame Hey Ranjithame Ranjithame Manasa Kalaikum Mandhirame Ranjithame Ranjithame Unna Udhadu Valikka Konjanume Kattu Malli Katti Vachaa Gala Galakka Pottu Vachaa Sandhiranil Rendu Vachaa Saara Paambu Iduppa Vachaa Vacha Pottil Enna Thooki Nethi Kamathi Pottu Vachavale Uchu Kottum Nerathakkula Uchcha Kattam Thottavale Ranjithame Hey Ranjithame Hey Ranjithame Ranjithame Manasa Kalaikum Mandhirame Ranjithame Ranjithame Unna Udhadu Valikka Konjanume Ranjithame Ranjithame Manasa Kalaikum Mandhirame Ranjithame Ranjithame Unna Udhadu Valikka Konjanume Vandhadhum Vandhadhum Vandhadhum Manasu Sathirame Sathirame Naan Nithira Nithira Nithira Kedukkum Sathirame Sathirame Ranjithame Hey Ranjithame Hey Ranjithame Hey Ranjithame Hey Ranjithame"},
    {id: '39', songName: "Rowdy Baby", filePath: "songs/40.mp3", coverPath: "covers/40.jpeg", video:"x6Q7c9RyMzk", lyrics: "Heyy En Goli Sodaave En Kari Kozhambe Un Kutty Puppy Naan Take Me, Take Me Heyy En Silku Sattae Nee Weight u Kattae Love u Sotta Sotta Talk Me, Talk Me Aei My Dear Machann Nee Manasu Vechaa Namma Orasikkalamm Nenju Jigu Jigu Jaa Heyy My Dear Rani En Dream La Vaa Nee Namma Onnaa Seraa Fire Pathikiruchaa Raa Namma Beachu Pakkam Pothaam Oru Dappaang Kuthu Vesthaam Nee Ennudaiya Rowdy Baby Raa You re My Only Girlfriend u I Will Give You Poochend u We Will Make Us New Trend u Baby Poththam Vesthaam Rowdy Baby Girlfriend u Poochend u New Trend u Baby Rowdy Baby Ra Ra Ra Rowdy Baby Unnale Aei Mudachu My Hormone u Balance u Damage u Aei Kamakchi En Meenakshi Intha Maarikkum Unmela Kannachi One Plus One u Two Maamaa You Plus Me Three Maamaa Vaadi Jhansi Rani En Krishnaveni I ll Buy You Pony Aththa Otteenu Vaa Nee En Mandhiravadhi Nee Kedikku Kedi Naan Unnulla Paadhi Namma Semma Jodi Rowdy Baby Aei Rowdy Baby Rowdy Baby Rowdy Baby Rowdy Baby Rowdy Rowdy Rowdy Baby Rowdy Baby… Heyy En Goli Sodaave En Kari Kozhambe Un Kutty Puppy Naan Take Me, Take Me Heyy En Silku Sattae Nee Weight u Kattae Love u Sotta Sotta Talk Me, Talk Me My Dear Machann Nee Manasu Vechaa Namma Orasikkalamm Nenju Jigu Jigu Jaa Heyy My Dear Rani En Dream La Vaa Nee Namma Onnaa Seraa Fire Pathikiruchaa Raa Namma Beachu Pakkam Pothaam Oru Dappaang Kuthu Vesthaam Nee Ennudaiya Rowdy Baby Raa You re My Only Girlfriend u I Will Give You Poochend u We Will Make Us New Trend u Baby Rowdy Baby Rowdy Baby Rowdy Baby…"},
]
let songs_list = document.getElementsByClassName('songItemContainer')[0];
songs.forEach(element => {
    const { id, songName, filePath, coverPath } = element;
    let song = document.createElement('div');
    song.classList.add('songItem');
    song.innerHTML = `
    <img src="${coverPath}" alt="1">
        <span class="songName">${songName}</span>
        <span class="songlistplay"><span class="timestamp"><i id="${id}" class="fa-regular songItemPlay fa-circle-play fa-2x"></i></span></span>
    `;
    songs_list.appendChild(song);
});

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

//search data start

let search_result = document.getElementsByClassName('search_result')[0];
songs.forEach(element => {
    const { id, songName, filePath, coverPath, lyrics } = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = '#' + id;
    card.innerHTML = `
    <img src="${coverPath}" alt="">
        <div class="content">${songName}</div>
        <div class="lyrics">${lyrics}</div>
        <i id="${id}" class="fa-regular songItemPlay fa-circle-play fa-2x"></i>
    `;
    search_result.appendChild(card);
})

let input = document.getElementsByTagName('input')[0];
let voicesearch=document.querySelector("#voice-search");
let recg=new webkitSpeechRecognition();
voicesearch.addEventListener('click',()=>{
    recg.lang="en-GB";
    recg.addEventListener('result',(e)=>{
        input.value=e.results[0][0].transcript;
    })
    recg.addEventListener('speechend',()=>{
        recg.stop();
    })
    recg.start();
})

input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');
    for (let i = 0; i < items.length; i++) {
        let as = items[i].getElementsByClassName('content')[0];
        let as1 = items[i].getElementsByClassName('lyrics')[0];
        let text_value = as.textContent || as.innerText;
        let text_value1 = as1.textContent || as1.innerText;

        if (text_value.toUpperCase().indexOf(input_value) > -1 || text_value1.toUpperCase().indexOf(input_value) > -1) {
            items[i].style.display = "flex";
        } else {
            items[i].style.display = "none";
        }

        if (input.value == '') {
            search_result.style.display = "none";
        } else {
            search_result.style.display = "";
        }
    }
})

let volbar=document.getElementById('volumebar');
let volicon=document.getElementById('vol-icon');
audioElement.volume=volbar.value/100;
if(volbar.value==0){
    volicon.classList.remove('fa-volume-high','fa-volume-low');
    volicon.classList.add('fa-volume-xmark');
}else{
    if(volbar.value<50){
        volicon.classList.remove('fa-volume-high','fa-volume-xmark');
        volicon.classList.add('fa-volume-low');
    }else{
        volicon.classList.remove('fa-volume-low','fa-volume-xmark');
        volicon.classList.add('fa-volume-high');
    }
}
volbar.addEventListener('change',()=>{
    audioElement.volume=volbar.value/100;
    if(volbar.value==0){
        volicon.classList.remove('fa-volume-high','fa-volume-low');
        volicon.classList.add('fa-volume-xmark');
    }else{
        if(volbar.value<50){
            volicon.classList.remove('fa-volume-high','fa-volume-xmark');
            volicon.classList.add('fa-volume-low');
        }else{
            volicon.classList.remove('fa-volume-low','fa-volume-xmark');
            volicon.classList.add('fa-volume-high');
        }
    }
})

volicon.addEventListener('click',()=>{
    let vol1=audioElement.volume;
    if(vol1!=0){
        audioElement.volume=0;
        volbar.value=0;
        volicon.classList.remove('fa-volume-high','fa-volume-low');
        volicon.classList.add('fa-volume-xmark');
    }else{
        audioElement.volume=0.5;
        volbar.value=audioElement.volume*100;
        volicon.classList.remove('fa-volume-xmark');
        volicon.classList.add('fa-volume-high');
    }
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = parseInt(e.target.id);
        songIndex = index-30;
        console.log(audioElement.src);
        if (audioElement.src==`http://127.0.0.1:5500/songs/${songIndex+31}.mp3`){
            if(audioElement.paused){
                e.target.classList.remove('fa-circle-play');
                e.target.classList.add('fa-circle-pause');
                masterSongName.innerText = songs[songIndex].songName;
                gif.style.opacity = 1;
                title.innerText = songs[songIndex].songName;
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                if (audioElement.currentTime>=0){
                    audioElement.play();
                }
                let videosong=songs[songIndex].video;
                document.getElementById('videoquery').href=`https://www.youtube.com/watch?v=${videosong}`;
            }else{
                e.target.classList.remove('fa-circle-pause');
                e.target.classList.add('fa-circle-play');
                masterSongName.innerText = songs[songIndex].songName;
                title.innerText = songs[songIndex].songName;
                audioElement.pause();
                gif.style.opacity = 0;
                masterPlay.classList.remove('fa-circle-pause');
                masterPlay.classList.add('fa-circle-play');
            }
        }else{
            makeAllPlays();
            audioElement.src = `songs/${songIndex+31}.mp3`;
            audioElement.currentTime=0;
            audioElement.play();
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            masterSongName.innerText = songs[songIndex].songName;
            let videosong=songs[songIndex].video;
            document.getElementById('videoquery').href=`https://www.youtube.com/watch?v=${videosong}`;
            gif.style.opacity = 1;
            title.innerText = songs[songIndex].songName;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
        }
    })
})
//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        makeAllPlays();
        audioElement.play();
        let videosong=songs[songIndex].video;
        document.getElementById('videoquery').href=`https://www.youtube.com/watch?v=${videosong}`;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        title.innerText = songs[songIndex].songName;
        masterSongName.innerText = songs[songIndex].songName;
    }
    else{
        makeAllPlays();
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
        title.innerText = songs[songIndex].songName;
        masterSongName.innerText = songs[songIndex].songName;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    let curr = audioElement.currentTime;
    let dur = audioElement.duration;
    let min = Math.floor(dur/60);
    let sec = Math.floor(dur%60);
    if (sec < 10){
        sec = `0${sec}`;
    }
    let min1 = Math.floor(curr/60);
    let sec1 = Math.floor(curr%60);
    if (sec1 < 10){
        sec1 = `0${sec1}`;
    }
    document.getElementById('end').innerText=`${min1}:${sec1}/${min}:${sec}`;
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
    if (progress==100)
    {
        makeAllPlays();
        if (songIndex!=9)
        {
            songIndex+=1;
        }
        else
        {
            songIndex=0;
        }
        audioElement.src = `songs/${songIndex+31}.mp3`;
        let videosong=songs[songIndex].video;
        document.getElementById('videoquery').href=`https://www.youtube.com/watch?v=${videosong}`;
        masterSongName.innerText = songs[songIndex].songName;
        title.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    makeAllPlays();
    audioElement.src = `songs/${songIndex+31}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    title.innerText = songs[songIndex].songName;
    let videosong=songs[songIndex].video;
    document.getElementById('videoquery').href=`https://www.youtube.com/watch?v=${videosong}`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex==0){
        songIndex = 9;
    }
    else{
        songIndex -= 1;
    }
    makeAllPlays();
    audioElement.src = `songs/${songIndex+31}.mp3`;
    let videosong=songs[songIndex].video;
    document.getElementById('videoquery').href=`https://www.youtube.com/watch?v=${videosong}`;
    masterSongName.innerText = songs[songIndex].songName;
    title.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('backward').addEventListener('click',()=>{
    audioElement.playbackRate-=0.25;
})

document.getElementById('forward').addEventListener('click',()=>{
    audioElement.playbackRate+=0.25;
})

let searchBox = document.querySelector(".searchbox"),
searchIcon = document.querySelector(".icon"),
closeIcon = document.querySelector(".close-icon");
let search_item=search_result.getElementsByTagName('a');
searchIcon.addEventListener("click", () => {
    searchBox.classList.add("open");
    document.getElementById('text').placeholder="Search Music...";
    document.getElementById('search').style.width="100%";
    for (let i = 0; i < search_item.length; i++){
        if (document.getElementById('text').value.length==0){
            search_item[i].style.display="none";
        }else{
            search_item[i].style.display="flex";
        }
    }
})
closeIcon.addEventListener("click", () => {
    searchBox.classList.remove("open");
    document.getElementById('text').placeholder="";
    document.getElementById('search').style.width="23%";
    for (let i = 0; i < search_item.length; i++){
        search_item[i].style.display="none";
    }
})