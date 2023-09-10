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
    {id: '10', songName: "SaiRat Zaale ji", filePath: "songs/11.mp3", coverPath: "covers/11.jpg", video:"AQ-P5RR7r40", lyrics: "alguj vaaj nabhaat bhaltach zhalay aaj algad aali manaat pahilach tarani hi laaj hoo.. aga zananal kalajamandi an hatamandi haath aal ji sairat zala ji.. sairat zala ji.. sairat zala ji.. badlun gel ya saar pirticha sutalaya vaar allad bhambhwale yaar billori paakharu nyaar aal mannatal.. ya whatawarti an hatamandi haat aal ji sairat zala ji.. sairat zala ji.. sairat zala ji.. kavalya pannat hya saavlya unhaat hya bavlya manat hya bharal..bharal.. tuzya ya manamandi ghumataay vaarya mandi sur sanaicha raaya sajal rangal man haldin raani rangal saral he jagnyach jhuran saral bhinal najren ag dhadadal gaat aal ji sairat zala ji.. sairat zala ji.. sairat zala ji.. aprit ghadlaya sapaan he padlaya galyamandi sajalaya doral..doral.. saata janmach naat rujalaya kaaljat tula r devagat pujal rujala bij pritich sajani rujal bhijal man pirmana purat bhijal saral man maarun jagan saral haral hya pirmala samad haral kadaal paavsamandi an abhalal yaat aal ji sairat zala ji.. sairat zala ji.. sairat zala ji.."},
    {id: '11', songName: "Shikhayat", filePath: "songs/12.mp3", coverPath: "covers/12.jpg", video:"G-VGi8FodFs", lyrics: "Kisi Ki Yaad Mein Shaamein Guzaarne Ke Liye Kaleja Chahiye Khud Ko Maarne Ke Liye Ke Ghaat Maut Ke Har Din Utarna Padta Hai Yeh Ishq Dil Mein Meri Jaan Utaarne Ke Liye Suna Hai Ke Unko Shikayat Bahut Hai Suna Hai Ke Unko Shikayat Bahut Hai Toh Phir Unko Humse Mohabbat Bahut Hai Suna Hai Ke Woh Tod Dete Hai Dil Toh Humein Tootne Ki Bhi Aadat Bahut Hai Suna Hai Ke Unko Shikayat Bahut Hai Nazar Bharke Woh Dekhte Bhi Nahi Hai Humare Liye Sochte Bhi Nahi Hai Nahi Hai Nahi Sochte Bhi Nahi Hai Guzarte Hain Hum Roz Pehlu Se Unke Magar Woh Humein Rokte Bhi Nahi Hai Haan Rokte Bhi Nahi Hai Haan Haan Rokte Bhi Nahi Hai Suna Hai Ke Nafrat Woh Karte Hai Humse Humein Unki Nafrat Se Raahat Bahut Hai Suna Hai Ke Unko Shikayat Bahut Hai Suna Hai Ke Unko Shikayat Bahut Hai Shehar Chahe Jeewan Ka Veeran Kar Do Magar Dekh Kar Humko Hairaan Kar Do Bharam Aaj Bhi Hai Wafaon Ka Humko Ijaazat Hai Jaana Khataon Ki Tumko Khata Par Bhi Unki Khafa Hum Nahi Hai Kisi Haal Mein Bhi Juda Hum Nahi Hai Nahi Hai Nahi Haan Juda Hum Nahi Hai Woh Ilzaam Jitne Bhi Chahe Laga Le Wafadaar Hain Bewafa Hum Nahi Hai Haan Haan Bewafa Hum Nahi Hai Haan Haan Bewafa Hum Nahi Hai Suna Hai Ke Woh Bhool Jaate Hai Milkar Humein Unki Yaadon Ki Daulat Bahut Hai Suna Hai Ke Unko Shikayat Bahut Hai Suna Hai Suna Hai Shikayat Bahut Hai Haan Ji Haan Ji Suna Hai Mohabbat Bahut Hai Haan Haan Unki Nafrat Se Raahat Bahut Hai Humein Tootne Ki Bhi Aadat Bahut Hai Shikayat Mohabbat Haan Raahat Bahut Hai Humein Unki Yaadon Ki Daulat Bahut Hai Suna Hai Suna Haan Haan Humne Suna Hai Suna Suna Suna Hai Suna Hai Ke Unko Shikayat Bahut Hai"},
    {id: '12', songName: "Tera Chehra", filePath: "songs/13.mp3", coverPath: "covers/13.jpeg", video:"i6fuIGIzaAs", lyrics: "Meri bechainiyo ko chain mill jaye Tera chehra jab nazar aaye Tera chehra jab nazar aaye Mere diwanepan ko sabra mill jaaye Tera chehra jab nazar aaye Zikra tumhara jab-jab hota hai Dekho na aakhon se Bhiga bhiga pyar beh jata hai Meri tanhaiyo ko noor mil jaye Tera chehra jab nazar aaye Tera chehra jab nazar aaye Main raat din yeh dua karoon Tere liye main jiyoon maroon Chaaro pehar tujhe dekha karoon Mera jahan yeh tujhpe fana karoon Zikra tumhara jab-jab hota hai Dekho na hotho pe tera ehsas reh jata hai Mere har raste ko manzil mill jaye Tera chehra jab nazar aaye Tera chehra jab nazar aaye Berang hawayein mujhe na jane De gayi sada kyun abhi abhi Hai sarfaroshi yeh ashiqui bhi Jayegi jaan meri ismein kabhi Zikra tumhara jab-jab hota hai Dekho na har lamha teri dastan Keh jata hai Meri har ik tadap ko sukun mil jaye Tera chehra jab nazar aaye Tera chehra jab nazar aaye"},
    {id: '13', songName: "Jab Saiyaan", filePath: "songs/14.mp3", coverPath: "covers/14.jpeg", video:"jJLP6P5QaGs", lyrics: "Jab Saiyan Aaye Sham Ko Toh Lag Gaye Chand Mere Naam Ko Jab Saiyan Aaye Sham Ko Toh Lag Gaye Chand Mere Naam Ko Sar Pe Rakh Ke Nach Phiri Main Har Jalte Hue Ilzaam Ko Jab Saiyaan Aaye Sham Ko Toh Lag Gaye Chand Mere Naam Ko Deewaron Dar Chaukhat Vaukhat Ban Gaye Hain Sab Saheli Yeh Kuchh Puchhe Woh Kuchh Puchhe Kitne Jawab Doon Main Akeli Hazaron Kam Mil Gaye Hain Yun Baithe Bithaye Is Nakaam Ko Jab Saiyaan Aaye Sham Ko Toh Lag Gaye Chand Mere Naam Ko Khud Ko Dekhne Tak Ki Bhi Fursat Mujhko Nahi Milti Unke Ishq Ke Noor Ke Aage Shamma Nahi Jalti Khud Ko Dekhne Tak Ki Bhi Fursat Mujhko Nahi Milti Unke Ishq Ke Noor Ke Aage Shamma Nahi Jalti Lakhon Naaz Lag Gaye Hain Phir Guroor Ke Is Badnaam Ko Jab Saiyan Aaye Sham Ko Toh Lag Gaye Chand Mere Naam Ko Sar Pe Rakh Ke Nach Phiri Main Har Jalte Hue Ilzaam Ko"},
    {id: '14', songName: "Jhoome Jo Pathaan", filepath: "songs/15.mp3", coverPath: "covers/15.jpg", video:"YxWlaYCA8MU", lyrics: "Tumne Mohabbat Karni Hai Humne Mohabbat Ki Hai Iss Dil Ke Alawa Kisi Se Bhi Na Humne Ijaazat Li Hai Hunar Hai Yeh Bhi Ishq Ka Kisi Kisi Ko Aata Hai Jaan Loota Ke Dushman Ki Humne Hifazat Ki Hai Baat Karte Hain Hazaron Hazaron Hai Tajurba Humein Yaaron Haan Yaaron Baat Karte Hain Hazaron Hai Tajurba Humein Yaaron Aisi Hai Ada Bandh Loon Hawa Mujhpe Woh Khuda Dil Se Dua Barsaye Jhoome Jo Pathaan Meri Jaan Mehfil Hi Loot Jaaye Dede Jo Zubaan Meri Jaan Uspe Mar Mit Jaaye Jhoome Jo Pathan Meri Jaan Mehfil Hi Loot Jaaye Dede Jo Zubaan Meri Jaan Uspe Mar Mit Jaaye Muqabla Kaise Hum Karte Hain Yaar Abki Baar Tarika Hum Batayenge Tarika Hum Batayenge Kaise Dushman Pe Hum Marte Hain Yaar Abki Baar Tarika Hum Batayenge Tarika Hum Batayenge Yaar Karde Jo Ishaara Ishaara Dil Main De Doon Dobara Dobara Yaar Karde Jo Ishaara Dil Main De Doon Dobara Pyar Ka Nasha Aisa Hai Chadha Hoke Yoon Fida Dushman Gale Lag Jaaye Jhoome Jo Pathaan Meri Jaan Mehfil Hi Loot Jaaye Dede Jo Zubaan Meri Jaan Uspe Mar Mit Jaaye Jhoome Jo Pathan Meri Jaan Mehfil Hi Loot Jaaye Dede Jo Zubaan Meri Jaan Uspe Mar Mit Jaaye"},
    {id: '15', songName: "Kesariya", filepath: "songs/16.mp3", coverPath: "covers/16.jpg", video:"6mr4cYJ7yew", lyrics: "Mujhko Itna Bataye Koyi Kaise Tujhse Dil Na Lagaye Koyi Rabba Ne Tujhko Banane Mein Kardi Hai Husn Ki Khaali Tijoriyan Kajal Ki Siyahi Se Likhi Hai Tune Jaane Kitno Ki Love Story an Kesariya Tera Ishq Hai Piya Rang Jaaun Jo Main Hath Lagaun Din Beete Saara Teri Fikr Mein Rain Saari Teri Khair Manaun Kesariya Tera Ishq Hai Piya Rang Jaaun Jo Main Hath Lagaun Din Beete Saara Teri Fikr Mein Rain Saari Teri Khair Manaun Patjhad Ke Mausam Mein Bhi Rangi Chanaron Jaisi Jhanke Sannnaton Mein Tu Veena Ke Taaron Jaisi Hmm Sadiyon Se Bhi Lambi Yeh Mann Ki Amavasein Hain Aur Tu Phuljhadiyon Wale Tyoharon Jaisi Chanda Bhi Deewana Hai Tera Jalti Hai Tujhse Saari Chhakoriyan Kajal Ki Siyahi Se Likhi Hai Tune Jaane Kitno Ki Love Story an Kesariya Tera Ishq Hai Piya Rang Jaaun Jo Main Hath Lagaun Din Beete Saara Teri Fikr Mein Rain Saari Teri Khair Manaun Kesariya Tera Ishq Hai Piya Rang Jaaun Jo Main Hath Lagaun Din Beete Saara Teri Fikr Mein Rain Saari Teri Khair Manaun Kesariya Tera Ishq Hai Piya Ishq Hai Piya Kesariya Tera Ishq Hai Piya Ishq Hai Piya Piya Ishq Hai Piya Ishq Hai Piya Kesariya Tera Ishq Hai Piya Rang Jaaun Jo Main Hath Lagaun"},
    {id: '16', songName: "Ram Siya Ram", filepath: "songs/17.mp3", coverPath: "covers/17.jpeg", video:"xaciGzadGTo", lyrics: "Ho Janam Janam Ki Khoj Bataye Ram Se Chalke Ram Pe Aaye Prem Koyi Hum Aur Na Jaane Ram Se Roothe Ram Se Maane Ram Siya Ki Karun Kahaani Ek Hai Chandan Ek Hai Paani Ram Siya Ram Siya Ram Jai Jai Ram Ram Siya Ram Siya Ram Jai Jai Ram Ram Siya Ram Siya Ram Jai Jai Ram Ram Siya Ram Siya Ram Jai Jai Ram Hari Anant Hari Katha Ananta Kahahin Sunahi Bahuvidhi Sab Santa Ram Ratan Dhan Jo Koyi Paaye Jeevan Bhar Ramayan Gaye Mangal Bhavan Amangal Haari Drabahu Sudasarath Ajar Bihari Ram Siya Ram Siya Ram Jai Jai Ram Ram Siya Ram Siya Ram Jai Jai Ram Ram Siya Ram Siya Ram Jai Jai Ram Ram Siya Ram Siya Ram Jai Jai Ram Ram Siya Ram Siya Ram Jai Jai Ram Ram Siya Ram Siya Ram Jai Jai Ram"},
    {id: '17', songName: "Raataan Lambiyan", filepath: "songs/18.mp3", coverPath: "covers/18.jpg", video:"gvyUuxdRdR4", lyrics: "Teri Meri Gallan Ho Gayi Mashhoor Kar Na Kabhi Tu Mujhe Nazron Se Door Kithe Chali Ae Tu Kithe Chali Ae Tu Kithe Chali Ae Kithe Chali Ae Jaanda Ae Dil Yeh Toh Jaandi Ae Tu Tere Bin Main Na Rahun Mere Bina Tu Kithe Chali Ae Tu Kithe Chali Ae Tu Kithe Chali Ae, Jaan Chali Ae Kaatun Kaise Raatan Oh Saawre? Jiya Nahi Jaata Sunn Baawre? Ke Raataan Lambiyan Lambiyan Re Kate Tere Sangeyan Sangeyan Re Ke Raatan Lambiyan Lambiyan Re Kate Tere Sangeyan Sangeyan Re Cham Cham Cham Ambran De Taare Kehnde Ne Sajjna Tu Hi Chan Mere Is Dil Da Mann Le Ve Sajjna Tere Bina Mera Howe Na Guzara Chhad Ke Na Jawin Mainu Tu Hi Hai Sahara Kaatun Kaise Raatan Oh Saawre? Jiya Nahi Jaata Sunn Baawre? Ke Raatan Lambiyan Lambiyan Re Kate Tere Sangeyan Sangeyan Re Ke Raataan Lambiyan Lambiyan Re Kate Tere Sangeyan Sangeyan Re Teri Meri Gallan Ho Gayi Mashhoor Kar Na Kabhi Tu Mainu Nazron Se Door Pichhe Chali Ae Tere Pichhe Chali Ae Tere Pichhe Chali Ae Jaanda Ae Dil Yeh Toh Jaandi Ae Tu Tere Bina Main Na Rahun Mere Bina Tu Kithe Chali Ae Tu Kithe Chali Ae Tu Kithe Chali Ae Kaatun Kaise Raatan Oh Saawre? Jiya Nahi Jaata Sunn Baawre? Ke Raatan Lambiyan Lambiyan Re Kate Tere Sangeyan Sangeyan Re Ke Raatan Lambiyan Lambiyan Re Kate Tere Sangeyan Sangeyan Re Ke Raatan Lambiyan Lambiyan Re Kate Tere Sangeyan Sangeyan Re Ke Raatan Lambiyan Lambiyan Re Kate Tere Sangeyan Sangeyan Re"},
    {id: '18', songName: "Tujh Mein Rab Dikhta Hai", filepath: "songs/19.mp3", coverPath: "covers/19.jpg", video:"qoq8B8ThgEM", lyrics: "Tu hi toh jannat meri, Tu hi mera junoon Tu hi to mannat meri, Tu hi rooh ka sukoon Tu hi aakhion ki thandak, tu hi dil ki hai dastak Aur kuch na janu mein, bas itna hi jaanu Tujh mein rab dikhta hai Yaara mein kya karu Tujh mein rab dikhta hai Yaara mein kya karu Sajdhe sar jukhta hai Yaara mein kya karu Tujh mein rab dikhta hai Yaara mein kya karu Ohhhh hoooo ohh.... Kaisi hai yeh doori, kaisi majboori Meine nazron se tujhe choo liya Oh ho ho Kabhi teri khusboo Kabhi teri baatein Bin mange yeh jahan pa liya Tu hi dil ki hai raunak, Tu hi janmo ki daulat Aur kuch na janoo Bas itna hi janoo Tujh mein rab dikhta hai Yaara mein kya karu Tujh mein rab dikhta hai Yaara mein kya karu Sajdhe sar jukhta hai Yaara mein kya karuo Tujh mein rab dikhta hai Yaara mein kya karuo Vasdi vasdi vasdi, dil di dil vich vasdi Nasdi nasdi nasdi, dil ro ve te nasdi Rab Ne... Bana Di Jodi.....haiiiiii Vasdi vasdi vasdi, dil di dil vich vasdi Nasdi nasdi nasdi, dil ro ve te nasdi Cham cham aaye, mujhe tarsaye Tera saaya ched ke chumta Oh ho ho... tu jo muskaye Tu jo sharmaye Jaise mera hai khuda jhumta Tu hi meri hai barkat, tu hi meri ibadat Aur kuch na janu, bas itna hi janu Tujh mein rab dikhta hai Yaara mein kya karu Tujh mein rab dikhta hai Yaara mein kya karu Sajdhe sar jukhta hai Yaara mein kya karu Tujh mein rab dikhta hai Yaara mein kya karu Vasdi vasdi vasdi, dil di dil vich vasdi Nasdi nasdi nasdi, dil ro ve te nasdi Rab Ne Bana Di Jodi.. haiiiiii"},
    {id: '19', songName: "Tere Vaaste", filepath: "songs/20.mp3", coverPath: "covers/20.jpg", video:"X7WXHhokylc", lyrics: "Tere Vaaste Falak Se Main Chaand Launga Solah Satrah Sitaare Sang Baandh Launga Tere Vaaste Falak Se Main Chaand Launga Solah Satrah Sitaare Sang Baandh Launga Chaand Taaron Se Kaho Abhi Thehre Zara Chaand Taaron Se Kaho Ki Abhi Thehre Zara Pehle Ishq Lada Loon Uske Baad Launga Pehle Ishq Lada Loon Uske Baad Launga Tere Vaaste Falak Se Main Chaand Launga Solah Satrah Sitaare Sang Baandh Launga Ho.. Hum Hai Zara Hatke Janaab-e-Aali Rehna Zara Bachke Hmm.. Hum Hai Zara Hatke Janaab-e-Aali Rehna Zara Bachke Ho Dekha Jaaye Toh Vaise Apne Toh Saare Paise Rehke Zameen Pe Hi Vasool Hain Chehra Hai Tera Chanda Naina Tere Sitaare Ambar Tak Jaana Hi Fizool Hai Ambar Tak Jaana Hi Fizool Hai Iske Baad Bhi Agar Tujhe Chain Na Mile Poori Karke Main Teri Yeh Muraad Aaunga Tere Vaaste Falak Se Main Chaand Launga Solah Satrah Sitaare Sang Baandh Launga Tere Vaaste Falak Se Main Chaand Launga Solah Satrah Sitaare Sang Baandh Launga Janaab-e-Aali Janaab-e-Aali Humse Mohabbat Hai Janaab-e-Aali Janaab-e-Aali Janaab-e-Aali Do Ik Hidayat Hai Janaab-e-Aali Ho.. Hum Hai Zara Hatke Janaab-e-Aali Rehna Zara Bachke Hmm.. Hum Hai Zara Hatke Janaab-e-Aali Rehna Zara Bachke Hmm.."},
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

/*let input = document.getElementsByTagName('input')[0];
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
})*/

/*input.addEventListener('keyup', ()=>{
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
})*/

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
        if (songIndex!=39)
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
    if(songIndex>=39){
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
        songIndex = 39;
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
/*searchIcon.addEventListener("click", () => {
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
})*/