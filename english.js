console.log("Welcome to Spotify")

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/21.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let title = document.getElementById('title');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {id: '20', songName: "Your Eyes", filePath: "songs/21.mp3", coverPath: "covers/21.jpg", video:"RzSIDoA1ZDw", lyrics: "I Don't Believe In Soulmates, But Teri Nazaron Ne Dil Ka Kiya Jo Hashar, Asar Ye Hua Ab Inamen Hee Doob Ke Ho Jaanoon Paar, Yahi Hai Dua Teri Nazaron Ne Dil . Yeah, Your Eyes Got My Heart Falling For You You're Messing With My Heart And I Still Wanna Love You I Wanna Spend My Life Drowning In Your Eyes It's My Only Prayer Your Eyes Got My Heart Falling For You You're Messing With My Heart And I Still Wanna Love You I Wanna Spend My Life Drowning In Your Eyes It's My Only Prayer, Yeah"},
    {id: '21', songName: "Play Date", filePath: "songs/22.mp3", coverPath: "covers/22.jpeg", video:"9jbwtx1-tw0", lyrics: "You call me on the telephone, you feel so far away You tell me to come over, there's some games you want to play I'm walking to your house, nobody's home Just me and you and you and me alone We're just playing hide and seek It's getting hard to breathe under the sheets with you I don't want to play no games I'm tired of always chasing, chasing after you I don't give a fuck about you anyways Whoever said I gave a shit 'bout you? You never share your toys or communicate I guess I'm just a play date to you Wake up in your bedroom and there's nothing left to say When I try to talk you're always playing board games I wish I had monopoly over your mind I wish I didn't care all the time We're just playing hide and seek It's getting hard to breathe under the sheets with you I don't want to play no games I'm tired of always chasing, chasing after you I don't give a fuck about you anyways Whoever said I gave a shit 'bout you? You never share your toys or communicate I guess I'm just a play date to you Ring around the rosy I never know, I never know what you need Ring around the rosy, I want to give you, want to give you What you need I don't give a fuck about you anyways Whoever said I gave a shit 'bout you? You never share your toys or communicate I guess I'm just a play date to you You know I give a fuck about you everyday Guess it's time that I tell you the truth If I share my toys, will you let me stay? Don't want to leave this play date with you"},
    {id: '22', songName: "Love Story", filePath: "songs/23.mp3", coverPath: "covers/23.jpg", video:"8xg3vE8Ie_E", lyrics: "We were both young when I first saw you I close my eyes and the flashback starts I'm standin' there On a balcony in summer air See the lights, see the party, the ball gowns See you make your way through the crowd And say, \"Hello\" Little did I know That you were Romeo, you were throwin' pebbles And my daddy said, \"Stay away from Juliet\" And I was cryin' on the staircase Beggin' you, \"Please don't go, \" and I said Romeo, take me somewhere we can be alone I'll be waiting, all there's left to do is run You'll be the prince and I'll be the princess It's a love story, baby, just say, \"Yes\" So I sneak out to the garden to see you We keep quiet, 'cause we're dead if they knew So close your eyes Escape this town for a little while, oh oh 'Cause you were Romeo, I was a scarlet letter And my daddy said, \"Stay away from Juliet\" But you were everything to me I was beggin' you, \"Please don't go, \" and I said Romeo, take me somewhere we can be alone I'll be waiting, all there's left to do is run You'll be the prince and I'll be the princess It's a love story, baby, just say, \"Yes\" Romeo, save me, they're tryna tell me how to feel This love is difficult, but it's real Don't be afraid, we'll make it out of this mess It's a love story, baby, just say, \"Yes\" Oh, oh I got tired of waiting Wonderin' if you were ever comin' around My faith in you was fading When I met you on the outskirts of town, and I said Romeo, save me, I've been feeling so alone I keep waiting for you, but you never come Is this in my head? I don't know what to think He knelt to the ground and pulled out a ring And said, \"Marry me, Juliet You'll never have to be alone I love you and that's all I really know I talked to your dad, go pick out a white dress It's a love story, baby, just say, \"Yes\" Oh, oh, oh Oh, oh, oh, oh 'Cause we were both young when I first saw you"},
    {id: '23', songName: "Day Dreamin", filePath: "songs/24.mp3", coverPath: "covers/24.jpg", video:"klDwy082mNk", lyrics: "You walked in Caught my attention I've never seen A man with so much dimension It's the way you walk The way you talk The way you make me feel inside It's in your smile It's in your eyes I don't wanna wait for tonight So I'm daydreamin' With my chin in the palm of my hands About you You And only you Got me Daydreaming, with my chin in the palm of my hands About you You And only you For you oh oh oh For you oh oh oh For you oh oh oh For you oh oh Now I can't wait To hold you in my arms I know I was made for you I'm in love with all your charm It's the way you walk The way you talk The way you make me feel inside It's in your smile It's in your eyes I don't wanna wait for tonight So I'm daydreamin' With my chin in the palm of my hands About you You And only you Got me Daydreaming, with my chin in the palm of my hands About you You And only you But I want you Got to have you And I need you Like I never have loved you before Oh I want you Ooh I need you Got to have you Like I never have loved you before So I'm daydreamin' With my chin in the palm of my hands About you You And only you Got me Daydreaming, with my chin in the palm of my hands About you You And only you For you oh oh oh For you oh oh oh For you oh oh oh For you oh oh"},
    {id: '24', songName: "Baby", filePath: "songs/25.mp3", coverPath: "covers/25.jpg", video:"kffacxfA7G4", lyrics: "Oh whoa You know you love me, I know you care Just shout whenever, and I'll be there You are my love, you are my heart And we would never ever ever be apart Are we an item? Girl, quit playing We're just friends, what are you saying? Say there's another and look right in my eyes My first love broke my heart for the first time And I was like... Baby, baby, baby oooh Like baby, baby, baby nooo Like baby, baby, baby oooh I thought you'd always be mine (mine) Baby, baby, baby oooh Like baby, baby, baby nooo Like baby, baby, baby oooh I thought you'd always be mine (mine) Oh, for you I would have done whatever And I just can't believe we ain't together And I wanna play it cool, but I'm losin' you I'll buy you anything, I'll buy you any ring And I'm in pieces, baby fix me And just shake me 'til you wake me from this bad dream I'm going down, down, down, down And I just can't believe my first love won't be around And I'm like Baby, baby, baby oooh Like baby, baby, baby nooo Like baby, baby, baby oooh I thought you'd always be mine (mine) Baby, baby, baby oooh Like baby, baby, baby nooo Like baby, baby, baby oooh I thought you'd always be mine (mine) Luda! When I was 13, I had my first love, There was nobody that compared to my baby And nobody came between us or could ever come above She had me going crazy, oh, I was star-struck, She woke me up daily, don't need no Starbucks. She made my heart pound, it skipped a beat when I see her in the street and At school on the playground but I really wanna see her on the weekend. She knows she got me dazing cause she was so amazing And now my heart is breaking but I just keep on saying... Baby, baby, baby oooh Like baby, baby, baby nooo Like baby, baby, baby oooh I thought you'd always be mine (mine) Baby, baby, baby oooh Like baby, baby, baby nooo Like baby, baby, baby oooh I thought you'd always be mine (mine) I'm gone (Yeah Yeah Yeah, Yeah Yeah Yeah) Now I'm all gone (Yeah Yeah Yeah, Yeah Yeah Yeah) Now I'm all gone (Yeah Yeah Yeah, Yeah Yeah Yeah) Now I'm all gone (gone, gone, gone...) I'm gone"},
    {id: '25', songName: "NO", filePath: "songs/26.mp3", coverPath: "covers/26.jpg", video:"cMTAUr3Nm6I", lyrics: "I think it's so cute and I think it's so sweet How you let your friends encourage you to try and talk to me But let me stop you there, oh, before you speak Nah to the ah to the, no, no, no My name is no My sign is no My number is no You need to let it go You need to let it go Need to let it go Nah to the ah to the, no, no, no My name is no My sign is no My number is no You need to let it go You need to let it go Need to let it go Nah to the ah to the, no, no, no First you gonna say you ain't runnin' game, thinkin' I'm believing every word Call me beautiful, so original, telling me I'm not like other girls I was in my zone before you came along, now I'm thinking maybe you should go Blah, blah, blah, blah I be like nah to the I, to the no, no, no All my ladies listen up If that boy ain't giving up Lick your lips and swing your hips Girl all you gotta say is My name is no My sign is no My number is no You need to let it go You need to let it go Need to let it go Nah to the ah to the, no, no, no My name is no My sign is no My number is no You need to let it go You need to let it go Need to let it go Nah to the ah to the, no, no, no Thank you in advance, I don't wanna dance (nope) I don't need your hands all over me If I want a man, then I'mma get a man But it's never my priority I was in my zone, before you came along, don't want you to take this personal Blah, blah, blah, I be like nah to the ah to the, no, no, no All my ladies listen up (all my ladies) If that boy ain't giving up (ain't giving up) Lick your lips and swing your hips Girl all you gotta say is My name is no My sign is no My number is no You need to let it go You need to let it go Need to let it go Nah to the ah to the, no, no, no My name is no My sign is no My number is no You need to let it go You need to let it go Need to let it go Nah to the ah to the, no, no, no I'm feeling Untouchable, untouchable I'm feeling Untouchable, untouchable I'm feeling Untouchable, untouchable I'm feeling (Nah to the ah to the, no, no, no) I'm feeling Untouchable, untouchable I'm feeling Untouchable, untouchable I'm feeling Untouchable, untouchable I'm feeling (Nah to the ah to the, no, no, no) All my ladies listen up (say, all my ladies) If that boy ain't giving up (ain't giving up) Lick your lips and swing your hips Girl all you gotta say is My name is no My sign is no My number is no You need "},
    {id: '26', songName: "Shape of You", filePath: "songs/27.mp3", coverPath: "covers/27.jpeg", video:"JGwWNGJdvx8", lyrics: "The club isn't the best place to find a lover So the bar is where I go Me and my friends at the table doing shots Drinking fast and then we talk slow Come over and start up a conversation with just me And trust me I'll give it a chance now Take my hand, stop, put Van the Man on the jukebox And then we start to dance, and now I'm singing like Girl, you know I want your love Your love was handmade for somebody like me Come on now, follow my lead I may be crazy, don't mind me Say, boy, let's not talk too much Grab on my waist and put that body on me Come on now, follow my lead Come, come on now, follow my lead I'm in love with the shape of you We push and pull like a magnet do Although my heart is falling too I'm in love with your body Last night you were in my room And now my bedsheets smell like you Every day discovering something brand new I'm in love with your body (Oh-I-oh-I-oh-I-oh-I) I'm in love with your body (Oh-I-oh-I-oh-I-oh-I) I'm in love with your body (Oh-I-oh-I-oh-I-oh-I) I'm in love with your body Every day discovering something brand new I'm in love with the shape of you One week in we let the story begin We're going out on our first date You and me are thrifty, so go all you can eat Fill up your bag and I fill up a plate We talk for hours and hours about the sweet and the sour And how your family is doing okay And leave and get in a taxi, then kiss in the backseat Tell the driver make the radio play, and I'm singing like Girl, you know I want your love Your love was handmade for somebody like me Come on now, follow my lead I may be crazy, don't mind me Say, boy, let's not talk too much Grab on my waist and put that body on me Come on now, follow my lead Come, come on now, follow my lead I'm in love with the shape of you We push and pull like a magnet do Although my heart is falling too I'm in love with your body Last night you were in my room And now my bedsheets smell like you Every day discovering something brand new I'm in love with your body (Oh-I-oh-I-oh-I-oh-I) I'm in love with your body (Oh-I-oh-I-oh-I-oh-I) I'm in love with your body (Oh-I-oh-I-oh-I-oh-I) I'm in love with your body Every day discovering something brand new I'm in love with the shape of you Come on, be my baby, come on Come on, be my baby, come on Come on, be my baby, come on Come on, be my baby, come on Come on, be my baby, come on Come on"},
    {id: '27', songName: "Under The Influence", filePath: "songs/28.mp3", coverPath: "covers/28.jpeg", video:"pfxyk1glEq4", lyrics: "Get up, get up Kiddominant on the beat, better run it back Fuckin' Robitussin I don't know why this shit got me lazy right now, yeah Can't do Percocets or Molly I'm turnin' one, tryna live it up here right, right, right Baby, you can Ride it, ooh, yeah Bring it over to my place And you be like \"Baby, who cares?\" But I know you care Bring it over to my place You don't know what you did, did to me Your body lightweight speaks to me I don't know what you did, did to me Your body lightweight speaks to me I can make it hurricane on it Hunnid bands, make it rain on it Tie it up, put a chain on it Make you tattoo my name on it, oh Make you cry like a baby, yeah Let's GoPro and make a video, yeah Make you cry like a baby, yeah Let's GoPro and make a video Oh, yeah, yeah, yeah, yeah Baby, you can Ride it, ooh, yeah Bring it over to my place And you be like \"Baby, who cares?\" But I know you care Bring it over to my place You don't know what you did, did to me Your body lightweight speaks to me I don't know what you did, did to me Your body lightweight speaks to me Baby, you can Ride it, ooh, yeah And you be like \"Baby, who cares?\" But I know you care"},
    {id: '28', songName: "Gorgeous", filePath: "songs/29.mp3", coverPath: "covers/29.jpeg", video:"kzt84XoMAMA", lyrics: "You should take it as a compliment That I got drunk and made fun of the way you talk You should think about the consequence Of your magnetic field being a little too strong And I got a boyfriend, he's older than us He's in the club doing, I don't know what You're so cool, it makes me hate you so much (I hate you so much) Whisky on ice, Sunset and Vine You've ruined my life, by not being mine You're so gorgeous I can't say anything to your face 'Cause look at your face (gorgeous) And I'm so furious At you for making me feel this way But what can I say? You're gorgeous You should take it as a compliment That I'm talking to everyone here but you (but you, but you) And you should think about the consequence Of you touching my hand in the darkened room (dark room, dark room) If you've got a girlfriend, I'm jealous of her But if you're single that's honestly worse 'Cause you're so gorgeous it actually hurts (Honey, it hurts) Ocean blue eyes looking in mine I feel like I might sink and drown and die You're so gorgeous I can't say anything to your face (to your face) 'Cause look at your face (look at your face) And I'm so furious At you for making me feel this way (this way) But what can I say? You're gorgeous You make me so happy, it turns back to sad, yeah There's nothing I hate more than what I can't have You are so gorgeous it makes me so mad (mmh) You make me so happy, it turns back to sad, yeah There's nothing I hate more than what I can't have and Guess I'll just stumble on home to my cats (yeugh) Alone, unless you wanna come along (oh) You're so gorgeous I can't say anything to your face (to your face) 'Cause look at your face (look at your face, gorgeous) And I'm so furious (I'm so furious) At you for making me feel this way (feel this way) But what can I say? (I say) You're gorgeous You make me so happy, it turns back to sad, yeah There's nothing I hate more than what I can't have and You are so gorgeous it makes me so mad (mmh) You're gorgeous You make me so happy, it turns back to sad, yeah (it turns back so sad) There's nothing I hate more than what I can't have (what I can have) You are so gorgeous it makes me so mad (mmh) You're gorgeous"},
    {id: '29', songName: "Star Boy", filePath: "songs/30.mp3", coverPath: "covers/30.jpeg", video:"34Na4j8AVgA", lyrics: "I'm tryna put you in the worst mood, ah P1 cleaner than your church shoes, ah Milli point two just to hurt you, ah All red lamb just to tease you, ah None of these toys on lease too, ah Made your whole year in a week too, yeah Main bitch out of your league too, ah Side bitch out of your league too, ah House so empty, need a centerpiece Twenty racks, a table cut from ebony Cut that ivory into skinny pieces Then she clean it with her face, man I love my baby You talking money, need a hearing aid You talking 'bout me, I don't see the shade Switch up my style, I take any lane I switch up my cup, I kill any pain Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha Look what you've done! Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha I'm a motherfuckin' Starboy Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha Look what you've done! Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha I'm a motherfuckin' Starboy Every day a nigga try to test me, ah Every day a nigga try to end me, ah Pull off in that roadster SV, ah Pockets over weight getting hefty, ah Coming for the king, that's a far cry I come alive in the fall time I No competition, I don't really listen I'm in the blue Mulsanne bumping New Edition House so empty, need a centerpiece Twenty racks, a table cut from ebony Cut that ivory into skinny pieces Then she clean it with her face, man I love my baby You talking money, need a hearing aid You talking 'bout me, I don't see the shade Switch up my style, I take any lane I switch up my cup, I kill any pain Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha Look what you've done! Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha I'm a motherfuckin' Starboy Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha Look what you've done! Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha I'm a motherfuckin' Starboy Let a nigga brag Pitt Legend of the fall took the year like a bandit Bought mama a crib and a brand new wagon Now she hit the grocery shop looking lavish Star Trek roof in that Wraith of Khan Girls get loose when they hear this song Hundred on the dash get me close to God We don't pray for love, we just pray for cars House so empty, need a centerpiece Twenty racks, a table cut from ebony Cut that ivory into skinny pieces Then she clean it with her face Man, I love my baby You talking money, need a hearing aid You talking 'bout me, I don't see the shade Switch up my style, I take any lane I switch up my cup, I kill any pain Ha-ha-ha-ha-ha-ha-ha-ha-ha-ha Look what you've done! Ha-ha-ha-ha-ha-ha-ha"},
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
        songIndex = index-20;
        console.log(audioElement.src);
        if (audioElement.src==`http://127.0.0.1:5500/songs/${songIndex+21}.mp3`){
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
            audioElement.src = `songs/${songIndex+21}.mp3`;
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
        audioElement.src = `songs/${songIndex+21}.mp3`;
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
    audioElement.src = `songs/${songIndex+21}.mp3`;
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
    audioElement.src = `songs/${songIndex+21}.mp3`;
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