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
    {id: '3', songName: "Naatu Naatu", filePath: "songs/4.mp3", coverPath: "covers/4.jpg", video:"OsU0CGZoV8E", lyrics: ""},
    {id: '4', songName: "Buttabomma", filePath: "songs/5.mp3", coverPath: "covers/5.jpg", video:"2mDCVzruYzQ", lyrics: ""},
    {id: '5', songName: "Maate Vinadhuga", filePath: "songs/6.mp3", coverPath: "covers/6.jpg", video:"Q2PO_wiicNw", lyrics: ""},
    {id: '6', songName: "Top Lesi Poddi", filePath: "songs/7.mp3", coverPath: "covers/7.jpg", video:"YAscOYMTgTs", lyrics: ""},
    {id: '7', songName: "Megham Karigena", filePath: "songs/8.mp3", coverPath: "covers/8.jpg", video:"0IdqwA2GXgY", lyrics: ""},
    {id: '8', songName: "Po Pove Yekantham", filePath: "songs/9.mp3", coverPath: "covers/9.jpg", video:"gPv0hztQBS4", lyrics: ""},
    {id: '9', songName: "Chiguraku Chatu Chilaka", filePath: "songs/10.mp3", coverPath: "/covers/10.jpg", video:"ZmCAO4kDrqI", lyrics: ""},
    {id: '10', songName: "Your Eyes", filePath: "songs/11.mp3", coverPath: "covers/11.jpg", video:"RzSIDoA1ZDw", lyrics: "I Don't Believe In Soulmates, But Teri Nazaron Ne Dil Ka Kiya Jo Hashar, Asar Ye Hua Ab Inamen Hee Doob Ke Ho Jaanoon Paar, Yahi Hai Dua Teri Nazaron Ne Dil . Yeah, Your Eyes Got My Heart Falling For You You're Messing With My Heart And I Still Wanna Love You I Wanna Spend My Life Drowning In Your Eyes It's My Only Prayer Your Eyes Got My Heart Falling For You You're Messing With My Heart And I Still Wanna Love You I Wanna Spend My Life Drowning In Your Eyes It's My Only Prayer, Yeah"},
    {id: '11', songName: "Play Date", filePath: "songs/12.mp3", coverPath: "covers/12.jpeg", video:"9jbwtx1-tw0", lyrics: "You call me on the telephone, you feel so far away You tell me to come over, there's some games you want to play I'm walking to your house, nobody's home Just me and you and you and me alone We're just playing hide and seek It's getting hard to breathe under the sheets with you I don't want to play no games I'm tired of always chasing, chasing after you I don't give a fuck about you anyways Whoever said I gave a shit 'bout you? You never share your toys or communicate I guess I'm just a play date to you Wake up in your bedroom and there's nothing left to say When I try to talk you're always playing board games I wish I had monopoly over your mind I wish I didn't care all the time We're just playing hide and seek It's getting hard to breathe under the sheets with you I don't want to play no games I'm tired of always chasing, chasing after you I don't give a fuck about you anyways Whoever said I gave a shit 'bout you? You never share your toys or communicate I guess I'm just a play date to you Ring around the rosy I never know, I never know what you need Ring around the rosy, I want to give you, want to give you What you need I don't give a fuck about you anyways Whoever said I gave a shit 'bout you? You never share your toys or communicate I guess I'm just a play date to you You know I give a fuck about you everyday Guess it's time that I tell you the truth If I share my toys, will you let me stay? Don't want to leave this play date with you"},
    {id: '12', songName: "SaiRat Zaale ji", filePath: "songs/13.mp3", coverPath: "covers/13.jpg", video:"AQ-P5RR7r40", lyrics: "alguj vaaj nabhaat bhaltach zhalay aaj algad aali manaat pahilach tarani hi laaj hoo.. aga zananal kalajamandi an hatamandi haath aal ji sairat zala ji.. sairat zala ji.. sairat zala ji.. badlun gel ya saar pirticha sutalaya vaar allad bhambhwale yaar billori paakharu nyaar aal mannatal.. ya whatawarti an hatamandi haat aal ji sairat zala ji.. sairat zala ji.. sairat zala ji.. kavalya pannat hya saavlya unhaat hya bavlya manat hya bharal..bharal.. tuzya ya manamandi ghumataay vaarya mandi sur sanaicha raaya sajal rangal man haldin raani rangal saral he jagnyach jhuran saral bhinal najren ag dhadadal gaat aal ji sairat zala ji.. sairat zala ji.. sairat zala ji.. aprit ghadlaya sapaan he padlaya galyamandi sajalaya doral..doral.. saata janmach naat rujalaya kaaljat tula r devagat pujal rujala bij pritich sajani rujal bhijal man pirmana purat bhijal saral man maarun jagan saral haral hya pirmala samad haral kadaal paavsamandi an abhalal yaat aal ji sairat zala ji.. sairat zala ji.. sairat zala ji.."},
    {id: '13', songName: "Shikhayat", filePath: "songs/14.mp3", coverPath: "covers/14.jpg", video:"G-VGi8FodFs", lyrics: "Kisi Ki Yaad Mein Shaamein Guzaarne Ke Liye Kaleja Chahiye Khud Ko Maarne Ke Liye Ke Ghaat Maut Ke Har Din Utarna Padta Hai Yeh Ishq Dil Mein Meri Jaan Utaarne Ke Liye Suna Hai Ke Unko Shikayat Bahut Hai Suna Hai Ke Unko Shikayat Bahut Hai Toh Phir Unko Humse Mohabbat Bahut Hai Suna Hai Ke Woh Tod Dete Hai Dil Toh Humein Tootne Ki Bhi Aadat Bahut Hai Suna Hai Ke Unko Shikayat Bahut Hai Nazar Bharke Woh Dekhte Bhi Nahi Hai Humare Liye Sochte Bhi Nahi Hai Nahi Hai Nahi Sochte Bhi Nahi Hai Guzarte Hain Hum Roz Pehlu Se Unke Magar Woh Humein Rokte Bhi Nahi Hai Haan Rokte Bhi Nahi Hai Haan Haan Rokte Bhi Nahi Hai Suna Hai Ke Nafrat Woh Karte Hai Humse Humein Unki Nafrat Se Raahat Bahut Hai Suna Hai Ke Unko Shikayat Bahut Hai Suna Hai Ke Unko Shikayat Bahut Hai Shehar Chahe Jeewan Ka Veeran Kar Do Magar Dekh Kar Humko Hairaan Kar Do Bharam Aaj Bhi Hai Wafaon Ka Humko Ijaazat Hai Jaana Khataon Ki Tumko Khata Par Bhi Unki Khafa Hum Nahi Hai Kisi Haal Mein Bhi Juda Hum Nahi Hai Nahi Hai Nahi Haan Juda Hum Nahi Hai Woh Ilzaam Jitne Bhi Chahe Laga Le Wafadaar Hain Bewafa Hum Nahi Hai Haan Haan Bewafa Hum Nahi Hai Haan Haan Bewafa Hum Nahi Hai Suna Hai Ke Woh Bhool Jaate Hai Milkar Humein Unki Yaadon Ki Daulat Bahut Hai Suna Hai Ke Unko Shikayat Bahut Hai Suna Hai Suna Hai Shikayat Bahut Hai Haan Ji Haan Ji Suna Hai Mohabbat Bahut Hai Haan Haan Unki Nafrat Se Raahat Bahut Hai Humein Tootne Ki Bhi Aadat Bahut Hai Shikayat Mohabbat Haan Raahat Bahut Hai Humein Unki Yaadon Ki Daulat Bahut Hai Suna Hai Suna Haan Haan Humne Suna Hai Suna Suna Suna Hai Suna Hai Ke Unko Shikayat Bahut Hai"},
    {id: '14', songName: "Love Story", filePath: "songs/15.mp3", coverPath: "covers/15.jpg", video:"8xg3vE8Ie_E", lyrics: "We were both young when I first saw you I close my eyes and the flashback starts I'm standin' there On a balcony in summer air See the lights, see the party, the ball gowns See you make your way through the crowd And say, \"Hello\" Little did I know That you were Romeo, you were throwin' pebbles And my daddy said, \"Stay away from Juliet\" And I was cryin' on the staircase Beggin' you, \"Please don't go, \" and I said Romeo, take me somewhere we can be alone I'll be waiting, all there's left to do is run You'll be the prince and I'll be the princess It's a love story, baby, just say, \"Yes\" So I sneak out to the garden to see you We keep quiet, 'cause we're dead if they knew So close your eyes Escape this town for a little while, oh oh 'Cause you were Romeo, I was a scarlet letter And my daddy said, \"Stay away from Juliet\" But you were everything to me I was beggin' you, \"Please don't go, \" and I said Romeo, take me somewhere we can be alone I'll be waiting, all there's left to do is run You'll be the prince and I'll be the princess It's a love story, baby, just say, \"Yes\" Romeo, save me, they're tryna tell me how to feel This love is difficult, but it's real Don't be afraid, we'll make it out of this mess It's a love story, baby, just say, \"Yes\" Oh, oh I got tired of waiting Wonderin' if you were ever comin' around My faith in you was fading When I met you on the outskirts of town, and I said Romeo, save me, I've been feeling so alone I keep waiting for you, but you never come Is this in my head? I don't know what to think He knelt to the ground and pulled out a ring And said, \"Marry me, Juliet You'll never have to be alone I love you and that's all I really know I talked to your dad, go pick out a white dress It's a love story, baby, just say, \"Yes\" Oh, oh, oh Oh, oh, oh, oh 'Cause we were both young when I first saw you"},
    {id: '15', songName: "Day Dreamin", filePath: "songs/16.mp3", coverPath: "covers/16.jpg", video:"klDwy082mNk", lyrics: "You walked in Caught my attention I've never seen A man with so much dimension It's the way you walk The way you talk The way you make me feel inside It's in your smile It's in your eyes I don't wanna wait for tonight So I'm daydreamin' With my chin in the palm of my hands About you You And only you Got me Daydreaming, with my chin in the palm of my hands About you You And only you For you oh oh oh For you oh oh oh For you oh oh oh For you oh oh Now I can't wait To hold you in my arms I know I was made for you I'm in love with all your charm It's the way you walk The way you talk The way you make me feel inside It's in your smile It's in your eyes I don't wanna wait for tonight So I'm daydreamin' With my chin in the palm of my hands About you You And only you Got me Daydreaming, with my chin in the palm of my hands About you You And only you But I want you Got to have you And I need you Like I never have loved you before Oh I want you Ooh I need you Got to have you Like I never have loved you before So I'm daydreamin' With my chin in the palm of my hands About you You And only you Got me Daydreaming, with my chin in the palm of my hands About you You And only you For you oh oh oh For you oh oh oh For you oh oh oh For you oh oh"},
    {id: '16', songName: "Tera Chehra", filePath: "songs/17.mp3", coverPath: "covers/17.jpeg", video:"i6fuIGIzaAs", lyrics: "Meri bechainiyo ko chain mill jaye Tera chehra jab nazar aaye Tera chehra jab nazar aaye Mere diwanepan ko sabra mill jaaye Tera chehra jab nazar aaye Zikra tumhara jab-jab hota hai Dekho na aakhon se Bhiga bhiga pyar beh jata hai Meri tanhaiyo ko noor mil jaye Tera chehra jab nazar aaye Tera chehra jab nazar aaye Main raat din yeh dua karoon Tere liye main jiyoon maroon Chaaro pehar tujhe dekha karoon Mera jahan yeh tujhpe fana karoon Zikra tumhara jab-jab hota hai Dekho na hotho pe tera ehsas reh jata hai Mere har raste ko manzil mill jaye Tera chehra jab nazar aaye Tera chehra jab nazar aaye Berang hawayein mujhe na jane De gayi sada kyun abhi abhi Hai sarfaroshi yeh ashiqui bhi Jayegi jaan meri ismein kabhi Zikra tumhara jab-jab hota hai Dekho na har lamha teri dastan Keh jata hai Meri har ik tadap ko sukun mil jaye Tera chehra jab nazar aaye Tera chehra jab nazar aaye"},
    {id: '17', songName: "Jab Saiyaan", filePath: "songs/18.mp3", coverPath: "covers/18.jpeg", video:"jJLP6P5QaGs", lyrics: "Jab Saiyan Aaye Sham Ko Toh Lag Gaye Chand Mere Naam Ko Jab Saiyan Aaye Sham Ko Toh Lag Gaye Chand Mere Naam Ko Sar Pe Rakh Ke Nach Phiri Main Har Jalte Hue Ilzaam Ko Jab Saiyaan Aaye Sham Ko Toh Lag Gaye Chand Mere Naam Ko Deewaron Dar Chaukhat Vaukhat Ban Gaye Hain Sab Saheli Yeh Kuchh Puchhe Woh Kuchh Puchhe Kitne Jawab Doon Main Akeli Hazaron Kam Mil Gaye Hain Yun Baithe Bithaye Is Nakaam Ko Jab Saiyaan Aaye Sham Ko Toh Lag Gaye Chand Mere Naam Ko Khud Ko Dekhne Tak Ki Bhi Fursat Mujhko Nahi Milti Unke Ishq Ke Noor Ke Aage Shamma Nahi Jalti Khud Ko Dekhne Tak Ki Bhi Fursat Mujhko Nahi Milti Unke Ishq Ke Noor Ke Aage Shamma Nahi Jalti Lakhon Naaz Lag Gaye Hain Phir Guroor Ke Is Badnaam Ko Jab Saiyan Aaye Sham Ko Toh Lag Gaye Chand Mere Naam Ko Sar Pe Rakh Ke Nach Phiri Main Har Jalte Hue Ilzaam Ko"},
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