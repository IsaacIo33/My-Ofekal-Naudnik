let lockPowerOffE = false;
let swipeE = false;
let thumbX = 0;
let offset;
let hoverTletkuE = false;
let weekDays = ["Sunday", "Monday", "Tuesday", "Wedensday", "Thursday", "Friday", "Saturday"];
let percentage = 50;
let volume = 0.7;
let selectE = false;
let selection = {
  x: null,
  y: null,
  width: null,
  height: null
};
let startMenuIsOpen = false;
let powerOffE = false;
let searchE = false;
let applications = [];
let query = "";
let layer = 5;
let prism = {
  drag: false,
  maximized: false,
  open: false
};
let offsetX;
let offsetY;
let emotions = ["normal", "happy", "bored", "mad", "sad", "sus", "very happy", "sleep", "surprized"];
let tletkusEmotion = emotions[Math.floor(Math.random() * emotions.length)];
let greeting;
let username = "User";
let locationSe;
let weatherEnabled = false;
let weatherDesc;
let temperature;
let defaults = {
  browser: "Auka Web Browser"
};
let verses = [
  {
    content: "For God so loved the world, that he gave his only son that whomsoever beliveth in him shall not perish but have everlasting life.",
    source: " - John 3:16"
  },
  {
    content: "In the beginning, God created the heaven and the earth.",
    source: " - Genesis 1:1"
  },
  {
    content: "In the beginning was the Word, and the Word was with God, and the Word was God.",
    source: " - John 1:1"
  },
  {
    content: "And he said unto them, Look on me, and do likewise: and, behold, when I come to the outside of the camp, it shall be that, as I do, so shall ye do.",
    source: " - Judges 7:17"
  },
  {
    content: "And he took their king's crown from off his head, the weight whereof was a talent of gold with the precious stones: and it was set on David's head. And he brought forth the spoil of the city in great abundance.",
    source: " - II Samuel 12:30"
  },
  {
    content: "And they dwelt at Beersheba, and Moladah, and Hazarshual,",
    source: " - I Chronicles 4:28"
  },
  {
    content: "And David said unto God, Is it not I that commanded the people to be numbered? even I it is that have sinned and done evil indeed; but as for these sheep, what have they done? let thine hand, I pray thee, O LORD my God, be on me, and on my father's house; but not on thy people, that they should be plagued.",
    source: " - I Chronicles 21:17"
  },
  {
    content: "For both he that sanctifieth and they who are sanctified are all of one: for which cause he is not ashamed to call them brethren,",
    source: " - Hebrews 2:11"
  },
  {
    content: "The LORD of hosts hath purposed it, to stain the pride of all glory, and to bring into contempt all the honourable of the earth.",
    source: " - Isaiah 23:9"
  },
  {
    content: "And it came to pass, when Joab observed the city, that he assigned Uriah unto a place where he knew that valiant men were.",
    source: " - II Samuel 11:16"
  }
];
let verse = verses[Math.floor(Math.random() * verses.length)];
let helpHeading;
let helpDesc;
let tletkuTalkE = false;
let tletkuMessage;
let tletkuGreeting;
let newToTletku = true;
let facts = ["Ofekal Naudnik is the successor to Ofekal Moda.", "Ofekal Naudnik is the first version to give weather data.", "Vikenait Productions is the creator of Ofekal OS.", "The Auka browser was quickly created in a few days after IO Studio discontinued Prism Browser!", "Naudnik means 'Robe' in the creators fantasy language which is Dellan.", "Prism has a App for Windows and Linux.", "Prism has a Bulit-in Gallery App", "Prism has a bulit-in Clock, Quick Note, Favorites Manager, Add-ons Store, File Manager (For Notes), AI (Enable in Settings), Paint, Document Creating, Multi Screen, Gallery (Photos App) and is Customizable.", "For God so loved the world, that he sent his only son that whomsoever beliveth in him shall not perish but have everlasting life.", "IO Mail lets you send emails.", "The Ofekal Naudnik Calculator is the first 'normal' calculator.", "You can add an analog clock as a widget to your desktop? Just open clock, go to home, and press the button.", "I am a grasshopper and not an alien or a robot!", "On the no-internet screen of Prism Web Browser you can toggle an AskPrism search bar widget for your desktop?", "In settings, there is a theme manager that comes with 4 pre-installed themes in which you can save and delete themes.", "The notepad app of Ofekal Naudnik works just as a normal text editor in any other OS. This is significant because the developer started off with little skill, but got much better over time making apps with greater functionality. See more at <span class='coolLink' onmousedown='linkTo(\"me\"); interactTletku()'>joseph2.farleyengineeredsolutions.org</span>", "In Paint you can switch whatever tool you are using to erase by clicking the pencil button? It should toggle to an eraser.", "Ofekal Naudnik is the first version of Ofekal to have a designated media viewer app.", "Ofekal Naudnik is the first version of Ofekal where you can upload user-generated apps to Toolbox!", "You can further customize the taskbar in Terminal with the toggle commands floatbar, invbar, and blurbar."];
let prismTips = ["Prism has a Built-in Paint Tool.", "Prism has Add-ons.", "To find where your Saved Notes are, Press the Folder Icon in the Sidebar.", "Prism is the Default browser for Ofekal.", "Prism has a Built-in Gallery", "Prism is full of Features", "On the no-internet screen of Prism Web Browser you can toggle an AskPrism search bar widget for your desktop?"];
let codeSay = ["Ablao, Zabraus!"];
let codeWithTletku = {
  icon: {
    drag: false
  }
};
let newFolderE = false;
let dir = [];
let lastId = 39;
let folder = {
  drag: false,
  maximized: false,
  open: false
};
let ls = 0;
let setup = {
  drag: false,
  maximized: false,
  open: false
};
let hotspots = [
  {
    id: 0,
    name: "Free WIFI",
    password: false,
    available: 1
  },
  {
    id: 1,
    name: "fes322",
    password: "megekh",
    available: Math.floor(Math.random() * 2)
  },
  {
    id: 2,
    name: "FES 2.4",
    password: "11796",
    available: Math.floor(Math.random() * 2)
  },
  {
    id: 3,
    name: "Sersek Vikenait",
    password: "Falkenhaisen",
    available: Math.floor(Math.random() * 2)
  },
  {
    id: 4,
    name: "IO Network",
    password: false,
    available: Math.floor(Math.random() * 2)
  }
];
let clipboardE = false;
let internetLs;
let internet = false;
let password;
let setupE = false;
let ioMail = {
  drag: false,
  maximized: false,
  open: false
};
let calculator = {
  drag: false,
  maximized: false,
  open: false,
  history: []
};
let math = "";
let calcHistoryOpenE = false;
let clock = {
  drag: false,
  maximized: false,
  open: false
};
let clockDrag = false;
let clockWidgetE = false;
let newTimerHours = 0;
let newTimerMinutes = 0;
let newTimerSeconds = 0;
let timers = [];
let stopwatchHours = 0;
let stopwatchMinutes = 0;
let stopwatchSeconds = 0;
let stopwatchMiliseconds = 0;
let stopwatchTicking = false;
let laps = [];
let newAlarmHour = 0;
let newAlarmMinute = 0;
let newAlarmAMPM = "AM";
let alarms = [];
let settings = {
  drag: false,
  maximized: false,
  open: false
};
let osUsage = 5;
let appUsage = 11;
let fileUsage = 2.2;
let junkUsage = 0;
let wallpaper = "images/wallpaper.png";
let theme = "light";
let themeColor = "green";
let hoverThemeColor = "lime";
let darkThemeColor = "darkgreen";
let windowBarPosition = "top";
let font = "ubuntu, system-ui";
let folderGraphic = "images/folder.png";
let themes = [];
let wallpapers = ["images/wallpaper.png", "images/wallpaper2.jpg", "images/wallpaper3.jpg", "images/wallpaper4.jpg", "images/wallpaper5.jpg", "images/wallpaper6.jpg", "images/wallpaper7.jpg", "images/wallpaper8.jpg", "images/wallpaper9.jpg", "images/wallpaper10.png", "images/wallpaper11.heic", "images/wallpaper12.jpg"];
let themeColors = [
  {
    default: "red",
    hover: "pink",
    dark: "maroon"
  },
  {
    default: "orange",
    hover: "gold",
    dark: "coral"
  },
  {
    default: "gold",
    hover: "yellow",
    dark: "olive"
  },
  {
    default: "#62A362",
    hover: "#98FF98",
    dark: "#4E824E"
  },
  {
    default: "green",
    hover: "lime",
    dark: "darkgreen"
  },
  {
    default: "teal",
    hover: "cyan",
    dark: "#005555"
  },
  {
    default: "blue",
    hover: "lightblue",
    dark: "navy"
  },
  {
    default: "magenta",
    hover: "pink",
    dark: "purple"
  },
  {
    default: "brown",
    hover: "tan",
    dark: "maroon"
  },
  {
    default: "lightgrey",
    hover: "white",
    dark: "darkgrey"
  },
  {
    default: "#555555",
    hover: "grey",
    dark: "black"
  },
];
let fonts = ["ubuntu", "sans-serif", "serif", "monospace", "noto mono", "cantarell", "montserrat", "caladea"];
let folderGraphics = ["images/folder.png", "images/folderIcon.png", "images/folder2.png", "images/folder3.png"];
let notificationSounds = ["sounds/tletkuTalk.mp3", "sounds/notification2.mp3", "sounds/notification3.mp3", "sounds/notification4.mp3", "sounds/notification5.mp3"];
let askPrismWidget = {
  drag: false
};
let askPrismE = false;
let textSize = 1;
let highContrast = false;
let profile = "images/icon.png";
let notepad = {
  drag: false,
  maximized: false,
  open: false
};
let notepadLS;
let notepadF = "desktop";
let notepadO;
let paint = {
  drag: false,
  maximized: false,
  open: false
};
let stickyNotes = [];
let draw = false;
let paintColor = "#000000";
let paintColors = ["#111111", "#333333", "#666666", "#999999", "#BBBBBB", "#DDDDDD", "#FFFFFF", "#110000", "#330000", "#660000", "#990000", "#BB0000", "#DD0000", "#FF0000", "#111100", "#331100", "#661100", "#992200", "#BB3300", "#DD4400", "#FF5500", "#111100", "#333300", "#666600", "#999900", "#BBBB00", "#DDDD00", "#FFFF00", "#001100", "#003300", "#006600", "#009900", "#00BB00", "#00DD00", "#00FF00", "#001111", "#003333", "#006666", "#009999", "#00BBBB", "#00DDDD", "#00FFFF", "#000011", "#000033", "#000066", "#000099", "#0000BB", "#0000DD", "#0000FF", "#110011", "#330033", "#660066", "#990099", "#BB00BB", "#DD00DD", "#FF00FF", "#FF0000", "#FF2222", "#FF5555", "#FF8888", "#FFAAAA", "#FFCCCC", "#FFEEEE", "#FF5500", "#FF7722", "#FF8855", "#FF9988", "#FFAAAA", "#FFBBCC", "#FFCCEE", "#FFFF00", "#FFFF22", "#FFFF55", "#FFFF88", "#FFFFAA", "#FFFFCC", "#FFFFEE", "#00FF00", "#22FF22", "#55FF55", "#88FF88", "#AAFFAA", "#CCFFCC", "#EEFFEE", "#00FFFF", "#22FFFF", "#55FFFF", "#88FFFF", "#AAFFFF", "#CCFFFF", "#EEFFFF", "#0000FF", "#2222FF", "#5555FF", "#8888FF", "#AAAAFF", "#CCCCFF", "#EEEEFF", "#FF00FF", "#FF22FF", "#FF55FF", "#FF88FF", "#FFAAFF", "#FFCCFF", "#FFEEFF"];
let paintSize = 5;
let paintBrush = "round";
let paintTool;
let paintHistory = [
  {
    width: 500,
    height: 300,
    value: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAEsCAYAAAA1u0HIAAAQAElEQVR4AezVi3IsNRIEUMf+/0cvEICvL55xP5RqqepsLGDPdKdUpxyR//vwPwIECBAgQGB7AYW+/QoNQIAAAQIEPj6yhU6YAAECBAgQmCKg0KcwO4QAAQIECGQFdi70rIx0AgQIECCwkYBC32hZrkqAAAECBF4JKPRXMj4nQIAAAQIbCSj0jZblqgQIECBA4JWAQn8lk/1cOgECBAgQGCqg0IdyCiNAgAABAs8IKPRn3LOnSidAgACBdgIKvd3KDUyAAAECFQUUesWtZmeSToAAAQILCij0BZfiSgQIECBA4KyAQj8r5vmsgHQCBAgQuCSg0C+xeYkAAQIECKwloNDX2ofbZAWkEyBAoKyAQi+7WoMRIECAQCcBhd5p22bNCkgnQIDAgwIK/UF8RxMgQIAAgVECCn2UpBwCWQHpBAgQeCug0N/y+JIAAQIECOwhoND32JNbEsgKSCdAYHsBhb79Cg1AgAABAgQ+PhS6vwICBNIC8gkQmCCg0CcgO4IAAQIECKQFFHpaWD4BAlkB6QQI/CWg0P9i8C8CBAgQILC3gELfe39uT4BAVkA6gW0EFPo2q3JRAgQIECDwWkChv7bxDQECBLIC0gkMFFDoAzFFESBAgACBpwQU+lPyziVAgEBWQHozAYXebOHGJUCAAIGaAgq95l5NRYAAgayA9OUEFPpyK3EhAgQIECBwXkChnzfzBgECBAhkBaRfEFDoF9C8QoAAAQIEVhNQ6KttxH0IECBAICtQNF2hF12ssQgQIECgl4BC77Vv0xIgQIBAVuCxdIX+GL2DCRAgQIDAOAGFPs5SEgECBAgQyAq8SVfob3B8RYAAAQIEdhFQ6Ltsyj0JECBAgMAbgQGF/ibdVwQIECBAgMAUAYU+hdkhBAgQIEAgK7B8oWfHl06AAAECBGoIKPQaezQFAQIECDQXaF7ozbdvfAIECBAoI6DQy6zSIAQIECDQWUChB7cvmgABAgQIzBJQ6LOknUOAAAECBIICCj2Im42WToAAAQIEPgUU+qeFnwgQIECAwLYCCn3b1WUvLp0AAQIE9hJQ6Hvty20JECBAgMC3Agr9WxYfZgWkEyBAgMBoAYU+WlQeAQIECBB4QEChP4DuyKyAdAIECHQUUOgdt25mAgQIECgnoNDLrdRAWQHpBAgQWFNAoa+5F7ciQIAAAQKnBBT6KS4PE8gKSCdAgMBVAYV+Vc57BAgQIEBgIQGFvtAyXIVAVkA6AQKVBRR65e2ajQABAgTaCCj0Nqs2KIGsgHQCBJ4VUOjP+judAAECBAgMEVDoQxiFECCQFZBOgMBPAgr9JyHfEyBAgACBDQQU+gZLckUCBLIC0glUEFDoFbZoBgIECBBoL6DQ2/8JACBAICsgncAcAYU+x9kpBAgQIEAgKqDQo7zCCRAgkBWQTuAfAYX+j4T/EiBAgACBjQUU+sbLc3UCBAhkBaTvJKDQd9qWuxIgQIAAgRcCCv0FjI8JECBAICsgfayAQh/rKY0AAQIECDwioNAfYXcoAQIECGQF+qUr9H47NzEBAgQIFBRQ6AWXaiQCBAgQyAqsmK7QV9yKOxEgQIAAgZMCCv0kmMcJECBAgEBW4Fq6Qr/m5i0CBAgQILCUgEJfah0uQ4AAAQIErgkcLfRr6d4iQIAAAQIEpggo9CnMDiFAgAABAlmBNQo9O6N0AgQIECBQXkChl1+xAQkQIECgg0CHQu+wRzMSIECAQHMBhd78D8D4BAgQIFBDQKHf3aP3CRAgQIDAAgIKfYEluAIBAgQIELgroNDvCmbfl06AAAECBA4JKPRDTB4iQIAAAQJrCyj0tfeTvZ10AgQIECgjoNDLrNIgBAgQINBZQKF33n52dukECBAgMFFAoU/EdhQBAgQIEEgJKPSUrNysgHQCBAgQ+CKg0L9w+IUAAQIECOwpoND33JtbZwWkEyBAYDsBhb7dylyYAAECBAj8V0Ch/9fEJwSyAtIJECAQEFDoAVSRBAgQIEBgtoBCny3uPAJZAekECDQVUOhNF29sAgQIEKgloNBr7dM0BLIC0gkQWFZAoS+7GhcjQIAAAQLHBRT6cStPEiCQFZBOgMANAYV+A8+rBAgQIEBgFQGFvsom3IMAgayAdALFBRR68QUbjwABAgR6CCj0Hns2JQECWQHpBB4XUOiPr8AFCBAgQIDAfQGFft9QAgECBLIC0gkcEFDoB5A8QoAAAQIEVhdQ6KtvyP0IECCQFZBeREChF1mkMQgQIECgt4BC771/0xMgQCArIH2agEKfRu0gAgQIECCQE1DoOVvJBAgQIJAVkP6LgEL/BcOPBAgQIEBgVwGFvuvm3JsAAQIEsgKbpSv0zRbmugQIECBA4DsBhf6dis8IECBAgEBWYHi6Qh9OKpAAAQIECMwXUOjzzZ1IgAABAgSGC3wp9OHpAgkQIECAAIEpAgp9CrNDCBAgQIBAVmBioWcHkU6AAAECBDoLKPTO2zc7AQIECJQRKFPoZTZiEAIECBAgcEFAoV9A8woBAgQIEFhNQKEf2oiHCBAgQIDA2gIKfe39uB0BAgQIEDgkoNAPMWUfkk6AAAECBO4KKPS7gt4nQIAAAQILCCj0BZaQvYJ0AgQIEOggoNA7bNmMBAgQIFBeQKGXX3F2QOkECBAgsIaAQl9jD25BgAABAgRuCSj0W3xezgpIJ0CAAIGjAgr9qJTnCBAgQIDAwgIKfeHluFpWQDoBAgQqCSj0Sts0CwECBAi0FVDobVdv8KyAdAIECMwVUOhzvZ1GgAABAgQiAgo9wiqUQFZAOgECBH4XUOi/i/idAAECBAhsKKDQN1yaKxPICkgnQGBHAYW+49bcmQABAgQI/Cag0H8D8SsBAlkB6QQIZAQUesZVKgECBAgQmCqg0KdyO4wAgayAdAJ9BRR6392bnAABAgQKCSj0Qss0CgECWQHpBFYWUOgrb8fdCBAgQIDAQQGFfhDKYwQIEMgKSCdwT0Ch3/PzNgECBAgQWEJAoS+xBpcgQIBAVkB6fQGFXn/HJiRAgACBBgIKvcGSjUiAAIGsgPQVBBT6CltwBwIECBAgcFNAod8E9DoBAgQIZAWkHxNQ6MecPEWAAAECBJYWUOhLr8flCBAgQCArUCddodfZpUkIECBAoLGAQm+8fKMTIECAQFZgZrpCn6ntLAIECBAgEBJQ6CFYsQQIECBAICvwNV2hf/XwGwECBAgQ2FJAoW+5NpcmQIAAAQJfBUYX+td0vxEgQIAAAQJTBBT6FGaHECBAgACBrMBehZ61kE6AAAECBLYVUOjbrs7FCRAgQIDAp4BC/7TwEwECBAgQ2FZAoW+7OhcnQIAAAQKfAgr90yL7k3QCBAgQIBAUUOhBXNEECBAgQGCWgEKfJZ09RzoBAgQINBdQ6M3/AIxPgAABAjUEFHqNPWankE6AAAECywso9OVX5IIECBAgQOBnAYX+s5EnsgLSCRAgQGCAgEIfgCiCAAECBAg8LaDQn96A87MC0gkQINBEQKE3WbQxCRAgQKC2gEKvvV/TZQWkEyBAYBkBhb7MKlyEAAECBAhcF1Do1+28SSArIJ0AAQInBBT6CSyPEiBAgACBVQUU+qqbcS8CWQHpBAgUE1DoxRZqHAIECBDoKaDQe+7d1ASyAtIJEJguoNCnkzuQAAECBAiMF1Do400lEiCQFZBOgMA3Agr9GxQfESBAgACB3QQU+m4bc18CBLIC0glsKqDQN12caxMgQIAAgV8FFPqvGn4mQIBAVkA6gZiAQo/RCiZAgAABAvMEFPo8aycRIEAgKyC9tYBCb71+wxMgQIBAFQGFXmWT5iBAgEBWQPriAgp98QW5HgECBAgQOCKg0I8oeYYAAQIEsgLSbwso9NuEAggQIECAwPMCCv35HbgBAQIECGQFWqQr9BZrNiQBAgQIVBdQ6NU3bD4CBAgQyAoskq7QF1mEaxAgQIAAgTsCCv2OnncJECBAgEBW4HC6Qj9M5UECBAgQILCugEJfdzduRoAAAQIEDgtcKvTD6R4kQIAAAQIEpggo9CnMDiFAgAABAlmBBQs9O7B0AgQIECBQUUChV9yqmQgQIECgnUC7Qm+3YQMTIECAQAsBhd5izYYkQIAAgeoCCn3ohoURIECAAIFnBBT6M+5OJUCAAAECQwUU+lDObJh0AgQIECDwSkChv5LxOQECBAgQ2EhAoW+0rOxVpRMgQIDAzgIKfeftuTsBAgQIEPhbQKH/DeE/WQHpBAgQIJAVUOhZX+kECBAgQGCKgEKfwuyQrIB0AgQIEFDo/gYIECBAgEABAYVeYIlGyApIJ0CAwA4CCn2HLbkjAQIECBD4QUCh/wDkawJZAekECBAYI6DQxzhKIUCAAAECjwoo9Ef5HU4gKyCdAIE+Agq9z65NSoAAAQKFBRR64eUajUBWQDoBAisJKPSVtuEuBAgQIEDgooBCvwjnNQIEsgLSCRA4J6DQz3l5mgABAgQILCmg0Jdci0sRIJAVkE6gnoBCr7dTExEgQIBAQwGF3nDpRiZAICsgncATAgr9CXVnEiBAgACBwQIKfTCoOAIECGQFpBP4XkChf+/iUwIECBAgsJWAQt9qXS5LgACBrID0fQUU+r67c3MCBAgQIPCvgEL/l8IPBAgQIJAVkJ4UUOhJXdkECBAgQGCSgEKfBO0YAgQIEMgKdE9X6N3/AsxPgAABAiUEFHqJNRqCAAECBLIC66cr9PV35IYECBAgQOBHAYX+I5EHCBAgQIBAVmBEukIfoSiDAAECBAg8LKDQH16A4wkQIECAwAiB14U+Il0GAQIECBAgMEVAoU9hdggBAgQIEMgKPFXo2amkEyBAgACBZgIKvdnCjUuAAAECNQVqFnrNXZmKAAECBAi8FFDoL2l8QYAAAQIE9hFQ6Od35Q0CBAgQILCcgEJfbiUuRIAAAQIEzgso9PNm2TekEyBAgACBCwIK/QKaVwgQIECAwGoCCn21jWTvI50AAQIEigoo9KKLNRYBAgQI9BJQ6L32nZ1WOgECBAg8JqDQH6N3MAECBAgQGCeg0MdZSsoKSCdAgACBNwIK/Q2OrwgQIECAwC4CCn2XTblnVkA6AQIENhdQ6Jsv0PUJECBAgMCfAgr9TwX/EMgKSCdAgEBcQKHHiR1AgAABAgTyAgo9b+wEAlkB6QQIEPhDQKH/geD/BAgQIEBgdwGFvvsG3Z9AVkA6AQKbCCj0TRblmgQIECBA4J2AQn+n4zsCBLIC0gkQGCag0IdRCiJAgAABAs8JKPTn7J1MgEBWQDqBVgIKvdW6DUuAAAECVQUUetXNmosAgayAdAKLCSj0xRbiOgQIECBA4IqAQr+i5h0CBAhkBaQTOC2g0E+TeYEAAQIECKwnoNDX24kbESBAICsgvaSAQi+5VkMRIECAQDcBhd5t4+YlQIBAVkD6QwIK/SF4xxIgQIAAgZECCn2kpiwCBAgQyApIfymg0F/S+IIAAQIECOwj8H8A9HYv3wAAAARJREFUAAD//1QF9fgAAAAGSURBVAMA6HoCWdxOZO0AAAAASUVORK5CYII="
  }
];
let paintHistoryIndex = 0;
let shapes = [
  {
    name: "Line",
    graphic: "images/line.png"
  },
  {
    name: "Rectangle",
    graphic: "images/squareLine.png"
  },
  {
    name: "Circle",
    graphic: "images/circleLine.png"
  }
];
let shapeIndex = 0;
let paintForLine = {
  sx: 0,
  sy: 0,
  ex: 0,
  ey: 0
};
let paintTextDrag = false;
let paintTextX = 100;
let paintTextY = 100;
let paintBold = false;
let paintItalic = false;
let paintLS;
let paintF = "desktop";
let paintO;
let media = {
  drag: false,
  maximized: false,
  open: false
};
let mediaLS;
let mediaF = "desktop";
let mediaO;
let mediaZoom = 1;
let wallpaperF = "desktop";
let wallpaperO;
let profiles = [];
let toolbox = {
  drag: false,
  maximized: false,
  open: false
};
let suggestedIndex;
let otherSuggestedIndices = [];
let seeMoreIndex;
let slideshowIndex = 0;
let toolboxLS;
let toolboxF = "desktop";
let toolboxO;
let newAppIcon = "images/settings.png";
let newAppScreenshots = [];
let terminal = {
  drag: false,
  maximized: false,
  open: false
};
let commands = [
  {
    value: "clear",
    desc: "Clear the terminal",
    fun: function (str) {
      terminalContentVekEl.innerHTML = "";
    }
  },
  {
    value: "help",
    desc: "List all commands",
    fun: function (str) {
      for (let i = 0; i < commands.length; i++) {
        termRespond(commands[i].value + " - " + commands[i].desc, false);
      }
    }
  },
  {
    value: "dir",
    desc: "Display current directory",
    fun: function (str) {
      if (terminalDir == "desktop") {
        termRespond("Directory: root", false);
        termRespond("", false);
        termRespond("Child Directories:", false);
        let counter = 0;
        for (let i = 0; i < dir.length; i++) {
          if (dir[i].parent == terminalDir) {
            let extension = "";
            if (dir[i].type == "document") {
              extension = ".txt";
            } else if (dir[i].type == "html") {
              extension = ".html";
            } else if (dir[i].type == "let") {
              extension = ".let";
            } else if (dir[i].type == "o++") {
              extension = ".o++";
            } else if (dir[i].type == "image") {
              extension = ".png";
            } else if (dir[i].type == "music") {
              extension = ".mp3";
            }
            counter++;
            termRespond(counter + ". " + dir[i].name + extension, false);
          }
        }
      } else {
        termRespond("Directory: " + dir[terminalDir].name, false);
        termRespond("", false);
        if (dir[terminalDir].parent == "desktop") {
          termRespond("Parent Directory: ROOT", false);
        } else {
          termRespond("Parent Directory: " + dir[dir[terminalDir].parent].name, false);
        }
        termRespond("", false);
        termRespond("Child Directories:", false);
        let counter = 0;
        for (let i = 0; i < dir.length; i++) {
          if (dir[i].parent == terminalDir) {
            let extension = "";
            if (dir[i].type == "document") {
              extension = ".txt";
            } else if (dir[i].type == "html") {
              extension = ".html";
            } else if (dir[i].type == "let") {
              extension = ".let";
            } else if (dir[i].type == "o++") {
              extension = ".o++";
            } else if (dir[i].type == "image") {
              extension = ".png";
            } else if (dir[i].type == "music") {
              extension = ".mp3";
            }
            counter++;
            termRespond(counter + ". " + dir[i].name + extension, false);
          }
        }
      }
    }
  },
  {
    value: "cd",
    desc: "Change directory",
    fun: function (str) {
      let togo = str.substring(3, str.length);
      let foundE = false;
      for (let i = 0; i < dir.length; i++) {
        if (dir[i].parent == terminalDir && dir[i].name.toLowerCase() == togo && dir[i].type == "folder") {
          foundE = true;
          terminalDir = i;
          for (let i = 0; i < commands.length; i++) {
            if (commands[i].value == "dir") {
              commands[i].fun("dir");
            }
          }
        }
      }
      if (!foundE) {
        termRespond("Directory not found", true);
      }
    }
  },
  {
    value: "mkdir",
    desc: "Create directory",
    fun: function (str) {
      let name = str.substring(6, str.length);
      if (name.length > 0) {
        fileUsage += 0.1;
        lastId++;
        let newDir = {
          id: lastId,
          name: name,
          type: "folder",
          parent: terminalDir,
          drag: false
        };
        dir.push(newDir);
        if (terminalDir == "desktop") {
          let newFolderEl = document.createElement("div");
          newFolderEl.id = newDir.id;
          newFolderEl.classList.add("desktopIcon");
          newFolderEl.style.marginLeft = Math.floor(Math.random() * 90) + "vw";
          newFolderEl.style.marginTop = Math.floor(Math.random() * 90) + "vh";
          let newFolderGraphicEl = document.createElement("img");
          newFolderGraphicEl.id = "graphic" + newDir.id;
          newFolderGraphicEl.src = folderGraphic;
          newFolderGraphicEl.draggable = false;
          newFolderEl.appendChild(newFolderGraphicEl);
          let folderNameEl = document.createElement("p");
          folderNameEl.id = "folderName" + newDir.id;
          folderNameEl.innerText = newDir.name;
          newFolderEl.appendChild(folderNameEl);
          desktopEl.appendChild(newFolderEl);
          newFolderEl.addEventListener("mousedown", () => {
            newDir.drag = true;
          });
          newFolderEl.addEventListener("click", () => {
            folderWinEl.style.display = "flex";
            setTimeout(() => {
              folderWinEl.style.transform = "none";
              folderWinEl.style.opacity = "100%";
            }, 1);
            storageTaskEl.style.display = "flex";
            setTimeout(() => {
              storageTaskEl.style.transform = "none";
              storageTaskEl.style.opacity = "100%";
            }, 1);
            if (folder.maximized) {
              maximizeFolder();
            }
            folderWinEl.style.marginLeft = Math.floor(Math.random() * 50) + "vw";
            folderWinEl.style.marginTop = Math.floor(Math.random() * 50) + "vh";
            folder.open = true;
            ls = dir.indexOf(newDir);
          });
          newFolderEl.addEventListener("contextmenu", () => {
            for (let i = 0; i < dir.length; i++) {
              if (dir[i].parent == "clipboard") {
                let ix = i;
                dir.splice(i, 1);
                dir = dir.map(item => {
                  if (item.parent > ix) {
                    return { ...item, parent: item.parent - 1 };
                  }
                  return item;
                });
              }
            }
            newFolderEl.outerHTML = "";
            newDir.parent = "clipboard";
            if (!clipboardE) {
              toggleClipboard();
            }
            closeFolder();
          });
        }
        for (let i = 0; i < commands.length; i++) {
          if (commands[i].value == "dir") {
            commands[i].fun("dir");
          }
        }
      } else {
        termRespond("Error: file name must be atlest one character long!", true);
      }
    }
  },
  {
    value: "del",
    desc: "Delete item (without file extension)",
    fun: function (str) {
      let toDel = str.substring(4, str.length);
      let foundE = false;
      for (let i = 0; i < dir.length; i++) {
        if (dir[i].parent == terminalDir && dir[i].name.toLowerCase() == toDel) {
          foundE = true;
          fileUsage -= 0.1;
          for (let i = 0; i < dir.length; i++) {
            if (dir[i].parent == i) {
              if (dir[i].type == "folder") {
                fileUsage -= 0.1;
              }
            }
          }
          cancelDeleteFolder();
          closeFolder();
          if (dir[i].parent == "desktop") {
            document.getElementById(dir[i].id).outerHTML = "";
          }
          let ix = i;
          dir.splice(i, 1);
          dir = dir.map(item => {
            if (item.parent > ix) {
              return { ...item, parent: item.parent - 1 };
            }
            return item;
          });
          for (let i = 0; i < commands.length; i++) {
            if (commands[i].value == "dir") {
              commands[i].fun("dir");
            }
          }
        }
      }
      if (!foundE) {
        termRespond("Error: directory not found!", true);
      }
    }
  },
  {
    value: "/",
    desc: "Go to parent directory",
    fun: function (str) {
      if (terminalDir == "desktop") {
        termRespond("Error: you are in the root directory!", true);
      } else {
        terminalDir = dir[terminalDir].parent;
        for (let i = 0; i < commands.length; i++) {
          if (commands[i].value == "dir") {
            commands[i].fun("dir");
          }
        }
      }
    }
  },
  {
    value: "//",
    desc: "Go to root",
    fun: function (str) {
      terminalDir = "desktop";
      for (let i = 0; i < commands.length; i++) {
        if (commands[i].value == "dir") {
          commands[i].fun("dir");
        }
      }
    }
  },
  {
    value: "clipboard",
    desc: "View what is in the clipboard",
    fun: function (str) {
      let foundE = false;
      for (let i = 0; i < dir.length; i++) {
        if (dir[i].parent == "clipboard") {
          foundE = true;
          let extension = "";
          if (dir[i].type == "document") {
            extension = ".txt";
          } else if (dir[i].type == "html") {
            extension = ".html";
          } else if (dir[i].type == "let") {
            extension = ".let";
          } else if (dir[i].type == "o++") {
            extension = ".o++";
          } else if (dir[i].type == "image") {
            extension = ".png";
          } else if (dir[i].type == "music") {
            extension = ".mp3";
          }
          termRespond("File: " + dir[i].name + extension, false);
        }
      }
      if (!foundE) {
        termRespond("Clipboard is empty.", false);
      }
    }
  },
  {
    value: "cut",
    desc: "Cut file to clipboard (without file extension)",
    fun: function (str) {
      let toCut = str.substring(4, str.length);
      let foundE = false;
      for (let i = 0; i < dir.length; i++) {
        if (dir[i].parent == terminalDir && dir[i].name.toLowerCase() == toCut) {
          foundE = true;
          for (let j = 0; j < dir.length; j++) {
            if (dir[j].parent == "clipboard") {
              let ix = j;
              dir.splice(j, 1);
              dir = dir.map(item => {
                if (item.parent > ix) {
                  return { ...item, parent: item.parent - 1 };
                }
                return item;
              });
            }
          }
          if (dir[i].parent == "desktop") {
            document.getElementById(dir[i].id).outerHTML = "";
          }
          dir[i].parent = "clipboard";
          closeFolder();
          for (let i = 0; i < commands.length; i++) {
            if (commands[i].value == "clipboard") {
              commands[i].fun("clipboard");
            }
          }
        }
      }
      if (!foundE) {
        termRespond("Directory not found", true);
      }
    }
  },
  {
    value: "paste",
    desc: "Paste file from clipboard",
    fun: function (str) {
      let foundE = false;
      for (let i = 0; i < dir.length; i++) {
        if (dir[i].parent == "clipboard") {
          dir[i].parent = terminalDir;
          foundE = true;
          if (dir[i].parent == "desktop") {
            if (dir[i].type == "folder") {
              let newFolderEl = document.createElement("div");
              newFolderEl.id = dir[i].id;
              newFolderEl.classList.add("desktopIcon");
              newFolderEl.style.marginLeft = event.clientX - 50 + "px";
              newFolderEl.style.marginTop = event.clientY - 50 + "px";
              let newFolderGraphicEl = document.createElement("img");
              newFolderGraphicEl.id = "graphic" + dir[i].id;
              newFolderGraphicEl.src = folderGraphic;
              newFolderGraphicEl.draggable = false;
              newFolderEl.appendChild(newFolderGraphicEl);
              let folderNameEl = document.createElement("p");
              folderNameEl.id = "folderName" + dir[i].id;
              folderNameEl.innerText = dir[i].name;
              newFolderEl.appendChild(folderNameEl);
              desktopEl.appendChild(newFolderEl);
              newFolderEl.addEventListener("mousedown", () => {
                dir[i].drag = true;
              });
              newFolderEl.addEventListener("click", () => {
                folderWinEl.style.display = "flex";
                setTimeout(() => {
                  folderWinEl.style.transform = "none";
                  folderWinEl.style.opacity = "100%";
                }, 1);
                storageTaskEl.style.display = "flex";
                setTimeout(() => {
                  storageTaskEl.style.transform = "none";
                  storageTaskEl.style.opacity = "100%";
                }, 1);
                if (folder.maximized) {
                  maximizeFolder();
                }
                folderWinEl.style.marginLeft = Math.floor(Math.random() * 50) + "vw";
                folderWinEl.style.marginTop = Math.floor(Math.random() * 50) + "vh";
                folder.open = true;
                ls = i;
              });
              newFolderEl.addEventListener("contextmenu", () => {
                for (let j = 0; j < dir.length; j++) {
                  if (dir[j].parent == "clipboard") {
                    let ix = j;
                    dir.splice(j, 1);
                    dir = dir.map(item => {
                      if (item.parent > ix) {
                        return { ...item, parent: item.parent - 1 };
                      }
                      return item;
                    });
                  }
                }
                newFolderEl.outerHTML = "";
                dir[i].parent = "clipboard";
                if (!clipboardE) {
                  toggleClipboard();
                }
              });
            } else if (dir[i].type == "document") {
              let newFolderEl = document.createElement("div");
              newFolderEl.id = dir[i].id;
              newFolderEl.classList.add("desktopIcon");
              newFolderEl.style.marginLeft = event.clientX - 50 + "px";
              newFolderEl.style.marginTop = event.clientY - 50 + "px";
              let newFolderGraphicEl = document.createElement("img");
              newFolderGraphicEl.src = "images/notepad.png";
              newFolderGraphicEl.draggable = false;
              newFolderEl.appendChild(newFolderGraphicEl);
              let folderNameEl = document.createElement("p");
              folderNameEl.id = "documentName" + dir[i].id;
              folderNameEl.innerText = dir[i].name;
              newFolderEl.appendChild(folderNameEl);
              desktopEl.appendChild(newFolderEl);
              newFolderEl.addEventListener("mousedown", () => {
                dir[i].drag = true;
              });
              newFolderEl.addEventListener("click", () => {
                openNotepad();
                notepadLS = i;
                notepadContentVekEl.value = dir[i].content;
              });
              newFolderEl.addEventListener("contextmenu", () => {
                for (let j = 0; j < dir.length; j++) {
                  if (dir[j].parent == "clipboard") {
                    let ix = j;
                    dir.splice(j, 1);
                    dir = dir.map(item => {
                      if (item.parent > ix) {
                        return { ...item, parent: item.parent - 1 };
                      }
                      return item;
                    });
                  }
                }
                newFolderEl.outerHTML = "";
                dir[i].parent = "clipboard";
                if (!clipboardE) {
                  toggleClipboard();
                }
              });
            } else if (dir[i].type == "html") {
              let newFolderEl = document.createElement("div");
              newFolderEl.id = dir[i].id;
              newFolderEl.classList.add("desktopIcon");
              newFolderEl.style.marginLeft = event.clientX - 50 + "px";
              newFolderEl.style.marginTop = event.clientY - 50 + "px";
              let newFolderGraphicEl = document.createElement("img");
              newFolderGraphicEl.src = "images/html.svg";
              newFolderGraphicEl.draggable = false;
              newFolderEl.appendChild(newFolderGraphicEl);
              let folderNameEl = document.createElement("p");
              folderNameEl.id = "htmlName" + dir[i].id;
              folderNameEl.innerText = dir[i].name;
              newFolderEl.appendChild(folderNameEl);
              desktopEl.appendChild(newFolderEl);
              newFolderEl.addEventListener("mousedown", () => {
                dir[i].drag = true;
              });
              newFolderEl.addEventListener("click", () => {
                openPrism();
                lastId++;
                let newTab = {
                  id: lastId,
                  href: "*con*" + dir[i].content
                };
                tabs.push(newTab);
                tabIndex = tabs.length - 1;
                aukaContentEl.srcdoc = dir[i].content;
              });
              newFolderEl.addEventListener("contextmenu", () => {
                for (let j = 0; j < dir.length; j++) {
                  if (dir[j].parent == "clipboard") {
                    let ix = j;
                    dir.splice(j, 1);
                    dir = dir.map(item => {
                      if (item.parent > ix) {
                        return { ...item, parent: item.parent - 1 };
                      }
                      return item;
                    });
                  }
                }
                newFolderEl.outerHTML = "";
                dir[i].parent = "clipboard";
                if (!clipboardE) {
                  toggleClipboard();
                }
              });
            } else if (dir[i].type == "let") {
              let newFolderEl = document.createElement("div");
              newFolderEl.id = dir[i].id;
              newFolderEl.classList.add("desktopIcon");
              newFolderEl.style.marginLeft = event.clientX - 50 + "px";
              newFolderEl.style.marginTop = event.clientY - 50 + "px";
              let newFolderGraphicEl = document.createElement("img");
              newFolderGraphicEl.src = "images/let.png";
              newFolderGraphicEl.draggable = false;
              newFolderEl.appendChild(newFolderGraphicEl);
              let folderNameEl = document.createElement("p");
              folderNameEl.id = "letName" + dir[i].id;
              folderNameEl.innerText = dir[i].name;
              newFolderEl.appendChild(folderNameEl);
              desktopEl.appendChild(newFolderEl);
              newFolderEl.addEventListener("mousedown", () => {
                dir[i].drag = true;
              });
              newFolderEl.addEventListener("click", () => {
                eval(dir[i].content)
              });
              newFolderEl.addEventListener("contextmenu", () => {
                for (let j = 0; j < dir.length; j++) {
                  if (dir[j].parent == "clipboard") {
                    let ix = j;
                    dir.splice(j, 1);
                    dir = dir.map(item => {
                      if (item.parent > ix) {
                        return { ...item, parent: item.parent - 1 };
                      }
                      return item;
                    });
                  }
                }
                newFolderEl.outerHTML = "";
                dir[i].parent = "clipboard";
                if (!clipboardE) {
                  toggleClipboard();
                }
              });
            } else if (dir[i].type == "o++") {
              let newFolderEl = document.createElement("div");
              newFolderEl.id = dir[i].id;
              newFolderEl.classList.add("desktopIcon");
              newFolderEl.style.marginLeft = event.clientX - 50 + "px";
              newFolderEl.style.marginTop = event.clientY - 50 + "px";
              let newFolderGraphicEl = document.createElement("img");
              newFolderGraphicEl.src = "images/o++.png";
              newFolderGraphicEl.draggable = false;
              newFolderEl.appendChild(newFolderGraphicEl);
              let folderNameEl = document.createElement("p");
              folderNameEl.id = "letName" + dir[i].id;
              folderNameEl.innerText = dir[i].name;
              newFolderEl.appendChild(folderNameEl);
              desktopEl.appendChild(newFolderEl);
              newFolderEl.addEventListener("mousedown", () => {
                dir[i].drag = true;
              });
              newFolderEl.addEventListener("click", () => {
                eval(dir[i].content)
              });
              newFolderEl.addEventListener("contextmenu", () => {
                for (let j = 0; j < dir.length; j++) {
                  if (dir[j].parent == "clipboard") {
                    let ix = j;
                    dir.splice(j, 1);
                    dir = dir.map(item => {
                      if (item.parent > ix) {
                        return { ...item, parent: item.parent - 1 };
                      }
                      return item;
                    });
                  }
                }
                newFolderEl.outerHTML = "";
                dir[i].parent = "clipboard";
                if (!clipboardE) {
                  toggleClipboard();
                }
              });
            } else if (dir[i].type == "image") {
              let newFolderEl = document.createElement("div");
              newFolderEl.id = dir[i].id;
              newFolderEl.classList.add("desktopIcon");
              newFolderEl.style.marginLeft = event.clientX - 50 + "px";
              newFolderEl.style.marginTop = event.clientY - 50 + "px";
              let newFolderGraphicEl = document.createElement("img");
              newFolderGraphicEl.id = "graphic" + dir[i].id;
              newFolderGraphicEl.src = dir[i].content;
              newFolderGraphicEl.style.border = "1px solid black";
              newFolderGraphicEl.style.backgroundColor = "white";
              newFolderGraphicEl.draggable = false;
              newFolderEl.appendChild(newFolderGraphicEl);
              let folderNameEl = document.createElement("p");
              folderNameEl.id = "imageName" + dir[i].id;
              folderNameEl.innerText = dir[i].name;
              newFolderEl.appendChild(folderNameEl);
              desktopEl.appendChild(newFolderEl);
              newFolderEl.addEventListener("mousedown", () => {
                dir[i].drag = true;
              });
              newFolderEl.addEventListener("click", () => {
                openMediaViewer();
                mediaO = i;
                okOpenMedia();
              });
              newFolderEl.addEventListener("contextmenu", () => {
                for (let j = 0; j < dir.length; j++) {
                  if (dir[j].parent == "clipboard") {
                    let ix = j;
                    dir.splice(j, 1);
                    dir = dir.map(item => {
                      if (item.parent > ix) {
                        return { ...item, parent: item.parent - 1 };
                      }
                      return item;
                    });
                  }
                }
                newFolderEl.outerHTML = "";
                dir[i].parent = "clipboard";
                if (!clipboardE) {
                  toggleClipboard();
                }
              });
              desktopEl.prepend(newFolderEl);
            } else if (dir[i].type == "music") {
              let newFolderEl = document.createElement("div");
              newFolderEl.id = dir[i].id;
              newFolderEl.classList.add("desktopIcon");
              newFolderEl.style.marginLeft = event.clientX - 50 + "px";
              newFolderEl.style.marginTop = event.clientY - 50 + "px";
              let newFolderGraphicEl = document.createElement("img");
              newFolderGraphicEl.src = "images/music.png";
              newFolderGraphicEl.draggable = false;
              newFolderEl.appendChild(newFolderGraphicEl);
              let folderNameEl = document.createElement("p");
              folderNameEl.id = "musicName" + dir[i].id;
              folderNameEl.innerText = dir[i].name;
              newFolderEl.appendChild(folderNameEl);
              desktopEl.appendChild(newFolderEl);
              newFolderEl.addEventListener("mousedown", () => {
                dir[i].drag = true;
              });
              newFolderEl.addEventListener("click", () => {
                openMediaViewer();
                mediaO = i;
                okOpenMedia();
              });
              newFolderEl.addEventListener("contextmenu", () => {
                for (let j = 0; j < dir.length; j++) {
                  if (dir[j].parent == "clipboard") {
                    let ix = j;
                    dir.splice(j, 1);
                    dir = dir.map(item => {
                      if (item.parent > ix) {
                        return { ...item, parent: item.parent - 1 };
                      }
                      return item;
                    });
                  }
                }
                newFolderEl.outerHTML = "";
                dir[i].parent = "clipboard";
                if (!clipboardE) {
                  toggleClipboard();
                }
              });
              desktopEl.prepend(newFolderEl);
            }
          }
          for (let i = 0; i < commands.length; i++) {
            if (commands[i].value == "dir") {
              commands[i].fun("dir");
            }
          }
        }
      }
      if (!foundE) {
        termRespond("Clipboard is empty!", true);
      }
    }
  },
  {
    value: "open",
    desc: "Open file with default application (without file extension)",
    fun: function (str) {
      let toOpen = str.substring(5, str.length).toLowerCase();
      let foundE = false;
      for (let i = 0; i < dir.length; i++) {
        if (!foundE && dir[i].parent == terminalDir && dir[i].name.toLowerCase() == toOpen) {
          if (dir[i].type == "document") {
            foundE = true;
            openNotepad();
            notepadLS = i;
            notepadContentVekEl.value = dir[i].content;
          } else if (dir[i].type == "html") {
            openPrism();
            lastId++;
            let newTab = {
              id: lastId,
              href: "*con*" + dir[i].content
            };
            tabs.push(newTab);
            tabIndex = tabs.length - 1;
            aukaContentEl.srcdoc = dir[i].content;
          } else if (dir[i].type == "image") {
            foundE = true;
            openMediaViewer();
            mediaO = i;
            okOpenMedia();
          } else if (dir[i].type == "music") {
            foundE = true;
            openMediaViewer();
            mediaO = i;
            okOpenMedia();
          }
        }
      }
      if (!foundE) {
        termRespond("Error: File not found!", true);
      }
    }
  },
  {
    value: "edit",
    desc: "Edit file with default application (without file extension)",
    fun: function (str) {
      let toOpen = str.substring(5, str.length).toLowerCase();
      let foundE = false;
      for (let i = 0; i < dir.length; i++) {
        if (!foundE && dir[i].parent == terminalDir && dir[i].name.toLowerCase() == toOpen) {
          if (dir[i].type == "document") {
            foundE = true;
            openNotepad();
            notepadLS = i;
            notepadContentVekEl.value = dir[i].content;
          } else if (dir[i].type == "html") {
            foundE = true;
            openNotepad();
            notepadLS = i;
            notepadContentVekEl.value = dir[i].content;
          } else if (dir[i].type == "let") {
            foundE = true;
            openNotepad();
            notepadLS = i;
            notepadContentVekEl.value = dir[i].content;
          } else if (dir[i].type == "o++") {
            foundE = true;
            openNotepad();
            notepadLS = i;
            notepadContentVekEl.value = dir[i].content;
          } else if (dir[i].type == "image") {
            foundE = true;
            openPaint();
            const img = new Image();
            img.onload = () => {
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.drawImage(img, 0, 0);
            };
            img.src = dir[i].content;
            paintLS = i;
          }
        }
      }
      if (!foundE) {
        termRespond("Error: File not found!", true);
      }
    }
  },
  {
    value: "run",
    desc: "Run program (without file extension)",
    fun: function (str) {
      let toOpen = str.substring(4, str.length).toLowerCase();
      let foundE = false;
      for (let i = 0; i < applications.length; i++) {
        if (applications[i].name.toLowerCase() == toOpen && applications[i].installed) {
          foundE = true;
          applications[i].clickFun();
        }
      }
      for (let i = 0; i < dir.length; i++) {
        if (!foundE && dir[i].parent == terminalDir && dir[i].name.toLowerCase() == toOpen) {
          if (dir[i].type == "let") {
            foundE = true;
            eval(dir[i].content);
          } else if (dir[i].type == "o++") {
            foundE = true;
            eval(dir[i].content);
          }
        }
      }
      if (!foundE) {
        termRespond("Error: Program not found!", true);
      }
    }
  },
  {
    value: "rep",
    desc: "Repeat last command",
    fun: function (str) {
      if (!lastCommand || lastCommand.toLowerCase().startsWith("rep")) {
        termRespond("Error: There are no previous commands!", true);
      } else {
        terminalInputEl.value = lastCommand;
        termQuery();
      }
    }
  },
  {
    value: "echo",
    desc: "Repeat string",
    fun: function (str) {
      let toSay = str.toLowerCase().substring(5, str.length);
      termRespond(toSay, false);
    }
  },
  {
    value: "exit",
    desc: "Exit terminal",
    fun: function (str) {
      closeTerminal();
    }
  },
  {
    value: "quit",
    desc: "Power off your computer",
    fun: function (str) {
      powerOff();
      closeTerminal();
    }
  },
  {
    value: "reboot",
    desc: "Restart your computer",
    fun: function (str) {
      restart();
      closeTerminal();
    }
  },
  {
    value: "logout",
    desc: "Log out of your account",
    fun: function (str) {
      logOut();
      closeTerminal();
    }
  },
  {
    value: "install",
    desc: "Install an application",
    fun: function (str) {
      let toInstall = str.substring(8, str.length);
      let foundE = false;
      for (let i = 0; i < applications.length; i++) {
        if (applications[i].name.toLowerCase() == toInstall && !foundE) {
          foundE = true;
          if (applications[i].installed) {
            termRespond("Application is already installed.", false);
          } else {
            termRespond("Installing...", false);
            applications[i].install = true;
            setTimeout(() => {
              applications[i].install = false;
              applications[i].installed = true;
              updateApplications();
              appUsage += 1;
              notify("Toolbox Says:", applications[i].name + " has been installed!");
              termRespond("Application successfully installed!.", false);
            }, 10000);
          }
        }
      }
      if (!foundE) {
        termRespond("Error: Application not found!", true);
      }
    }
  },
  {
    value: "uninstall",
    desc: "Uninstall an application",
    fun: function (str) {
      let toUninstall = str.substring(10, str.length);
      let foundE = false;
      for (let i = 0; i < applications.length; i++) {
        if (applications[i].name.toLowerCase() == toUninstall && !foundE && applications[i].installed) {
          foundE = true;
          termRespond("Application successfully uninstalled!", false);
          applications[i].installed = false;
          updateApplications();
        }
      }
      if (!foundE) {
        termRespond("Error: Application not found!", true);
      }
    }
  },
  {
    value: "theme",
    desc: "Change terminal theme",
    fun: function (str) {
      let themeId = Number(str.substring(6, str.length)) - 1;
      if (terminalThemes[themeId]) {
        terminalContentVekEl.style.backgroundColor = terminalThemes[themeId].bg;
        terminalContentVekEl.style.color = terminalThemes[themeId].fg;
      } else {
        termRespond("Error: Theme not found", true);
      }
    }
  },
  {
    value: "usrtm",
    desc: "Choose custom theme color",
    fun: function (str) {
      let newTheme = str.substring(6, str.length);
      themeColor = newTheme;
    }
  },
  {
    value: "usrtm_light",
    desc: "Choose custom light theme color",
    fun: function (str) {
      let newTheme = str.substring(12, str.length);
      hoverThemeColor = newTheme;
    }
  },
  {
    value: "usrtm_dark",
    desc: "Choose custom light theme color",
    fun: function (str) {
      let newTheme = str.substring(11, str.length);
      darkThemeColor = newTheme;
    }
  },
  {
    value: "invbar",
    desc: "Toggle taskbar visibility",
    fun: function (str) {
      navInvisibleE = !navInvisibleE;
    }
  },
  {
    value: "blurbar",
    desc: "Toggle taskbar blur (works only when taskbar is visible)",
    fun: function (str) {
      navBlurE = !navBlurE;
    }
  },
  {
    value: "floatbar",
    desc: "Toggle floating taskbar",
    fun: function (str) {
      navFloatE = !navFloatE;
    }
  },
  {
    value: "tix install",
    desc: "Install Apps with details in File Manager",
    fun: function (str) {
      let userInput = str.substring(this.value.length + 1, str.length);
      lastId++;
      let newDir = {
        id: lastId,
        name: `tix-install date: ${new Date()}`,
        type: "document",
        parent: 0,
        content: `User ${username} Installed the following Packages: ${userInput} On the following date: ${new Date()}`,
        drag: false
      };
      dir.push(newDir);




      for (let i = 0; i < applications.length; i++) {
        let element = applications[i];
        if (element.name.toLowerCase() == userInput.toLowerCase()) {
          if (element.installed) {
            termRespond(`The Package: ${userInput} was already located.`);
            break;
          } else {
            termRespond(`The Package: ${userInput} was Installed.`);
            applications[i].installed = true;
            updateApplications();
            break;
          }
        }
      }

    }
  },
  {
    value: "tix delete",
    desc: "Delete Apps with details in File Manager",
    fun: function (str) {
      let userInput = str.substring(this.value.length + 1, str.length);
      lastId++;
      let newDir = {
        id: lastId,
        name: `tix-delete date: ${new Date()}`,
        type: "document",
        parent: 0,
        content: `[REMOVED] User ${username} Deleting the following Packages: ${userInput} On the following date: ${new Date()}`,
        drag: false
      };
      dir.push(newDir);




      for (let i = 0; i < applications.length; i++) {
        let element = applications[i];
        if (element.name.toLowerCase() == userInput.toLowerCase()) {
          if (element.installed) {
            termRespond(`The Package: ${userInput} was Removed.`);
            applications[i].installed = false;
            updateApplications();
            break;
          } else {
            termRespond("Package wasn't located on the Hard Drive.");
            break;
          }
        }
      }


    }
  },
  {
    value: "date",
    desc: "Get date",
    fun: function (str) {
      termRespond(new Date, false);
    }
  },
  {
    value: "sk del /",
    desc: "ONLY DO THIS IF YOU NEVER WANT TO USE YOUR COMPUTER AGAIN",
    fun: function (str) {
      fileUsage = 99999;
    }
  },
  {
    value: "ver",
    desc: "Return current Ofekal version",
    fun: function (str) {
      let currentTime = new Date;
      termRespond(`&copy; Ofekal Naudnik ${currentTime.getFullYear()} V${version}<br><br><pre style="text-align:left ;">     ##        ##   
    ###       ###   
     ###      ##    
      ##     ###    
 ################## 
#########+==**+==*##
########*====+===+*#
########*+==+*===+##
##########**###**###
 ################## </pre>`);
    }
  },
  {
    value: "joinbar",
    desc: "Toggle whether the taskbar appears 'joined' to the bottom of the desktop",
    fun: function (str) {
      joinbar = !joinbar;
    }
  }
];
let terminalDir = "desktop";
let lastCommand;
let terminalThemes = [
  {
    bg: "#222222",
    fg: "lime"
  },
  {
    bg: "#222222",
    fg: "white"
  },
  {
    bg: "#222222",
    fg: "yellow"
  },
  {
    bg: "navy",
    fg: "lime"
  },
  {
    bg: "navy",
    fg: "white"
  },
  {
    bg: "navy",
    fg: "yellow"
  },
  {
    bg: "white",
    fg: "darkgreen"
  },
  {
    bg: "white",
    fg: "black"
  },
  {
    bg: "white",
    fg: "maroon"
  },
];
let navInvisibleE = false;
let navBlurE = false;
let navFloatE = false;
let hasKeyboardE = false;
let keyboardE = false;
let languages = [
  {
    name: "Latin",
    keys: [
      {
        value: "1",
        parent: 0,
        width: 2
      },
      {
        value: "2",
        parent: 0,
        width: 2
      },
      {
        value: "3",
        parent: 0,
        width: 2
      },
      {
        value: "4",
        parent: 0,
        width: 2
      },
      {
        value: "5",
        parent: 0,
        width: 2
      },
      {
        value: "6",
        parent: 0,
        width: 2
      },
      {
        value: "7",
        parent: 0,
        width: 2
      },
      {
        value: "8",
        parent: 0,
        width: 2
      },
      {
        value: "9",
        parent: 0,
        width: 2
      },
      {
        value: "0",
        parent: 0,
        width: 2
      },
      {
        value: "q",
        parent: 1,
        width: 2
      },
      {
        value: "w",
        parent: 1,
        width: 2
      },
      {
        value: "e",
        parent: 1,
        width: 2
      },
      {
        value: "r",
        parent: 1,
        width: 2
      },
      {
        value: "t",
        parent: 1,
        width: 2
      },
      {
        value: "y",
        parent: 1,
        width: 2
      },
      {
        value: "u",
        parent: 1,
        width: 2
      },
      {
        value: "i",
        parent: 1,
        width: 2
      },
      {
        value: "o",
        parent: 1,
        width: 2
      },
      {
        value: "p",
        parent: 1,
        width: 2
      },
      {
        value: "a",
        parent: 2,
        width: 2
      },
      {
        value: "s",
        parent: 2,
        width: 2
      },
      {
        value: "d",
        parent: 2,
        width: 2
      },
      {
        value: "f",
        parent: 2,
        width: 2
      },
      {
        value: "g",
        parent: 2,
        width: 2
      },
      {
        value: "h",
        parent: 2,
        width: 2
      },
      {
        value: "j",
        parent: 2,
        width: 2
      },
      {
        value: "k",
        parent: 2,
        width: 2
      },
      {
        value: "l",
        parent: 2,
        width: 2
      },
      {
        value: "z",
        parent: 3,
        width: 2
      },
      {
        value: "x",
        parent: 3,
        width: 2
      },
      {
        value: "c",
        parent: 3,
        width: 2
      },
      {
        value: "v",
        parent: 3,
        width: 2
      },
      {
        value: "b",
        parent: 3,
        width: 2
      },
      {
        value: "n",
        parent: 3,
        width: 2
      },
      {
        value: "m",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "$",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "á",
        parent: 5,
        width: 2
      },
      {
        value: "à",
        parent: 5,
        width: 2
      },
      {
        value: "ä",
        parent: 5,
        width: 2
      },
      {
        value: "â",
        parent: 5,
        width: 2
      },
      {
        value: "č",
        parent: 5,
        width: 2
      },
      {
        value: "ç",
        parent: 5,
        width: 2
      },
      {
        value: "é",
        parent: 5,
        width: 2
      },
      {
        value: "è",
        parent: 5,
        width: 2
      },
      {
        value: "ê",
        parent: 5,
        width: 2
      },
      {
        value: "í",
        parent: 5,
        width: 2
      },
      {
        value: "ì",
        parent: 5,
        width: 2
      },
      {
        value: "î",
        parent: 5,
        width: 2
      },
      {
        value: "ñ",
        parent: 5,
        width: 2
      },
      {
        value: "ó",
        parent: 5,
        width: 2
      },
      {
        value: "ö",
        parent: 5,
        width: 2
      },
      {
        value: "ô",
        parent: 5,
        width: 2
      },
      {
        value: "š",
        parent: 5,
        width: 2
      },
      {
        value: "ú",
        parent: 5,
        width: 2
      },
      {
        value: "ü",
        parent: 5,
        width: 2
      },
      {
        value: "û",
        parent: 5,
        width: 2
      },
      {
        value: "ž",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Cyrillic",
    keys: [
      {
        value: "1",
        parent: 0,
        width: 2
      },
      {
        value: "2",
        parent: 0,
        width: 2
      },
      {
        value: "3",
        parent: 0,
        width: 2
      },
      {
        value: "4",
        parent: 0,
        width: 2
      },
      {
        value: "5",
        parent: 0,
        width: 2
      },
      {
        value: "6",
        parent: 0,
        width: 2
      },
      {
        value: "7",
        parent: 0,
        width: 2
      },
      {
        value: "8",
        parent: 0,
        width: 2
      },
      {
        value: "9",
        parent: 0,
        width: 2
      },
      {
        value: "0",
        parent: 0,
        width: 2
      },
      {
        value: "й",
        parent: 1,
        width: 2
      },
      {
        value: "ц",
        parent: 1,
        width: 2
      },
      {
        value: "у",
        parent: 1,
        width: 2
      },
      {
        value: "к",
        parent: 1,
        width: 2
      },
      {
        value: "е",
        parent: 1,
        width: 2
      },
      {
        value: "ё",
        parent: 1,
        width: 2
      },
      {
        value: "н",
        parent: 1,
        width: 2
      },
      {
        value: "г",
        parent: 1,
        width: 2
      },
      {
        value: "ш",
        parent: 1,
        width: 2
      },
      {
        value: "Щ",
        parent: 1,
        width: 2
      },
      {
        value: "з",
        parent: 1,
        width: 2
      },
      {
        value: "х",
        parent: 1,
        width: 2
      },
      {
        value: "ъ",
        parent: 1,
        width: 2
      },
      {
        value: "ф",
        parent: 2,
        width: 2
      },
      {
        value: "ы",
        parent: 2,
        width: 2
      },
      {
        value: "в",
        parent: 2,
        width: 2
      },
      {
        value: "а",
        parent: 2,
        width: 2
      },
      {
        value: "п",
        parent: 2,
        width: 2
      },
      {
        value: "р",
        parent: 2,
        width: 2
      },
      {
        value: "о",
        parent: 2,
        width: 2
      },
      {
        value: "л",
        parent: 3,
        width: 2
      },
      {
        value: "д",
        parent: 2,
        width: 2
      },
      {
        value: "ж",
        parent: 2,
        width: 2
      },
      {
        value: "э",
        parent: 2,
        width: 2
      },
      {
        value: "я",
        parent: 3,
        width: 2
      },
      {
        value: "ч",
        parent: 3,
        width: 2
      },
      {
        value: "с",
        parent: 3,
        width: 2
      },
      {
        value: "м",
        parent: 3,
        width: 2
      },
      {
        value: "и",
        parent: 3,
        width: 2
      },
      {
        value: "т",
        parent: 3,
        width: 2
      },
      {
        value: "ь",
        parent: 3,
        width: 2
      },
      {
        value: "б",
        parent: 3,
        width: 2
      },
      {
        value: "ю",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "«",
        parent: 4,
        width: 2
      },
      {
        value: "»",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "₽",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ӑ",
        parent: 5,
        width: 2
      },
      {
        value: "ґ",
        parent: 5,
        width: 2
      },
      {
        value: "ғ",
        parent: 5,
        width: 2
      },
      {
        value: "ꙣ",
        parent: 5,
        width: 2
      },
      {
        value: "є",
        parent: 5,
        width: 2
      },
      {
        value: "ә",
        parent: 5,
        width: 2
      },
      {
        value: "ӽ",
        parent: 5,
        width: 2
      },
      {
        value: "ї",
        parent: 5,
        width: 2
      },
      {
        value: "v",
        parent: 5,
        width: 2
      },
      {
        value: "ԩ",
        parent: 5,
        width: 2
      },
      {
        value: "ѵ",
        parent: 5,
        width: 2
      },
      {
        value: "ң",
        parent: 5,
        width: 2
      },
      {
        value: "ө",
        parent: 5,
        width: 2
      },
      {
        value: "ӧ",
        parent: 5,
        width: 2
      },
      {
        value: "ӄ",
        parent: 5,
        width: 2
      },
      {
        value: "қ",
        parent: 5,
        width: 2
      },
      {
        value: "ҫ",
        parent: 5,
        width: 2
      },
      {
        value: "ў",
        parent: 5,
        width: 2
      },
      {
        value: "ұ",
        parent: 5,
        width: 2
      },
      {
        value: "ү",
        parent: 5,
        width: 2
      },
      {
        value: "ҙ",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Greek",
    keys: [
      {
        value: "1",
        parent: 0,
        width: 2
      },
      {
        value: "2",
        parent: 0,
        width: 2
      },
      {
        value: "3",
        parent: 0,
        width: 2
      },
      {
        value: "4",
        parent: 0,
        width: 2
      },
      {
        value: "5",
        parent: 0,
        width: 2
      },
      {
        value: "6",
        parent: 0,
        width: 2
      },
      {
        value: "7",
        parent: 0,
        width: 2
      },
      {
        value: "8",
        parent: 0,
        width: 2
      },
      {
        value: "9",
        parent: 0,
        width: 2
      },
      {
        value: "0",
        parent: 0,
        width: 2
      },
      {
        value: "ς",
        parent: 1,
        width: 2
      },
      {
        value: "ε",
        parent: 1,
        width: 2
      },
      {
        value: "έ",
        parent: 1,
        width: 2
      },
      {
        value: "ρ",
        parent: 1,
        width: 2
      },
      {
        value: "τ",
        parent: 1,
        width: 2
      },
      {
        value: "υ",
        parent: 1,
        width: 2
      },
      {
        value: "ύ",
        parent: 1,
        width: 2
      },
      {
        value: "θ",
        parent: 1,
        width: 2
      },
      {
        value: "ι",
        parent: 1,
        width: 2
      },
      {
        value: "ί",
        parent: 1,
        width: 2
      },
      {
        value: "ο",
        parent: 1,
        width: 2
      },
      {
        value: "ό",
        parent: 1,
        width: 2
      },
      {
        value: "π",
        parent: 1,
        width: 2
      },
      {
        value: "α",
        parent: 2,
        width: 2
      },
      {
        value: "ά",
        parent: 2,
        width: 2
      },
      {
        value: "σ",
        parent: 2,
        width: 2
      },
      {
        value: "δ",
        parent: 2,
        width: 2
      },
      {
        value: "φ",
        parent: 2,
        width: 2
      },
      {
        value: "γ",
        parent: 2,
        width: 2
      },
      {
        value: "ή",
        parent: 2,
        width: 2
      },
      {
        value: "ξ",
        parent: 2,
        width: 2
      },
      {
        value: "κ",
        parent: 2,
        width: 2
      },
      {
        value: "λ",
        parent: 2,
        width: 2
      },
      {
        value: "ζ",
        parent: 3,
        width: 2
      },
      {
        value: "χ",
        parent: 3,
        width: 2
      },
      {
        value: "ψ",
        parent: 3,
        width: 2
      },
      {
        value: "ω",
        parent: 3,
        width: 2
      },
      {
        value: "ώ",
        parent: 3,
        width: 2
      },
      {
        value: "β",
        parent: 3,
        width: 2
      },
      {
        value: "ν",
        parent: 3,
        width: 2
      },
      {
        value: "μ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: ";",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "«",
        parent: 4,
        width: 2
      },
      {
        value: "»",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "€",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: "?",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ϐ",
        parent: 5,
        width: 2
      },
      {
        value: "ϑ",
        parent: 5,
        width: 2
      },
      {
        value: "ϰ",
        parent: 5,
        width: 2
      },
      {
        value: "ϖ",
        parent: 5,
        width: 2
      },
      {
        value: "ϱ",
        parent: 5,
        width: 2
      },
      {
        value: "ϕ",
        parent: 5,
        width: 2
      },
      {
        value: "ϝ",
        parent: 5,
        width: 2
      },
      {
        value: "ϛ",
        parent: 5,
        width: 2
      },
      {
        value: "ϟ",
        parent: 5,
        width: 2
      },
      {
        value: "ϡ",
        parent: 5,
        width: 2
      },
      {
        value: "ϲ",
        parent: 5,
        width: 2
      },
      {
        value: "𐠀",
        parent: 5,
        width: 2
      },
      {
        value: "𐠁",
        parent: 5,
        width: 2
      },
      {
        value: "𐠂",
        parent: 5,
        width: 2
      },
      {
        value: "𐠃",
        parent: 5,
        width: 2
      },
      {
        value: "𐠄",
        parent: 5,
        width: 2
      },
      {
        value: "𐠅",
        parent: 5,
        width: 2
      },
      {
        value: "𐠈",
        parent: 5,
        width: 2
      },
      {
        value: "𐠊",
        parent: 5,
        width: 2
      },
      {
        value: "𐠋",
        parent: 5,
        width: 2
      },
      {
        value: "𐠑",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Arabic",
    keys: [
      {
        value: "١",
        parent: 0,
        width: 2
      },
      {
        value: "٢",
        parent: 0,
        width: 2
      },
      {
        value: "٣",
        parent: 0,
        width: 2
      },
      {
        value: "٤",
        parent: 0,
        width: 2
      },
      {
        value: "٥",
        parent: 0,
        width: 2
      },
      {
        value: "٦",
        parent: 0,
        width: 2
      },
      {
        value: "٧",
        parent: 0,
        width: 2
      },
      {
        value: "٨",
        parent: 0,
        width: 2
      },
      {
        value: "٩",
        parent: 0,
        width: 2
      },
      {
        value: "٠",
        parent: 0,
        width: 2
      },
      {
        value: "ض",
        parent: 1,
        width: 2
      },
      {
        value: "ص",
        parent: 1,
        width: 2
      },
      {
        value: "ث",
        parent: 1,
        width: 2
      },
      {
        value: "ق",
        parent: 1,
        width: 2
      },
      {
        value: "ف",
        parent: 1,
        width: 2
      },
      {
        value: "غ",
        parent: 1,
        width: 2
      },
      {
        value: "ع",
        parent: 1,
        width: 2
      },
      {
        value: "ه",
        parent: 1,
        width: 2
      },
      {
        value: "خ",
        parent: 1,
        width: 2
      },
      {
        value: "ح",
        parent: 1,
        width: 2
      },
      {
        value: "ج",
        parent: 1,
        width: 2
      },
      {
        value: "د",
        parent: 1,
        width: 2
      },
      {
        value: "ش",
        parent: 2,
        width: 2
      },
      {
        value: "س",
        parent: 2,
        width: 2
      },
      {
        value: "ي",
        parent: 2,
        width: 2
      },
      {
        value: "ب",
        parent: 2,
        width: 2
      },
      {
        value: "ل",
        parent: 2,
        width: 2
      },
      {
        value: "ا",
        parent: 2,
        width: 2
      },
      {
        value: "ت",
        parent: 2,
        width: 2
      },
      {
        value: "ن",
        parent: 2,
        width: 2
      },
      {
        value: "م",
        parent: 2,
        width: 2
      },
      {
        value: "ك",
        parent: 2,
        width: 2
      },
      {
        value: "ط",
        parent: 2,
        width: 2
      },
      {
        value: "ئ",
        parent: 3,
        width: 2
      },
      {
        value: "ء",
        parent: 3,
        width: 2
      },
      {
        value: "ؤ",
        parent: 3,
        width: 2
      },
      {
        value: "ر",
        parent: 3,
        width: 2
      },
      {
        value: "لا",
        parent: 3,
        width: 2
      },
      {
        value: "ى",
        parent: 3,
        width: 2
      },
      {
        value: "ة",
        parent: 3,
        width: 2
      },
      {
        value: "و",
        parent: 3,
        width: 2
      },
      {
        value: "ز",
        parent: 3,
        width: 2
      },
      {
        value: "ظ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "؟",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "«",
        parent: 4,
        width: 2
      },
      {
        value: "»",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "&#x20C1;",
        parent: 3,
        width: 2
      },
      {
        value: "٪",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: "،",
        parent: 0,
        width: 2
      },
      {
        value: "٫",
        parent: 0,
        width: 2
      },
      {
        value: "٬",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: "؛",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "پ",
        parent: 5,
        width: 2
      },
      {
        value: "گ",
        parent: 5,
        width: 2
      },
      {
        value: "ڭ",
        parent: 5,
        width: 2
      },
      {
        value: "ے",
        parent: 5,
        width: 2
      },
      {
        value: "ۂ",
        parent: 5,
        width: 2
      },
      {
        value: "ڑ",
        parent: 5,
        width: 2
      },
      {
        value: "ڐ",
        parent: 5,
        width: 2
      },
      {
        value: "ڈ",
        parent: 5,
        width: 2
      },
      {
        value: "ٹ",
        parent: 5,
        width: 2
      },
      {
        value: "ݿ",
        parent: 5,
        width: 2
      },
      {
        value: "ݾ",
        parent: 5,
        width: 2
      },
      {
        value: "ڛ",
        parent: 5,
        width: 2
      },
      {
        value: "ژ",
        parent: 5,
        width: 2
      },
      {
        value: "چ",
        parent: 5,
        width: 2
      },
      {
        value: "ێ",
        parent: 5,
        width: 2
      },
      {
        value: "ۊ",
        parent: 5,
        width: 2
      },
      {
        value: "ۆ",
        parent: 5,
        width: 2
      },
      {
        value: "ڷ",
        parent: 5,
        width: 2
      },
      {
        value: "ڶ",
        parent: 5,
        width: 2
      },
      {
        value: "ڵ",
        parent: 5,
        width: 2
      },
      {
        value: "ڕ",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Hebrew",
    keys: [
      {
        value: "1",
        parent: 0,
        width: 2
      },
      {
        value: "2",
        parent: 0,
        width: 2
      },
      {
        value: "3",
        parent: 0,
        width: 2
      },
      {
        value: "4",
        parent: 0,
        width: 2
      },
      {
        value: "5",
        parent: 0,
        width: 2
      },
      {
        value: "6",
        parent: 0,
        width: 2
      },
      {
        value: "7",
        parent: 0,
        width: 2
      },
      {
        value: "8",
        parent: 0,
        width: 2
      },
      {
        value: "9",
        parent: 0,
        width: 2
      },
      {
        value: "0",
        parent: 0,
        width: 2
      },
      {
        value: "ק",
        parent: 1,
        width: 2
      },
      {
        value: "ר",
        parent: 1,
        width: 2
      },
      {
        value: "א",
        parent: 1,
        width: 2
      },
      {
        value: "ט",
        parent: 1,
        width: 2
      },
      {
        value: "ו",
        parent: 1,
        width: 2
      },
      {
        value: "ן",
        parent: 1,
        width: 2
      },
      {
        value: "ם",
        parent: 1,
        width: 2
      },
      {
        value: "פ",
        parent: 1,
        width: 2
      },
      {
        value: "ש",
        parent: 2,
        width: 2
      },
      {
        value: "ד",
        parent: 2,
        width: 2
      },
      {
        value: "ג",
        parent: 2,
        width: 2
      },
      {
        value: "כ",
        parent: 2,
        width: 2
      },
      {
        value: "ע",
        parent: 2,
        width: 2
      },
      {
        value: "י",
        parent: 2,
        width: 2
      },
      {
        value: "ח",
        parent: 2,
        width: 2
      },
      {
        value: "ל",
        parent: 2,
        width: 2
      },
      {
        value: "ך",
        parent: 2,
        width: 2
      },
      {
        value: "ף",
        parent: 2,
        width: 2
      },
      {
        value: "ז",
        parent: 3,
        width: 2
      },
      {
        value: "ס",
        parent: 3,
        width: 2
      },
      {
        value: "ב",
        parent: 3,
        width: 2
      },
      {
        value: "ה",
        parent: 3,
        width: 2
      },
      {
        value: "נ",
        parent: 3,
        width: 2
      },
      {
        value: "מ",
        parent: 3,
        width: 2
      },
      {
        value: "צ",
        parent: 3,
        width: 2
      },
      {
        value: "ת",
        parent: 3,
        width: 2
      },
      {
        value: "ץ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "₪",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "a",
        parent: 5,
        width: 2
      },
      {
        value: "b",
        parent: 5,
        width: 2
      },
      {
        value: "c",
        parent: 5,
        width: 2
      },
      {
        value: "d",
        parent: 5,
        width: 2
      },
      {
        value: "e",
        parent: 5,
        width: 2
      },
      {
        value: "f",
        parent: 5,
        width: 2
      },
      {
        value: "g",
        parent: 5,
        width: 2
      },
      {
        value: "h",
        parent: 5,
        width: 2
      },
      {
        value: "i",
        parent: 5,
        width: 2
      },
      {
        value: "j",
        parent: 5,
        width: 2
      },
      {
        value: "k",
        parent: 5,
        width: 2
      },
      {
        value: "l",
        parent: 5,
        width: 2
      },
      {
        value: "m",
        parent: 5,
        width: 2
      },
      {
        value: "n",
        parent: 5,
        width: 2
      },
      {
        value: "o",
        parent: 5,
        width: 2
      },
      {
        value: "p",
        parent: 5,
        width: 2
      },
      {
        value: "q",
        parent: 5,
        width: 2
      },
      {
        value: "r",
        parent: 5,
        width: 2
      },
      {
        value: "s",
        parent: 5,
        width: 2
      },
      {
        value: "t",
        parent: 5,
        width: 2
      },
      {
        value: "u",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Georgian",
    keys: [
      {
        value: "1",
        parent: 0,
        width: 2
      },
      {
        value: "2",
        parent: 0,
        width: 2
      },
      {
        value: "3",
        parent: 0,
        width: 2
      },
      {
        value: "4",
        parent: 0,
        width: 2
      },
      {
        value: "5",
        parent: 0,
        width: 2
      },
      {
        value: "6",
        parent: 0,
        width: 2
      },
      {
        value: "7",
        parent: 0,
        width: 2
      },
      {
        value: "8",
        parent: 0,
        width: 2
      },
      {
        value: "9",
        parent: 0,
        width: 2
      },
      {
        value: "0",
        parent: 0,
        width: 2
      },
      {
        value: "ქ",
        parent: 1,
        width: 2
      },
      {
        value: "ჭ",
        parent: 1,
        width: 2
      },
      {
        value: "ე",
        parent: 1,
        width: 2
      },
      {
        value: "რ",
        parent: 1,
        width: 2
      },
      {
        value: "თ",
        parent: 1,
        width: 2
      },
      {
        value: "ყ",
        parent: 1,
        width: 2
      },
      {
        value: "უ",
        parent: 1,
        width: 2
      },
      {
        value: "ი",
        parent: 1,
        width: 2
      },
      {
        value: "ო",
        parent: 1,
        width: 2
      },
      {
        value: "პ",
        parent: 1,
        width: 2
      },
      {
        value: "ა",
        parent: 2,
        width: 2
      },
      {
        value: "ს",
        parent: 2,
        width: 2
      },
      {
        value: "დ",
        parent: 2,
        width: 2
      },
      {
        value: "ფ",
        parent: 2,
        width: 2
      },
      {
        value: "გ",
        parent: 2,
        width: 2
      },
      {
        value: "ჰ",
        parent: 2,
        width: 2
      },
      {
        value: "ჟ",
        parent: 2,
        width: 2
      },
      {
        value: "კ",
        parent: 2,
        width: 2
      },
      {
        value: "ლ",
        parent: 2,
        width: 2
      },
      {
        value: "ზ",
        parent: 3,
        width: 2
      },
      {
        value: "ძ",
        parent: 3,
        width: 2
      },
      {
        value: "ხ",
        parent: 3,
        width: 2
      },
      {
        value: "ც",
        parent: 3,
        width: 2
      },
      {
        value: "ჩ",
        parent: 3,
        width: 2
      },
      {
        value: "ვ",
        parent: 3,
        width: 2
      },
      {
        value: "ბ",
        parent: 3,
        width: 2
      },
      {
        value: "ნ",
        parent: 3,
        width: 2
      },
      {
        value: "მ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "₾",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ჱ",
        parent: 5,
        width: 2
      },
      {
        value: "ჲ",
        parent: 5,
        width: 2
      },
      {
        value: "ჳ",
        parent: 5,
        width: 2
      },
      {
        value: "ჴ",
        parent: 5,
        width: 2
      },
      {
        value: "ჵ",
        parent: 5,
        width: 2
      },
      {
        value: "ჶ",
        parent: 5,
        width: 2
      },
      {
        value: "ⴀ",
        parent: 5,
        width: 2
      },
      {
        value: "ⴁ",
        parent: 5,
        width: 2
      },
      {
        value: "ⴂ",
        parent: 5,
        width: 2
      },
      {
        value: "ⴃ",
        parent: 5,
        width: 2
      },
      {
        value: "ⴄ",
        parent: 5,
        width: 2
      },
      {
        value: "ⴅ",
        parent: 5,
        width: 2
      },
      {
        value: "ⴆ",
        parent: 5,
        width: 2
      },
      {
        value: "ⴇ",
        parent: 5,
        width: 2
      },
      {
        value: "ⴈ",
        parent: 5,
        width: 2
      },
      {
        value: "ⴉ",
        parent: 5,
        width: 2
      },
      {
        value: "ⴊ",
        parent: 5,
        width: 2
      },
      {
        value: "ⴋ",
        parent: 5,
        width: 2
      },
      {
        value: "ⴌ",
        parent: 5,
        width: 2
      },
      {
        value: "ⴍ",
        parent: 5,
        width: 2
      },
      {
        value: "ⴎ",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Armenian",
    keys: [
      {
        value: "1",
        parent: 0,
        width: 2
      },
      {
        value: "2",
        parent: 0,
        width: 2
      },
      {
        value: "3",
        parent: 0,
        width: 2
      },
      {
        value: "4",
        parent: 0,
        width: 2
      },
      {
        value: "5",
        parent: 0,
        width: 2
      },
      {
        value: "6",
        parent: 0,
        width: 2
      },
      {
        value: "7",
        parent: 0,
        width: 2
      },
      {
        value: "8",
        parent: 0,
        width: 2
      },
      {
        value: "9",
        parent: 0,
        width: 2
      },
      {
        value: "0",
        parent: 0,
        width: 2
      },
      {
        value: "ֆ",
        parent: 1,
        width: 2
      },
      {
        value: "ձ",
        parent: 1,
        width: 2
      },
      {
        value: "օ",
        parent: 1,
        width: 2
      },
      {
        value: "է",
        parent: 1,
        width: 2
      },
      {
        value: "ղ",
        parent: 1,
        width: 2
      },
      {
        value: "ծ",
        parent: 1,
        width: 2
      },
      {
        value: "փ",
        parent: 1,
        width: 2
      },
      {
        value: "բ",
        parent: 1,
        width: 2
      },
      {
        value: "ս",
        parent: 1,
        width: 2
      },
      {
        value: "մ",
        parent: 1,
        width: 2
      },
      {
        value: "ո",
        parent: 1,
        width: 2
      },
      {
        value: "ի",
        parent: 1,
        width: 2
      },
      {
        value: "կ",
        parent: 1,
        width: 2
      },
      {
        value: "ը",
        parent: 1,
        width: 2
      },
      {
        value: "թ",
        parent: 1,
        width: 2
      },
      {
        value: "ծ",
        parent: 1,
        width: 2
      },
      {
        value: "ց",
        parent: 1,
        width: 2
      },
      {
        value: "ջ",
        parent: 2,
        width: 2
      },
      {
        value: "վ",
        parent: 2,
        width: 2
      },
      {
        value: "գ",
        parent: 2,
        width: 2
      },
      {
        value: "է",
        parent: 2,
        width: 2
      },
      {
        value: "ա",
        parent: 2,
        width: 2
      },
      {
        value: "ն",
        parent: 2,
        width: 2
      },
      {
        value: "ի",
        parent: 2,
        width: 2
      },
      {
        value: "տ",
        parent: 2,
        width: 2
      },
      {
        value: "հ",
        parent: 2,
        width: 2
      },
      {
        value: "պ",
        parent: 2,
        width: 2
      },
      {
        value: "ր",
        parent: 2,
        width: 2
      },
      {
        value: "ժ",
        parent: 3,
        width: 2
      },
      {
        value: "դ",
        parent: 3,
        width: 2
      },
      {
        value: "չ",
        parent: 3,
        width: 2
      },
      {
        value: "յ",
        parent: 3,
        width: 2
      },
      {
        value: "զ",
        parent: 3,
        width: 2
      },
      {
        value: "լ",
        parent: 3,
        width: 2
      },
      {
        value: "ք",
        parent: 3,
        width: 2
      },
      {
        value: "խ",
        parent: 3,
        width: 2
      },
      {
        value: "շ",
        parent: 3,
        width: 2
      },
      {
        value: "ռ",
        parent: 3,
        width: 2
      },
      {
        value: "ե",
        parent: 3,
        width: 2
      },
      {
        value: "ւ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "՜",
        parent: 4,
        width: 2
      },
      {
        value: "՞",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "«",
        parent: 4,
        width: 2
      },
      {
        value: "»",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "֏",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "և",
        parent: 5,
        width: 2
      },
      {
        value: "a",
        parent: 5,
        width: 2
      },
      {
        value: "b",
        parent: 5,
        width: 2
      },
      {
        value: "c",
        parent: 5,
        width: 2
      },
      {
        value: "d",
        parent: 5,
        width: 2
      },
      {
        value: "e",
        parent: 5,
        width: 2
      },
      {
        value: "f",
        parent: 5,
        width: 2
      },
      {
        value: "g",
        parent: 5,
        width: 2
      },
      {
        value: "h",
        parent: 5,
        width: 2
      },
      {
        value: "i",
        parent: 5,
        width: 2
      },
      {
        value: "j",
        parent: 5,
        width: 2
      },
      {
        value: "k",
        parent: 5,
        width: 2
      },
      {
        value: "l",
        parent: 5,
        width: 2
      },
      {
        value: "m",
        parent: 5,
        width: 2
      },
      {
        value: "n",
        parent: 5,
        width: 2
      },
      {
        value: "o",
        parent: 5,
        width: 2
      },
      {
        value: "p",
        parent: 5,
        width: 2
      },
      {
        value: "q",
        parent: 5,
        width: 2
      },
      {
        value: "r",
        parent: 5,
        width: 2
      },
      {
        value: "s",
        parent: 5,
        width: 2
      },
      {
        value: "t",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Chinese (Bopomofo)",
    keys: [
      {
        value: "1",
        parent: 0,
        width: 2
      },
      {
        value: "2",
        parent: 0,
        width: 2
      },
      {
        value: "3",
        parent: 0,
        width: 2
      },
      {
        value: "4",
        parent: 0,
        width: 2
      },
      {
        value: "5",
        parent: 0,
        width: 2
      },
      {
        value: "6",
        parent: 0,
        width: 2
      },
      {
        value: "7",
        parent: 0,
        width: 2
      },
      {
        value: "8",
        parent: 0,
        width: 2
      },
      {
        value: "9",
        parent: 0,
        width: 2
      },
      {
        value: "0",
        parent: 0,
        width: 2
      },
      {
        value: "ㄑ",
        parent: 1,
        width: 2
      },
      {
        value: "ㄡ",
        parent: 1,
        width: 2
      },
      {
        value: "ㄜ",
        parent: 1,
        width: 2
      },
      {
        value: "ㄖ",
        parent: 1,
        width: 2
      },
      {
        value: "ㄊ",
        parent: 1,
        width: 2
      },
      {
        value: "ㄬ",
        parent: 1,
        width: 2
      },
      {
        value: "ㄨ",
        parent: 1,
        width: 2
      },
      {
        value: "ㄧ",
        parent: 1,
        width: 2
      },
      {
        value: "ㄛ",
        parent: 1,
        width: 2
      },
      {
        value: "ㄆ",
        parent: 1,
        width: 2
      },
      {
        value: "ㄓ",
        parent: 1,
        width: 2
      },
      {
        value: "ㄔ",
        parent: 1,
        width: 2
      },
      {
        value: "ㄚ",
        parent: 2,
        width: 2
      },
      {
        value: "ㄙ",
        parent: 2,
        width: 2
      },
      {
        value: "ㄉ",
        parent: 2,
        width: 2
      },
      {
        value: "ㄈ",
        parent: 2,
        width: 2
      },
      {
        value: "ㄍ",
        parent: 2,
        width: 2
      },
      {
        value: "ㄏ",
        parent: 2,
        width: 2
      },
      {
        value: "ㄐ",
        parent: 2,
        width: 2
      },
      {
        value: "ㄎ",
        parent: 2,
        width: 2
      },
      {
        value: "ㄌ",
        parent: 2,
        width: 2
      },
      {
        value: "ㄕ",
        parent: 2,
        width: 2
      },
      {
        value: "ㄝ",
        parent: 2,
        width: 2
      },
      {
        value: "ㄗ",
        parent: 3,
        width: 2
      },
      {
        value: "ㄒ",
        parent: 3,
        width: 2
      },
      {
        value: "ㄘ",
        parent: 3,
        width: 2
      },
      {
        value: "ㄪ",
        parent: 3,
        width: 2
      },
      {
        value: "ㄅ",
        parent: 3,
        width: 2
      },
      {
        value: "ㄋ",
        parent: 3,
        width: 2
      },
      {
        value: "ㄇ",
        parent: 3,
        width: 2
      },
      {
        value: "ㄞ",
        parent: 3,
        width: 2
      },
      {
        value: "ㄟ",
        parent: 3,
        width: 2
      },
      {
        value: "ㄠ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "¥",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ㄢ",
        parent: 5,
        width: 2
      },
      {
        value: "ㄣ",
        parent: 5,
        width: 2
      },
      {
        value: "ㄤ",
        parent: 5,
        width: 2
      },
      {
        value: "ㄥ",
        parent: 5,
        width: 2
      },
      {
        value: "ㄦ",
        parent: 5,
        width: 2
      },
      {
        value: "ㄩ",
        parent: 5,
        width: 2
      },
      {
        value: "ㄫ",
        parent: 5,
        width: 2
      },
      {
        value: "我",
        parent: 5,
        width: 2
      },
      {
        value: "你",
        parent: 5,
        width: 2
      },
      {
        value: "他",
        parent: 5,
        width: 2
      },
      {
        value: "們",
        parent: 5,
        width: 2
      },
      {
        value: "是",
        parent: 5,
        width: 2
      },
      {
        value: "和",
        parent: 5,
        width: 2
      },
      {
        value: "或",
        parent: 5,
        width: 2
      },
      {
        value: "者",
        parent: 5,
        width: 2
      },
      {
        value: "但",
        parent: 5,
        width: 2
      },
      {
        value: "因",
        parent: 5,
        width: 2
      },
      {
        value: "為",
        parent: 5,
        width: 2
      },
      {
        value: "所",
        parent: 5,
        width: 2
      },
      {
        value: "以",
        parent: 5,
        width: 2
      },
      {
        value: "在",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Japanese (Hiragana)",
    keys: [
      {
        value: "1",
        parent: 0,
        width: 2
      },
      {
        value: "2",
        parent: 0,
        width: 2
      },
      {
        value: "3",
        parent: 0,
        width: 2
      },
      {
        value: "4",
        parent: 0,
        width: 2
      },
      {
        value: "5",
        parent: 0,
        width: 2
      },
      {
        value: "6",
        parent: 0,
        width: 2
      },
      {
        value: "7",
        parent: 0,
        width: 2
      },
      {
        value: "8",
        parent: 0,
        width: 2
      },
      {
        value: "9",
        parent: 0,
        width: 2
      },
      {
        value: "0",
        parent: 0,
        width: 2
      },
      {
        value: "あ",
        parent: 1,
        width: 2
      },
      {
        value: "い",
        parent: 1,
        width: 2
      },
      {
        value: "う",
        parent: 1,
        width: 2
      },
      {
        value: "え",
        parent: 1,
        width: 2
      },
      {
        value: "お",
        parent: 1,
        width: 2
      },
      {
        value: "か",
        parent: 1,
        width: 2
      },
      {
        value: "き",
        parent: 1,
        width: 2
      },
      {
        value: "く",
        parent: 1,
        width: 2
      },
      {
        value: "け",
        parent: 1,
        width: 2
      },
      {
        value: "こ",
        parent: 1,
        width: 2
      },
      {
        value: "た",
        parent: 1,
        width: 2
      },
      {
        value: "ち",
        parent: 1,
        width: 2
      },
      {
        value: "つ",
        parent: 1,
        width: 2
      },
      {
        value: "て",
        parent: 1,
        width: 2
      },
      {
        value: "と",
        parent: 1,
        width: 2
      },
      {
        value: "ま",
        parent: 2,
        width: 2
      },
      {
        value: "み",
        parent: 2,
        width: 2
      },
      {
        value: "む",
        parent: 2,
        width: 2
      },
      {
        value: "め",
        parent: 2,
        width: 2
      },
      {
        value: "も",
        parent: 2,
        width: 2
      },
      {
        value: "な",
        parent: 2,
        width: 2
      },
      {
        value: "に",
        parent: 2,
        width: 2
      },
      {
        value: "ぬ",
        parent: 2,
        width: 2
      },
      {
        value: "ね",
        parent: 2,
        width: 2
      },
      {
        value: "の",
        parent: 2,
        width: 2
      },
      {
        value: "さ",
        parent: 2,
        width: 2
      },
      {
        value: "し",
        parent: 2,
        width: 2
      },
      {
        value: "す",
        parent: 2,
        width: 2
      },
      {
        value: "せ",
        parent: 2,
        width: 2
      },
      {
        value: "そ",
        parent: 2,
        width: 2
      },
      {
        value: "は",
        parent: 3,
        width: 2
      },
      {
        value: "ひ",
        parent: 3,
        width: 2
      },
      {
        value: "ふ",
        parent: 3,
        width: 2
      },
      {
        value: "へ",
        parent: 3,
        width: 2
      },
      {
        value: "ほ",
        parent: 3,
        width: 2
      },
      {
        value: "ら",
        parent: 3,
        width: 2
      },
      {
        value: "り",
        parent: 3,
        width: 2
      },
      {
        value: "る",
        parent: 3,
        width: 2
      },
      {
        value: "れ",
        parent: 3,
        width: 2
      },
      {
        value: "ろ",
        parent: 3,
        width: 2
      },
      {
        value: "や",
        parent: 3,
        width: 2
      },
      {
        value: "ゆ",
        parent: 3,
        width: 2
      },
      {
        value: "よ",
        parent: 3,
        width: 2
      },
      {
        value: "わ",
        parent: 3,
        width: 2
      },
      {
        value: "を",
        parent: 3,
        width: 2
      },
      {
        value: "。",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "「",
        parent: 4,
        width: 2
      },
      {
        value: "」",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "$",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: "、",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ゐ",
        parent: 5,
        width: 2
      },
      {
        value: "ゑ",
        parent: 5,
        width: 2
      },
      {
        value: "ん",
        parent: 5,
        width: 2
      },
      {
        value: "っ",
        parent: 5,
        width: 2
      },
      {
        value: "ゝ",
        parent: 5,
        width: 2
      },
      {
        value: "ゟ",
        parent: 5,
        width: 2
      },
      {
        value: "゙",
        parent: 5,
        width: 2
      },
      {
        value: "゚",
        parent: 5,
        width: 2
      },
      {
        value: "刃",
        parent: 5,
        width: 2
      },
      {
        value: "私",
        parent: 5,
        width: 2
      },
      {
        value: "主",
        parent: 5,
        width: 2
      },
      {
        value: "公",
        parent: 5,
        width: 2
      },
      {
        value: "穴",
        parent: 5,
        width: 2
      },
      {
        value: "太",
        parent: 5,
        width: 2
      },
      {
        value: "彼",
        parent: 5,
        width: 2
      },
      {
        value: "彼",
        parent: 5,
        width: 2
      },
      {
        value: "女",
        parent: 5,
        width: 2
      },
      {
        value: "立",
        parent: 5,
        width: 2
      },
      {
        value: "羽",
        parent: 5,
        width: 2
      },
      {
        value: "其",
        parent: 5,
        width: 2
      },
      {
        value: "彼",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Japanese (Katakana)",
    keys: [
      {
        value: "1",
        parent: 0,
        width: 2
      },
      {
        value: "2",
        parent: 0,
        width: 2
      },
      {
        value: "3",
        parent: 0,
        width: 2
      },
      {
        value: "4",
        parent: 0,
        width: 2
      },
      {
        value: "5",
        parent: 0,
        width: 2
      },
      {
        value: "6",
        parent: 0,
        width: 2
      },
      {
        value: "7",
        parent: 0,
        width: 2
      },
      {
        value: "8",
        parent: 0,
        width: 2
      },
      {
        value: "9",
        parent: 0,
        width: 2
      },
      {
        value: "0",
        parent: 0,
        width: 2
      },
      {
        value: "ア",
        parent: 1,
        width: 2
      },
      {
        value: "イ",
        parent: 1,
        width: 2
      },
      {
        value: "ウ",
        parent: 1,
        width: 2
      },
      {
        value: "エ",
        parent: 1,
        width: 2
      },
      {
        value: "オ",
        parent: 1,
        width: 2
      },
      {
        value: "カ",
        parent: 1,
        width: 2
      },
      {
        value: "キ",
        parent: 1,
        width: 2
      },
      {
        value: "ク",
        parent: 1,
        width: 2
      },
      {
        value: "ケ",
        parent: 1,
        width: 2
      },
      {
        value: "コ",
        parent: 1,
        width: 2
      },
      {
        value: "タ",
        parent: 1,
        width: 2
      },
      {
        value: "チ",
        parent: 1,
        width: 2
      },
      {
        value: "ツ",
        parent: 1,
        width: 2
      },
      {
        value: "テ",
        parent: 1,
        width: 2
      },
      {
        value: "ト",
        parent: 1,
        width: 2
      },
      {
        value: "マ",
        parent: 2,
        width: 2
      },
      {
        value: "ミ",
        parent: 2,
        width: 2
      },
      {
        value: "ム",
        parent: 2,
        width: 2
      },
      {
        value: "メ",
        parent: 2,
        width: 2
      },
      {
        value: "モ",
        parent: 2,
        width: 2
      },
      {
        value: "ナ",
        parent: 2,
        width: 2
      },
      {
        value: "ニ",
        parent: 2,
        width: 2
      },
      {
        value: "ヌ",
        parent: 2,
        width: 2
      },
      {
        value: "ネ",
        parent: 2,
        width: 2
      },
      {
        value: "ノ",
        parent: 2,
        width: 2
      },
      {
        value: "サ",
        parent: 2,
        width: 2
      },
      {
        value: "シ",
        parent: 2,
        width: 2
      },
      {
        value: "ス",
        parent: 2,
        width: 2
      },
      {
        value: "セ",
        parent: 2,
        width: 2
      },
      {
        value: "ソ",
        parent: 2,
        width: 2
      },
      {
        value: "ハ",
        parent: 3,
        width: 2
      },
      {
        value: "ヒ",
        parent: 3,
        width: 2
      },
      {
        value: "フ",
        parent: 3,
        width: 2
      },
      {
        value: "ヘ",
        parent: 3,
        width: 2
      },
      {
        value: "ホ",
        parent: 3,
        width: 2
      },
      {
        value: "ラ",
        parent: 3,
        width: 2
      },
      {
        value: "リ",
        parent: 3,
        width: 2
      },
      {
        value: "ル",
        parent: 3,
        width: 2
      },
      {
        value: "レ",
        parent: 3,
        width: 2
      },
      {
        value: "ロ",
        parent: 3,
        width: 2
      },
      {
        value: "ヤ",
        parent: 3,
        width: 2
      },
      {
        value: "ユ",
        parent: 3,
        width: 2
      },
      {
        value: "ヨ",
        parent: 3,
        width: 2
      },
      {
        value: "ワ",
        parent: 3,
        width: 2
      },
      {
        value: "ヲ",
        parent: 3,
        width: 2
      },
      {
        value: "。",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "「",
        parent: 4,
        width: 2
      },
      {
        value: "」",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "$",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: "、",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ヰ",
        parent: 5,
        width: 2
      },
      {
        value: "ヱ",
        parent: 5,
        width: 2
      },
      {
        value: "ン",
        parent: 5,
        width: 2
      },
      {
        value: "ッ",
        parent: 5,
        width: 2
      },
      {
        value: "ヽ",
        parent: 5,
        width: 2
      },
      {
        value: "ヿ",
        parent: 5,
        width: 2
      },
      {
        value: "゙",
        parent: 5,
        width: 2
      },
      {
        value: "゚",
        parent: 5,
        width: 2
      },
      {
        value: "刃",
        parent: 5,
        width: 2
      },
      {
        value: "私",
        parent: 5,
        width: 2
      },
      {
        value: "主",
        parent: 5,
        width: 2
      },
      {
        value: "公",
        parent: 5,
        width: 2
      },
      {
        value: "穴",
        parent: 5,
        width: 2
      },
      {
        value: "太",
        parent: 5,
        width: 2
      },
      {
        value: "彼",
        parent: 5,
        width: 2
      },
      {
        value: "彼",
        parent: 5,
        width: 2
      },
      {
        value: "女",
        parent: 5,
        width: 2
      },
      {
        value: "立",
        parent: 5,
        width: 2
      },
      {
        value: "羽",
        parent: 5,
        width: 2
      },
      {
        value: "其",
        parent: 5,
        width: 2
      },
      {
        value: "彼",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Korean (Hangul)",
    keys: [
      {
        value: "1",
        parent: 0,
        width: 2
      },
      {
        value: "2",
        parent: 0,
        width: 2
      },
      {
        value: "3",
        parent: 0,
        width: 2
      },
      {
        value: "4",
        parent: 0,
        width: 2
      },
      {
        value: "5",
        parent: 0,
        width: 2
      },
      {
        value: "6",
        parent: 0,
        width: 2
      },
      {
        value: "7",
        parent: 0,
        width: 2
      },
      {
        value: "8",
        parent: 0,
        width: 2
      },
      {
        value: "9",
        parent: 0,
        width: 2
      },
      {
        value: "0",
        parent: 0,
        width: 2
      },
      {
        value: "ᄎ",
        parent: 1,
        width: 2
      },
      {
        value: "와",
        parent: 1,
        width: 2
      },
      {
        value: "에",
        parent: 1,
        width: 2
      },
      {
        value: "ᄅ",
        parent: 1,
        width: 2
      },
      {
        value: "ᄄ",
        parent: 1,
        width: 2
      },
      {
        value: "야",
        parent: 1,
        width: 2
      },
      {
        value: "우",
        parent: 1,
        width: 2
      },
      {
        value: "이",
        parent: 1,
        width: 2
      },
      {
        value: "오",
        parent: 1,
        width: 2
      },
      {
        value: "ᄈ",
        parent: 1,
        width: 2
      },
      {
        value: "ᄍ",
        parent: 1,
        width: 2
      },
      {
        value: "ᄏ",
        parent: 1,
        width: 2
      },
      {
        value: "ᆴ",
        parent: 1,
        width: 2
      },
      {
        value: "ᆵ",
        parent: 1,
        width: 2
      },
      {
        value: "ᆼ",
        parent: 1,
        width: 2
      },
      {
        value: "ᆽ",
        parent: 1,
        width: 2
      },
      {
        value: "ᇂ",
        parent: 1,
        width: 2
      },
      {
        value: "아",
        parent: 2,
        width: 2
      },
      {
        value: "ᄉ",
        parent: 2,
        width: 2
      },
      {
        value: "ᄃ",
        parent: 2,
        width: 2
      },
      {
        value: "ᄑ",
        parent: 2,
        width: 2
      },
      {
        value: "ᄀ",
        parent: 2,
        width: 2
      },
      {
        value: "ᄒ",
        parent: 2,
        width: 2
      },
      {
        value: "ᄌ",
        parent: 2,
        width: 2
      },
      {
        value: "ᄁ",
        parent: 2,
        width: 2
      },
      {
        value: "ᆯ",
        parent: 2,
        width: 2
      },
      {
        value: "ᄐ",
        parent: 2,
        width: 2
      },
      {
        value: "여",
        parent: 2,
        width: 2
      },
      {
        value: "ᆶ",
        parent: 2,
        width: 2
      },
      {
        value: "ᆷ",
        parent: 2,
        width: 2
      },
      {
        value: "ᆻ",
        parent: 2,
        width: 2
      },
      {
        value: "ᆾ",
        parent: 2,
        width: 2
      },
      {
        value: "ᇀ",
        parent: 2,
        width: 2
      },
      {
        value: "ᄊ",
        parent: 3,
        width: 2
      },
      {
        value: "ᆪ",
        parent: 3,
        width: 2
      },
      {
        value: "ᄎ",
        parent: 3,
        width: 2
      },
      {
        value: "웨",
        parent: 3,
        width: 2
      },
      {
        value: "ᄇ",
        parent: 3,
        width: 2
      },
      {
        value: "ᄂ",
        parent: 3,
        width: 2
      },
      {
        value: "ᄆ",
        parent: 3,
        width: 2
      },
      {
        value: "애",
        parent: 3,
        width: 2
      },
      {
        value: "얘",
        parent: 3,
        width: 2
      },
      {
        value: "어",
        parent: 3,
        width: 2
      },
      {
        value: "ᆸ",
        parent: 3,
        width: 2
      },
      {
        value: "ᆹ",
        parent: 3,
        width: 2
      },
      {
        value: "ᆺ",
        parent: 3,
        width: 2
      },
      {
        value: "ᆿ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "₩",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "여",
        parent: 5,
        width: 2
      },
      {
        value: "예",
        parent: 5,
        width: 2
      },
      {
        value: "왜",
        parent: 5,
        width: 2
      },
      {
        value: "외",
        parent: 5,
        width: 2
      },
      {
        value: "요",
        parent: 5,
        width: 2
      },
      {
        value: "워",
        parent: 5,
        width: 2
      },
      {
        value: "위",
        parent: 5,
        width: 2
      },
      {
        value: "유",
        parent: 5,
        width: 2
      },
      {
        value: "으",
        parent: 5,
        width: 2
      },
      {
        value: "의",
        parent: 5,
        width: 2
      },
      {
        value: "이",
        parent: 5,
        width: 2
      },
      {
        value: "ᆨ",
        parent: 5,
        width: 2
      },
      {
        value: "ᆩ",
        parent: 5,
        width: 2
      },
      {
        value: "ᆫ",
        parent: 5,
        width: 2
      },
      {
        value: "ᆬ",
        parent: 5,
        width: 2
      },
      {
        value: "ᆭ",
        parent: 5,
        width: 2
      },
      {
        value: "ᆮ",
        parent: 5,
        width: 2
      },
      {
        value: "ᆰ",
        parent: 5,
        width: 2
      },
      {
        value: "ᆱ",
        parent: 5,
        width: 2
      },
      {
        value: "ᆲ",
        parent: 5,
        width: 2
      },
      {
        value: "ᆳ",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Hindi",
    keys: [
      {
        value: "१",
        parent: 0,
        width: 2
      },
      {
        value: "२",
        parent: 0,
        width: 2
      },
      {
        value: "३",
        parent: 0,
        width: 2
      },
      {
        value: "४",
        parent: 0,
        width: 2
      },
      {
        value: "५",
        parent: 0,
        width: 2
      },
      {
        value: "६",
        parent: 0,
        width: 2
      },
      {
        value: "७",
        parent: 0,
        width: 2
      },
      {
        value: "८",
        parent: 0,
        width: 2
      },
      {
        value: "९",
        parent: 0,
        width: 2
      },
      {
        value: "०",
        parent: 0,
        width: 2
      },
      {
        value: "क़",
        parent: 1,
        width: 2
      },
      {
        value: "औ",
        parent: 1,
        width: 2
      },
      {
        value: "ए",
        parent: 1,
        width: 2
      },
      {
        value: "र",
        parent: 1,
        width: 2
      },
      {
        value: "त",
        parent: 1,
        width: 2
      },
      {
        value: "य",
        parent: 1,
        width: 2
      },
      {
        value: "उ",
        parent: 1,
        width: 2
      },
      {
        value: "इ",
        parent: 1,
        width: 2
      },
      {
        value: "ओ",
        parent: 1,
        width: 2
      },
      {
        value: "प",
        parent: 1,
        width: 2
      },
      {
        value: "ख",
        parent: 1,
        width: 2
      },
      {
        value: "घ",
        parent: 1,
        width: 2
      },
      {
        value: "अ",
        parent: 2,
        width: 2
      },
      {
        value: "स",
        parent: 2,
        width: 2
      },
      {
        value: "द",
        parent: 2,
        width: 2
      },
      {
        value: "फ़",
        parent: 2,
        width: 2
      },
      {
        value: "ग",
        parent: 2,
        width: 2
      },
      {
        value: "ह",
        parent: 2,
        width: 2
      },
      {
        value: "ज",
        parent: 2,
        width: 2
      },
      {
        value: "क",
        parent: 2,
        width: 2
      },
      {
        value: "ल",
        parent: 2,
        width: 2
      },
      {
        value: "ङ",
        parent: 2,
        width: 2
      },
      {
        value: "छ",
        parent: 2,
        width: 2
      },
      {
        value: "ज़",
        parent: 3,
        width: 2
      },
      {
        value: "ख़",
        parent: 3,
        width: 2
      },
      {
        value: "च",
        parent: 3,
        width: 2
      },
      {
        value: "व",
        parent: 3,
        width: 2
      },
      {
        value: "ब",
        parent: 3,
        width: 2
      },
      {
        value: "न",
        parent: 3,
        width: 2
      },
      {
        value: "म",
        parent: 3,
        width: 2
      },
      {
        value: "झ",
        parent: 3,
        width: 2
      },
      {
        value: "ञ",
        parent: 3,
        width: 2
      },
      {
        value: "ट",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "₹",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ठ",
        parent: 5,
        width: 2
      },
      {
        value: "ड",
        parent: 5,
        width: 2
      },
      {
        value: "ढ",
        parent: 5,
        width: 2
      },
      {
        value: "ण",
        parent: 5,
        width: 2
      },
      {
        value: "थ",
        parent: 5,
        width: 2
      },
      {
        value: "ध",
        parent: 5,
        width: 2
      },
      {
        value: "फ",
        parent: 5,
        width: 2
      },
      {
        value: "भ",
        parent: 5,
        width: 2
      },
      {
        value: "श",
        parent: 5,
        width: 2
      },
      {
        value: "ष",
        parent: 5,
        width: 2
      },
      {
        value: "ड़",
        parent: 5,
        width: 2
      },
      {
        value: "ढ़",
        parent: 5,
        width: 2
      },
      {
        value: "ग़",
        parent: 5,
        width: 2
      },
      {
        value: "आ",
        parent: 5,
        width: 2
      },
      {
        value: "ई",
        parent: 5,
        width: 2
      },
      {
        value: "ऊ",
        parent: 5,
        width: 2
      },
      {
        value: "ऋ",
        parent: 5,
        width: 2
      },
      {
        value: "ऐ",
        parent: 5,
        width: 2
      },
      {
        value: "ऑ",
        parent: 5,
        width: 2
      },
      {
        value: "्",
        parent: 5,
        width: 2
      },
      {
        value: "ा",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Oriya (Odia)",
    keys: [
      {
        value: "୧",
        parent: 0,
        width: 2
      },
      {
        value: "୨",
        parent: 0,
        width: 2
      },
      {
        value: "୩",
        parent: 0,
        width: 2
      },
      {
        value: "୪",
        parent: 0,
        width: 2
      },
      {
        value: "୫",
        parent: 0,
        width: 2
      },
      {
        value: "୬",
        parent: 0,
        width: 2
      },
      {
        value: "୭",
        parent: 0,
        width: 2
      },
      {
        value: "୮",
        parent: 0,
        width: 2
      },
      {
        value: "୯",
        parent: 0,
        width: 2
      },
      {
        value: "୦",
        parent: 0,
        width: 2
      },
      {
        value: "ଛ",
        parent: 1,
        width: 2
      },
      {
        value: "ୱ",
        parent: 1,
        width: 2
      },
      {
        value: "ଏ",
        parent: 1,
        width: 2
      },
      {
        value: "ର",
        parent: 1,
        width: 2
      },
      {
        value: "ତ",
        parent: 1,
        width: 2
      },
      {
        value: "ଯ",
        parent: 1,
        width: 2
      },
      {
        value: "ଉ",
        parent: 1,
        width: 2
      },
      {
        value: "ଇ",
        parent: 1,
        width: 2
      },
      {
        value: "ଓ",
        parent: 1,
        width: 2
      },
      {
        value: "ପ",
        parent: 1,
        width: 2
      },
      {
        value: "ଖ",
        parent: 1,
        width: 2
      },
      {
        value: "ଘ",
        parent: 1,
        width: 2
      },
      {
        value: "अ",
        parent: 2,
        width: 2
      },
      {
        value: "ଅ",
        parent: 2,
        width: 2
      },
      {
        value: "ସ",
        parent: 2,
        width: 2
      },
      {
        value: "ଦ",
        parent: 2,
        width: 2
      },
      {
        value: "ଫ",
        parent: 2,
        width: 2
      },
      {
        value: "ଗ",
        parent: 2,
        width: 2
      },
      {
        value: "ହ",
        parent: 2,
        width: 2
      },
      {
        value: "ଜ",
        parent: 2,
        width: 2
      },
      {
        value: "କ",
        parent: 2,
        width: 2
      },
      {
        value: "ଲ",
        parent: 2,
        width: 2
      },
      {
        value: "ଙ",
        parent: 2,
        width: 2
      },
      {
        value: "ଝ",
        parent: 2,
        width: 2
      },
      {
        value: "ଶ",
        parent: 3,
        width: 2
      },
      {
        value: "ଷ",
        parent: 3,
        width: 2
      },
      {
        value: "ଚ",
        parent: 3,
        width: 2
      },
      {
        value: "ଵ",
        parent: 3,
        width: 2
      },
      {
        value: "ବ",
        parent: 3,
        width: 2
      },
      {
        value: "ନ",
        parent: 3,
        width: 2
      },
      {
        value: "ମ",
        parent: 3,
        width: 2
      },
      {
        value: "ଞ",
        parent: 3,
        width: 2
      },
      {
        value: "ଟ",
        parent: 3,
        width: 2
      },
      {
        value: "ଠ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "₹",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ଡ",
        parent: 5,
        width: 2
      },
      {
        value: "ଢ",
        parent: 5,
        width: 2
      },
      {
        value: "ଣ",
        parent: 5,
        width: 2
      },
      {
        value: "ଥ",
        parent: 5,
        width: 2
      },
      {
        value: "ଧ",
        parent: 5,
        width: 2
      },
      {
        value: "ଭ",
        parent: 5,
        width: 2
      },
      {
        value: "ଳ",
        parent: 5,
        width: 2
      },
      {
        value: "ୟ",
        parent: 5,
        width: 2
      },
      {
        value: "ଡ଼",
        parent: 5,
        width: 2
      },
      {
        value: "ଢ଼",
        parent: 5,
        width: 2
      },
      {
        value: "ଆ",
        parent: 5,
        width: 2
      },
      {
        value: "ଈ",
        parent: 5,
        width: 2
      },
      {
        value: "ଊ",
        parent: 5,
        width: 2
      },
      {
        value: "ଋ",
        parent: 5,
        width: 2
      },
      {
        value: "ୠ",
        parent: 5,
        width: 2
      },
      {
        value: "ଌ",
        parent: 5,
        width: 2
      },
      {
        value: "ୡ",
        parent: 5,
        width: 2
      },
      {
        value: "ଐ",
        parent: 5,
        width: 2
      },
      {
        value: "ଔ",
        parent: 5,
        width: 2
      },
      {
        value: "୍",
        parent: 5,
        width: 2
      },
      {
        value: "ା",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Gujarati",
    keys: [
      {
        value: "૧",
        parent: 0,
        width: 2
      },
      {
        value: "૨",
        parent: 0,
        width: 2
      },
      {
        value: "૩",
        parent: 0,
        width: 2
      },
      {
        value: "૪",
        parent: 0,
        width: 2
      },
      {
        value: "૫",
        parent: 0,
        width: 2
      },
      {
        value: "૬",
        parent: 0,
        width: 2
      },
      {
        value: "૭",
        parent: 0,
        width: 2
      },
      {
        value: "૮",
        parent: 0,
        width: 2
      },
      {
        value: "૯",
        parent: 0,
        width: 2
      },
      {
        value: "૦",
        parent: 0,
        width: 2
      },
      {
        value: "છ",
        parent: 1,
        width: 2
      },
      {
        value: "ઔ",
        parent: 1,
        width: 2
      },
      {
        value: "એ",
        parent: 1,
        width: 2
      },
      {
        value: "ર",
        parent: 1,
        width: 2
      },
      {
        value: "ત",
        parent: 1,
        width: 2
      },
      {
        value: "ય",
        parent: 1,
        width: 2
      },
      {
        value: "ઉ",
        parent: 1,
        width: 2
      },
      {
        value: "ઇ",
        parent: 1,
        width: 2
      },
      {
        value: "ઓ",
        parent: 1,
        width: 2
      },
      {
        value: "પ",
        parent: 1,
        width: 2
      },
      {
        value: "ઘ",
        parent: 1,
        width: 2
      },
      {
        value: "ઙ",
        parent: 1,
        width: 2
      },
      {
        value: "અ",
        parent: 2,
        width: 2
      },
      {
        value: "સ",
        parent: 2,
        width: 2
      },
      {
        value: "દ",
        parent: 2,
        width: 2
      },
      {
        value: "ફ",
        parent: 2,
        width: 2
      },
      {
        value: "ગ",
        parent: 2,
        width: 2
      },
      {
        value: "હ",
        parent: 2,
        width: 2
      },
      {
        value: "જ",
        parent: 2,
        width: 2
      },
      {
        value: "ક",
        parent: 2,
        width: 2
      },
      {
        value: "લ",
        parent: 2,
        width: 2
      },
      {
        value: "ઝ",
        parent: 2,
        width: 2
      },
      {
        value: "ઞ",
        parent: 2,
        width: 2
      },
      {
        value: "શ",
        parent: 3,
        width: 2
      },
      {
        value: "ષ",
        parent: 3,
        width: 2
      },
      {
        value: "ચ",
        parent: 3,
        width: 2
      },
      {
        value: "વ",
        parent: 3,
        width: 2
      },
      {
        value: "બ",
        parent: 3,
        width: 2
      },
      {
        value: "ન",
        parent: 3,
        width: 2
      },
      {
        value: "મ",
        parent: 3,
        width: 2
      },
      {
        value: "ટ",
        parent: 3,
        width: 2
      },
      {
        value: "ઠ",
        parent: 3,
        width: 2
      },
      {
        value: "ડ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "૱",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ઢ",
        parent: 5,
        width: 2
      },
      {
        value: "ણ",
        parent: 5,
        width: 2
      },
      {
        value: "થ",
        parent: 5,
        width: 2
      },
      {
        value: "ધ",
        parent: 5,
        width: 2
      },
      {
        value: "ભ",
        parent: 5,
        width: 2
      },
      {
        value: "ળ",
        parent: 5,
        width: 2
      },
      {
        value: "આ",
        parent: 5,
        width: 2
      },
      {
        value: "ઈ",
        parent: 5,
        width: 2
      },
      {
        value: "ઊ",
        parent: 5,
        width: 2
      },
      {
        value: "ઋ",
        parent: 5,
        width: 2
      },
      {
        value: "ૠ",
        parent: 5,
        width: 2
      },
      {
        value: "ઌ",
        parent: 5,
        width: 2
      },
      {
        value: "ૡ",
        parent: 5,
        width: 2
      },
      {
        value: "ઍ",
        parent: 5,
        width: 2
      },
      {
        value: "ઐ",
        parent: 5,
        width: 2
      },
      {
        value: "ઑ",
        parent: 5,
        width: 2
      },
      {
        value: "્",
        parent: 5,
        width: 2
      },
      {
        value: "ા",
        parent: 5,
        width: 2
      },
      {
        value: "િ",
        parent: 5,
        width: 2
      },
      {
        value: "ી",
        parent: 5,
        width: 2
      },
      {
        value: "ુ",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Kannada",
    keys: [
      {
        value: "೧",
        parent: 0,
        width: 2
      },
      {
        value: "೨",
        parent: 0,
        width: 2
      },
      {
        value: "೩",
        parent: 0,
        width: 2
      },
      {
        value: "೪",
        parent: 0,
        width: 2
      },
      {
        value: "೫",
        parent: 0,
        width: 2
      },
      {
        value: "೬",
        parent: 0,
        width: 2
      },
      {
        value: "೭",
        parent: 0,
        width: 2
      },
      {
        value: "೮",
        parent: 0,
        width: 2
      },
      {
        value: "೯",
        parent: 0,
        width: 2
      },
      {
        value: "೦",
        parent: 0,
        width: 2
      },
      {
        value: "ಛ",
        parent: 1,
        width: 2
      },
      {
        value: "ಔ",
        parent: 1,
        width: 2
      },
      {
        value: "ಎ",
        parent: 1,
        width: 2
      },
      {
        value: "ರ",
        parent: 1,
        width: 2
      },
      {
        value: "ತ",
        parent: 1,
        width: 2
      },
      {
        value: "ಯ",
        parent: 1,
        width: 2
      },
      {
        value: "ಉ",
        parent: 1,
        width: 2
      },
      {
        value: "ಇ",
        parent: 1,
        width: 2
      },
      {
        value: "ಒ",
        parent: 1,
        width: 2
      },
      {
        value: "ಪ",
        parent: 1,
        width: 2
      },
      {
        value: "ಖ",
        parent: 1,
        width: 2
      },
      {
        value: "ಘ",
        parent: 1,
        width: 2
      },
      {
        value: "ಅ",
        parent: 2,
        width: 2
      },
      {
        value: "ಸ",
        parent: 2,
        width: 2
      },
      {
        value: "ದ",
        parent: 2,
        width: 2
      },
      {
        value: "ಫ",
        parent: 2,
        width: 2
      },
      {
        value: "ಗ",
        parent: 2,
        width: 2
      },
      {
        value: "ಹ",
        parent: 2,
        width: 2
      },
      {
        value: "ಜ",
        parent: 2,
        width: 2
      },
      {
        value: "ಕ",
        parent: 2,
        width: 2
      },
      {
        value: "ಲ",
        parent: 2,
        width: 2
      },
      {
        value: "ಝ",
        parent: 2,
        width: 2
      },
      {
        value: "ಞ",
        parent: 2,
        width: 2
      },
      {
        value: "ಶ",
        parent: 3,
        width: 2
      },
      {
        value: "ಷ",
        parent: 3,
        width: 2
      },
      {
        value: "ಚ",
        parent: 3,
        width: 2
      },
      {
        value: "ವ",
        parent: 3,
        width: 2
      },
      {
        value: "ಬ",
        parent: 3,
        width: 2
      },
      {
        value: "ನ",
        parent: 3,
        width: 2
      },
      {
        value: "ಮ",
        parent: 3,
        width: 2
      },
      {
        value: "ಟ",
        parent: 3,
        width: 2
      },
      {
        value: "ಠ",
        parent: 3,
        width: 2
      },
      {
        value: "ಡ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "₹",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ಢ",
        parent: 5,
        width: 2
      },
      {
        value: "ಣ",
        parent: 5,
        width: 2
      },
      {
        value: "ಥ",
        parent: 5,
        width: 2
      },
      {
        value: "ಧ",
        parent: 5,
        width: 2
      },
      {
        value: "ಭ",
        parent: 5,
        width: 2
      },
      {
        value: "ಱ",
        parent: 5,
        width: 2
      },
      {
        value: "ಳ",
        parent: 5,
        width: 2
      },
      {
        value: "ೞ",
        parent: 5,
        width: 2
      },
      {
        value: "ಆ",
        parent: 5,
        width: 2
      },
      {
        value: "ಈ",
        parent: 5,
        width: 2
      },
      {
        value: "ಊ",
        parent: 5,
        width: 2
      },
      {
        value: "ಋ",
        parent: 5,
        width: 2
      },
      {
        value: "ೠ",
        parent: 5,
        width: 2
      },
      {
        value: "ಏ",
        parent: 5,
        width: 2
      },
      {
        value: "ಐ",
        parent: 5,
        width: 2
      },
      {
        value: "ಓ",
        parent: 5,
        width: 2
      },
      {
        value: "್",
        parent: 5,
        width: 2
      },
      {
        value: "ಾ",
        parent: 5,
        width: 2
      },
      {
        value: "ಿ",
        parent: 5,
        width: 2
      },
      {
        value: "ೀ",
        parent: 5,
        width: 2
      },
      {
        value: "ು",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Telugu",
    keys: [
      {
        value: "౧",
        parent: 0,
        width: 2
      },
      {
        value: "౨",
        parent: 0,
        width: 2
      },
      {
        value: "౩",
        parent: 0,
        width: 2
      },
      {
        value: "౪",
        parent: 0,
        width: 2
      },
      {
        value: "౫",
        parent: 0,
        width: 2
      },
      {
        value: "౬",
        parent: 0,
        width: 2
      },
      {
        value: "౭",
        parent: 0,
        width: 2
      },
      {
        value: "౮",
        parent: 0,
        width: 2
      },
      {
        value: "౯",
        parent: 0,
        width: 2
      },
      {
        value: "౦",
        parent: 0,
        width: 2
      },
      {
        value: "ఛ",
        parent: 1,
        width: 2
      },
      {
        value: "ఔ",
        parent: 1,
        width: 2
      },
      {
        value: "ఎ",
        parent: 1,
        width: 2
      },
      {
        value: "ర",
        parent: 1,
        width: 2
      },
      {
        value: "త",
        parent: 1,
        width: 2
      },
      {
        value: "య",
        parent: 1,
        width: 2
      },
      {
        value: "ఉ",
        parent: 1,
        width: 2
      },
      {
        value: "ఇ",
        parent: 1,
        width: 2
      },
      {
        value: "ఒ",
        parent: 1,
        width: 2
      },
      {
        value: "ప",
        parent: 1,
        width: 2
      },
      {
        value: "ఖ",
        parent: 1,
        width: 2
      },
      {
        value: "ఘ",
        parent: 1,
        width: 2
      },
      {
        value: "అ",
        parent: 2,
        width: 2
      },
      {
        value: "స",
        parent: 2,
        width: 2
      },
      {
        value: "ద",
        parent: 2,
        width: 2
      },
      {
        value: "ఫ",
        parent: 2,
        width: 2
      },
      {
        value: "గ",
        parent: 2,
        width: 2
      },
      {
        value: "హ",
        parent: 2,
        width: 2
      },
      {
        value: "జ",
        parent: 2,
        width: 2
      },
      {
        value: "క",
        parent: 2,
        width: 2
      },
      {
        value: "ల",
        parent: 2,
        width: 2
      },
      {
        value: "ఙ",
        parent: 2,
        width: 2
      },
      {
        value: "ఝ",
        parent: 2,
        width: 2
      },
      {
        value: "శ",
        parent: 3,
        width: 2
      },
      {
        value: "ష",
        parent: 3,
        width: 2
      },
      {
        value: "చ",
        parent: 3,
        width: 2
      },
      {
        value: "వ",
        parent: 3,
        width: 2
      },
      {
        value: "బ",
        parent: 3,
        width: 2
      },
      {
        value: "న",
        parent: 3,
        width: 2
      },
      {
        value: "మ",
        parent: 3,
        width: 2
      },
      {
        value: "ఞ",
        parent: 3,
        width: 2
      },
      {
        value: "ట",
        parent: 3,
        width: 2
      },
      {
        value: "ఠ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "₹",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "డ",
        parent: 5,
        width: 2
      },
      {
        value: "ఢ",
        parent: 5,
        width: 2
      },
      {
        value: "ణ",
        parent: 5,
        width: 2
      },
      {
        value: "థ",
        parent: 5,
        width: 2
      },
      {
        value: "ధ",
        parent: 5,
        width: 2
      },
      {
        value: "భ",
        parent: 5,
        width: 2
      },
      {
        value: "ఱ",
        parent: 5,
        width: 2
      },
      {
        value: "ళ",
        parent: 5,
        width: 2
      },
      {
        value: "ఴ",
        parent: 5,
        width: 2
      },
      {
        value: "ౘ",
        parent: 5,
        width: 2
      },
      {
        value: "ౙ",
        parent: 5,
        width: 2
      },
      {
        value: "ౚ",
        parent: 5,
        width: 2
      },
      {
        value: "ఆ",
        parent: 5,
        width: 2
      },
      {
        value: "ఈ",
        parent: 5,
        width: 2
      },
      {
        value: "ఊ",
        parent: 5,
        width: 2
      },
      {
        value: "ఋ",
        parent: 5,
        width: 2
      },
      {
        value: "ౠ",
        parent: 5,
        width: 2
      },
      {
        value: "ఌ",
        parent: 5,
        width: 2
      },
      {
        value: "ౡ",
        parent: 5,
        width: 2
      },
      {
        value: "ఏ",
        parent: 5,
        width: 2
      },
      {
        value: "ఐ",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Tamil",
    keys: [
      {
        value: "௧",
        parent: 0,
        width: 2
      },
      {
        value: "௨",
        parent: 0,
        width: 2
      },
      {
        value: "௩",
        parent: 0,
        width: 2
      },
      {
        value: "௪",
        parent: 0,
        width: 2
      },
      {
        value: "௫",
        parent: 0,
        width: 2
      },
      {
        value: "௬",
        parent: 0,
        width: 2
      },
      {
        value: "௭",
        parent: 0,
        width: 2
      },
      {
        value: "௮",
        parent: 0,
        width: 2
      },
      {
        value: "௯",
        parent: 0,
        width: 2
      },
      {
        value: "௦",
        parent: 0,
        width: 2
      },
      {
        value: "ங",
        parent: 1,
        width: 2
      },
      {
        value: "ஔ",
        parent: 1,
        width: 2
      },
      {
        value: "எ",
        parent: 1,
        width: 2
      },
      {
        value: "ர",
        parent: 1,
        width: 2
      },
      {
        value: "த",
        parent: 1,
        width: 2
      },
      {
        value: "ய",
        parent: 1,
        width: 2
      },
      {
        value: "உ",
        parent: 1,
        width: 2
      },
      {
        value: "இ",
        parent: 1,
        width: 2
      },
      {
        value: "ஒ",
        parent: 1,
        width: 2
      },
      {
        value: "ப",
        parent: 1,
        width: 2
      },
      {
        value: "ழ",
        parent: 1,
        width: 2
      },
      {
        value: "ற",
        parent: 1,
        width: 2
      },
      {
        value: "அ",
        parent: 2,
        width: 2
      },
      {
        value: "ஸ",
        parent: 2,
        width: 2
      },
      {
        value: "ட",
        parent: 2,
        width: 2
      },
      {
        value: "ஞ",
        parent: 2,
        width: 2
      },
      {
        value: "க்ஷ​",
        parent: 2,
        width: 2
      },
      {
        value: "ஹ",
        parent: 2,
        width: 2
      },
      {
        value: "ஜ",
        parent: 2,
        width: 2
      },
      {
        value: "க",
        parent: 2,
        width: 2
      },
      {
        value: "ல",
        parent: 2,
        width: 2
      },
      {
        value: "ன",
        parent: 2,
        width: 2
      },
      {
        value: "ஆ",
        parent: 2,
        width: 2
      },
      {
        value: "ஶ",
        parent: 3,
        width: 2
      },
      {
        value: "ஷ",
        parent: 3,
        width: 2
      },
      {
        value: "ச",
        parent: 3,
        width: 2
      },
      {
        value: "வ",
        parent: 3,
        width: 2
      },
      {
        value: "ள",
        parent: 3,
        width: 2
      },
      {
        value: "ந",
        parent: 3,
        width: 2
      },
      {
        value: "ம",
        parent: 3,
        width: 2
      },
      {
        value: "ஈ",
        parent: 3,
        width: 2
      },
      {
        value: "ஊ",
        parent: 3,
        width: 2
      },
      {
        value: "ஏ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "௹",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ண",
        parent: 5,
        width: 2
      },
      {
        value: "ஐ",
        parent: 5,
        width: 2
      },
      {
        value: "ஓ",
        parent: 5,
        width: 2
      },
      {
        value: "்",
        parent: 5,
        width: 2
      },
      {
        value: "ா",
        parent: 5,
        width: 2
      },
      {
        value: "ி",
        parent: 5,
        width: 2
      },
      {
        value: "ீ",
        parent: 5,
        width: 2
      },
      {
        value: "ு",
        parent: 5,
        width: 2
      },
      {
        value: "ூ",
        parent: 5,
        width: 2
      },
      {
        value: "ெ",
        parent: 5,
        width: 2
      },
      {
        value: "ே",
        parent: 5,
        width: 2
      },
      {
        value: "ை",
        parent: 5,
        width: 2
      },
      {
        value: "ொ",
        parent: 5,
        width: 2
      },
      {
        value: "ோ",
        parent: 5,
        width: 2
      },
      {
        value: "ௌ",
        parent: 5,
        width: 2
      },
      {
        value: "ௗ",
        parent: 5,
        width: 2
      },
      {
        value: "௰",
        parent: 5,
        width: 2
      },
      {
        value: "௱",
        parent: 5,
        width: 2
      },
      {
        value: "௲",
        parent: 5,
        width: 2
      },
      {
        value: "௳",
        parent: 5,
        width: 2
      },
      {
        value: "௴",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Bengali",
    keys: [
      {
        value: "১",
        parent: 0,
        width: 2
      },
      {
        value: "২",
        parent: 0,
        width: 2
      },
      {
        value: "৩",
        parent: 0,
        width: 2
      },
      {
        value: "৪",
        parent: 0,
        width: 2
      },
      {
        value: "৫",
        parent: 0,
        width: 2
      },
      {
        value: "৬",
        parent: 0,
        width: 2
      },
      {
        value: "৭",
        parent: 0,
        width: 2
      },
      {
        value: "৮",
        parent: 0,
        width: 2
      },
      {
        value: "৯",
        parent: 0,
        width: 2
      },
      {
        value: "০",
        parent: 0,
        width: 2
      },
      {
        value: "ছ",
        parent: 1,
        width: 2
      },
      {
        value: "ঔ",
        parent: 1,
        width: 2
      },
      {
        value: "এ",
        parent: 1,
        width: 2
      },
      {
        value: "র",
        parent: 1,
        width: 2
      },
      {
        value: "ত",
        parent: 1,
        width: 2
      },
      {
        value: "য",
        parent: 1,
        width: 2
      },
      {
        value: "উ",
        parent: 1,
        width: 2
      },
      {
        value: "ই",
        parent: 1,
        width: 2
      },
      {
        value: "ও",
        parent: 1,
        width: 2
      },
      {
        value: "প",
        parent: 1,
        width: 2
      },
      {
        value: "খ",
        parent: 1,
        width: 2
      },
      {
        value: "ঘ",
        parent: 1,
        width: 2
      },
      {
        value: "অ",
        parent: 2,
        width: 2
      },
      {
        value: "স",
        parent: 2,
        width: 2
      },
      {
        value: "দ",
        parent: 2,
        width: 2
      },
      {
        value: "ফ",
        parent: 2,
        width: 2
      },
      {
        value: "গ",
        parent: 2,
        width: 2
      },
      {
        value: "হ",
        parent: 2,
        width: 2
      },
      {
        value: "জ",
        parent: 2,
        width: 2
      },
      {
        value: "ক",
        parent: 2,
        width: 2
      },
      {
        value: "ল",
        parent: 2,
        width: 2
      },
      {
        value: "ঙ",
        parent: 2,
        width: 2
      },
      {
        value: "ঝ",
        parent: 2,
        width: 2
      },
      {
        value: "শ",
        parent: 3,
        width: 2
      },
      {
        value: "ষ",
        parent: 3,
        width: 2
      },
      {
        value: "চ",
        parent: 3,
        width: 2
      },
      {
        value: "ভ",
        parent: 3,
        width: 2
      },
      {
        value: "ব",
        parent: 3,
        width: 2
      },
      {
        value: "ন",
        parent: 3,
        width: 2
      },
      {
        value: "ম",
        parent: 3,
        width: 2
      },
      {
        value: "ঞ",
        parent: 3,
        width: 2
      },
      {
        value: "ট",
        parent: 3,
        width: 2
      },
      {
        value: "ঠ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "৳",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ড",
        parent: 5,
        width: 2
      },
      {
        value: "ধ",
        parent: 5,
        width: 2
      },
      {
        value: "য়",
        parent: 5,
        width: 2
      },
      {
        value: "ড়",
        parent: 5,
        width: 2
      },
      {
        value: "ঢ়",
        parent: 5,
        width: 2
      },
      {
        value: "আ",
        parent: 5,
        width: 2
      },
      {
        value: "ঈ",
        parent: 5,
        width: 2
      },
      {
        value: "ঊ",
        parent: 5,
        width: 2
      },
      {
        value: "ঋ",
        parent: 5,
        width: 2
      },
      {
        value: "ৠ",
        parent: 5,
        width: 2
      },
      {
        value: "ঌ",
        parent: 5,
        width: 2
      },
      {
        value: "ৡ",
        parent: 5,
        width: 2
      },
      {
        value: "ঐ",
        parent: 5,
        width: 2
      },
      {
        value: "ৗ",
        parent: 5,
        width: 2
      },
      {
        value: "ৎ",
        parent: 5,
        width: 2
      },
      {
        value: "্",
        parent: 5,
        width: 2
      },
      {
        value: "া",
        parent: 5,
        width: 2
      },
      {
        value: "ি",
        parent: 5,
        width: 2
      },
      {
        value: "ী",
        parent: 5,
        width: 2
      },
      {
        value: "ু",
        parent: 5,
        width: 2
      },
      {
        value: "ূ",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Sinhala",
    keys: [
      {
        value: "෧",
        parent: 0,
        width: 2
      },
      {
        value: "෨",
        parent: 0,
        width: 2
      },
      {
        value: "෩",
        parent: 0,
        width: 2
      },
      {
        value: "෪",
        parent: 0,
        width: 2
      },
      {
        value: "෫",
        parent: 0,
        width: 2
      },
      {
        value: "෬",
        parent: 0,
        width: 2
      },
      {
        value: "෭",
        parent: 0,
        width: 2
      },
      {
        value: "෮",
        parent: 0,
        width: 2
      },
      {
        value: "෯",
        parent: 0,
        width: 2
      },
      {
        value: "෦",
        parent: 0,
        width: 2
      },
      {
        value: "ඡ",
        parent: 1,
        width: 2
      },
      {
        value: "ඖ",
        parent: 1,
        width: 2
      },
      {
        value: "එ",
        parent: 1,
        width: 2
      },
      {
        value: "ර",
        parent: 1,
        width: 2
      },
      {
        value: "ත",
        parent: 1,
        width: 2
      },
      {
        value: "ය",
        parent: 1,
        width: 2
      },
      {
        value: "උ",
        parent: 1,
        width: 2
      },
      {
        value: "ඉ",
        parent: 1,
        width: 2
      },
      {
        value: "ඔ",
        parent: 1,
        width: 2
      },
      {
        value: "ප",
        parent: 1,
        width: 2
      },
      {
        value: "ඛ",
        parent: 1,
        width: 2
      },
      {
        value: "ඝ",
        parent: 1,
        width: 2
      },
      {
        value: "අ",
        parent: 2,
        width: 2
      },
      {
        value: "ස",
        parent: 2,
        width: 2
      },
      {
        value: "ද",
        parent: 2,
        width: 2
      },
      {
        value: "ෆ",
        parent: 2,
        width: 2
      },
      {
        value: "ග",
        parent: 2,
        width: 2
      },
      {
        value: "හ",
        parent: 2,
        width: 2
      },
      {
        value: "ජ",
        parent: 2,
        width: 2
      },
      {
        value: "ක",
        parent: 2,
        width: 2
      },
      {
        value: "ල",
        parent: 2,
        width: 2
      },
      {
        value: "ඞ",
        parent: 2,
        width: 2
      },
      {
        value: "ඟ",
        parent: 2,
        width: 2
      },
      {
        value: "ශ",
        parent: 3,
        width: 2
      },
      {
        value: "ෂ",
        parent: 3,
        width: 2
      },
      {
        value: "ච",
        parent: 3,
        width: 2
      },
      {
        value: "ව",
        parent: 3,
        width: 2
      },
      {
        value: "බ",
        parent: 3,
        width: 2
      },
      {
        value: "න",
        parent: 3,
        width: 2
      },
      {
        value: "ම",
        parent: 3,
        width: 2
      },
      {
        value: "ඣ",
        parent: 3,
        width: 2
      },
      {
        value: "ඤ",
        parent: 3,
        width: 2
      },
      {
        value: "ඥ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "රු",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ඦ",
        parent: 5,
        width: 2
      },
      {
        value: "ට",
        parent: 5,
        width: 2
      },
      {
        value: "ඨ",
        parent: 5,
        width: 2
      },
      {
        value: "ඩ",
        parent: 5,
        width: 2
      },
      {
        value: "ඪ",
        parent: 5,
        width: 2
      },
      {
        value: "ණ",
        parent: 5,
        width: 2
      },
      {
        value: "ඬ",
        parent: 5,
        width: 2
      },
      {
        value: "ථ",
        parent: 5,
        width: 2
      },
      {
        value: "ධ",
        parent: 5,
        width: 2
      },
      {
        value: "ඳ",
        parent: 5,
        width: 2
      },
      {
        value: "ඵ",
        parent: 5,
        width: 2
      },
      {
        value: "භ",
        parent: 5,
        width: 2
      },
      {
        value: "ඹ",
        parent: 5,
        width: 2
      },
      {
        value: "ළ",
        parent: 5,
        width: 2
      },
      {
        value: "ආ",
        parent: 5,
        width: 2
      },
      {
        value: "ඇ",
        parent: 5,
        width: 2
      },
      {
        value: "ඈ",
        parent: 5,
        width: 2
      },
      {
        value: "ඊ",
        parent: 5,
        width: 2
      },
      {
        value: "ඌ",
        parent: 5,
        width: 2
      },
      {
        value: "ඒ",
        parent: 5,
        width: 2
      },
      {
        value: "ඓ",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Dhivehi",
    keys: [
      {
        value: "1",
        parent: 0,
        width: 2
      },
      {
        value: "2",
        parent: 0,
        width: 2
      },
      {
        value: "3",
        parent: 0,
        width: 2
      },
      {
        value: "4",
        parent: 0,
        width: 2
      },
      {
        value: "5",
        parent: 0,
        width: 2
      },
      {
        value: "6",
        parent: 0,
        width: 2
      },
      {
        value: "7",
        parent: 0,
        width: 2
      },
      {
        value: "8",
        parent: 0,
        width: 2
      },
      {
        value: "9",
        parent: 0,
        width: 2
      },
      {
        value: "0",
        parent: 0,
        width: 2
      },
      {
        value: "ޤ",
        parent: 1,
        width: 2
      },
      {
        value: "ޥ",
        parent: 1,
        width: 2
      },
      {
        value: "ެ",
        parent: 1,
        width: 2
      },
      {
        value: "ރ",
        parent: 1,
        width: 2
      },
      {
        value: "ޓ",
        parent: 1,
        width: 2
      },
      {
        value: "ޔ",
        parent: 1,
        width: 2
      },
      {
        value: "ު",
        parent: 1,
        width: 2
      },
      {
        value: "ި",
        parent: 1,
        width: 2
      },
      {
        value: "ޮ",
        parent: 1,
        width: 2
      },
      {
        value: "ޕ",
        parent: 1,
        width: 2
      },
      {
        value: "ޏ",
        parent: 1,
        width: 2
      },
      {
        value: "ތ",
        parent: 1,
        width: 2
      },
      {
        value: "ަ",
        parent: 2,
        width: 2
      },
      {
        value: "ސ",
        parent: 2,
        width: 2
      },
      {
        value: "ޑ",
        parent: 2,
        width: 2
      },
      {
        value: "ފ",
        parent: 2,
        width: 2
      },
      {
        value: "ގ",
        parent: 2,
        width: 2
      },
      {
        value: "ހ",
        parent: 2,
        width: 2
      },
      {
        value: "ޖ",
        parent: 2,
        width: 2
      },
      {
        value: "ކ",
        parent: 2,
        width: 2
      },
      {
        value: "ލ",
        parent: 2,
        width: 2
      },
      {
        value: "ދ",
        parent: 2,
        width: 2
      },
      {
        value: "އ",
        parent: 2,
        width: 2
      },
      {
        value: "ޒ",
        parent: 3,
        width: 2
      },
      {
        value: "ށ",
        parent: 3,
        width: 2
      },
      {
        value: "ޗ",
        parent: 3,
        width: 2
      },
      {
        value: "ވ",
        parent: 3,
        width: 2
      },
      {
        value: "ބ",
        parent: 3,
        width: 2
      },
      {
        value: "ނ",
        parent: 3,
        width: 2
      },
      {
        value: "މ",
        parent: 3,
        width: 2
      },
      {
        value: "ޅ",
        parent: 3,
        width: 2
      },
      {
        value: "ް",
        parent: 3,
        width: 2
      },
      {
        value: "ޯ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "ރ",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ޭ",
        parent: 5,
        width: 2
      },
      {
        value: "ޫ",
        parent: 5,
        width: 2
      },
      {
        value: "ީ",
        parent: 5,
        width: 2
      },
      {
        value: "ާ",
        parent: 5,
        width: 2
      },
      {
        value: "ޱ",
        parent: 5,
        width: 2
      },
      {
        value: "ޜ",
        parent: 5,
        width: 2
      },
      {
        value: "ޣ",
        parent: 5,
        width: 2
      },
      {
        value: "ޢ",
        parent: 5,
        width: 2
      },
      {
        value: "ޡ",
        parent: 5,
        width: 2
      },
      {
        value: "ޠ",
        parent: 5,
        width: 2
      },
      {
        value: "ޟ",
        parent: 5,
        width: 2
      },
      {
        value: "ޞ",
        parent: 5,
        width: 2
      },
      {
        value: "ޝ",
        parent: 5,
        width: 2
      },
      {
        value: "ޛ",
        parent: 5,
        width: 2
      },
      {
        value: "ޙ",
        parent: 5,
        width: 2
      },
      {
        value: "ޘ",
        parent: 5,
        width: 2
      },
      {
        value: "a",
        parent: 5,
        width: 2
      },
      {
        value: "b",
        parent: 5,
        width: 2
      },
      {
        value: "c",
        parent: 5,
        width: 2
      },
      {
        value: "d",
        parent: 5,
        width: 2
      },
      {
        value: "e",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Tibetan",
    keys: [
      {
        value: "༡",
        parent: 0,
        width: 2
      },
      {
        value: "༢",
        parent: 0,
        width: 2
      },
      {
        value: "༣",
        parent: 0,
        width: 2
      },
      {
        value: "༤",
        parent: 0,
        width: 2
      },
      {
        value: "༥",
        parent: 0,
        width: 2
      },
      {
        value: "༦",
        parent: 0,
        width: 2
      },
      {
        value: "༧",
        parent: 0,
        width: 2
      },
      {
        value: "༨",
        parent: 0,
        width: 2
      },
      {
        value: "༩",
        parent: 0,
        width: 2
      },
      {
        value: "༠",
        parent: 0,
        width: 2
      },
      {
        value: "ཆ",
        parent: 1,
        width: 2
      },
      {
        value: "ཝ",
        parent: 1,
        width: 2
      },
      {
        value: "ེ",
        parent: 1,
        width: 2
      },
      {
        value: "ར",
        parent: 1,
        width: 2
      },
      {
        value: "ཏ",
        parent: 1,
        width: 2
      },
      {
        value: "ཡ",
        parent: 1,
        width: 2
      },
      {
        value: "ུ",
        parent: 1,
        width: 2
      },
      {
        value: "ི",
        parent: 1,
        width: 2
      },
      {
        value: "ོ",
        parent: 1,
        width: 2
      },
      {
        value: "པ",
        parent: 1,
        width: 2
      },
      {
        value: "ཁ",
        parent: 1,
        width: 2
      },
      {
        value: "ང",
        parent: 1,
        width: 2
      },
      {
        value: "འ",
        parent: 2,
        width: 2
      },
      {
        value: "ས",
        parent: 2,
        width: 2
      },
      {
        value: "ད",
        parent: 2,
        width: 2
      },
      {
        value: "ཕ",
        parent: 2,
        width: 2
      },
      {
        value: "ག",
        parent: 2,
        width: 2
      },
      {
        value: "ཧ",
        parent: 2,
        width: 2
      },
      {
        value: "ཇ",
        parent: 2,
        width: 2
      },
      {
        value: "ཀ",
        parent: 2,
        width: 2
      },
      {
        value: "ལ",
        parent: 2,
        width: 2
      },
      {
        value: "ཉ",
        parent: 2,
        width: 2
      },
      {
        value: "ཐ",
        parent: 2,
        width: 2
      },
      {
        value: "ཟ",
        parent: 3,
        width: 2
      },
      {
        value: "ཤ",
        parent: 3,
        width: 2
      },
      {
        value: "ཅ",
        parent: 3,
        width: 2
      },
      {
        value: "ཱུ",
        parent: 3,
        width: 2
      },
      {
        value: "བ",
        parent: 3,
        width: 2
      },
      {
        value: "ན",
        parent: 3,
        width: 2
      },
      {
        value: "མ",
        parent: 3,
        width: 2
      },
      {
        value: "ཙ",
        parent: 3,
        width: 2
      },
      {
        value: "ཚ",
        parent: 3,
        width: 2
      },
      {
        value: "ཛ",
        parent: 3,
        width: 2
      },
      {
        value: "་",
        parent: 4,
        width: 2
      },
      {
        value: "།",
        parent: 4,
        width: 2
      },
      {
        value: "༄",
        parent: 4,
        width: 2
      },
      {
        value: "༅",
        parent: 4,
        width: 2
      },
      {
        value: "༑",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "¥",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ཞ",
        parent: 5,
        width: 2
      },
      {
        value: "ཨ",
        parent: 5,
        width: 2
      },
      {
        value: "ཊ",
        parent: 5,
        width: 2
      },
      {
        value: "ཋ",
        parent: 5,
        width: 2
      },
      {
        value: "ཌ",
        parent: 5,
        width: 2
      },
      {
        value: "ཎ",
        parent: 5,
        width: 2
      },
      {
        value: "ཪ",
        parent: 5,
        width: 2
      },
      {
        value: "ཥ",
        parent: 5,
        width: 2
      },
      {
        value: "ཱ",
        parent: 5,
        width: 2
      },
      {
        value: "ཱི",
        parent: 5,
        width: 2
      },
      {
        value: "ཻ",
        parent: 5,
        width: 2
      },
      {
        value: "ཽ",
        parent: 5,
        width: 2
      },
      {
        value: "ྲྀ",
        parent: 5,
        width: 2
      },
      {
        value: "ཷ",
        parent: 5,
        width: 2
      },
      {
        value: "ླྀ",
        parent: 5,
        width: 2
      },
      {
        value: "ཹ",
        parent: 5,
        width: 2
      },
      {
        value: "ཿ",
        parent: 5,
        width: 2
      },
      {
        value: "༔",
        parent: 5,
        width: 2
      },
      {
        value: "ཾ",
        parent: 5,
        width: 2
      },
      {
        value: "ྃ",
        parent: 5,
        width: 2
      },
      {
        value: "ྂ",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Thai",
    keys: [
      {
        value: "๑",
        parent: 0,
        width: 2
      },
      {
        value: "๒",
        parent: 0,
        width: 2
      },
      {
        value: "๓",
        parent: 0,
        width: 2
      },
      {
        value: "๔",
        parent: 0,
        width: 2
      },
      {
        value: "๕",
        parent: 0,
        width: 2
      },
      {
        value: "๖",
        parent: 0,
        width: 2
      },
      {
        value: "๗",
        parent: 0,
        width: 2
      },
      {
        value: "๘",
        parent: 0,
        width: 2
      },
      {
        value: "๙",
        parent: 0,
        width: 2
      },
      {
        value: "๐",
        parent: 0,
        width: 2
      },
      {
        value: "ช",
        parent: 1,
        width: 2
      },
      {
        value: "ว",
        parent: 1,
        width: 2
      },
      {
        value: "เ",
        parent: 1,
        width: 2
      },
      {
        value: "ร",
        parent: 1,
        width: 2
      },
      {
        value: "ต",
        parent: 1,
        width: 2
      },
      {
        value: "ย",
        parent: 1,
        width: 2
      },
      {
        value: "ุ",
        parent: 1,
        width: 2
      },
      {
        value: "ิ",
        parent: 1,
        width: 2
      },
      {
        value: "โ",
        parent: 1,
        width: 2
      },
      {
        value: "ป",
        parent: 1,
        width: 2
      },
      {
        value: "ข",
        parent: 1,
        width: 2
      },
      {
        value: "ฆ",
        parent: 1,
        width: 2
      },
      {
        value: "ะ",
        parent: 2,
        width: 2
      },
      {
        value: "ซ",
        parent: 2,
        width: 2
      },
      {
        value: "ด",
        parent: 2,
        width: 2
      },
      {
        value: "ฟ",
        parent: 2,
        width: 2
      },
      {
        value: "ง",
        parent: 2,
        width: 2
      },
      {
        value: "ห",
        parent: 2,
        width: 2
      },
      {
        value: "ฉ",
        parent: 2,
        width: 2
      },
      {
        value: "ก",
        parent: 2,
        width: 2
      },
      {
        value: "ล",
        parent: 2,
        width: 2
      },
      {
        value: "ฌ",
        parent: 2,
        width: 2
      },
      {
        value: "ญ",
        parent: 2,
        width: 2
      },
      {
        value: "ศ",
        parent: 3,
        width: 2
      },
      {
        value: "อ",
        parent: 3,
        width: 2
      },
      {
        value: "จ",
        parent: 3,
        width: 2
      },
      {
        value: "ฤ",
        parent: 3,
        width: 2
      },
      {
        value: "บ",
        parent: 3,
        width: 2
      },
      {
        value: "น",
        parent: 3,
        width: 2
      },
      {
        value: "ม",
        parent: 3,
        width: 2
      },
      {
        value: "ฎ",
        parent: 3,
        width: 2
      },
      {
        value: "ฏ",
        parent: 3,
        width: 2
      },
      {
        value: "ฐ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "฿",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ฑ",
        parent: 5,
        width: 2
      },
      {
        value: "ฒ",
        parent: 5,
        width: 2
      },
      {
        value: "ณ",
        parent: 5,
        width: 2
      },
      {
        value: "ถ",
        parent: 5,
        width: 2
      },
      {
        value: "ท",
        parent: 5,
        width: 2
      },
      {
        value: "ธ",
        parent: 5,
        width: 2
      },
      {
        value: "ผ",
        parent: 5,
        width: 2
      },
      {
        value: "ภ",
        parent: 5,
        width: 2
      },
      {
        value: "ฝ",
        parent: 5,
        width: 2
      },
      {
        value: "ษ",
        parent: 5,
        width: 2
      },
      {
        value: "ส",
        parent: 5,
        width: 2
      },
      {
        value: "ฬ",
        parent: 5,
        width: 2
      },
      {
        value: "ฮ",
        parent: 5,
        width: 2
      },
      {
        value: "ฺ",
        parent: 5,
        width: 2
      },
      {
        value: "่",
        parent: 5,
        width: 2
      },
      {
        value: "้",
        parent: 5,
        width: 2
      },
      {
        value: "๊",
        parent: 5,
        width: 2
      },
      {
        value: "๋",
        parent: 5,
        width: 2
      },
      {
        value: "็",
        parent: 5,
        width: 2
      },
      {
        value: "์",
        parent: 5,
        width: 2
      },
      {
        value: "ํ",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Khmer",
    keys: [
      {
        value: "១",
        parent: 0,
        width: 2
      },
      {
        value: "២",
        parent: 0,
        width: 2
      },
      {
        value: "៣",
        parent: 0,
        width: 2
      },
      {
        value: "៤",
        parent: 0,
        width: 2
      },
      {
        value: "៥",
        parent: 0,
        width: 2
      },
      {
        value: "៦",
        parent: 0,
        width: 2
      },
      {
        value: "៧",
        parent: 0,
        width: 2
      },
      {
        value: "៨",
        parent: 0,
        width: 2
      },
      {
        value: "៩",
        parent: 0,
        width: 2
      },
      {
        value: "០",
        parent: 0,
        width: 2
      },
      {
        value: "ឆ",
        parent: 1,
        width: 2
      },
      {
        value: "ៅ",
        parent: 1,
        width: 2
      },
      {
        value: "េ",
        parent: 1,
        width: 2
      },
      {
        value: "រ",
        parent: 1,
        width: 2
      },
      {
        value: "ត",
        parent: 1,
        width: 2
      },
      {
        value: "យ",
        parent: 1,
        width: 2
      },
      {
        value: "ុ",
        parent: 1,
        width: 2
      },
      {
        value: "ិ",
        parent: 1,
        width: 2
      },
      {
        value: "ោ",
        parent: 1,
        width: 2
      },
      {
        value: "ប",
        parent: 1,
        width: 2
      },
      {
        value: "ខ",
        parent: 1,
        width: 2
      },
      {
        value: "ឃ",
        parent: 1,
        width: 2
      },
      {
        value: "ឣ",
        parent: 2,
        width: 2
      },
      {
        value: "ស",
        parent: 2,
        width: 2
      },
      {
        value: "ទ",
        parent: 2,
        width: 2
      },
      {
        value: "ផ",
        parent: 2,
        width: 2
      },
      {
        value: "គ",
        parent: 2,
        width: 2
      },
      {
        value: "ហ",
        parent: 2,
        width: 2
      },
      {
        value: "ជ",
        parent: 2,
        width: 2
      },
      {
        value: "ក",
        parent: 2,
        width: 2
      },
      {
        value: "ល",
        parent: 2,
        width: 2
      },
      {
        value: "ង",
        parent: 2,
        width: 2
      },
      {
        value: "ឈ",
        parent: 2,
        width: 2
      },
      {
        value: "ឝ",
        parent: 3,
        width: 2
      },
      {
        value: "ឞ",
        parent: 3,
        width: 2
      },
      {
        value: "ច",
        parent: 3,
        width: 2
      },
      {
        value: "ភ",
        parent: 3,
        width: 2
      },
      {
        value: "ព",
        parent: 3,
        width: 2
      },
      {
        value: "ន",
        parent: 3,
        width: 2
      },
      {
        value: "ម",
        parent: 3,
        width: 2
      },
      {
        value: "ញ",
        parent: 3,
        width: 2
      },
      {
        value: "ដ",
        parent: 3,
        width: 2
      },
      {
        value: "ឋ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "៛",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ឌ",
        parent: 5,
        width: 2
      },
      {
        value: "ឍ",
        parent: 5,
        width: 2
      },
      {
        value: "ណ",
        parent: 5,
        width: 2
      },
      {
        value: "ថ",
        parent: 5,
        width: 2
      },
      {
        value: "ធ",
        parent: 5,
        width: 2
      },
      {
        value: "ឡ",
        parent: 5,
        width: 2
      },
      {
        value: "អ",
        parent: 5,
        width: 2
      },
      {
        value: "្",
        parent: 5,
        width: 2
      },
      {
        value: "ា",
        parent: 5,
        width: 2
      },
      {
        value: "ី",
        parent: 5,
        width: 2
      },
      {
        value: "ឹ",
        parent: 5,
        width: 2
      },
      {
        value: "ឺ",
        parent: 5,
        width: 2
      },
      {
        value: "ូ",
        parent: 5,
        width: 2
      },
      {
        value: "ួ",
        parent: 5,
        width: 2
      },
      {
        value: "ើ",
        parent: 5,
        width: 2
      },
      {
        value: "ឿ",
        parent: 5,
        width: 2
      },
      {
        value: "ៀ",
        parent: 5,
        width: 2
      },
      {
        value: "ែ",
        parent: 5,
        width: 2
      },
      {
        value: "ៃ",
        parent: 5,
        width: 2
      },
      {
        value: "ឦ",
        parent: 5,
        width: 2
      },
      {
        value: "ឰ",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Lao",
    keys: [
      {
        value: "໑",
        parent: 0,
        width: 2
      },
      {
        value: "໒",
        parent: 0,
        width: 2
      },
      {
        value: "໓",
        parent: 0,
        width: 2
      },
      {
        value: "໔",
        parent: 0,
        width: 2
      },
      {
        value: "໕",
        parent: 0,
        width: 2
      },
      {
        value: "໖",
        parent: 0,
        width: 2
      },
      {
        value: "໗",
        parent: 0,
        width: 2
      },
      {
        value: "໘",
        parent: 0,
        width: 2
      },
      {
        value: "໙",
        parent: 0,
        width: 2
      },
      {
        value: "໐",
        parent: 0,
        width: 2
      },
      {
        value: "ຂ",
        parent: 1,
        width: 2
      },
      {
        value: "ວ",
        parent: 1,
        width: 2
      },
      {
        value: "ເ",
        parent: 1,
        width: 2
      },
      {
        value: "ຣ",
        parent: 1,
        width: 2
      },
      {
        value: "ຕ",
        parent: 1,
        width: 2
      },
      {
        value: "ຢ",
        parent: 1,
        width: 2
      },
      {
        value: "ຸ",
        parent: 1,
        width: 2
      },
      {
        value: "ິ",
        parent: 1,
        width: 2
      },
      {
        value: "ົ",
        parent: 1,
        width: 2
      },
      {
        value: "ປ",
        parent: 1,
        width: 2
      },
      {
        value: "ຄ",
        parent: 1,
        width: 2
      },
      {
        value: "ຖ",
        parent: 1,
        width: 2
      },
      {
        value: "ັ",
        parent: 2,
        width: 2
      },
      {
        value: "ຊ",
        parent: 2,
        width: 2
      },
      {
        value: "ດ",
        parent: 2,
        width: 2
      },
      {
        value: "ຝ",
        parent: 2,
        width: 2
      },
      {
        value: "ງ",
        parent: 2,
        width: 2
      },
      {
        value: "ຫ",
        parent: 2,
        width: 2
      },
      {
        value: "ຍ",
        parent: 2,
        width: 2
      },
      {
        value: "ກ",
        parent: 2,
        width: 2
      },
      {
        value: "ລ",
        parent: 2,
        width: 2
      },
      {
        value: "ທ",
        parent: 2,
        width: 2
      },
      {
        value: "ຜ",
        parent: 2,
        width: 2
      },
      {
        value: "ສ",
        parent: 3,
        width: 2
      },
      {
        value: "ອ",
        parent: 3,
        width: 2
      },
      {
        value: "ຈ",
        parent: 3,
        width: 2
      },
      {
        value: "ຜ",
        parent: 3,
        width: 2
      },
      {
        value: "ບ",
        parent: 3,
        width: 2
      },
      {
        value: "ນ",
        parent: 3,
        width: 2
      },
      {
        value: "ມ",
        parent: 3,
        width: 2
      },
      {
        value: "ຮ",
        parent: 3,
        width: 2
      },
      {
        value: "່",
        parent: 3,
        width: 2
      },
      {
        value: "້",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "₭",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "໊",
        parent: 5,
        width: 2
      },
      {
        value: "໋",
        parent: 5,
        width: 2
      },
      {
        value: "໌",
        parent: 5,
        width: 2
      },
      {
        value: "ໍ",
        parent: 5,
        width: 2
      },
      {
        value: "ະ",
        parent: 5,
        width: 2
      },
      {
        value: "າ",
        parent: 5,
        width: 2
      },
      {
        value: "ຳ",
        parent: 5,
        width: 2
      },
      {
        value: "ີ",
        parent: 5,
        width: 2
      },
      {
        value: "ຶ",
        parent: 5,
        width: 2
      },
      {
        value: "ື",
        parent: 5,
        width: 2
      },
      {
        value: "ູ",
        parent: 5,
        width: 2
      },
      {
        value: "ຼ",
        parent: 5,
        width: 2
      },
      {
        value: "ຽ",
        parent: 5,
        width: 2
      },
      {
        value: "ແ",
        parent: 5,
        width: 2
      },
      {
        value: "ໂ",
        parent: 5,
        width: 2
      },
      {
        value: "ໃ",
        parent: 5,
        width: 2
      },
      {
        value: "ໄ",
        parent: 5,
        width: 2
      },
      {
        value: "ຯ",
        parent: 5,
        width: 2
      },
      {
        value: "ໆ",
        parent: 5,
        width: 2
      },
      {
        value: "ໜ",
        parent: 5,
        width: 2
      },
      {
        value: "ໝ",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Burmese",
    keys: [
      {
        value: "၁",
        parent: 0,
        width: 2
      },
      {
        value: "၂",
        parent: 0,
        width: 2
      },
      {
        value: "၃",
        parent: 0,
        width: 2
      },
      {
        value: "၄",
        parent: 0,
        width: 2
      },
      {
        value: "၅",
        parent: 0,
        width: 2
      },
      {
        value: "၆",
        parent: 0,
        width: 2
      },
      {
        value: "၇",
        parent: 0,
        width: 2
      },
      {
        value: "၈",
        parent: 0,
        width: 2
      },
      {
        value: "၉",
        parent: 0,
        width: 2
      },
      {
        value: "၀",
        parent: 0,
        width: 2
      },
      {
        value: "ဆ",
        parent: 1,
        width: 2
      },
      {
        value: "ဝ",
        parent: 1,
        width: 2
      },
      {
        value: "ဧ",
        parent: 1,
        width: 2
      },
      {
        value: "ရ",
        parent: 1,
        width: 2
      },
      {
        value: "တ",
        parent: 1,
        width: 2
      },
      {
        value: "ယ",
        parent: 1,
        width: 2
      },
      {
        value: "ဥ",
        parent: 1,
        width: 2
      },
      {
        value: "ဣ",
        parent: 1,
        width: 2
      },
      {
        value: "ဩ",
        parent: 1,
        width: 2
      },
      {
        value: "ပ",
        parent: 1,
        width: 2
      },
      {
        value: "ခ",
        parent: 1,
        width: 2
      },
      {
        value: "ဃ",
        parent: 1,
        width: 2
      },
      {
        value: "ါ",
        parent: 2,
        width: 2
      },
      {
        value: "သ",
        parent: 2,
        width: 2
      },
      {
        value: "ဒ",
        parent: 2,
        width: 2
      },
      {
        value: "ဖ",
        parent: 2,
        width: 2
      },
      {
        value: "ဂ",
        parent: 2,
        width: 2
      },
      {
        value: "ဟ",
        parent: 2,
        width: 2
      },
      {
        value: "ဇ",
        parent: 2,
        width: 2
      },
      {
        value: "က",
        parent: 2,
        width: 2
      },
      {
        value: "လ",
        parent: 2,
        width: 2
      },
      {
        value: "င",
        parent: 2,
        width: 2
      },
      {
        value: "ဈ",
        parent: 2,
        width: 2
      },
      {
        value: "ဿ",
        parent: 3,
        width: 2
      },
      {
        value: "ဠ",
        parent: 3,
        width: 2
      },
      {
        value: "စ",
        parent: 3,
        width: 2
      },
      {
        value: "ဘ",
        parent: 3,
        width: 2
      },
      {
        value: "ဗ",
        parent: 3,
        width: 2
      },
      {
        value: "န",
        parent: 3,
        width: 2
      },
      {
        value: "မ",
        parent: 3,
        width: 2
      },
      {
        value: "ဉ",
        parent: 3,
        width: 2
      },
      {
        value: "ည",
        parent: 3,
        width: 2
      },
      {
        value: "ဋ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "K",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ဌ",
        parent: 5,
        width: 2
      },
      {
        value: "ဍ",
        parent: 5,
        width: 2
      },
      {
        value: "ဎ",
        parent: 5,
        width: 2
      },
      {
        value: "ဏ",
        parent: 5,
        width: 2
      },
      {
        value: "ထ",
        parent: 5,
        width: 2
      },
      {
        value: "ဓ",
        parent: 5,
        width: 2
      },
      {
        value: "္",
        parent: 5,
        width: 2
      },
      {
        value: "်",
        parent: 5,
        width: 2
      },
      {
        value: "ျ",
        parent: 5,
        width: 2
      },
      {
        value: "ြ",
        parent: 5,
        width: 2
      },
      {
        value: "ွ",
        parent: 5,
        width: 2
      },
      {
        value: "ှ",
        parent: 5,
        width: 2
      },
      {
        value: "အ",
        parent: 5,
        width: 2
      },
      {
        value: "ဤ",
        parent: 5,
        width: 2
      },
      {
        value: "ဦ",
        parent: 5,
        width: 2
      },
      {
        value: "ာ",
        parent: 5,
        width: 2
      },
      {
        value: "ိ",
        parent: 5,
        width: 2
      },
      {
        value: "ီ",
        parent: 5,
        width: 2
      },
      {
        value: "ု",
        parent: 5,
        width: 2
      },
      {
        value: "ူ",
        parent: 5,
        width: 2
      },
      {
        value: "ေ",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Javanese (Jawa)",
    keys: [
      {
        value: "꧑",
        parent: 0,
        width: 2
      },
      {
        value: "꧒",
        parent: 0,
        width: 2
      },
      {
        value: "꧓",
        parent: 0,
        width: 2
      },
      {
        value: "꧔",
        parent: 0,
        width: 2
      },
      {
        value: "꧕",
        parent: 0,
        width: 2
      },
      {
        value: "꧖",
        parent: 0,
        width: 2
      },
      {
        value: "꧗",
        parent: 0,
        width: 2
      },
      {
        value: "꧘",
        parent: 0,
        width: 2
      },
      {
        value: "꧙",
        parent: 0,
        width: 2
      },
      {
        value: "꧐",
        parent: 0,
        width: 2
      },
      {
        value: "ꦖ",
        parent: 1,
        width: 2
      },
      {
        value: "ꦮ",
        parent: 1,
        width: 2
      },
      {
        value: "ꦌ",
        parent: 1,
        width: 2
      },
      {
        value: "ꦫ",
        parent: 1,
        width: 2
      },
      {
        value: "ꦠ",
        parent: 1,
        width: 2
      },
      {
        value: "ꦪ",
        parent: 1,
        width: 2
      },
      {
        value: "ꦈ",
        parent: 1,
        width: 2
      },
      {
        value: "ꦆ",
        parent: 1,
        width: 2
      },
      {
        value: "ꦎ",
        parent: 1,
        width: 2
      },
      {
        value: "ꦥ",
        parent: 1,
        width: 2
      },
      {
        value: "ꦑ",
        parent: 1,
        width: 2
      },
      {
        value: "ꦓ",
        parent: 1,
        width: 2
      },
      {
        value: "ꦄ",
        parent: 2,
        width: 2
      },
      {
        value: "ꦱ",
        parent: 2,
        width: 2
      },
      {
        value: "ꦢ",
        parent: 2,
        width: 2
      },
      {
        value: "ꦦ",
        parent: 2,
        width: 2
      },
      {
        value: "ꦒ",
        parent: 2,
        width: 2
      },
      {
        value: "ꦲ",
        parent: 2,
        width: 2
      },
      {
        value: "ꦗ",
        parent: 2,
        width: 2
      },
      {
        value: "ꦏ",
        parent: 2,
        width: 2
      },
      {
        value: "ꦭ",
        parent: 2,
        width: 2
      },
      {
        value: "ꦔ",
        parent: 2,
        width: 2
      },
      {
        value: "ꦙ",
        parent: 2,
        width: 2
      },
      {
        value: "ꦯ",
        parent: 3,
        width: 2
      },
      {
        value: "ꦰ",
        parent: 3,
        width: 2
      },
      {
        value: "ꦕ",
        parent: 3,
        width: 2
      },
      {
        value: "ꦨ",
        parent: 3,
        width: 2
      },
      {
        value: "ꦧ",
        parent: 3,
        width: 2
      },
      {
        value: "ꦤ",
        parent: 3,
        width: 2
      },
      {
        value: "ꦩ",
        parent: 3,
        width: 2
      },
      {
        value: "ꦚ",
        parent: 3,
        width: 2
      },
      {
        value: "ꦛ",
        parent: 3,
        width: 2
      },
      {
        value: "ꦜ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "Rp",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: "꧇",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ꦝ",
        parent: 5,
        width: 2
      },
      {
        value: "ꦞ",
        parent: 5,
        width: 2
      },
      {
        value: "ꦟ",
        parent: 5,
        width: 2
      },
      {
        value: "ꦡ",
        parent: 5,
        width: 2
      },
      {
        value: "ꦣ",
        parent: 5,
        width: 2
      },
      {
        value: "ꦬ",
        parent: 5,
        width: 2
      },
      {
        value: "꧀",
        parent: 5,
        width: 2
      },
      {
        value: "ꦄꦴ",
        parent: 5,
        width: 2
      },
      {
        value: "ꦇ",
        parent: 5,
        width: 2
      },
      {
        value: "ꦈꦴ",
        parent: 5,
        width: 2
      },
      {
        value: "ꦴ",
        parent: 5,
        width: 2
      },
      {
        value: "ꦶ",
        parent: 5,
        width: 2
      },
      {
        value: "ꦷ",
        parent: 5,
        width: 2
      },
      {
        value: "ꦸ",
        parent: 5,
        width: 2
      },
      {
        value: "ꦹ",
        parent: 5,
        width: 2
      },
      {
        value: "ꦉ",
        parent: 5,
        width: 2
      },
      {
        value: "ꦉꦴ",
        parent: 5,
        width: 2
      },
      {
        value: "ꦊ",
        parent: 5,
        width: 2
      },
      {
        value: "ꦋ",
        parent: 5,
        width: 2
      },
      {
        value: "ꦍ",
        parent: 5,
        width: 2
      },
      {
        value: "ꦎꦴ",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Sundanese",
    keys: [
      {
        value: "᮱",
        parent: 0,
        width: 2
      },
      {
        value: "᮲",
        parent: 0,
        width: 2
      },
      {
        value: "᮳",
        parent: 0,
        width: 2
      },
      {
        value: "᮴",
        parent: 0,
        width: 2
      },
      {
        value: "᮵",
        parent: 0,
        width: 2
      },
      {
        value: "᮶",
        parent: 0,
        width: 2
      },
      {
        value: "᮷",
        parent: 0,
        width: 2
      },
      {
        value: "᮸",
        parent: 0,
        width: 2
      },
      {
        value: "᮹",
        parent: 0,
        width: 2
      },
      {
        value: "᮰",
        parent: 0,
        width: 2
      },
      {
        value: "ᮋ",
        parent: 1,
        width: 2
      },
      {
        value: "ᮝ",
        parent: 1,
        width: 2
      },
      {
        value: "ᮈ",
        parent: 1,
        width: 2
      },
      {
        value: "ᮛ",
        parent: 1,
        width: 2
      },
      {
        value: "ᮒ",
        parent: 1,
        width: 2
      },
      {
        value: "ᮚ",
        parent: 1,
        width: 2
      },
      {
        value: "ᮅ",
        parent: 1,
        width: 2
      },
      {
        value: "ᮄ",
        parent: 1,
        width: 2
      },
      {
        value: "ᮇ",
        parent: 1,
        width: 2
      },
      {
        value: "ᮕ",
        parent: 1,
        width: 2
      },
      {
        value: "ᮍ",
        parent: 1,
        width: 2
      },
      {
        value: "ᮑ",
        parent: 1,
        width: 2
      },
      {
        value: "ᮃ",
        parent: 2,
        width: 2
      },
      {
        value: "ᮞ",
        parent: 2,
        width: 2
      },
      {
        value: "ᮓ",
        parent: 2,
        width: 2
      },
      {
        value: "ᮖ",
        parent: 2,
        width: 2
      },
      {
        value: "ᮌ",
        parent: 2,
        width: 2
      },
      {
        value: "ᮠ",
        parent: 2,
        width: 2
      },
      {
        value: "ᮏ",
        parent: 2,
        width: 2
      },
      {
        value: "ᮊ",
        parent: 2,
        width: 2
      },
      {
        value: "ᮜ",
        parent: 2,
        width: 2
      },
      {
        value: "ᮮ",
        parent: 2,
        width: 2
      },
      {
        value: "ᮯ",
        parent: 2,
        width: 2
      },
      {
        value: "ᮐ",
        parent: 3,
        width: 2
      },
      {
        value: "ᮟ",
        parent: 3,
        width: 2
      },
      {
        value: "ᮎ",
        parent: 3,
        width: 2
      },
      {
        value: "ᮗ",
        parent: 3,
        width: 2
      },
      {
        value: "ᮘ",
        parent: 3,
        width: 2
      },
      {
        value: "ᮔ",
        parent: 3,
        width: 2
      },
      {
        value: "ᮙ",
        parent: 3,
        width: 2
      },
      {
        value: "᮪",
        parent: 3,
        width: 2
      },
      {
        value: "ᮤ",
        parent: 3,
        width: 2
      },
      {
        value: "ᮥ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "Rp",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ᮆ",
        parent: 5,
        width: 2
      },
      {
        value: "ᮉ",
        parent: 5,
        width: 2
      },
      {
        value: "ᮦ",
        parent: 5,
        width: 2
      },
      {
        value: "ᮧ",
        parent: 5,
        width: 2
      },
      {
        value: "ᮨ",
        parent: 5,
        width: 2
      },
      {
        value: "ᮩ",
        parent: 5,
        width: 2
      },
      {
        value: "ᮡ",
        parent: 5,
        width: 2
      },
      {
        value: "ᮢ",
        parent: 5,
        width: 2
      },
      {
        value: "ᮣ",
        parent: 5,
        width: 2
      },
      {
        value: "ᮬ",
        parent: 5,
        width: 2
      },
      {
        value: "ᮭ",
        parent: 5,
        width: 2
      },
      {
        value: "ᮀ",
        parent: 5,
        width: 2
      },
      {
        value: "ᮂ",
        parent: 5,
        width: 2
      },
      {
        value: "ᮁ",
        parent: 5,
        width: 2
      },
      {
        value: "ᮺ",
        parent: 5,
        width: 2
      },
      {
        value: "a",
        parent: 5,
        width: 2
      },
      {
        value: "b",
        parent: 5,
        width: 2
      },
      {
        value: "c",
        parent: 5,
        width: 2
      },
      {
        value: "d",
        parent: 5,
        width: 2
      },
      {
        value: "e",
        parent: 5,
        width: 2
      },
      {
        value: "f",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Balinese",
    keys: [
      {
        value: "᭑",
        parent: 0,
        width: 2
      },
      {
        value: "᭒",
        parent: 0,
        width: 2
      },
      {
        value: "᭓",
        parent: 0,
        width: 2
      },
      {
        value: "᭔",
        parent: 0,
        width: 2
      },
      {
        value: "᭕",
        parent: 0,
        width: 2
      },
      {
        value: "᭖",
        parent: 0,
        width: 2
      },
      {
        value: "᭗",
        parent: 0,
        width: 2
      },
      {
        value: "᭘",
        parent: 0,
        width: 2
      },
      {
        value: "᭙",
        parent: 0,
        width: 2
      },
      {
        value: "᭐",
        parent: 0,
        width: 2
      },
      {
        value: "ᬙ",
        parent: 1,
        width: 2
      },
      {
        value: "ᬯ",
        parent: 1,
        width: 2
      },
      {
        value: "ᬏ",
        parent: 1,
        width: 2
      },
      {
        value: "ᬭ",
        parent: 1,
        width: 2
      },
      {
        value: "ᬢ",
        parent: 1,
        width: 2
      },
      {
        value: "ᬬ",
        parent: 1,
        width: 2
      },
      {
        value: "ᬉ",
        parent: 1,
        width: 2
      },
      {
        value: "ᬇ",
        parent: 1,
        width: 2
      },
      {
        value: "ᬉ",
        parent: 1,
        width: 2
      },
      {
        value: "ᬧ",
        parent: 1,
        width: 2
      },
      {
        value: "ᬔ",
        parent: 1,
        width: 2
      },
      {
        value: "ᬖ",
        parent: 1,
        width: 2
      },
      {
        value: "ᬅ",
        parent: 2,
        width: 2
      },
      {
        value: "ᬲ",
        parent: 2,
        width: 2
      },
      {
        value: "ᬤ",
        parent: 2,
        width: 2
      },
      {
        value: "ᬨ",
        parent: 2,
        width: 2
      },
      {
        value: "ᬕ",
        parent: 2,
        width: 2
      },
      {
        value: "ᬳ",
        parent: 2,
        width: 2
      },
      {
        value: "ᬚ",
        parent: 2,
        width: 2
      },
      {
        value: "ᬓ",
        parent: 2,
        width: 2
      },
      {
        value: "ᬮ",
        parent: 2,
        width: 2
      },
      {
        value: "ᬗ",
        parent: 2,
        width: 2
      },
      {
        value: "ᬛ",
        parent: 2,
        width: 2
      },
      {
        value: "ᬰ",
        parent: 3,
        width: 2
      },
      {
        value: "ᬱ",
        parent: 3,
        width: 2
      },
      {
        value: "ᬘ",
        parent: 3,
        width: 2
      },
      {
        value: "ᬪ",
        parent: 3,
        width: 2
      },
      {
        value: "ᬩ",
        parent: 3,
        width: 2
      },
      {
        value: "ᬦ",
        parent: 3,
        width: 2
      },
      {
        value: "ᬫ",
        parent: 3,
        width: 2
      },
      {
        value: "ᬜ",
        parent: 3,
        width: 2
      },
      {
        value: "ᬝ",
        parent: 3,
        width: 2
      },
      {
        value: "ᬞ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "Rp",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ᬟ",
        parent: 5,
        width: 2
      },
      {
        value: "ᬠ",
        parent: 5,
        width: 2
      },
      {
        value: "ᬡ",
        parent: 5,
        width: 2
      },
      {
        value: "ᬣ",
        parent: 5,
        width: 2
      },
      {
        value: "ᬥ",
        parent: 5,
        width: 2
      },
      {
        value: "᭄",
        parent: 5,
        width: 2
      },
      {
        value: "ᬆ",
        parent: 5,
        width: 2
      },
      {
        value: "ᬈ",
        parent: 5,
        width: 2
      },
      {
        value: "ᬊ",
        parent: 5,
        width: 2
      },
      {
        value: "ᬵ",
        parent: 5,
        width: 2
      },
      {
        value: "ᬶ",
        parent: 5,
        width: 2
      },
      {
        value: "ᬷ",
        parent: 5,
        width: 2
      },
      {
        value: "ᬸ",
        parent: 5,
        width: 2
      },
      {
        value: "ᬹ",
        parent: 5,
        width: 2
      },
      {
        value: "ᬋ",
        parent: 5,
        width: 2
      },
      {
        value: "ᬌ",
        parent: 5,
        width: 2
      },
      {
        value: "ᬍ",
        parent: 5,
        width: 2
      },
      {
        value: "ᬎ",
        parent: 5,
        width: 2
      },
      {
        value: "ᬐ",
        parent: 5,
        width: 2
      },
      {
        value: "ᬒ",
        parent: 5,
        width: 2
      },
      {
        value: "ᬺ",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Baybayin",
    keys: [
      {
        value: "1",
        parent: 0,
        width: 2
      },
      {
        value: "2",
        parent: 0,
        width: 2
      },
      {
        value: "3",
        parent: 0,
        width: 2
      },
      {
        value: "4",
        parent: 0,
        width: 2
      },
      {
        value: "5",
        parent: 0,
        width: 2
      },
      {
        value: "6",
        parent: 0,
        width: 2
      },
      {
        value: "7",
        parent: 0,
        width: 2
      },
      {
        value: "8",
        parent: 0,
        width: 2
      },
      {
        value: "9",
        parent: 0,
        width: 2
      },
      {
        value: "0",
        parent: 0,
        width: 2
      },
      {
        value: "ᜀ",
        parent: 1,
        width: 2
      },
      {
        value: "ᜁ",
        parent: 1,
        width: 2
      },
      {
        value: "ᜂ",
        parent: 1,
        width: 2
      },
      {
        value: "ᜃ",
        parent: 1,
        width: 2
      },
      {
        value: "ᜄ",
        parent: 1,
        width: 2
      },
      {
        value: "ᜅ",
        parent: 1,
        width: 2
      },
      {
        value: "ᜆ",
        parent: 1,
        width: 2
      },
      {
        value: "ᜇ",
        parent: 1,
        width: 2
      },
      {
        value: "ᜈ",
        parent: 1,
        width: 2
      },
      {
        value: "ᜉ",
        parent: 1,
        width: 2
      },
      {
        value: "ᜊ",
        parent: 2,
        width: 2
      },
      {
        value: "ᜋ",
        parent: 2,
        width: 2
      },
      {
        value: "ᜌ",
        parent: 2,
        width: 2
      },
      {
        value: "&#5901;",
        parent: 2,
        width: 2
      },
      {
        value: "ᜎ",
        parent: 2,
        width: 2
      },
      {
        value: "ᜏ",
        parent: 2,
        width: 2
      },
      {
        value: "ᜐ",
        parent: 2,
        width: 2
      },
      {
        value: "ᜑ",
        parent: 2,
        width: 2
      },
      {
        value: "ᜒ",
        parent: 2,
        width: 2
      },
      {
        value: "ᜓ",
        parent: 3,
        width: 2
      },
      {
        value: "᜔",
        parent: 3,
        width: 2
      },
      {
        value: "&#x1715;",
        parent: 3,
        width: 2
      },
      {
        value: "᜵",
        parent: 3,
        width: 2
      },
      {
        value: "᜶",
        parent: 3,
        width: 2
      },
      {
        value: "&#5919;",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "₱",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "a",
        parent: 5,
        width: 2
      },
      {
        value: "b",
        parent: 5,
        width: 2
      },
      {
        value: "c",
        parent: 5,
        width: 2
      },
      {
        value: "d",
        parent: 5,
        width: 2
      },
      {
        value: "e",
        parent: 5,
        width: 2
      },
      {
        value: "f",
        parent: 5,
        width: 2
      },
      {
        value: "g",
        parent: 5,
        width: 2
      },
      {
        value: "h",
        parent: 5,
        width: 2
      },
      {
        value: "i",
        parent: 5,
        width: 2
      },
      {
        value: "j",
        parent: 5,
        width: 2
      },
      {
        value: "k",
        parent: 5,
        width: 2
      },
      {
        value: "l",
        parent: 5,
        width: 2
      },
      {
        value: "m",
        parent: 5,
        width: 2
      },
      {
        value: "n",
        parent: 5,
        width: 2
      },
      {
        value: "o",
        parent: 5,
        width: 2
      },
      {
        value: "p",
        parent: 5,
        width: 2
      },
      {
        value: "q",
        parent: 5,
        width: 2
      },
      {
        value: "r",
        parent: 5,
        width: 2
      },
      {
        value: "s",
        parent: 5,
        width: 2
      },
      {
        value: "t",
        parent: 5,
        width: 2
      },
      {
        value: "u",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Tifinagh",
    keys: [
      {
        value: "1",
        parent: 0,
        width: 2
      },
      {
        value: "2",
        parent: 0,
        width: 2
      },
      {
        value: "3",
        parent: 0,
        width: 2
      },
      {
        value: "4",
        parent: 0,
        width: 2
      },
      {
        value: "5",
        parent: 0,
        width: 2
      },
      {
        value: "6",
        parent: 0,
        width: 2
      },
      {
        value: "7",
        parent: 0,
        width: 2
      },
      {
        value: "8",
        parent: 0,
        width: 2
      },
      {
        value: "9",
        parent: 0,
        width: 2
      },
      {
        value: "0",
        parent: 0,
        width: 2
      },
      {
        value: "ⵇ",
        parent: 1,
        width: 2
      },
      {
        value: "ⵡ",
        parent: 1,
        width: 2
      },
      {
        value: "ⴻ",
        parent: 1,
        width: 2
      },
      {
        value: "ⵔ",
        parent: 1,
        width: 2
      },
      {
        value: "ⵜ",
        parent: 1,
        width: 2
      },
      {
        value: "ⵢ",
        parent: 1,
        width: 2
      },
      {
        value: "ⵓ",
        parent: 1,
        width: 2
      },
      {
        value: "ⵉ",
        parent: 1,
        width: 2
      },
      {
        value: "ⵄ",
        parent: 1,
        width: 2
      },
      {
        value: "ⵒ",
        parent: 1,
        width: 2
      },
      {
        value: "ⴹ",
        parent: 1,
        width: 2
      },
      {
        value: "ⵕ",
        parent: 1,
        width: 2
      },
      {
        value: "ⴰ",
        parent: 2,
        width: 2
      },
      {
        value: "ⵙ",
        parent: 2,
        width: 2
      },
      {
        value: "ⴷ",
        parent: 2,
        width: 2
      },
      {
        value: "ⴼ",
        parent: 2,
        width: 2
      },
      {
        value: "ⴳ",
        parent: 2,
        width: 2
      },
      {
        value: "ⵀ",
        parent: 2,
        width: 2
      },
      {
        value: "ⵊ",
        parent: 2,
        width: 2
      },
      {
        value: "ⴽ",
        parent: 2,
        width: 2
      },
      {
        value: "ⵍ",
        parent: 2,
        width: 2
      },
      {
        value: "ⵖ",
        parent: 2,
        width: 2
      },
      {
        value: "ⵚ",
        parent: 2,
        width: 2
      },
      {
        value: "ⵣ",
        parent: 3,
        width: 2
      },
      {
        value: "ⵅ",
        parent: 3,
        width: 2
      },
      {
        value: "ⵃ",
        parent: 3,
        width: 2
      },
      {
        value: "ⵯ",
        parent: 3,
        width: 2
      },
      {
        value: "ⴱ",
        parent: 3,
        width: 2
      },
      {
        value: "ⵏ",
        parent: 3,
        width: 2
      },
      {
        value: "ⵎ",
        parent: 3,
        width: 2
      },
      {
        value: "ⵟ",
        parent: 3,
        width: 2
      },
      {
        value: "ⵥ",
        parent: 3,
        width: 2
      },
      {
        value: "ⴲ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "د.م.",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ⴴ",
        parent: 5,
        width: 2
      },
      {
        value: "ⴵ",
        parent: 5,
        width: 2
      },
      {
        value: "ⴶ",
        parent: 5,
        width: 2
      },
      {
        value: "ⴸ",
        parent: 5,
        width: 2
      },
      {
        value: "ⴺ",
        parent: 5,
        width: 2
      },
      {
        value: "ⴿ",
        parent: 5,
        width: 2
      },
      {
        value: "ⵁ",
        parent: 5,
        width: 2
      },
      {
        value: "ⵝ",
        parent: 5,
        width: 2
      },
      {
        value: "ⵞ",
        parent: 5,
        width: 2
      },
      {
        value: "ⵠ",
        parent: 5,
        width: 2
      },
      {
        value: "ا",
        parent: 5,
        width: 2
      },
      {
        value: "ي",
        parent: 5,
        width: 2
      },
      {
        value: "و",
        parent: 5,
        width: 2
      },
      {
        value: "ك",
        parent: 5,
        width: 2
      },
      {
        value: "ت",
        parent: 5,
        width: 2
      },
      {
        value: "ب",
        parent: 5,
        width: 2
      },
      {
        value: "ل",
        parent: 5,
        width: 2
      },
      {
        value: "ف",
        parent: 5,
        width: 2
      },
      {
        value: "س",
        parent: 5,
        width: 2
      },
      {
        value: "ه",
        parent: 5,
        width: 2
      },
      {
        value: "ر",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "N'Ko",
    keys: [
      {
        value: "߁",
        parent: 0,
        width: 2
      },
      {
        value: "߂",
        parent: 0,
        width: 2
      },
      {
        value: "߃",
        parent: 0,
        width: 2
      },
      {
        value: "߄",
        parent: 0,
        width: 2
      },
      {
        value: "߅",
        parent: 0,
        width: 2
      },
      {
        value: "߆",
        parent: 0,
        width: 2
      },
      {
        value: "߇",
        parent: 0,
        width: 2
      },
      {
        value: "߈",
        parent: 0,
        width: 2
      },
      {
        value: "߉",
        parent: 0,
        width: 2
      },
      {
        value: "߀",
        parent: 0,
        width: 2
      },
      {
        value: "ߜ",
        parent: 1,
        width: 2
      },
      {
        value: "ߥ",
        parent: 1,
        width: 2
      },
      {
        value: "ߋ",
        parent: 1,
        width: 2
      },
      {
        value: "ߙ",
        parent: 1,
        width: 2
      },
      {
        value: "ߕ",
        parent: 1,
        width: 2
      },
      {
        value: "ߦ",
        parent: 1,
        width: 2
      },
      {
        value: "ߎ",
        parent: 1,
        width: 2
      },
      {
        value: "ߌ",
        parent: 1,
        width: 2
      },
      {
        value: "ߏ",
        parent: 1,
        width: 2
      },
      {
        value: "ߔ",
        parent: 1,
        width: 2
      },
      {
        value: "ߠ",
        parent: 1,
        width: 2
      },
      {
        value: "ߧ",
        parent: 1,
        width: 2
      },
      {
        value: "ߊ",
        parent: 2,
        width: 2
      },
      {
        value: "ߛ",
        parent: 2,
        width: 2
      },
      {
        value: "ߘ",
        parent: 2,
        width: 2
      },
      {
        value: "ߝ",
        parent: 2,
        width: 2
      },
      {
        value: "ߒ",
        parent: 2,
        width: 2
      },
      {
        value: "ߤ",
        parent: 2,
        width: 2
      },
      {
        value: "ߖ",
        parent: 2,
        width: 2
      },
      {
        value: "ߞ",
        parent: 2,
        width: 2
      },
      {
        value: "ߟ",
        parent: 2,
        width: 2
      },
      {
        value: "ߑ",
        parent: 2,
        width: 2
      },
      {
        value: "߫",
        parent: 2,
        width: 2
      },
      {
        value: "ߐ",
        parent: 3,
        width: 2
      },
      {
        value: "ߍ",
        parent: 3,
        width: 2
      },
      {
        value: "ߚ",
        parent: 3,
        width: 2
      },
      {
        value: "ߗ",
        parent: 3,
        width: 2
      },
      {
        value: "ߓ",
        parent: 3,
        width: 2
      },
      {
        value: "ߣ",
        parent: 3,
        width: 2
      },
      {
        value: "ߡ",
        parent: 3,
        width: 2
      },
      {
        value: "߬",
        parent: 3,
        width: 2
      },
      {
        value: "߭",
        parent: 3,
        width: 2
      },
      {
        value: "߯",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "߹",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "ߴ",
        parent: 4,
        width: 2
      },
      {
        value: "ߵ",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "߾",
        parent: 3,
        width: 2
      },
      {
        value: "߿",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: "߸",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "߰",
        parent: 5,
        width: 2
      },
      {
        value: "߱",
        parent: 5,
        width: 2
      },
      {
        value: "߮",
        parent: 5,
        width: 2
      },
      {
        value: "߲",
        parent: 5,
        width: 2
      },
      {
        value: "߳",
        parent: 5,
        width: 2
      },
      {
        value: "߶",
        parent: 5,
        width: 2
      },
      {
        value: "߷",
        parent: 5,
        width: 2
      },
      {
        value: "ߺ",
        parent: 5,
        width: 2
      },
      {
        value: "߽",
        parent: 5,
        width: 2
      },
      {
        value: "ߪ",
        parent: 5,
        width: 2
      },
      {
        value: "ߩ",
        parent: 5,
        width: 2
      },
      {
        value: "ߨ",
        parent: 5,
        width: 2
      },
      {
        value: "ا",
        parent: 5,
        width: 2
      },
      {
        value: "ي",
        parent: 5,
        width: 2
      },
      {
        value: "و",
        parent: 5,
        width: 2
      },
      {
        value: "ك",
        parent: 5,
        width: 2
      },
      {
        value: "ت",
        parent: 5,
        width: 2
      },
      {
        value: "د",
        parent: 5,
        width: 2
      },
      {
        value: "ب",
        parent: 5,
        width: 2
      },
      {
        value: "ل",
        parent: 5,
        width: 2
      },
      {
        value: "ر",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Cherokee",
    keys: [
      {
        value: "1",
        parent: 0,
        width: 2
      },
      {
        value: "2",
        parent: 0,
        width: 2
      },
      {
        value: "3",
        parent: 0,
        width: 2
      },
      {
        value: "4",
        parent: 0,
        width: 2
      },
      {
        value: "5",
        parent: 0,
        width: 2
      },
      {
        value: "6",
        parent: 0,
        width: 2
      },
      {
        value: "7",
        parent: 0,
        width: 2
      },
      {
        value: "8",
        parent: 0,
        width: 2
      },
      {
        value: "9",
        parent: 0,
        width: 2
      },
      {
        value: "0",
        parent: 0,
        width: 2
      },
      {
        value: "Ꭰ",
        parent: 1,
        width: 2
      },
      {
        value: "Ꭱ",
        parent: 1,
        width: 2
      },
      {
        value: "Ꭲ",
        parent: 1,
        width: 2
      },
      {
        value: "Ꭳ",
        parent: 1,
        width: 2
      },
      {
        value: "Ꭴ",
        parent: 1,
        width: 2
      },
      {
        value: "Ꭵ",
        parent: 1,
        width: 2
      },
      {
        value: "Ꭷ",
        parent: 1,
        width: 2
      },
      {
        value: "Ꭶ",
        parent: 1,
        width: 2
      },
      {
        value: "Ꭸ",
        parent: 1,
        width: 2
      },
      {
        value: "Ꭹ",
        parent: 1,
        width: 2
      },
      {
        value: "Ꭺ",
        parent: 1,
        width: 2
      },
      {
        value: "Ꭻ",
        parent: 1,
        width: 2
      },
      {
        value: "Ꮧ",
        parent: 1,
        width: 2
      },
      {
        value: "Ꮫ",
        parent: 1,
        width: 2
      },
      {
        value: "Ꭼ",
        parent: 2,
        width: 2
      },
      {
        value: "Ꭽ",
        parent: 2,
        width: 2
      },
      {
        value: "Ꭾ",
        parent: 2,
        width: 2
      },
      {
        value: "Ꭿ",
        parent: 2,
        width: 2
      },
      {
        value: "Ꮀ",
        parent: 2,
        width: 2
      },
      {
        value: "Ꮁ",
        parent: 2,
        width: 2
      },
      {
        value: "Ꮂ",
        parent: 2,
        width: 2
      },
      {
        value: "Ꮃ",
        parent: 2,
        width: 2
      },
      {
        value: "Ꮄ",
        parent: 2,
        width: 2
      },
      {
        value: "Ꮅ",
        parent: 2,
        width: 2
      },
      {
        value: "Ꮆ",
        parent: 2,
        width: 2
      },
      {
        value: "Ꮩ",
        parent: 2,
        width: 2
      },
      {
        value: "Ꮤ",
        parent: 2,
        width: 2
      },
      {
        value: "Ꮇ",
        parent: 3,
        width: 2
      },
      {
        value: "Ꮈ",
        parent: 3,
        width: 2
      },
      {
        value: "Ꮉ",
        parent: 3,
        width: 2
      },
      {
        value: "Ꮊ",
        parent: 3,
        width: 2
      },
      {
        value: "Ꮋ",
        parent: 3,
        width: 2
      },
      {
        value: "Ꮌ",
        parent: 3,
        width: 2
      },
      {
        value: "Ꮍ",
        parent: 3,
        width: 2
      },
      {
        value: "Ᏽ",
        parent: 3,
        width: 2
      },
      {
        value: "Ꮏ",
        parent: 3,
        width: 2
      },
      {
        value: "Ꮐ",
        parent: 3,
        width: 2
      },
      {
        value: "Ꮪ",
        parent: 3,
        width: 2
      },
      {
        value: "Ꮦ",
        parent: 3,
        width: 2
      },
      {
        value: "Ꮨ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "$",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "Ꮎ",
        parent: 5,
        width: 2
      },
      {
        value: "Ꮑ",
        parent: 5,
        width: 2
      },
      {
        value: "Ꮒ",
        parent: 5,
        width: 2
      },
      {
        value: "Ꮓ",
        parent: 5,
        width: 2
      },
      {
        value: "Ꮔ",
        parent: 5,
        width: 2
      },
      {
        value: "Ꮕ",
        parent: 5,
        width: 2
      },
      {
        value: "Ꮖ",
        parent: 5,
        width: 2
      },
      {
        value: "Ꮗ",
        parent: 5,
        width: 2
      },
      {
        value: "Ꮘ",
        parent: 5,
        width: 2
      },
      {
        value: "Ꮙ",
        parent: 5,
        width: 2
      },
      {
        value: "Ꮚ",
        parent: 5,
        width: 2
      },
      {
        value: "Ꮛ",
        parent: 5,
        width: 2
      },
      {
        value: "Ꮝ",
        parent: 5,
        width: 2
      },
      {
        value: "Ꮜ",
        parent: 5,
        width: 2
      },
      {
        value: "Ꮞ",
        parent: 5,
        width: 2
      },
      {
        value: "Ꮟ",
        parent: 5,
        width: 2
      },
      {
        value: "Ꮠ",
        parent: 5,
        width: 2
      },
      {
        value: "Ꮡ",
        parent: 5,
        width: 2
      },
      {
        value: "Ꮢ",
        parent: 5,
        width: 2
      },
      {
        value: "Ꮣ",
        parent: 5,
        width: 2
      },
      {
        value: "Ꮥ",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Runes",
    keys: [
      {
        value: "1",
        parent: 0,
        width: 2
      },
      {
        value: "2",
        parent: 0,
        width: 2
      },
      {
        value: "3",
        parent: 0,
        width: 2
      },
      {
        value: "4",
        parent: 0,
        width: 2
      },
      {
        value: "5",
        parent: 0,
        width: 2
      },
      {
        value: "6",
        parent: 0,
        width: 2
      },
      {
        value: "7",
        parent: 0,
        width: 2
      },
      {
        value: "8",
        parent: 0,
        width: 2
      },
      {
        value: "9",
        parent: 0,
        width: 2
      },
      {
        value: "0",
        parent: 0,
        width: 2
      },
      {
        value: "ᚠ",
        parent: 1,
        width: 2
      },
      {
        value: "ᚢ",
        parent: 1,
        width: 2
      },
      {
        value: "ᚦ",
        parent: 1,
        width: 2
      },
      {
        value: "ᚨ",
        parent: 1,
        width: 2
      },
      {
        value: "ᚱ",
        parent: 1,
        width: 2
      },
      {
        value: "ᚲ",
        parent: 1,
        width: 2
      },
      {
        value: "ᚷ",
        parent: 1,
        width: 2
      },
      {
        value: "ᚹ",
        parent: 1,
        width: 2
      },
      {
        value: "ᚺ",
        parent: 2,
        width: 2
      },
      {
        value: "ᚾ",
        parent: 2,
        width: 2
      },
      {
        value: "ᛁ",
        parent: 2,
        width: 2
      },
      {
        value: "ᛃ",
        parent: 2,
        width: 2
      },
      {
        value: "ᛇ",
        parent: 2,
        width: 2
      },
      {
        value: "ᛈ",
        parent: 2,
        width: 2
      },
      {
        value: "ᛉ",
        parent: 2,
        width: 2
      },
      {
        value: "ᛊ",
        parent: 2,
        width: 2
      },
      {
        value: "ᛏ",
        parent: 3,
        width: 2
      },
      {
        value: "ᛒ",
        parent: 3,
        width: 2
      },
      {
        value: "ᛖ",
        parent: 3,
        width: 2
      },
      {
        value: "ᛗ",
        parent: 3,
        width: 2
      },
      {
        value: "ᛚ",
        parent: 3,
        width: 2
      },
      {
        value: "ᛜ",
        parent: 3,
        width: 2
      },
      {
        value: "ᛞ",
        parent: 3,
        width: 2
      },
      {
        value: "ᛟ",
        parent: 3,
        width: 2
      },
      {
        value: "᛫",
        parent: 4,
        width: 2
      },
      {
        value: "᛬",
        parent: 4,
        width: 2
      },
      {
        value: "᛭",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "€",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "a",
        parent: 5,
        width: 2
      },
      {
        value: "b",
        parent: 5,
        width: 2
      },
      {
        value: "c",
        parent: 5,
        width: 2
      },
      {
        value: "d",
        parent: 5,
        width: 2
      },
      {
        value: "e",
        parent: 5,
        width: 2
      },
      {
        value: "f",
        parent: 5,
        width: 2
      },
      {
        value: "g",
        parent: 5,
        width: 2
      },
      {
        value: "h",
        parent: 5,
        width: 2
      },
      {
        value: "i",
        parent: 5,
        width: 2
      },
      {
        value: "j",
        parent: 5,
        width: 2
      },
      {
        value: "k",
        parent: 5,
        width: 2
      },
      {
        value: "l",
        parent: 5,
        width: 2
      },
      {
        value: "m",
        parent: 5,
        width: 2
      },
      {
        value: "n",
        parent: 5,
        width: 2
      },
      {
        value: "o",
        parent: 5,
        width: 2
      },
      {
        value: "p",
        parent: 5,
        width: 2
      },
      {
        value: "q",
        parent: 5,
        width: 2
      },
      {
        value: "r",
        parent: 5,
        width: 2
      },
      {
        value: "s",
        parent: 5,
        width: 2
      },
      {
        value: "t",
        parent: 5,
        width: 2
      },
      {
        value: "u",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Glagolitic",
    keys: [
      {
        value: "1",
        parent: 0,
        width: 2
      },
      {
        value: "2",
        parent: 0,
        width: 2
      },
      {
        value: "3",
        parent: 0,
        width: 2
      },
      {
        value: "4",
        parent: 0,
        width: 2
      },
      {
        value: "5",
        parent: 0,
        width: 2
      },
      {
        value: "6",
        parent: 0,
        width: 2
      },
      {
        value: "7",
        parent: 0,
        width: 2
      },
      {
        value: "8",
        parent: 0,
        width: 2
      },
      {
        value: "9",
        parent: 0,
        width: 2
      },
      {
        value: "0",
        parent: 0,
        width: 2
      },
      {
        value: "ⰹ",
        parent: 1,
        width: 2
      },
      {
        value: "ⱌ",
        parent: 1,
        width: 2
      },
      {
        value: "ⱆ",
        parent: 1,
        width: 2
      },
      {
        value: "ⰽ",
        parent: 1,
        width: 2
      },
      {
        value: "ⰵ",
        parent: 1,
        width: 2
      },
      {
        value: "ⱖ",
        parent: 1,
        width: 2
      },
      {
        value: "ⱀ",
        parent: 1,
        width: 2
      },
      {
        value: "ⰳ",
        parent: 1,
        width: 2
      },
      {
        value: "ⱎ",
        parent: 1,
        width: 2
      },
      {
        value: "ⱋ",
        parent: 1,
        width: 2
      },
      {
        value: "ⰸ",
        parent: 1,
        width: 2
      },
      {
        value: "ⱈ",
        parent: 1,
        width: 2
      },
      {
        value: "ⱏ",
        parent: 1,
        width: 2
      },
      {
        value: "ⱇ",
        parent: 2,
        width: 2
      },
      {
        value: "ⱑ",
        parent: 2,
        width: 2
      },
      {
        value: "ⰲ",
        parent: 2,
        width: 2
      },
      {
        value: "ⰰ",
        parent: 2,
        width: 2
      },
      {
        value: "ⱂ",
        parent: 2,
        width: 2
      },
      {
        value: "ⱃ",
        parent: 2,
        width: 2
      },
      {
        value: "ⱁ",
        parent: 2,
        width: 2
      },
      {
        value: "ⰾ",
        parent: 3,
        width: 2
      },
      {
        value: "ⰴ",
        parent: 2,
        width: 2
      },
      {
        value: "ⰶ",
        parent: 2,
        width: 2
      },
      {
        value: "ⱗ",
        parent: 2,
        width: 2
      },
      {
        value: "ⱉ",
        parent: 3,
        width: 2
      },
      {
        value: "ⱍ",
        parent: 3,
        width: 2
      },
      {
        value: "ⱄ",
        parent: 3,
        width: 2
      },
      {
        value: "ⰿ",
        parent: 3,
        width: 2
      },
      {
        value: "ⰺ",
        parent: 3,
        width: 2
      },
      {
        value: "ⱅ",
        parent: 3,
        width: 2
      },
      {
        value: "ⱐ",
        parent: 3,
        width: 2
      },
      {
        value: "ⰱ",
        parent: 3,
        width: 2
      },
      {
        value: "ⱓ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "«",
        parent: 4,
        width: 2
      },
      {
        value: "»",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "₽",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "ⰼ",
        parent: 5,
        width: 2
      },
      {
        value: "ⱔ",
        parent: 5,
        width: 2
      },
      {
        value: "ⱙ",
        parent: 5,
        width: 2
      },
      {
        value: "ⱚ",
        parent: 5,
        width: 2
      },
      {
        value: "ⱛ",
        parent: 5,
        width: 2
      },
      {
        value: "а",
        parent: 5,
        width: 2
      },
      {
        value: "б",
        parent: 5,
        width: 2
      },
      {
        value: "в",
        parent: 5,
        width: 2
      },
      {
        value: "г",
        parent: 5,
        width: 2
      },
      {
        value: "д",
        parent: 5,
        width: 2
      },
      {
        value: "е",
        parent: 5,
        width: 2
      },
      {
        value: "ё",
        parent: 5,
        width: 2
      },
      {
        value: "ж",
        parent: 5,
        width: 2
      },
      {
        value: "з",
        parent: 5,
        width: 2
      },
      {
        value: "и",
        parent: 5,
        width: 2
      },
      {
        value: "й",
        parent: 5,
        width: 2
      },
      {
        value: "к",
        parent: 5,
        width: 2
      },
      {
        value: "л",
        parent: 5,
        width: 2
      },
      {
        value: "м",
        parent: 5,
        width: 2
      },
      {
        value: "н",
        parent: 5,
        width: 2
      },
      {
        value: "о",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Phoenecian",
    keys: [
      {
        value: "1",
        parent: 0,
        width: 2
      },
      {
        value: "2",
        parent: 0,
        width: 2
      },
      {
        value: "3",
        parent: 0,
        width: 2
      },
      {
        value: "4",
        parent: 0,
        width: 2
      },
      {
        value: "5",
        parent: 0,
        width: 2
      },
      {
        value: "6",
        parent: 0,
        width: 2
      },
      {
        value: "7",
        parent: 0,
        width: 2
      },
      {
        value: "8",
        parent: 0,
        width: 2
      },
      {
        value: "9",
        parent: 0,
        width: 2
      },
      {
        value: "0",
        parent: 0,
        width: 2
      },
      {
        value: "𐤒",
        parent: 1,
        width: 2
      },
      {
        value: "𐤓",
        parent: 1,
        width: 2
      },
      {
        value: "𐤀",
        parent: 1,
        width: 2
      },
      {
        value: "𐤈",
        parent: 1,
        width: 2
      },
      {
        value: "𐤅",
        parent: 1,
        width: 2
      },
      {
        value: "𐤐",
        parent: 1,
        width: 2
      },
      {
        value: "𐤔",
        parent: 2,
        width: 2
      },
      {
        value: "𐤃",
        parent: 2,
        width: 2
      },
      {
        value: "𐤂",
        parent: 2,
        width: 2
      },
      {
        value: "𐤊",
        parent: 2,
        width: 2
      },
      {
        value: "𐤏",
        parent: 2,
        width: 2
      },
      {
        value: "𐤉",
        parent: 2,
        width: 2
      },
      {
        value: "𐤇",
        parent: 2,
        width: 2
      },
      {
        value: "𐤋",
        parent: 2,
        width: 2
      },
      {
        value: "𐤆",
        parent: 3,
        width: 2
      },
      {
        value: "𐤎",
        parent: 3,
        width: 2
      },
      {
        value: "𐤁",
        parent: 3,
        width: 2
      },
      {
        value: "𐤄",
        parent: 3,
        width: 2
      },
      {
        value: "𐤍",
        parent: 3,
        width: 2
      },
      {
        value: "𐤌",
        parent: 3,
        width: 2
      },
      {
        value: "𐤑",
        parent: 3,
        width: 2
      },
      {
        value: "𐤕",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "$",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "a",
        parent: 5,
        width: 2
      },
      {
        value: "b",
        parent: 5,
        width: 2
      },
      {
        value: "c",
        parent: 5,
        width: 2
      },
      {
        value: "d",
        parent: 5,
        width: 2
      },
      {
        value: "e",
        parent: 5,
        width: 2
      },
      {
        value: "f",
        parent: 5,
        width: 2
      },
      {
        value: "g",
        parent: 5,
        width: 2
      },
      {
        value: "h",
        parent: 5,
        width: 2
      },
      {
        value: "i",
        parent: 5,
        width: 2
      },
      {
        value: "j",
        parent: 5,
        width: 2
      },
      {
        value: "k",
        parent: 5,
        width: 2
      },
      {
        value: "l",
        parent: 5,
        width: 2
      },
      {
        value: "m",
        parent: 5,
        width: 2
      },
      {
        value: "n",
        parent: 5,
        width: 2
      },
      {
        value: "o",
        parent: 5,
        width: 2
      },
      {
        value: "p",
        parent: 5,
        width: 2
      },
      {
        value: "q",
        parent: 5,
        width: 2
      },
      {
        value: "r",
        parent: 5,
        width: 2
      },
      {
        value: "s",
        parent: 5,
        width: 2
      },
      {
        value: "t",
        parent: 5,
        width: 2
      },
      {
        value: "u",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Orkhon",
    keys: [
      {
        value: "1",
        parent: 0,
        width: 2
      },
      {
        value: "2",
        parent: 0,
        width: 2
      },
      {
        value: "3",
        parent: 0,
        width: 2
      },
      {
        value: "4",
        parent: 0,
        width: 2
      },
      {
        value: "5",
        parent: 0,
        width: 2
      },
      {
        value: "6",
        parent: 0,
        width: 2
      },
      {
        value: "7",
        parent: 0,
        width: 2
      },
      {
        value: "8",
        parent: 0,
        width: 2
      },
      {
        value: "9",
        parent: 0,
        width: 2
      },
      {
        value: "0",
        parent: 0,
        width: 2
      },
      {
        value: "𐰸",
        parent: 1,
        width: 2
      },
      {
        value: "𐰲",
        parent: 1,
        width: 2
      },
      {
        value: "𐱁",
        parent: 1,
        width: 2
      },
      {
        value: "𐰺",
        parent: 1,
        width: 2
      },
      {
        value: "𐱃",
        parent: 1,
        width: 2
      },
      {
        value: "𐰖",
        parent: 1,
        width: 2
      },
      {
        value: "𐰇",
        parent: 1,
        width: 2
      },
      {
        value: "𐰃",
        parent: 1,
        width: 2
      },
      {
        value: "𐰆",
        parent: 1,
        width: 2
      },
      {
        value: "𐰯",
        parent: 1,
        width: 2
      },
      {
        value: "𐰦",
        parent: 1,
        width: 2
      },
      {
        value: "𐰿",
        parent: 1,
        width: 2
      },
      {
        value: "𐰀",
        parent: 2,
        width: 2
      },
      {
        value: "𐰽",
        parent: 2,
        width: 2
      },
      {
        value: "𐰑",
        parent: 2,
        width: 2
      },
      {
        value: "𐰭",
        parent: 2,
        width: 2
      },
      {
        value: "𐰍",
        parent: 2,
        width: 2
      },
      {
        value: "𐰱",
        parent: 2,
        width: 2
      },
      {
        value: "𐰶",
        parent: 2,
        width: 2
      },
      {
        value: "𐰴",
        parent: 2,
        width: 2
      },
      {
        value: "𐰞",
        parent: 2,
        width: 2
      },
      {
        value: "𐱇",
        parent: 2,
        width: 2
      },
      {
        value: "𐰰",
        parent: 2,
        width: 2
      },
      {
        value: "𐰔",
        parent: 3,
        width: 2
      },
      {
        value: "𐰨",
        parent: 3,
        width: 2
      },
      {
        value: "𐰪",
        parent: 3,
        width: 2
      },
      {
        value: "𐰡",
        parent: 3,
        width: 2
      },
      {
        value: "𐰉",
        parent: 3,
        width: 2
      },
      {
        value: "𐰣",
        parent: 3,
        width: 2
      },
      {
        value: "𐰢",
        parent: 3,
        width: 2
      },
      {
        value: "𐱈",
        parent: 3,
        width: 2
      },
      {
        value: "𐰋",
        parent: 3,
        width: 2
      },
      {
        value: "𐰓",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "₺",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "𐰏",
        parent: 5,
        width: 2
      },
      {
        value: "𐰠",
        parent: 5,
        width: 2
      },
      {
        value: "𐰤",
        parent: 5,
        width: 2
      },
      {
        value: "𐰼",
        parent: 5,
        width: 2
      },
      {
        value: "𐰾",
        parent: 5,
        width: 2
      },
      {
        value: "𐱅",
        parent: 5,
        width: 2
      },
      {
        value: "𐰘",
        parent: 5,
        width: 2
      },
      {
        value: "𐰚",
        parent: 5,
        width: 2
      },
      {
        value: "𐰜",
        parent: 5,
        width: 2
      },
      {
        value: "a",
        parent: 5,
        width: 2
      },
      {
        value: "b",
        parent: 5,
        width: 2
      },
      {
        value: "c",
        parent: 5,
        width: 2
      },
      {
        value: "d",
        parent: 5,
        width: 2
      },
      {
        value: "e",
        parent: 5,
        width: 2
      },
      {
        value: "g",
        parent: 5,
        width: 2
      },
      {
        value: "h",
        parent: 5,
        width: 2
      },
      {
        value: "i",
        parent: 5,
        width: 2
      },
      {
        value: "j",
        parent: 5,
        width: 2
      },
      {
        value: "k",
        parent: 5,
        width: 2
      },
      {
        value: "l",
        parent: 5,
        width: 2
      },
      {
        value: "m",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Ogham",
    keys: [
      {
        value: "1",
        parent: 0,
        width: 2
      },
      {
        value: "2",
        parent: 0,
        width: 2
      },
      {
        value: "3",
        parent: 0,
        width: 2
      },
      {
        value: "4",
        parent: 0,
        width: 2
      },
      {
        value: "5",
        parent: 0,
        width: 2
      },
      {
        value: "6",
        parent: 0,
        width: 2
      },
      {
        value: "7",
        parent: 0,
        width: 2
      },
      {
        value: "8",
        parent: 0,
        width: 2
      },
      {
        value: "9",
        parent: 0,
        width: 2
      },
      {
        value: "0",
        parent: 0,
        width: 2
      },
      {
        value: "ᚊ",
        parent: 1,
        width: 2
      },
      {
        value: "ᚍ",
        parent: 1,
        width: 2
      },
      {
        value: "ᚓ",
        parent: 1,
        width: 2
      },
      {
        value: "ᚏ",
        parent: 1,
        width: 2
      },
      {
        value: "ᚈ",
        parent: 1,
        width: 2
      },
      {
        value: "ᚕ",
        parent: 1,
        width: 2
      },
      {
        value: "ᚒ",
        parent: 1,
        width: 2
      },
      {
        value: "ᚔ",
        parent: 1,
        width: 2
      },
      {
        value: "ᚑ",
        parent: 1,
        width: 2
      },
      {
        value: "ᚖ",
        parent: 1,
        width: 2
      },
      {
        value: "ᚐ",
        parent: 2,
        width: 2
      },
      {
        value: "ᚄ",
        parent: 2,
        width: 2
      },
      {
        value: "ᚇ",
        parent: 2,
        width: 2
      },
      {
        value: "ᚃ",
        parent: 2,
        width: 2
      },
      {
        value: "ᚌ",
        parent: 2,
        width: 2
      },
      {
        value: "ᚆ",
        parent: 2,
        width: 2
      },
      {
        value: "ᚗ",
        parent: 2,
        width: 2
      },
      {
        value: "ᚘ",
        parent: 2,
        width: 2
      },
      {
        value: "ᚂ",
        parent: 2,
        width: 2
      },
      {
        value: "ᚎ",
        parent: 3,
        width: 2
      },
      {
        value: "ᚙ",
        parent: 3,
        width: 2
      },
      {
        value: "ᚉ",
        parent: 3,
        width: 2
      },
      {
        value: "ᚁ",
        parent: 3,
        width: 2
      },
      {
        value: "ᚅ",
        parent: 3,
        width: 2
      },
      {
        value: "ᚋ",
        parent: 3,
        width: 2
      },
      {
        value: " ",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "€",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "᚛",
        parent: 5,
        width: 2
      },
      {
        value: "᚜",
        parent: 5,
        width: 2
      },
      {
        value: "a",
        parent: 5,
        width: 2
      },
      {
        value: "b",
        parent: 5,
        width: 2
      },
      {
        value: "c",
        parent: 5,
        width: 2
      },
      {
        value: "d",
        parent: 5,
        width: 2
      },
      {
        value: "e",
        parent: 5,
        width: 2
      },
      {
        value: "f",
        parent: 5,
        width: 2
      },
      {
        value: "g",
        parent: 5,
        width: 2
      },
      {
        value: "h",
        parent: 5,
        width: 2
      },
      {
        value: "i",
        parent: 5,
        width: 2
      },
      {
        value: "j",
        parent: 5,
        width: 2
      },
      {
        value: "k",
        parent: 5,
        width: 2
      },
      {
        value: "l",
        parent: 5,
        width: 2
      },
      {
        value: "m",
        parent: 5,
        width: 2
      },
      {
        value: "n",
        parent: 5,
        width: 2
      },
      {
        value: "o",
        parent: 5,
        width: 2
      },
      {
        value: "p",
        parent: 5,
        width: 2
      },
      {
        value: "q",
        parent: 5,
        width: 2
      },
      {
        value: "r",
        parent: 5,
        width: 2
      },
      {
        value: "s",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Runes (Hungarian)",
    keys: [
      {
        value: "𐳺",
        parent: 0,
        width: 2
      },
      {
        value: "𐳻",
        parent: 0,
        width: 2
      },
      {
        value: "𐳼",
        parent: 0,
        width: 2
      },
      {
        value: "𐳽",
        parent: 0,
        width: 2
      },
      {
        value: "𐳾",
        parent: 0,
        width: 2
      },
      {
        value: "𐳔",
        parent: 1,
        width: 2
      },
      {
        value: "𐳫",
        parent: 1,
        width: 2
      },
      {
        value: "𐳉",
        parent: 1,
        width: 2
      },
      {
        value: "𐳢",
        parent: 1,
        width: 2
      },
      {
        value: "𐳦",
        parent: 1,
        width: 2
      },
      {
        value: "𐳗",
        parent: 1,
        width: 2
      },
      {
        value: "𐳪",
        parent: 1,
        width: 2
      },
      {
        value: "𐳐",
        parent: 1,
        width: 2
      },
      {
        value: "𐳛",
        parent: 1,
        width: 2
      },
      {
        value: "𐳠",
        parent: 1,
        width: 2
      },
      {
        value: "𐳁",
        parent: 1,
        width: 2
      },
      {
        value: "𐳆",
        parent: 1,
        width: 2
      },
      {
        value: "𐳀",
        parent: 2,
        width: 2
      },
      {
        value: "𐳤",
        parent: 2,
        width: 2
      },
      {
        value: "𐳇",
        parent: 2,
        width: 2
      },
      {
        value: "𐳌",
        parent: 2,
        width: 2
      },
      {
        value: "𐳍",
        parent: 2,
        width: 2
      },
      {
        value: "𐳏",
        parent: 2,
        width: 2
      },
      {
        value: "𐳒",
        parent: 2,
        width: 2
      },
      {
        value: "𐳓",
        parent: 2,
        width: 2
      },
      {
        value: "𐳖",
        parent: 2,
        width: 2
      },
      {
        value: "𐳋",
        parent: 2,
        width: 2
      },
      {
        value: "𐳎",
        parent: 2,
        width: 2
      },
      {
        value: "𐳯",
        parent: 3,
        width: 2
      },
      {
        value: "𐳥",
        parent: 3,
        width: 2
      },
      {
        value: "𐳄",
        parent: 3,
        width: 2
      },
      {
        value: "𐳮",
        parent: 3,
        width: 2
      },
      {
        value: "𐳂",
        parent: 3,
        width: 2
      },
      {
        value: "𐳙",
        parent: 3,
        width: 2
      },
      {
        value: "𐳘",
        parent: 3,
        width: 2
      },
      {
        value: "𐳑",
        parent: 3,
        width: 2
      },
      {
        value: "𐳚",
        parent: 3,
        width: 2
      },
      {
        value: "𐳜",
        parent: 3,
        width: 2
      },
      {
        value: ".",
        parent: 4,
        width: 2
      },
      {
        value: "!",
        parent: 4,
        width: 2
      },
      {
        value: "?",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "\"",
        parent: 4,
        width: 2
      },
      {
        value: "'",
        parent: 4,
        width: 2
      },
      {
        value: "(",
        parent: 4,
        width: 2
      },
      {
        value: ")",
        parent: 4,
        width: 2
      },
      {
        value: "[",
        parent: 4,
        width: 2
      },
      {
        value: "]",
        parent: 4,
        width: 2
      },
      {
        value: "{",
        parent: 4,
        width: 2
      },
      {
        value: "}",
        parent: 4,
        width: 2
      },
      {
        value: "<",
        parent: 4,
        width: 2
      },
      {
        value: ">",
        parent: 4,
        width: 2
      },
      {
        value: "+",
        parent: 1,
        width: 2
      },
      {
        value: "-",
        parent: 2,
        width: 2
      },
      {
        value: "=",
        parent: 3,
        width: 2
      },
      {
        value: "@",
        parent: 1,
        width: 2
      },
      {
        value: "#",
        parent: 2,
        width: 2
      },
      {
        value: "€",
        parent: 3,
        width: 2
      },
      {
        value: "%",
        parent: 1,
        width: 2
      },
      {
        value: "^",
        parent: 2,
        width: 2
      },
      {
        value: "&",
        parent: 3,
        width: 2
      },
      {
        value: "*",
        parent: 1,
        width: 2
      },
      {
        value: "~",
        parent: 2,
        width: 2
      },
      {
        value: "`",
        parent: 0,
        width: 2
      },
      {
        value: ",",
        parent: 0,
        width: 2
      },
      {
        value: "/",
        parent: 0,
        width: 2
      },
      {
        value: "\\",
        parent: 0,
        width: 2
      },
      {
        value: ":",
        parent: 0,
        width: 2
      },
      {
        value: ";",
        parent: 0,
        width: 2
      },
      {
        value: "|",
        parent: 0,
        width: 2
      },
      {
        value: "𐳝",
        parent: 5,
        width: 2
      },
      {
        value: "𐳟",
        parent: 5,
        width: 2
      },
      {
        value: "𐳨",
        parent: 5,
        width: 2
      },
      {
        value: "𐳬",
        parent: 5,
        width: 2
      },
      {
        value: "𐳭",
        parent: 5,
        width: 2
      },
      {
        value: "𐳰",
        parent: 5,
        width: 2
      },
      {
        value: "a",
        parent: 5,
        width: 2
      },
      {
        value: "b",
        parent: 5,
        width: 2
      },
      {
        value: "c",
        parent: 5,
        width: 2
      },
      {
        value: "d",
        parent: 5,
        width: 2
      },
      {
        value: "e",
        parent: 5,
        width: 2
      },
      {
        value: "f",
        parent: 5,
        width: 2
      },
      {
        value: "g",
        parent: 5,
        width: 2
      },
      {
        value: "h",
        parent: 5,
        width: 2
      },
      {
        value: "i",
        parent: 5,
        width: 2
      },
      {
        value: "j",
        parent: 5,
        width: 2
      },
      {
        value: "k",
        parent: 5,
        width: 2
      },
      {
        value: "l",
        parent: 5,
        width: 2
      },
      {
        value: "m",
        parent: 5,
        width: 2
      },
      {
        value: "n",
        parent: 5,
        width: 2
      },
      {
        value: "o",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "International Phonetic Alphabet (IPA)",
    keys: [
      {
        value: "ʈ",
        parent: 0,
        width: 2
      },
      {
        value: "ɖ",
        parent: 0,
        width: 2
      },
      {
        value: "ɟ",
        parent: 0,
        width: 2
      },
      {
        value: "ɢ",
        parent: 0,
        width: 2
      },
      {
        value: "ʔ",
        parent: 0,
        width: 2
      },
      {
        value: "ɱ",
        parent: 0,
        width: 2
      },
      {
        value: "ɳ",
        parent: 0,
        width: 2
      },
      {
        value: "ɲ",
        parent: 0,
        width: 2
      },
      {
        value: "ŋ",
        parent: 0,
        width: 2
      },
      {
        value: "ɴ",
        parent: 0,
        width: 2
      },
      {
        value: "ʙ",
        parent: 0,
        width: 2
      },
      {
        value: "ʀ",
        parent: 0,
        width: 2
      },
      {
        value: "ⱱ",
        parent: 0,
        width: 2
      },
      {
        value: "q",
        parent: 1,
        width: 2
      },
      {
        value: "w",
        parent: 1,
        width: 2
      },
      {
        value: "e",
        parent: 1,
        width: 2
      },
      {
        value: "r",
        parent: 1,
        width: 2
      },
      {
        value: "t",
        parent: 1,
        width: 2
      },
      {
        value: "y",
        parent: 1,
        width: 2
      },
      {
        value: "u",
        parent: 1,
        width: 2
      },
      {
        value: "i",
        parent: 1,
        width: 2
      },
      {
        value: "o",
        parent: 1,
        width: 2
      },
      {
        value: "p",
        parent: 1,
        width: 2
      },
      {
        value: "ɾ",
        parent: 1,
        width: 2
      },
      {
        value: "ɽ",
        parent: 1,
        width: 2
      },
      {
        value: "ɸ",
        parent: 1,
        width: 2
      },
      {
        value: "a",
        parent: 2,
        width: 2
      },
      {
        value: "s",
        parent: 2,
        width: 2
      },
      {
        value: "d",
        parent: 2,
        width: 2
      },
      {
        value: "f",
        parent: 2,
        width: 2
      },
      {
        value: "g",
        parent: 2,
        width: 2
      },
      {
        value: "h",
        parent: 2,
        width: 2
      },
      {
        value: "j",
        parent: 2,
        width: 2
      },
      {
        value: "k",
        parent: 2,
        width: 2
      },
      {
        value: "l",
        parent: 2,
        width: 2
      },
      {
        value: "β",
        parent: 2,
        width: 2
      },
      {
        value: "θ",
        parent: 2,
        width: 2
      },
      {
        value: "ð",
        parent: 2,
        width: 2
      },
      {
        value: "z",
        parent: 3,
        width: 2
      },
      {
        value: "x",
        parent: 3,
        width: 2
      },
      {
        value: "c",
        parent: 3,
        width: 2
      },
      {
        value: "v",
        parent: 3,
        width: 2
      },
      {
        value: "b",
        parent: 3,
        width: 2
      },
      {
        value: "n",
        parent: 3,
        width: 2
      },
      {
        value: "m",
        parent: 3,
        width: 2
      },
      {
        value: "ʃ",
        parent: 3,
        width: 2
      },
      {
        value: "ʒ",
        parent: 3,
        width: 2
      },
      {
        value: "ʂ",
        parent: 3,
        width: 2
      },
      {
        value: "ʐ",
        parent: 3,
        width: 2
      },
      {
        value: "ç",
        parent: 3,
        width: 2
      },
      {
        value: "ʝ",
        parent: 4,
        width: 2
      },
      {
        value: "ɣ",
        parent: 4,
        width: 2
      },
      {
        value: "χ",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "ʁ",
        parent: 4,
        width: 2
      },
      {
        value: "ħ",
        parent: 4,
        width: 2
      },
      {
        value: "ʕ",
        parent: 4,
        width: 2
      },
      {
        value: "ɦ",
        parent: 4,
        width: 2
      },
      {
        value: "ɬ",
        parent: 4,
        width: 2
      },
      {
        value: "ɮ",
        parent: 4,
        width: 2
      },
      {
        value: "ʋ",
        parent: 4,
        width: 2
      },
      {
        value: "ɹ",
        parent: 4,
        width: 2
      },
      {
        value: "ɻ",
        parent: 4,
        width: 2
      },
      {
        value: "ɰ",
        parent: 4,
        width: 2
      },
      {
        value: "ɭ",
        parent: 1,
        width: 2
      },
      {
        value: "ʎ",
        parent: 2,
        width: 2
      },
      {
        value: "ʟ",
        parent: 3,
        width: 2
      },
      {
        value: "ɨ",
        parent: 1,
        width: 2
      },
      {
        value: "ʉ",
        parent: 2,
        width: 2
      },
      {
        value: "ɯ",
        parent: 3,
        width: 2
      },
      {
        value: "ɪ",
        parent: 1,
        width: 2
      },
      {
        value: "ʏ",
        parent: 2,
        width: 2
      },
      {
        value: "ʊ",
        parent: 3,
        width: 2
      },
      {
        value: "ø",
        parent: 1,
        width: 2
      },
      {
        value: "ə",
        parent: 2,
        width: 2
      },
      {
        value: "ɤ",
        parent: 0,
        width: 2
      },
      {
        value: "ɛ",
        parent: 0,
        width: 2
      },
      {
        value: "œ",
        parent: 0,
        width: 2
      },
      {
        value: "ɜ",
        parent: 0,
        width: 2
      },
      {
        value: "ɞ",
        parent: 0,
        width: 2
      },
      {
        value: "ʌ",
        parent: 0,
        width: 2
      },
      {
        value: "ɔ",
        parent: 0,
        width: 2
      },
      {
        value: "æ",
        parent: 5,
        width: 2
      },
      {
        value: "ɐ",
        parent: 5,
        width: 2
      },
      {
        value: "ɶ",
        parent: 5,
        width: 2
      },
      {
        value: "ɑ",
        parent: 5,
        width: 2
      },
      {
        value: "ɒ",
        parent: 5,
        width: 2
      },
      {
        value: "ː",
        parent: 5,
        width: 2
      },
      {
        value: "ʼ",
        parent: 5,
        width: 2
      },
      {
        value: "ʴ",
        parent: 5,
        width: 2
      },
      {
        value: "ʰ",
        parent: 5,
        width: 2
      },
      {
        value: "ʲ",
        parent: 5,
        width: 2
      },
      {
        value: "ʷ",
        parent: 5,
        width: 2
      },
      {
        value: "ˠ",
        parent: 5,
        width: 2
      },
      {
        value: "ˤ",
        parent: 5,
        width: 2
      },
      {
        value: "ˈ",
        parent: 5,
        width: 2
      },
      {
        value: "ˌ",
        parent: 5,
        width: 2
      },
      {
        value: "˞",
        parent: 5,
        width: 2
      },
      {
        value: "̃",
        parent: 5,
        width: 2
      },
      {
        value: "̊",
        parent: 5,
        width: 2
      },
      {
        value: "̆",
        parent: 5,
        width: 2
      },
      {
        value: "̈",
        parent: 5,
        width: 2
      },
      {
        value: "̪",
        parent: 5,
        width: 2
      },
      {
        value: "∅",
        parent: 5,
        width: 2
      }
    ]
  },
  {
    name: "Emoji",
    keys: [
      {
        value: "😐",
        parent: 0,
        width: 2
      },
      {
        value: "🙂",
        parent: 0,
        width: 2
      },
      {
        value: "☺️",
        parent: 0,
        width: 2
      },
      {
        value: "😀",
        parent: 0,
        width: 2
      },
      {
        value: "😁",
        parent: 0,
        width: 2
      },
      {
        value: "😢",
        parent: 0,
        width: 2
      },
      {
        value: "😭",
        parent: 0,
        width: 2
      },
      {
        value: "😥",
        parent: 0,
        width: 2
      },
      {
        value: "🥺",
        parent: 0,
        width: 2
      },
      {
        value: "😠",
        parent: 0,
        width: 2
      },
      {
        value: "😡",
        parent: 1,
        width: 2
      },
      {
        value: "🤬",
        parent: 1,
        width: 2
      },
      {
        value: "😧",
        parent: 1,
        width: 2
      },
      {
        value: "😨",
        parent: 1,
        width: 2
      },
      {
        value: "😰",
        parent: 1,
        width: 2
      },
      {
        value: "🫥",
        parent: 1,
        width: 2
      },
      {
        value: "🤐",
        parent: 1,
        width: 2
      },
      {
        value: "🥵",
        parent: 1,
        width: 2
      },
      {
        value: "🥶",
        parent: 1,
        width: 2
      },
      {
        value: "🥱",
        parent: 1,
        width: 2
      },
      {
        value: "👋",
        parent: 2,
        width: 2
      },
      {
        value: "🤚",
        parent: 2,
        width: 2
      },
      {
        value: "🖐️",
        parent: 2,
        width: 2
      },
      {
        value: "✋",
        parent: 2,
        width: 2
      },
      {
        value: "🫱",
        parent: 2,
        width: 2
      },
      {
        value: "🫲",
        parent: 2,
        width: 2
      },
      {
        value: "🫳",
        parent: 2,
        width: 2
      },
      {
        value: "🫴",
        parent: 2,
        width: 2
      },
      {
        value: "🤌",
        parent: 2,
        width: 2
      },
      {
        value: "🐕",
        parent: 3,
        width: 2
      },
      {
        value: "🐈",
        parent: 3,
        width: 2
      },
      {
        value: "🐓",
        parent: 3,
        width: 2
      },
      {
        value: "🐄",
        parent: 3,
        width: 2
      },
      {
        value: "🐑",
        parent: 3,
        width: 2
      },
      {
        value: "🐐",
        parent: 3,
        width: 2
      },
      {
        value: "🐎",
        parent: 3,
        width: 2
      },
      {
        value: "🫏",
        parent: 3,
        width: 2
      },
      {
        value: "🐪",
        parent: 3,
        width: 2
      },
      {
        value: "🦁",
        parent: 3,
        width: 2
      },
      {
        value: "🐅",
        parent: 4,
        width: 2
      },
      {
        value: "🐒",
        parent: 4,
        width: 2
      },
      {
        value: "🐘",
        parent: 4,
        width: 2
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "< Backspace",
        fun: function (str) {
          return str.substring(0, str.length - 1);
        }
      },
      {
        value: null,
        parent: 4,
        width: 5,
        content: "Enter V",
        fun: function (str) {
          return str + "\n";
        }
      },
      {
        value: null,
        parent: 4,
        width: 6,
        content: "",
        fun: function (str) {
          return str + " ";
        }
      },
      {
        value: "🦒",
        parent: 4,
        width: 2
      },
      {
        value: "🦓",
        parent: 4,
        width: 2
      },
      {
        value: "🦛",
        parent: 4,
        width: 2
      },
      {
        value: "🦏",
        parent: 4,
        width: 2
      },
      {
        value: "🦌",
        parent: 4,
        width: 2
      },
      {
        value: "🐺",
        parent: 4,
        width: 2
      },
      {
        value: "🐻",
        parent: 4,
        width: 2
      },
      {
        value: "🦊",
        parent: 4,
        width: 2
      },
      {
        value: "🦝",
        parent: 4,
        width: 2
      },
      {
        value: "🐆",
        parent: 4,
        width: 2
      },
      {
        value: "🦬",
        parent: 1,
        width: 2
      },
      {
        value: "🐍",
        parent: 2,
        width: 2
      },
      {
        value: "🐢",
        parent: 3,
        width: 2
      },
      {
        value: "🦎",
        parent: 1,
        width: 2
      },
      {
        value: "🐊",
        parent: 2,
        width: 2
      },
      {
        value: "🐸",
        parent: 3,
        width: 2
      },
      {
        value: "🐁",
        parent: 1,
        width: 2
      },
      {
        value: "🦅",
        parent: 2,
        width: 2
      },
      {
        value: "🦃",
        parent: 3,
        width: 2
      },
      {
        value: "🦆",
        parent: 1,
        width: 2
      },
      {
        value: "🦉",
        parent: 2,
        width: 2
      },
      {
        value: "🦢",
        parent: 0,
        width: 2
      },
      {
        value: "🐟",
        parent: 0,
        width: 2
      },
      {
        value: "🐠",
        parent: 0,
        width: 2
      },
      {
        value: "🦈",
        parent: 0,
        width: 2
      },
      {
        value: "🐙",
        parent: 0,
        width: 2
      },
      {
        value: "🐜",
        parent: 0,
        width: 2
      },
      {
        value: "🦗",
        parent: 0,
        width: 2
      },
      {
        value: "✝️",
        parent: 5,
        width: 2
      },
      {
        value: "🇺🇸",
        parent: 5,
        width: 2
      },
      {
        value: "🇨🇦",
        parent: 5,
        width: 2
      },
      {
        value: "🇲🇽",
        parent: 5,
        width: 2
      },
      {
        value: "🇧🇷",
        parent: 5,
        width: 2
      },
      {
        value: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        parent: 5,
        width: 2
      },
      {
        value: "🇫🇷",
        parent: 5,
        width: 2
      },
      {
        value: "🇮🇹",
        parent: 5,
        width: 2
      },
      {
        value: "🇩🇪",
        parent: 5,
        width: 2
      },
      {
        value: "🇵🇱",
        parent: 5,
        width: 2
      },
      {
        value: "🇷🇺",
        parent: 5,
        width: 2
      },
      {
        value: "🇨🇳",
        parent: 5,
        width: 2
      },
      {
        value: "🇯🇵",
        parent: 5,
        width: 2
      },
      {
        value: "🇮🇳",
        parent: 5,
        width: 2
      },
      {
        value: "🇮🇩",
        parent: 5,
        width: 2
      },
      {
        value: "🇪🇬",
        parent: 5,
        width: 2
      },
      {
        value: "🇦🇺",
        parent: 5,
        width: 2
      },
      {
        value: "🇬🇷",
        parent: 5,
        width: 2
      },
      {
        value: "🇰🇷",
        parent: 5,
        width: 2
      },
      {
        value: "🇿🇦",
        parent: 5,
        width: 2
      },
      {
        value: "🇨🇺",
        parent: 5,
        width: 2
      }
    ]
  }
];
let letterCase = false;
let version = 2.4;
let codeWithTlektuE = false;
let emotion = "icon";
let decision;
let loggedIn = false;
let codeConcepts = ["the html doctype decleration tag", "the html tag", "the head tag in html", "the body tag in html", "the title tag in html", "the h1 tag in html", "the p tag in html", "the div tag in html", "the img tag in html", "the a tag in html"];
let resources = [
  {
    name: "Tletku",
    src: "images/icon.png",
    type: "img"
  },
  {
    name: "Happy Tletku",
    src: "images/happyTletku.png",
    type: "img"
  },
  {
    name: "Very Happy Tletku",
    src: "images/veryHappyTletku.png",
    type: "img"
  },
  {
    name: "Sad Tletku",
    src: "images/sadTletku.png",
    type: "img"
  },
  {
    name: "Mad Tletku",
    src: "images/madTletku.png",
    type: "img"
  },
  {
    name: "Bored Tletku",
    src: "images/boredTletku.png",
    type: "img"
  },
  {
    name: "Suspicious Tletku",
    src: "images/susTletku.png",
    type: "img"
  },
  {
    name: "Confused Tletku",
    src: "images/confusedTletku.png",
    type: "img"
  },
  {
    name: "Sleeping Tletku",
    src: "images/sleepTletku.png",
    type: "img"
  },
  {
    name: "Suprised Tletku",
    src: "images/surprizedTletku.png",
    type: "img"
  },
  {
    name: "King Tletku",
    src: "images/kingTletku.png",
    type: "img"
  },
  {
    name: "Old Tletku",
    src: "images/oldTletku.png",
    type: "img"
  },
  {
    name: "Ofekal Naudnik",
    src: "images/wallpaper.png",
    type: "img"
  },
  {
    name: "Forest Background",
    src: "images/wallpaper2.jpg",
    type: "img"
  },
  {
    name: "Desert Background",
    src: "images/wallpaper3.jpg",
    type: "img"
  },
  {
    name: "Tundra Background",
    src: "images/wallpaper4.jpg",
    type: "img"
  },
  {
    name: "Mountain Background",
    src: "images/wallpaper5.jpg",
    type: "img"
  },
  {
    name: "Tropical Background",
    src: "images/wallpaper6.jpg",
    type: "img"
  },
  {
    name: "City Background",
    src: "images/wallpaper7.jpg",
    type: "img"
  },
  {
    name: "Space Background",
    src: "images/wallpaper8.jpg",
    type: "img"
  },
  {
    name: "Grasshopper Background",
    src: "images/wallpaper9.jpg",
    type: "img"
  },
  {
    name: "Mountain Background 2",
    src: "images/wallpaper10.png",
    type: "img"
  },
  {
    name: "Tropical Background 2",
    src: "images/wallpaper11.heic",
    type: "img"
  },
  {
    name: "Harbour Background",
    src: "images/wallpaper12.jpg",
    type: "img"
  },
  {
    name: "Clear Sky",
    src: "images/resources/clearSky.png",
    type: "img"
  },
  {
    name: "Cloudy Sky",
    src: "images/resources/cloudySky.png",
    type: "img"
  },
  {
    name: "Night Sky",
    src: "images/resources/nightSky.png",
    type: "img"
  },
  {
    name: "Night Sky 2",
    src: "images/resources/nightSkyWithCrecentMoon.png",
    type: "img"
  },
  {
    name: "Sunset",
    src: "images/resources/sunset.png",
    type: "img"
  },
  {
    name: "British Sky",
    src: "images/resources/britishSky.png",
    type: "img"
  },
  {
    name: "Grey Sky",
    src: "images/resources/greySky.png",
    type: "img"
  },
  {
    name: "Mountains Background",
    src: "images/resources/mountainsBackground.png",
    type: "img"
  },
  {
    name: "Grass - Side view",
    src: "images/resources/grassBlock.png",
    type: "img"
  },
  {
    name: "Grass - Top view",
    src: "images/resources/topGrassBlock.png",
    type: "img"
  },
  {
    name: "Dirt",
    src: "images/resources/dirtBlock.png",
    type: "img"
  },
  {
    name: "Sand",
    src: "images/resources/sand.png",
    type: "img"
  },
  {
    name: "Snow - Side view",
    src: "images/resources/snow.png",
    type: "img"
  },
  {
    name: "Snow - Top view",
    src: "images/resources/topSnow.png",
    type: "img"
  },
  {
    name: "Dead Grass - Side view",
    src: "images/resources/deadGrass.png",
    type: "img"
  },
  {
    name: "Dead Grass - Top View",
    src: "images/resources/topDeadGrass.png",
    type: "img"
  },
  {
    name: "Cactus 1",
    src: "images/resources/cactus1.png",
    type: "img"
  },
  {
    name: "Cactus 2",
    src: "images/resources/cactus2.png",
    type: "img"
  },
  {
    name: "Cactus 3",
    src: "images/resources/cactus3.png",
    type: "img"
  },
  {
    name: "Oak Tree 1",
    src: "images/resources/oakTree1.png",
    type: "img"
  },
  {
    name: "Oak Tree 2",
    src: "images/resources/oakTree2.png",
    type: "img"
  },
  {
    name: "Pine Tree 1",
    src: "images/resources/pineTree1.png",
    type: "img"
  },
  {
    name: "Pine Tree 2",
    src: "images/resources/pineTree2.png",
    type: "img"
  },
  {
    name: "Rainforest Tree 1",
    src: "images/resources/rainforestTree1.png",
    type: "img"
  },
  {
    name: "Rainforest Tree 2",
    src: "images/resources/rainforestTree2.png",
    type: "img"
  },
  {
    name: "Water",
    src: "images/resources/water.gif",
    type: "img"
  },
  {
    name: "Palm Tree 1",
    src: "images/resources/palmTree1.png",
    type: "img"
  },
  {
    name: "Palm Tree 2",
    src: "images/resources/palmTree2.png",
    type: "img"
  },
  {
    name: "Cherry Tree 1",
    src: "images/resources/cherryTree1.png",
    type: "img"
  },
  {
    name: "Cherry Tree 2",
    src: "images/resources/cherryTree2.png",
    type: "img"
  },
  {
    name: "Dead Tree 1",
    src: "images/resources/deadTree1.png",
    type: "img"
  },
  {
    name: "Dead Tree 2",
    src: "images/resources/deadTree2.png",
    type: "img"
  },
  {
    name: "Soldier",
    src: "images/resources/soldier.gif",
    type: "img"
  },
  {
    name: "Walking Soldier",
    src: "images/resources/walkingSoldier.gif",
    type: "img"
  },
  {
    name: "Soldier with Gun",
    src: "images/resources/soldierWithGun.png",
    type: "img"
  },
  {
    name: "Walking Soldier with Gun",
    src: "images/resources/walkingSoldierWithGun.gif",
    type: "img"
  },
  {
    name: "Crouching Soldier",
    src: "images/resources/crouchingSoldier.png",
    type: "img"
  },
  {
    name: "Crouching Soldier with Gun",
    src: "images/resources/crouchingSoldierWithGun.png",
    type: "img"
  },
  {
    name: "Superhero",
    src: "images/resources/superhero.gif",
    type: "img"
  },
  {
    name: "Walking Superhero",
    src: "images/resources/walkingSuperhero.gif",
    type: "img"
  },
  {
    name: "Flying Superhero",
    src: "images/resources/flyingSuperhero.gif",
    type: "img"
  },
  {
    name: "Pirate",
    src: "images/resources/pirate.gif",
    type: "img"
  },
  {
    name: "Walking Pirate",
    src: "images/resources/walkingPirate.gif",
    type: "img"
  },
  {
    name: "Pirate with Flintlock",
    src: "images/resources/pirateWithFlintlock.png",
    type: "img"
  },
  {
    name: "Walking Pirate with Flintlock",
    src: "images/resources/walkingPirateWithFlintlock.gif",
    type: "img"
  },
  {
    name: "Cowboy",
    src: "images/resources/cowboy.gif",
    type: "img"
  },
  {
    name: "Walking Cowboy",
    src: "images/resources/walkingCowboy.gif",
    type: "img"
  },
  {
    name: "Cowboy Picking up Revolver",
    src: "images/resources/cowboyPickingUpRevolver.gif",
    type: "img"
  },
  {
    name: "Cowboy with Revolver",
    src: "images/resources/cowboyWithRevolver.png",
    type: "img"
  },
  {
    name: "Walking Cowboy with Revolver",
    src: "images/resources/walkingCowboyWithRevolver.gif",
    type: "img"
  },
  {
    name: "Indian",
    src: "images/resources/indian.gif",
    type: "img"
  },
  {
    name: "Walking Indian",
    src: "images/resources/walkingIndian.gif",
    type: "img"
  },
  {
    name: "Indian picking up bow",
    src: "images/resources/indianPickUpBow.gif",
    type: "img"
  },
  {
    name: "Indian with bow",
    src: "images/resources/indianWithBow.png",
    type: "img"
  },
  {
    name: "Walking Indian with bow",
    src: "images/resources/indianWalkingWithBow.gif",
    type: "img"
  },
  {
    name: "Ninja",
    src: "images/resources/ninja.gif",
    type: "img"
  },
  {
    name: "Walking Ninja",
    src: "images/resources/walkingNinja.gif",
    type: "img"
  },
  {
    name: "Ninja pulling out Katana",
    src: "images/resources/ninjaPickUpKatana.gif",
    type: "img"
  },
  {
    name: "Ninja slicing with Katana",
    src: "images/resources/ninjaSwingingKatana.gif",
    type: "img"
  },
  {
    name: "Ninja walking with Katana",
    src: "images/resources/walkingNinjaWithKatana.gif",
    type: "img"
  },
  {
    name: "Ninja throwing something (E.G. a shurieken)",
    src: "images/resources/ninjaThrowingSomething.gif",
    type: "img"
  },
  {
    name: "Crusader",
    src: "images/resources/knight.gif",
    type: "img"
  },
  {
    name: "Walking Crusader",
    src: "images/resources/walkingKnight.gif",
    type: "img"
  },
  {
    name: "Crusader slicing with Sword",
    src: "images/resources/knightSwingingSword.gif",
    type: "img"
  },
  {
    name: "Arab",
    src: "images/resources/arab.gif",
    type: "img"
  },
  {
    name: "Walking Arab",
    src: "images/resources/walkingArab.gif",
    type: "img"
  },
  {
    name: "Arab slicing with sword",
    src: "images/resources/arabSwingingSword.gif",
    type: "img"
  },
  {
    name: "Redcoat",
    src: "images/resources/redcoat.gif",
    type: "img"
  },
  {
    name: "Walking Redcoat",
    src: "images/resources/walkingRedcoat.gif",
    type: "img"
  },
  {
    name: "Redcoat with Musket",
    src: "images/resources/redcoatWithMusket.png",
    type: "img"
  },
  {
    name: "Walking Redcoat with Musket",
    src: "images/resources/walkingRedcoatWithMusket.gif",
    type: "img"
  },
  {
    name: "Bluecoat",
    src: "images/resources/bluecoat.gif",
    type: "img"
  },
  {
    name: "Walking Bluecoat",
    src: "images/resources/walkingBluecoat.gif",
    type: "img"
  },
  {
    name: "Bluecoat with Musket",
    src: "images/resources/bluecoatWithMusket.png",
    type: "img"
  },
  {
    name: "Walking Bluecoat with Musket",
    src: "images/resources/walkingBluecoatWithMusket.gif",
    type: "img"
  },
  {
    name: "Navycoat",
    src: "images/resources/navycoat.gif",
    type: "img"
  },
  {
    name: "Walking Navycoat",
    src: "images/resources/walkingNavycoat.gif",
    type: "img"
  },
  {
    name: "Navycoat with Musket",
    src: "images/resources/navycoatWithMusket.png",
    type: "img"
  },
  {
    name: "Walking Navycoat with Musket",
    src: "images/resources/walkingNavycoatWithMusket.gif",
    type: "img"
  },
  {
    name: "Greencoat",
    src: "images/resources/greencoat.gif",
    type: "img"
  },
  {
    name: "Walking Greencoat",
    src: "images/resources/walkingGreencoat.gif",
    type: "img"
  },
  {
    name: "Greencoat with Musket",
    src: "images/resources/greencoatWithMusket.png",
    type: "img"
  },
  {
    name: "Walking Greencoat with Musket",
    src: "images/resources/walkingGreencoatWithMusket.gif",
    type: "img"
  },
  {
    name: "Yellowcoat",
    src: "images/resources/yellowcoat.gif",
    type: "img"
  },
  {
    name: "Walking Yellowcoat",
    src: "images/resources/walkingYellowcoat.gif",
    type: "img"
  },
  {
    name: "Yellowcoat with Musket",
    src: "images/resources/yellowcoatWithMusket.png",
    type: "img"
  },
  {
    name: "Walking Yellowcoat with Musket",
    src: "images/resources/walkingYellowcoatWithMusket.gif",
    type: "img"
  }
];
let tabs = [];
let tabIndex = 0;
let joinbar = false;
let bsodLS = "desktop";
let bsodO;
const aukaContentEl = document.getElementById("aukaContent");
const volumeEl = document.getElementById("volume");
const lockClockContainerEl = document.getElementById("lockClockContainer");
const lockClockEl = document.getElementById("lockClock");
const lockscreenStageOneEl = document.getElementById("lockscreenStageOne");
const lockscreenStageTwoEl = document.getElementById("lockscreenStageTwo");
const lockPowerOffOptionsEl = document.getElementById("lockPowerOffOptions");
const startupScreenEl = document.getElementById("startupScreen");
const lockPowerOffEl = document.getElementById("lockPowerOff");
const thumbEl = document.getElementById("thumb");
const sliderBarEl = document.getElementById("sliderBar");
const desktopEl = document.getElementById("desktop");
const taskbarEl = document.getElementsByTagName("nav")[0];
const startBtnEl = document.getElementById("startBtn");
const clockEl = document.getElementById("clock");
const percentageEl = document.getElementById("percentage");
const audioEls = document.getElementsByTagName("audio");
const volumeContainerEl = document.getElementById("volumeContainer");
const selectionEl = document.getElementById("selection");
const startMenuEl = document.getElementById("startMenu");
const powerOffOptionsEl = document.getElementById("powerOffOptions");
const searchBarEl = document.getElementById("searchBar");
const applicationsEl = document.getElementById("applications");
const prismEl = document.getElementById("prism");
const prismBarEl = document.getElementById("prismBar");
const prismTaskEl = document.getElementById("prismTask");
const todaysGraphicEl = document.getElementById("todaysGraphic");
const greetingEl = document.getElementById("greeting");
const weatherEl = document.getElementById("weather");
const weatherDescEl = document.getElementById("weatherDesc");
const weatherPopupEl = document.getElementById("weatherPopup");
const locationInput = document.getElementById('locationInput');
const apiKey = '449d040309a36fb44247c89751dda08f';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const enableWeatherBtnEl = document.getElementById("enableWeatherBtn");
const locationOkEl = document.getElementById("locationOk");
const weatherGraphicEl = document.getElementById("weatherGraphic");
const temperatureEl = document.getElementById("temperature");
const prismContentEl = document.getElementById("prismContent");
const verseEl = document.getElementById("verse");
const verseSourceEl = document.getElementById("verseSource");
const helpBarEl = document.getElementById("helpBar");
const helpHeadingEl = document.getElementById("helpHeading");
const helpDescEl = document.getElementById("helpDesc");
const speechBubbleEl = document.getElementById("speechBubble");
const tletkuMessageEl = document.getElementById("tletkuMessage");
const tletkuGreetingEl = document.getElementById("tletkuGreeting");
const codeWithMeIconEl = document.getElementById("codeWithMeIcon");
const newFolderNameContainerEl = document.getElementById("newFolderNameContainer");
const newFolderNameEl = document.getElementById("newFolderName");
const folderWinEl = document.getElementById("folderWin");
const folderBarEl = document.getElementById("folderBar");
const storageTaskEl = document.getElementById("storageTask");
const winFolderNameEl = document.getElementById("winFolderName");
const deleteFolderPopupEl = document.getElementById("deleteFolderPopup");
const renameFolderPopupEl = document.getElementById("renameFolderPopup");
const newFolderNameInputEl = document.getElementById("newFolderNameInput");
const newDirectoryPopupEl = document.getElementById("newDirectoryPopup");
const newDirectoryNameInputEl = document.getElementById("newDirectoryNameInput");
const folderContentVekEl = document.getElementById("folderContentVek");
const goToParentDirBtnEl = document.getElementById("goToParentDirBtn");
const setupEl = document.getElementById("setup");
const setupBarEl = document.getElementById("setupBar");
const setupTaskEl = document.getElementById("setupTask");
const ssOneEl = document.getElementById("ssOne");
const ssTwoEl = document.getElementById("ssTwo");
const setupLocationEl = document.getElementById("setupLocation");
const ssThreeEl = document.getElementById("ssThree");
const ssFourEl = document.getElementById("ssFour");
const setupHotspotsEl = document.getElementById("setupHotspots");
const wifiPasswordPopupEl = document.getElementById("wifiPasswordPopup");
const clipboardEl = document.getElementById("clipboard");
const wifiPasswordInputEl = document.getElementById("wifiPasswordInput");
const wifiIncorrectPasswordEl = document.getElementById("wifiIncorrectPassword");
const internetEl = document.getElementById("internet");
const ssFiveEl = document.getElementById("ssFive");
const setupUsernameInputEl = document.getElementById("setupUsernameInput");
const usernameEl = document.getElementById("username");
const ssSixEl = document.getElementById("ssSix");
const setupPasswordInputEl = document.getElementById("setupPasswordInput");
const lockRequirementEl = document.getElementById("lockRequirement");
const passwordBarEl = document.getElementById("passwordBar");
const passwordEl = document.getElementById("password");
const lockBlockEl = document.getElementById("lockBlock");
const ssSevenEl = document.getElementById("ssSeven");
const ssEightEl = document.getElementById("ssEight");
const ioMailContentEl = document.getElementById("ioMailContent");
const ioMailEl = document.getElementById("ioMail");
const ioMailBarEl = document.getElementById("ioMailBar");
const ioMailTaskEl = document.getElementById("ioMailTask");
const calculatorEl = document.getElementById("calculator");
const calculatorBarEl = document.getElementById("calculatorBar");
const calculatorTaskEl = document.getElementById("calculatorTask");
const mathEl = document.getElementById("math");
const historyEl = document.getElementById("history");
const historyVekEl = document.getElementById("historyVek");
const clockAppEl = document.getElementById("clockApp");
const clockBarEl = document.getElementById("clockBar");
const clockTaskEl = document.getElementById("clockTask");
const clockHomeEl = document.getElementById("clockHome");
const detailedClockEl = document.getElementById("detailedClock");
const hourHand = document.getElementsByClassName("hour-hand");
const minuteHand = document.getElementsByClassName("minute-hand");
const secondHand = document.getElementsByClassName("second-hand");
const clockWidgetEl = document.getElementById("clockWidget");
const toggleClockWidgetBtnEl = document.getElementById("toggleClockWidgetBtn");
const clockTimerEl = document.getElementById("clockTimer");
const newTimerPopupEl = document.getElementById("newTimerPopup");
const newTimerHoursEl = document.getElementById("newTimerHours");
const newTimerMinutesEl = document.getElementById("newTimerMinutes");
const newTimerSecondsEl = document.getElementById("newTimerSeconds");
const timerContainerEl = document.getElementById("timerContainer");
const clockStopwatchEl = document.getElementById("clockStopwatch");
const clockAlarmEl = document.getElementById("clockAlarm");
const stopwatchEl = document.getElementById("stopwatch");
const startStopwatchBtnEl = document.getElementById("startStopwatchBtn");
const lapContainerEl = document.getElementById("lapContainer");
const newAlarmPopupEl = document.getElementById("newAlarmPopup");
const newAlarmHourEl = document.getElementById("newAlarmHour");
const newAlarmMinuteEl = document.getElementById("newAlarmMinute");
const newAlarmAMPMEl = document.getElementById("newAlarmAMPM");
const alarmContainerEl = document.getElementById("alarmContainer");
const alarmTextInputEl = document.getElementById("alarmTextInput");
const settingsEl = document.getElementById("settings");
const settingsBarEl = document.getElementById("settingsBar");
const settingsTaskEl = document.getElementById("settingsTask");
const settingsHomeEl = document.getElementById("settingsHome");
const settingsNetworkAndInternetEl = document.getElementById("settingsNetworkAndInternet");
const wifiListEl = document.getElementById("wifiList");
const weatherNoInternetScreenEl = document.getElementById("weatherNoInternetScreen");
const settingsStorageEl = document.getElementById("settingsStorage");
const storageEl = document.getElementById("storage");
const usedStorageEl = document.getElementById("usedStorage");
const settingsStorageDetailsEl = document.getElementById("settingsStorageDetails");
const baseOSUsageEl = document.getElementById("baseOSUsage");
const appUsageEl = document.getElementById("appUsage");
const fileUsageEl = document.getElementById("fileUsage");
const junkUsageEl = document.getElementById("junkUsage");
const usedStorageStatEl = document.getElementById("usedStorageStat");
const remainingStorageStatEl = document.getElementById("remainingStorageStat");
const osUsageStatEl = document.getElementById("osUsageStat");
const appUsageStatEl = document.getElementById("appUsageStat");
const fileUsageStatEl = document.getElementById("fileUsageStat");
const junkUsageStatEl = document.getElementById("junkUsageStat");
const settingsPersonalizationEl = document.getElementById("settingsPersonalization");
const wallpaperPreviewEl = document.getElementById("wallpaperPreview");
const setupWABEl = document.getElementById("setupWAB");
const calculatorWABEl = document.getElementById("calculatorWAB");
const folderGraphicPreviewEl = document.getElementById("folderGraphicPreview");
const settingsAccessibilityEl = document.getElementById("settingsAccessibility");
const settingsAdminSettingsEl = document.getElementById("settingsAdminSettings");
const themeContainerEl = document.getElementById("themeContainer");
const textSizeEl = document.getElementById("textSize");
const adminSettingsPopupEl = document.getElementById("adminSettingsPopup");
const asIncorrectPasswordEl = document.getElementById("asIncorrectPassword");
const adminSettingsInputEl = document.getElementById("adminSettingsInput");
const usernameInputEl = document.getElementById("usernameInput");
const passwordInputEl = document.getElementById("passwordInput");
const profileEl = document.getElementById("profile");
const profilePreviewEl = document.getElementById("profilePreview");
const lockProfileEl = document.getElementById("lockProfile");
const factoryResetPopupEl = document.getElementById("factoryResetPopup");
const factoryResetInputEl = document.getElementById("factoryResetInput");
const frIncorrectPasswordEl = document.getElementById("frIncorrectPassword");
const renameFolderBtnEl = document.getElementById("renameFolderBtn");
const deleteFolderBtnEl = document.getElementById("deleteFolderBtn");
const notepadEl = document.getElementById("notepad");
const notepadBarEl = document.getElementById("notepadBar");
const notepadTaskEl = document.getElementById("notepadTask");
const notificationHistoryEl = document.getElementById("notificationHistory");
const notepadContentVekEl = document.getElementById("notepadContentVek");
const newDocumentPopupEl = document.getElementById("newDocumentPopup");
const saveDocumentPopupEl = document.getElementById("saveDocumentPopup");
const notepadSaveLocationsEl = document.getElementById("notepadSaveLocations");
const newDocumentNameInputEl = document.getElementById("newDocumentNameInput");
const newDocumentFileExtensionEl = document.getElementById("newDocumentFileExtension");
const noteNameEl = document.getElementById("noteName");
const prismRenderingEl = document.getElementById("prismRendering");
const openDocumentPopupEl = document.getElementById("openDocumentPopup");
const notepadOpenLocationsEl = document.getElementById("notepadOpenLocations");
const deleteDocumentPopupEl = document.getElementById("deleteDocumentPopup");
const saveDocumentBtnEl = document.getElementById("saveDocumentBtn");
// const myComputerDirEl = document.getElementById("5");
const paintEl = document.getElementById("paint");
const paintBarEl = document.getElementById("paintBar");
const paintTaskEl = document.getElementById("paintTask");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const propertiesPopupEl = document.getElementById("propertiesPopup");
const canvasWidthEl = document.getElementById("canvasWidth");
const canvasHeightEl = document.getElementById("canvasHeight");
const offCanvasEl = document.getElementById("offCanvas");
const offCTX = offCanvasEl.getContext("2d");
const paintColorIconEl = document.getElementById("paintColorIcon");
const colorPopupEl = document.getElementById("colorPopup");
const colorListEl = document.getElementById("colorList");
const colorPreviewEl = document.getElementById("colorPreview");
const newColorPopupEl = document.getElementById("newColorPopup");
const newColorPreviewEl = document.getElementById("newColorPreview");
const newColorRedEl = document.getElementById("newColorRed");
const newColorGreenEl = document.getElementById("newColorGreen");
const newColorBlueEl = document.getElementById("newColorBlue");
const paintSizeEl = document.getElementById("paintSize");
const paintSizePopupEl = document.getElementById("paintSizePopup");
const paintSizeInputEl = document.getElementById("paintSizeInput");
const paintSizePreviewEl = document.getElementById("paintSizePreview");
const eraserIconEl = document.getElementById("eraserIcon");
const paintToolsEl = document.getElementById("paintTools");
const undoIconEl = document.getElementById("undoIcon");
const shapesIconEl = document.getElementById("shapesIcon");
const shapeMenuEl = document.getElementById("shapeMenu");
const shapeContainerEl = document.getElementById("shapeContainer");
const paintTextContainerEl = document.getElementById("paintTextContainer");
const paintContentEl = document.getElementById("paintContent");
const paintTextInputEl = document.getElementById("paintTextInput");
const paintFontEl = document.getElementById("paintFont");
const PABEl = document.getElementById("PAB");
const newArtworkPopupEl = document.getElementById("newArtworkPopup");
const saveArtworkPopupEl = document.getElementById("saveArtworkPopup");
const paintSaveLocationsEl = document.getElementById("paintSaveLocations");
const newArtworkNameInputEl = document.getElementById("newArtworkNameInput");
const openImagePopupEl = document.getElementById("openImagePopup");
const paintOpenLocationsEl = document.getElementById("paintOpenLocations");
const openedGraphicNameEl = document.getElementById("openedGraphicName");
const deleteImagePopupEl = document.getElementById("deleteImagePopup");
const mediaEl = document.getElementById("media");
const mediaBarEl = document.getElementById("mediaBar");
const mediaTaskEl = document.getElementById("mediaTask");
const openMediaPopupEl = document.getElementById("openMediaPopup");
const mediaOpenLocationsEl = document.getElementById("mediaOpenLocations");
const mediaHomeEl = document.getElementById("mediaHome");
const mediaImageViewerEl = document.getElementById("mediaImageViewer");
const mediaImgEl = document.getElementById("mediaImg");
const mediaImageControlEls = document.getElementsByClassName("mediaImageControl");
const openedMediaNameEl = document.getElementById("openedMediaName");
const MABEl = document.getElementById("MAB");
const deleteMediaPopupEl = document.getElementById("deleteMediaPopup");
const mediaMusicViewerEl = document.getElementById("mediaMusicViewer");
const mediaMusicEl = document.getElementById("mediaMusic");
const uploadWallpaperPopupEl = document.getElementById("uploadWallpaperPopup");
const wallpaperUploadLocationsEl = document.getElementById("wallpaperUploadLocations");
const wallpaperContainerEl = document.getElementById("wallpaperContainer");
const uploadFolderGraphicPopupEl = document.getElementById("uploadFolderGraphicPopup");
const folderGraphicUploadLocationsEl = document.getElementById("folderGraphicUploadLocations");
const folderGraphicContainerEl = document.getElementById("folderGraphicContainer");
const uploadProfilePopupEl = document.getElementById("uploadProfilePopup");
const profileUploadLocationsEl = document.getElementById("profileUploadLocations");
const profileContainerEl = document.getElementById("profileContainer");
const toolboxEl = document.getElementById("toolbox");
const toolboxBarEl = document.getElementById("toolboxBar");
const toolboxTaskEl = document.getElementById("toolboxTask");
const suggestedGraphicEl = document.getElementById("suggestedGraphic");
const suggestedNameEl = document.getElementById("suggestedName");
const suggestedDescEl = document.getElementById("suggestedDesc");
const suggestedEl = document.getElementById("suggested");
const moreSuggestedEl = document.getElementById("moreSuggested");
const toolboxContentVekEl = document.getElementById("toolboxContentVek");
const toolboxSearchContentEl = document.getElementById("toolboxSearchContent");
const toolboxSearchbarEl = document.getElementById("toolboxSearchbar");
const toolboxSeeMoreEl = document.getElementById("toolboxSeeMore");
const seeMoreLogoEl = document.getElementById("seeMoreLogo");
const seeMoreNameEl = document.getElementById("seeMoreName");
const seeMoreBtnsEl = document.getElementById("seeMoreBtns");
const toolboxContentEl = document.getElementById("toolboxContent");
const reviewsEl = document.getElementById("reviews");
const seeMoreAuthorEl = document.getElementById("seeMoreAuthor");
const slideshowEl = document.getElementById("slideshow");
const tasksEl = document.getElementById("tasks");
const toolboxReviewEl = document.getElementById("toolboxReview");
const reviewLogoEl = document.getElementById("reviewLogo");
const reviewEl = document.getElementById("review");
const toolboxNotificationEl = document.getElementById("toolboxNotification");
const toolboxUploadEl = document.getElementById("toolboxUpload");
const chooseSourceFilePopupEl = document.getElementById("chooseSourceFilePopup");
const sourceFileChooseLocationsEl = document.getElementById("sourceFileChooseLocations");
const toolboxUploadLSEl = document.getElementById("toolboxUploadLS");
const uploadAppBtnEl = document.getElementById("uploadAppBtn");
const uploadLoaderEl = document.getElementById("uploadLoader");
const newAppNameEl = document.getElementById("newAppName");
const newAppIconEl = document.getElementById("newAppIcon");
const newAppTypeEl = document.getElementById("newAppType");
const chooseNewAppIconPopupEl = document.getElementById("chooseNewAppIconPopup");
const newAppIconLocationsEl = document.getElementById("newAppIconLocations");
const newAppScreenshotContainerEl = document.getElementById("newAppScreenshotContainer");
const addNewAppScreenshotPopupEl = document.getElementById("addNewAppScreenshotPopup");
const addNewAppScreenshotLocationsEl = document.getElementById("addNewAppScreenshotLocations");
const terminalEl = document.getElementById("terminal");
const terminalBarEl = document.getElementById("terminalBar");
const terminalTaskEl = document.getElementById("terminalTask");
const terminalInputEl = document.getElementById("terminalInput");
const terminalContentVekEl = document.getElementById("terminalContentVek");
const infoEl = document.getElementById("info");
const keyboardBtnEl = document.getElementById("keyboardBtn");
const keyboardEl = document.getElementById("keyboard");
const keyboardLangEl = document.getElementById("keyboardLang");
const keyboardRowEls = document.getElementsByClassName("keyboardRow");
const keyboardToggleCaseBtnEl = document.getElementById("keyboardToggleCaseBtn");
const versionEls = document.getElementsByClassName("version");
const codeWithTletkuTopbarEl = document.getElementById("codeWithTletkuTopbar");
const twoBtnsEl = document.getElementById("twoBtns");
const codeWithTletkuSidebarEl = document.getElementById("codeWithTletkuSidebar");
const codeWithTletkuContentEl = document.getElementById("codeWithTletkuContent");
const cwtPreviewEl = document.getElementById("cwtPreview");
const codeEditorEl = document.getElementById("codeEditor");
const cwtOutputEl = document.getElementById("cwtOutput");
const cwtEditorEl = document.getElementById("cwtEditor");
const forkBtnEl = document.getElementById("forkBtn");
const cwtAuthorEl = document.getElementById("cwtAuthor");
const projectEls = document.getElementsByClassName("project");
const cwtSearchBarEl = document.getElementById("cwtSearchBar");
const publishProjectPopupEl = document.getElementById("publishProjectPopup");
const newProjectNameInputEl = document.getElementById("newProjectNameInput");
const bsodEl = document.getElementById("bsod");
const cwtResourcesEl = document.getElementById("cwtResources");
const cwtResourcesGraphicsEl = document.getElementById("cwtResourcesGraphics");
const tabBarEl = document.getElementById("tabBar");
const bsodFileReaderContentEl = document.getElementById("bsodFileReaderContent");
const bsodBtnEl = document.getElementById("bsodBtn");
// -----
const startupSnd = document.getElementById("startupSnd");
const beepSnd = document.getElementById("beepSnd");
const openSnd = document.getElementById("openSnd");
const closeSnd = document.getElementById("closeSnd");
const tletkuTalkSnd = document.getElementById("tletkuTalkSnd");
const errorSnd = document.getElementById("errorSnd");
const clickSnd = document.getElementById("clickSnd");
const yesCodeSnd = document.getElementById("yesCodeSnd");
const noCodeSnd = document.getElementById("noCodeSnd");

// voxs ko senja na

function downloadMusic(audioData, filename) {
  const blob = new Blob([audioData], { type: 'audio/mp3' });
  
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = filename;
  
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  URL.revokeObjectURL(url);
}

async function dwPNG(url, filename = 'image.png') {
  try {
    const response = await fetch(url);
    const blob = await response.blob();

    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error('Download failed:', error);
  }
}

function dwDevice(ind) {
  if (dir[ind].type == "document") {
    let textFileAsBlob = new Blob([dir[ind].content], { type: 'text/plain' });
    let downloadLink = document.createElement("a");
    downloadLink.download = dir[ind].name + ".txt";
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }
    downloadLink.click();
  } else if (dir[ind].type == "html") {
    let textFileAsBlob = new Blob([dir[ind].content], { type: 'text/html' });
    let downloadLink = document.createElement("a");
    downloadLink.download = dir[ind].name + ".html";
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }
    downloadLink.click();
  } else if (dir[ind].type == "let") {
    let textFileAsBlob = new Blob([dir[ind].content], { type: 'text/let' });
    let downloadLink = document.createElement("a");
    downloadLink.download = dir[ind].name + ".let";
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }
    downloadLink.click();
  } else if (dir[ind].type == "o++") {
    let textFileAsBlob = new Blob([dir[ind].content], { type: 'text/o++' });
    let downloadLink = document.createElement("a");
    downloadLink.download = dir[ind].name + ".o++";
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }
    downloadLink.click();
  } else if (dir[ind].type == "image") {
    if (dir[ind].content.startsWith("data")) {
      let elnis = document.createElement("a");
      elnis.href = dir[ind].content;
      elnis.download = dir[ind].name + ".png";
      document.body.appendChild(elnis);
      elnis.click();
      document.body.removeChild(elnis);
    } else {
      dwPNG(dir[ind].content, dir[ind].name + ".png");
    }
  } else if (dir[ind].type == "music") {
    let link = document.createElement("a");
    link.download = dir[ind].name + ".mp3";
    link.href = dir[ind].source;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  if (dir[ind].parent == "desktop") {
    document.getElementById(dir[ind].id).outerHTML = "";
  }
  let ix = ind;
  dir.splice(ind, 1);
  dir = dir.map(item => {
    if (item.parent > ix) {
      return { ...item, parent: item.parent - 1 };
    }
    return item;
  });
}

window.addEventListener("message",
  function (e) {
    tabs[tabIndex].href = e.data;
  },
  false);

function newTab() {
  lastId++;
  let newTab = {
    id: lastId,
    href: "auka.html"
  };
  tabs.push(newTab);
  tabIndex = tabs.length - 1;
  aukaContentEl.src = newTab.href;
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
}

function findResources() {
  cwtPreviewEl.style.display = "none";
  codeEditorEl.style.display = "none";
  forkBtnEl.style.display = "none";
  cwtAuthorEl.style.display = "none";
  cwtResourcesEl.style.display = "flex";
  cwtResourcesGraphicsEl.innerHTML = "";
  for (let i = 0; i < resources.length; i++) {
    if (resources[i].type == "img") {
      let newResourceBlockEl = document.createElement("div");
      newResourceBlockEl.classList.add("cwtdw");
      let newResourceGraphicEl = document.createElement("img");
      newResourceGraphicEl.src = resources[i].src;
      newResourceGraphicEl.draggable = false;
      newResourceBlockEl.appendChild(newResourceGraphicEl);
      let newResourceNameEl = document.createElement("h3");
      newResourceNameEl.innerText = resources[i].name;
      newResourceBlockEl.appendChild(newResourceNameEl);
      cwtResourcesGraphicsEl.appendChild(newResourceBlockEl);
      newResourceBlockEl.addEventListener("click", () => {
        copyToClipboard(resources[i].src);
        tletkuTalkSnd.currentTime = 0;
        tletkuTalkSnd.play();
      });
    }
  }
}

const convertArrayToString = (arr, type) => {
  let str = "";
  if (type == "dir") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].type == "folder") {
        str += `{
        id: ${arr[i].id},
        name: "${arr[i].name}",
        type: "folder",
        parent: "${arr[i].parent}",
        drag: false
      },`;
      } else if (arr[i].type == "document") {
        str += `{
        id: ${arr[i].id},
        name: "${arr[i].name}",
        type: "document",
        parent: "${arr[i].parent}",
        drag: false,
        content: \`${arr[i].content}\`
      },`;
      } else if (arr[i].type == "html") {
        str += `{
        id: ${arr[i].id},
        name: "${arr[i].name}",
        type: "html",
        parent: "${arr[i].parent}",
        drag: false,
        content: \`${arr[i].content}\`
      },`;
      } else if (arr[i].type == "let") {
        str += `{
        id: ${arr[i].id},
        name: "${arr[i].name}",
        type: "let",
        parent: "${arr[i].parent}",
        drag: false,
        content: \`${arr[i].content}\`
      },`;
      } else if (arr[i].type == "o++") {
        str += `{
        id: ${arr[i].id},
        name: "${arr[i].name}",
        type: "o++",
        parent: "${arr[i].parent}",
        drag: false,
        content: \`${arr[i].content}\`
      },`;
      } else if (arr[i].type == "image") {
        str += `{
        id: ${arr[i].id},
        name: "${arr[i].name}",
        type: "image",
        parent: "${arr[i].parent}",
        drag: false,
        content: \`${arr[i].content}\`,
        width: ${arr[i].width},
        height: ${arr[i].height}
      },`;
      } else if (arr[i].type == "music") {
        str += `{
        id: ${arr[i].id},
        name: "${arr[i].name}",
        type: "music",
        parent: "${arr[i].parent}",
        drag: false,
        source: \`${arr[i].source}\`
      },`;
      }
    }
  } else if (type == "apps") {
    for (let i = 0; i < arr.length; i++) {
      str += `{
    name: "${arr[i].name}",
    icon: "${arr[i].icon}",
    color: "${arr[i].color}",
    hoverColor: "${arr[i].hoverColor}",
    clickFun: ${arr[i].clickFun},
    type: "${arr[i].type}",
    installed: ${arr[i].installed},
    install: false,
    reviews: ${convertArrayToString(arr[i].reviews, "reviews")},
    author: "${arr[i].author}",
    screenshots: [${"'" + arr[i].screenshots.join("','") + "'"}],`;
      if (arr[i].content) {
        str += `
      content: \`${arr[i].content}\`,`;
      }
      str += `
    },`;
    }
  } else if (type == "reviews") {
    str = "[";
    for (let i = 0; i < arr.length; i++) {
      str += `{
      author: "${arr[i].author}",
      value: "${arr[i].value}"
      },`;
    }
    str += "]";
  }
  return str;
}

function _SAVE_DATA() {
  window.open("run.php?action=sync&theme=" + theme + "&themeColor=" + encodeURIComponent(themeColor) + "&lightThemeColor=" + encodeURIComponent(hoverThemeColor) + "&darkThemeColor=" + encodeURIComponent(darkThemeColor) + "&windowBarPosition=" + windowBarPosition + "&font=" + font + "&notification=" + tletkuTalkSnd.src + "&navFloatE=" + String(navFloatE) + "&navInvisibleE=" + String(navInvisibleE) + "&navBlurE=" + String(navBlurE) + "&appUsage=" + appUsage + "&fileUsage=" + fileUsage + "&junkUsage=" + junkUsage, "_blank");
  let hiddenForm = document.createElement("form");
  bsodEl.appendChild(hiddenForm);
  hiddenForm.method = "post";
  hiddenForm.action = "run.php?action=cloudFile";
  let dirEl = document.createElement("input");
  dirEl.value = convertArrayToString(dir, "dir");
  dirEl.name = "dir";
  hiddenForm.appendChild(dirEl);
  let proPicEl = document.createElement("input");
  proPicEl.value = profile;
  proPicEl.name = "profile";
  hiddenForm.appendChild(proPicEl);
  let folGraEl = document.createElement("input");
  folGraEl.value = folderGraphic;
  folGraEl.name = "folderGraphic";
  hiddenForm.appendChild(folGraEl);
  let wallEl = document.createElement("input");
  wallEl.value = wallpaper;
  wallEl.name = "wallpaper";
  hiddenForm.appendChild(wallEl);
  let appsEl = document.createElement("input");
  appsEl.value = convertArrayToString(applications, "apps");
  appsEl.name = "apps";
  hiddenForm.appendChild(appsEl);
  let appsHEl = document.createElement("input");
  let arneik = [];
  for (let i = 0; i < applications.length; i++) {
    if (applications[i].installed) {
      arneik.push(applications[i].name);
    }
  }
  appsHEl.value = arneik.join("^^^");
  appsHEl.name = "insApps";
  hiddenForm.appendChild(appsHEl);
  hiddenForm.submit();
  hiddenForm.outerHTML = "";
}

function cancelPublishProject() {
  publishProjectPopupEl.style.transform = "rotateX(90deg)";
  publishProjectPopupEl.style.opacity = "0%";
  setTimeout(() => {
    publishProjectPopupEl.style.display = "none";
  }, 100);
}

function okPublishProject() {
  cancelPublishProject();
  newProjectName = newProjectNameInputEl.value;
  if (newProjectName == "") {
    newProjectName = "Untitled Project";
  }
  let newProjectContent = cwtEditorEl.value;
  newProjectContent = newProjectContent.split("\n");
  newProjectContent = newProjectContent.join("");
  let hiddenForm = document.createElement("form");
  bsodEl.appendChild(hiddenForm);
  hiddenForm.method = "post";
  hiddenForm.action = "publish.php";
  let nameEl = document.createElement("input");
  nameEl.value = newProjectName;
  nameEl.name = "name";
  hiddenForm.appendChild(nameEl);
  let contentEl = document.createElement("input");
  contentEl.value = newProjectContent;
  contentEl.name = "content";
  hiddenForm.appendChild(contentEl);
  hiddenForm.submit();
  hiddenForm.outerHTML = "";
}

function searchForProjects() {
  for (let i = 0; i < projectEls.length; i++) {
    projectEls[i].style.display = "flex";
  }
  for (let i = 0; i < projectEls.length; i++) {
    if (!projectEls[i].innerText.toLowerCase().includes(cwtSearchBarEl.value.toLowerCase())) {
      projectEls[i].style.display = "none";
    }
  }
}

function forkProject() {
  newProject();
  cwtEditorEl.value = cwtPreviewEl.srcdoc;
  cwtTestCode();
}

function publishProject() {
  beepSnd.currentTime = 0;
  beepSnd.play();
  publishProjectPopupEl.style.display = "block";
  newProjectNameInputEl.focus();
  setTimeout(() => {
    publishProjectPopupEl.style.transform = "none";
    publishProjectPopupEl.style.opacity = "100%";
  }, 1);
}

function cwtTestCode() {
  cwtOutputEl.srcdoc = cwtEditorEl.value;
}

function newProject() {
  cwtPreviewEl.style.display = "none";
  codeEditorEl.style.display = "flex";
  forkBtnEl.style.display = "none";
  cwtAuthorEl.style.display = "none";
  cwtResourcesEl.style.display = "none";
}

function logOutOfAccount() {
  window.location.href = "run.php?action=logout";
}

function createAccount() {
  window.open("createAccount.html", "_blank");
}

function noToDecision() {
  tletkuTalkE = false;
  emotion = "happyTletku";
}

function yesToDecision() {
  if (decision == "exit") {
    codeWithTlektuE = false;
    startBtnEl.style.marginTop = "7px";
    startBtnEl.style.marginLeft = "7px";
    startBtnEl.style.transform = "scale(1)";
    codeWithTletkuTopbarEl.style.marginTop = "-100px";
    emotion = "icon";
    tletkuTalkE = false;
    twoBtnsEl.style.display = "none";
    codeWithTletkuSidebarEl.style.marginLeft = "-250px";
    codeWithTletkuContentEl.style.marginLeft = "100vw";
    cwtPreviewEl.style.display = "none";
    codeWithTletkuContentEl.style.backgroundColor = "rgba(0, 0, 0, .8)";
    forkBtnEl.style.display = "none";
    cwtAuthorEl.style.display = "none";
    cwtResourcesEl.style.display = "none";
  }
}

function exitCodeWithTletku() {
  notify("codeWithTletku", "Are you sure you want to leave?");
  emotion = "sadTletku";
  twoBtnsEl.style.display = "flex";
  decision = "exit";
}

function codeWithTletkuFun() {
  codeWithTlektuE = true;
  startBtnEl.style.marginTop = "-170vh";
  startBtnEl.style.marginLeft = "100px";
  startBtnEl.style.transform = "scale(3)";
  notify("codeWithTletku", "Welcome to a place where you can code and learn to code with Tletku!");
  codeWithTletkuTopbarEl.style.marginTop = "50px";
  emotion = "happyTletku";
  yesCodeSnd.currentTime = 0;
  yesCodeSnd.play();
  codeWithTletkuSidebarEl.style.marginLeft = "50px";
  codeWithTletkuContentEl.style.marginLeft = "310px";
}

keyboardLangEl.addEventListener("mousedown", (event) => {
  event.stopPropagation();
});

keyboardEl.addEventListener("mousedown", (event) => {
  event.preventDefault();
});

keyboardToggleCaseBtnEl.addEventListener("mousedown", () => {
  clickSnd.currentTime = 0;
  clickSnd.play();
  toggleCase();
});

function toggleCase() {
  letterCase = true;
  updateKeyBoard();
}

function updateKeyBoard() {
  let lang = Number(keyboardLangEl.value);
  for (let i = 0; i < keyboardRowEls.length - 1; i++) {
    keyboardRowEls[i].innerHTML = "";
  }
  for (let i = 0; i < languages[lang].keys.length; i++) {
    let newKeyEl = document.createElement("button");
    if (languages[lang].keys[i].value || languages[lang].keys[i].value == 0) {
      newKeyEl.innerHTML = languages[lang].keys[i].value;
      if (letterCase) {
        newKeyEl.innerHTML = newKeyEl.innerHTML.toUpperCase();
      }
    } else {
      newKeyEl.innerHTML = languages[lang].keys[i].content;
    }
    newKeyEl.style.width = languages[lang].keys[i].width * 25 + "px";
    if (languages[lang].keys[i].value || languages[lang].keys[i].value == 0) {
      newKeyEl.addEventListener("mousedown", () => {
        clickSnd.currentTime = 0;
        clickSnd.play();
        if (document.activeElement.id != "keyboardLang") {
          document.activeElement.value += newKeyEl.innerHTML;
        }
        letterCase = false;
        updateKeyBoard();
      });
    } else {
      newKeyEl.addEventListener("mousedown", () => {
        clickSnd.currentTime = 0;
        clickSnd.play();
        if (document.activeElement.id != "keyboardLang") {
          document.activeElement.value = languages[lang].keys[i].fun(document.activeElement.value);
        }
        letterCase = false;
        updateKeyBoard();
      });
    }
    keyboardRowEls[languages[lang].keys[i].parent].appendChild(newKeyEl);
  }
}
updateKeyBoard();

function toggleKeyboard() {
  keyboardE = !keyboardE;
  letterCase = true;
  updateKeyBoard();
  if (keyboardE) {
    keyboardEl.style.marginTop = "calc(100vh - 410px)";
  } else {
    keyboardEl.style.marginTop = "100vh";
  }
}

terminalInputEl.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() == "enter") {
    termQuery();
  }
})

function openTerminal() {
  for (let i = 0; i < commands.length; i++) {
    if (commands[i].value == "clear") {
      commands[i].fun("clear");
    }
  }
  termRespond("Welcome to Ofekal Terminal. Type 'help' to see all commands.", false);
  terminalInputEl.value = "";
  selectWin(terminalEl);
  terminalEl.style.display = "flex";
  setTimeout(() => {
    terminalEl.style.transform = "none";
    terminalEl.style.opacity = "100%";
  }, 1);
  terminalTaskEl.style.display = "flex";
  setTimeout(() => {
    terminalTaskEl.style.transform = "none";
    terminalTaskEl.style.opacity = "100%";
  }, 1);
  if (terminal.maximized) {
    maximizeTerminal();
  }
  terminalEl.style.marginLeft = Math.floor(Math.random() * 50) + "vw";
  terminalEl.style.marginTop = Math.floor(Math.random() * 50) + "vh";
  terminal.open = true;
}

function openInTerminal() {
  openTerminal();
  for (let i = 0; i < commands.length; i++) {
    if (commands[i].value == "clear") {
      commands[i].fun("clear");
    }
  }
  terminalDir = ls;
  for (let i = 0; i < commands.length; i++) {
    if (commands[i].value == "dir") {
      commands[i].fun("dir");
    }
  }
}

// FLAME START ----------


let searchQuery = "https://start.duckduckgo.com/search?q=";

function flameSearch(q) {
  window.open(searchQuery + q, "_blank");
}


// FLAME END ----------

function openToolbox() {
  selectWin(toolboxEl);
  toolboxEl.style.display = "flex";
  setTimeout(() => {
    toolboxEl.style.transform = "none";
    toolboxEl.style.opacity = "100%";
  }, 1);
  toolboxTaskEl.style.display = "flex";
  setTimeout(() => {
    toolboxTaskEl.style.transform = "none";
    toolboxTaskEl.style.opacity = "100%";
  }, 1);
  if (toolbox.maximized) {
    maximizeToolbox();
  }
  toolboxEl.style.marginLeft = Math.floor(Math.random() * 50) + "vw";
  toolboxEl.style.marginTop = Math.floor(Math.random() * 50) + "vh";
  toolbox.open = true;
  suggestedIndex = Math.floor(Math.random() * applications.length);
  otherSuggestedIndices = [];
  for (let i = 0; i < 6; i++) {
    otherSuggestedIndices.push(Math.floor(Math.random() * applications.length));
  }
  toToolboxHome();
  toolboxLS = null;
  newAppNameEl.value = "";
  newAppTypeEl.value = "search engine";
  newAppIcon = "images/settings.png";
  newAppScreenshots = [];
  uploadAppBtnEl.style.display = "inline";
  uploadLoaderEl.style.display = "none";
}

function openStorage() {
  selectWin(folderWinEl);
  folderWinEl.style.display = "flex";
  setTimeout(() => {
    folderWinEl.style.transform = "none";
    folderWinEl.style.opacity = "100%";
  }, 1);
  storageTaskEl.style.display = "flex";
  setTimeout(() => {
    storageTaskEl.style.transform = "none";
    storageTaskEl.style.opacity = "100%";
  }, 1);
  if (folder.maximized) {
    maximizeFolder();
  }
  folderWinEl.style.marginLeft = Math.floor(Math.random() * 50) + "vw";
  folderWinEl.style.marginTop = Math.floor(Math.random() * 50) + "vh";
  folder.open = true;
  ls = "desktop";
}

commands.sort((a, b) => b.value.length - a.value.length);

function termRespond(str, errE) {
  let newToEl = document.createElement("p");
  newToEl.innerHTML = str + " <";
  newToEl.style.textAlign = "right";
  newToEl.style.marginTop = "5px";
  if (errE) {
    newToEl.style.color = "red";
  }
  terminalContentVekEl.appendChild(newToEl);
}

function termQuery() {
  let command = terminalInputEl.value.toLowerCase();
  terminalInputEl.value = "";
  let newFromEl = document.createElement("p");
  newFromEl.innerText = "> " + command;
  newFromEl.style.marginTop = "10px";
  newFromEl.style.marginBottom = "10px";
  terminalContentVekEl.appendChild(newFromEl);
  let termIndex;
  for (let i = 0; i < commands.length; i++) {
    if (command.startsWith(commands[i].value) && termIndex == undefined) {
      termIndex = i;
    }
  }
  if (termIndex || termIndex == 0) {
    commands[termIndex].fun(command);
    lastCommand = command;
  } else {
    termRespond("Command not found", true);
  }
}

function unMinimizeTerminal() {
  terminalEl.style.marginTop = "10vh";
  selectWin(terminalEl);
  if (startMenuIsOpen) {
    toggleStartMenu();
  }
}

function minimizeTerminal() {
  if (terminal.maximized) {
    maximizeTerminal();
  }
  terminalEl.style.marginTop = "100vh";
}

terminalBarEl.addEventListener("mousedown", (event) => {
  terminal.drag = true;
  offsetX = event.offsetX;
  offsetY = event.offsetY;
});

function okAddNewAppScreenshot() {
  cancelAddNewAppScreenshot();
  newAppScreenshots.push(dir[toolboxO].content);
}

function cancelAddNewAppScreenshot() {
  addNewAppScreenshotPopupEl.style.transform = "rotateX(90deg)";
  addNewAppScreenshotPopupEl.style.opacity = "0%";
  setTimeout(() => {
    addNewAppScreenshotPopupEl.style.display = "none";
  }, 200);
}

function addNewAppScreenshot() {
  tletkuTalkSnd.currentTime = 0;
  tletkuTalkSnd.play();
  addNewAppScreenshotPopupEl.style.display = "block";
  setTimeout(() => {
    addNewAppScreenshotPopupEl.style.transform = "none";
    addNewAppScreenshotPopupEl.style.opacity = "100%";
  }, 1);
  toolboxF = "desktop";
  toolboxO = null;
}

function okChooseNewAppIcon() {
  cancelChooseNewAppIcon();
  toolboxF = "desktop";
  newAppIcon = dir[toolboxO].content;
  toolboxO = null;
}

function cancelChooseNewAppIcon() {
  chooseNewAppIconPopupEl.style.transform = "rotateX(90deg)";
  chooseNewAppIconPopupEl.style.opacity = "0%";
  setTimeout(() => {
    chooseNewAppIconPopupEl.style.display = "none";
  }, 200);
}

function chooseNewAppIcon() {
  tletkuTalkSnd.currentTime = 0;
  tletkuTalkSnd.play();
  chooseNewAppIconPopupEl.style.display = "block";
  toolboxF = "desktop";
  toolboxO = null;
  setTimeout(() => {
    chooseNewAppIconPopupEl.style.transform = "none";
    chooseNewAppIconPopupEl.style.opacity = "100%";
  }, 1);
}

function okUploadApp() {
  if (dir[toolboxLS]) {
    uploadAppBtnEl.style.display = "none";
    uploadLoaderEl.style.display = "block";
    setTimeout(() => {
      uploadAppBtnEl.style.display = "inline";
      uploadLoaderEl.style.display = "none";
      toToolboxHome();
      toolboxNotify("Thank you for contributing to Toolbox!");
      let newAppName = newAppNameEl.value;
      newAppNameEl.value = "";
      if (newAppName == "") {
        newAppName = "Untitled App";
      }
      let r = Math.ceil(Math.random() * 255);
      let g = Math.ceil(Math.random() * 255);
      let b = Math.ceil(Math.random() * 255);
      let ra = r + 50;
      let ga = g + 50;
      let ba = b + 50;
      lastId++;
      let newApplication = {
        name: newAppName,
        icon: newAppIcon,
        color: "rgb(" + r + ", " + g + ", " + b + ")",
        hoverColor: "rgb(" + ra + ", " + ga + ", " + ba + ")",
        content: dir[toolboxLS].content,
        clickFun: function () {
          if (!document.getElementById("app" + lastId)) {
            let newWindowEl = document.createElement("div");
            newWindowEl.classList.add("window");
            newWindowEl.style.display = "flex";
            newWindowEl.style.marginLeft = Math.floor(Math.random() * 50) + "vw";
            newWindowEl.style.marginTop = Math.floor(Math.random() * 50) + "vh";
            newWindowEl.id = "app" + lastId;
            selectWin(newWindowEl);
            newWindowEl.addEventListener("mousedown", () => {
              selectWin(newWindowEl);
            });
            let newWindowBarEl = document.createElement("div");
            newWindowBarEl.classList.add("windowBar");
            let newWindowDraggableAreaEl = document.createElement("div");
            newWindowDraggableAreaEl.classList.add("draggableArea");
            newWindowBarEl.appendChild(newWindowDraggableAreaEl);
            let newWindowTitleEl = document.createElement("h2");
            newWindowTitleEl.classList.add("windowTitle");
            newWindowTitleEl.innerText = this.name;
            newWindowDraggableAreaEl.appendChild(newWindowTitleEl);
            let newWindowLogoEl = document.createElement("img");
            newWindowLogoEl.src = this.icon;
            newWindowLogoEl.classList.add("windowIcon");
            newWindowDraggableAreaEl.addEventListener("mousedown", (event) => {
              let dragFun = function (event) {
                let rect = newWindowEl.getBoundingClientRect();
                if (rect.width != window.innerWidth) {
                  newWindowEl.style.marginLeft = event.clientX - offsetX + "px";
                  newWindowEl.style.marginTop = event.clientY - offsetY + "px";
                }
              };
              document.addEventListener("mousemove", dragFun);
              document.addEventListener("mouseup", () => {
                document.removeEventListener("mousemove", dragFun);
              });
              offsetX = event.offsetX;
              offsetY = event.offsetY;
            });
            newWindowDraggableAreaEl.prepend(newWindowLogoEl);
            let newWindowActionButtonsEl = document.createElement("div");
            newWindowActionButtonsEl.classList.add("windowActionButtons");
            let newWindowMinimizeBtnEl = document.createElement("button");
            newWindowMinimizeBtnEl.innerText = "-";
            newWindowMinimizeBtnEl.classList.add("minimizeBtn");
            newWindowMinimizeBtnEl.addEventListener("click", () => {
              newWindowEl.style.marginTop = "100vh";
              newWindowEl.style.width = "50vw";
              newWindowEl.style.height = "50vh";
            });
            newWindowActionButtonsEl.appendChild(newWindowMinimizeBtnEl);
            let newWindowMaximizeBtnEl = document.createElement("button");
            newWindowMaximizeBtnEl.innerHTML = "<i class='fa-regular fa-square'></i>";
            newWindowMaximizeBtnEl.classList.add("maximizeBtn");
            newWindowMaximizeBtnEl.addEventListener("click", () => {
              let rect = newWindowEl.getBoundingClientRect();
              if (rect.width == window.innerWidth) {
                newWindowEl.style.marginLeft = "10vw";
                newWindowEl.style.marginTop = "10vh";
                newWindowEl.style.width = "50vw";
                newWindowEl.style.height = "50vh";
              } else {
                newWindowEl.style.marginLeft = "0";
                newWindowEl.style.marginTop = "0";
                newWindowEl.style.width = "100vw";
                newWindowEl.style.height = "100vh";
              }
            });
            newWindowActionButtonsEl.appendChild(newWindowMaximizeBtnEl);
            newWindowBarEl.appendChild(newWindowActionButtonsEl);
            newWindowEl.appendChild(newWindowBarEl);
            let newWindowCloseBtnEl = document.createElement("button");
            newWindowCloseBtnEl.innerText = "X";
            newWindowCloseBtnEl.classList.add("closeBtn");
            newWindowActionButtonsEl.style.maxWidth = "150px";
            newWindowActionButtonsEl.style.maxHeight = "150px";
            newWindowActionButtonsEl.appendChild(newWindowCloseBtnEl);
            if (this.type == "ofekal native") {
              let newWindowContentEl = document.createElement("div");
              newWindowContentEl.classList.add("windowContent");
              newWindowContentEl.innerHTML = this.content;
              newWindowEl.appendChild(newWindowContentEl);
            } else {
              let newWindowContentEl = document.createElement("iframe");
              newWindowContentEl.classList.add("windowContent");
              newWindowContentEl.src = "code.html";
              newWindowContentEl.srcdoc = this.content;
              newWindowEl.appendChild(newWindowContentEl);
            }
            desktopEl.prepend(newWindowEl);
            let newWindowTaskEl = document.createElement("div");
            newWindowTaskEl.classList.add("task");
            let newWindowTaskIconEl = document.createElement("img");
            newWindowTaskIconEl.src = this.icon;
            newWindowTaskIconEl.draggable = false;
            newWindowTaskEl.appendChild(newWindowTaskIconEl);
            newWindowTaskEl.style.display = "flex";
            let newWindowTaskTitleEl = document.createElement("p");
            newWindowTaskTitleEl.innerText = this.name;
            newWindowTaskEl.addEventListener("click", () => {
              newWindowEl.style.marginTop = "10vh";
              selectWin(newWindowEl);
              if (startMenuIsOpen) {
                toggleStartMenu();
              }
            });
            newWindowTaskEl.appendChild(newWindowTaskTitleEl);
            tasksEl.appendChild(newWindowTaskEl);
            setTimeout(() => {
              newWindowEl.style.transform = "none";
              newWindowEl.style.opacity = "100%";
              newWindowTaskEl.style.transform = "none";
              newWindowTaskEl.style.opacity = "100%";
            }, 1);
            newWindowCloseBtnEl.addEventListener("click", () => {
              newWindowEl.style.transform = "rotateX(90deg)";
              newWindowEl.style.opacity = "0%";
              newWindowTaskEl.style.transform = "rotateY(90deg)";
              newWindowTaskEl.style.opacity = "0%";
              setTimeout(() => {
                newWindowEl.outerHTML = "";
                newWindowTaskEl.outerHTML = "";
              }, 200);
            });
            newWindowTaskEl.addEventListener("contextmenu", () => {
              newWindowEl.style.transform = "rotateX(90deg)";
              newWindowEl.style.opacity = "0%";
              newWindowTaskEl.style.transform = "rotateY(90deg)";
              newWindowTaskEl.style.opacity = "0%";
              setTimeout(() => {
                newWindowEl.outerHTML = "";
                newWindowTaskEl.outerHTML = "";
              }, 200);
            });
          } else {
            let win = document.getElementById("app" + lastId);
            win.style.marginLeft = Math.floor(Math.random() * 50) + "vw";
            win.style.marginTop = Math.floor(Math.random() * 50) + "vh";
            win.style.width = "50vw";
            win.style.height = "50vh";
          }
        },
        type: newAppTypeEl.value,
        installed: false,
        install: false,
        reviews: [],
        author: username,
        screenshots: newAppScreenshots
      };
      newAppIcon = "images/settings.png";
      toolboxLS = null;
      newAppTypeEl.value = "search engine";
      applications.push(newApplication);
    }, 15000);
  } else {
    toolboxNotify("Please select a source file!");
  }
}

function okChooseSourceFile() {
  cancelChooseSourceFile();
  toolboxLS = toolboxO;
}

function cancelChooseSourceFile() {
  chooseSourceFilePopupEl.style.transform = "rotateX(90deg)";
  chooseSourceFilePopupEl.style.opacity = "0%";
  setTimeout(() => {
    chooseSourceFilePopupEl.style.display = "none";
  }, 200);
}

function chooseSourceFile() {
  toolboxF = "desktop";
  toolboxO = null;
  tletkuTalkSnd.currentTime = 0;
  tletkuTalkSnd.play();
  chooseSourceFilePopupEl.style.display = "block";
  setTimeout(() => {
    chooseSourceFilePopupEl.style.transform = "none";
    chooseSourceFilePopupEl.style.opacity = "100%";
  }, 1);
}

function uploadApp() {
  toolboxContentVekEl.style.display = "none";
  toolboxSeeMoreEl.style.display = "none";
  toolboxSearchContentEl.style.display = "flex";
  toolboxSearchContentEl.innerHTML = "";
  toolboxUploadEl.style.display = "none";
  toolboxSearchContentEl.style.display = "none";
  toolboxUploadEl.style.display = "block";
}

function toolboxNotify(message) {
  toolboxNotificationEl.innerText = message;
  toolboxNotificationEl.style.display = "flex";
  setTimeout(() => {
    toolboxNotificationEl.style.opacity = "100%";
    setTimeout(() => {
      toolboxNotificationEl.style.opacity = "0%";
      setTimeout(() => {
        toolboxNotificationEl.style.display = "none";
      }, 500);
    }, 2500);
  }, 1);
}

function okWriteReview() {
  let newReview = {
    author: username,
    value: reviewEl.value
  };
  applications[seeMoreIndex].reviews.push(newReview);
  toolboxSeeMoreEl.style.display = "block";
  toolboxReviewEl.style.display = "none";
  toolboxNotify("Thank you. Your feedback is appreciated!");
}

function writeAReview() {
  if (applications[seeMoreIndex].installed) {
    toolboxSeeMoreEl.style.display = "none";
    toolboxReviewEl.style.display = "block";
    reviewEl.innerHTML = "";
  } else {
    toolboxNotify("Please install and try the app before writing a review");
  }
}

function next() {
  slideshowIndex++;
  if (slideshowIndex >= applications[seeMoreIndex].screenshots.length) {
    slideshowIndex = applications[seeMoreIndex].screenshots.length - 1;
  }
}

function previous() {
  slideshowIndex--;
  if (slideshowIndex <= 0) {
    slideshowIndex = 0;
  }
}

function okSuggestion() {
  toolboxContentVekEl.style.display = "none";
  toolboxSeeMoreEl.style.display = "block";
  seeMoreIndex = suggestedIndex;
  slideshowIndex = 0;
}

function toToolboxHome() {
  toolboxSearchContentEl.style.display = "none";
  toolboxContentVekEl.style.display = "block";
  toolboxSeeMoreEl.style.display = "none";
  toolboxSearchbarEl.value = "";
  toolboxReviewEl.style.display = "none";
  toolboxUploadEl.style.display = "none";
}

function searchToolbox() {
  if (toolboxSearchbarEl.value != "") {
    toolboxContentVekEl.style.display = "none";
    toolboxSeeMoreEl.style.display = "none";
    toolboxSearchContentEl.style.display = "flex";
    toolboxSearchContentEl.innerHTML = "";
    toolboxUploadEl.style.display = "none";
    let query = toolboxSearchbarEl.value;
    for (let i = 0; i < applications.length; i++) {
      let from = applications[i].name.toLowerCase();
      let to = query.toLowerCase();
      if (from.includes(to)) {
        let newResultEl = document.createElement("div");
        newResultEl.classList.add("searchedApp");
        newResultEl.style.backgroundColor = applications[i].color;
        let newResultGraphicEl = document.createElement("img");
        newResultGraphicEl.src = applications[i].icon;
        newResultGraphicEl.draggable = false;
        newResultEl.appendChild(newResultGraphicEl);
        let newResultNameEl = document.createElement("h2");
        newResultNameEl.innerText = applications[i].name;
        newResultEl.appendChild(newResultNameEl);
        let newResultBtnEl = document.createElement("button");
        newResultBtnEl.classList.add("coolBtn");
        newResultBtnEl.innerText = "See More";
        newResultBtnEl.addEventListener("click", () => {
          toolboxSearchContentEl.style.display = "none";
          toolboxSeeMoreEl.style.display = "block";
          seeMoreIndex = i;
          slideshowIndex = 0;
        });
        newResultEl.appendChild(newResultBtnEl);
        toolboxSearchContentEl.appendChild(newResultEl);
      }
    }
    if (toolboxSearchContentEl.innerHTML == "") {
      toolboxSearchContentEl.innerHTML = "<br><h2>No results...</h2>";
    }
  }
}



toolboxSearchbarEl.addEventListener("keyup", (event) => { // Make it so you can Press enter to search in Toolbox. (IsaacIo33)
if (event.key === "Enter"){ // If Enter is pressed
  searchToolbox(); // Search on Toolbox
}
});

toolboxBarEl.addEventListener("mousedown", (event) => {
  toolbox.drag = true;
  offsetX = event.offsetX;
  offsetY = event.offsetY;
});

function okUploadProfile() {
  cancelUploadProfile();
  lastId++;
  let newProfile = {
    id: lastId,
    value: dir[wallpaperO].content
  };
  profiles.push(newProfile);
  let newWallpaperEl = document.createElement("img");
  newWallpaperEl.style.width = "100px";
  newWallpaperEl.src = dir[wallpaperO].content;
  newWallpaperEl.alt = "Profile Option";
  newWallpaperEl.draggable = false;
  newWallpaperEl.addEventListener("click", () => {
    profile = newWallpaperEl.src;
  });
  newWallpaperEl.addEventListener("contextmenu", () => {
    newWallpaperEl.outerHTML = "";
    folderGraphics.splice(profiles.indexOf(newProfile), 1);
  });
  profileContainerEl.appendChild(newWallpaperEl);
}

function cancelUploadProfile() {
  uploadProfilePopupEl.style.transform = "rotateX(90deg)";
  uploadProfilePopupEl.style.opacity = "0%";
  setTimeout(() => {
    uploadProfilePopupEl.style.display = "none";
  }, 100);
}

function uploadProfile() {
  wallpaperF = "desktop";
  wallpaperO = null;
  tletkuTalkSnd.currentTime = 0;
  tletkuTalkSnd.play();
  uploadProfilePopupEl.style.display = "block";
  setTimeout(() => {
    uploadProfilePopupEl.style.transform = "none";
    uploadProfilePopupEl.style.opacity = "100%";
  }, 1);
}

function okUploadFolderGraphic() {
  cancelUploadFolderGraphic();
  lastId++;
  folderGraphics.push(dir[wallpaperO].content);
  let newWallpaperEl = document.createElement("img");
  newWallpaperEl.style.width = "100px";
  newWallpaperEl.src = dir[wallpaperO].content;
  newWallpaperEl.alt = "Folder Graphic Option";
  newWallpaperEl.draggable = false;
  newWallpaperEl.addEventListener("click", () => {
    folderGraphic = newWallpaperEl.src;
  });
  newWallpaperEl.addEventListener("contextmenu", () => {
    newWallpaperEl.outerHTML = "";
    let removed = false;
    for (let i = 0; i < folderGraphics.length; i++) {
      if (!removed && newWallpaperEl.src == folderGraphics[i]) {
        folderGraphics.splice(i, 1);
        removed = true;
      }
    }
  });
  folderGraphicContainerEl.appendChild(newWallpaperEl);
}

function cancelUploadFolderGraphic() {
  uploadFolderGraphicPopupEl.style.transform = "rotateX(90deg)";
  uploadFolderGraphicPopupEl.style.opacity = "0%";
  setTimeout(() => {
    uploadFolderGraphicPopupEl.style.display = "none";
  }, 100);
}

function uploadFolderGraphic() {
  wallpaperF = "desktop";
  wallpaperO = null;
  tletkuTalkSnd.currentTime = 0;
  tletkuTalkSnd.play();
  uploadFolderGraphicPopupEl.style.display = "block";
  setTimeout(() => {
    uploadFolderGraphicPopupEl.style.transform = "none";
    uploadFolderGraphicPopupEl.style.opacity = "100%";
  }, 1);
}

function okUploadWallpaper() {
  cancelUploadWallpaper();
  lastId++;
  wallpapers.push(dir[wallpaperO].content);
  let newWallpaperEl = document.createElement("img");
  newWallpaperEl.src = dir[wallpaperO].content;
  newWallpaperEl.alt = "Wallpaper Option";
  newWallpaperEl.draggable = false;
  newWallpaperEl.addEventListener("click", () => {
    wallpaper = newWallpaperEl.src;
  });
  newWallpaperEl.addEventListener("contextmenu", () => {
    newWallpaperEl.outerHTML = "";
    let removed = false;
    for (let i = 0; i < wallpapers.length; i++) {
      if (!removed && newWallpaperEl.src == wallpapers[i]) {
        wallpapers.splice(i, 1);
        removed = true;
      }
    }
  });
  wallpaperContainerEl.appendChild(newWallpaperEl);
}

function cancelUploadWallpaper() {
  uploadWallpaperPopupEl.style.transform = "rotateX(90deg)";
  uploadWallpaperPopupEl.style.opacity = "0%";
  setTimeout(() => {
    uploadWallpaperPopupEl.style.display = "none";
  }, 100);
}

function uploadWallpaper() {
  wallpaperF = "desktop";
  wallpaperO = null;
  tletkuTalkSnd.currentTime = 0;
  tletkuTalkSnd.play();
  uploadWallpaperPopupEl.style.display = "block";
  setTimeout(() => {
    uploadWallpaperPopupEl.style.transform = "none";
    uploadWallpaperPopupEl.style.opacity = "100%";
  }, 1);
}

function openMediaViewer() {
  selectWin(mediaEl);
  mediaEl.style.display = "flex";
  setTimeout(() => {
    mediaEl.style.transform = "none";
    mediaEl.style.opacity = "100%";
  }, 1);
  mediaTaskEl.style.display = "flex";
  setTimeout(() => {
    mediaTaskEl.style.transform = "none";
    mediaTaskEl.style.opacity = "100%";
  }, 1);
  if (media.maximized) {
    maximizeMedia();
  }
  mediaEl.style.marginLeft = Math.floor(Math.random() * 50) + "vw";
  mediaEl.style.marginTop = Math.floor(Math.random() * 50) + "vh";
  media.open = true;
  mediaLS = null;
  mediaF = "desktop";
  mediaO = null;
}

function openMediaToPaint() {
  openPaint();
  const img = new Image();
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
  };
  img.src = dir[mediaLS].content;
  paintLS = mediaLS;
}

function okDeleteMedia() {
  cancelDeleteMedia();
  if (dir[mediaLS].parent == "desktop") {
    document.getElementById(dir[mediaLS].id).outerHTML = "";
  }
  let ix = mediaLS;
  dir.splice(mediaLS, 1);
  dir = dir.map(item => {
    if (item.parent > ix) {
      return { ...item, parent: item.parent - 1 };
    }
    return item;
  });
  closeMedia();
  fileUsage -= 0.1;
}

function cancelDeleteMedia() {
  deleteMediaPopupEl.style.transform = "rotateX(90deg)";
  deleteMediaPopupEl.style.opacity = "0%";
  setTimeout(() => {
    deleteMediaPopupEl.style.display = "none";
  }, 100);
}

function checkValueMAB() {
  if (MABEl.value == "open") {
    openMedia();
  } else if (MABEl.value == "delete") {
    beepSnd.currentTime = 0;
    beepSnd.play();
    deleteMediaPopupEl.style.display = "block";
    setTimeout(() => {
      deleteMediaPopupEl.style.transform = "none";
      deleteMediaPopupEl.style.opacity = "100%";
    }, 1);
  }
  MABEl.value = "file";
}

function okOpenMedia() {
  if (dir[mediaO].type == "image") {
    cancelOpenMedia();
    mediaHomeEl.style.display = "none";
    mediaMusicViewerEl.style.display = "none";
    mediaImageViewerEl.style.display = "flex";
    mediaLS = mediaO;
    mediaImgEl.src = dir[mediaLS].content;
    openedMediaNameEl.innerText = " - " + dir[mediaLS].name;
    mediaZoom = 1;
  } else if (dir[mediaO].type == "music") {
    cancelOpenMedia();
    mediaHomeEl.style.display = "none";
    mediaImageViewerEl.style.display = "none";
    mediaMusicViewerEl.style.display = "flex";
    mediaLS = mediaO;
    openedMediaNameEl.innerText = " - " + dir[mediaLS].name;
    mediaMusicEl.src = dir[mediaO].source;
  }
}

function cancelOpenMedia() {
  openMediaPopupEl.style.transform = "rotateX(90deg)";
  openMediaPopupEl.style.opacity = "0%";
  setTimeout(() => {
    openMediaPopupEl.style.display = "none";
  }, 100);
}

function openMedia() {
  tletkuTalkSnd.currentTime = 0;
  tletkuTalkSnd.play();
  openMediaPopupEl.style.display = "block";
  setTimeout(() => {
    openMediaPopupEl.style.transform = "none";
    openMediaPopupEl.style.opacity = "100%";
  }, 1);
  mediaO = null;
}

mediaBarEl.addEventListener("mousedown", (event) => {
  media.drag = true;
  offsetX = event.offsetX;
  offsetY = event.offsetY;
});

function okDeleteImage() {
  cancelDeleteImage();
  if (dir[paintLS].parent == "desktop") {
    document.getElementById(dir[paintLS].id).outerHTML = "";
  }
  let ix = paintLS;
  dir.splice(paintLS, 1);
  dir = dir.map(item => {
    if (item.parent > ix) {
      return { ...item, parent: item.parent - 1 };
    }
    return item;
  });
  closePaint();
}

function cancelDeleteImage() {
  deleteImagePopupEl.style.transform = "rotateX(90deg)";
  deleteImagePopupEl.style.opacity = "0%";
  setTimeout(() => {
    deleteImagePopupEl.style.display = "none";
  }, 100);
}

function okOpenImage() {
  cancelOpenImage();
  paintLS = paintO;
  const img = new Image();
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    img.crossOrigin = "anonymous";
    ctx.drawImage(img, 0, 0);
  };
  img.src = dir[paintLS].content;
}

function cancelOpenImage() {
  openImagePopupEl.style.transform = "rotateX(90deg)";
  openImagePopupEl.style.opacity = "0%";
  setTimeout(() => {
    openImagePopupEl.style.display = "none";
  }, 100);
}

function openPaint() {
  selectWin(paintEl);
  paintEl.style.display = "flex";
  setTimeout(() => {
    paintEl.style.transform = "none";
    paintEl.style.opacity = "100%";
  }, 1);
  paintTaskEl.style.display = "flex";
  setTimeout(() => {
    paintTaskEl.style.transform = "none";
    paintTaskEl.style.opacity = "100%";
  }, 1);
  if (paint.maximized) {
    maximizePaint();
  }
  paintEl.style.marginLeft = Math.floor(Math.random() * 50) + "vw";
  paintEl.style.marginTop = Math.floor(Math.random() * 50) + "vh";
  paint.open = true;
  paintToolsEl.value = "pencil";
  canvasWidthEl.value = 500;
  canvasHeightEl.value = 300;
  canvas.width = 500;
  canvas.height = 300;
  paintColor = "#000000";
  paintSize = 1;
  paintBrush = "round";
  ctx.globalCompositeOperation = "source-over";
  eraserIconEl.src = "images/pencil.png";
  shapeIndex = 0;
  paintTextInputEl.value = "";
  paintBold = false;
  paintItalic = false;
  paintFontEl.value = "ubuntu, system-ui";
  paintHistory = [
    {
      width: 500,
      height: 300,
      value: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAEsCAYAAAA1u0HIAAAQAElEQVR4AezVi3IsNRIEUMf+/0cvEICvL55xP5RqqepsLGDPdKdUpxyR//vwPwIECBAgQGB7AYW+/QoNQIAAAQIEPj6yhU6YAAECBAgQmCKg0KcwO4QAAQIECGQFdi70rIx0AgQIECCwkYBC32hZrkqAAAECBF4JKPRXMj4nQIAAAQIbCSj0jZblqgQIECBA4JWAQn8lk/1cOgECBAgQGCqg0IdyCiNAgAABAs8IKPRn3LOnSidAgACBdgIKvd3KDUyAAAECFQUUesWtZmeSToAAAQILCij0BZfiSgQIECBA4KyAQj8r5vmsgHQCBAgQuCSg0C+xeYkAAQIECKwloNDX2ofbZAWkEyBAoKyAQi+7WoMRIECAQCcBhd5p22bNCkgnQIDAgwIK/UF8RxMgQIAAgVECCn2UpBwCWQHpBAgQeCug0N/y+JIAAQIECOwhoND32JNbEsgKSCdAYHsBhb79Cg1AgAABAgQ+PhS6vwICBNIC8gkQmCCg0CcgO4IAAQIECKQFFHpaWD4BAlkB6QQI/CWg0P9i8C8CBAgQILC3gELfe39uT4BAVkA6gW0EFPo2q3JRAgQIECDwWkChv7bxDQECBLIC0gkMFFDoAzFFESBAgACBpwQU+lPyziVAgEBWQHozAYXebOHGJUCAAIGaAgq95l5NRYAAgayA9OUEFPpyK3EhAgQIECBwXkChnzfzBgECBAhkBaRfEFDoF9C8QoAAAQIEVhNQ6KttxH0IECBAICtQNF2hF12ssQgQIECgl4BC77Vv0xIgQIBAVuCxdIX+GL2DCRAgQIDAOAGFPs5SEgECBAgQyAq8SVfob3B8RYAAAQIEdhFQ6Ltsyj0JECBAgMAbgQGF/ibdVwQIECBAgMAUAYU+hdkhBAgQIEAgK7B8oWfHl06AAAECBGoIKPQaezQFAQIECDQXaF7ozbdvfAIECBAoI6DQy6zSIAQIECDQWUChB7cvmgABAgQIzBJQ6LOknUOAAAECBIICCj2Im42WToAAAQIEPgUU+qeFnwgQIECAwLYCCn3b1WUvLp0AAQIE9hJQ6Hvty20JECBAgMC3Agr9WxYfZgWkEyBAgMBoAYU+WlQeAQIECBB4QEChP4DuyKyAdAIECHQUUOgdt25mAgQIECgnoNDLrdRAWQHpBAgQWFNAoa+5F7ciQIAAAQKnBBT6KS4PE8gKSCdAgMBVAYV+Vc57BAgQIEBgIQGFvtAyXIVAVkA6AQKVBRR65e2ajQABAgTaCCj0Nqs2KIGsgHQCBJ4VUOjP+judAAECBAgMEVDoQxiFECCQFZBOgMBPAgr9JyHfEyBAgACBDQQU+gZLckUCBLIC0glUEFDoFbZoBgIECBBoL6DQ2/8JACBAICsgncAcAYU+x9kpBAgQIEAgKqDQo7zCCRAgkBWQTuAfAYX+j4T/EiBAgACBjQUU+sbLc3UCBAhkBaTvJKDQd9qWuxIgQIAAgRcCCv0FjI8JECBAICsgfayAQh/rKY0AAQIECDwioNAfYXcoAQIECGQF+qUr9H47NzEBAgQIFBRQ6AWXaiQCBAgQyAqsmK7QV9yKOxEgQIAAgZMCCv0kmMcJECBAgEBW4Fq6Qr/m5i0CBAgQILCUgEJfah0uQ4AAAQIErgkcLfRr6d4iQIAAAQIEpggo9CnMDiFAgAABAlmBNQo9O6N0AgQIECBQXkChl1+xAQkQIECgg0CHQu+wRzMSIECAQHMBhd78D8D4BAgQIFBDQKHf3aP3CRAgQIDAAgIKfYEluAIBAgQIELgroNDvCmbfl06AAAECBA4JKPRDTB4iQIAAAQJrCyj0tfeTvZ10AgQIECgjoNDLrNIgBAgQINBZQKF33n52dukECBAgMFFAoU/EdhQBAgQIEEgJKPSUrNysgHQCBAgQ+CKg0L9w+IUAAQIECOwpoND33JtbZwWkEyBAYDsBhb7dylyYAAECBAj8V0Ch/9fEJwSyAtIJECAQEFDoAVSRBAgQIEBgtoBCny3uPAJZAekECDQVUOhNF29sAgQIEKgloNBr7dM0BLIC0gkQWFZAoS+7GhcjQIAAAQLHBRT6cStPEiCQFZBOgMANAYV+A8+rBAgQIEBgFQGFvsom3IMAgayAdALFBRR68QUbjwABAgR6CCj0Hns2JQECWQHpBB4XUOiPr8AFCBAgQIDAfQGFft9QAgECBLIC0gkcEFDoB5A8QoAAAQIEVhdQ6KtvyP0IECCQFZBeREChF1mkMQgQIECgt4BC771/0xMgQCArIH2agEKfRu0gAgQIECCQE1DoOVvJBAgQIJAVkP6LgEL/BcOPBAgQIEBgVwGFvuvm3JsAAQIEsgKbpSv0zRbmugQIECBA4DsBhf6dis8IECBAgEBWYHi6Qh9OKpAAAQIECMwXUOjzzZ1IgAABAgSGC3wp9OHpAgkQIECAAIEpAgp9CrNDCBAgQIBAVmBioWcHkU6AAAECBDoLKPTO2zc7AQIECJQRKFPoZTZiEAIECBAgcEFAoV9A8woBAgQIEFhNQKEf2oiHCBAgQIDA2gIKfe39uB0BAgQIEDgkoNAPMWUfkk6AAAECBO4KKPS7gt4nQIAAAQILCCj0BZaQvYJ0AgQIEOggoNA7bNmMBAgQIFBeQKGXX3F2QOkECBAgsIaAQl9jD25BgAABAgRuCSj0W3xezgpIJ0CAAIGjAgr9qJTnCBAgQIDAwgIKfeHluFpWQDoBAgQqCSj0Sts0CwECBAi0FVDobVdv8KyAdAIECMwVUOhzvZ1GgAABAgQiAgo9wiqUQFZAOgECBH4XUOi/i/idAAECBAhsKKDQN1yaKxPICkgnQGBHAYW+49bcmQABAgQI/Cag0H8D8SsBAlkB6QQIZAQUesZVKgECBAgQmCqg0KdyO4wAgayAdAJ9BRR6392bnAABAgQKCSj0Qss0CgECWQHpBFYWUOgrb8fdCBAgQIDAQQGFfhDKYwQIEMgKSCdwT0Ch3/PzNgECBAgQWEJAoS+xBpcgQIBAVkB6fQGFXn/HJiRAgACBBgIKvcGSjUiAAIGsgPQVBBT6CltwBwIECBAgcFNAod8E9DoBAgQIZAWkHxNQ6MecPEWAAAECBJYWUOhLr8flCBAgQCArUCddodfZpUkIECBAoLGAQm+8fKMTIECAQFZgZrpCn6ntLAIECBAgEBJQ6CFYsQQIECBAICvwNV2hf/XwGwECBAgQ2FJAoW+5NpcmQIAAAQJfBUYX+td0vxEgQIAAAQJTBBT6FGaHECBAgACBrMBehZ61kE6AAAECBLYVUOjbrs7FCRAgQIDAp4BC/7TwEwECBAgQ2FZAoW+7OhcnQIAAAQKfAgr90yL7k3QCBAgQIBAUUOhBXNEECBAgQGCWgEKfJZ09RzoBAgQINBdQ6M3/AIxPgAABAjUEFHqNPWankE6AAAECywso9OVX5IIECBAgQOBnAYX+s5EnsgLSCRAgQGCAgEIfgCiCAAECBAg8LaDQn96A87MC0gkQINBEQKE3WbQxCRAgQKC2gEKvvV/TZQWkEyBAYBkBhb7MKlyEAAECBAhcF1Do1+28SSArIJ0AAQInBBT6CSyPEiBAgACBVQUU+qqbcS8CWQHpBAgUE1DoxRZqHAIECBDoKaDQe+7d1ASyAtIJEJguoNCnkzuQAAECBAiMF1Do400lEiCQFZBOgMA3Agr9GxQfESBAgACB3QQU+m4bc18CBLIC0glsKqDQN12caxMgQIAAgV8FFPqvGn4mQIBAVkA6gZiAQo/RCiZAgAABAvMEFPo8aycRIEAgKyC9tYBCb71+wxMgQIBAFQGFXmWT5iBAgEBWQPriAgp98QW5HgECBAgQOCKg0I8oeYYAAQIEsgLSbwso9NuEAggQIECAwPMCCv35HbgBAQIECGQFWqQr9BZrNiQBAgQIVBdQ6NU3bD4CBAgQyAoskq7QF1mEaxAgQIAAgTsCCv2OnncJECBAgEBW4HC6Qj9M5UECBAgQILCugEJfdzduRoAAAQIEDgtcKvTD6R4kQIAAAQIEpggo9CnMDiFAgAABAlmBBQs9O7B0AgQIECBQUUChV9yqmQgQIECgnUC7Qm+3YQMTIECAQAsBhd5izYYkQIAAgeoCCn3ohoURIECAAIFnBBT6M+5OJUCAAAECQwUU+lDObJh0AgQIECDwSkChv5LxOQECBAgQ2EhAoW+0rOxVpRMgQIDAzgIKfeftuTsBAgQIEPhbQKH/DeE/WQHpBAgQIJAVUOhZX+kECBAgQGCKgEKfwuyQrIB0AgQIEFDo/gYIECBAgEABAYVeYIlGyApIJ0CAwA4CCn2HLbkjAQIECBD4QUCh/wDkawJZAekECBAYI6DQxzhKIUCAAAECjwoo9Ef5HU4gKyCdAIE+Agq9z65NSoAAAQKFBRR64eUajUBWQDoBAisJKPSVtuEuBAgQIEDgooBCvwjnNQIEsgLSCRA4J6DQz3l5mgABAgQILCmg0Jdci0sRIJAVkE6gnoBCr7dTExEgQIBAQwGF3nDpRiZAICsgncATAgr9CXVnEiBAgACBwQIKfTCoOAIECGQFpBP4XkChf+/iUwIECBAgsJWAQt9qXS5LgACBrID0fQUU+r67c3MCBAgQIPCvgEL/l8IPBAgQIJAVkJ4UUOhJXdkECBAgQGCSgEKfBO0YAgQIEMgKdE9X6N3/AsxPgAABAiUEFHqJNRqCAAECBLIC66cr9PV35IYECBAgQOBHAYX+I5EHCBAgQIBAVmBEukIfoSiDAAECBAg8LKDQH16A4wkQIECAwAiB14U+Il0GAQIECBAgMEVAoU9hdggBAgQIEMgKPFXo2amkEyBAgACBZgIKvdnCjUuAAAECNQVqFnrNXZmKAAECBAi8FFDoL2l8QYAAAQIE9hFQ6Od35Q0CBAgQILCcgEJfbiUuRIAAAQIEzgso9PNm2TekEyBAgACBCwIK/QKaVwgQIECAwGoCCn21jWTvI50AAQIEigoo9KKLNRYBAgQI9BJQ6L32nZ1WOgECBAg8JqDQH6N3MAECBAgQGCeg0MdZSsoKSCdAgACBNwIK/Q2OrwgQIECAwC4CCn2XTblnVkA6AQIENhdQ6Jsv0PUJECBAgMCfAgr9TwX/EMgKSCdAgEBcQKHHiR1AgAABAgTyAgo9b+wEAlkB6QQIEPhDQKH/geD/BAgQIEBgdwGFvvsG3Z9AVkA6AQKbCCj0TRblmgQIECBA4J2AQn+n4zsCBLIC0gkQGCag0IdRCiJAgAABAs8JKPTn7J1MgEBWQDqBVgIKvdW6DUuAAAECVQUUetXNmosAgayAdAKLCSj0xRbiOgQIECBA4IqAQr+i5h0CBAhkBaQTOC2g0E+TeYEAAQIECKwnoNDX24kbESBAICsgvaSAQi+5VkMRIECAQDcBhd5t4+YlQIBAVkD6QwIK/SF4xxIgQIAAgZECCn2kpiwCBAgQyApIfymg0F/S+IIAAQIECOwj8H8A9HYv3wAAAARJREFUAAD//1QF9fgAAAAGSURBVAMA6HoCWdxOZO0AAAAASUVORK5CYII="
    }
  ];
  paintHistoryIndex = 0;
  paintLS = null;
}

function okSaveArtwork() {
  lastId++;
  let newName = newArtworkNameInputEl.value;
  if (newName == "") {
    newName = "New Artwork";
  }
  let newArtworkContent = canvas.toDataURL();
  newArtworkContent = newArtworkContent.split("%%%");
  newArtworkContent = newArtworkContent.join("abc");
  let newArtwork = {
    id: lastId,
    name: newName,
    type: "image",
    parent: paintF,
    drag: false,
    content: newArtworkContent,
    width: canvas.width,
    height: canvas.height
  };
  dir.push(newArtwork);
  fileUsage += (newArtwork.content.length * 0.000000001) * 8;
  paintLS = dir.indexOf(newArtwork);
  if (newArtwork.parent == "desktop") {
    let newFolderEl = document.createElement("div");
    newFolderEl.id = newArtwork.id;
    newFolderEl.classList.add("desktopIcon");
    newFolderEl.style.marginLeft = Math.floor(Math.random() * 100) + "vw";
    newFolderEl.style.marginTop = Math.floor(Math.random() * 100) + "vh";
    let newFolderGraphicEl = document.createElement("img");
    newFolderGraphicEl.id = "graphic" + newArtwork.id;
    newFolderGraphicEl.src = newArtwork.content;
    newFolderGraphicEl.style.border = "1px solid black";
    newFolderGraphicEl.style.backgroundColor = "white";
    newFolderGraphicEl.draggable = false;
    newFolderEl.appendChild(newFolderGraphicEl);
    let folderNameEl = document.createElement("p");
    folderNameEl.id = "imageName" + newArtwork.id;
    folderNameEl.innerText = newArtwork.name;
    newFolderEl.appendChild(folderNameEl);
    desktopEl.appendChild(newFolderEl);
    newFolderEl.addEventListener("mousedown", () => {
      newArtwork.drag = true;
    });
    newFolderEl.addEventListener("click", () => {
      openMediaViewer();
      mediaO = dir.indexOf(newArtwork);
      okOpenMedia();
    });
    newFolderEl.addEventListener("contextmenu", () => {
      for (let j = 0; j < dir.length; j++) {
        if (dir[j].parent == "clipboard") {
          let ix = j;
          dir.splice(j, 1);
          dir = dir.map(item => {
            if (item.parent > ix) {
              return { ...item, parent: item.parent - 1 };
            }
            return item;
          });
        }
      }
      newFolderEl.outerHTML = "";
      newArtwork.parent = "clipboard";
      if (!clipboardE) {
        toggleClipboard();
      }
    });
    desktopEl.prepend(newFolderEl);
  }
  cancelSaveArtwork();
}

function cancelSaveArtwork() {
  saveArtworkPopupEl.style.transform = "rotateX(90deg)";
  saveArtworkPopupEl.style.opacity = "0%";
  setTimeout(() => {
    saveArtworkPopupEl.style.display = "none";
  }, 100);
}

function okNewArtwork() {
  cancelNewArtwork();
  canvasWidthEl.value = 500;
  canvasHeightEl.value = 300;
  canvas.width = 500;
  canvas.height = 300;
  ctx.clearRect(0, 0, 500, 300);
  paintHistory = [];
  paintHistoryIndex = 0;
  paintLS = null;
}

function cancelNewArtwork() {
  newArtworkPopupEl.style.transform = "rotateX(90deg)";
  newArtworkPopupEl.style.opacity = "0%";
  setTimeout(() => {
    newArtworkPopupEl.style.display = "none";
  }, 100);
}

async function uploadToCanvas() {
  const [fileHandle] = await window.showOpenFilePicker({
    types: [{ description: 'Images', accept: { 'image/*': ['.png', '.gif', '.jpeg', '.jpg'] } }],
  });

  const file = await fileHandle.getFile();
  const reader = new FileReader();

  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
  let newMemory = {
    width: canvas.width,
    height: canvas.height,
    value: canvas.toDataURL()
  };
  paintHistory[paintHistoryIndex + 1] = newMemory;
  paintHistoryIndex++;
}

function saveArtworkAs() {
  tletkuTalkSnd.currentTime = 0;
  tletkuTalkSnd.play();
  saveArtworkPopupEl.style.display = "block";
  setTimeout(() => {
    saveArtworkPopupEl.style.transform = "none";
    saveArtworkPopupEl.style.opacity = "100%";
  }, 1);
  paintF = "desktop";
  newArtworkNameInputEl.value = "";
}

function checkValuePAB() {
  if (PABEl.value == "data url") {
    copyToClipboard(canvas.toDataURL());
  } else if (PABEl.value == "download") {
    const imageURL = canvas.toDataURL("image/png");

    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'ofekalModaImage.png';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else if (PABEl.value == "upload") {
    uploadToCanvas();
  } else if (PABEl.value == "new") {
    beepSnd.currentTime = 0;
    beepSnd.play();
    newArtworkPopupEl.style.display = "block";
    setTimeout(() => {
      newArtworkPopupEl.style.transform = "none";
      newArtworkPopupEl.style.opacity = "100%";
    }, 1);
  } else if (PABEl.value == "save") {
    if (paintLS || paintLS == 0) {
      dir[paintLS].content = canvas.toDataURL();
      dir[paintLS].width = canvas.width;
      dir[paintLS].height = canvas.height;
    } else {
      saveArtworkAs();
    }
  } else if (PABEl.value == "save as") {
    saveArtworkAs();
  } else if (PABEl.value == "open") {
    paintO = null;
    paintF = "desktop";
    tletkuTalkSnd.currentTime = 0;
    tletkuTalkSnd.play();
    openImagePopupEl.style.display = "block";
    setTimeout(() => {
      openImagePopupEl.style.transform = "none";
      openImagePopupEl.style.opacity = "100%";
    }, 1);
  } else if (PABEl.value == "delete") {
    if (paintLS || paintLS == 0) {
      beepSnd.currentTime = 0;
      beepSnd.play();
      deleteImagePopupEl.style.display = "block";
      setTimeout(() => {
        deleteImagePopupEl.style.transform = "none";
        deleteImagePopupEl.style.opacity = "100%";
      }, 1);
    }
  }
  PABEl.value = "file";
}

function writeText() {
  let rect = canvas.getBoundingClientRect();
  let newFont = paintSize + 5 + "px " + paintFontEl.value;
  if (paintBold) {
    newFont = "bold " + newFont;
  }
  if (paintItalic) {
    newFont = "italic " + newFont;
  }
  ctx.font = newFont;
  ctx.fillStyle = paintColor;

  ctx.fillText(paintTextInputEl.value, paintTextX - rect.left, paintTextY - rect.top + 50 + 30);
  let newMemory = {
    width: canvas.width,
    height: canvas.height,
    value: canvas.toDataURL()
  };
  paintHistory[paintHistoryIndex + 1] = newMemory;
  paintHistoryIndex++;
}

paintContentEl.addEventListener("mousemove", (event) => {
  let rect = paintContentEl.getBoundingClientRect();
  if (paintTextDrag) {
    paintTextX = event.clientX - rect.left;
    paintTextY = event.clientY - rect.top;
  }
});

document.addEventListener("mouseup", () => {
  paintTextDrag = false;
});

ctx.willReadFrequently = true;

function closeShapeMenu() {
  shapeMenuEl.style.transform = "rotateX(90deg)";
  shapeMenuEl.style.opacity = "0%";
  setTimeout(() => {
    shapeMenuEl.style.display = "none";
  }, 100);
}

function openShapeMenu() {
  shapeMenuEl.style.display = "block";
  setTimeout(() => {
    shapeMenuEl.style.transform = "none";
    shapeMenuEl.style.opacity = "100%";
  }, 1);
}

function undo() {
  paintHistoryIndex--;
  canvas.width = paintHistory[paintHistoryIndex].width;
  canvas.height = paintHistory[paintHistoryIndex].height;
  canvasWidthEl.value = paintHistory[paintHistoryIndex].width;
  canvasHeightEl.value = paintHistory[paintHistoryIndex].height;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const img = new Image();

  img.onload = function () {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  };

  img.src = paintHistory[paintHistoryIndex].value;
}

function getPixelColor(x, y) {
  let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imageData.data;
  // Each pixel takes 4 spots in the array (R, G, B, A)
  const index = (y * canvas.width + x) * 4;
  return [
    data[index],
    data[index + 1],
    data[index + 2],
    data[index + 3]
  ];
}

function toggleEraser() {
  if (ctx.globalCompositeOperation == "destination-out") {
    ctx.globalCompositeOperation = "source-over";
    eraserIconEl.src = "images/pencil.png";
  } else {
    ctx.globalCompositeOperation = "destination-out";
    eraserIconEl.src = "images/eraser.png";
  }
}

function closeSizePopup() {
  paintSizePopupEl.style.transform = "rotateX(90deg)";
  paintSizePopupEl.style.opacity = "0%";
  setTimeout(() => {
    paintSizePopupEl.style.display = "none";
  }, 100);
}

function openSizePopup() {
  paintSizePopupEl.style.display = "block";
  setTimeout(() => {
    paintSizePopupEl.style.transform = "none";
    paintSizePopupEl.style.opacity = "100%";
  }, 1);
}

function okNewColor() {
  cancelNewColor();
  paintColors.push("rgb(" + newColorRedEl.value + ", " + newColorGreenEl.value + ", " + newColorBlueEl.value + ")");
}

function cancelNewColor() {
  newColorPopupEl.style.transform = "90deg";
  newColorPopupEl.style.opacity = "0%";
  setTimeout(() => {
    newColorPopupEl.style.display = "none";
  }, 100);
  openColorPopup();
}

function newColor() {
  closeColorPopup();
  newColorPopupEl.style.display = "block";
  setTimeout(() => {
    newColorPopupEl.style.transform = "none";
    newColorPopupEl.style.opacity = "100%";
  }, 1);
}

function closeColorPopup() {
  colorPopupEl.style.transform = "rotateX(90deg)";
  colorPopupEl.style.opacity = "0%";
  setTimeout(() => {
    colorPopupEl.style.display = "none";
  }, 100);
}

function openColorPopup() {
  colorPopupEl.style.display = "block";
  setTimeout(() => {
    colorPopupEl.style.transform = "none";
    colorPopupEl.style.opacity = "100%";
  }, 1);
}

function rotateRight() {
  offCanvasEl.width = canvas.width;
  offCanvasEl.height = canvas.height;
  offCTX.drawImage(canvas, 0, 0);

  let oldWidth = canvas.width;
  let oldHeight = canvas.height;
  canvas.width = oldHeight;
  canvas.height = oldWidth;
  canvasWidthEl.value = canvas.width;
  canvasHeightEl.value = canvas.height;

  ctx.save();

  ctx.rotate(90 * Math.PI / 180);

  ctx.drawImage(offCanvasEl, 0, -canvas.width);
  ctx.restore();
  let newMemory = {
    width: canvas.width,
    height: canvas.height,
    value: canvas.toDataURL()
  };
  paintHistory[paintHistoryIndex + 1] = newMemory;
  paintHistoryIndex++;
}


function rotateLeft() {
  offCanvasEl.width = canvas.width;
  offCanvasEl.height = canvas.height;

  offCTX.drawImage(canvas, 0, 0);

  let oldWidth = canvas.width;
  let oldHeight = canvas.height;
  canvas.width = oldHeight;
  canvas.height = oldWidth;
  canvasWidthEl.value = canvas.width;
  canvasHeightEl.value = canvas.height;

  ctx.save();

  let radians = 270 * Math.PI / 180;

  ctx.rotate(radians);

  ctx.drawImage(offCanvasEl, -oldWidth, 0);
  ctx.restore();
  let newMemory = {
    width: canvas.width,
    height: canvas.height,
    value: canvas.toDataURL()
  };
  paintHistory[paintHistoryIndex + 1] = newMemory;
  paintHistoryIndex++;
}


canvasHeightEl.addEventListener("input", () => {
  canvas.height = Number(canvasHeightEl.value);
});

canvasHeightEl.addEventListener("change", () => {
  let newMemory = {
    width: canvas.width,
    height: canvas.height,
    value: canvas.toDataURL()
  };
  paintHistory[paintHistoryIndex + 1] = newMemory;
  paintHistoryIndex++;
});

canvasWidthEl.addEventListener("input", () => {
  canvas.width = Number(canvasWidthEl.value);
});

canvasWidthEl.addEventListener("change", () => {
  let newMemory = {
    width: canvas.width,
    height: canvas.height,
    value: canvas.toDataURL()
  };
  paintHistory[paintHistoryIndex + 1] = newMemory;
  paintHistoryIndex++;
});


function closePropertiesPopup() {
  propertiesPopupEl.style.transform = "rotateX(90deg)";
  propertiesPopupEl.style.opacity = "0%";
  setTimeout(() => {
    propertiesPopupEl.style.display = "none";
  }, 100);
}

function openPropertiesPopup() {
  propertiesPopupEl.style.display = "block";
  setTimeout(() => {
    propertiesPopupEl.style.transform = "none";
    propertiesPopupEl.style.opacity = "100%";
  }, 1);
}

canvas.width = 500;
canvas.height = 300;

function hexToRgba(hex) {
  const bigint = parseInt(hex.replace('#', ''), 16);
  return [
    (bigint >> 16) & 255, // Red
    (bigint >> 8) & 255,  // Green
    bigint & 255,         // Blue
    255                   // Alpha
  ];
}

function rgbToHex(color) {
  const values = color.match(/\d+/g);

  if (!values || values.length < 3) return null;

  const r = parseInt(values[0]);
  const g = parseInt(values[1]);
  const b = parseInt(values[2]);

  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function floodFill(ctx, startX, startY, newHexColor) {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const { width, height, data } = imageData;
  const newColor = hexToRgba(newHexColor);

  const getPixelPos = (x, y) => (y * width + x) * 4;
  const startPos = getPixelPos(startX, startY);
  const targetColor = [data[startPos], data[startPos + 1], data[startPos + 2], data[startPos + 3]];

  // Prevent infinite loop if target color is same as new color
  if (targetColor.every((v, i) => v === newColor[i])) return;

  const stack = [[startX, startY]];
  while (stack.length) {
    const [x, y] = stack.pop();
    const pos = getPixelPos(x, y);

    if (x >= 0 && x < width && y >= 0 && y < height &&
      data[pos] === targetColor[0] && data[pos + 1] === targetColor[1] &&
      data[pos + 2] === targetColor[2] && data[pos + 3] === targetColor[3]) {

      // Set new color
      data[pos] = newColor[0];
      data[pos + 1] = newColor[1];
      data[pos + 2] = newColor[2];
      if (ctx.globalCompositeOperation == "destination-out") {
        data[pos + 3] = "0";
      } else {
        data[pos + 3] = newColor[3];
      }

      // Add neighbors to stack
      stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
    }
  }
  ctx.putImageData(imageData, 0, 0);
}


canvas.addEventListener("click", (event) => {
  let rect = canvas.getBoundingClientRect();
  if (paintTool == "fill") {
    let color = paintColor;
    if (!color.startsWith("#")) {
      color = rgbToHex(color);
    }
    floodFill(ctx, event.clientX - rect.left, event.clientY - rect.top, color);
    setTimeout(() => {
      let newMemory = {
        width: canvas.width,
        height: canvas.height,
        value: canvas.toDataURL()
      };
      paintHistory[paintHistoryIndex + 1] = newMemory;
      paintHistoryIndex++;
    }, 1);
  } else if (paintTool == "eyedropper") {
    paintColor = "rgba(" + getPixelColor(event.clientX - rect.left, event.clientY - rect.top).join(", ") + ")";
  }
});

canvas.addEventListener("mouseleave", () => {
  draw = false;
  ctx.closePath();
});

document.addEventListener("mouseup", (event) => {
  if (paintTool == "shape" && shapes[shapeIndex].name == "Line" && draw) {
    ctx.strokeStyle = paintColor;
    ctx.lineWidth = paintSize;
    ctx.lineCap = "square";
    ctx.beginPath();
    ctx.moveTo(paintForLine.sx + 8, paintForLine.sy + 8);
    ctx.lineTo(paintForLine.ex + 8, paintForLine.ey + 8);
    ctx.stroke();
  } else if (paintTool == "shape" && shapes[shapeIndex].name == "Rectangle" && draw) {
    ctx.fillStyle = paintColor;
    ctx.fillRect(paintForLine.sx + 8, paintForLine.sy + 8, (paintForLine.ex + 8) - (paintForLine.sx + 8), (paintForLine.ey + 8) - (paintForLine.sy + 8));
  } else if (paintTool == "shape" && shapes[shapeIndex].name == "Circle" && draw) {
    ctx.fillStyle = paintColor;

    ctx.beginPath();

    ctx.arc(paintForLine.sx + 8, paintForLine.sy + 8, (paintForLine.ex + 8) - (paintForLine.sx + 8), 0, 2 * Math.PI);

    ctx.fill();
  }
  if (draw && event.target == canvas) {
    let newMemory = {
      width: canvas.width,
      height: canvas.height,
      value: canvas.toDataURL()
    };
    paintHistory[paintHistoryIndex + 1] = newMemory;
    paintHistoryIndex++;
  }
  draw = false;
  ctx.closePath();
  paintForLine.sx = 0;
  paintForLine.sy = 0;
  paintForLine.ex = 0;
  paintForLine.ey = 0;
});

canvas.addEventListener("mousemove", (event) => {
  let rect = canvas.getBoundingClientRect();
  if (draw && paintTool == "pencil") {
    if (paintBrush == "spray paint") {
      ctx.fillStyle = paintColor;
      let x = event.clientX - rect.left;
      let y = event.clientY - rect.top;
      for (let i = 0; i < paintSize * 2; i++) {
        ctx.fillRect(Math.floor(Math.random() * ((x + paintSize / 2) - (x - paintSize / 2) + 1) + (x - paintSize / 2)), Math.floor(Math.random() * ((y + paintSize / 2) - (y - paintSize / 2) + 1) + (y - paintSize / 2)), 1, 1);
      }
      ctx.fill();
    } else {
      ctx.strokeStyle = paintColor;
      ctx.lineWidth = paintSize;
      ctx.lineCap = paintBrush;
      ctx.lineTo(event.clientX - rect.left, event.clientY - rect.top);
      ctx.stroke();
    }
  }
  paintForLine.ex = event.clientX - rect.left;
  paintForLine.ey = event.clientY - rect.top;
});

canvas.addEventListener("mousedown", (event) => {
  draw = true;
  let rect = canvas.getBoundingClientRect();
  ctx.beginPath();
  ctx.moveTo(event.clientX - rect.left, event.clientY - rect.top);
  paintForLine.sx = event.clientX - rect.left;
  paintForLine.sy = event.clientY - rect.top;
});

document.addEventListener("mousemove", (event) => {
  for (let i = 0; i < stickyNotes.length; i++) {
    if (stickyNotes[i].drag) {
      document.getElementById("stickyNote" + stickyNotes[i].id).style.marginLeft = event.clientX - 25 + "px";
      document.getElementById("stickyNote" + stickyNotes[i].id).style.marginTop = event.clientY - 25 + "px";
    }
  }
});

function newStickyNote() {
  lastId++;
  let newStickyNote = {
    id: lastId,
    drag: false
  };
  stickyNotes.push(newStickyNote);
  let snColors = ["linear-gradient(#FFEEEE, #FFDDDD)", "linear-gradient(#EEFFEE, #DDFFDD)", "linear-gradient(#EEEEFF, #DDDDFF)", "linear-gradient(#FFFFEE, #FFFFDD)", "linear-gradient(#EEFFFF, #DDFFFF)", "linear-gradient(#FFEEFF, #FFDDFF)"];
  let newStickyNoteEl = document.createElement("div");
  newStickyNoteEl.id = "stickyNote" + newStickyNote.id;
  newStickyNoteEl.classList.add("stickyNote");
  newStickyNoteEl.style.marginLeft = Math.floor(Math.random() * 100) + "vw";
  newStickyNoteEl.style.marginTop = Math.floor(Math.random() * 100) + "vh";
  newStickyNoteEl.style.backgroundImage = snColors[Math.floor(Math.random() * snColors.length)];
  let newStickyNoteHeadingEl = document.createElement("div");
  newStickyNoteHeadingEl.classList.add("stickyHeading");
  let newStickyNoteTitleEl = document.createElement("h2");
  let newSNTitle;
  if (notepadLS) {
    newSNTitle = dir[notepadLS].name;
  }
  if (!newSNTitle) {
    newSNTitle = "Saved Note";
  }
  newStickyNoteTitleEl.innerText = newSNTitle;
  newStickyNoteTitleEl.setAttribute('contenteditable', 'true');
  newStickyNoteTitleEl.contenteditable = "true";
  newStickyNoteTitleEl.style.marginRight = "5px";
  newStickyNoteTitleEl.style.cursor = "url('images/text.png'), auto";
  newStickyNoteHeadingEl.appendChild(newStickyNoteTitleEl);
  let newStickyNoteDeleteBtnEl = document.createElement("button");
  newStickyNoteDeleteBtnEl.innerText = "X";
  newStickyNoteDeleteBtnEl.classList.add("stickyCloseBtn");
  newStickyNoteDeleteBtnEl.style.marginRight = "5px";
  newStickyNoteDeleteBtnEl.addEventListener("click", () => {
    newStickyNoteEl.outerHTML = "";
    stickyNotes.splice(stickyNotes.indexOf(newStickyNote), 1);
  });
  newStickyNoteHeadingEl.addEventListener("mousedown", (event) => {
    if (event.target != newStickyNoteDeleteBtnEl) {
      newStickyNote.drag = true;
    }
  });
  document.addEventListener("mouseup", () => {
    newStickyNote.drag = false;
  });
  newStickyNoteHeadingEl.appendChild(newStickyNoteDeleteBtnEl);
  newStickyNoteEl.appendChild(newStickyNoteHeadingEl);
  let newStickyNoteContentEl = document.createElement("div");
  let noteF = notepadContentVekEl.value;
  if (!noteF) {
    noteF = "Remember...";
  }
  newStickyNoteContentEl.innerText = noteF;
  newStickyNoteContentEl.classList.add("stickyContent");
  newStickyNoteContentEl.setAttribute('contenteditable', 'true');
  newStickyNoteEl.appendChild(newStickyNoteContentEl);
  desktopEl.prepend(newStickyNoteEl);
}

paintBarEl.addEventListener("mousedown", (event) => {
  paint.drag = true;
  offsetX = event.offsetX;
  offsetY = event.offsetY;
});

// myComputerDirEl.addEventListener("click", () => {
//   folderWinEl.style.display = "flex";
//   setTimeout(() => {
//     folderWinEl.style.transform = "none";
//     folderWinEl.style.opacity = "100%";
//   }, 1);
//   storageTaskEl.style.display = "flex";
//   setTimeout(() => {
//     storageTaskEl.style.transform = "none";
//     storageTaskEl.style.opacity = "100%";
//   }, 1);
//   if (folder.maximized) {
//     maximizeFolder();
//   }
//   folderWinEl.style.marginLeft = Math.floor(Math.random() * 50) + "vw";
//   folderWinEl.style.marginTop = Math.floor(Math.random() * 50) + "vh";
//   folder.open = true;
//   for (let i = 0; i < dir.length; i++) {
//     if (dir[i].id == 5) {
//       ls = i;
//     }
//   }
//   selectWin(folderWinEl);
// });

// myComputerDirEl.addEventListener("contextmenu", () => {
//   for (let i = 0; i < dir.length; i++) {
//     if (dir[i].id == 5) {
//       myComputerDirEl.outerHTML = "";
//       dir[i].parent = "clipboard";
//       if (!clipboardE) {
//         toggleClipboard();
//       }
//     }
//   }
// });

// myComputerDirEl.addEventListener("mousedown", () => {
//   for (let i = 0; i < dir.length; i++) {
//     if (dir[i].id == 5) {
//       dir[i].drag = true;
//     }
//   }
// });

function okDeleteDocument() {
  cancelDeleteDocument();
  if (dir[notepadLS].parent == "desktop") {
    document.getElementById(dir[notepadLS].id).outerHTML = "";
  }
  fileUsage -= dir[notepadLS].content.length * 0.000000001;
  let ix = notepadLS;
  dir.splice(notepadLS, 1);
  dir = dir.map(item => {
    if (item.parent > ix) {
      return { ...item, parent: item.parent - 1 };
    }
    return item;
  });
  closeNotepad();
}

function cancelDeleteDocument() {
  deleteDocumentPopupEl.style.transform = "rotateX(90deg)";
  deleteDocumentPopupEl.style.opacity = "0%";
  setTimeout(() => {
    deleteDocumentPopupEl.style.display = "none";
  }, 100);
}

function deleteDocument() {
  if (notepadLS || notepadLS == 0) {
    beepSnd.currentTime = 0;
    beepSnd.play();
    deleteDocumentPopupEl.style.display = "block";
    setTimeout(() => {
      deleteDocumentPopupEl.style.transform = "none";
      deleteDocumentPopupEl.style.opacity = "100%";
    }, 1);
  }
}

function okOpenDocument() {
  cancelOpenDocument();
  notepadLS = notepadO;
  notepadContentVekEl.value = dir[notepadLS].content;
}

function cancelOpenDocument() {
  openDocumentPopupEl.style.transform = "rotateX(90deg)";
  openDocumentPopupEl.style.opacity = "0%";
  setTimeout(() => {
    openDocumentPopupEl.style.display = "none";
  }, 100);
}

function openDocument() {
  notepadO = null;
  notepadF = "desktop";
  tletkuTalkSnd.currentTime = 0;
  tletkuTalkSnd.play();
  openDocumentPopupEl.style.display = "block";
  setTimeout(() => {
    openDocumentPopupEl.style.transform = "none";
    openDocumentPopupEl.style.opacity = "100%";
  }, 1);
}

function saveAsDocument() {
  notepadO = null;
  newDocumentNameInputEl.value = "";
  newDocumentFileExtensionEl.value = "document";
  notepadF = "desktop";
  tletkuTalkSnd.currentTime = 0;
  tletkuTalkSnd.play();
  saveDocumentPopupEl.style.display = "block";
  setTimeout(() => {
    saveDocumentPopupEl.style.transform = "none";
    saveDocumentPopupEl.style.opacity = "100%";
  }, 1);
}

function openNotepad() {
  selectWin(notepadEl);
  notepadEl.style.display = "flex";
  setTimeout(() => {
    notepadEl.style.transform = "none";
    notepadEl.style.opacity = "100%";
  }, 1);
  notepadTaskEl.style.display = "flex";
  setTimeout(() => {
    notepadTaskEl.style.transform = "none";
    notepadTaskEl.style.opacity = "100%";
  }, 1);
  if (notepad.maximized) {
    maximizeNotepad();
  }
  notepadEl.style.marginLeft = Math.floor(Math.random() * 50) + "vw";
  notepadEl.style.marginTop = Math.floor(Math.random() * 50) + "vh";
  notepad.open = true;
  notepadContentVekEl.value = "";
  notepadLS = null;
}

function okSaveDocument() {
  lastId++;
  let newName = newDocumentNameInputEl.value;
  if (newName == "") {
    newName = "New Document";
  }
  let newDocument = {
    id: lastId,
    name: newName,
    type: newDocumentFileExtensionEl.value,
    parent: notepadF,
    drag: false,
    content: notepadContentVekEl.value
  };
  dir.push(newDocument);
  fileUsage += newDocument.content.length * 0.000000001;
  notepadLS = dir.indexOf(newDocument);
  if (newDocument.parent == "desktop") {
    if (newDocument.type == "document") {
      let newFolderEl = document.createElement("div");
      newFolderEl.id = newDocument.id;
      newFolderEl.classList.add("desktopIcon");
      newFolderEl.style.marginLeft = event.clientX - 50 + "px";
      newFolderEl.style.marginTop = event.clientY - 50 + "px";
      let newFolderGraphicEl = document.createElement("img");
      newFolderGraphicEl.src = "images/notepad.png";
      newFolderGraphicEl.draggable = false;
      newFolderEl.appendChild(newFolderGraphicEl);
      let folderNameEl = document.createElement("p");
      folderNameEl.id = "documentName" + newDocument.id;
      folderNameEl.innerText = newDocument.name;
      newFolderEl.appendChild(folderNameEl);
      desktopEl.appendChild(newFolderEl);
      newFolderEl.addEventListener("mousedown", () => {
        newDocument.drag = true;
      });
      newFolderEl.addEventListener("click", () => {
        openNotepad();
        notepadLS = dir.indexOf(newDocument);
        notepadContentVekEl.value = newDocument.content;
      });
      newFolderEl.addEventListener("contextmenu", () => {
        for (let j = 0; j < dir.length; j++) {
          if (dir[j].parent == "clipboard") {
            let ix = j;
            dir.splice(j, 1);
            dir = dir.map(item => {
              if (item.parent > ix) {
                return { ...item, parent: item.parent - 1 };
              }
              return item;
            });
          }
        }
        newFolderEl.outerHTML = "";
        newDocument.parent = "clipboard";
        if (!clipboardE) {
          toggleClipboard();
        }
      });
    } else if (newDocument.type == "html") {
      let newDocumentEl = document.createElement("div");
      newDocumentEl.id = newDocument.id;
      newDocumentEl.classList.add("desktopIcon");
      newDocumentEl.style.marginLeft = Math.floor(Math.random() * 90) + "vw";
      newDocumentEl.style.marginTop = Math.floor(Math.random() * 90) + "vh";
      let newDocumentGraphicEl = document.createElement("img");
      newDocumentGraphicEl.id = "graphic" + newDocument.id;
      newDocumentGraphicEl.src = "images/html.svg";
      newDocumentGraphicEl.draggable = false;
      newDocumentEl.appendChild(newDocumentGraphicEl);
      let documentNameEl = document.createElement("p");
      documentNameEl.id = "htmlName" + newDocument.id;
      documentNameEl.innerText = newDocument.name;
      newDocumentEl.appendChild(documentNameEl);
      desktopEl.appendChild(newDocumentEl);
      newDocumentEl.addEventListener("mousedown", () => {
        newDocument.drag = true;
      });
      newDocumentEl.addEventListener("click", () => {
        openPrism();
        lastId++;
        let newTab = {
          id: lastId,
          href: "*con*" + newDocument.content
        };
        tabs.push(newTab);
        tabIndex = tabs.length - 1;
        aukaContentEl.srcdoc = newDocument.content;
      });
      newDocumentEl.addEventListener("contextmenu", () => {
        for (let i = 0; i < dir.length; i++) {
          if (dir[i].parent == "clipboard") {
            let ix = i;
            dir.splice(i, 1);
            dir = dir.map(item => {
              if (item.parent > ix) {
                return { ...item, parent: item.parent - 1 };
              }
              return item;
            });
          }
        }
        newDocumentEl.outerHTML = "";
        newDocument.parent = "clipboard";
        if (!clipboardE) {
          toggleClipboard();
        }
        closeFolder();
      });
    } else if (newDocument.type == "let") {
      let newDocumentEl = document.createElement("div");
      newDocumentEl.id = newDocument.id;
      newDocumentEl.classList.add("desktopIcon");
      newDocumentEl.style.marginLeft = Math.floor(Math.random() * 90) + "vw";
      newDocumentEl.style.marginTop = Math.floor(Math.random() * 90) + "vh";
      let newDocumentGraphicEl = document.createElement("img");
      newDocumentGraphicEl.id = "graphic" + newDocument.id;
      newDocumentGraphicEl.src = "images/let.png";
      newDocumentGraphicEl.draggable = false;
      newDocumentEl.appendChild(newDocumentGraphicEl);
      let documentNameEl = document.createElement("p");
      documentNameEl.id = "letName" + newDocument.id;
      documentNameEl.innerText = newDocument.name;
      newDocumentEl.appendChild(documentNameEl);
      desktopEl.appendChild(newDocumentEl);
      newDocumentEl.addEventListener("mousedown", () => {
        newDocument.drag = true;
      });
      newDocumentEl.addEventListener("click", () => {
        eval(newDocument.content);
      });
      newDocumentEl.addEventListener("contextmenu", () => {
        for (let i = 0; i < dir.length; i++) {
          if (dir[i].parent == "clipboard") {
            let ix = i;
            dir.splice(i, 1);
            dir = dir.map(item => {
              if (item.parent > ix) {
                return { ...item, parent: item.parent - 1 };
              }
              return item;
            });
          }
        }
        newDocumentEl.outerHTML = "";
        newDocument.parent = "clipboard";
        if (!clipboardE) {
          toggleClipboard();
        }
        closeFolder();
      });
    } else if (newDocument.type == "o++") {
      let newDocumentEl = document.createElement("div");
      newDocumentEl.id = newDocument.id;
      newDocumentEl.classList.add("desktopIcon");
      newDocumentEl.style.marginLeft = Math.floor(Math.random() * 90) + "vw";
      newDocumentEl.style.marginTop = Math.floor(Math.random() * 90) + "vh";
      let newDocumentGraphicEl = document.createElement("img");
      newDocumentGraphicEl.id = "graphic" + newDocument.id;
      newDocumentGraphicEl.src = "images/o++.png";
      newDocumentGraphicEl.draggable = false;
      newDocumentEl.appendChild(newDocumentGraphicEl);
      let documentNameEl = document.createElement("p");
      documentNameEl.id = "letName" + newDocument.id;
      documentNameEl.innerText = newDocument.name;
      newDocumentEl.appendChild(documentNameEl);
      desktopEl.appendChild(newDocumentEl);
      newDocumentEl.addEventListener("mousedown", () => {
        newDocument.drag = true;
      });
      newDocumentEl.addEventListener("click", () => {
        eval(newDocument.content);
      });
      newDocumentEl.addEventListener("contextmenu", () => {
        for (let i = 0; i < dir.length; i++) {
          if (dir[i].parent == "clipboard") {
            let ix = i;
            dir.splice(i, 1);
            dir = dir.map(item => {
              if (item.parent > ix) {
                return { ...item, parent: item.parent - 1 };
              }
              return item;
            });
          }
        }
        newDocumentEl.outerHTML = "";
        newDocument.parent = "clipboard";
        if (!clipboardE) {
          toggleClipboard();
        }
        closeFolder();
      });
    }
  }
  cancelSaveDocument();
}

function cancelSaveDocument() {
  saveDocumentPopupEl.style.transform = "rotateX(90deg)";
  saveDocumentPopupEl.style.opacity = "0%";
  setTimeout(() => {
    saveDocumentPopupEl.style.display = "none";
  }, 100);
}

function saveDocument() {
  if (notepadLS || notepadLS == 0) {
    dir[notepadLS].content = notepadContentVekEl.value;
  } else {
    saveAsDocument();
  }
}

async function uploadDocument() {
  try {
    const [fileHandle] = await window.showOpenFilePicker({
      types: [{
        description: 'Text Files',
        accept: { 'text/plain': ['.txt'] }
      }],
      multiple: false
    });

    const file = await fileHandle.getFile();

    const content = await file.text();
    notepadContentVekEl.value = content;
  } catch (err) {
    if (err.name !== 'AbortError') {
      console.error('File selection failed:', err);
    }
  }
}

function downloadDocument() {
  let textFileAsBlob = new Blob([notepadContentVekEl.value], { type: 'text/plain' });
  let downloadLink = document.createElement("a");
  downloadLink.download = "ofekalNaudnikDocument.txt";
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) {
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }
  downloadLink.click();
}

function okNewDocument() {
  cancelNewDocument();
  notepadContentVekEl.value = "";
  notepadLS = null;
}

function cancelNewDocument() {
  newDocumentPopupEl.style.transform = "rotateX(90deg)";
  newDocumentPopupEl.style.opacity = "0%";
  setTimeout(() => {
    newDocumentPopupEl.style.display = "none";
  }, 100);
}

function newDocument() {
  beepSnd.currentTime = 0;
  beepSnd.play();
  newDocumentPopupEl.style.display = "block";
  setTimeout(() => {
    newDocumentPopupEl.style.transform = "none";
    newDocumentPopupEl.style.opacity = "100%";
  }, 1);
}

applications.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

notepadBarEl.addEventListener("mousedown", (event) => {
  notepad.drag = true;
  offsetX = event.offsetX;
  offsetY = event.offsetY;
});

function okFactoryReset() {
  if (factoryResetInputEl.value == password) {
    cancelFactoryReset();
    setTimeout(() => {
      window.location.href = "#";
      startupScreenEl.style.filter = "brightness(0%)";
      setTimeout(() => {
        window.location.href = "https://joseph2.farleyengineeredsolutions.org/naudnik";
      }, 5000);
    }, 750);
  } else {
    errorSnd.currentTime = 0;
    errorSnd.play();
    frIncorrectPasswordEl.style.display = "block";
  }
}

function cancelFactoryReset() {
  factoryResetPopupEl.style.transform = "rotateX(90deg)";
  factoryResetPopupEl.style.opacity = "0%";
  setTimeout(() => {
    factoryResetPopupEl.style.display = "none";
  }, 100);
}

function factoryReset() {
  tletkuTalkSnd.currentTime = 0;
  tletkuTalkSnd.play();
  factoryResetPopupEl.style.display = "block";
  setTimeout(() => {
    factoryResetPopupEl.style.transform = "none";
    factoryResetPopupEl.style.opacity = "100%";
    factoryResetInputEl.value = "";
    factoryResetInputEl.focus();
    frIncorrectPasswordEl.style.display = "none";
  }, 1);
}

function okToSettingsAdministratorSettings() {
  if (adminSettingsInputEl.value == password) {
    cancelToSettingsAdministratorSettings();
    settingsHomeEl.style.display = "none";
    settingsNetworkAndInternetEl.style.display = "none";
    settingsStorageEl.style.display = "none";
    settingsStorageDetailsEl.style.display = "none";
    settingsPersonalizationEl.style.display = "none";
    settingsAccessibilityEl.style.display = "none";
    settingsAdminSettingsEl.style.display = "block";
  } else {
    asIncorrectPasswordEl.style.display = "block";
    errorSnd.currentTime = 0;
    errorSnd.play();
  }
}

function cancelToSettingsAdministratorSettings() {
  adminSettingsPopupEl.style.transform = "rotateX(90deg)";
  adminSettingsPopupEl.style.opacity = "0%";
  setTimeout(() => {
    adminSettingsPopupEl.style.display = "none";
  }, 100);
}

let askPrismSearchBarWidgetInputEl = document.getElementById("askPrismSearchBarWidgetInput");
let askPrismSearchBarWidgetEl = document.getElementById("askPrismSearchBarWidget");
let prismAskIconEl = document.getElementById("prismAskIcon");

askPrismSearchBarWidgetInputEl.addEventListener("keydown", () => {
  if (event.key == "Enter") {
    window.open(`https://isaacio.farleyengineeredsolutions.org/search?q=${askPrismSearchBarWidgetInputEl.value}`, "_blank");
  }
});

prismAskIconEl.addEventListener("mousedown", () => {
  askPrismWidget.drag = true;
});

document.addEventListener("mousemove", (event) => {
  if (askPrismWidget.drag) {
    askPrismSearchBarWidgetEl.style.marginLeft = event.clientX - 25 + "px";
    askPrismSearchBarWidgetEl.style.marginTop = event.clientY - 25 + "px";
  }
});

document.addEventListener("mouseup", () => {
  askPrismWidget.drag = false;
});

function randomTheme() {
  wallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];
  let themesArr = ["light", "dark"];
  theme = themesArr[Math.floor(Math.random() * themesArr.length)];
  let newColor = themeColors[Math.floor(Math.random() * themeColors.length)];
  themeColor = newColor.default;
  hoverThemeColor = newColor.hover;
  darkThemeColor = newColor.dark;
  let topLeft = ["top", "left"];
  windowBarPosition = topLeft[Math.floor(Math.random() * topLeft.length)];
  font = fonts[Math.floor(Math.random() * fonts.length)];
  folderGraphic = folderGraphics[Math.floor(Math.random() * folderGraphics.length)];
  tletkuTalkSnd.src = notificationSounds[Math.floor(Math.random() * notificationSounds.length)];
  tletkuTalkSnd.currentTime = 0;
  tletkuTalkSnd.play();
}

function saveTheme() {
  lastId++;
  let newTheme = {
    id: lastId,
    wallpaper: wallpaper,
    theme: theme,
    color: themeColor,
    hoverColor: hoverThemeColor,
    darkColor: darkThemeColor,
    windowBarPosition: windowBarPosition,
    font: font,
    folderGraphic: folderGraphic,
    notificationSnd: tletkuTalkSnd.src
  };
  themes.push(newTheme);
  let themeColor2 = newTheme.theme;
  if (themeColor2 == "light") {
    themeColor2 = "white";
  } else {
    themeColor2 = "#222222";
  }
  let newThemeEl = document.createElement("div");
  if (newTheme.windowBarPosition == "top") {
    newThemeEl.id = "theme" + newTheme.id;
    newThemeEl.classList.add("theme");
    newThemeEl.style.backgroundImage = "url('" + newTheme.wallpaper + "')";
    newThemeEl.innerHTML = `<div class="theme-win">
                  <div class="theme-win-bar" style="background-color:${newTheme.color} ;">
                    <p>My Favorite Ofekal Theme</p>
                  </div>
                  <div class="theme-win-content" style="background-color:${themeColor2} ;">
                    <img src="${newTheme.folderGraphic}" alt="Folder" draggable="false" class="theme-folder" />
                    <img src="${newTheme.folderGraphic}" alt="Folder" draggable="false" class="theme-folder" />
                    <img src="${newTheme.folderGraphic}" alt="Folder" draggable="false" class="theme-folder" />
                  </div>
                </div>
                <div class="theme-taskbar" style="background-color:${newTheme.color} ;"></div>`;
    themeContainerEl.appendChild(newThemeEl);
  } else {
    newThemeEl.id = "theme" + newTheme.id;
    newThemeEl.classList.add("theme");
    newThemeEl.style.backgroundImage = "url('" + newTheme.wallpaper + "')";
    newThemeEl.innerHTML = `<div class="theme-win side-theme-win">
                  <div class="theme-win-bar" style="background-color:${newTheme.color} ;"></div>
                  <div class="theme-win-content" style="background-color:${themeColor2} ;">
                    <img src="${newTheme.folderGraphic}" alt="Folder" draggable="false" class="theme-folder" />
                    <img src="${newTheme.folderGraphic}" alt="Folder" draggable="false" class="theme-folder" />
                    <img src="${newTheme.folderGraphic}" alt="Folder" draggable="false" class="theme-folder" />
                  </div>
                </div>
                <div class="theme-taskbar" style="background-color:${newTheme.color} ;">
                    <p>My Favorite Ofekal Theme</p>
                  </div>`;
    themeContainerEl.appendChild(newThemeEl);
  }
  newThemeEl.addEventListener("click", () => {
    wallpaper = newTheme.wallpaper;
    theme = newTheme.theme;
    themeColor = newTheme.color;
    hoverThemeColor = newTheme.hoverColor;
    darkThemeColor = newTheme.darkColor;
    windowBarPosition = newTheme.windowBarPosition;
    font = newTheme.font;
    folderGraphic = newTheme.folderGraphic;
    tletkuTalkSnd.src = newTheme.notificationSnd;
    tletkuTalkSnd.currentTime = 0;
    tletkuTalkSnd.play();
  });
  newThemeEl.addEventListener("contextmenu", () => {
    newThemeEl.outerHTML = "";
    themes.splice(themes.indexOf(newTheme), 1);
  });
}

function toTheme(id) {
  if (id == 0) {
    wallpaper = "images/wallpaper.png";
    theme = "light";
    themeColor = 'green';
    hoverThemeColor = 'lime';
    darkThemeColor = 'darkgreen';
    windowBarPosition = "top";
    font = "ubuntu";
    folderGraphic = "images/folder.png";
    tletkuTalkSnd.src = 'sounds/tletkuTalk.mp3';
    tletkuTalkSnd.currentTime = 0;
    tletkuTalkSnd.play();
  } else if (id == 1) {
    wallpaper = "images/wallpaper6.jpg";
    theme = "light";
    themeColor = 'blue';
    hoverThemeColor = 'lightblue';
    darkThemeColor = 'navy';
    windowBarPosition = "top";
    font = "verdana";
    folderGraphic = "images/folder2.png";
    tletkuTalkSnd.src = 'sounds/notification2.mp3';
    tletkuTalkSnd.currentTime = 0;
    tletkuTalkSnd.play();
  } else if (id == 2) {
    wallpaper = "images/wallpaper8.jpg";
    theme = "dark";
    themeColor = 'magenta';
    hoverThemeColor = 'pink';
    darkThemeColor = 'purple';
    windowBarPosition = "top";
    font = "monospace";
    folderGraphic = "images/folder3.png";
    tletkuTalkSnd.src = 'sounds/notification3.mp3';
    tletkuTalkSnd.currentTime = 0;
    tletkuTalkSnd.play();
  } else if (id == 3) {
    wallpaper = "images/wallpaper7.jpg";
    theme = "dark";
    themeColor = 'orange';
    hoverThemeColor = 'gold';
    darkThemeColor = 'coral';
    windowBarPosition = "left";
    font = "sans-serif";
    folderGraphic = "images/folder.png";
    tletkuTalkSnd.src = 'sounds/notification.mp3';
    tletkuTalkSnd.currentTime = 0;
    tletkuTalkSnd.play();
  }
}

function toStorageDetails() {
  settingsStorageEl.style.display = "none";
  settingsStorageDetailsEl.style.display = "block";
}

function openSettings() {
  selectWin(settingsEl);
  settingsEl.style.display = "flex";
  setTimeout(() => {
    settingsEl.style.transform = "none";
    settingsEl.style.opacity = "100%";
  }, 1);
  settingsTaskEl.style.display = "flex";
  setTimeout(() => {
    settingsTaskEl.style.transform = "none";
    settingsTaskEl.style.opacity = "100%";
  }, 1);
  if (settings.maximized) {
    maximizeSettings();
  }
  settingsEl.style.marginLeft = Math.floor(Math.random() * 50) + "vw";
  settingsEl.style.marginTop = Math.floor(Math.random() * 50) + "vh";
  settings.open = true;
  toSettingsHome();
}

for (let i = 0; i < hotspots.length; i++) {
  if (hotspots[i].available) {
    let newHotspotEl = document.createElement("div");
    newHotspotEl.id = "wifi" + hotspots[i].id;
    newHotspotEl.classList.add("hotspot");
    let newHotspotGraphicEl = document.createElement("img");
    if (hotspots[i].password) {
      newHotspotGraphicEl.src = "images/lockedWifi.png";
    } else {
      newHotspotGraphicEl.src = "images/wifi.png";
    }
    newHotspotGraphicEl.draggable = false;
    newHotspotEl.appendChild(newHotspotGraphicEl);
    let newHotspotNameEl = document.createElement("h2");
    newHotspotNameEl.innerText = hotspots[i].name;
    newHotspotEl.appendChild(newHotspotNameEl);
    let newHotspotJoinBtnEl = document.createElement("button");
    newHotspotJoinBtnEl.id = "btn" + hotspots[i].id;
    newHotspotJoinBtnEl.classList.add("coolBtn");
    newHotspotJoinBtnEl.innerText = "Connect";
    newHotspotJoinBtnEl.addEventListener("click", () => {
      if (newHotspotJoinBtnEl.innerText == "Connect") {
        if (hotspots[i].password) {
          internetLs = i;
          beepSnd.currentTime = 0;
          beepSnd.play();
          wifiPasswordPopupEl.style.display = "block";
          setTimeout(() => {
            wifiPasswordPopupEl.style.transform = "none";
            wifiPasswordPopupEl.style.opacity = "100%";
          }, 1);
          wifiPasswordInputEl.value = "";
          wifiPasswordInputEl.focus();
          wifiIncorrectPasswordEl.style.display = "none";
        } else {
          for (let j = 0; j < hotspots.length; j++) {
            if (hotspots[j].available) {
              document.getElementById("wifi" + hotspots[j].id).removeAttribute("style");
              document.getElementById("btn" + hotspots[j].id).innerText = "Connect";
              document.getElementById(hotspots[j].id).removeAttribute("style");
            }
          }
          newHotspotJoinBtnEl.innerText = "Disconnect";
          newHotspotEl.style.backgroundColor = "green";
          document.getElementById(hotspots[i].id).style.backgroundColor = "green";
          internet = true;
        }
      } else {
        for (let j = 0; j < hotspots.length; j++) {
          if (hotspots[j].available) {
            document.getElementById("wifi" + hotspots[j].id).removeAttribute("style");
            document.getElementById("btn" + hotspots[j].id).innerText = "Connect";
            document.getElementById(hotspots[j].id).removeAttribute("style");
          }
        }
        internet = false;
      }
    });
    newHotspotEl.appendChild(newHotspotJoinBtnEl);
    wifiListEl.appendChild(newHotspotEl);
  }
}

function toSettingsHome() {
  settingsHomeEl.style.display = "block";
  settingsNetworkAndInternetEl.style.display = "none";
  settingsStorageEl.style.display = "none";
  settingsStorageDetailsEl.style.display = "none";
  settingsPersonalizationEl.style.display = "none";
  settingsAccessibilityEl.style.display = "none";
  settingsAdminSettingsEl.style.display = "none";
}

function toSettingsNetworkAndInternet() {
  settingsHomeEl.style.display = "none";
  settingsNetworkAndInternetEl.style.display = "block";
  settingsStorageEl.style.display = "none";
  settingsStorageDetailsEl.style.display = "none";
  settingsPersonalizationEl.style.display = "none";
  settingsAccessibilityEl.style.display = "none";
  settingsAdminSettingsEl.style.display = "none";
}

function toSettingsStorage() {
  settingsHomeEl.style.display = "none";
  settingsNetworkAndInternetEl.style.display = "none";
  settingsStorageEl.style.display = "block";
  settingsStorageDetailsEl.style.display = "none";
  settingsPersonalizationEl.style.display = "none";
  settingsAccessibilityEl.style.display = "none";
  settingsAdminSettingsEl.style.display = "none";
}

function toSettingsPersonalization() {
  settingsHomeEl.style.display = "none";
  settingsNetworkAndInternetEl.style.display = "none";
  settingsStorageEl.style.display = "none";
  settingsStorageDetailsEl.style.display = "none";
  settingsPersonalizationEl.style.display = "block";
  settingsAccessibilityEl.style.display = "none";
  settingsAdminSettingsEl.style.display = "none";
}

function toSettingsAccessibility() {
  settingsHomeEl.style.display = "none";
  settingsNetworkAndInternetEl.style.display = "none";
  settingsStorageEl.style.display = "none";
  settingsStorageDetailsEl.style.display = "none";
  settingsPersonalizationEl.style.display = "none";
  settingsAccessibilityEl.style.display = "block";
  settingsAdminSettingsEl.style.display = "none";
}

function toSettingsAdministratorSettings() {
  if (password) {
    beepSnd.currentTime = 0;
    beepSnd.play();
    adminSettingsPopupEl.style.display = "block";
    setTimeout(() => {
      adminSettingsPopupEl.style.transform = "none";
      adminSettingsPopupEl.style.opacity = "100%";
    });
    asIncorrectPasswordEl.style.display = "none";
    adminSettingsInputEl.value = "";
    adminSettingsInputEl.focus();
  } else {
    settingsHomeEl.style.display = "none";
    settingsNetworkAndInternetEl.style.display = "none";
    settingsStorageEl.style.display = "none";
    settingsStorageDetailsEl.style.display = "none";
    settingsPersonalizationEl.style.display = "none";
    settingsAccessibilityEl.style.display = "none";
    settingsAdminSettingsEl.style.display = "block";
  }
}

settingsBarEl.addEventListener("mousedown", (event) => {
  settings.drag = true;
  offsetX = event.offsetX;
  offsetY = event.offsetY;
});

function toggleNewAlarmAMPM() {
  if (newAlarmAMPM == "AM") {
    newAlarmAMPM = "PM";
  } else {
    newAlarmAMPM = "AM";
  }
}

function okNewAlarm() {
  cancelNewAlarm();
  lastId++;
  let newAlarm = {
    id: lastId,
    hour: newAlarmHour,
    minute: newAlarmMinute,
    ampm: newAlarmAMPM,
    reminder: alarmTextInputEl.value
  };
  alarms.push(newAlarm);
  let newAlarmEl = document.createElement("div");
  newAlarmEl.id = "alarm" + newAlarm.id;
  newAlarmEl.classList.add("alarm");
  let newAlarmContentEl = document.createElement("h1");
  let minuteStr = newAlarm.minute;
  if (minuteStr < 10) {
    minuteStr = "0" + minuteStr;
  }
  newAlarmContentEl.innerText = newAlarm.hour + ":" + minuteStr + " " + newAlarm.ampm;
  newAlarmEl.appendChild(newAlarmContentEl);
  let spacer = document.createElement("br");
  newAlarmEl.appendChild(spacer);
  let alarmTextEl = document.createElement("h2");
  alarmTextEl.innerText = newAlarm.reminder;
  newAlarmEl.appendChild(alarmTextEl);
  let deleteAlarmBtnEl = document.createElement("button");
  deleteAlarmBtnEl.classList.add("coolBtn");
  deleteAlarmBtnEl.innerText = "Delete";
  deleteAlarmBtnEl.addEventListener("click", () => {
    newAlarmEl.outerHTML = "";
    alarms.splice(alarms.indexOf(newAlarm), 1);
  });
  newAlarmEl.appendChild(deleteAlarmBtnEl);
  alarmContainerEl.appendChild(newAlarmEl);
}

function cancelNewAlarm() {
  newAlarmPopupEl.style.transform = "rotateX(90deg)";
  newAlarmPopupEl.style.opacity = "0%";
  setTimeout(() => {
    newAlarmPopupEl.style.display = "none";
  }, 100);
}

function newAlarm() {
  beepSnd.currentTime = 0;
  beepSnd.play();
  newAlarmPopupEl.style.display = "block";
  setTimeout(() => {
    newAlarmPopupEl.style.transform = "none";
    newAlarmPopupEl.style.opacity = "100%";
  }, 1);
}

function lapStopwatch() {
  lastId++;
  let newLap = {
    id: lastId,
    hour: stopwatchHours,
    minute: stopwatchMinutes,
    second: stopwatchSeconds,
    milisecond: stopwatchMiliseconds
  };
  laps.push(newLap);
  let newLapEl = document.createElement("h1");
  newLapEl.id = newLap.id;
  newLapEl.classList.add("lap");
  newLapEl.innerHTML = newLap.hour + ":" + newLap.minute + ":" + newLap.second + ":<small>" + newLap.milisecond + "</small>";
  newLapEl.addEventListener("click", () => {
    stopwatchHours = newLap.hour;
    stopwatchMinutes = newLap.minute;
    stopwatchSeconds = newLap.second;
    stopwatchMiliseconds = newLap.milisecond;
  });
  newLapEl.addEventListener("contextmenu", () => {
    newLapEl.outerHTML = "";
    laps.splice(laps.indexOf(newLap), 1);
  });
  lapContainerEl.appendChild(newLapEl);
}

function resetStopwatch() {
  stopwatchMiliseconds = 0;
  stopwatchSeconds = 0;
  stopwatchMinutes = 0;
  stopwatchHours = 0;
}

function startStopwatch() {
  stopwatchTicking = !stopwatchTicking;
  if (stopwatchTicking) {
    startStopwatchBtnEl.innerText = "Pause";
  } else {
    startStopwatchBtnEl.innerText = "Start";
  }
}

function notify(from, message) {
  tletkuTalkSnd.currentTime = 0;
  tletkuTalkSnd.play();
  tletkuTalkE = true;
  tletkuGreeting = from;
  tletkuMessage = message;
  let newNotificationEl = document.createElement("div");
  newNotificationEl.classList.add("notification");
  let newNotificationIconEl = document.createElement("img");
  if (from == "Clock Says:") {
    newNotificationIconEl.src = "images/clock.png";
  } else if (from == "Toolbox Says:") {
    newNotificationIconEl.src = "images/toolbox.png";
  } else if (from == "codeWithTletku") {
    newNotificationIconEl.src = "images/toolbox.png";
    tletkuGreeting = "Hello There!";
  }
  newNotificationIconEl.draggable = "false";
  newNotificationEl.appendChild(newNotificationIconEl);
  let newMSG = message;
  if (newMSG.length > 25) {
    newMSG = message.substring(0, 25);
    newMSG += "...";
  }
  let newNotificationContentEl = document.createElement("p");
  newNotificationContentEl.innerText = newMSG;
  newNotificationEl.appendChild(newNotificationContentEl);
  newNotificationEl.addEventListener("click", () => {
    newNotificationEl.style.transform = "scale(0.7) translate(-300px, 0)";
    setTimeout(() => {
      newNotificationEl.outerHTML = "";
    }, 500);
  });
  notificationHistoryEl.appendChild(newNotificationEl);
}

function okNewTimer() {
  cancelNewTimer();
  lastId++;
  let totalTime = newTimerSeconds + (newTimerMinutes * 60) + ((newTimerHours * 60) * 60);
  let newTimer = {
    id: lastId,
    totalTime: totalTime,
    currentTime: totalTime,
    active: true
  };
  timers.push(newTimer);
  let newTimerEl = document.createElement("div");
  newTimerEl.id = "timer" + newTimer.id;
  newTimerEl.classList.add("timer");
  let spacer = document.createElement("br");
  newTimerEl.appendChild(spacer);
  let timerTimeEl = document.createElement("h1");
  newTimerEl.appendChild(timerTimeEl);
  let newTimerProgressBarEl = document.createElement("div");
  newTimerProgressBarEl.classList.add("timerProgressContainer");
  let newTimerProgressEl = document.createElement("div");
  newTimerProgressEl.classList.add("timerProgress");
  newTimerProgressBarEl.appendChild(newTimerProgressEl);
  newTimerEl.appendChild(newTimerProgressBarEl);
  let deleteTimerBtnEl = document.createElement("button");
  deleteTimerBtnEl.classList.add("coolBtn");
  deleteTimerBtnEl.classList.add("negBtn");
  deleteTimerBtnEl.innerText = "Delete";
  deleteTimerBtnEl.addEventListener("click", () => {
    newTimerEl.outerHTML = "";
    timers.splice(timers.indexOf(newTimer), 1);
  });
  newTimerEl.appendChild(deleteTimerBtnEl);
  let restartTimerBtnEl = document.createElement("button");
  restartTimerBtnEl.classList.add("coolBtn");
  restartTimerBtnEl.innerText = "Restart";
  restartTimerBtnEl.addEventListener("click", () => {
    newTimer.currentTime = newTimer.totalTime;
  });
  newTimerEl.appendChild(restartTimerBtnEl);
  let pauseTimerBtnEl = document.createElement("button");
  pauseTimerBtnEl.classList.add("coolBtn");
  pauseTimerBtnEl.innerText = "Pause";
  pauseTimerBtnEl.addEventListener("click", () => {
    newTimer.active = !newTimer.active;
    if (newTimer.active) {
      pauseTimerBtnEl.innerText = "Pause";
    } else {
      pauseTimerBtnEl.innerText = "Unpause";
    }
  });
  newTimerEl.appendChild(pauseTimerBtnEl);
  timerContainerEl.appendChild(newTimerEl);
}

function cancelNewTimer() {
  newTimerPopupEl.style.transform = "rotateX(90deg)";
  newTimerPopupEl.style.opacity = "0%";
  setTimeout(() => {
    newTimerPopupEl.style.display = "none";
  }, 100);
}

function newTimer() {
  beepSnd.currentTime = 0;
  beepSnd.play();
  newTimerPopupEl.style.display = "block";
  setTimeout(() => {
    newTimerPopupEl.style.transform = "none";
    newTimerPopupEl.style.opacity = "100%";
  }, 1);
}

function openClock() {
  selectWin(clockAppEl)
  clockAppEl.style.display = "flex";
  setTimeout(() => {
    clockAppEl.style.transform = "none";
    clockAppEl.style.opacity = "100%";
  }, 1);
  clockTaskEl.style.display = "flex";
  setTimeout(() => {
    clockTaskEl.style.transform = "none";
    clockTaskEl.style.opacity = "100%";
  }, 1);
  if (clock.maximized) {
    maximizeClock();
  }
  clockAppEl.style.marginLeft = Math.floor(Math.random() * 50) + "vw";
  clockAppEl.style.marginTop = Math.floor(Math.random() * 50) + "vh";
  clock.open = true;
  toClockHome();
}

function toggleClockWidget() {
  clockWidgetE = !clockWidgetE;
}

document.addEventListener("mousemove", (event) => {
  if (clockDrag) {
    clockWidgetEl.style.marginLeft = event.clientX - 125 + "px";
    clockWidgetEl.style.marginTop = event.clientY - 125 + "px";
  }
});

document.addEventListener("mouseup", () => {
  clockDrag = false;
});

clockWidgetEl.addEventListener("mousedown", () => {
  clockDrag = true;
});

function setClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDeg = ((seconds / 60) * 360) + 90;
  const minuteDeg = ((minutes / 60) * 360) + 90;
  const hourDeg = ((hours / 12) * 360) + 90;

  for (let i = 0; i < secondHand.length; i++) {
    secondHand[i].style.transform = `rotate(${secondDeg}deg)`;
  }
  for (let i = 0; i < minuteHand.length; i++) {
    minuteHand[i].style.transform = `rotate(${minuteDeg}deg)`;
  }
  for (let i = 0; i < hourHand.length; i++) {
    hourHand[i].style.transform = `rotate(${hourDeg}deg)`;
  }
}
setClock(); // Initialize on page load   

function toClockHome() {
  clockHomeEl.style.display = "block";
  clockTimerEl.style.display = "none";
  clockStopwatchEl.style.display = "none";
  clockAlarmEl.style.display = "none";
}

function toClockTimer() {
  clockHomeEl.style.display = "none";
  clockTimerEl.style.display = "block";
  clockStopwatchEl.style.display = "none";
  clockAlarmEl.style.display = "none";
}

function toClockStopwatch() {
  clockHomeEl.style.display = "none";
  clockTimerEl.style.display = "none";
  clockStopwatchEl.style.display = "block";
  clockAlarmEl.style.display = "none";
}

function toClockAlarm() {
  clockHomeEl.style.display = "none";
  clockTimerEl.style.display = "none";
  clockStopwatchEl.style.display = "none";
  clockAlarmEl.style.display = "block";
}

function calculate() {
  math = eval(math);
  lastId++;
  let newItem = {
    id: lastId,
    content: math
  };
  calculator.history.push(newItem);
  let newItemEl = document.createElement("p");
  newItemEl.innerText = math;
  newItemEl.addEventListener("click", () => {
    math = newItem.content;
    toggleHistory();
  });
  newItemEl.addEventListener("contextmenu", () => {
    calculator.history.splice(calculator.history.indexOf(newItem), 1);
    newItemEl.outerHTML = "";
  });
  historyVekEl.appendChild(newItemEl);
}

function toggleHistory() {
  calcHistoryOpenE = !calcHistoryOpenE;
  if (calcHistoryOpenE) {
    historyEl.style.width = "calc(100% - 70px)";
  } else {
    historyEl.style.width = 0;
  }
}

function openPrism(goto) {
  selectWin(prismEl);
  prismEl.style.display = "flex";
  setTimeout(() => {
    prismEl.style.transform = "none";
    prismEl.style.opacity = "100%";
  }, 1);
  prismTaskEl.style.display = "flex";
  setTimeout(() => {
    prismTaskEl.style.transform = "none";
    prismTaskEl.style.opacity = "100%";
  }, 1);
  if (prism.maximized) {
    maximizePrism();
  }
  prismEl.style.marginLeft = Math.floor(Math.random() * 50) + "vw";
  prismEl.style.marginTop = Math.floor(Math.random() * 50) + "vh";
  if (goto) {
    aukaContentEl.src = goto;
  } else {
    aukaContentEl.src = "https://isaacio.farleyengineeredsolutions.org/browser/";
  }
  prism.open = true;
}

passwordEl.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() == "enter") {
    submit();
  }
});

function submit() {
  if (passwordEl.value == password) {
    lockBlockEl.style.display = "none";
    startupSnd.currentTime = 0;
    startupSnd.play();
    window.location.href = "#desktop";
    desktopEl.style.filter = "none";
    desktopEl.style.backdropFilter = "none";
    taskbarEl.style.marginTop = "calc(100vh - 60px)";
    taskbarEl.style.transform = "none";
    taskbarEl.style.opacity = "100%";
    if (!setupE) {
      openSetup();
      setTimeout(() => {
        setupEl.style.transition = "0.2s";
      }, 2500);
    }
  } else {
    errorSnd.currentTime = 0;
    errorSnd.play();
    lockBlockEl.style.display = "block";
  }
}

folderContentVekEl.addEventListener("contextmenu", (event) => {
  if (event.target == folderContentVekEl) {
    for (let i = 0; i < dir.length; i++) {
      if (dir[i].parent == "clipboard") {
        dir[i].parent = ls;
        if (dir[i].parent == "desktop") {
          if (dir[i].type == "folder") {
            let newFolderEl = document.createElement("div");
            newFolderEl.id = dir[i].id;
            newFolderEl.classList.add("desktopIcon");
            newFolderEl.style.marginLeft = Math.floor(Math.random() * 90) + "vw";
            newFolderEl.style.marginTop = Math.floor(Math.random() * 90) + "vh";
            let newFolderGraphicEl = document.createElement("img");
            newFolderGraphicEl.id = "graphic" + dir[i].id;
            newFolderGraphicEl.src = folderGraphic;
            newFolderGraphicEl.draggable = false;
            newFolderEl.appendChild(newFolderGraphicEl);
            let folderNameEl = document.createElement("p");
            folderNameEl.id = "folderName" + dir[i].id;
            folderNameEl.innerText = dir[i].name;
            newFolderEl.appendChild(folderNameEl);
            desktopEl.appendChild(newFolderEl);
            newFolderEl.addEventListener("mousedown", () => {
              dir[i].drag = true;
            });
            newFolderEl.addEventListener("click", () => {
              folderWinEl.style.display = "flex";
              setTimeout(() => {
                folderWinEl.style.transform = "none";
                folderWinEl.style.opacity = "100%";
              }, 1);
              storageTaskEl.style.display = "flex";
              setTimeout(() => {
                storageTaskEl.style.transform = "none";
                storageTaskEl.style.opacity = "100%";
              }, 1);
              if (folder.maximized) {
                maximizeFolder();
              }
              folderWinEl.style.marginLeft = Math.floor(Math.random() * 50) + "vw";
              folderWinEl.style.marginTop = Math.floor(Math.random() * 50) + "vh";
              folder.open = true;
              ls = i;
            });
            newFolderEl.addEventListener("contextmenu", () => {
              for (let j = 0; j < dir.length; j++) {
                if (dir[j].parent == "clipboard") {
                  let ix = j;
                  dir.splice(j, 1);
                  dir = dir.map(item => {
                    if (item.parent > ix) {
                      return { ...item, parent: item.parent - 1 };
                    }
                    return item;
                  });
                }
              }
              newFolderEl.outerHTML = "";
              dir[i].parent = "clipboard";
              if (!clipboardE) {
                toggleClipboard();
              }
              closeFolder();
            });
          } else if (dir[i].type == "document") {
            let newFolderEl = document.createElement("div");
            newFolderEl.id = dir[i].id;
            newFolderEl.classList.add("desktopIcon");
            newFolderEl.style.marginLeft = Math.floor(Math.random() * 90) + "vw";
            newFolderEl.style.marginTop = Math.floor(Math.random() * 90) + "vh";
            let newFolderGraphicEl = document.createElement("img");
            newFolderGraphicEl.id = "graphic" + dir[i].id;
            newFolderGraphicEl.src = "images/notepad.png";
            newFolderGraphicEl.draggable = false;
            newFolderEl.appendChild(newFolderGraphicEl);
            let folderNameEl = document.createElement("p");
            folderNameEl.id = "documentName" + dir[i].id;
            folderNameEl.innerText = dir[i].name;
            newFolderEl.appendChild(folderNameEl);
            desktopEl.appendChild(newFolderEl);
            newFolderEl.addEventListener("mousedown", () => {
              dir[i].drag = true;
            });
            newFolderEl.addEventListener("click", () => {
              openNotepad();
              notepadLS = i;
              notepadContentVekEl.value = dir[i].content;
            });
            newFolderEl.addEventListener("contextmenu", () => {
              for (let j = 0; j < dir.length; j++) {
                if (dir[j].parent == "clipboard") {
                  let ix = j;
                  dir.splice(j, 1);
                  dir = dir.map(item => {
                    if (item.parent > ix) {
                      return { ...item, parent: item.parent - 1 };
                    }
                    return item;
                  });
                }
              }
              newFolderEl.outerHTML = "";
              dir[i].parent = "clipboard";
              if (!clipboardE) {
                toggleClipboard();
              }
              closeNotepad();
            });
          } else if (dir[i].type == "html") {
            let newFolderEl = document.createElement("div");
            newFolderEl.id = dir[i].id;
            newFolderEl.classList.add("desktopIcon");
            newFolderEl.style.marginLeft = Math.floor(Math.random() * 90) + "vw";
            newFolderEl.style.marginTop = Math.floor(Math.random() * 90) + "vh";
            let newFolderGraphicEl = document.createElement("img");
            newFolderGraphicEl.id = "graphic" + dir[i].id;
            newFolderGraphicEl.src = "images/html.svg";
            newFolderGraphicEl.draggable = false;
            newFolderEl.appendChild(newFolderGraphicEl);
            let folderNameEl = document.createElement("p");
            folderNameEl.id = "htmlName" + dir[i].id;
            folderNameEl.innerText = dir[i].name;
            newFolderEl.appendChild(folderNameEl);
            desktopEl.appendChild(newFolderEl);
            newFolderEl.addEventListener("mousedown", () => {
              dir[i].drag = true;
            });
            newFolderEl.addEventListener("click", () => {
              openPrism();
              lastId++;
              let newTab = {
                id: lastId,
                href: "*con*" + dir[i].content
              };
              tabs.push(newTab);
              tabIndex = tabs.length - 1;
              aukaContentEl.srcdoc = dir[i].content;
            });
            newFolderEl.addEventListener("contextmenu", () => {
              for (let j = 0; j < dir.length; j++) {
                if (dir[j].parent == "clipboard") {
                  let ix = j;
                  dir.splice(j, 1);
                  dir = dir.map(item => {
                    if (item.parent > ix) {
                      return { ...item, parent: item.parent - 1 };
                    }
                    return item;
                  });
                }
              }
              newFolderEl.outerHTML = "";
              dir[i].parent = "clipboard";
              if (!clipboardE) {
                toggleClipboard();
              }
              closeNotepad();
            });
          } else if (dir[i].type == "let") {
            let newFolderEl = document.createElement("div");
            newFolderEl.id = dir[i].id;
            newFolderEl.classList.add("desktopIcon");
            newFolderEl.style.marginLeft = Math.floor(Math.random() * 90) + "vw";
            newFolderEl.style.marginTop = Math.floor(Math.random() * 90) + "vh";
            let newFolderGraphicEl = document.createElement("img");
            newFolderGraphicEl.id = "graphic" + dir[i].id;
            newFolderGraphicEl.src = "images/let.png";
            newFolderGraphicEl.draggable = false;
            newFolderEl.appendChild(newFolderGraphicEl);
            let folderNameEl = document.createElement("p");
            folderNameEl.id = "letName" + dir[i].id;
            folderNameEl.innerText = dir[i].name;
            newFolderEl.appendChild(folderNameEl);
            desktopEl.appendChild(newFolderEl);
            newFolderEl.addEventListener("mousedown", () => {
              dir[i].drag = true;
            });
            newFolderEl.addEventListener("click", () => {
              eval(dir[i].content);
            });
            newFolderEl.addEventListener("contextmenu", () => {
              for (let j = 0; j < dir.length; j++) {
                if (dir[j].parent == "clipboard") {
                  let ix = j;
                  dir.splice(j, 1);
                  dir = dir.map(item => {
                    if (item.parent > ix) {
                      return { ...item, parent: item.parent - 1 };
                    }
                    return item;
                  });
                }
              }
              newFolderEl.outerHTML = "";
              dir[i].parent = "clipboard";
              if (!clipboardE) {
                toggleClipboard();
              }
              closeNotepad();
            });
          } else if (dir[i].type == "o++") {
            let newFolderEl = document.createElement("div");
            newFolderEl.id = dir[i].id;
            newFolderEl.classList.add("desktopIcon");
            newFolderEl.style.marginLeft = Math.floor(Math.random() * 90) + "vw";
            newFolderEl.style.marginTop = Math.floor(Math.random() * 90) + "vh";
            let newFolderGraphicEl = document.createElement("img");
            newFolderGraphicEl.id = "graphic" + dir[i].id;
            newFolderGraphicEl.src = "images/o++.png";
            newFolderGraphicEl.draggable = false;
            newFolderEl.appendChild(newFolderGraphicEl);
            let folderNameEl = document.createElement("p");
            folderNameEl.id = "letName" + dir[i].id;
            folderNameEl.innerText = dir[i].name;
            newFolderEl.appendChild(folderNameEl);
            desktopEl.appendChild(newFolderEl);
            newFolderEl.addEventListener("mousedown", () => {
              dir[i].drag = true;
            });
            newFolderEl.addEventListener("click", () => {
              eval(dir[i].content);
            });
            newFolderEl.addEventListener("contextmenu", () => {
              for (let j = 0; j < dir.length; j++) {
                if (dir[j].parent == "clipboard") {
                  let ix = j;
                  dir.splice(j, 1);
                  dir = dir.map(item => {
                    if (item.parent > ix) {
                      return { ...item, parent: item.parent - 1 };
                    }
                    return item;
                  });
                }
              }
              newFolderEl.outerHTML = "";
              dir[i].parent = "clipboard";
              if (!clipboardE) {
                toggleClipboard();
              }
              closeNotepad();
            });
          } else if (dir[i].type == "image") {
            let newFolderEl = document.createElement("div");
            newFolderEl.id = dir[i].id;
            newFolderEl.classList.add("desktopIcon");
            newFolderEl.style.marginLeft = event.clientX - 50 + "px";
            newFolderEl.style.marginTop = event.clientY - 50 + "px";
            let newFolderGraphicEl = document.createElement("img");
            newFolderGraphicEl.id = "graphic" + dir[i].id;
            newFolderGraphicEl.src = dir[i].content;
            newFolderGraphicEl.style.border = "1px solid black";
            newFolderGraphicEl.style.backgroundColor = "white";
            newFolderGraphicEl.draggable = false;
            newFolderEl.appendChild(newFolderGraphicEl);
            let folderNameEl = document.createElement("p");
            folderNameEl.id = "imageName" + dir[i].id;
            folderNameEl.innerText = dir[i].name;
            newFolderEl.appendChild(folderNameEl);
            desktopEl.appendChild(newFolderEl);
            newFolderEl.addEventListener("mousedown", () => {
              dir[i].drag = true;
            });
            newFolderEl.addEventListener("click", () => {
              openMediaViewer();
              mediaO = i;
              okOpenMedia();
            });
            newFolderEl.addEventListener("contextmenu", () => {
              for (let j = 0; j < dir.length; j++) {
                if (dir[j].parent == "clipboard") {
                  let ix = j;
                  dir.splice(j, 1);
                  dir = dir.map(item => {
                    if (item.parent > ix) {
                      return { ...item, parent: item.parent - 1 };
                    }
                    return item;
                  });
                }
              }
              newFolderEl.outerHTML = "";
              dir[i].parent = "clipboard";
              if (!clipboardE) {
                toggleClipboard();
              }
            });
            desktopEl.prepend(newFolderEl);
          } else if (dir[i].type == "music") {
            let newFolderEl = document.createElement("div");
            newFolderEl.id = dir[i].id;
            newFolderEl.classList.add("desktopIcon");
            newFolderEl.style.marginLeft = event.clientX - 50 + "px";
            newFolderEl.style.marginTop = event.clientY - 50 + "px";
            let newFolderGraphicEl = document.createElement("img");
            newFolderGraphicEl.id = "graphic" + dir[i].id;
            newFolderGraphicEl.src = "images/music.png";
            newFolderGraphicEl.draggable = false;
            newFolderEl.appendChild(newFolderGraphicEl);
            let folderNameEl = document.createElement("p");
            folderNameEl.id = "musicName" + dir[i].id;
            folderNameEl.innerText = dir[i].name;
            newFolderEl.appendChild(folderNameEl);
            desktopEl.appendChild(newFolderEl);
            newFolderEl.addEventListener("mousedown", () => {
              dir[i].drag = true;
            });
            newFolderEl.addEventListener("click", () => {
              openMediaViewer();
              mediaO = i;
              okOpenMedia();
            });
            newFolderEl.addEventListener("contextmenu", () => {
              for (let j = 0; j < dir.length; j++) {
                if (dir[j].parent == "clipboard") {
                  let ix = j;
                  dir.splice(j, 1);
                  dir = dir.map(item => {
                    if (item.parent > ix) {
                      return { ...item, parent: item.parent - 1 };
                    }
                    return item;
                  });
                }
              }
              newFolderEl.outerHTML = "";
              dir[i].parent = "clipboard";
              if (!clipboardE) {
                toggleClipboard();
              }
            });
            desktopEl.prepend(newFolderEl);
          }
        }
      }
      if (clipboardE) {
        toggleClipboard();
      }
    }
  }
});

desktopEl.addEventListener("contextmenu", (event) => {
  if (event.target == desktopEl || event.target == selectionEl) {
    for (let i = 0; i < dir.length; i++) {
      if (dir[i].parent == "clipboard") {
        dir[i].parent = "desktop";
        if (clipboardE) {
          toggleClipboard();
        }
        if (dir[i].type == "folder") {
          let newFolderEl = document.createElement("div");
          newFolderEl.id = dir[i].id;
          newFolderEl.classList.add("desktopIcon");
          newFolderEl.style.marginLeft = event.clientX - 50 + "px";
          newFolderEl.style.marginTop = event.clientY - 50 + "px";
          let newFolderGraphicEl = document.createElement("img");
          newFolderGraphicEl.id = "graphic" + dir[i].id;
          newFolderGraphicEl.src = folderGraphic;
          newFolderGraphicEl.draggable = false;
          newFolderEl.appendChild(newFolderGraphicEl);
          let folderNameEl = document.createElement("p");
          folderNameEl.id = "folderName" + dir[i].id;
          folderNameEl.innerText = dir[i].name;
          newFolderEl.appendChild(folderNameEl);
          desktopEl.appendChild(newFolderEl);
          newFolderEl.addEventListener("mousedown", () => {
            dir[i].drag = true;
          });
          newFolderEl.addEventListener("click", () => {
            folderWinEl.style.display = "flex";
            setTimeout(() => {
              folderWinEl.style.transform = "none";
              folderWinEl.style.opacity = "100%";
            }, 1);
            storageTaskEl.style.display = "flex";
            setTimeout(() => {
              storageTaskEl.style.transform = "none";
              storageTaskEl.style.opacity = "100%";
            }, 1);
            if (folder.maximized) {
              maximizeFolder();
            }
            folderWinEl.style.marginLeft = Math.floor(Math.random() * 50) + "vw";
            folderWinEl.style.marginTop = Math.floor(Math.random() * 50) + "vh";
            folder.open = true;
            ls = i;
          });
          newFolderEl.addEventListener("contextmenu", () => {
            for (let j = 0; j < dir.length; j++) {
              if (dir[j].parent == "clipboard") {
                let ix = j;
                dir.splice(j, 1);
                dir = dir.map(item => {
                  if (item.parent > ix) {
                    return { ...item, parent: item.parent - 1 };
                  }
                  return item;
                });
              }
            }
            newFolderEl.outerHTML = "";
            dir[i].parent = "clipboard";
            if (!clipboardE) {
              toggleClipboard();
            }
          });
        } else if (dir[i].type == "document") {
          let newFolderEl = document.createElement("div");
          newFolderEl.id = dir[i].id;
          newFolderEl.classList.add("desktopIcon");
          newFolderEl.style.marginLeft = event.clientX - 50 + "px";
          newFolderEl.style.marginTop = event.clientY - 50 + "px";
          let newFolderGraphicEl = document.createElement("img");
          newFolderGraphicEl.src = "images/notepad.png";
          newFolderGraphicEl.draggable = false;
          newFolderEl.appendChild(newFolderGraphicEl);
          let folderNameEl = document.createElement("p");
          folderNameEl.id = "documentName" + dir[i].id;
          folderNameEl.innerText = dir[i].name;
          newFolderEl.appendChild(folderNameEl);
          desktopEl.appendChild(newFolderEl);
          newFolderEl.addEventListener("mousedown", () => {
            dir[i].drag = true;
          });
          newFolderEl.addEventListener("click", () => {
            openNotepad();
            notepadLS = i;
            notepadContentVekEl.value = dir[i].content;
          });
          newFolderEl.addEventListener("contextmenu", () => {
            for (let j = 0; j < dir.length; j++) {
              if (dir[j].parent == "clipboard") {
                let ix = j;
                dir.splice(j, 1);
                dir = dir.map(item => {
                  if (item.parent > ix) {
                    return { ...item, parent: item.parent - 1 };
                  }
                  return item;
                });
              }
            }
            newFolderEl.outerHTML = "";
            dir[i].parent = "clipboard";
            if (!clipboardE) {
              toggleClipboard();
            }
          });
        } else if (dir[i].type == "html") {
          let newFolderEl = document.createElement("div");
          newFolderEl.id = dir[i].id;
          newFolderEl.classList.add("desktopIcon");
          newFolderEl.style.marginLeft = event.clientX - 50 + "px";
          newFolderEl.style.marginTop = event.clientY - 50 + "px";
          let newFolderGraphicEl = document.createElement("img");
          newFolderGraphicEl.src = "images/html.svg";
          newFolderGraphicEl.draggable = false;
          newFolderEl.appendChild(newFolderGraphicEl);
          let folderNameEl = document.createElement("p");
          folderNameEl.id = "htmlName" + dir[i].id;
          folderNameEl.innerText = dir[i].name;
          newFolderEl.appendChild(folderNameEl);
          desktopEl.appendChild(newFolderEl);
          newFolderEl.addEventListener("mousedown", () => {
            dir[i].drag = true;
          });
          newFolderEl.addEventListener("click", () => {
            openPrism();
            lastId++;
            let newTab = {
              id: lastId,
              href: "*con*" + dir[i].content
            };
            tabs.push(newTab);
            tabIndex = tabs.length - 1;
            aukaContentEl.srcdoc = dir[i].content;
          });
          newFolderEl.addEventListener("contextmenu", () => {
            for (let j = 0; j < dir.length; j++) {
              if (dir[j].parent == "clipboard") {
                let ix = j;
                dir.splice(j, 1);
                dir = dir.map(item => {
                  if (item.parent > ix) {
                    return { ...item, parent: item.parent - 1 };
                  }
                  return item;
                });
              }
            }
            newFolderEl.outerHTML = "";
            dir[i].parent = "clipboard";
            if (!clipboardE) {
              toggleClipboard();
            }
          });
        } else if (dir[i].type == "let") {
          let newFolderEl = document.createElement("div");
          newFolderEl.id = dir[i].id;
          newFolderEl.classList.add("desktopIcon");
          newFolderEl.style.marginLeft = event.clientX - 50 + "px";
          newFolderEl.style.marginTop = event.clientY - 50 + "px";
          let newFolderGraphicEl = document.createElement("img");
          newFolderGraphicEl.src = "images/let.png";
          newFolderGraphicEl.draggable = false;
          newFolderEl.appendChild(newFolderGraphicEl);
          let folderNameEl = document.createElement("p");
          folderNameEl.id = "letName" + dir[i].id;
          folderNameEl.innerText = dir[i].name;
          newFolderEl.appendChild(folderNameEl);
          desktopEl.appendChild(newFolderEl);
          newFolderEl.addEventListener("mousedown", () => {
            dir[i].drag = true;
          });
          newFolderEl.addEventListener("click", () => {
            eval(dir[i].content)
          });
          newFolderEl.addEventListener("contextmenu", () => {
            for (let j = 0; j < dir.length; j++) {
              if (dir[j].parent == "clipboard") {
                let ix = j;
                dir.splice(j, 1);
                dir = dir.map(item => {
                  if (item.parent > ix) {
                    return { ...item, parent: item.parent - 1 };
                  }
                  return item;
                });
              }
            }
            newFolderEl.outerHTML = "";
            dir[i].parent = "clipboard";
            if (!clipboardE) {
              toggleClipboard();
            }
          });
        } else if (dir[i].type == "o++") {
          let newFolderEl = document.createElement("div");
          newFolderEl.id = dir[i].id;
          newFolderEl.classList.add("desktopIcon");
          newFolderEl.style.marginLeft = event.clientX - 50 + "px";
          newFolderEl.style.marginTop = event.clientY - 50 + "px";
          let newFolderGraphicEl = document.createElement("img");
          newFolderGraphicEl.src = "images/o++.png";
          newFolderGraphicEl.draggable = false;
          newFolderEl.appendChild(newFolderGraphicEl);
          let folderNameEl = document.createElement("p");
          folderNameEl.id = "letName" + dir[i].id;
          folderNameEl.innerText = dir[i].name;
          newFolderEl.appendChild(folderNameEl);
          desktopEl.appendChild(newFolderEl);
          newFolderEl.addEventListener("mousedown", () => {
            dir[i].drag = true;
          });
          newFolderEl.addEventListener("click", () => {
            eval(dir[i].content)
          });
          newFolderEl.addEventListener("contextmenu", () => {
            for (let j = 0; j < dir.length; j++) {
              if (dir[j].parent == "clipboard") {
                let ix = j;
                dir.splice(j, 1);
                dir = dir.map(item => {
                  if (item.parent > ix) {
                    return { ...item, parent: item.parent - 1 };
                  }
                  return item;
                });
              }
            }
            newFolderEl.outerHTML = "";
            dir[i].parent = "clipboard";
            if (!clipboardE) {
              toggleClipboard();
            }
          });
        } else if (dir[i].type == "image") {
          let newFolderEl = document.createElement("div");
          newFolderEl.id = dir[i].id;
          newFolderEl.classList.add("desktopIcon");
          newFolderEl.style.marginLeft = event.clientX - 50 + "px";
          newFolderEl.style.marginTop = event.clientY - 50 + "px";
          let newFolderGraphicEl = document.createElement("img");
          newFolderGraphicEl.id = "graphic" + dir[i].id;
          newFolderGraphicEl.src = dir[i].content;
          newFolderGraphicEl.style.border = "1px solid black";
          newFolderGraphicEl.style.backgroundColor = "white";
          newFolderGraphicEl.draggable = false;
          newFolderEl.appendChild(newFolderGraphicEl);
          let folderNameEl = document.createElement("p");
          folderNameEl.id = "imageName" + dir[i].id;
          folderNameEl.innerText = dir[i].name;
          newFolderEl.appendChild(folderNameEl);
          desktopEl.appendChild(newFolderEl);
          newFolderEl.addEventListener("mousedown", () => {
            dir[i].drag = true;
          });
          newFolderEl.addEventListener("click", () => {
            openMediaViewer();
            mediaO = i;
            okOpenMedia();
          });
          newFolderEl.addEventListener("contextmenu", () => {
            for (let j = 0; j < dir.length; j++) {
              if (dir[j].parent == "clipboard") {
                let ix = j;
                dir.splice(j, 1);
                dir = dir.map(item => {
                  if (item.parent > ix) {
                    return { ...item, parent: item.parent - 1 };
                  }
                  return item;
                });
              }
            }
            newFolderEl.outerHTML = "";
            dir[i].parent = "clipboard";
            if (!clipboardE) {
              toggleClipboard();
            }
          });
          desktopEl.prepend(newFolderEl);
        } else if (dir[i].type == "music") {
          let newFolderEl = document.createElement("div");
          newFolderEl.id = dir[i].id;
          newFolderEl.classList.add("desktopIcon");
          newFolderEl.style.marginLeft = event.clientX - 50 + "px";
          newFolderEl.style.marginTop = event.clientY - 50 + "px";
          let newFolderGraphicEl = document.createElement("img");
          newFolderGraphicEl.src = "images/music.png";
          newFolderGraphicEl.draggable = false;
          newFolderEl.appendChild(newFolderGraphicEl);
          let folderNameEl = document.createElement("p");
          folderNameEl.id = "musicName" + dir[i].id;
          folderNameEl.innerText = dir[i].name;
          newFolderEl.appendChild(folderNameEl);
          desktopEl.appendChild(newFolderEl);
          newFolderEl.addEventListener("mousedown", () => {
            dir[i].drag = true;
          });
          newFolderEl.addEventListener("click", () => {
            openMediaViewer();
            mediaO = i;
            okOpenMedia();
          });
          newFolderEl.addEventListener("contextmenu", () => {
            for (let j = 0; j < dir.length; j++) {
              if (dir[j].parent == "clipboard") {
                let ix = j;
                dir.splice(j, 1);
                dir = dir.map(item => {
                  if (item.parent > ix) {
                    return { ...item, parent: item.parent - 1 };
                  }
                  return item;
                });
              }
            }
            newFolderEl.outerHTML = "";
            dir[i].parent = "clipboard";
            if (!clipboardE) {
              toggleClipboard();
            }
          });
          desktopEl.prepend(newFolderEl);
        }
      }
    }
  }
});

function toggleClipboard() {
  clipboardE = !clipboardE;
  if (clipboardE) {
    clipboardEl.style.marginTop = "calc(100vh - 220px)";
  } else {
    clipboardEl.style.marginTop = "100vh";
  }
}

function okWifi() {
  if (wifiPasswordInputEl.value == hotspots[internetLs].password) {
    cancelWifi();
    wifiIncorrectPasswordEl.style.display = "none";
    for (let j = 0; j < hotspots.length; j++) {
      if (hotspots[j].available) {
        document.getElementById("wifi" + hotspots[j].id).removeAttribute("style");
        document.getElementById("btn" + hotspots[j].id).innerText = "Connect";
        document.getElementById(hotspots[j].id).removeAttribute("style");
      }
    }
    document.getElementById(hotspots[internetLs].id).style.backgroundColor = "green";
    document.getElementById("wifi" + hotspots[internetLs].id).style.backgroundColor = "green";
    internet = true;
    document.getElementById("btn" + hotspots[internetLs].id).innerText = "Disconnect";
  } else {
    errorSnd.currentTime = 0;
    errorSnd.play();
    wifiIncorrectPasswordEl.style.display = "block";
  }
}

function cancelWifi() {
  wifiPasswordPopupEl.style.transform = "rotateX(90deg)";
  wifiPasswordPopupEl.style.opacity = "0%";
  setTimeout(() => {
    wifiPasswordPopupEl.style.display = "none";
  }, 100);
}

for (let i = 0; i < hotspots.length; i++) {
  if (hotspots[i].available) {
    let newHotspotEl = document.createElement("div");
    newHotspotEl.id = hotspots[i].id;
    newHotspotEl.classList.add("setupHotspot");
    let newHotspotGraphicEl = document.createElement("img");
    if (hotspots[i].password) {
      newHotspotGraphicEl.src = "images/lockedWifi.png";
    } else {
      newHotspotGraphicEl.src = "images/wifi.png";
    }
    newHotspotGraphicEl.draggable = false;
    let newHotspotNameEl = document.createElement("p");
    newHotspotNameEl.innerText = hotspots[i].name;
    newHotspotEl.appendChild(newHotspotNameEl);
    newHotspotEl.appendChild(newHotspotGraphicEl);
    setupHotspotsEl.appendChild(newHotspotEl);
    if (hotspots[i].password && hotspots[i].available) {
      newHotspotEl.addEventListener("click", () => {
        internetLs = i;
        beepSnd.currentTime = 0;
        beepSnd.play();
        wifiPasswordPopupEl.style.display = "block";
        setTimeout(() => {
          wifiPasswordPopupEl.style.transform = "none";
          wifiPasswordPopupEl.style.opacity = "100%";
        }, 1);
        wifiPasswordInputEl.value = "";
        wifiPasswordInputEl.focus();
        wifiIncorrectPasswordEl.style.display = "none";
      });
    } else if (hotspots[i].available) {
      newHotspotEl.addEventListener("click", () => {
        for (let j = 0; j < hotspots.length; j++) {
          if (hotspots[j].available) {
            document.getElementById("wifi" + hotspots[j].id).removeAttribute("style");
            document.getElementById("btn" + hotspots[j].id).innerText = "Connect";
            document.getElementById(hotspots[j].id).removeAttribute("style");
          }
        }
        newHotspotEl.style.backgroundColor = "green";
        document.getElementById("wifi" + hotspots[i].id).style.backgroundColor = "green";
        internet = true;
      });
    }
    newHotspotEl.addEventListener("contextmenu", () => {
      for (let j = 0; j < hotspots.length; j++) {
        if (hotspots[j].available) {
          document.getElementById("wifi" + hotspots[j].id).removeAttribute("style");
          document.getElementById("btn" + hotspots[j].id).innerText = "Connect";
          document.getElementById(hotspots[j].id).removeAttribute("style");
        }
      }
      internet = false;
    });
  }
}

function toSSSeven() {
  ssSixEl.style.transform = "rotateY(90deg)";
  setTimeout(() => {
    ssSixEl.style.display = "none";
    setTimeout(() => {
      ssSevenEl.style.display = "block";
      setTimeout(() => {
        ssSevenEl.style.transform = "none";
        setTimeout(() => {
          ssSevenEl.style.transform = "rotateY(90deg)";
          setTimeout(() => {
            ssSevenEl.style.display = "none";
            ssEightEl.style.display = "block";
            setTimeout(() => {
              ssEightEl.style.transform = "none";
            }, 1);
          }, 500);
        }, Math.ceil(Math.random() * 10000));
      }, 1);
    }, 100);
  }, 500);
}

function toSSSix() {
  ssFiveEl.style.transform = "rotateY(90deg)";
  setTimeout(() => {
    ssFiveEl.style.display = "none";
    setTimeout(() => {
      ssSixEl.style.display = "block";
      setTimeout(() => {
        ssSixEl.style.transform = "none";
      }, 1);
    }, 100);
  }, 500);
}

function toSSFive() {
  ssFourEl.style.transform = "rotateY(90deg)";
  ssSixEl.style.transform = "rotateY(90deg)";
  setTimeout(() => {
    ssFourEl.style.display = "none";
    ssSixEl.style.display = "none";
    setTimeout(() => {
      ssFiveEl.style.display = "block";
      setTimeout(() => {
        ssFiveEl.style.transform = "none";
      }, 1);
    }, 100);
  }, 500);
}

function toSSFour() {
  ssThreeEl.style.transform = "rotateY(90deg)";
  ssFiveEl.style.transform = "rotateY(90deg)";
  setTimeout(() => {
    ssThreeEl.style.display = "none";
    ssFiveEl.style.display = "none";
    setTimeout(() => {
      ssFourEl.style.display = "block";
      setTimeout(() => {
        ssFourEl.style.transform = "none";
      }, 1);
    }, 100);
  }, 500);
}

function toSSThree() {
  ssTwoEl.style.transform = "rotateY(90deg)";
  ssFourEl.style.transform = "rotateY(90deg)";
  setTimeout(() => {
    ssTwoEl.style.display = "none";
    ssFourEl.style.display = "none";
    setTimeout(() => {
      ssThreeEl.style.display = "block";
      setTimeout(() => {
        ssThreeEl.style.transform = "none";
      }, 1);
    }, 100);
  }, 500);
}

function toSSOne() {
  ssTwoEl.style.transform = "rotateY(90deg)";
  setTimeout(() => {
    ssTwoEl.style.display = "none";
    setTimeout(() => {
      ssOneEl.style.display = "block";
      setTimeout(() => {
        ssOneEl.style.transform = "none";
      }, 1);
    }, 100);
  }, 500);
}

function toSSTwo() {
  ssOneEl.style.transform = "rotateY(90deg)";
  ssThreeEl.style.transform = "rotateY(90deg)"
  setTimeout(() => {
    ssOneEl.style.display = "none";
    ssThreeEl.style.display = "none";
    setTimeout(() => {
      ssTwoEl.style.display = "block";
      setTimeout(() => {
        ssTwoEl.style.transform = "none";
      }, 1);
    }, 100);
  }, 500);
}

function openSetup() {
  setupEl.style.display = "flex";
  setTimeout(() => {
    setupEl.style.transform = "none";
    setupEl.style.opacity = "100%";
  }, 1);
  setupTaskEl.style.display = "flex";
  setTimeout(() => {
    setupTaskEl.style.transform = "none";
    setupTaskEl.style.opacity = "100%";
  }, 1);
  setup.open = true;
  setTimeout(() => {
    setupEl.style.transition = "0.2s";
  }, 5000);
}

clockBarEl.addEventListener("mousedown", (event) => {
  clock.drag = true;
  offsetX = event.offsetX;
  offsetY = event.offsetY;
});

calculatorBarEl.addEventListener("mousedown", (event) => {
  calculator.drag = true;
  offsetX = event.offsetX;
  offsetY = event.offsetY;
});

ioMailBarEl.addEventListener("mousedown", (event) => {
  ioMail.drag = true;
  offsetX = event.offsetX;
  offsetY = event.offsetY;
});

setupBarEl.addEventListener("mousedown", (event) => {
  setup.drag = true;
  offsetX = event.offsetX;
  offsetY = event.offsetY;
});

function toParentDir() {
  if (ls != "desktop") {
    ls = dir[ls].parent;
  }
}

function okNewDirectory() {
  fileUsage += 0.1;
  cancelNewDirectory();
  lastId++;
  let newName = newDirectoryNameInputEl.value;
  if (newName == "") {
    newName = "New Folder";
  }
  let newFolder = {
    id: lastId,
    name: newName,
    type: "folder",
    parent: ls,
    drag: false
  };
  dir.push(newFolder);
  if (ls == "desktop") {
    let newFolderEl = document.createElement("div");
    newFolderEl.id = newFolder.id;
    newFolderEl.classList.add("desktopIcon");
    newFolderEl.style.marginLeft = Math.floor(Math.random() * 90) + "vw";
    newFolderEl.style.marginTop = Math.floor(Math.random() * 90) + "vh";
    let newFolderGraphicEl = document.createElement("img");
    newFolderGraphicEl.id = "graphic" + newFolder.id;
    newFolderGraphicEl.src = folderGraphic;
    newFolderGraphicEl.draggable = false;
    newFolderEl.appendChild(newFolderGraphicEl);
    let folderNameEl = document.createElement("p");
    folderNameEl.id = "folderName" + newFolder.id;
    folderNameEl.innerText = newFolder.name;
    newFolderEl.appendChild(folderNameEl);
    desktopEl.appendChild(newFolderEl);
    newFolderEl.addEventListener("mousedown", () => {
      newFolder.drag = true;
    });
    newFolderEl.addEventListener("click", () => {
      folderWinEl.style.display = "flex";
      setTimeout(() => {
        folderWinEl.style.transform = "none";
        folderWinEl.style.opacity = "100%";
      }, 1);
      storageTaskEl.style.display = "flex";
      setTimeout(() => {
        storageTaskEl.style.transform = "none";
        storageTaskEl.style.opacity = "100%";
      }, 1);
      if (folder.maximized) {
        maximizeFolder();
      }
      folderWinEl.style.marginLeft = Math.floor(Math.random() * 50) + "vw";
      folderWinEl.style.marginTop = Math.floor(Math.random() * 50) + "vh";
      folder.open = true;
      ls = dir.indexOf(newFolder);
    });
    newFolderEl.addEventListener("contextmenu", () => {
      for (let i = 0; i < dir.length; i++) {
        if (dir[i].parent == "clipboard") {
          let ix = i;
          dir.splice(i, 1);
          dir = dir.map(item => {
            if (item.parent > ix) {
              return { ...item, parent: item.parent - 1 };
            }
            return item;
          });
        }
      }
      newFolderEl.outerHTML = "";
      newFolder.parent = "clipboard";
      if (!clipboardE) {
        toggleClipboard();
      }
      closeFolder();
    });
  }
}

function cancelNewDirectory() {
  newDirectoryPopupEl.style.transform = "rotateX(90deg)";
  newDirectoryPopupEl.style.opacity = "0%";
  setTimeout(() => {
    newDirectoryPopupEl.style.display = "none";
  }, 100);
}

function newDirectory() {
  beepSnd.currentTime = 0;
  beepSnd.play();
  newDirectoryPopupEl.style.display = "block";
  setTimeout(() => {
    newDirectoryPopupEl.style.transform = "none";
    newDirectoryPopupEl.style.opacity = "100%";
  }, 1);
  newDirectoryNameInputEl.value = "";
  newDirectoryNameInputEl.focus();
}

function okRenameFolder() {
  cancelRenameFolder();
  if (newFolderNameInputEl.value != "") {
    dir[ls].name = newFolderNameInputEl.value;
  }
}

function cancelRenameFolder() {
  renameFolderPopupEl.style.transform = "rotateX(90deg)";
  renameFolderPopupEl.style.opacity = "0%";
  setTimeout(() => {
    renameFolderPopupEl.style.display = "none";
  }, 100);
}

function renameFolder() {
  beepSnd.currentTime = 0;
  beepSnd.play();
  renameFolderPopupEl.style.display = "block";
  setTimeout(() => {
    renameFolderPopupEl.style.transform = "none";
    renameFolderPopupEl.style.opacity = "100%";
  }, 1);
  newFolderNameInputEl.value = dir[ls].name;
  newFolderNameInputEl.focus();
}

function okDeleteFolder() {
  fileUsage -= 0.1;
  for (let i = 0; i < dir.length; i++) {
    if (dir[i].parent == ls) {
      if (dir[i].type == "folder") {
        fileUsage -= 0.1;
      }
    }
  }
  cancelDeleteFolder();
  closeFolder();
  if (dir[ls].parent == "desktop") {
    document.getElementById(dir[ls].id).outerHTML = "";
  }
  dir.splice(ls, 1);
}

function cancelDeleteFolder() {
  deleteFolderPopupEl.style.transform = "rotateX(90deg)";
  deleteFolderPopupEl.style.opacity = "0%";
  setTimeout(() => {
    deleteFolderPopupEl.style.display = "none";
  }, 100);
}

function deleteFolder() {
  beepSnd.currentTime = 0;
  beepSnd.play();
  deleteFolderPopupEl.style.display = "block";
  setTimeout(() => {
    deleteFolderPopupEl.style.transform = "none";
    deleteFolderPopupEl.style.opacity = "100%";
  }, 1);
}

document.addEventListener("mousemove", (event) => {
  for (let i = 0; i < dir.length; i++) {
    if (dir[i].drag) {
      document.getElementById(dir[i].id).style.marginLeft = event.clientX - 50 + "px";
      document.getElementById(dir[i].id).style.marginTop = event.clientY - 50 + "px";
    }
  }
});

document.addEventListener("mouseup", () => {
  for (let i = 0; i < dir.length; i++) {
    dir[i].drag = false;
  }
});

function newFolder() {
  fileUsage += 0.1;
  toggleStartMenu();
  toggleNewFolder();
  lastId++;
  let newName = newFolderNameEl.value;
  if (newName == "") {
    newName = "New Folder";
  }
  let newFolder = {
    id: lastId,
    name: newName,
    type: "folder",
    parent: "desktop",
    drag: false
  };
  dir.push(newFolder);
  let newFolderEl = document.createElement("div");
  newFolderEl.id = newFolder.id;
  newFolderEl.classList.add("desktopIcon");
  newFolderEl.style.marginLeft = Math.floor(Math.random() * 90) + "vw";
  newFolderEl.style.marginTop = Math.floor(Math.random() * 90) + "vh";
  let newFolderGraphicEl = document.createElement("img");
  newFolderGraphicEl.id = "graphic" + newFolder.id;
  newFolderGraphicEl.src = folderGraphic;
  newFolderGraphicEl.draggable = false;
  newFolderEl.appendChild(newFolderGraphicEl);
  let folderNameEl = document.createElement("p");
  folderNameEl.id = "folderName" + newFolder.id;
  folderNameEl.innerText = newFolder.name;
  newFolderEl.appendChild(folderNameEl);
  desktopEl.appendChild(newFolderEl);
  newFolderEl.addEventListener("mousedown", () => {
    newFolder.drag = true;
  });
  newFolderEl.addEventListener("click", () => {
    folderWinEl.style.display = "flex";
    setTimeout(() => {
      folderWinEl.style.transform = "none";
      folderWinEl.style.opacity = "100%";
    }, 1);
    storageTaskEl.style.display = "flex";
    setTimeout(() => {
      storageTaskEl.style.transform = "none";
      storageTaskEl.style.opacity = "100%";
    }, 1);
    if (folder.maximized) {
      maximizeFolder();
    }
    folderWinEl.style.marginLeft = Math.floor(Math.random() * 50) + "vw";
    folderWinEl.style.marginTop = Math.floor(Math.random() * 50) + "vh";
    folder.open = true;
    ls = dir.indexOf(newFolder);
    selectWin(folderWinEl);
  });
  newFolderEl.addEventListener("contextmenu", () => {
    for (let i = 0; i < dir.length; i++) {
      if (dir[i].parent == "clipboard") {
        let ix = i;
        dir.splice(i, 1);
        dir = dir.map(item => {
          if (item.parent > ix) {
            return { ...item, parent: item.parent - 1 };
          }
          return item;
        });
      }
    }
    newFolderEl.outerHTML = "";
    newFolder.parent = "clipboard";
    if (!clipboardE) {
      toggleClipboard();
    }
    closeFolder();
  });
}

function toggleNewFolder() {
  newFolderE = !newFolderE;
  if (newFolderE) {
    newFolderNameContainerEl.style.display = "block";
    newFolderNameEl.focus();
    newFolderNameEl.value = "";
    setTimeout(() => {
      newFolderNameContainerEl.style.transform = "none";
      newFolderNameContainerEl.style.opacity = "100%";
      newFolderNameContainerEl.style.marginLeft = "240px";
    }, 1);
  } else {
    newFolderNameContainerEl.style.transform = "rotateY(90deg)";
    newFolderNameContainerEl.style.opacity = "0%";
    newFolderNameContainerEl.style.marginLeft = "90px";
    setTimeout(() => {
      newFolderNameContainerEl.style.display = "none";
    }, 500);
  }
}

document.addEventListener("mousemove", (event) => {
  if (codeWithTletku.icon.drag) {
    let rect = codeWithMeIconEl.getBoundingClientRect();
    codeWithMeIconEl.style.marginLeft = event.clientX - (rect.width / 2) + "px";
    codeWithMeIconEl.style.marginTop = event.clientY - (rect.height / 2) + "px";
  }
});

document.addEventListener("mouseup", () => {
  codeWithTletku.icon.drag = false;
});

codeWithMeIconEl.addEventListener("mousedown", () => {
  codeWithTletku.icon.drag = true;
});

function interactTletku() {
  tletkuTalkE = !tletkuTalkE;
  if (tletkuTalkE) {
    tletkuTalkSnd.currentTime = 0;
    tletkuTalkSnd.play();
    if (newToTletku) {
      tletkuGreeting = "Hello There!";
      tletkuMessage = "My name is Tletku and I am your assistant. Right click me again for me to stop talking.";
      newToTletku = false;
    } else {
      tletkuGreeting = "Did you know?";
      tletkuMessage = facts[Math.floor(Math.random() * facts.length)];
    }
  } else {
    twoBtnsEl.style.display = "none";
    decision = null;
  }
  if (codeWithTlektuE) {
    startBtnEl.style.transform = "scale(3)";
    newToTletku = false;
    if (tletkuTalkE) {
      emotion = "veryHappyTletku";
      tletkuGreeting = "Did you know?";
      tletkuMessage = "Hmm...";
      tletkuMessage = "Hello! Make me say what you want.";
    } else {
      emotion = "happyTletku";
    }
  }
}

function closeHelp() {
  helpBarEl.style.marginLeft = "-750px";
}

function getHelp(app) {
  helpBarEl.style.marginLeft = "0";
  if (app == "prism") {
    helpHeading = "Auka Web Browser";
    helpDesc = "<p>Auka Web Browser is the default browser for Ofekal OS. It was quickly created in a few days after IO Studio discontinued Prism Web Browser. This browser should be user-intuitive. Search the web with the search bar. The tab bar is on top.</p>";
  } else if (app == "storage") {
    helpHeading = "Storage Manager";
    helpDesc = "<p>Storage Manager is the default file manager of Ofekal OS. It is not an application that is visible on the start menu but rather accessed by opening folders.</p><br><p>To create a new folder, press the folder icon with a green plus at the bottom of the left sidebar in the start menu. A textbox will come up to the right of the icon you just pressed, type the name you want to call the folder and click the up arrow icon to create it. The start menu should automatically close and you should see a folder with the name you gave positioned in a random place on your desktop. Click the folder to open it and see its contents, you likely know this because that would be how you get here! Right under the top window bar, you should see another horizontal grey bar with 3 or 4 icons depending on how many files you are in. The first icon is only visible if you are not in a root folder. It should look like a folder with a blue arrow coming out of it. Click on it to go the parent folder. The next icon is a folder with a green plus, click this to create a new child folder. The next icon is a folder with a black textbox, click on it to rename the open folder. Finally, click the folder icon with a red x-mark to delete the open folder. Under the gray bar, the contents of the open file are displayed. Click on one of the child files to open it. You can move files with the clipboard. To view what is in the clipboard, click the clipboard icon to the right of the internet icon on the right side of the taskbar. To put a file in the clipboard, right click on it. To paste a file from the clipboard, just right click wherever you want it to go.</p><br><img src='images/folderHelp.png' draggable='false' /><br><br><span>Written by Vikenait Productions</span>";
  } else if (app == "io mail") {
    helpHeading = "IO Posts";
    helpDesc = "<p>Welcome to IO Posts! To get Started click the Create Account or Log In button on the top of the screen (if your logged out) and follow the text details on that page. For the main App when logged in you will see a Navbar where you can click to open your Inbox. IO Posts has some Details for you to read on the Homepage below the Main Heading. Click the Profile Picture image in the Navbar to view your Profile, scroll down and enter new Details and press Enter (mostly) to submit. IO Posts was created by IO Studio. Click the hamburger menu button to open the Menu where you can open other IO Unlimited Apps. Click one of the Links from the list below the Searchbar to view a post you can also comment and React to Posts. IO Posts Inbox let's you send Messages to other IO Posts users they get an email when they get a message along side them getting it their Inbox on IO Posts Inbox.</p><br> <img src='images/ioPostsScreenshot.png' draggable='false' /><br> <p> - Written by IO Studio</p>";
  } else if (app == "calculator") {
    helpHeading = "Calculator";
    helpDesc = "<p>Calculator is the default calculator app for Ofekal. The Ofekal Naudnik calculator is also the first Ofekal calculator to be formatted like a normal calculator and not with input fields.</p><br><p>It works as a normal analog calculator. The grey box is the display. Under it are the digits, operations and decimal point. Press the red button to clear the display. Press the green button to calculate the answer of your equasion. Click the hamburger button to open up your calculator history. Click on a number to take it into your calculator. Right click one to delete it from your history. Click 'Clear' to clear your calculator history.</p><br><img src='images/calculatorHelp.png' draggable='false' style='width:50% ;' /><br><br><span>Written by Vikenait Productions</span>";
  } else if (app == "clock") {
    helpHeading = "Clock";
    helpDesc = "<p>Clock is the default clock app for Ofekal. In it you can set timers alarms, use a stopwatch, and even add an analog clock to your desktop as a widget!</p><br><p>On left side is a sidebar that contains 'Home', 'Timer', 'Stopwatch', and 'Alarm' which you can click to go to that section.</p><br><h2>Home</h2><br><p>When you first open clock, it goes to the home section by default. In it you can see an analog clock, a color code key for the clock hands, some details about the current time, and a button to add an analog clock as a widget on your desktop. After you have clicked the button, click it again to remove the clock widget. When it goes onto your desktop, you can drag it to your preferred place. When you click on it, it will open the clock app.</p><br><img src='images/clockHelp.png' draggable='false' /><br><h2>Timers</h2><br><p>The second section is the timer section. Timers only sound when this tab on your browser is active. If you click the new timer button, a popup will come up with three white squares. In the first square is the timer hours, in the second square is the timer minutes, and in the last square is the timer seconds. Click the plus icon to increment hours, minutes or seconds, and the minus icon to decrement. Click the OK button once done. A timer box will appear. The text at the top is the duration until the timer will go off. Under that is the progress bar that shows how much progress is to go until the timer will go off. Under the progress bar are 3 control buttons. Click the first black button to delete the timer, click the middle button to restart the timer, and click the last button to pause / unpause the timer. When a timer goes off, Tletku will notify you.</p><br><img src='images/clockHelp2.png' draggable='false' /><br><h2>Stopwatch</h2><br><p>The third section is the stopwatch section. In it, the largest text is the stopwatch. Under it are 3 control buttons. Click the first button to reset the stopwatch, click the middle button to start / pause the stopwatch, and click the last button to mark a lap for the stopwatch. Laps will appear under the control buttons. You can click a lap to set the stopwatch to that time and right click it to delete it.</p><br><img src='images/clockHelp3.png' draggable='false' /><br><h2>Alarms</h2><br><p>The fourth and final section is the alarm section. Alarms only sound when this tab on your browser is active. Click the new alarm button to create a new alarm. After you click the button, a popup will come up with three white squares, the first square is the alarm hour, the second square is the alarm minute, and the final square is the alarm AM or PM. Click the plus or minus icon to changes these numbers. Click the toggle button under AM or PM to toggle it. In the textbox in between the Cancel and OK buttons, type the text you want to be notified when the alarm goes off. Click the OK button once you are done. After you click it, you should see a new black box come up. The text at the top of the box displays the time the alarm will go off. Under that is the text Tletku will notify you with once the alarm goes off. Click the button at the bottom to delete the alarm.</p><br><img src='images/clockHelp4.png' draggable='false' /><br><p>Written by Vikenait Productions</p>";
  } else if (app == "settings") {
    helpHeading = "Settings";
    helpDesc = "<p>Settings is the app to customize and tweak your Ofekal Computer.</p><br><p>When you first open settings, you will see a grid and a sidebar with buttons each corresponding to a certain section of Settings.</p><br><h2>Network and Internet</h2><br><p>The first section is Network and Internet. There it will show a list of networks. Each one has a graphic, a title, and a connection button. The graphic on the left is the conventional wifi symbol, if the network is password protected, it will show a lock over it. Else, it will have no lock. Click the 'Connect' button to connect to that network. It should become green. If a network is green, that means you are connected to that one. If you are connected to one, the button will say 'Disconnect' and does as it says when you click it. When you click to connect to a network that is password protected, a popup will come up. Type the wifi password into the text field and click ok after you typed it. If type the incorrect password, it will notify you and not let you continue unless you click to cancel.</p><br><img src='images/settingsHelp.png' draggable='false' /><br><h2>Storage</h2><br><p>The second section is the Storage section. In it, you should see a bar that shows how much of your total storage space is being used. Under it, it will tell you how much space is being used up. Under that, you should see a button labeled 'Details'. If you click on it, the bar will become color coded to show you what exactly is taking up that space with a legend explaining which one is which along with some more details. Click the 'Clear Junk' button to clear unnessecary or temporary files taking up space. Click the 'Back' button to go back to the Storage home. The following graphic shows the storage section with more details.</p><br><img src='images/settingsHelp2.png' draggable='false' /><br><h2>Personalization</h2><br><p>The third section is the Personalization section. In it, you should see a graphic under the top heading which is a preview of your current wallpaper. Under it, there is a dark-colored box with other wallpaper options within it. Click one to choose it as your wallpaper. Under that, you can choose your theme by clicking either the 'Light' or 'Dark' button. Under that, you can choose a theme color by clicking on a circle with your desired color. Under that, you can choose if you want the window bar to be on top or on the left by clicking either the 'Top' or 'Left' buttons. Under that, you can choose your desired font by clicking on it. Under that, you will see a graphic that is a preview of your current folder style. Under it you should see a list of styles you can choose from just by clicking on them. Under that, you can choose a notification sound. Click the test button to hear what your notification sound currently is, and click on a sound option to choose it as your notification sound. Under that, is a dark-colored box with themes inside of it that you can click on to make your operating system look like that. You can create a new theme based on how your operating system currently looks by clicking the 'Save Theme' button under the themes container. Finally if you are looking for something new and unique, at the bottom you can click the 'Random Theme' button which creates a random theme for you which you can save by clicking the 'Save Theme' button. You can delete a theme that you made just by right clicking on it.</p><br><img src='images/settingsHelp3.gif' draggable='false' /><br><h2>Accessibility</h2><br><p>The fourth section is the Accessibility section. In it, you should see a slider bar under the heading. Slide the circle to the left to decrease the font size and to the right to increase the font size. Under it, you should see a button labled 'Toggle High Contrast Text' which you can use to toggle high contrast text so that it is more distinguishable to read.</p><br><img src='images/settingsHelp4.png' draggable='false' /><br><h2>Admin Settings</h2><br><p>The final section is the Admin Settings section. In it, you should see a textfield under the heading. If you wish to change your username, type it into the textbox, and click the OK button. Under that, you should see another textfield in which if you wish to change your password (or create one) you can just type it in and then click the OK button. Under that, you should see a graphic that is a preview of your profile picture. Below it is a dark-colored box that holds all the profile picture options you can choose from. Click on one to choose it as your profile picture. Under all that, there is a dropdown selector to choose a different language if you need / want to. And finally, under that is the factory reset button. But click this with its consequences in mind which are told to you in the are you sure dialog after you click on it.</p><br><img src='images/settingsHelp5.gif' draggable='false' /><br><p>Written by Vikenait Productions</p>";
  } else if (app == "notepad") {
    helpHeading = "Notepad";
    helpDesc = "<p>Notepad is the default text editor for Ofekal Naudnik. It is also the first modern Ofekal text editor.</p><br><p>When you first open Notepad, you should see a thin, dark-colored bar on the top, and a large white field under it. In the white field you type text. The top bar contains controls for your document. The first control looks like a piece of paper with a green plus. Click this to make a new document. After you click it, it will ask if you are sure, if you are sure, click the 'OK' button and it will clear your unsaved work and make a new, empty document for you. The next control is the open control. It should look like a piece of paper being taken out of a folder with a green arrow pointing up. Click this to open a document from your computer. Upon clicking it, a file reader will open up. Select the file you wish to open and then click 'OK' once you found it and it will open the document into your editor. The next control is the save control. It should look like a green floppy drive. Click this button to save your work. If you have never done this to the open document before, it will bring up another file reader. Choose where you would like to save the document and then at the bottom, type the document title in the text field and select a file extension from the select box to the right of it. Click 'OK' once you are done. The next control is the save as control. It should look just like the save control does but with the word 'as' written in blue. If you click this button, it will open the save file reader even if you already saved it. This is useful for if you want to change the place or rename your document. The next control is the delete control. If you click it while you have a document opened, it will bring up a popup that will ask you if you are sure to do this. Click 'OK' if you are sure you want to delete the file and it will be deleted. The next control is the download control. It should look like an orange-colored arrow pointing down. Click this to download the contents of your text editor to your computer as a text file. The last control is the upload control. It should look like the download control but green-colored and pointing up instead of down. Click this to upload a text file from your computer to the text editor.</p><br><img src='images/notepadHelp.png' draggable='false' /><br><p>Written by Vikenait Productions</p>";
  } else if (app == "paint") {
    helpHeading = "Paint";
    helpDesc = "<p>Paint is a graphic editing tool that comes with Ofekal Naudnik. It is the first 'complete' graphic editing tool made by Vikenait Productions.</p><br><p>When you first open Paint, you should see a thin, dark-colored bar on the top, and an empty canvas with a gray-checkered pattern (to show transparency). The controls are lined up on the top bar. We will talk about the file control last. The second control is your selected tool which is pencil by default. Click on it to choose a different tool. The tools are as follows: with pencil, click and drag on the canvas to draw lines. With fill, click any area of color to replace it with your selected color. With eyedropper, click a color on the canvas you want to get as your selected color. With shape, you can your selected shape by clicking and dragging on the canvas, and finally, with text, you can write text unto the canvas by aligning the red dot where you want the top-left corner of the text to be, write the text, and click 'OK'. After the tool selector, you should see a control with 3 green bars. Click on it to modify the properties of your canvas, (width, height, and rotation). After that, you should see a circle which is filled with your selected color. Click on it to choose a different color. (You may create a custom color by clicking the 'Custom' button, adjusting the red, green, and blue parameters; and clicking 'OK'). After that, you should see a circle with a black symbol in the middle. The symbol shows your paint brush size and style. If you click on it, you will be able to change your brush size and style. After that, you should see either a pencil or an eraser icon. Click on this to toggle drawing / erasing. The image represents the current mode E.G. if it is a pencil, you are in drawing mode. If you have made any changes to your image, to the left of the pencil / eraser control, you should see a left facing, rounded arrow control. Click on it to undo your last action if you have made a mistake. After that, if you have the shape tool selected, you should see a shapes control. Click on it to select a shape to draw; and last but not least, click on the file button at the very left to perform file operations (create a new artwork, save artwork, save artwork with new name and location, open an image, delete image, download image to your base operating system, upload an image to your base operating system, copy the data URL of the image to your clipboard).</p><br><img src='images/paintHelp.png' draggable='false' /><br><p>Written by Vikenait Productions</p>";
  } else if (app == "media") {
    helpHeading = "Media Viewer";
    helpDesc = "<p>Media Viewer is the app for viewing images, music, videos, etc. It is the first Ofekal app to be able to view images and music without having to use the editor tools.</p><br><p>When you first open Media Viewer, you should see a greeting. Click the 'open' button to open a file. If you opened an image, you should see it in the center. On the top, you should see a thin grey bar that has your controls. If you are viewing an image, you can press the green plus to zoom in, and the red minus to zoom out. Press the icon to the far right to edit the image with paint. Finally, the file options are on the far left or middle. It is the only one visible for both viewing images and music. If you click on it, you can click 'open' to open a new file or 'delete' to delete the file you have open.</p><br><img src='images/mediaHelp.png' draggable='false' />";
  } else if (app == "toolbox") {
    helpHeading = "Toolbox";
    helpDesc = "<p>Toolbox is the software store for Ofekal in which you can download third party applications to your computer. It is also the first version of Toolbox to have search and publish capabilities!</p><br><p>When you first open toolbox, you should see a thin, dark bar on top. Starting from the left side of the top bar, you should see a red toolbox which is the logo. Moving right, you should see the search bar in which you can type queries to search for certain applications. Click the 'Search' button to search for applications according to your query. Moving right, you should see the 'Home' button which takes you back to the home screen of Toolbox. Moving right even further, you should the 'Upload App' button which you can click to upload a new application to Toolbox. After clicking it, just fill out the information needed and click 'Upload!' to upload your app (Thank you!). Under the top bar, it shows you suggested applications to download. If you click on one, it will bring you to a page where that shows you more details according to the application such as reviews and screenshots. Click on the 'Install' button to install the application. After the application is installed, the install button is replaced with a button to delete the application, and one to open it.</p><br><img src='images/toolboxHelp.png' draggable='false' /><br><br><p> - Written by Vikenait Productions</p><br>";
  } else if (app == "terminal") {
    helpHeading = "Terminal";
    helpDesc = "<p>Terminal is the shell for using Ofekal. Ofekal Naudnik is the first version to have a Terminal!</p><br><p>Terminal is actually very straightforward. Type in your query in the input at the bottom and click the 'Enter >' button to enter a command. It will perform an action based on your command. Type 'help' to display all commands.</p><br><img src='images/terminalHelp.png' draggable='false' /><br><br><p>Written by Vikenait Productions</p><br>";
  }
}

function linkTo(goto) {
  if (goto == "open weather") {
    if (startMenuIsOpen) {
      toggleStartMenu();
    }
    for (let i = 0; i < applications.length; i++) {
      if (applications[i].type == "browser" && applications[i].name == defaults.browser) {
        applications[i].clickFun("https://openweathermap.org/");
      }
    }
  } else if (goto == "me") {
    if (startMenuIsOpen) {
      toggleStartMenu();
    }
    for (let i = 0; i < applications.length; i++) {
      if (applications[i].type == "browser" && applications[i].name == defaults.browser) {
        applications[i].clickFun("https://joseph2.farleyengineeredsolutions.org/");
      }
    }
  }
}

function fetchWeather(locationSe) {
  const url = `${apiUrl}?q=${locationSe}&appid=${apiKey}&units=imperial`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      weatherDesc = data.weather[0].description;
      temperature = Math.round(data.main.temp);
      /*locationElement.textContent = data.name;
      temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
      descriptionElement.textContent = data.weather[0].description;*/
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}

function okWeather() {
  cancelWeather();
  locationSe = locationInput.value.toLowerCase();
  weatherEnabled = true;
  fetchWeather(locationSe);
}

function cancelWeather() {
  weatherPopupEl.style.transform = "rotateX(90deg)";
  weatherPopupEl.style.opacity = "0%";
  setTimeout(() => {
    weatherPopupEl.style.display = "none";
  }, 100);
}

function enableWeather() {
  beepSnd.currentTime = 0;
  beepSnd.play();
  weatherPopupEl.style.display = "block";
  setTimeout(() => {
    weatherPopupEl.style.transform = "none";
    weatherPopupEl.style.opacity = "100%";
    locationInput.focus();
  }, 1);
}

function closeSetup() {
  setupEl.style.transform = "rotateX(90deg)";
  setupEl.style.opacity = "0%";
  setTimeout(() => {
    setupEl.style.display = "none";
  }, 200);
  setupTaskEl.style.transform = "rotateY(90deg)";
  setupTaskEl.style.opacity = "0%";
  setTimeout(() => {
    setupTaskEl.style.display = "none";
  }, 100);
  setup.open = false;
}

function closeClock() {
  clockAppEl.style.transform = "rotateX(90deg)";
  clockAppEl.style.opacity = "0%";
  setTimeout(() => {
    clockAppEl.style.display = "none";
  }, 200);
  clockTaskEl.style.transform = "rotateY(90deg)";
  clockTaskEl.style.opacity = "0%";
  setTimeout(() => {
    clockTaskEl.style.display = "none";
  }, 100);
  clock.open = false;
}

function closeIOMail() {
  ioMailEl.style.transform = "rotateX(90deg)";
  ioMailEl.style.opacity = "0%";
  setTimeout(() => {
    ioMailEl.style.display = "none";
  }, 200);
  ioMailTaskEl.style.transform = "rotateY(90deg)";
  ioMailTaskEl.style.opacity = "0%";
  setTimeout(() => {
    ioMailTaskEl.style.display = "none";
  }, 100);
  ioMail.open = false;
}

function closeNotepad() {
  notepadEl.style.transform = "rotateX(90deg)";
  notepadEl.style.opacity = "0%";
  setTimeout(() => {
    notepadEl.style.display = "none";
  }, 200);
  notepadTaskEl.style.transform = "rotateY(90deg)";
  notepadTaskEl.style.opacity = "0%";
  setTimeout(() => {
    notepadTaskEl.style.display = "none";
  }, 100);
  notepad.open = false;
}

function closePaint() {
  paintEl.style.transform = "rotateX(90deg)";
  paintEl.style.opacity = "0%";
  setTimeout(() => {
    paintEl.style.display = "none";
  }, 200);
  paintTaskEl.style.transform = "rotateY(90deg)";
  paintTaskEl.style.opacity = "0%";
  setTimeout(() => {
    paintTaskEl.style.display = "none";
  }, 100);
  paint.open = false;
}

function closeTerminal() {
  terminalEl.style.transform = "rotateX(90deg)";
  terminalEl.style.opacity = "0%";
  setTimeout(() => {
    terminalEl.style.display = "none";
  }, 200);
  terminalTaskEl.style.transform = "rotateY(90deg)";
  terminalTaskEl.style.opacity = "0%";
  setTimeout(() => {
    terminalTaskEl.style.display = "none";
    terminal.open = false;
  }, 100);
}

function closeToolbox() {
  toolboxEl.style.transform = "rotateX(90deg)";
  toolboxEl.style.opacity = "0%";
  setTimeout(() => {
    toolboxEl.style.display = "none";
  }, 200);
  toolboxTaskEl.style.transform = "rotateY(90deg)";
  toolboxTaskEl.style.opacity = "0%";
  setTimeout(() => {
    toolboxTaskEl.style.display = "none";
    toolbox.open = false;
  }, 100);
}

function closeMedia() {
  mediaMusicEl.pause();
  mediaEl.style.transform = "rotateX(90deg)";
  mediaEl.style.opacity = "0%";
  setTimeout(() => {
    mediaEl.style.display = "none";
  }, 200);
  mediaTaskEl.style.transform = "rotateY(90deg)";
  mediaTaskEl.style.opacity = "0%";
  setTimeout(() => {
    mediaTaskEl.style.display = "none";
    media.open = false;
    mediaHomeEl.style.display = "flex";
    mediaImageViewerEl.style.display = "none";
    mediaMusicViewerEl.style.display = "none";
    mediaLS = null;
    mediaF = "desktop";
    mediaO = null;
    mediaImgEl.src = "#";
    openedMediaNameEl.innerText = "";
    mediaZoom = 1;
  }, 100);
}

function closePrism() {
  tabIndex = 0;
  tabs = [];
  prismEl.style.transform = "rotateX(90deg)";
  prismEl.style.opacity = "0%";
  setTimeout(() => {
    prismEl.style.display = "none";
  }, 200);
  prismTaskEl.style.transform = "rotateY(90deg)";
  prismTaskEl.style.opacity = "0%";
  setTimeout(() => {
    prismTaskEl.style.display = "none";
  }, 100);
  prism.open = false;
}

function closeSettings() {
  settingsEl.style.transform = "rotateX(90deg)";
  settingsEl.style.opacity = "0%";
  setTimeout(() => {
    settingsEl.style.display = "none";
  }, 200);
  settingsTaskEl.style.transform = "rotateY(90deg)";
  settingsTaskEl.style.opacity = "0%";
  setTimeout(() => {
    settingsTaskEl.style.display = "none";
  }, 100);
  settings.open = false;
}

function closeFolder() {
  folderWinEl.style.transform = "rotateX(90deg)";
  folderWinEl.style.opacity = "0%";
  setTimeout(() => {
    folderWinEl.style.display = "none";
  }, 200);
  storageTaskEl.style.transform = "rotateY(90deg)";
  storageTaskEl.style.opacity = "0%";
  setTimeout(() => {
    storageTaskEl.style.display = "none";
  }, 100);
  folder.open = false;
}

function closeCalculator() {
  calculatorEl.style.transform = "rotateX(90deg)";
  calculatorEl.style.opacity = "0%";
  setTimeout(() => {
    calculatorEl.style.display = "none";
  }, 200);
  calculatorTaskEl.style.transform = "rotateY(90deg)";
  calculatorTaskEl.style.opacity = "0%";
  setTimeout(() => {
    calculatorTaskEl.style.display = "none";
  }, 100);
  calculator.open = false;
}

function maximizePaint() {
  paint.maximized = !paint.maximized;
  if (paint.maximized) {
    paintEl.style.marginLeft = "0";
    paintEl.style.marginTop = "0";
    paintEl.style.width = "100vw";
    paintEl.style.height = "calc(100vh - 60px)";
    paintEl.style.borderRadius = "0";
  } else {
    paintEl.style.marginLeft = "10vw";
    paintEl.style.marginTop = "10vh";
    paintEl.style.width = "50vw";
    paintEl.style.height = "50vh";
    paintEl.style.borderRadius = "5px";
  }
}

function maximizeTerminal() {
  terminal.maximized = !terminal.maximized;
  if (terminal.maximized) {
    terminalEl.style.marginLeft = "0";
    terminalEl.style.marginTop = "0";
    terminalEl.style.width = "100vw";
    terminalEl.style.height = "calc(100vh - 60px)";
    terminalEl.style.borderRadius = "0";
  } else {
    terminalEl.style.marginLeft = "10vw";
    terminalEl.style.marginTop = "10vh";
    terminalEl.style.width = "50vw";
    terminalEl.style.height = "50vh";
    terminalEl.style.borderRadius = "5px";
  }
}

function maximizeNotepad() {
  notepad.maximized = !notepad.maximized;
  if (notepad.maximized) {
    notepadEl.style.marginLeft = "0";
    notepadEl.style.marginTop = "0";
    notepadEl.style.width = "100vw";
    notepadEl.style.height = "calc(100vh - 60px)";
    notepadEl.style.borderRadius = "0";
  } else {
    notepadEl.style.marginLeft = "10vw";
    notepadEl.style.marginTop = "10vh";
    notepadEl.style.width = "50vw";
    notepadEl.style.height = "50vh";
    notepadEl.style.borderRadius = "5px";
  }
}

function maximizeMedia() {
  media.maximized = !media.maximized;
  if (media.maximized) {
    mediaEl.style.marginLeft = "0";
    mediaEl.style.marginTop = "0";
    mediaEl.style.width = "100vw";
    mediaEl.style.height = "calc(100vh - 60px)";
    mediaEl.style.borderRadius = "0";
  } else {
    mediaEl.style.marginLeft = "10vw";
    mediaEl.style.marginTop = "10vh";
    mediaEl.style.width = "50vw";
    mediaEl.style.height = "50vh";
    mediaEl.style.borderRadius = "5px";
  }
}

function maximizePrism() {
  prism.maximized = !prism.maximized;
  if (prism.maximized) {
    prismEl.style.marginLeft = "0";
    prismEl.style.marginTop = "0";
    prismEl.style.width = "100vw";
    prismEl.style.height = "calc(100vh - 60px)";
    prismEl.style.borderRadius = "0";
  } else {
    prismEl.style.marginLeft = "10vw";
    prismEl.style.marginTop = "10vh";
    prismEl.style.width = "50vw";
    prismEl.style.height = "50vh";
    prismEl.style.borderRadius = "5px";
  }
}

function maximizeFolder() {
  folder.maximized = !folder.maximized;
  if (folder.maximized) {
    folderWinEl.style.marginLeft = "0";
    folderWinEl.style.marginTop = "0";
    folderWinEl.style.width = "100vw";
    folderWinEl.style.height = "calc(100vh - 60px)";
    folderWinEl.style.borderRadius = "0";
  } else {
    folderWinEl.style.marginLeft = "10vw";
    folderWinEl.style.marginTop = "10vh";
    folderWinEl.style.width = "50vw";
    folderWinEl.style.height = "50vh";
    folderWinEl.style.borderRadius = "5px";
  }
}

function maximizeIOMail() {
  ioMail.maximized = !ioMail.maximized;
  if (ioMail.maximized) {
    ioMailEl.style.marginLeft = "0";
    ioMailEl.style.marginTop = "0";
    ioMailEl.style.width = "100vw";
    ioMailEl.style.height = "calc(100vh - 60px)";
    ioMailEl.style.borderRadius = "0";
  } else {
    ioMailEl.style.marginLeft = "10vw";
    ioMailEl.style.marginTop = "10vh";
    ioMailEl.style.width = "50vw";
    ioMailEl.style.height = "50vh";
    ioMailEl.style.borderRadius = "5px";
  }
}

function maximizeSetup() {
  setup.maximized = !setup.maximized;
  if (setup.maximized) {
    setupEl.style.marginLeft = "0";
    setupEl.style.marginTop = "0";
    setupEl.style.width = "100vw";
    setupEl.style.height = "calc(100vh - 60px)";
    setupEl.style.borderRadius = "0";
  } else {
    setupEl.style.marginLeft = "10vw";
    setupEl.style.marginTop = "10vh";
    setupEl.style.width = "50vw";
    setupEl.style.height = "50vh";
    setupEl.style.borderRadius = "5px";
  }
}

function maximizeClock() {
  clock.maximized = !clock.maximized;
  if (clock.maximized) {
    clockAppEl.style.marginLeft = "0";
    clockAppEl.style.marginTop = "0";
    clockAppEl.style.width = "100vw";
    clockAppEl.style.height = "calc(100vh - 60px)";
    clockAppEl.style.borderRadius = "0";
  } else {
    clockAppEl.style.marginLeft = "10vw";
    clockAppEl.style.marginTop = "10vh";
    clockAppEl.style.width = "50vw";
    clockAppEl.style.height = "50vh";
    clockAppEl.style.borderRadius = "5px";
  }
}

function maximizeSettings() {
  settings.maximized = !settings.maximized;
  if (settings.maximized) {
    settingsEl.style.marginLeft = "0";
    settingsEl.style.marginTop = "0";
    settingsEl.style.width = "100vw";
    settingsEl.style.height = "calc(100vh - 60px)";
    settingsEl.style.borderRadius = "0";
  } else {
    settingsEl.style.marginLeft = "10vw";
    settingsEl.style.marginTop = "10vh";
    settingsEl.style.width = "50vw";
    settingsEl.style.height = "50vh";
    settingsEl.style.borderRadius = "5px";
  }
}

function maximizeToolbox() {
  toolbox.maximized = !toolbox.maximized;
  if (toolbox.maximized) {
    toolboxEl.style.marginLeft = "0";
    toolboxEl.style.marginTop = "0";
    toolboxEl.style.width = "100vw";
    toolboxEl.style.height = "calc(100vh - 60px)";
    toolboxEl.style.borderRadius = "0";
  } else {
    toolboxEl.style.marginLeft = "10vw";
    toolboxEl.style.marginTop = "10vh";
    toolboxEl.style.width = "50vw";
    toolboxEl.style.height = "50vh";
    toolboxEl.style.borderRadius = "5px";
  }
}

function unMinimizeToolbox() {
  if (!toolbox.maximized) {
    toolboxEl.style.marginTop = "10vh";
  }
  selectWin(toolboxEl);
  if (startMenuIsOpen) {
    toggleStartMenu();
  }
}

function unMinimizeSettings() {
  if (!settings.maximized) {
    settingsEl.style.marginTop = "10vh";
  }
  selectWin(settingsEl);
  if (startMenuIsOpen) {
    toggleStartMenu();
  }
}

function unMinimizeMedia() {
  if (!media.maximized) {
    mediaEl.style.marginTop = "10vh";
  }
  selectWin(mediaEl);
  if (startMenuIsOpen) {
    toggleStartMenu();
  }
}

function unMinimizePrism() {
  if (!prism.maximized) {
    prismEl.style.marginTop = "10vh";
  }
  selectWin(prismEl);
  if (startMenuIsOpen) {
    toggleStartMenu();
  }
}

function unMinimizeFolder() {
  if (!folder.maximized) {
    folderWinEl.style.marginTop = "10vh";
  }
  selectWin(folderWinEl);
  if (startMenuIsOpen) {
    toggleStartMenu();
  }
}

function unMinimizeSetup() {
  if (!setup.maximized) {
    setupEl.style.marginTop = "10vh";
  }
  selectWin(setupEl);
  if (startMenuIsOpen) {
    toggleStartMenu();
  }
}

function unMinimizeIOMail() {
  if (!ioMail.maximized) {
    ioMailEl.style.marginTop = "10vh";
  }
  selectWin(ioMailEl);
  if (startMenuIsOpen) {
    toggleStartMenu();
  }
}

function unMinimizeCalculator() {
  if (!calculator.maximized) {
    calculatorEl.style.marginTop = "10vh";
  }
  selectWin(calculatorEl);
  if (startMenuIsOpen) {
    toggleStartMenu();
  }
}

function unMinimizeClock() {
  if (!clock.maximized) {
    clockAppEl.style.marginTop = "10vh";
  }
  selectWin(clockAppEl);
  if (startMenuIsOpen) {
    toggleStartMenu();
  }
}

function unMinimizeNotepad() {
  if (!notepad.maximized) {
    notepadEl.style.marginTop = "10vh";
  }
  selectWin(notepadEl);
  if (startMenuIsOpen) {
    toggleStartMenu();
  }
}

function unMinimizePaint() {
  if (!paint.maximized) {
    paintEl.style.marginTop = "10vh";
  }
  selectWin(paintEl);
  if (startMenuIsOpen) {
    toggleStartMenu();
  }
}

function minimizeClock() {
  if (clock.maximized) {
    maximizeClock();
  }
  clockAppEl.style.marginTop = "100vh";
}

function minimizeSetup() {
  if (setup.maximized) {
    maximizeSetup();
  }
  setupEl.style.marginTop = "100vh";
}

function minimizeFolder() {
  if (folder.maximized) {
    maximizeFolder();
  }
  folderWinEl.style.marginTop = "100vh";
}

function minimizeCalculator() {
  if (calculator.maximized) {
    maximizeCalculator();
  }
  calculatorEl.style.marginTop = "100vh";
}

function minimizeIOMail() {
  if (ioMail.maximized) {
    maximizeIOMail();
  }
  ioMailEl.style.marginTop = "100vh";
}

function minimizeSettings() {
  if (settings.maximized) {
    maximizeSettings();
  }
  settingsEl.style.marginTop = "100vh";
}

function minimizePaint() {
  if (paint.maximized) {
    maximizePaint();
  }
  paintEl.style.marginTop = "100vh";
}

function minimizeNotepad() {
  if (notepad.maximized) {
    maximizeNotepad();
  }
  notepadEl.style.marginTop = "100vh";
}

function minimizeMedia() {
  if (media.maximized) {
    maximizeMedia();
  }
  mediaEl.style.marginTop = "100vh";
}

function minimizeToolbox() {
  if (toolbox.maximized) {
    maximizeToolbox();
  }
  toolboxEl.style.marginTop = "100vh";
}

function minimizePrism() {
  if (prism.maximized) {
    maximizePrism();
  }
  prismEl.style.marginTop = "100vh";
}

document.addEventListener("mousemove", (event) => {
  if (prism.drag && !prism.maximized) {
    prismEl.style.marginLeft = event.clientX - offsetX + "px";
    prismEl.style.marginTop = event.clientY - offsetY + "px";
  }
  if (folder.drag && !folder.maximized) {
    folderWinEl.style.marginLeft = event.clientX - offsetX + "px";
    folderWinEl.style.marginTop = event.clientY - offsetY + "px";
  }
  if (setup.drag && !setup.maximized) {
    setupEl.style.marginLeft = event.clientX - offsetX + "px";
    setupEl.style.marginTop = event.clientY - offsetY + "px";
  }
  if (ioMail.drag && !ioMail.maximized) {
    ioMailEl.style.marginLeft = event.clientX - offsetX + "px";
    ioMailEl.style.marginTop = event.clientY - offsetY + "px";
  }
  if (calculator.drag && !calculator.maximized) {
    calculatorEl.style.marginLeft = event.clientX - offsetX + "px";
    calculatorEl.style.marginTop = event.clientY - offsetY + "px";
  }
  if (clock.drag && !clock.maximized) {
    clockAppEl.style.marginLeft = event.clientX - offsetX + "px";
    clockAppEl.style.marginTop = event.clientY - offsetY + "px";
  }
  if (settings.drag && !settings.maximized) {
    settingsEl.style.marginLeft = event.clientX - offsetX + "px";
    settingsEl.style.marginTop = event.clientY - offsetY + "px";
  }
  if (notepad.drag && !notepad.maximized) {
    notepadEl.style.marginLeft = event.clientX - offsetX + "px";
    notepadEl.style.marginTop = event.clientY - offsetY + "px";
  }
  if (paint.drag && !paint.maximized) {
    paintEl.style.marginLeft = event.clientX - offsetX + "px";
    paintEl.style.marginTop = event.clientY - offsetY + "px";
  }
  if (media.drag && !media.maximized) {
    mediaEl.style.marginLeft = event.clientX - offsetX + "px";
    mediaEl.style.marginTop = event.clientY - offsetY + "px";
  }
  if (toolbox.drag && !toolbox.maximized) {
    toolboxEl.style.marginLeft = event.clientX - offsetX + "px";
    toolboxEl.style.marginTop = event.clientY - offsetY + "px";
  }
  if (terminal.drag && !terminal.maximized) {
    terminalEl.style.marginLeft = event.clientX - offsetX + "px";
    terminalEl.style.marginTop = event.clientY - offsetY + "px";
  }
});

document.addEventListener("mouseup", () => {
  prism.drag = false;
  folder.drag = false;
  setup.drag = false;
  ioMail.drag = false;
  calculator.drag = false;
  clock.drag = false;
  settings.drag = false;
  notepad.drag = false;
  paint.drag = false;
  media.drag = false;
  toolbox.drag = false;
  terminal.drag = false;
});

prismBarEl.addEventListener("mousedown", (event) => {
  prism.drag = true;
  offsetX = event.offsetX;
  offsetY = event.offsetY;
});

folderBarEl.addEventListener("mousedown", (event) => {
  folder.drag = true;
  offsetX = event.offsetX;
  offsetY = event.offsetY;
});

function selectWin(win) {
  layer++;
  win.style.zIndex = layer;
}

searchBarEl.addEventListener("input", () => {
  updateApplications();
});

function updateApplications() {
  applicationsEl.innerHTML = "";
  for (let i = 0; i < applications.length; i++) {
    let from = applications[i].name.toLowerCase();
    let to = query.toLowerCase();
    if ((!searchE || searchBarEl.value.toLowerCase() == "" || from.includes(to)) && applications[i].installed) {
      let newApplicationEl = document.createElement("div");
      newApplicationEl.classList.add("application");
      newApplicationEl.style.backgroundColor = applications[i].color;
      newApplicationEl.addEventListener("mouseover", () => {
        newApplicationEl.style.backgroundColor = applications[i].hoverColor;
      });
      newApplicationEl.addEventListener("mouseleave", () => {
        newApplicationEl.style.backgroundColor = applications[i].color;
      });
      let graphicEl = document.createElement("img");
      graphicEl.src = applications[i].icon;
      graphicEl.draggable = false;
      newApplicationEl.appendChild(graphicEl);
      let nameEl = document.createElement("h2");
      nameEl.innerText = applications[i].name;
      newApplicationEl.appendChild(nameEl);
      newApplicationEl.addEventListener("click", () => {
        applications[i].clickFun();
      });
      applicationsEl.appendChild(newApplicationEl);
    }
  }
}
updateApplications();

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

function toggleSearch() {
  searchE = !searchE;
  if (searchE) {
    searchBarEl.style.display = "block";
    setTimeout(() => {
      searchBarEl.style.transform = "none";
      searchBarEl.style.opacity = "100%";
      searchBarEl.style.marginLeft = "160px";
      searchBarEl.focus();
    }, 1);
  } else {
    searchBarEl.style.transform = "rotateY(90deg)";
    searchBarEl.style.opacity = "0%";
    searchBarEl.style.marginLeft = "50px";
    setTimeout(() => {
      searchBarEl.style.display = "none";
    }, 500);
  }
}

function logOut() {
  if (powerOffE) {
    togglePowerOptions();
  }
  if (startMenuIsOpen) {
    toggleStartMenu();
  }
  setTimeout(() => {
    window.location.href = "#lockscreen";
    lockscreenStageOneEl.style.display = "block";
    window.location.href = "#lockscreen";
    lockClockContainerEl.style.marginLeft = "calc(100vw - 500px)";
    lockClockContainerEl.style.transform = "none";
    lockClockContainerEl.style.opacity = "100%";
    lockscreenStageTwoEl.style.display = "none";
    lockscreenStageTwoEl.style.transform = "scale(1.5)";
    lockscreenStageTwoEl.style.opacity = "0%";
    lockPowerOffEl.style.display = "block";
    desktopEl.style.filter = "blur(10px)";
    desktopEl.style.backdropFilter = "blur(10px)";
    taskbarEl.style.marginTop = "100vh";
  }, 500);
}

function togglePowerOptions() {
  powerOffE = !powerOffE;
  if (powerOffE) {
    powerOffOptionsEl.style.display = "flex";
    setTimeout(() => {
      powerOffOptionsEl.style.transform = "none";
      powerOffOptionsEl.style.opacity = "100%";
      powerOffOptionsEl.style.marginLeft = "80px";
    }, 1);
  } else {
    powerOffOptionsEl.style.transform = "rotateY(90deg)";
    powerOffOptionsEl.style.opacity = "0%";
    powerOffOptionsEl.style.marginLeft = "0";
    setTimeout(() => {
      powerOffOptionsEl.style.display = "none";
    }, 500);
  }
}

desktopEl.addEventListener("mousedown", () => {
  if (document.getElementById('tipForSavingData')) {
    document.getElementById('tipForSavingData').style.opacity = '0%'; setTimeout(() => { document.getElementById('tipForSavingData').style.display = 'none' }, 200);
  }
});

function toggleStartMenu() {
  if (!codeWithTlektuE) {
    startMenuIsOpen = !startMenuIsOpen;
    if (startMenuIsOpen) {
      taskbarEl.style.marginTop = "0";
      openSnd.currentTime = 0;
      openSnd.play();
      taskbarEl.style.boxShadow = " 0 5px 10px rgba(0, 0, 0, .5) ";
      startMenuEl.style.marginTop = "60px";
    } else {
      taskbarEl.style.marginTop = "calc(100vh - 60px)";
      closeSnd.currentTime = 0;
      closeSnd.play();
      taskbarEl.style.boxShadow = " 0 -5px 10px rgba(0, 0, 0, .5) ";
      startMenuEl.style.marginTop = "100vh";
    }
  } else {
    interactTletku();
  }
}

document.addEventListener("mousemove", (event) => {
  selection.width = event.clientX - selection.x;
  selection.height = event.clientY - selection.y;
});

desktopEl.addEventListener("mouseup", () => {
  selectE = false;
});

desktopEl.addEventListener("mousedown", (event) => {
  if (event.target == desktopEl && !startMenuIsOpen) {
    selectE = true;
    selection.x = event.clientX;
    selection.y = event.clientY;
    selection.width = 0;
    selection.height = 0;
  }
});

document.addEventListener("keydown", (event) => {
  let modifier = event.altKey;
  if (modifier && event.key.toLowerCase() == "m") {
    volume += 0.1;
    volumeContainerEl.style.marginTop = "calc(100vh - 120px)";
    beepSnd.currentTime = 0;
    beepSnd.play();
    setTimeout(() => {
      volumeContainerEl.style.marginTop = "100vh";
    }, 5000);
  }
  if (modifier && event.key.toLowerCase() == "n") {
    volume -= 0.1;
    volumeContainerEl.style.marginTop = "calc(100vh - 120px)";
    beepSnd.currentTime = 0;
    beepSnd.play();
    setTimeout(() => {
      volumeContainerEl.style.marginTop = "100vh";
    }, 5000);
  }
});

document.addEventListener('mousemove', (e) => {
  if (!hoverTletkuE && !tletkuTalkE) {
    // Get the element's position and dimensions
    const boxRect = startBtnEl.getBoundingClientRect();
    const boxCenterX = boxRect.left + boxRect.width / 2;
    const boxCenterY = boxRect.top + boxRect.height / 2;

    // Calculate the difference (delta) between mouse position and box center
    const deltaX = e.clientX - boxCenterX;
    const deltaY = e.clientY - boxCenterY;

    // Calculate the angle in radians using Math.atan2(deltaY, deltaX)
    const angleRadians = Math.atan2(deltaY, deltaX); //

    // Convert the angle from radians to degrees (optional, but often more readable)
    // CSS transform: rotate() can accept radians (rad) or degrees (deg)
    const angleDegrees = angleRadians * (180 / Math.PI);

    // Apply the rotation using the CSS transform property
    // Add 90 degrees offset because, by default, 0 degrees points right
    // An element's "top" usually points up (relative to its own initial orientation)
    startBtnEl.style.transform = `rotate(${angleDegrees}deg)`;
    if (codeWithTlektuE) {
      startBtnEl.style.transform += " scale(3)";
    }
  }
});

document.addEventListener("mousemove", (event) => {
  let rect = sliderBarEl.getBoundingClientRect();
  if (swipeE) {
    thumbX = event.clientX - offset - rect.left;
  }
});

document.addEventListener("mouseup", () => {
  swipeE = false;
  thumbX = 0;
});

thumbEl.addEventListener("mousedown", (event) => {
  swipeE = true;
  offset = event.offsetX;
});

function restart() {
  let closeBtns = document.getElementsByClassName("closeBtn");
  for (let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].click();
  }
  if (lockPowerOffE) {
    toggleLockPowerOffOptions();
  }
  if (powerOffE) {
    togglePowerOptions();
    toggleStartMenu();
  }
  setTimeout(() => {
    window.location.href = "#";
    lockClockContainerEl.style.marginLeft = "100vw";
    lockClockContainerEl.style.transform = "rotateY(90deg)";
    lockClockContainerEl.style.opacity = "0%";
    startupScreenEl.style.filter = "brightness(0%)";
    setTimeout(() => {
      startupScreenEl.style.filter = "brightness(100%)";
      setTimeout(() => {
        lockscreenStageOneEl.style.display = "block";
        window.location.href = "#lockscreen";
        lockClockContainerEl.style.marginLeft = "calc(100vw - 500px)";
        lockClockContainerEl.style.transform = "none";
        lockClockContainerEl.style.opacity = "100%";
        lockscreenStageTwoEl.style.display = "none";
        lockscreenStageTwoEl.style.transform = "scale(1.5)";
        lockscreenStageTwoEl.style.opacity = "0%";
        lockPowerOffEl.style.display = "block";
        desktopEl.style.filter = "blur(10px)";
        desktopEl.style.backdropFilter = "blur(10px)";
        taskbarEl.style.marginTop = "100vh";
        if (startMenuIsOpen) {
          toggleStartMenu();
        }
        aukaContentEl.src = "https://isaacio.farleyengineeredsolutions.org/browser";
      }, 5000);
    }, 6000);
  }, 750);
}

function powerOff() {
  toggleLockPowerOffOptions();
  setTimeout(() => {
    window.location.href = "#";
    startupScreenEl.style.filter = "brightness(0%)";
  }, 750);
}

function toggleLockPowerOffOptions() {
  lockPowerOffE = !lockPowerOffE;
  if (lockPowerOffE) {
    lockPowerOffOptionsEl.style.display = "flex";
    setTimeout(() => {
      lockPowerOffOptionsEl.style.transform = "none";
      lockPowerOffOptionsEl.style.opacity = "100%";
      lockPowerOffOptionsEl.style.marginLeft = "70px";
    }, 1);
  } else {
    lockPowerOffOptionsEl.style.transform = "rotateY(90deg)";
    lockPowerOffOptionsEl.style.opacity = "0%";
    lockPowerOffOptionsEl.style.marginLeft = "0";
    setTimeout(() => {
      lockPowerOffOptionsEl.style.display = "none";
    }, 500);
  }
}

lockscreenStageOneEl.addEventListener("click", (event) => {
  if (event.target == lockscreenStageOneEl || event.target == lockClockContainerEl) {
    passwordEl.value = "";
    lockBlockEl.style.display = "none";
    lockPowerOffEl.style.display = "none";
    lockClockContainerEl.style.transform = "scale(0.9) translateY(90px)";
    lockClockContainerEl.style.marginLeft = "100vw";
    setTimeout(() => {
      lockClockContainerEl.style.marginLeft = "100vw";
      setTimeout(() => {
        lockscreenStageOneEl.style.display = "none";
        setTimeout(() => {
          lockscreenStageTwoEl.style.display = "flex";
          setTimeout(() => {
            lockscreenStageTwoEl.style.transform = "none";
            lockscreenStageTwoEl.style.opacity = "100%";
          }, 10);
        }, 1);
      }, 500);
    }, 500);
  }
});

window.addEventListener("load", () => {
  window.location.href = "#lockscreen";
  lockClockContainerEl.style.marginLeft = "calc(100vw - 500px)";
  lockClockContainerEl.style.transform = "none";
  lockClockContainerEl.style.opacity = "100%";
});

function occasionally() {
  if (prism.open && internet) {
    let chance = Math.floor(Math.random() * 10);
    if (chance == 1) {
      junkUsage += 0.1;
    }
  }
}

function often() {
  setClock();
  for (let i = 0; i < timers.length; i++) {
    if (timers[i].active) {
      timers[i].currentTime--;
      if (timers[i].currentTime <= 0) {
        document.getElementById("timer" + timers[i].id).outerHTML = "";
        timers.splice(i, 1);
        notify("Clock Says:", "Your timer is finished! Right click me to close this notification.");
      }
    }
  }
}

function everlasting() {
  if (stopwatchTicking) {
    stopwatchMiliseconds++;
  }
}

function update() {
  let currentTime = new Date;
  let hour = currentTime.getHours();
  let minute = currentTime.getMinutes();
  let ampm;
  if (hour > 12) {
    hour -= 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  if (hour == 0) {
    hour = 12;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  let timeStr = hour + ":" + minute + " " + ampm;
  lockClockEl.innerText = timeStr;
  thumbEl.style.marginLeft = thumbX + "px";
  if (thumbX <= 0) {
    thumbX = 0;
  } else if (thumbX >= 170) {
    thumbX = 0;
    startupSnd.currentTime = 0;
    startupSnd.play();
    window.location.href = "#desktop";
    desktopEl.style.filter = "none";
    desktopEl.style.backdropFilter = "none";
    taskbarEl.style.marginTop = "calc(100vh - 60px)";
    taskbarEl.style.transform = "none";
    taskbarEl.style.opacity = "100%";
    if (!setupE) {
      openSetup();
      ssOneEl.style.display = "block";
      setTimeout(() => {
        ssOneEl.style.transform = "none";
        setTimeout(() => {
          setupEl.style.transition = "0.2s";
        }, 2500);
      }, 1);
    }
  }
  if ((hoverTletkuE || tletkuTalkE) && !codeWithTlektuE) {
    startBtnEl.style.transform = "none";
  }
  if (hoverTletkuE && !tletkuTalkE) {
    startBtnEl.src = "images/veryHappyTletku.png";
  }
  if (tletkuTalkE) {
    startBtnEl.src = "images/happyTletku.png";
  }
  if ((!hoverTletkuE && !tletkuTalkE) || codeWithTlektuE) {
    startBtnEl.src = "images/" + emotion + ".png";
  }
  let year = currentTime.getFullYear();
  let month = currentTime.getMonth() + 1;
  let day = currentTime.getDate();
  let dateStr = month + "-" + day + "-" + year;
  let weekDay = currentTime.getDay();
  weekDay = weekDays[weekDay];
  clockEl.innerHTML = timeStr + "<span style='color:transparent ; -webkit-text-stroke: 0px transparent ;'>---</span>" + dateStr + "<span style='color:transparent ; -webkit-text-stroke: 0px transparent ;'>---</span>" + weekDay;
  if (volume <= 0) {
    volume = 0;
  } else if (volume >= 1) {
    volume = 1;
  }
  for (let i = 0; i < audioEls.length; i++) {
    audioEls[i].volume = volume;
  }
  volumeEl.style.width = volume * 100 + "%";
  if (selectE) {
    selectionEl.style.display = "block";
  } else {
    selectionEl.style.display = "none";
  }
  if (selection.width < 0) {
    selectionEl.style.marginLeft = selection.x - selection.width * -1 + "px";
    selectionEl.style.width = selection.width * -1 + "px";
  } else {
    selectionEl.style.marginLeft = selection.x + "px";
    selectionEl.style.width = selection.width + "px";
  }
  if (selection.height < 0) {
    selectionEl.style.marginTop = selection.y - selection.height * -1 + "px";
    selectionEl.style.height = selection.height * -1 + "px";
  } else {
    selectionEl.style.marginTop = selection.y + "px";
    selectionEl.style.height = selection.height + "px";
  }
  query = searchBarEl.value;
  if (tletkusEmotion == "normal") {
    todaysGraphicEl.src = "images/icon.png";
  } else if (tletkusEmotion == "happy") {
    todaysGraphicEl.src = "images/happyTletku.png";
  } else if (tletkusEmotion == "bored") {
    todaysGraphicEl.src = "images/boredTletku.png";
  } else if (tletkusEmotion == "mad") {
    todaysGraphicEl.src = "images/madTletku.png";
  } else if (tletkusEmotion == "sad") {
    todaysGraphicEl.src = "images/sadTletku.png";
  } else if (tletkusEmotion == "sus") {
    todaysGraphicEl.src = "images/susTletku.png";
  } else if (tletkusEmotion == "very happy") {
    todaysGraphicEl.src = "images/veryHappyTletku.png";
  } else if (tletkusEmotion == "sleep") {
    todaysGraphicEl.src = "images/sleepTletku.png";
  } else if (tletkusEmotion == "surprized") {
    todaysGraphicEl.src = "images/surprizedTletku.png";
  }
  if (ampm == "AM") {
    greeting = "Good Morning, " + username + "!";
  } else if (hour < 5) {
    greeting = "Good Afternoon, " + username + "!";
  } else if (hour < 8) {
    greeting = "Good Evening, " + username + "!";
  } else {
    greeting = "Good Night, " + username + "!";
  }
  if (month == 1 && day == 0) {
    todaysGraphicEl.src = "images/newYear.png";
    greeting = "Happy New Year, " + username + "!";
  } else if (month == 2 && day == 2) {
    todaysGraphicEl.src = "images/womanBirthday.png";
    greeting = "Happy Birthday, Jackie!";
  } else if (month == 2 && day == 18) {
    todaysGraphicEl.src = "images/vikenaitProductions.png";
    greeting = "Happy Birthday to me!";
  } else if (month == 2 && day == 28) {
    todaysGraphicEl.src = "images/womanBirthday.png";
    greeting = "Happy Birthday, Shelly!";
  } else if (month == 4 && day == 28) {
    todaysGraphicEl.src = "images/easter.png";
    greeting = "Happy Easter!";
  } else if (month == 4 && day == 8) {
    todaysGraphicEl.src = "https://farleyengineeredsolutions.org/pyramid-sphinx-fes-logo-15-fes.jpg";
    greeting = "Happy Birthday, Dad!";
  } else if (month == 4 && day == 9) {
    todaysGraphicEl.src = "https://camden.farleyengineeredsolutions.org/sigma.png";
    greeting = "Happy Birthday, Camden!";
  } else if (month == 7 && day == 4) {
    todaysGraphicEl.src = "images/independenceDay.png";
    greeting = "Happy Independence Day!";
  } else if (month == 9 && day == 4) {
    todaysGraphicEl.src = "images/womanBirthday.png";
    greeting = "Happy Birthday, Mom!";
  } else if (month == 11 && day == 27) {
    todaysGraphicEl.src = "images/womanBirthday.png";
    greeting = "Happy Birthday, Grandma!";
  } else if (month == 11 && day == 28) {
    todaysGraphicEl.src = "https://iostudio.farleyengineeredsolutions.org/icon.png";
    greeting = "Happy Birthday, Isaac!";
  } else if (month == 12 && day == 13) {
    todaysGraphicEl.src = "https://jocelyn.farleyengineeredsolutions.org/Heart_Icon.png";
    greeting = "Happy Birthday, Jocelyn!";
  } else if (month == 12 && day == 25) {
    todaysGraphicEl.src = "images/christmas.png";
    greeting = "Merry Christmas!";
  } else if (weekDay == "Saturday") {
    greeting = "Happy Sabbath!";
  }
  greetingEl.innerText = greeting;
  if (weatherEnabled && internet) {
    enableWeatherBtnEl.style.display = "none";
    weatherEl.style.display = "block";
    weatherNoInternetScreenEl.style.display = "none";
  }
  if (!internet) {
    weatherEl.style.display = "none";
  }
  if (!internet && weatherEnabled) {
    weatherNoInternetScreenEl.style.display = "flex";
    enableWeatherBtnEl.style.display = "none";
  }
  locationOkEl.innerText = locationSe;
  weatherDescEl.innerText = weatherDesc;
  if (weatherDesc == "thunderstorm with light rain" || weatherDesc == "thunderstorm with rain" || weatherDesc == "thunderstorm with heavy rain" || weatherDesc == "light thunderstorm" || weatherDesc == "thunderstorm" || weatherDesc == "heavy thunderstorm" || weatherDesc == "ragged thunderstorm" || weatherDesc == "thunderstorm with light drizzle" || weatherDesc == "thunderstorm with drizzle" || weatherDesc == "thunderstorm with heavy drizzle") {
    weatherGraphicEl.src = "images/thunderstorm.png";
  } else if (weatherDesc == "light intensity drizzle" || weatherDesc == "drizzle" || weatherDesc == "light intensity shower rain" || weatherDesc == "shower rain" || weatherDesc == "heavy intensity shower rain" || weatherDesc == "ragged shower rain" || weatherDesc == "shower rain and drizzle" || weatherDesc == "heavy shower rain and drizzle" || weatherDesc == "light rain" || weatherDesc == "moderate rain" || weatherDesc == "heavy rain" || weatherDesc == "extreme rain" || weatherDesc == "freezing rain" || weatherDesc == "heavy intensity rain") {
    weatherGraphicEl.src = "images/rainy.png";
  } else if (weatherDesc == "light shower snow" || weatherDesc == "shower snow" || weatherDesc == "heavy shower snow" || weatherDesc == "light shower sleet" || weatherDesc == "shower sleet" || weatherDesc == "light snow" || weatherDesc == "heavy snow" || weatherDesc == "sleet") {
    weatherGraphicEl.src = "images/snowy.png";
  } else if (weatherDesc == "mist" || weatherDesc == "smoke" || weatherDesc == "haze" || weatherDesc == "fog" || weatherDesc == "sand" || weatherDesc == "dust" || weatherDesc == "volcanic ash") {
    weatherGraphicEl.src = "images/fog.png";
  } else if (weatherDesc == "squalls") {
    weatherGraphicEl.src = "images/cloudy.png";
  } else if (weatherDesc == "tornado") {
    weatherGraphicEl.src = "images/tornado.png";
  } else if (weatherDesc == "clear sky") {
    weatherGraphicEl.src = "images/sunny.png";
  } else if (weatherDesc == "few clouds" || weatherDesc == "scattered clouds") {
    weatherGraphicEl.src = "images/sunnyAndCloudy.png";
  } else if (weatherDesc == "broken clouds" || weatherDesc == "overcast clouds") {
    weatherGraphicEl.src = "images/cloudy.png";
  }
  temperatureEl.innerText = temperature;
  verseEl.innerText = verse.content;
  verseSourceEl.innerText = verse.source;
  helpHeadingEl.innerText = helpHeading;
  helpDescEl.innerHTML = helpDesc;
  if (tletkuTalkE) {
    speechBubbleEl.style.display = "flex";
  } else {
    speechBubbleEl.style.display = "none";
  }
  if (codeWithTlektuE) {
    speechBubbleEl.style.marginLeft = "150px";
    speechBubbleEl.style.marginTop = "150px";
    speechBubbleEl.style.borderRadius = "0 100px 100px 100px";
  } else if (startMenuIsOpen) {
    speechBubbleEl.style.marginTop = "20px";
    speechBubbleEl.style.borderRadius = "0 100px 100px 100px";
  } else {
    speechBubbleEl.style.marginTop = "calc(100vh - 220px)";
    speechBubbleEl.style.borderRadius = "100px 100px 100px 0";
  }
  tletkuMessageEl.innerHTML = tletkuMessage;
  tletkuGreetingEl.innerText = tletkuGreeting;
  if (dir[ls]) {
    winFolderNameEl.innerText = dir[ls].name;
  } else if (ls == "desktop") {
    winFolderNameEl.innerText = ":root";
  }
  for (let i = 0; i < dir.length; i++) {
    if (dir[i].parent == "desktop") {
      if (dir[i].type == "folder") {
        document.getElementById("folderName" + dir[i].id).innerText = dir[i].name;
      } else if (dir[i].type == "document") {
        document.getElementById("documentName" + dir[i].id).innerText = dir[i].name;
      } else if (dir[i].type == "image") {
        document.getElementById("imageName" + dir[i].id).innerText = dir[i].name;
      }
    }
  }
  if (folder.open) {
    folderContentVekEl.innerHTML = "";
    for (let i = 0; i < dir.length; i++) {
      if (dir[i].parent == ls) {
        if (dir[i].type == "folder") {
          let newDirEl = document.createElement("div");
          newDirEl.classList.add("subDir");
          let newDirGraphicEl = document.createElement("img");
          newDirGraphicEl.src = folderGraphic;
          newDirGraphicEl.draggable = false;
          newDirEl.appendChild(newDirGraphicEl);
          let newDirNameEl = document.createElement("p");
          newDirNameEl.innerText = dir[i].name;
          newDirEl.appendChild(newDirNameEl);
          folderContentVekEl.appendChild(newDirEl);
          newDirEl.addEventListener("mousedown", (event) => {
            if (event.button == 0) {
              ls = i;
            }
          });
          newDirEl.addEventListener("contextmenu", () => {
            for (let j = 0; j < dir.length; j++) {
              if (dir[j].parent == "clipboard") {
                let ix = j;
                dir.splice(j, 1);
                dir = dir.map(item => {
                  if (item.parent > ix) {
                    return { ...item, parent: item.parent - 1 };
                  }
                  return item;
                });
              }
            }
            if (dir[i].parent == "desktop") {
              document.getElementById(dir[i].id).outerHTML = "";
            }
            dir[i].parent = "clipboard";
            if (!clipboardE) {
              toggleClipboard();
            }
            closeFolder();
          });
        } else if (dir[i].type == "document") {
          let newDirEl = document.createElement("div");
          newDirEl.classList.add("subDir");
          let newDirGraphicEl = document.createElement("img");
          newDirGraphicEl.src = "images/notepad.png";
          newDirGraphicEl.draggable = false;
          newDirEl.appendChild(newDirGraphicEl);
          let newDirNameEl = document.createElement("p");
          newDirNameEl.innerText = dir[i].name;
          newDirEl.appendChild(newDirNameEl);
          folderContentVekEl.appendChild(newDirEl);
          newDirEl.addEventListener("mousedown", (event) => {
            if (event.button == 0) {
              openNotepad();
              notepadLS = i;
              notepadContentVekEl.value = dir[i].content;
            }
          });
          newDirEl.addEventListener("contextmenu", () => {
            for (let j = 0; j < dir.length; j++) {
              if (dir[j].parent == "clipboard") {
                let ix = j;
                dir.splice(j, 1);
                dir = dir.map(item => {
                  if (item.parent > ix) {
                    return { ...item, parent: item.parent - 1 };
                  }
                  return item;
                });
              }
            }
            if (dir[i].parent == "desktop") {
              document.getElementById(dir[i].id).outerHTML = "";
            }
            dir[i].parent = "clipboard";
            if (!clipboardE) {
              toggleClipboard();
            }
            closeFolder();
          });
        } else if (dir[i].type == "html") {
          let newDirEl = document.createElement("div");
          newDirEl.classList.add("subDir");
          let newDirGraphicEl = document.createElement("img");
          newDirGraphicEl.src = "images/html.svg";
          newDirGraphicEl.draggable = false;
          newDirEl.appendChild(newDirGraphicEl);
          let newDirNameEl = document.createElement("p");
          newDirNameEl.innerText = dir[i].name;
          newDirEl.appendChild(newDirNameEl);
          folderContentVekEl.appendChild(newDirEl);
          newDirEl.addEventListener("mousedown", (event) => {
            if (event.button == 0) {
              openPrism();
              lastId++;
              let newTab = {
                id: lastId,
                href: "*con*" + dir[i].content
              };
              tabs.push(newTab);
              tabIndex = tabs.length - 1;
              aukaContentEl.srcdoc = dir[i].content;
            }
          });
          newDirEl.addEventListener("contextmenu", () => {
            for (let j = 0; j < dir.length; j++) {
              if (dir[j].parent == "clipboard") {
                let ix = j;
                dir.splice(j, 1);
                dir = dir.map(item => {
                  if (item.parent > ix) {
                    return { ...item, parent: item.parent - 1 };
                  }
                  return item;
                });
              }
            }
            if (dir[i].parent == "desktop") {
              document.getElementById(dir[i].id).outerHTML = "";
            }
            dir[i].parent = "clipboard";
            if (!clipboardE) {
              toggleClipboard();
            }
            closeFolder();
          });
        } else if (dir[i].type == "let") {
          let newDirEl = document.createElement("div");
          newDirEl.classList.add("subDir");
          let newDirGraphicEl = document.createElement("img");
          newDirGraphicEl.src = "images/let.png";
          newDirGraphicEl.draggable = false;
          newDirEl.appendChild(newDirGraphicEl);
          let newDirNameEl = document.createElement("p");
          newDirNameEl.innerText = dir[i].name;
          newDirEl.appendChild(newDirNameEl);
          folderContentVekEl.appendChild(newDirEl);
          newDirEl.addEventListener("mousedown", (event) => {
            if (event.button == 0) {
              eval(dir[i].content);
            }
          });
          newDirEl.addEventListener("contextmenu", () => {
            for (let j = 0; j < dir.length; j++) {
              if (dir[j].parent == "clipboard") {
                let ix = j;
                dir.splice(j, 1);
                dir = dir.map(item => {
                  if (item.parent > ix) {
                    return { ...item, parent: item.parent - 1 };
                  }
                  return item;
                });
              }
            }
            if (dir[i].parent == "desktop") {
              document.getElementById(dir[i].id).outerHTML = "";
            }
            dir[i].parent = "clipboard";
            if (!clipboardE) {
              toggleClipboard();
            }
            closeFolder();
          });
        } else if (dir[i].type == "o++") {
          let newDirEl = document.createElement("div");
          newDirEl.classList.add("subDir");
          let newDirGraphicEl = document.createElement("img");
          newDirGraphicEl.src = "images/o++.png";
          newDirGraphicEl.draggable = false;
          newDirEl.appendChild(newDirGraphicEl);
          let newDirNameEl = document.createElement("p");
          newDirNameEl.innerText = dir[i].name;
          newDirEl.appendChild(newDirNameEl);
          folderContentVekEl.appendChild(newDirEl);
          newDirEl.addEventListener("mousedown", (event) => {
            if (event.button == 0) {
              eval(dir[i].content);
            }
          });
          newDirEl.addEventListener("contextmenu", () => {
            for (let j = 0; j < dir.length; j++) {
              if (dir[j].parent == "clipboard") {
                let ix = j;
                dir.splice(j, 1);
                dir = dir.map(item => {
                  if (item.parent > ix) {
                    return { ...item, parent: item.parent - 1 };
                  }
                  return item;
                });
              }
            }
            if (dir[i].parent == "desktop") {
              document.getElementById(dir[i].id).outerHTML = "";
            }
            dir[i].parent = "clipboard";
            if (!clipboardE) {
              toggleClipboard();
            }
            closeFolder();
          });
        } else if (dir[i].type == "image") {
          let newDirEl = document.createElement("div");
          newDirEl.classList.add("subDir");
          let newDirGraphicEl = document.createElement("img");
          newDirGraphicEl.src = dir[i].content;
          newDirGraphicEl.style.border = "1px solid black";
          newDirGraphicEl.style.backgroundColor = "white";
          newDirGraphicEl.draggable = false;
          newDirEl.appendChild(newDirGraphicEl);
          let newDirNameEl = document.createElement("p");
          newDirNameEl.innerText = dir[i].name;
          newDirEl.appendChild(newDirNameEl);
          folderContentVekEl.appendChild(newDirEl);
          newDirEl.addEventListener("mousedown", (event) => {
            if (event.button == 0) {
              openMediaViewer();
              mediaO = i;
              okOpenMedia();
            }
          });
          newDirEl.addEventListener("contextmenu", () => {
            for (let j = 0; j < dir.length; j++) {
              if (dir[j].parent == "clipboard") {
                let ix = j;
                dir.splice(j, 1);
                dir = dir.map(item => {
                  if (item.parent > ix) {
                    return { ...item, parent: item.parent - 1 };
                  }
                  return item;
                });
              }
            }
            if (dir[i].parent == "desktop") {
              document.getElementById(dir[i].id).outerHTML = "";
            }
            dir[i].parent = "clipboard";
            if (!clipboardE) {
              toggleClipboard();
            }
            closeFolder();
          });
        } else if (dir[i].type == "music") {
          let newDirEl = document.createElement("div");
          newDirEl.classList.add("subDir");
          let newDirGraphicEl = document.createElement("img");
          newDirGraphicEl.src = "images/music.png";
          newDirGraphicEl.draggable = false;
          newDirEl.appendChild(newDirGraphicEl);
          let newDirNameEl = document.createElement("p");
          newDirNameEl.innerText = dir[i].name;
          newDirEl.appendChild(newDirNameEl);
          folderContentVekEl.appendChild(newDirEl);
          newDirEl.addEventListener("mousedown", (event) => {
            if (event.button == 0) {
              openMediaViewer();
              mediaO = i;
              okOpenMedia();
            }
          });
          newDirEl.addEventListener("contextmenu", () => {
            for (let j = 0; j < dir.length; j++) {
              if (dir[j].parent == "clipboard") {
                let ix = j;
                dir.splice(j, 1);
                dir = dir.map(item => {
                  if (item.parent > ix) {
                    return { ...item, parent: item.parent - 1 };
                  }
                  return item;
                });
              }
            }
            if (dir[i].parent == "desktop") {
              document.getElementById(dir[i].id).outerHTML = "";
            }
            dir[i].parent = "clipboard";
            if (!clipboardE) {
              toggleClipboard();
            }
            closeFolder();
          });
        }
      }
    }
  }
  if (dir[ls] || ls == "desktop") {
    if (ls == "desktop") {
      goToParentDirBtnEl.style.display = "none";
      renameFolderBtnEl.style.display = "none";
      deleteFolderBtnEl.style.display = "none";
    } else {
      goToParentDirBtnEl.style.display = "block";
      renameFolderBtnEl.style.display = "block";
      deleteFolderBtnEl.style.display = "block";
    }
  }
  clipboardEl.innerHTML = "";
  for (let i = 0; i < dir.length; i++) {
    if (dir[i].parent == "clipboard") {
      if (dir[i].type == "folder") {
        let clipFolderGraphicEl = document.createElement("img");
        clipFolderGraphicEl.src = folderGraphic;
        clipFolderGraphicEl.draggable = false;
        clipboardEl.appendChild(clipFolderGraphicEl);
        let clipFolderNameEl = document.createElement("p");
        clipFolderNameEl.innerText = dir[i].name;
        clipboardEl.appendChild(clipFolderNameEl);
      } else if (dir[i].type == "document") {
        let clipFolderGraphicEl = document.createElement("img");
        clipFolderGraphicEl.src = "images/notepad.png";
        clipFolderGraphicEl.draggable = false;
        clipboardEl.appendChild(clipFolderGraphicEl);
        let clipFolderNameEl = document.createElement("p");
        clipFolderNameEl.innerText = dir[i].name;
        clipboardEl.appendChild(clipFolderNameEl);
      } else if (dir[i].type == "html") {
        let clipFolderGraphicEl = document.createElement("img");
        clipFolderGraphicEl.src = "images/html.svg";
        clipFolderGraphicEl.draggable = false;
        clipboardEl.appendChild(clipFolderGraphicEl);
        let clipFolderNameEl = document.createElement("p");
        clipFolderNameEl.innerText = dir[i].name;
        clipboardEl.appendChild(clipFolderNameEl);
      } else if (dir[i].type == "let") {
        let clipFolderGraphicEl = document.createElement("img");
        clipFolderGraphicEl.src = "images/let.png";
        clipFolderGraphicEl.draggable = false;
        clipboardEl.appendChild(clipFolderGraphicEl);
        let clipFolderNameEl = document.createElement("p");
        clipFolderNameEl.innerText = dir[i].name;
        clipboardEl.appendChild(clipFolderNameEl);
      } else if (dir[i].type == "o++") {
        let clipFolderGraphicEl = document.createElement("img");
        clipFolderGraphicEl.src = "images/o++.png";
        clipFolderGraphicEl.draggable = false;
        clipboardEl.appendChild(clipFolderGraphicEl);
        let clipFolderNameEl = document.createElement("p");
        clipFolderNameEl.innerText = dir[i].name;
        clipboardEl.appendChild(clipFolderNameEl);
      } else if (dir[i].type == "image") {
        let clipFolderGraphicEl = document.createElement("img");
        clipFolderGraphicEl.src = dir[i].content;
        clipFolderGraphicEl.style.border = "1px solid black";
        clipFolderGraphicEl.style.backgroundColor = "white";
        clipFolderGraphicEl.draggable = false;
        clipboardEl.appendChild(clipFolderGraphicEl);
        let clipFolderNameEl = document.createElement("p");
        clipFolderNameEl.innerText = dir[i].name;
        clipboardEl.appendChild(clipFolderNameEl);
      } else if (dir[i].type == "music") {
        let clipFolderGraphicEl = document.createElement("img");
        clipFolderGraphicEl.src = "images/music.png";
        clipFolderGraphicEl.draggable = false;
        clipboardEl.appendChild(clipFolderGraphicEl);
        let clipFolderNameEl = document.createElement("p");
        clipFolderNameEl.innerText = dir[i].name;
        clipboardEl.appendChild(clipFolderNameEl);
      }
    }
  }
  if (internet) {
    internetEl.src = "images/wifi.png";
    internetEl.title = "Connected to the Internet";
    prismContentEl.style.display = "block";
    ioMailContentEl.style.display = "block";
    toolboxContentEl.style.display = "block";
    for (let i = 0; i < document.getElementsByClassName("noInternetScreen").length; i++) {
      document.getElementsByClassName("noInternetScreen")[i].style.display = "none";
    }
  } else {
    internetEl.src = "images/noWifi.png";
    internetEl.title = "No Internet Connection";
    prismContentEl.style.display = "none";
    ioMailContentEl.style.display = "none";
    toolboxContentEl.style.display = "none";
    for (let i = 0; i < document.getElementsByClassName("noInternetScreen").length; i++) {
      document.getElementsByClassName("noInternetScreen")[i].style.display = "flex";
    }
  }
  usernameEl.innerText = username;
  if (password) {
    sliderBarEl.style.display = "none";
    lockRequirementEl.innerText = "Please Enter your Password to Continue";
    passwordBarEl.style.display = "flex";
  } else {
    sliderBarEl.style.display = "block";
    lockRequirementEl.innerText = "Swipe to Continue";
    passwordBarEl.style.display = "none";
  }
  for (let i = 0; i < document.getElementsByClassName("usernameAppearance").length; i++) {
    document.getElementsByClassName("usernameAppearance")[i].innerText = username;
  }
  mathEl.innerText = math;
  detailedClockEl.innerText = currentTime;
  if (clockWidgetE) {
    clockWidgetEl.style.display = "block";
    toggleClockWidgetBtnEl.innerText = "Remove Clock Widget from Desktop";
  } else {
    clockWidgetEl.style.display = "none";
    toggleClockWidgetBtnEl.innerText = "Add Clock Widget to Desktop";
  }
  if (newTimerHours < 0) {
    newTimerHours = 0;
  }
  if (newTimerMinutes < 0) {
    newTimerMinutes = 0;
  }
  if (newTimerSeconds < 0) {
    newTimerSeconds = 0;
  }
  newTimerHoursEl.innerText = newTimerHours;
  if (newTimerMinutes >= 60) {
    newTimerMinutes = 0;
    newTimerHours++;
  }
  let newTimerMinutesStr = newTimerMinutes;
  if (newTimerMinutesStr < 10) {
    newTimerMinutesStr = "0" + newTimerMinutesStr;
  }
  newTimerMinutesEl.innerText = newTimerMinutesStr;
  if (newTimerSeconds >= 60) {
    newTimerSeconds = 0;
    newTimerMinutes++;
  }
  let newTimerSecondsStr = newTimerSeconds;
  if (newTimerSecondsStr < 10) {
    newTimerSecondsStr = "0" + newTimerSecondsStr;
  }
  newTimerSecondsEl.innerText = newTimerSecondsStr;
  for (let i = 0; i < timers.length; i++) {
    let remainingTime = timers[i].currentTime;
    let currentHour = Math.floor((remainingTime / 60) / 60);
    remainingTime -= (currentHour * 60) * 60;
    let currentMinute = Math.floor(remainingTime / 60);
    remainingTime -= currentMinute * 60;
    let currentSecond = remainingTime;
    if (currentMinute < 10) {
      currentMinute = "0" + currentMinute;
    }
    if (currentSecond < 10) {
      currentSecond = "0" + currentSecond;
    }
    document.querySelector("#timer" + timers[i].id + " h1").innerText = currentHour + ":" + currentMinute + ":" + currentSecond;
    document.querySelector("#timer" + timers[i].id + " .timerProgressContainer .timerProgress").style.width = (timers[i].currentTime / timers[i].totalTime) * 100 + "%";
  }
  if (stopwatchMiliseconds >= 100) {
    stopwatchMiliseconds = 0;
    stopwatchSeconds++;
  }
  if (stopwatchSeconds >= 60) {
    stopwatchSeconds = 0;
    stopwatchMinutes++;
  }
  if (stopwatchMinutes >= 60) {
    stopwatchMinutes = 0;
    stopwatchHours++;
  }
  let stopwatchMinutesStr = stopwatchMinutes;
  let stopwatchSecondsStr = stopwatchSeconds;
  if (stopwatchMinutesStr < 10) {
    stopwatchMinutesStr = "0" + stopwatchMinutesStr;
  }
  if (stopwatchSecondsStr < 10) {
    stopwatchSecondsStr = "0" + stopwatchSecondsStr;
  }
  stopwatchEl.innerHTML = stopwatchHours + ":" + stopwatchMinutesStr + ":" + stopwatchSecondsStr + ":<small>" + stopwatchMiliseconds + "</small>";
  if (newAlarmHour > 12) {
    newAlarmHour = 1;
  } else if (newAlarmHour < 1) {
    newAlarmHour = 12;
  }
  if (newAlarmMinute > 59) {
    newAlarmMinute = 0;
  } else if (newAlarmMinute < 0) {
    newAlarmMinute = 59;
  }
  newAlarmHourEl.innerText = newAlarmHour;
  let newAlarmMinuteStr = newAlarmMinute;
  if (newAlarmMinuteStr < 10) {
    newAlarmMinuteStr = "0" + newAlarmMinuteStr;
  }
  newAlarmMinuteEl.innerText = newAlarmMinuteStr;
  newAlarmAMPMEl.innerText = newAlarmAMPM;
  for (let i = 0; i < alarms.length; i++) {
    if (alarms[i].hour == hour && alarms[i].minute == minute && alarms[i].ampm == ampm) {
      notify("Clock Says:", "<strong>" + alarms[i].reminder + "</strong><br><br>Your alarm is has gone off! Right click me to close this notification.");
      document.getElementById("alarm" + alarms[i].id).outerHTML = "";
      alarms.splice(i, 1);
    }
  }
  let usedStorage = osUsage + appUsage + fileUsage + junkUsage;
  storageEl.style.width = usedStorage + "%";
  usedStorageEl.innerText = usedStorage;
  baseOSUsageEl.style.width = osUsage + "%";
  appUsageEl.style.width = appUsage + "%";
  fileUsageEl.style.width = fileUsage + "%";
  junkUsageEl.style.width = junkUsage + "%";
  usedStorageStatEl.innerText = usedStorage;
  remainingStorageStatEl.innerText = 100 - usedStorage;
  osUsageStatEl.innerText = osUsage;
  appUsageStatEl.innerText = appUsage;
  fileUsageStatEl.innerText = fileUsage;
  junkUsageStatEl.innerText = junkUsage;
  if (dir.length <= 0) {
    fileUsage = 0;
  }
  if (osUsage + appUsage + fileUsage + junkUsage > 100) {
    window.location.href = "#bsod";
  }
  document.body.style.backgroundImage = "url('" + wallpaper + "')";
  wallpaperPreviewEl.src = wallpaper;
  if (theme == "light") {
    for (let i = 0; i < document.getElementsByClassName("windowContent").length; i++) {
      document.getElementsByClassName("windowContent")[i].style.backgroundColor = "white";
      document.getElementsByClassName("windowContent")[i].style.color = "black";
    }
    notepadContentVekEl.style.color = "black";
  } else {
    for (let i = 0; i < document.getElementsByClassName("windowContent").length; i++) {
      document.getElementsByClassName("windowContent")[i].style.backgroundColor = "#222222";
      document.getElementsByClassName("windowContent")[i].style.color = "white";
    }
    notepadContentVekEl.style.color = "white";
  }
  document.documentElement.style.setProperty("--theme", themeColor);
  document.documentElement.style.setProperty("--hoverTheme", hoverThemeColor);
  document.documentElement.style.setProperty("--darkTheme", darkThemeColor);
  startMenuEl.style.backgroundImage = "radial-gradient(" + themeColor + ", " + darkThemeColor + ")";
  selectionEl.style.backgroundColor = themeColor;
  if (windowBarPosition == "top") {
    for (let i = 0; i < document.getElementsByClassName("window").length; i++) {
      document.getElementsByClassName("window")[i].style.flexDirection = "column";
    }
    for (let i = 0; i < document.getElementsByClassName("windowBar").length; i++) {
      document.getElementsByClassName("windowBar")[i].style.width = "100%";
      document.getElementsByClassName("windowBar")[i].style.height = "50px";
      document.getElementsByClassName("windowBar")[i].style.flexDirection = "row";
      document.getElementsByClassName("windowBar")[i].style.backgroundImage = "linear-gradient(90deg, " + themeColor + ", " + darkThemeColor + ")";
    }
    for (let i = 0; i < document.getElementsByClassName("windowContent").length; i++) {
      document.getElementsByClassName("windowContent")[i].style.width = "100%";
      document.getElementsByClassName("windowContent")[i].style.height = "calc(100% - 50px)";
    }
    for (let i = 0; i < document.getElementsByClassName("windowTitle").length; i++) {
      document.getElementsByClassName("windowTitle")[i].style.display = "block";
    }
    for (let i = 0; i < document.getElementsByClassName("windowActionButtons").length; i++) {
      document.getElementsByClassName("windowActionButtons")[i].style.width = "180px";
      document.getElementsByClassName("windowActionButtons")[i].style.height = "100%";
      document.getElementsByClassName("windowActionButtons")[i].style.flexDirection = "row";
    }
    for (let i = 0; i < document.getElementsByClassName("draggableArea").length; i++) {
      document.getElementsByClassName("draggableArea")[i].style.width = "calc(100% - 180px)";
      document.getElementsByClassName("draggableArea")[i].style.height = "100%";
      document.getElementsByClassName("draggableArea")[i].style.flexDirection = "row";
    }
    setupWABEl.style.width = "100px";
    setupWABEl.style.height = "100%";
    setupBarEl.style.width = "calc(100% - 100px)";
    setupBarEl.style.height = "100%";
    calculatorWABEl.style.width = "150px";
    calculatorWABEl.style.height = "100%";
    calculatorBarEl.style.width = "calc(100% - 150px)";
    calculatorBarEl.style.height = "100%";
    for (let i = 0; i < document.getElementsByClassName("windowIcon").length; i++) {
      document.getElementsByClassName("windowIcon")[i].style.display = "none";
    }
  } else {
    for (let i = 0; i < document.getElementsByClassName("window").length; i++) {
      document.getElementsByClassName("window")[i].style.flexDirection = "row";
    }
    for (let i = 0; i < document.getElementsByClassName("windowBar").length; i++) {
      document.getElementsByClassName("windowBar")[i].style.width = "50px";
      document.getElementsByClassName("windowBar")[i].style.height = "100%";
      document.getElementsByClassName("windowBar")[i].style.flexDirection = "column";
      document.getElementsByClassName("windowBar")[i].style.backgroundImage = "linear-gradient(" + themeColor + ", " + darkThemeColor + ")";
    }
    for (let i = 0; i < document.getElementsByClassName("windowContent").length; i++) {
      document.getElementsByClassName("windowContent")[i].style.width = "calc(100% - 50px)";
      document.getElementsByClassName("windowContent")[i].style.height = "100%";
    }
    for (let i = 0; i < document.getElementsByClassName("windowTitle").length; i++) {
      document.getElementsByClassName("windowTitle")[i].style.display = "none";
    }
    for (let i = 0; i < document.getElementsByClassName("windowActionButtons").length; i++) {
      document.getElementsByClassName("windowActionButtons")[i].style.width = "100%";
      document.getElementsByClassName("windowActionButtons")[i].style.height = "200px";
      document.getElementsByClassName("windowActionButtons")[i].style.flexDirection = "column";
    }
    for (let i = 0; i < document.getElementsByClassName("draggableArea").length; i++) {
      document.getElementsByClassName("draggableArea")[i].style.width = "100%";
      document.getElementsByClassName("draggableArea")[i].style.height = "calc(100% - 180px)";
      document.getElementsByClassName("draggableArea")[i].style.flexDirection = "column";
    }
    setupWABEl.style.width = "100%";
    setupWABEl.style.height = "100px";
    setupBarEl.style.width = "100%";
    setupBarEl.style.height = "calc(100% - 100px)";
    calculatorWABEl.style.width = "100%";
    calculatorWABEl.style.height = "150px";
    calculatorBarEl.style.width = "100%";
    calculatorBarEl.style.height = "calc(100% - 150px)";
    for (let i = 0; i < document.getElementsByClassName("windowIcon").length; i++) {
      document.getElementsByClassName("windowIcon")[i].style.display = "block";
    }
  }
  document.body.style.fontFamily = font;
  for (let i = 0; i < dir.length; i++) {
    if (dir[i].parent == "desktop") {
      if (dir[i].type == "folder") {
        document.getElementById("graphic" + dir[i].id).src = folderGraphic;
      }
    }
  }
  folderGraphicPreviewEl.src = folderGraphic;
  if (askPrismE) {
    askPrismSearchBarWidgetEl.style.display = "flex";
  } else {
    askPrismSearchBarWidgetEl.style.display = "none";
  }
  document.body.style.fontSize = textSize + "rem";
  if (highContrast) {
    document.body.style.fontWeight = "900";
    document.body.style.color = "white !important";
    document.body.style.webkitTextStroke = "1px black";
    document.body.style.letterSpacing = "2px";
  } else {
    document.body.style.fontWeight = "normal";
    document.body.style.color = "white";
    document.body.style.webkitTextStroke = "0px transparent";
    document.body.style.letterSpacing = "normal";
  }
  profileEl.src = profile;
  profilePreviewEl.src = profile;
  lockProfileEl.src = profile;
  if (notepadF || notepadF == 0) {
    notepadSaveLocationsEl.innerHTML = "";
    notepadOpenLocationsEl.innerHTML = "";
    let notepadFContainerEl = document.createElement("div");
    notepadFContainerEl.style.width = "100%";
    notepadFContainerEl.style.height = "50px";
    notepadFContainerEl.style.backgroundColor = "black";
    notepadFContainerEl.style.color = "white";
    notepadFContainerEl.style.display = "flex";
    notepadFContainerEl.style.alignItems = "center";
    notepadFContainerEl.style.justifyContent = "space-evenly";
    if (notepadF != "desktop") {
      let bDirEl = document.createElement("img");
      bDirEl.src = "images/toParentDir.png";
      bDirEl.style.cursor = "url('images/pointer.png'), auto";
      bDirEl.draggable = false;
      bDirEl.style.height = "75%";
      bDirEl.addEventListener("mousedown", () => {
        notepadF = dir[notepadF].parent;
      });
      notepadFContainerEl.appendChild(bDirEl);
    }
    let notepadFEl = document.createElement("h2");
    if (notepadF == "desktop") {
      notepadFEl.innerText = ":root";
    } else {
      notepadFEl.innerText = dir[notepadF].name;
    }
    notepadFContainerEl.appendChild(notepadFEl);
    notepadSaveLocationsEl.appendChild(notepadFContainerEl);
    notepadOpenLocationsEl.appendChild(notepadFContainerEl);
    for (let i = 0; i < dir.length; i++) {
      if (dir[i].parent == notepadF && dir[i].type == "folder") {
        let newSaveLocationEl = document.createElement("div");
        newSaveLocationEl.classList.add("saveLocation");
        let newSaveLocationGraphicEl = document.createElement("img");
        newSaveLocationGraphicEl.src = folderGraphic;
        newSaveLocationGraphicEl.draggable = false;
        newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
        let newSaveLocationNameEl = document.createElement("h3");
        newSaveLocationNameEl.innerText = dir[i].name;
        newSaveLocationEl.appendChild(newSaveLocationNameEl);
        newSaveLocationEl.addEventListener("mousedown", () => {
          notepadF = i;
        });
        notepadSaveLocationsEl.appendChild(newSaveLocationEl);
      }
      if (dir[i].parent == notepadF && dir[i].type == "folder") {
        let newSaveLocationEl = document.createElement("div");
        newSaveLocationEl.classList.add("saveLocation");
        let newSaveLocationGraphicEl = document.createElement("img");
        newSaveLocationGraphicEl.src = folderGraphic;
        newSaveLocationGraphicEl.draggable = false;
        newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
        let newSaveLocationNameEl = document.createElement("h3");
        newSaveLocationNameEl.innerText = dir[i].name;
        newSaveLocationEl.appendChild(newSaveLocationNameEl);
        newSaveLocationEl.addEventListener("mousedown", () => {
          notepadF = i;
        });
        notepadOpenLocationsEl.appendChild(newSaveLocationEl);
      } else if (dir[i].parent == notepadF && dir[i].type == "document") {
        let newSaveLocationEl = document.createElement("div");
        newSaveLocationEl.classList.add("saveLocation");
        let newSaveLocationGraphicEl = document.createElement("img");
        newSaveLocationGraphicEl.src = "images/notepad.png";
        newSaveLocationGraphicEl.draggable = false;
        newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
        let newSaveLocationNameEl = document.createElement("h3");
        newSaveLocationNameEl.innerText = dir[i].name;
        newSaveLocationEl.appendChild(newSaveLocationNameEl);
        newSaveLocationEl.addEventListener("mousedown", () => {
          notepadO = i;
        });
        if (i == notepadO) {
          newSaveLocationEl.style.backgroundColor = "var(--theme)";
          newSaveLocationEl.style.color = "white";
        }
        notepadOpenLocationsEl.appendChild(newSaveLocationEl);
      } else if (dir[i].parent == notepadF && dir[i].type == "html") {
        let newSaveLocationEl = document.createElement("div");
        newSaveLocationEl.classList.add("saveLocation");
        let newSaveLocationGraphicEl = document.createElement("img");
        newSaveLocationGraphicEl.src = "images/html.svg";
        newSaveLocationGraphicEl.draggable = false;
        newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
        let newSaveLocationNameEl = document.createElement("h3");
        newSaveLocationNameEl.innerText = dir[i].name;
        newSaveLocationEl.appendChild(newSaveLocationNameEl);
        newSaveLocationEl.addEventListener("mousedown", () => {
          notepadO = i;
        });
        if (i == notepadO) {
          newSaveLocationEl.style.backgroundColor = "var(--theme)";
          newSaveLocationEl.style.color = "white";
        }
        notepadOpenLocationsEl.appendChild(newSaveLocationEl);
      } else if (dir[i].parent == notepadF && dir[i].type == "let") {
        let newSaveLocationEl = document.createElement("div");
        newSaveLocationEl.classList.add("saveLocation");
        let newSaveLocationGraphicEl = document.createElement("img");
        newSaveLocationGraphicEl.src = "images/let.png";
        newSaveLocationGraphicEl.draggable = false;
        newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
        let newSaveLocationNameEl = document.createElement("h3");
        newSaveLocationNameEl.innerText = dir[i].name;
        newSaveLocationEl.appendChild(newSaveLocationNameEl);
        newSaveLocationEl.addEventListener("mousedown", () => {
          notepadO = i;
        });
        if (i == notepadO) {
          newSaveLocationEl.style.backgroundColor = "var(--theme)";
          newSaveLocationEl.style.color = "white";
        }
        notepadOpenLocationsEl.appendChild(newSaveLocationEl);
      } else if (dir[i].parent == notepadF && dir[i].type == "o++") {
        let newSaveLocationEl = document.createElement("div");
        newSaveLocationEl.classList.add("saveLocation");
        let newSaveLocationGraphicEl = document.createElement("img");
        newSaveLocationGraphicEl.src = "images/o++.png";
        newSaveLocationGraphicEl.draggable = false;
        newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
        let newSaveLocationNameEl = document.createElement("h3");
        newSaveLocationNameEl.innerText = dir[i].name;
        newSaveLocationEl.appendChild(newSaveLocationNameEl);
        newSaveLocationEl.addEventListener("mousedown", () => {
          notepadO = i;
        });
        if (i == notepadO) {
          newSaveLocationEl.style.backgroundColor = "var(--theme)";
          newSaveLocationEl.style.color = "white";
        }
        notepadOpenLocationsEl.appendChild(newSaveLocationEl);
      }
    }
  }
  if (!notepadLS && notepadLS != 0) {
    noteNameEl.innerText = "";
  } else {
    noteNameEl.innerText = " - " + dir[notepadLS].name;
    if (dir[notepadLS].type == "document") {
      noteNameEl.innerText += ".txt";
    } else {
      noteNameEl.innerText += "." + dir[notepadLS].type;
    }
  }
  canvas.style.width = canvas.width + "px";
  canvas.style.height = canvas.height + "px";
  canvas.style.marginLeft = "calc(50% - " + canvas.width / 2 + "px)";
  paintColorIconEl.style.backgroundColor = paintColor;
  colorListEl.innerHTML = "";
  for (let i = 0; i < paintColors.length; i++) {
    let newColorEl = document.createElement("div");
    newColorEl.classList.add("color");
    newColorEl.style.backgroundColor = paintColors[i];
    newColorEl.addEventListener("mousedown", () => {
      paintColor = paintColors[i];
    });
    colorListEl.appendChild(newColorEl);
  }
  colorPreviewEl.style.backgroundColor = paintColor;
  let newColor = "rgb(" + newColorRedEl.value + ", " + newColorGreenEl.value + ", " + newColorBlueEl.value + ")";
  newColorPreviewEl.style.backgroundColor = newColor;
  paintSizeEl.style.width = paintSize + "px";
  paintSizeEl.style.height = paintSize + "px";
  paintSize = paintSizeInputEl.value;
  paintSizePreviewEl.style.width = paintSize + "px";
  paintSizePreviewEl.style.height = paintSize + "px";
  if (paintBrush == "butt" || paintBrush == "square") {
    paintSizePreviewEl.style.borderRadius = "0";
    paintSizeEl.style.borderRadius = "0";
    paintSizePreviewEl.style.backgroundColor = "white";
    paintSizePreviewEl.style.backgroundImage = "none";
    paintSizeEl.style.backgroundColor = "white";
    paintSizeEl.style.backgroundImage = "none";
  } else {
    paintSizePreviewEl.style.borderRadius = "50%";
    paintSizeEl.style.borderRadius = "50%";
    paintSizePreviewEl.style.backgroundColor = "white";
    paintSizePreviewEl.style.backgroundImage = "none";
    paintSizeEl.style.backgroundColor = "white";
    paintSizeEl.style.backgroundImage = "none";
  }
  if (paintBrush == "spray paint") {
    paintSizePreviewEl.style.backgroundColor = "transparent";
    paintSizePreviewEl.style.backgroundImage = "url('images/sprayPaintLine.png')";
    paintSizeEl.style.backgroundColor = "transparent";
    paintSizeEl.style.backgroundImage = "url('images/sprayPaintLine.png')";
    paintSizeEl.style.borderRadius = "50%";
    paintSizePreviewEl.style.borderRadius = "50%";
  }
  if (paintBrush == "spray paint") {
    canvas.style.cursor = "url('images/sprayPaint.png'), auto";
  } else {
    canvas.style.cursor = "url('images/pencil.png'), auto";
  }
  paintTool = paintToolsEl.value;
  if (paintTool == "fill") {
    canvas.style.cursor = "url('images/fill.png'), auto";
  } else if (paintTool == "eyedropper") {
    canvas.style.cursor = "url('images/eyedropper.png'), auto";
  } else if (paintTool == "shape" || paintTool == "text") {
    canvas.style.cursor = "url('images/crosshair.png'), auto";
  } else if (paintTool == "pencil") {
    if (paintBrush == "spray paint") {
      canvas.style.cursor = "url('images/sprayPaint.png'), auto";
    } else {
      canvas.style.cursor = "url('images/pencil.png'), auto";
    }
  }
  if (paintHistoryIndex != 0) {
    undoIcon.style.display = "block";
  } else {
    undoIcon.style.display = "none";
  }
  if (paintTool == "shape") {
    shapesIconEl.style.display = "block";
  } else {
    shapesIconEl.style.display = "none";
  }
  shapeContainerEl.innerHTML = "";
  for (let i = 0; i < shapes.length; i++) {
    let newShapeEl = document.createElement("div");
    newShapeEl.classList.add("shape");
    let newShapeGraphicEl = document.createElement("img");
    newShapeGraphicEl.src = shapes[i].graphic;
    newShapeGraphicEl.draggable = false;
    newShapeEl.appendChild(newShapeGraphicEl);
    let newShapeNameEl = document.createElement("h3");
    newShapeNameEl.innerText = shapes[i].name;
    newShapeEl.appendChild(newShapeNameEl);
    newShapeEl.addEventListener("mousedown", () => {
      shapeIndex = i;
    });
    if (i == shapeIndex) {
      newShapeEl.style.backgroundColor = "var(--theme)";
    }
    shapeContainerEl.appendChild(newShapeEl);
  }
  paintTextContainerEl.style.marginLeft = paintTextX + "px";
  paintTextContainerEl.style.marginTop = paintTextY + "px";
  paintTextInputEl.style.color = paintColor;
  paintTextInputEl.style.fontSize = paintSize + 5 + "px";
  paintTextInputEl.style.fontFamily = paintFontEl.value;
  if (paintBold) {
    paintTextInputEl.style.fontWeight = "bold";
  } else {
    paintTextInputEl.style.fontWeight = "normal";
  }
  if (paintItalic) {
    paintTextInputEl.style.fontStyle = "italic";
  } else {
    paintTextInputEl.style.fontStyle = "normal";
  }
  if (paintTool == "text") {
    paintTextContainerEl.style.display = "flex";
  } else {
    paintTextContainerEl.style.display = "none";
  }
  if (paint.open) {
    paintSaveLocationsEl.innerHTML = "";
    paintOpenLocationsEl.innerHTML = "";
    let paintFContainerEl = document.createElement("div");
    paintFContainerEl.style.width = "100%";
    paintFContainerEl.style.height = "50px";
    paintFContainerEl.style.backgroundColor = "black";
    paintFContainerEl.style.color = "white";
    paintFContainerEl.style.display = "flex";
    paintFContainerEl.style.alignItems = "center";
    paintFContainerEl.style.justifyContent = "space-evenly";
    if (paintF != "desktop") {
      let bDirEl = document.createElement("img");
      bDirEl.src = "images/toParentDir.png";
      bDirEl.style.cursor = "url('images/pointer.png'), auto";
      bDirEl.draggable = false;
      bDirEl.style.height = "75%";
      bDirEl.addEventListener("mousedown", () => {
        paintF = dir[paintF].parent;
      });
      paintFContainerEl.appendChild(bDirEl);
    }
    let paintFEl = document.createElement("h2");
    if (paintF == "desktop") {
      paintFEl.innerText = ":root";
    } else {
      paintFEl.innerText = dir[paintF].name;
    }
    paintFContainerEl.appendChild(paintFEl);
    paintSaveLocationsEl.appendChild(paintFContainerEl);
    let paintFContainer2El = document.createElement("div");
    paintFContainer2El.style.width = "100%";
    paintFContainer2El.style.height = "50px";
    paintFContainer2El.style.backgroundColor = "black";
    paintFContainer2El.style.color = "white";
    paintFContainer2El.style.display = "flex";
    paintFContainer2El.style.alignItems = "center";
    paintFContainer2El.style.justifyContent = "space-evenly";
    if (paintF != "desktop") {
      let bDirEl = document.createElement("img");
      bDirEl.src = "images/toParentDir.png";
      bDirEl.style.cursor = "url('images/pointer.png'), auto";
      bDirEl.draggable = false;
      bDirEl.style.height = "75%";
      bDirEl.addEventListener("mousedown", () => {
        paintF = dir[paintF].parent;
      });
      paintFContainer2El.appendChild(bDirEl);
    }
    let paintF2El = document.createElement("h2");
    if (paintF == "desktop") {
      paintF2El.innerText = ":root";
    } else {
      paintF2El.innerText = dir[paintF].name;
    }
    paintFContainer2El.appendChild(paintF2El);
    paintOpenLocationsEl.appendChild(paintFContainer2El);
    for (let i = 0; i < dir.length; i++) {
      if (dir[i].parent == paintF && dir[i].type == "folder") {
        let newSaveLocationEl = document.createElement("div");
        newSaveLocationEl.classList.add("saveLocation");
        let newSaveLocationGraphicEl = document.createElement("img");
        newSaveLocationGraphicEl.src = folderGraphic;
        newSaveLocationGraphicEl.draggable = false;
        newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
        let newSaveLocationNameEl = document.createElement("h3");
        newSaveLocationNameEl.innerText = dir[i].name;
        newSaveLocationEl.appendChild(newSaveLocationNameEl);
        newSaveLocationEl.addEventListener("mousedown", () => {
          paintF = i;
        });
        paintSaveLocationsEl.appendChild(newSaveLocationEl);
      }
    }
    for (let i = 0; i < dir.length; i++) {
      if (dir[i].parent == paintF) {
        if (dir[i].type == "folder") {
          let newSaveLocationEl = document.createElement("div");
          newSaveLocationEl.classList.add("saveLocation");
          let newSaveLocationGraphicEl = document.createElement("img");
          newSaveLocationGraphicEl.src = folderGraphic;
          newSaveLocationGraphicEl.draggable = false;
          newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
          let newSaveLocationNameEl = document.createElement("h3");
          newSaveLocationNameEl.innerText = dir[i].name;
          newSaveLocationEl.appendChild(newSaveLocationNameEl);
          newSaveLocationEl.addEventListener("mousedown", () => {
            paintF = i;
          });
          paintOpenLocationsEl.appendChild(newSaveLocationEl);
        } else if (dir[i].type == "image") {
          let newSaveLocationEl = document.createElement("div");
          newSaveLocationEl.classList.add("saveLocation");
          let newSaveLocationGraphicEl = document.createElement("img");
          newSaveLocationGraphicEl.src = dir[i].content;
          newSaveLocationGraphicEl.style.border = "1px solid black";
          newSaveLocationGraphicEl.style.backgroundColor = "white";
          newSaveLocationGraphicEl.draggable = false;
          newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
          let newSaveLocationNameEl = document.createElement("h3");
          newSaveLocationNameEl.innerText = dir[i].name;
          newSaveLocationEl.appendChild(newSaveLocationNameEl);
          newSaveLocationEl.addEventListener("mousedown", () => {
            paintO = i;
          });
          if (i == paintO) {
            newSaveLocationEl.style.backgroundColor = "var(--theme)";
          }
          paintOpenLocationsEl.appendChild(newSaveLocationEl);
        }
      }
    }
  }
  if (fileUsage <= 0) {
    fileUsage = 0;
  }
  for (let i = 0; i < dir.length; i++) {
    if (dir[i].type == "image" && dir[i].parent == "desktop") {
      document.getElementById("graphic" + dir[i].id).src = dir[i].content;
    }
  }
  if ((paintLS || paintLS == 0) && paint.open) {
    openedGraphicNameEl.innerText = " - " + dir[paintLS].name + ".png";
  } else {
    openedGraphicNameEl.innerText = "";
  }
  if (media.open) {
    mediaOpenLocationsEl.innerHTML = "";
    let mediaFContainerEl = document.createElement("div");
    mediaFContainerEl.style.width = "100%";
    mediaFContainerEl.style.height = "50px";
    mediaFContainerEl.style.backgroundColor = "black";
    mediaFContainerEl.style.color = "white";
    mediaFContainerEl.style.display = "flex";
    mediaFContainerEl.style.alignItems = "center";
    mediaFContainerEl.style.justifyContent = "space-evenly";
    if (mediaF != "desktop") {
      let bDirEl = document.createElement("img");
      bDirEl.src = "images/toParentDir.png";
      bDirEl.style.cursor = "url('images/pointer.png'), auto";
      bDirEl.draggable = false;
      bDirEl.style.height = "75%";
      bDirEl.addEventListener("mousedown", () => {
        mediaF = dir[mediaF].parent;
      });
      mediaFContainerEl.appendChild(bDirEl);
    }
    let mediaFEl = document.createElement("h2");
    if (mediaF == "desktop") {
      mediaFEl.innerText = ":root";
    } else {
      mediaFEl.innerText = dir[mediaF].name;
    }
    mediaFContainerEl.appendChild(mediaFEl);
    mediaOpenLocationsEl.appendChild(mediaFContainerEl);
    for (let i = 0; i < dir.length; i++) {
      if (dir[i].parent == mediaF) {
        if (dir[i].type == "folder") {
          let newSaveLocationEl = document.createElement("div");
          newSaveLocationEl.classList.add("saveLocation");
          let newSaveLocationGraphicEl = document.createElement("img");
          newSaveLocationGraphicEl.src = folderGraphic;
          newSaveLocationGraphicEl.draggable = false;
          newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
          let newSaveLocationNameEl = document.createElement("h3");
          newSaveLocationNameEl.innerText = dir[i].name;
          newSaveLocationEl.appendChild(newSaveLocationNameEl);
          newSaveLocationEl.addEventListener("mousedown", () => {
            mediaF = i;
          });
          mediaOpenLocationsEl.appendChild(newSaveLocationEl);
        } else if (dir[i].type == "image") {
          let newSaveLocationEl = document.createElement("div");
          newSaveLocationEl.classList.add("saveLocation");
          let newSaveLocationGraphicEl = document.createElement("img");
          newSaveLocationGraphicEl.src = dir[i].content;
          newSaveLocationGraphicEl.style.border = "1px solid black";
          newSaveLocationGraphicEl.style.backgroundColor = "white";
          newSaveLocationGraphicEl.draggable = false;
          newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
          let newSaveLocationNameEl = document.createElement("h3");
          newSaveLocationNameEl.innerText = dir[i].name;
          newSaveLocationEl.appendChild(newSaveLocationNameEl);
          newSaveLocationEl.addEventListener("mousedown", () => {
            mediaO = i;
          });
          if (i == mediaO) {
            newSaveLocationEl.style.backgroundColor = "var(--theme)";
          }
          mediaOpenLocationsEl.appendChild(newSaveLocationEl);
        } else if (dir[i].type == "music") {
          let newSaveLocationEl = document.createElement("div");
          newSaveLocationEl.classList.add("saveLocation");
          let newSaveLocationGraphicEl = document.createElement("img");
          newSaveLocationGraphicEl.src = "images/music.png";
          newSaveLocationGraphicEl.draggable = false;
          newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
          let newSaveLocationNameEl = document.createElement("h3");
          newSaveLocationNameEl.innerText = dir[i].name;
          newSaveLocationEl.appendChild(newSaveLocationNameEl);
          newSaveLocationEl.addEventListener("mousedown", () => {
            mediaO = i;
          });
          if (i == mediaO) {
            newSaveLocationEl.style.backgroundColor = "var(--theme)";
          }
          mediaOpenLocationsEl.appendChild(newSaveLocationEl);
        }
      }
    }
  }
  mediaImgEl.style.transform = "scale(" + mediaZoom + ")";
  if (mediaLS || mediaLS == 0) {
    for (let i = 0; i < mediaImageControlEls.length; i++) {
      if (dir[mediaLS].type == "image") {
        mediaImageControlEls[i].style.display = "block";
      } else {
        mediaImageControlEls[i].style.display = "none";
      }
    }
  } else {
    for (let i = 0; i < mediaImageControlEls.length; i++) {
      mediaImageControlEls[i].style.display = "none";
    }
  }
  if (settings.open) {
    wallpaperUploadLocationsEl.innerHTML = "";
    folderGraphicUploadLocationsEl.innerHTML = "";
    profileUploadLocationsEl.innerHTML = "";
    let wallpaperFContainerEl = document.createElement("div");
    wallpaperFContainerEl.style.width = "100%";
    wallpaperFContainerEl.style.height = "50px";
    wallpaperFContainerEl.style.backgroundColor = "black";
    wallpaperFContainerEl.style.color = "white";
    wallpaperFContainerEl.style.display = "flex";
    wallpaperFContainerEl.style.alignItems = "center";
    wallpaperFContainerEl.style.justifyContent = "space-evenly";
    if (wallpaperF != "desktop") {
      let bDirEl = document.createElement("img");
      bDirEl.src = "images/toParentDir.png";
      bDirEl.style.cursor = "url('images/pointer.png'), auto";
      bDirEl.draggable = false;
      bDirEl.style.height = "75%";
      bDirEl.addEventListener("mousedown", () => {
        wallpaperF = dir[wallpaperF].parent;
      });
      wallpaperFContainerEl.appendChild(bDirEl);
    }
    let wallpaperFEl = document.createElement("h2");
    if (wallpaperF == "desktop") {
      wallpaperFEl.innerText = ":root";
    } else {
      wallpaperFEl.innerText = dir[wallpaperF].name;
    }
    wallpaperFContainerEl.appendChild(wallpaperFEl);
    wallpaperUploadLocationsEl.appendChild(wallpaperFContainerEl);
    let folderGraphicFContainerEl = document.createElement("div");
    folderGraphicFContainerEl.style.width = "100%";
    folderGraphicFContainerEl.style.height = "50px";
    folderGraphicFContainerEl.style.backgroundColor = "black";
    folderGraphicFContainerEl.style.color = "white";
    folderGraphicFContainerEl.style.display = "flex";
    folderGraphicFContainerEl.style.alignItems = "center";
    folderGraphicFContainerEl.style.justifyContent = "space-evenly";
    if (wallpaperF != "desktop") {
      let bDirEl = document.createElement("img");
      bDirEl.src = "images/toParentDir.png";
      bDirEl.style.cursor = "url('images/pointer.png'), auto";
      bDirEl.draggable = false;
      bDirEl.style.height = "75%";
      bDirEl.addEventListener("mousedown", () => {
        wallpaperF = dir[wallpaperF].parent;
      });
      folderGraphicFContainerEl.appendChild(bDirEl);
    }
    let wallpaperF2El = document.createElement("h2");
    if (wallpaperF == "desktop") {
      wallpaperF2El.innerText = ":root";
    } else {
      wallpaperF2El.innerText = dir[wallpaperF].name;
    }
    folderGraphicFContainerEl.appendChild(wallpaperF2El);
    folderGraphicUploadLocationsEl.appendChild(folderGraphicFContainerEl);
    let profileFContainerEl = document.createElement("div");
    profileFContainerEl.style.width = "100%";
    profileFContainerEl.style.height = "50px";
    profileFContainerEl.style.backgroundColor = "black";
    profileFContainerEl.style.color = "white";
    profileFContainerEl.style.display = "flex";
    profileFContainerEl.style.alignItems = "center";
    profileFContainerEl.style.justifyContent = "space-evenly";
    if (wallpaperF != "desktop") {
      let bDirEl = document.createElement("img");
      bDirEl.src = "images/toParentDir.png";
      bDirEl.style.cursor = "url('images/pointer.png'), auto";
      bDirEl.draggable = false;
      bDirEl.style.height = "75%";
      bDirEl.addEventListener("mousedown", () => {
        wallpaperF = dir[wallpaperF].parent;
      });
      profileFContainerEl.appendChild(bDirEl);
    }
    let wallpaperF3El = document.createElement("h2");
    if (wallpaperF == "desktop") {
      wallpaperF3El.innerText = ":root";
    } else {
      wallpaperF3El.innerText = dir[wallpaperF].name;
    }
    profileFContainerEl.appendChild(wallpaperF3El);
    profileUploadLocationsEl.appendChild(profileFContainerEl);
    for (let i = 0; i < dir.length; i++) {
      if (dir[i].parent == wallpaperF) {
        if (dir[i].type == "folder") {
          let newSaveLocationEl = document.createElement("div");
          newSaveLocationEl.classList.add("saveLocation");
          let newSaveLocationGraphicEl = document.createElement("img");
          newSaveLocationGraphicEl.src = folderGraphic;
          newSaveLocationGraphicEl.draggable = false;
          newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
          let newSaveLocationNameEl = document.createElement("h3");
          newSaveLocationNameEl.innerText = dir[i].name;
          newSaveLocationEl.appendChild(newSaveLocationNameEl);
          newSaveLocationEl.addEventListener("mousedown", () => {
            wallpaperF = i;
          });
          wallpaperUploadLocationsEl.appendChild(newSaveLocationEl);
        } else if (dir[i].type == "image") {
          let newSaveLocationEl = document.createElement("div");
          newSaveLocationEl.classList.add("saveLocation");
          let newSaveLocationGraphicEl = document.createElement("img");
          newSaveLocationGraphicEl.src = dir[i].content;
          newSaveLocationGraphicEl.style.border = "1px solid black";
          newSaveLocationGraphicEl.style.backgroundColor = "white";
          newSaveLocationGraphicEl.draggable = false;
          newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
          let newSaveLocationNameEl = document.createElement("h3");
          newSaveLocationNameEl.innerText = dir[i].name;
          newSaveLocationEl.appendChild(newSaveLocationNameEl);
          newSaveLocationEl.addEventListener("mousedown", () => {
            wallpaperO = i;
          });
          if (i == wallpaperO) {
            newSaveLocationEl.style.backgroundColor = "var(--theme)";
          }
          wallpaperUploadLocationsEl.appendChild(newSaveLocationEl);
        }
      }
    }
    for (let i = 0; i < dir.length; i++) {
      if (dir[i].parent == wallpaperF) {
        if (dir[i].type == "folder") {
          let newSaveLocationEl = document.createElement("div");
          newSaveLocationEl.classList.add("saveLocation");
          let newSaveLocationGraphicEl = document.createElement("img");
          newSaveLocationGraphicEl.src = folderGraphic;
          newSaveLocationGraphicEl.draggable = false;
          newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
          let newSaveLocationNameEl = document.createElement("h3");
          newSaveLocationNameEl.innerText = dir[i].name;
          newSaveLocationEl.appendChild(newSaveLocationNameEl);
          newSaveLocationEl.addEventListener("mousedown", () => {
            wallpaperF = i;
          });
          folderGraphicUploadLocationsEl.appendChild(newSaveLocationEl);
        } else if (dir[i].type == "image") {
          let newSaveLocationEl = document.createElement("div");
          newSaveLocationEl.classList.add("saveLocation");
          let newSaveLocationGraphicEl = document.createElement("img");
          newSaveLocationGraphicEl.src = dir[i].content;
          newSaveLocationGraphicEl.style.border = "1px solid black";
          newSaveLocationGraphicEl.style.backgroundColor = "white";
          newSaveLocationGraphicEl.draggable = false;
          newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
          let newSaveLocationNameEl = document.createElement("h3");
          newSaveLocationNameEl.innerText = dir[i].name;
          newSaveLocationEl.appendChild(newSaveLocationNameEl);
          newSaveLocationEl.addEventListener("mousedown", () => {
            wallpaperO = i;
          });
          if (i == wallpaperO) {
            newSaveLocationEl.style.backgroundColor = "var(--theme)";
          }
          folderGraphicUploadLocationsEl.appendChild(newSaveLocationEl);
        }
      }
    }
    for (let i = 0; i < dir.length; i++) {
      if (dir[i].parent == wallpaperF) {
        if (dir[i].type == "folder") {
          let newSaveLocationEl = document.createElement("div");
          newSaveLocationEl.classList.add("saveLocation");
          let newSaveLocationGraphicEl = document.createElement("img");
          newSaveLocationGraphicEl.src = folderGraphic;
          newSaveLocationGraphicEl.draggable = false;
          newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
          let newSaveLocationNameEl = document.createElement("h3");
          newSaveLocationNameEl.innerText = dir[i].name;
          newSaveLocationEl.appendChild(newSaveLocationNameEl);
          newSaveLocationEl.addEventListener("mousedown", () => {
            wallpaperF = i;
          });
          profileUploadLocationsEl.appendChild(newSaveLocationEl);
        } else if (dir[i].type == "image") {
          let newSaveLocationEl = document.createElement("div");
          newSaveLocationEl.classList.add("saveLocation");
          let newSaveLocationGraphicEl = document.createElement("img");
          newSaveLocationGraphicEl.src = dir[i].content;
          newSaveLocationGraphicEl.style.border = "1px solid black";
          newSaveLocationGraphicEl.style.backgroundColor = "white";
          newSaveLocationGraphicEl.draggable = false;
          newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
          let newSaveLocationNameEl = document.createElement("h3");
          newSaveLocationNameEl.innerText = dir[i].name;
          newSaveLocationEl.appendChild(newSaveLocationNameEl);
          newSaveLocationEl.addEventListener("mousedown", () => {
            wallpaperO = i;
          });
          if (i == wallpaperO) {
            newSaveLocationEl.style.backgroundColor = "var(--theme)";
          }
          profileUploadLocationsEl.appendChild(newSaveLocationEl);
        }
      }
    }
  }
  if (suggestedIndex || suggestedIndex == 0) {
    suggestedGraphicEl.src = applications[suggestedIndex].icon;
    suggestedNameEl.innerText = applications[suggestedIndex].name;
    suggestedDescEl.innerText = applications[suggestedIndex].type;
    suggestedEl.style.backgroundColor = applications[suggestedIndex].color;
  }
  if (otherSuggestedIndices.length > 0) {
    moreSuggestedEl.innerHTML = "";
    for (let i = 0; i < otherSuggestedIndices.length; i++) {
      let newItemEl = document.createElement("div");
      newItemEl.classList.add("suggestedItem");
      newItemEl.style.backgroundColor = applications[otherSuggestedIndices[i]].color;
      let newItemGraphicEl = document.createElement("img");
      newItemGraphicEl.src = applications[otherSuggestedIndices[i]].icon;
      newItemGraphicEl.draggable = false;
      newItemEl.appendChild(newItemGraphicEl);
      let newItemNameEl = document.createElement("h2");
      newItemNameEl.innerText = applications[otherSuggestedIndices[i]].name;
      newItemEl.appendChild(newItemNameEl);
      newItemEl.addEventListener("mousedown", () => {
        toolboxContentVekEl.style.display = "none";
        toolboxSeeMoreEl.style.display = "block";
        seeMoreIndex = otherSuggestedIndices[i];
        slideshowIndex = 0;
      });
      moreSuggestedEl.appendChild(newItemEl);
    }
  }
  if (seeMoreIndex || seeMoreIndex == 0) {
    seeMoreLogoEl.src = applications[seeMoreIndex].icon;
    seeMoreNameEl.innerText = applications[seeMoreIndex].name;
    seeMoreAuthorEl.innerText = applications[seeMoreIndex].author;
    seeMoreBtnsEl.innerHTML = "";
    reviewsEl.innerHTML = "";
    slideshowEl.style.backgroundImage = "url('" + applications[seeMoreIndex].screenshots[slideshowIndex];
    for (let i = 0; i < applications[seeMoreIndex].reviews.length; i++) {
      let newReviewEl = document.createElement("fieldset");
      let newReviewAuthorEl = document.createElement("legend");
      newReviewAuthorEl.innerText = applications[seeMoreIndex].reviews[i].author;
      newReviewEl.appendChild(newReviewAuthorEl);
      let newReviewContentEl = document.createElement("p");
      newReviewContentEl.innerHTML = applications[seeMoreIndex].reviews[i].value;
      newReviewEl.appendChild(newReviewContentEl);
      reviewsEl.appendChild(newReviewEl);
    }
    if (applications[seeMoreIndex].install) {
      let loadingBarEl = document.createElement("img");
      loadingBarEl.src = "images/loadingBar.gif";
      loadingBarEl.draggable = false;
      loadingBarEl.style.height = "250px";
      seeMoreBtnsEl.appendChild(loadingBarEl);
    } else {
      if (applications[seeMoreIndex].installed) {
        let deleteBtnEl = document.createElement("button");
        deleteBtnEl.classList.add("coolBtn");
        deleteBtnEl.classList.add("negBtn");
        deleteBtnEl.innerText = "Delete";
        deleteBtnEl.addEventListener("mousedown", () => {
          applications[seeMoreIndex].installed = false;
          updateApplications();
          appUsage -= 1;
        });
        seeMoreBtnsEl.appendChild(deleteBtnEl);
        let openBtnEl = document.createElement("button");
        openBtnEl.classList.add("coolBtn");
        openBtnEl.innerText = "Open";
        openBtnEl.addEventListener("mousedown", () => {
          applications[seeMoreIndex].clickFun();
        });
        seeMoreBtnsEl.appendChild(openBtnEl);
      } else {
        let installBtnEl = document.createElement("button");
        installBtnEl.classList.add("coolBtn");
        installBtnEl.innerText = "Install";
        installBtnEl.addEventListener("mousedown", () => {
          let nowIndex = seeMoreIndex;
          applications[nowIndex].install = true;
          setTimeout(() => {
            applications[nowIndex].install = false;
            applications[nowIndex].installed = true;
            updateApplications();
            appUsage += 1;
            notify("Toolbox Says:", applications[nowIndex].name + " has been installed!");
          }, 10000);
        });
        seeMoreBtnsEl.appendChild(installBtnEl);
      }
    }
    reviewLogoEl.src = applications[seeMoreIndex].icon;
  }
  if (toolbox.open) {
    sourceFileChooseLocationsEl.innerHTML = "";
    newAppIconLocationsEl.innerHTML = "";
    addNewAppScreenshotLocationsEl.innerHTML = "";
    let toolboxFContainerEl = document.createElement("div");
    toolboxFContainerEl.style.width = "100%";
    toolboxFContainerEl.style.height = "50px";
    toolboxFContainerEl.style.backgroundColor = "black";
    toolboxFContainerEl.style.color = "white";
    toolboxFContainerEl.style.display = "flex";
    toolboxFContainerEl.style.alignItems = "center";
    toolboxFContainerEl.style.justifyContent = "space-evenly";
    if (toolboxF != "desktop") {
      let bDirEl = document.createElement("img");
      bDirEl.src = "images/toParentDir.png";
      bDirEl.style.cursor = "url('images/pointer.png'), auto";
      bDirEl.draggable = false;
      bDirEl.style.height = "75%";
      bDirEl.addEventListener("mousedown", () => {
        toolboxF = dir[toolboxF].parent;
      });
      toolboxFContainerEl.appendChild(bDirEl);
    }
    let toolboxFEl = document.createElement("h2");
    if (toolboxF == "desktop") {
      toolboxFEl.innerText = ":root";
    } else {
      toolboxFEl.innerText = dir[toolboxF].name;
    }
    toolboxFContainerEl.appendChild(toolboxFEl);
    sourceFileChooseLocationsEl.appendChild(toolboxFContainerEl);
    let toolboxFContainer2El = document.createElement("div");
    toolboxFContainer2El.style.width = "100%";
    toolboxFContainer2El.style.height = "50px";
    toolboxFContainer2El.style.backgroundColor = "black";
    toolboxFContainer2El.style.color = "white";
    toolboxFContainer2El.style.display = "flex";
    toolboxFContainer2El.style.alignItems = "center";
    toolboxFContainer2El.style.justifyContent = "space-evenly";
    if (toolboxF != "desktop") {
      let bDirEl = document.createElement("img");
      bDirEl.src = "images/toParentDir.png";
      bDirEl.style.cursor = "url('images/pointer.png'), auto";
      bDirEl.draggable = false;
      bDirEl.style.height = "75%";
      bDirEl.addEventListener("mousedown", () => {
        toolboxF = dir[toolboxF].parent;
      });
      toolboxFContainer2El.appendChild(bDirEl);
    }
    let toolboxF2El = document.createElement("h2");
    if (toolboxF == "desktop") {
      toolboxF2El.innerText = ":root";
    } else {
      toolboxF2El.innerText = dir[toolboxF].name;
    }
    toolboxFContainer2El.appendChild(toolboxF2El);
    newAppIconLocationsEl.appendChild(toolboxFContainer2El);
    let toolboxFContainer3El = document.createElement("div");
    toolboxFContainer3El.style.width = "100%";
    toolboxFContainer3El.style.height = "50px";
    toolboxFContainer3El.style.backgroundColor = "black";
    toolboxFContainer3El.style.color = "white";
    toolboxFContainer3El.style.display = "flex";
    toolboxFContainer3El.style.alignItems = "center";
    toolboxFContainer3El.style.justifyContent = "space-evenly";
    if (toolboxF != "desktop") {
      let bDirEl = document.createElement("img");
      bDirEl.src = "images/toParentDir.png";
      bDirEl.style.cursor = "url('images/pointer.png'), auto";
      bDirEl.draggable = false;
      bDirEl.style.height = "75%";
      bDirEl.addEventListener("mousedown", () => {
        toolboxF = dir[toolboxF].parent;
      });
      toolboxFContainer3El.appendChild(bDirEl);
    }
    let toolboxF3El = document.createElement("h2");
    if (toolboxF == "desktop") {
      toolboxF3El.innerText = ":root";
    } else {
      toolboxF3El.innerText = dir[toolboxF].name;
    }
    toolboxFContainer3El.appendChild(toolboxF3El);
    addNewAppScreenshotLocationsEl.appendChild(toolboxFContainer3El);
    for (let i = 0; i < dir.length; i++) {
      if (dir[i].parent == toolboxF) {
        if (dir[i].type == "folder") {
          let newSaveLocationEl = document.createElement("div");
          newSaveLocationEl.classList.add("saveLocation");
          let newSaveLocationGraphicEl = document.createElement("img");
          newSaveLocationGraphicEl.src = folderGraphic;
          newSaveLocationGraphicEl.draggable = false;
          newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
          let newSaveLocationNameEl = document.createElement("h3");
          newSaveLocationNameEl.innerText = dir[i].name;
          newSaveLocationEl.appendChild(newSaveLocationNameEl);
          newSaveLocationEl.addEventListener("mousedown", () => {
            toolboxF = i;
          });
          sourceFileChooseLocationsEl.appendChild(newSaveLocationEl);
        } else if (dir[i].type == "html") {
          let newSaveLocationEl = document.createElement("div");
          newSaveLocationEl.classList.add("saveLocation");
          let newSaveLocationGraphicEl = document.createElement("img");
          newSaveLocationGraphicEl.src = "images/html.svg";
          newSaveLocationGraphicEl.draggable = false;
          newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
          let newSaveLocationNameEl = document.createElement("h3");
          newSaveLocationNameEl.innerText = dir[i].name;
          newSaveLocationEl.appendChild(newSaveLocationNameEl);
          newSaveLocationEl.addEventListener("mousedown", () => {
            toolboxO = i;
          });
          if (i == toolboxO) {
            newSaveLocationEl.style.backgroundColor = "var(--theme)";
          }
          sourceFileChooseLocationsEl.appendChild(newSaveLocationEl);
        }
      }
      if (dir[i].parent == toolboxF) {
        if (dir[i].type == "folder") {
          let newSaveLocationEl = document.createElement("div");
          newSaveLocationEl.classList.add("saveLocation");
          let newSaveLocationGraphicEl = document.createElement("img");
          newSaveLocationGraphicEl.src = folderGraphic;
          newSaveLocationGraphicEl.draggable = false;
          newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
          let newSaveLocationNameEl = document.createElement("h3");
          newSaveLocationNameEl.innerText = dir[i].name;
          newSaveLocationEl.appendChild(newSaveLocationNameEl);
          newSaveLocationEl.addEventListener("mousedown", () => {
            toolboxF = i;
          });
          newAppIconLocationsEl.appendChild(newSaveLocationEl);
        } else if (dir[i].type == "image") {
          let newSaveLocationEl = document.createElement("div");
          newSaveLocationEl.classList.add("saveLocation");
          let newSaveLocationGraphicEl = document.createElement("img");
          newSaveLocationGraphicEl.src = dir[i].content;
          newSaveLocationGraphicEl.style.border = "1px solid black";
          newSaveLocationGraphicEl.style.backgroundColor = "white";
          newSaveLocationGraphicEl.draggable = false;
          newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
          let newSaveLocationNameEl = document.createElement("h3");
          newSaveLocationNameEl.innerText = dir[i].name;
          newSaveLocationEl.appendChild(newSaveLocationNameEl);
          newSaveLocationEl.addEventListener("mousedown", () => {
            toolboxO = i;
          });
          if (i == toolboxO) {
            newSaveLocationEl.style.backgroundColor = "var(--theme)";
          }
          newAppIconLocationsEl.appendChild(newSaveLocationEl);
        }
      }
      if (dir[i].parent == toolboxF) {
        if (dir[i].type == "folder") {
          let newSaveLocationEl = document.createElement("div");
          newSaveLocationEl.classList.add("saveLocation");
          let newSaveLocationGraphicEl = document.createElement("img");
          newSaveLocationGraphicEl.src = folderGraphic;
          newSaveLocationGraphicEl.draggable = false;
          newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
          let newSaveLocationNameEl = document.createElement("h3");
          newSaveLocationNameEl.innerText = dir[i].name;
          newSaveLocationEl.appendChild(newSaveLocationNameEl);
          newSaveLocationEl.addEventListener("mousedown", () => {
            toolboxF = i;
          });
          addNewAppScreenshotLocationsEl.appendChild(newSaveLocationEl);
        } else if (dir[i].type == "image") {
          let newSaveLocationEl = document.createElement("div");
          newSaveLocationEl.classList.add("saveLocation");
          let newSaveLocationGraphicEl = document.createElement("img");
          newSaveLocationGraphicEl.src = dir[i].content;
          newSaveLocationGraphicEl.style.border = "1px solid black";
          newSaveLocationGraphicEl.style.backgroundColor = "white";
          newSaveLocationGraphicEl.draggable = false;
          newSaveLocationEl.appendChild(newSaveLocationGraphicEl);
          let newSaveLocationNameEl = document.createElement("h3");
          newSaveLocationNameEl.innerText = dir[i].name;
          newSaveLocationEl.appendChild(newSaveLocationNameEl);
          newSaveLocationEl.addEventListener("mousedown", () => {
            toolboxO = i;
          });
          if (i == toolboxO) {
            newSaveLocationEl.style.backgroundColor = "var(--theme)";
          }
          addNewAppScreenshotLocationsEl.appendChild(newSaveLocationEl);
        }
      }
    }
  }
  if (toolboxLS || toolboxLS == 0) {
    toolboxUploadLSEl.innerText = dir[toolboxLS].name + ".html";
  } else {
    toolboxUploadLSEl.innerText = "";
  }
  newAppIconEl.src = newAppIcon;
  if (toolbox.open) {
    newAppScreenshotContainerEl.innerHTML = "";
    for (let i = 0; i < newAppScreenshots.length; i++) {
      let newScreenshotEl = document.createElement("img");
      newScreenshotEl.src = newAppScreenshots[i];
      newScreenshotEl.draggable = false;
      newScreenshotEl.addEventListener("contextmenu", () => {
        newAppScreenshots.splice(i, 1);
      });
      newAppScreenshotContainerEl.appendChild(newScreenshotEl);
    }
  }
  if (navInvisibleE) {
    taskbarEl.style.backgroundColor = "transparent";
    taskbarEl.style.boxShadow = "none";
    taskbarEl.style.backdropFilter = "none";
  } else if (navBlurE) {
    taskbarEl.style.backgroundColor = "transparent";
    taskbarEl.style.boxShadow = "none";
    taskbarEl.style.backdropFilter = "blur(10px)";
  } else {
    taskbarEl.style.backgroundColor = "var(--darkTheme)";
    taskbarEl.style.boxShadow = " 0 -5px 10px rgba(0, 0, 0, .5) ";
    taskbarEl.style.backdropFilter = "none";
  }
  if (navFloatE) {
    taskbarEl.style.width = "calc(100vw - 20px)";
    taskbarEl.style.height = "50px";
    taskbarEl.style.borderRadius = "10px";
    taskbarEl.style.marginLeft = "10px";
    taskbarEl.style.transform = "translateY(5px)";
  } else {
    taskbarEl.style.width = "100vw";
    taskbarEl.style.height = "60px";
    taskbarEl.style.borderRadius = "0";
    taskbarEl.style.marginLeft = "0";
    taskbarEl.style.transform = "translateY(0)";
    if (joinbar) {
      taskbarEl.style.borderRadius = "25px 25px 0 0";
    }
  }
  if (hasKeyboardE) {
    keyboardBtnEl.style.display = "block";
  } else {
    keyboardBtnEl.style.display = "none";
  }
  for (let i = 0; i < versionEls.length; i++) {
    versionEls[i].innerText = version;
  }
  tabBarEl.innerHTML = "";
  for (let i = 0; i < tabs.length; i++) {
    let newTabEl = document.createElement("div");
    newTabEl.classList.add("tab");
    if (tabIndex == i) {
      newTabEl.style.backgroundColor = "var(--hoverTheme)";
    }
    let newTabNameEl = document.createElement("p");
    newTabNameEl.innerText = "Tab " + (i + 1);
    newTabEl.appendChild(newTabNameEl);
    let newTabCloseBtnEl = document.createElement("h3");
    newTabCloseBtnEl.innerText = "X";
    newTabCloseBtnEl.style.cursor = "url('images/pointer.png'), auto";
    newTabCloseBtnEl.addEventListener("mousedown", () => {
      tabs.splice(i, 1);
      if (tabs.length == 0) {
        closePrism();
      } else {
        if (tabIndex > 0) {
          tabIndex--;
        }
        aukaContentEl.src = tabs[tabIndex].href;
      }
    });
    newTabEl.appendChild(newTabCloseBtnEl);
    tabBarEl.appendChild(newTabEl);
    newTabEl.addEventListener("mousedown", () => {
      if (tabs[i].href.startsWith("*con*")) {
        aukaContentEl.src = "code.html";
        aukaContentEl.srcdoc = tabs[i].href.substring(5, tabs[i].href.length);
      } else {
        aukaContentEl.removeAttribute("srcdoc");
        aukaContentEl.src = tabs[i].href;
      }
      tabIndex = i;
    });
  }
  let forAppUsage = 0;
  for (let i = 0; i < applications.length; i++) {
    if (applications[i].installed) {
      forAppUsage++;
    }
  }
  appUsage = forAppUsage;
  let forFileUsage = 0;
  for (let i = 0; i < dir.length; i++) {
    if (dir[i].type == "folder") {
      forFileUsage += 0.1;
    } else if (dir[i].type == "music") {
      forFileUsage += 0.5;
    } else if (dir[i].type == "image") {
      forFileUsage += Number((dir[i].width * dir[i].height / 1000000).toFixed(5));
    } else {
      forFileUsage += Number((dir[i].content.length / 1000000).toFixed(5));
    }
  }
  fileUsage = forFileUsage;
  bsodFileReaderContentEl.innerHTML = "";
  let newBsodHeaderEl = document.createElement("div");
  newBsodHeaderEl.classList.add("bsodFileReaderContentHeader");
  let newBsodHeaderLSEl = document.createElement("h2");
  if (bsodLS == "desktop") {
    newBsodHeaderLSEl.innerText = ":root";
  } else {
    newBsodHeaderLSEl.innerText = dir[bsodLS].name;
  }
  newBsodHeaderEl.appendChild(newBsodHeaderLSEl);
  if (bsodLS != "desktop") {
    let newBsodHeaderBackBtnEl = document.createElement("img");
    newBsodHeaderBackBtnEl.src = "images/toParentDir.png";
    newBsodHeaderBackBtnEl.draggable = false;
    newBsodHeaderBackBtnEl.style.cursor = "url('images/pointer.png'), auto";
    newBsodHeaderBackBtnEl.style.height = "75%";
    newBsodHeaderEl.appendChild(newBsodHeaderBackBtnEl);
    newBsodHeaderBackBtnEl.addEventListener("mousedown", () => {
      bsodLS = dir[bsodLS].parent;
    });
  }
  bsodFileReaderContentEl.appendChild(newBsodHeaderEl);
  for (let i = 0; i < dir.length; i++) {
    if (dir[i].parent == bsodLS) {
      if (dir[i].type == "folder") {
        let newBsodDirEl = document.createElement("div");
        newBsodDirEl.classList.add("bsodFileReaderDir");
        newBsodDirEl.innerText = dir[i].name;
        bsodFileReaderContentEl.appendChild(newBsodDirEl);
        newBsodDirEl.addEventListener("mousedown", () => {
          bsodLS = i;
        });
      } else if (dir[i].type == "document") {
        let newBsodDirEl = document.createElement("div");
        newBsodDirEl.classList.add("bsodFileReaderFile");
        newBsodDirEl.innerText = dir[i].name;
        bsodFileReaderContentEl.appendChild(newBsodDirEl);
        if (bsodO == i) {
          newBsodDirEl.style.backgroundColor = "cyan";
        }
        newBsodDirEl.addEventListener("mousedown", () => {
          bsodO = i;
        });
      } else if (dir[i].type == "html") {
        let newBsodDirEl = document.createElement("div");
        newBsodDirEl.classList.add("bsodFileReaderFile");
        newBsodDirEl.innerText = dir[i].name;
        bsodFileReaderContentEl.appendChild(newBsodDirEl);
        if (bsodO == i) {
          newBsodDirEl.style.backgroundColor = "cyan";
        }
        newBsodDirEl.addEventListener("mousedown", () => {
          bsodO = i;
        });
      } else if (dir[i].type == "let") {
        let newBsodDirEl = document.createElement("div");
        newBsodDirEl.classList.add("bsodFileReaderFile");
        newBsodDirEl.innerText = dir[i].name;
        bsodFileReaderContentEl.appendChild(newBsodDirEl);
        if (bsodO == i) {
          newBsodDirEl.style.backgroundColor = "cyan";
        }
        newBsodDirEl.addEventListener("mousedown", () => {
          bsodO = i;
        });
      } else if (dir[i].type == "o++") {
        let newBsodDirEl = document.createElement("div");
        newBsodDirEl.classList.add("bsodFileReaderFile");
        newBsodDirEl.innerText = dir[i].name;
        bsodFileReaderContentEl.appendChild(newBsodDirEl);
        if (bsodO == i) {
          newBsodDirEl.style.backgroundColor = "cyan";
        }
        newBsodDirEl.addEventListener("mousedown", () => {
          bsodO = i;
        });
      } else if (dir[i].type == "image") {
        let newBsodDirEl = document.createElement("div");
        newBsodDirEl.classList.add("bsodFileReaderFile");
        newBsodDirEl.innerText = dir[i].name;
        bsodFileReaderContentEl.appendChild(newBsodDirEl);
        if (bsodO == i) {
          newBsodDirEl.style.backgroundColor = "cyan";
        }
        newBsodDirEl.addEventListener("mousedown", () => {
          bsodO = i;
        });
      } else if (dir[i].type == "music") {
        let newBsodDirEl = document.createElement("div");
        newBsodDirEl.classList.add("bsodFileReaderFile");
        newBsodDirEl.innerText = dir[i].name;
        bsodFileReaderContentEl.appendChild(newBsodDirEl);
        if (bsodO == i) {
          newBsodDirEl.style.backgroundColor = "cyan";
        }
        newBsodDirEl.addEventListener("mousedown", () => {
          bsodO = i;
        });
      }
    }
  }
  if (bsodO || bsodO == 0) {
    bsodBtnEl.style.display = "block";
  } else {
    bsodBtnEl.style.display = "none";
  }
}

setInterval(update, 10);
setInterval(everlasting, 10);
setInterval(often, 1000);
setInterval(occasionally, 10000);


function showProject(value, creator, el) {
  for (let i = 0; i < document.getElementsByClassName("project").length; i++) {
    document.getElementsByClassName("project")[i].style.backgroundColor = "white";
    document.getElementsByClassName("project")[i].style.fontSize = "1.3rem";
    document.getElementsByClassName("project")[i].style.marginLeft = "10px";
    document.getElementsByClassName("project")[i].style.marginRight = "10px";
    document.getElementsByClassName("project")[i].style.borderRadius = "5px";
    document.getElementsByClassName("project")[i].style.color = "black";
  }
  cwtPreviewEl.style.display = "block";
  cwtPreviewEl.srcdoc = value;
  codeWithTletkuContentEl.style.backgroundColor = "white";
  el.style.backgroundColor = themeColor;
  el.style.fontSize = "1.9rem";
  el.style.marginLeft = "20px";
  el.style.marginRight = "0";
  el.style.borderRadius = "5px 0 0 5px";
  el.style.color = "white";
  codeEditorEl.style.display = "none";
  if (loggedIn) {
    forkBtnEl.style.display = "flex";
  }
  cwtAuthorEl.style.display = "flex";
  cwtAuthorEl.innerText = "By: " + creator;
  cwtResourcesEl.style.display = "none";
}