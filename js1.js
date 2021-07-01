 const music=document.querySelector('audio');
 const img=document.querySelector('img');
 const play=document.getElementById("play");
 const title=document.getElementById("title");
 const artist=document.getElementById("artist");
 const pre=document.getElementById("pre");
 const next=document.getElementById("next");

 const songs=[
 {
 	name:"Ashish1",
 	title:"FREE FIRE X CRISTIANO RONALDO SONG  FREE FIRE NEW SONG 2020.mp3 ",
 	artist:"Freefire",
 	img:"A1",
  },

 {
 	name:"Ashish4",
 	title:"Bepanah Pyaar - Payal Dev 320 Kbps (1).mp3",
 	artist:"Payal Dev , Yasser Desai",
 	img:"A4",
  },

  {
 	name:"Ashish3",
 	title:"Baarish Ban Jaana (Official Video) Payal Dev, Stebin Ben Hina Khan, Shaheer Sheikh Kunaal.mp3",
 	artist:"Hina Khan, Shaheer Sheikh",
 	img:"A3",
 },

 {
 	name:"Ashish2",
 	title:"Swag Se Swagat (Tiger Zinda Hai) - Vishal Dadlani (DjPunjab.Com).mp3",
 	artist:"Vishal Dadlani",
 	img:"A2",
 },

{
 	name:"Ashish5",
 	title:"Baahubali 2 - Theme Ringtone 2.mp3",
 	artist:"Prabhas , Tamanna",
 	img:"A5",
 },

{
 	name:"Ashish6",
 	title:"Bapu Zimidar - Jassi Gill - 320Kbps.mp3",
 	artist:"Jassi Gill ",
 	img:"A6",
 },

{
 	name:"Ashish7",
 	title:"Dj_Kantik_Kul_(Original_Mix).mp3",
 	artist:"Dj_Kantik",
 	img:"A11",
 },

{
 	name:"Ashish8",
 	title:"Ghar_20Se_20Nikalte_20Hi_20-_20Armaan_20Malik-(Mr-Song.Com).mp3",
 	artist:"Armaan_Malik",
 	img:"A9",
 },

{
 	name:"Ashish9",
 	title:"Khalibali_20-_20Padmaavat-(Mr-Song.Com).mp3",
 	artist:"Deepika_Padukone , Sahid_Kapoor ",
 	img:"A8",
 },

 {
 	name:"Ashish10",
 	title:"Sab+Dilwale+Nahi+Hote_Dialogue.mp3",
 	artist:"ShahRukh_Khan",
 	img:"A10",
 },

];

let isPlaying=false;


//for Play functionality
const playMusic= () => {
	isPlaying = true;
	music.play();
	play.classList.replace("fa-play","fa-pause");
	img.classList.add('anime');
	
	
};

//for Pause functionality 
const pauseMusic= () => {
	isPlaying = false;
	music.pause();
	play.classList.replace("fa-pause","fa-play");
	img.classList.remove('anime');
	
};

play.addEventListener('click', () =>{
	isPlaying ? pauseMusic(): playMusic();
});

//Change TO Next and Previous Song..

const loadSong = (songs) =>{
	title.textContent = songs.title;
	artist.textContent = songs.artist;
	music.src="Music/"+ songs.name + ".mp3";
	img.src="img/" +songs.img + ".jpg";
};

songIndex =0 ;
// loadSong(songs[0]);

const nextSong = ()=>{
	songIndex=(songIndex + 1)% songs.length;
	loadSong(songs[songIndex]);
	playMusic();

};

const preSong = ()=>{
	songIndex=(songIndex - 1 + songs.length) % songs.length;
	loadSong(songs[songIndex]);
	playMusic();
};


next.addEventListener('click',nextSong);
pre.addEventListener('click',preSong);

