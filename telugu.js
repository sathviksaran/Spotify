console.log("Welcome to Spotify")

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let title = document.getElementById('title');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {id: '0', songName: "Mastaaru Mastaaru", filePath: "songs/1.mp3", coverPath: "covers/1.jpg", video:"AXSm49NGkg8", lyrics: "Seetakalam Manasu Nee Manasuna Chotadiginde Sitakumalle Neetho Adugese Maatadiginde Neeku Nuvve Gundelone Annadantha Vinnaale Anthakanna Mundugaane Yendhuko Avunannale Inkapaina Neeku Naaku Prema Pathale Mastaaru Mastaaru Naa Manasunu Gelicharu Accham Ne Kalagannatte Naa Pakkana Nilicharu Mastaru Mastaru Naa Manasunu Gelicharu Accham Ne Kalagannatte Naa Pakkana Nilicharu Yevaipu Ponive Nannu Kasthaina Yekanga Kanupapa Motham Nuvvena Ishtanga Ye Chota Nuvvem Chestunna Chustunna Vandesi Maarkulu Vestunna Gundepai Ala Nallapusalaa Vandha Yelu Andhanga Ninnu Moyalantuna Onti Perutho Inti Peruga Jantaga Ninu Rayalantunna Mastaru Mastaru Naa Manasunu Gelicharu Accham Ne Kalagannatte Naa Pakkana Nilicharu Mastaru Mastaru Naa Manasunu Gelicharu Accham Ne Kalagannatte Naa Pakkana Nilicharu Seetakalam Manasu Nee Manasuna Chotadiginde Sitakumalle Neetho Adugese Maatadiginde Neeku Nuvve Gundelone Annadantha Vinnaale Anthakanna Mundugaane Yendhuko Avunannale Inkapaina Neeku Naaku Prema Pathale Accham Ne Kalagannatte Naa Pakkana Nilicharu Mastaaru Mastaaru Naa Manasunu Gelicharu"},
    {id: '1', songName: "Nee Paata Madhuram", filePath: "songs/2.mp3", coverPath: "covers/2.jpg", video:"NL4Ue1Z3MuQ", lyrics: "Nee paata madhuram Nee maata madhuram Yenaati varamo Ye janma phalamoo Intha mohama adhi avasarama Inka praanama idhi paravasama Naa paata lo anthati mahima Koncham aaguma naa manasulo alajadi Nijamade pilla telipithe mallaa Nidhuralo vinnaa nee pata Manasuna pilla madhuvolikinche Vadalake nannu ee poota Nee paata madhuram Nee maata madhuram Enaati varamoo Ye janma phalamoo Oka kshanam kalisindi Marukshanam gelichindi Vurikee vurikee vayase needantaa Ubike vodiloo vodagaali ee putaa Thelisindii tholipaatam Adi edo gunapaatam Ika nee maate manthram pilla Nijamade pilla thelipithe malla Niduralo vinna oka paata Manasuna pilla madhuvolikinchi Vodalake ila prathi puta Nee paata madhuram Nee maata madhuram Oo enaati varamoo Ye janma phalamoo Intha mohama adi avasarama Inka pranama ide paravasama Naa paata lo anthati Mahima koncham aaguma"},
    {id: '2', songName: "Vikram Title track", filePath: "songs/3.mp3", coverPath: "covers/3.jpg", video:"w7shUeR3-Go", lyrics: "Kaalame Kampinchina Marala Vachhenu Nayakudu Okade Iddaru Kadaa Ramudu Mariyu Rakshasudu Tharamulu Paade Charithamu Veedu Kadhanam Pogide Kathanam Veedu Palu Gaayaala Deham Veedu Ranageyanga Gelupauthaadu Ika Modaledadhaama Thakita Thak Dhim Thak Dhim Thak Dhim Thakita Thak Dhim Thak Dhim Thak Dhim Thakita Thak Dhim Thak Dhim Thak Dhim Thakita Thak Dhim Thak Dhim Thak Dhim HaHaHaa Haa Vikram, Ho… Vikram, Ho Vikram, Ho… Vikram, Ho Vikram… Vikram Vikram, Ho… Vikram, Ho Vikram, Ho… Vikram, Ho Vikram… Vikram Ho Ho Ho Ho Kaalame Kampinchina Marala Vachhenu Nayakudu Okade Iddaru Kadaa Ramudu Mariyu Rakshasudu Ithado Ananam Edhalo Jwalanam Gathame Sasiram Brathuko Samaram Gaganam Cheelche Vidhyuthgaatham Shikharam Thaanai Niliche Pantham Poraadatame Thana Siddhaantham Longadu Veedu Yamudiki Saitham Ika Modaledadhaama Thakita Thak Dheem Tha Thak Dheem Thak Dheem Thakita Thak Dheem Thak Dheem Thak Dheem Thakita Thak Dheem Thak Dheem Thak Dheem Thakita Thak Dheem Thak Dheem Thak Dheem HaHaHaa Haa Vikram, Ho… Vikram, Ho Vikram, Ho… Vikram, Ho Vikram… Vikram Vikram, Ho… Vikram, Ho Vikram, Ho… Vikram, Ho Vikram… Vikram"},
    {id: '3', songName: "Naatu Naatu", filePath: "songs/4.mp3", coverPath: "covers/4.jpg", video:"OsU0CGZoV8E", lyrics: "Polamgattu Dhummulona Potlagitta Dhookinattu Poleramma Jataraalo Potharaju Ooginattu Kirruseppulu Esukoni Karrasamu Sesianattu Marrisettu Needalona Kurragumpu Koodinattu Yerrajonna Rottelona Mirapathokku Kalipinattu Naa Paata Soodu Naa Paata Soodu Naa Paata Soodu Naatu Naatu Naatu Naatu Naatu Naatu Veera Naatu Naatu Naatu Naatu Naatu Naatu Naatu Oora Naatu Naatu Naatu Naatu Pachi Mirapalaga Picha Naatu Naatu Naatu Naatu Vichhu Katthi Laaga Verri Naatu Gundeladhiri Poyela Dandanakara Moginattu Sevulu Sillu Padelaga Keesu Pitta Koosinattu Yelu Sitikalesela Yavvaaram Saaginattu Kaalu Sindhu Thokkela Dhummaram Reginattu Vollu Sematapattela Veerangam Sesinattu Naa Paata Soodu Naa Paata Soodu Naa Paata Soodu Naatu Naatu Naatu Naatu Naatu Naatu Veera Naatu Naatu Naatu Naatu Naatu Naatu Naatu Oora Naatu Naatu Naatu Naatu Gadda Paralaga Chedda Naatu Naatu Naatu Naatu Ukkapotha Laaga Thikha Naatu Dugu Dugu Dugu Hey Hey Dugu Dugu Dugu Hey Hey Dugu Dugu Dugu Hey Hey Bhoomi Dhaddharillela Vonttiloni Ragathamanta Rankelesi Yegirela Yeseyro Yakayeki Naatu Naatu Naatu Oho Yes aa Arey Dhummu Dhummu Dhulipe Laa Lopalunna Paanamanta Dumuku Dumuk Laadela Dhookeyro Sarasari Naatu Naatu Naatu Naatu Dhinka Chika Hey Hey Naatu Naatu Naatu Naatu Naatu Naatu Naatu Hey Adhi Kanakara Kanakara Hey Hey Hey Kanakara Nakara Nakara Nakara Nakara Nakara Nakara"},
    {id: '4', songName: "Buttabomma", filePath: "songs/5.mp3", coverPath: "covers/5.jpg", video:"2mDCVzruYzQ", lyrics: "Inthakanna manchi polikedhi Naaku thattaledhu kaani ammu Ee love anedhi bubble gum-u Antukunnadhante podhi nammu Mundununchi andharanna maategaani Mallo antunnane ammu Idhi cheppakunda vacche thummu Premanaapalevu nannu nammu Ettaga anae yedhuru choopuki Thaginatugaa nuvu badhulu chebithive Arey devudaa idhendhananentha lopate Pillada anta dhaggarai Nannu cheradeesthive Butta bomma butta bomma Nannu suttukuntive Zindagike atta bommai Janta kattukuntive Butta bomma butta bomma Nannu suttukuntive Zindagike atta bommai Janta kattukuntive Multiplex loni audience laaga Mounamgunna gaani ammu Lona dandanaka jariginde nammu Dhimma diriginaade mind sim-u Raajula kaalam kaadhu Rathamu gurram levu Addham mundhara naatho nene Yuddham chesthaante Gaajula chethulu jaapi Deggarakocchina nuvvu Chempallo chitikesi Chakkaravarthini chesaave Chinnaga chinuku thumparadigithe Kundapothagaa toofan thesthive Maataga o malle puvvunadigithe Mootaga poola thotagaa Painochchi padithive Butta bomma butta bomma Nannu suttukuntive Zindagike atta bommai Janta kattukuntive Veli ninda nannu theesi Bottu pettukuntive Kaali kindhi puvvu nenu Neththinettu kuntive Inthakanna manchi polikedhi Naaku thattaledhu kaani ammu Ee love anedhi bubble gum-u Antukunnadhante podhi nammu Mundununchi andharanna maategaani Mallo antunnane ammu Idhi cheppakunda vacche thummu Premanaapalevu nannu nammu"},
    {id: '5', songName: "Maate Vinadhuga", filePath: "songs/6.mp3", coverPath: "covers/6.jpg", video:"Q2PO_wiicNw", lyrics: "Maate vinadhuga maate vinadhuga Maate vinadhuga maate vinadhuga Perige vegame tagile meghame Asale aagadu ee paruge.. Okate gamyame dhaarulu verule Payaname nee panile Arere..pudutu modale.. Malupu kudupu neede Aa addame choopenu bratukulalo teereyyy... Aa wiper thudiche kaare kannireyy... Maate vinadhuga vinadhuga vinadhuga Vegam digaduga digaduga vegam.. Maate vinadhuga vinadhuga vinadhuga Vegam vegam vegam.. Maate vinadhuga vinadhuga vinadhuga Vegam digaduga digaduga vegam Maate vinadhuga vinadhuga vinadhuga Vegam vegam vegam Perige vegame tagile meghame Asale aagadu ee paruge Okate gamyame daarulu verule Payaname nee panile Arere pudutu modale Malupu kudupu neede Aa addame choopenu bratukulalo teere Aa wipare tudiche kaare kanneere... Chinna chinna chinna navvule Vedhakadame..brathukante Konni andulona panchava migulunte hoo..hoo Needhane snehame nee manassu choopuraa Needhane veedakaa saayaanne nerpuraa Kashtalenni raani jebe khaali kaani Naduchunule bandi naduchunule Daare maariponi oore marchiponi Veedakule srama viduvakule Thadi aare yedapai musirenu megham Manasanta thadisela..kurise vaanaa Maate vinadhuga vinadhuga vinadhuga Vegam digaduga digaduga vegam Maate vinadhuga vinadhuga vinadhuga Vegam vegam vegam Maate vinadhuga vinadhuga vinadhuga Vegam digaduga digaduga vegam Maate vinadhuga vinadhuga vinadhuga Vegam vegam vegam Perige vegame tagile meghame Asale aagadu ee paruge Okate gamyame daarulu verule Payaname nee panile Arere pudutu modale Malupu kudupu neede Marujanmatho parichayam Anthalaa paravasam Rangu chinukule gundepai raalenaa."},
    {id: '6', songName: "Top Lesi Poddi", filePath: "songs/7.mp3", coverPath: "covers/7.jpg", video:"YAscOYMTgTs", lyrics: "Ammayi manasulo abbai duresi kitha kithale pettesthe emaithadi Manchi beatoshtadi picha paatosthadi hoy hoy Abbai manasune ammai lagesi thalagadala nokkesthe emaithadi Masthu massosthadi best uposthadi hoy hoy hoy Raaye raaye naa rakasi nuvve paitesi atta dopesthe Top lesipodde podde po po Top lesipodde podde po po Raaro raaro naa sivakasi aggi raajesi siggu pelchesthe Top lesipodde podde po po Top lesipodde podde po po Chettu meeda mangola nuvventha sakkagunnave Hey chalk lanti pillade entha sharpgunnade Chalkochi mango kosthe Top lesipodde kanne kottavante Top lesipodde mudde pettavante Top lesipodde cheyye pattavante Top top Top lechipoddiro., Ammayi manasulo abbai duresi kitha kithale pettesthe emaithadi Manchi beatoshtadi picha paatosthadi Summerlona lassyla winterlona coffeela Uristhunnave patti lagesthunnave pilla ponge ponge purila Ramu bheemu thammulla jackie chan alludla Mudduosthunnave vachi guddesthunnave Ammo breakulleni lorrylla Raaye raaye naa rakasi atta navvesi gunde thavvesthe Raaro raaro nuv chitikesi shirt madathesi coller egaresthe Top lesipodde oni kattavante Top lesipodde poole pettavante Top lesipodde eele kottavante Top top top lesipoddiro Ko ko kothikemo kobbarla pilladiki burgerla Nachesthunnave kallokochesthunnave arre kotha film trailerlaa Policeki roudyla adollaki chaadyla Bookai poyave naaku settaipoyave soda buddiloni golila Raaye raaye naa rakasi gollu korikesi ollu virichesthe Raaro raaro nuv itukesi pant marchesi lungi kattesthe Top lesipodde katukettavante Top lesipodde gajulesavante Top lesipodde gode dookavante Top lesipodde doore kottavante Top lesipodde Top lesipodde Top top top Top lesipodde"},
    {id: '7', songName: "Megham Karigena", filePath: "songs/8.mp3", coverPath: "covers/8.jpg", video:"0IdqwA2GXgY", lyrics: "Megham Karigena Pillo Pillai Vaane Kurisena Pillo Pillai Dheham Tadisena Pillo Pillai Jwaale Anigene Pillo Pillai Kannultho Paadithe Nenemi Cheyne Confusion Ayyane Lolopale Marala Marala Ninu Kadhe Perige Perige Chanuvidhe Manasu Mariche Gathamune Nee Meni Thagilithe Marala Marala Perige Perige Manasu Mariche Nee Meni Thagilithe Megham Karigena Pillo Pillai Vaane Kurisena Pillo Pillai Mattipoola Vaasanedho Nannu Thaakene Mattinemo Bommalaaga Prema Maarchene Hey, Ninnu Koncham Nannu Koncham Gunde Vintadhe Koncham Koncham Kottukuntu Aaduthuntadhe Naaloni Baadhalanni Gaalilone Aavirai Poyene Paadhamellu Chotulanni Naa Daarule Innaallu Moosi Unna Thalapulanni Okkasaari Terichene Thelipona Pakshilaaga Aa Ningine Kannultho Paadithe Nenemi Cheyne Confusion-ayyane Lolopale Marala Marala Ninu Kadhe Perige Perige Chanuvidhe Manasu Mariche Gathamune Nee Meni Thagilithe Marala Marala Perige Perige Manasu Mariche Nee Meni Thagilithe Megham Karigena Pillo Pillai Vaane Kurisena Pillo Pillai Deham Tadisena Jwaale Anigene"},
    {id: '8', songName: "Po Pove Yekantham", filePath: "songs/9.mp3", coverPath: "covers/9.jpg", video:"gPv0hztQBS4", lyrics: "Po.. pove ekantham ekantham Naa rani na sontham Cherukundhi kala nindu poomasam la Chiguru thodiganila kottha chirunavvula Lala lala la o..ooo.. hmm... naana nana nana Andham o... sontham lala lala la manase hmm... naana nananana Po.. pove ekantham.. ekantham Naa rani na sontham.. naa sontham ye.. ye Poomasamla naavaipe ra raave kala Ye thodu leka naligindhi samayam Nee needa thagilaake veligindhi hrudayam Nitturpu segale gatha kaala gamanam Odharpu panchindi nee shwasa pavanam Yadhane thadipe chinnari chinuka Thadisa murisa ika chaalanaka Ninu thaaku gaali naapaina vaali Ammalle paadindhi andhaala laali Lala lala la o..oo.. hmm...naana nananana Andham lala lala lalala sontham o.oo.. manase hmm... nana nana nanana Po.. pove ekantham.. ekantham Naa rani na sontham... naa sontham Cherukundhi kala nindu poomasam la Chiguru thodiganila kottha chirunavvula Lala lala lalala... Andham sontham manase arey nana nana nanane.."},
    {id: '9', songName: "Chiguraku Chatu Chilaka", filePath: "songs/10.mp3", coverPath: "/covers/10.jpg", video:"ZmCAO4kDrqI", lyrics: "Chiguraaku Chaatu Chilaka… Ee Alajadi Premegaa Alavaaru Ledhu Ganaka… Madhi Suluvuga Nammadhugaa Chiguraaku Chaatu Chilaka… Thanu Nadavadha Dheemaagaa Anukoni Dhaari Ganaka… Ee Thikamaka Thappadhugaa… Thanu Koodaa Naalaagaa… ANukunte Melegaa Ayithe Adhi Thelandidhe… Adugu Padadhugaa… Aa Sarikotthaga Naa Vankaa… Choosthundee Chitramgaa… Emaindho Spashtamgaa… Bayata Padadhugaa… Chiguraaku Chaatu Chilaka… Ee Alajadi Premegaa Alavaaru Ledhu Ganaka… Madhi Suluvuga Nammadhugaa Cheppaku Antoo… Cheppamantoo Chercha Thelenaa… Thappanukuntoo THappadhantoo Tharkamaagenaa… Sangati Choosthoo… Jaali Vesthu Kadhalalekunnaa… Thelani Guttu… Thene Pattu Kadhapalekunnaa… Onike Naa Pedhavullo… Thonike Thadipilupedho… Naake Sarigaa Inkaa Theliyakunnadhee… Ee Thanalo Thanu Edhedho… Gonigi Aa Kaburedho… Aa Vainam Mounamlo… Munigi Unnadhi… Chiguraaku Chaatu Chilaka… Ee Alajadi Premegaa Anukoni Dhaari Ganaka… Ee Thikamaka Thappadhugaa… Ekkadinuncho Madhuragaanam… Madhini Meetindhi Ikkadinunche Nee Prayaanam… Modhalu Antondhee… Ee Galagala Veeche Pillagaali Endhukaaagindhi… Kompalu Munche Thofaanochhe Soochanemo Idhee… Ee Vere Edho Lokam… Chere Oohala Vegam Edho Thiyyani Maikam Penchuthunnadhee.. Ee Dhaare Theliyani Dhooram… Theere Thelapani Theeram Thanalo Kalavaramedho Reputhunnadhi…"},
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
        songIndex = index;
        console.log(audioElement.src);
        if (audioElement.src==`http://127.0.0.1:5500/songs/${songIndex+1}.mp3`){
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
            audioElement.src = `songs/${songIndex+1}.mp3`;
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
        audioElement.src = `songs/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/${songIndex+1}.mp3`;
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
    audioElement.src = `songs/${songIndex+1}.mp3`;
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