console.log("Welcome to Spotify")

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('general/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let title = document.getElementById('title');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {id: '0', songName: "Your Eyes", filePath: "general/songs/1.mp3", coverPath: "general/covers/1.jpg", lyrics: "Your eyes got my heart falling for you You're messing with my heart and I still wanna love you I wanna spend my life drowning in your eyes It's my only prayer"},
    {id: '1', songName: "Play Date", filePath: "general/songs/2.mp3", coverPath: "general/covers/2.jpeg", lyrics: "You call me on the telephone, you feel so far away You tell me to come over, there's some games you want to play I'm walking to your house, nobody's home Just me and you and you and me alone"},
    {id: '2', songName: "SaiRat Zaale ji", filePath: "general/songs/3.mp3", coverPath: "general/covers/3.jpg", lyrics: "alguj vaaj nabhaat bhaltach zhalay aaj algad aali manaat pahilach tarani hi laaj"},
    {id: '3', songName: "Shikhayat", filePath: "general/songs/4.mp3", coverPath: "general/covers/4.jpg", lyrics: "Kisi Ki Yaad Mein Shaamein Guzaarne Ke Liye Kaleja Chahiye Khud Ko Maarne Ke Liye"},
    {id: '4', songName: "Love Story", filePath: "general/songs/5.mp3", coverPath: "general/covers/5.jpg", lyrics: "We were both young when I first saw you I close my eyes and the flashback starts I'm standin' there On a balcony in summer air See the lights, see the party, the ball gowns See you make your way through the crowd And say, Hello Little did I know"},
    {id: '5', songName: "Day Dreamin", filePath: "general/songs/6.mp3", coverPath: "general/covers/6.jpg", lyrics: "You walked in Caught my attention I've never seen A man with so much dimension"},
    {id: '6', songName: "Tera Chehra", filePath: "general/songs/7.mp3", coverPath: "general/covers/7.jpeg", lyrics: "Meri bechainiyo ko chain mill jaye Tera chehra jab nazar aaye Tera chehra jab nazar aaye Mere diwanepan ko sabra mill jaaye Tera chehra jab nazar aaye"},
    {id: '7', songName: "Kolu Kolu", filePath: "general/songs/8.mp3", coverPath: "general/covers/8.jpeg", lyrics: "Kolu koloo koloyamma Kommaa chivarana poolu poose kolo Puvvulaanti sinnadhemo Moggayindhi sigguthoti koloyamma"},
    {id: '8', songName: "Jab Saiyaan", filePath: "general/songs/9.mp3", coverPath: "general/covers/9.jpeg", lyrics: "Jab Saiyan Aaye Sham Ko Toh Lag Gaye Chand Mere Naam Ko Jab Saiyan Aaye Sham Ko Toh Lag Gaye Chand Mere Naam Ko"},
    {id: '9', songName: "Naa Madhi", filePath: "general/songs/10.mp3", coverPath: "general/covers/10.jpg", lyrics: "Naa Madhi Puvvadhi Vaadipothu Unnadhi Chinnadi Chey Vidi Chitrahimse Ayinadhi Ninnu Thalachuku Mathi Chediponu Devuda Ani Digulai Ten To Five Ponu Paiki Badhaga Kanabadaneee Manasu Pagilina Manishinile"},
    {id: '10', songName: "Mastaru Mastaru", filePath: "general/songs/11.mp3", coverPath: "general/covers/11.jpg", lyrics: "Seetakalam Manasu Nee Manasuna Chotadiginde Sitakumalle Neetho Adugese Maatadiginde Neeku Nuvve Gundelone Annadantha Vinnaale Anthakanna Mundugaane Yendhuko Avunannale Inkapaina Neeku Naaku Prema Pathale"}
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

        if (input.value == 0) {
            search_result.style.display = "none";
        } else {
            search_result.style.display = "";
        }
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
        if (audioElement.src==`http://127.0.0.1:5500/general/songs/${songIndex+1}.mp3`){
            if(audioElement.paused){
                e.target.classList.remove('fa-circle-play');
                e.target.classList.add('fa-circle-pause');
                masterSongName.innerText = songs[songIndex].songName;
                gif.style.opacity = 1;
                title.innerText = songs[songIndex].songName;
                masterPlay.classList.remove('fa-circle-play');
                masterPlay.classList.add('fa-circle-pause');
                if (audioElement.currentTime>0){
                    audioElement.play();
                }
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
            audioElement.src = `general/songs/${songIndex+1}.mp3`;
            audioElement.currentTime=0;
            audioElement.play();
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            masterSongName.innerText = songs[songIndex].songName;
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
        audioElement.src = `general/songs/${songIndex+1}.mp3`;
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
    audioElement.src = `general/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    title.innerText = songs[songIndex].songName;
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
    audioElement.src = `general/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    title.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

let searchBox = document.querySelector(".searchbox"),
searchIcon = document.querySelector(".icon"),
closeIcon = document.querySelector(".close-icon");
search_item=search_result.getElementsByTagName('a');
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