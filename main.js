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
    {id: '0', songName: "Your Eyes", filePath: "general/songs/1.mp3", coverPath: "general/covers/cover1.jpg"},
    {id: '1',songName: "Play Date", filePath: "general/songs/2.mp3", coverPath: "general/covers/cover2.jpg"},
    {id: '2',songName: "SaiRat Zaale ji", filePath: "general/songs/3.mp3", coverPath: "general/covers/cover3.jpg"},
    {id: '3',songName: "Shikhayat", filePath: "general/songs/4.mp3", coverPath: "general/covers/cover4.jpg"},
    {id: '4',songName: "Love Story", filePath: "general/songs/5.mp3", coverPath: "general/covers/cover5.jpg"},
    {id: '5',songName: "Day Dreamin", filePath: "general/songs/6.mp3", coverPath: "general/covers/cover6.jpg"},
    {id: '6',songName: "Tera Chehra", filePath: "general/songs/7.mp3", coverPath: "general/covers/cover7.jpg"},
    {id: '7',songName: "Kolu Kolu", filePath: "general/songs/8.mp3", coverPath: "general/covers/cover8.jpg"},
    {id: '8',songName: "Jab Saiyaan", filePath: "general/songs/9.mp3", coverPath: "general/covers/cover9.jpg"},
    {id: '9',songName: "Naa Madhi", filePath: "general/songs/10.mp3", coverPath: "general/covers/cover10.jpg"},
]


songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        index = parseInt(e.target.id);
        songIndex = index;
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `general/songs/${index+1}.mp3`;
        masterSongName.innerText = songs[index].songName;
        title.innerText = songs[index].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})
//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        title.innerText = songs[songIndex].songName;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
        title.innerText = songs[songIndex].songName;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
    if (progress==100)
    {
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
    audioElement.src = `general/songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    title.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

//search data start

let search_result = document.getElementsByClassName('search_result')[0];
songs.forEach(element => {
    const { id, songName, filePath, coverPath } = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = '#' + id;
    card.innerHTML = `
    <img src="${coverPath}" alt="">
        <div class="content">${songName}
        </div>
    `;
    search_result.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');
    for (let i = 0; i < items.length; i++) {
        let as = items[i].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerText;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
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