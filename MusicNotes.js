
const keys = [
    'A',
    'A Sharp/B Flat',
    'B',
    'C',
    'C Sharp/D Flat',
    'D',
    'D Sharp/E Flat',
    'E',
    'F',
    'F Sharp/G Flat',
    'G',
    'G Sharp/A Flat'
]

const scales = [
  "Major/Ionian",
  "Major Pentatonic",
  "Minor/Aeolian",
  "Minor Pentatonic",
  "Harmonic Major",
  "Harmonic Minor",
  "Melodic/Jazz Minor",
  "Blues",
  "Country",
  "Whole/Half Diminished",
  "Half/Whole Diminished",
  "Whole-Tone",
  "Dorian",
  "Lydian",
  "Mixolydian",
  "Phrygian",
  "Locrian",
  "Locrian Natural",
  "Super Locrian",
  "Ultra Locrian",
  "Phrygian Major",
  "Lydian Dominant",
  "Chinese",
  "Japanese",
  "Romanian",
  "Egyptian",
  "Javanese",
  "Hindu",
  "Hungarian Major",
  "Hungarian Minor",
  "Prometheus"
];

const scaleSteps = {
  "Major/Ionian": [2,2,1,2,2,2,1],
  "Major Pentatonic": [2,2,3,2,3],
  "Minor/Aeolian": [2,1,2,2,1,2,2],
  "Minor Pentatonic": [3,2,2,3,2],
  "Harmonic Major": [2,2,1,3,1,2,1],
  "Harmonic Minor": [2,1,2,2,1,3,1],
  "Melodic/Jazz Minor": [2,1,2,2,2,2,1],
  "Blues": [3,2,1,1,3,2],
  "Country": [2,1,1,3,2,3],
  "Whole/Half Diminished": [2,1,2,1,2,1,2,1],
  "Half/Whole Diminished": [1,2,1,2,3,1,2],
  "Whole-Tone": [2,2,2,2,2,2],
  "Dorian": [2,1,2,2,2,1,2],
  "Lydian": [2,2,2,1,2,2,1],
  "Mixolydian": [2,2,1,2,2,1,2],
  "Phrygian": [1,2,2,2,1,2,2],
  "Locrian": [1,2,2,1,2,2,2],
  "Locrian Natural": [1,2,2,1,3,1,2],
  "Super Locrian": [1,2,1,2,2,2,2],
  "Ultra Locrian": [1,2,2,1,2,1,3],
  "Phrygian Major": [1,3,1,2,1,2,2],
  "Lydian Dominant": [1,2,2,1,2,2,2],
  "Chinese": [4,2,1,4,1],
  "Japanese": [1,3,1,2,1,4],
  "Romanian": [2,1,3,1,2,1,2],
  "Egyptian": [2,3,2,3,2],
  "Javanese": [1,2,1,3,2,1,2],
  "Hindu": [2,2,1,2,1,2,2],
  "Hungarian Major": [3,1,2,1,2,1,2],
  "Hungarian Minor": [2,1,3,1,1,3,1],
  "Prometheus": [2,2,2,3,1,2]
}

const chords = [
    "Major",
    "Minor",
    "Major 7th",
    "Minor 7th",
    "Suspended 4th",
    "Dominant 7th, Suspended 4th",
    "Major 6th",
    "Minor 6th",
    "Dominant 7th",
    "Dominant 9th",
    "5th",
    "Major 6th, Add 9th",
    "Dominant 11th",
    "Dominant 13th",
    "Major, Add 9th",
    "Minor 9th",
    "Major 9th",
    "Augmented",
    "Dominant 7th, Sharp 5th",
    "Dominant 7th, Sharp 9th",
    "Diminished 7th",
    "Diminished Triad",
    "Dominant 7th, Flat 5th",
    "Dominant 7th, Flat 9th",
    "Dominant 9th, Flat 5th"
]

const steps = {
    "Major": [2,2,1,2,2,2,1],
    "Minor": [2,1,2,2,1,2,2],
    "Major 7th": [2,2,1,2,2,2,1],
    "Minor 7th": [2,1,2,2,1,2,2],
    "Suspended 4th": [2,2,1,2,2,2,1],
    "Dominant 7th, Suspended 4th": [2,2,1,2,2,1,2],
    "Major 6th": [2,2,1,2,2,2,1],
    "Minor 6th":[2,1,2,2,1,2,2],
    "Dominant 7th": [2,2,1,2,2,1,2],
    "Dominant 9th": [2,2,1,2,2,1,2],
    "5th": [2,2,1,2,2,2,1],
    "Major 6th, Add 9th": [2,2,1,2,2,2,1],
    "Dominant 11th": [2,2,1,2,2,1,2],
    "Dominant 13th": [2,2,1,2,2,1,2],
    "Major, Add 9th": [2,2,1,2,2,2,1],
    "Minor 9th": [2,1,2,2,1,2,2],
    "Major 9th": [2,2,1,2,2,2,1],
    "Augmented": [2,2,1,3,1,1,2], 
    "Dominant 7th, Sharp 5th": [2,2,1,3,1,1,2],
    "Dominant 7th, Sharp 9th": [3,1,1,2,2,1,2],
    "Diminished 7th": [2,1,2,1,2,1,3],
    "Diminished Triad": [2,1,2,1,2,1,3],
    "Dominant 7th, Flat 5th": [2,2,1,1,2,2,2],
    "Dominant 7th, Flat 9th": [1,3,1,2,2,1,2],
    "Dominant 9th, Flat 5th": [2,2,1,1,2,2,2]
}

const keyNotes = [
  'E',
  'F',
  'F Sharp/G Flat',
  'G',
  'G Sharp/A Flat',
  'A',
  'A Sharp/B Flat',
  'B',
  'C',
  'C Sharp/D Flat',
  'D',
  'D Sharp/E Flat'
]
const keySteps = {
  "Major": [4,3],
  "Minor": [3,4],
  "Major 7th": [4,3,4],
  "Minor 7th": [3,4,3],
  "Suspended 4th": [5,2],
  "Dominant 7th, Suspended 4th": [5,2,3],
  "Major 6th": [4,3,2],
  "Minor 6th":[3,4,1],
  "Dominant 7th": [4,3,3],
  "Dominant 9th": [4,3,3,4],
  "5th": [7],
  "Major 6th, Add 9th": [4,3,2,5],
  "Dominant 11th": [4,1,2,3,4],
  "Dominant 13th": [4,3,2,1,3],
  "Major, Add 9th": [2,2,3],
  "Minor 9th": [2,1,4,3],
  "Major 9th": [2,2,3,4],
  "Augmented": [4,4], 
  "Dominant 7th, Sharp 5th": [4,4,2],
  "Dominant 7th, Sharp 9th": [3,1,3,3],
  "Diminished 7th": [3,3,3],
  "Diminished Triad": [3,3],
  "Dominant 7th, Flat 5th": [4,2,4],
  "Dominant 7th, Flat 9th": [1,3,3,3],
  "Dominant 9th, Flat 5th": [1,2,2,4]
}

const sfx = [
  "./notes/E1.mp3",
  "./notes/F1.mp3",
  "./notes/Fs1.mp3",
  "./notes/G1.mp3",
  "./notes/Gs1.mp3",
  "./notes/A1.mp3",
  "./notes/As1.mp3",
  "./notes/B1.mp3",
  "./notes/C1.mp3",
  "./notes/Cs1.mp3",
  "./notes/D1.mp3",
  "./notes/Ds1.mp3",
  "./notes/E2.mp3",
  "./notes/F2.mp3",
  "./notes/Fs2.mp3",
  "./notes/G2.mp3",
  "./notes/Gs2.mp3",
  "./notes/A2.mp3",
  "./notes/As2.mp3",
  "./notes/B2.mp3",
  "./notes/C2.mp3",
  "./notes/Cs2.mp3",
  "./notes/D2.mp3",
  "./notes/Ds2.mp3",
  "./notes/E3.mp3"
]
const keys2 = {
  'E': "1",
  'F': "2",
  'F Sharp/G Flat': "3",
  'G': "4",
  'G Sharp/A Flat': "5",
  'A': "6",
  'A Sharp/B Flat': "7",
  'B': "8",
  'C': "9",
  'C Sharp/D Flat': "10",
  'D': "11",
  'D Sharp/E Flat': "12"
}

var S = 0;


const playNotes = (k) => {
  let sound = document.getElementsByTagName('Audio');
  console.log(sound[0]);
  var i = 0;
  var spd = 600;
  var isS;

  let c = $('#c').val();
  if (c === "scale") {
    isS = true;
  } 
  else if (c === "chord") {
    isS = false;
  }

  if (k === keyNotes[0]) {
    var n = 0;
    if (isS === true) {
      var m = scaleSteps[$('#s').val()];
    } else {
      var m = keySteps[$('#s').val()];
    }

    let myInt = setInterval(function() {
      if(i <= m.length) {
        sound[n].play();
        //console.log(sfx[n]);
        n += m[i];
        i += 1;
      } else {
        S -= 1;
        clearInterval(myInt);
      }
    },spd);
  }
  else if (k === keyNotes[1]) {
    var n = 1;
    if (isS === true) {
      var m = scaleSteps[$('#s').val()];
    } else {
      var m = keySteps[$('#s').val()];
    }

    let myInt = setInterval(function() {
      if(i <= m.length) {
        sound[n].play();
        console.log(sfx[n]);
        n += m[i];
        i += 1;
      } else {
        S -= 1;
        clearInterval(myInt);
      }
    },spd);
  }
  else if (k === keyNotes[2]) {
    var n = 2;
    if (isS === true) {
      var m = scaleSteps[$('#s').val()];
    } else {
      var m = keySteps[$('#s').val()];
    }

    let myInt = setInterval(function() {
      if(i <= m.length) {
        sound[n].play();
        console.log(sfx[n]);
        n += m[i];
        i += 1;
      } else {
        S -= 1;
        clearInterval(myInt);
      }
    },spd);
  }
  else if (k === keyNotes[3]) {
    var n = 3;
    if (isS === true) {
      var m = scaleSteps[$('#s').val()];
    } else {
      var m = keySteps[$('#s').val()];
    }

    let myInt = setInterval(function() {
      if(i <= m.length) {
        sound[n].play();
        console.log(sfx[n]);
        n += m[i];
        i += 1;
      } else {
        S -= 1;
        clearInterval(myInt);
      }
    },spd);
  }
  else if (k === keyNotes[4]) {
    var n = 4;
    if (isS === true) {
      var m = scaleSteps[$('#s').val()];
    } else {
      var m = keySteps[$('#s').val()];
    }

    let myInt = setInterval(function() {
      if(i <= m.length) {
        sound[n].play();
        console.log(sfx[n]);
        n += m[i];
        i += 1;
      } else {
        S -= 1;
        clearInterval(myInt);
      }
    },spd);
  }
  else if (k === keyNotes[5]) {
    var n = 5;
    if (isS === true) {
      var m = scaleSteps[$('#s').val()];
    } else {
      var m = keySteps[$('#s').val()];
    }

    let myInt = setInterval(function() {
      if(i <= m.length) {
        sound[n].play();
        console.log(sfx[n]);
        n += m[i];
        i += 1;
      } else {
        S -= 1;
        clearInterval(myInt);
      }
    },spd);
  }
  else if (k === keyNotes[6]) {
    var n = 6;
    if (isS === true) {
      var m = scaleSteps[$('#s').val()];
    } else {
      var m = keySteps[$('#s').val()];
    }

    let myInt = setInterval(function() {
      if(i <= m.length) {
        sound[n].play();
        console.log(sfx[n]);
        n += m[i];
        i += 1;
      } else {
        S -= 1;
        clearInterval(myInt);
      }
    },spd);
  }
  else if (k === keyNotes[7]) {
    var n = 7;
    if (isS === true) {
      var m = scaleSteps[$('#s').val()];
    } else {
      var m = keySteps[$('#s').val()];
    }

    let myInt = setInterval(function() {
      if(i <= m.length) {
        sound[n].play();
        console.log(sfx[n]);
        n += m[i];
        i += 1;
      } else {
        S -= 1;
        clearInterval(myInt);
      }
    },spd);
  }
  else if (k === keyNotes[8]) {
    var n = 8;
    if (isS === true) {
      var m = scaleSteps[$('#s').val()];
    } else {
      var m = keySteps[$('#s').val()];
    }

    let myInt = setInterval(function() {
      if(i <= m.length) {
        sound[n].play();
        console.log(sfx[n]);
        n += m[i];
        i += 1;
      } else {
        S -= 1;
        clearInterval(myInt);
      }
    },spd);
  }
  else if (k === keyNotes[9]) {
    var n = 9;
    if (isS === true) {
      var m = scaleSteps[$('#s').val()];
    } else {
      var m = keySteps[$('#s').val()];
    }

    let myInt = setInterval(function() {
      if(i <= m.length) {
        sound[n].play();
        console.log(sfx[n]);
        n += m[i];
        i += 1;
      } else {
        S -= 1;
        clearInterval(myInt);
      }
    },spd);
  }
  else if (k === keyNotes[10]) {
    var n = 10;
    if (isS === true) {
      var m = scaleSteps[$('#s').val()];
    } else {
      var m = keySteps[$('#s').val()];
    }

    let myInt = setInterval(function() {
      if(i <= m.length) {
        sound[n].play();
        console.log(sfx[n]);
        n += m[i];
        i += 1;
      } else {
        S -= 1;
        clearInterval(myInt);
      }
    },spd);
  }
  else if (k === keyNotes[11]) {
    var n = 11;
    if (isS === true) {
      var m = scaleSteps[$('#s').val()];
    } else {
      var m = keySteps[$('#s').val()];
    }

    let myInt = setInterval(function() {
      if(i <= m.length) {
        sound[n].play();
        console.log(sfx[n]);
        n += m[i];
        i += 1;
      } else {
        S -= 1;
        clearInterval(myInt);
      }
    },spd);
  }
}



const getScale = (scale,key) => {
  let n = keys.indexOf(key);
  let list = [];
  list.push(keys[n]);
  if (opt === false ) {
    let s = scaleSteps[scale];
    let i2 = 0;
    for (let i = n + s[0]; i2 < s.length - 1; i += s[i2]) {
      if (i >= 12) {
        i = (i - 12);
      }
      list.push(keys[i]);
      i2 += 1;
    }
    list.push(keys[n]); 
  } else {
    let s = steps[scale];
    let i2 = 0;
    for (let i = n + s[0]; i2 < s.length - 1; i += s[i2]) {
      if (i >= 12) {
        i = (i - 12);
      }
      list.push(keys[i]);
      i2 += 1;
    }
    list.push(keys[n]);
  }
  return list;
}

let opt = false;
let ch = 'Major/Ionian';
let base1 = '<option value="scale">Scales</option>';
let base2 = '<option value="chord">Chords</option>';
$('#c').append(base1);
$('#c').append(base2);
$('#info').html('Select a note to start.')

let base3 = '<option value="standard">Standard</option>';
let base4 = '<option value="dropd">Drop D</option>';
let base5 = '<option value="dmodal">D Modal</option>';
$('#tuning').append(base3);
$('#tuning').append(base4);
$('#tuning').append(base5);

$('#tuning').on('change', () => {
  let v = $('#tuning').val();
  setTune(v);
});

setTune("standard");

$('#info').on('change', () => {
  console.log("changed.");
});

$('#s').on('change', () => {
  let v = $('#s').val();
  ch = v;
  //$(".t").css({"height": '+=10px'});
});
for (let scale in scales) {
  $('.chord').remove();
  let newC = $(`<option class="scale" value="${scales[scale]}">${scales[scale]}</option>`);
  $('#s').append(newC);
}
$('#c').on('change', () => {
  let c = $('#c').val();
  if (c === 'scale') {
    ch = 'Major/Ionian';
    opt = false;
    for (let scale in scales) {
      $('.chord').remove();
      let newC = $(`<option class="scale" value="${scales[scale]}">${scales[scale]}</option>`);
      $('#s').append(newC);
    }
    //console.log(opt);
  } else {
    ch = 'Major';
    opt = true;
    for (let chord in chords) {
      $('.scale').remove();
      let newC = $(`<option class="chord" value="${chords[chord]}">${chords[chord]}</option>`);
      $('#s').append(newC);
    }
    //console.log(opt);
  }
  //$(".t").css({"height": '+=10px'});
});


function setTune(tuning) {

  $('td').remove();

  let k = keyNotes.length;
  let i;
  if (tuning === "standard") {
    i = 0;
    for (let index = 0; index < 6; index++) {

      for (let K = 0; K < 13; K++) {
        if (K === 0) {
          let newK = $(`<td class="string">${keyNotes[i % k]}</td>`);
          $(`#${index}`).append(newK);
        } else {
          let newK = $(`<td>${keyNotes[i % k]}</td>`);
          $(`#${index}`).append(newK);
        }
        i++;
      }
      i -= 13;
      if (index != 3) {
        i += 5;
      } else {
        i += 4;
      }
    }

  } else if (tuning === "dropd") {
    i = 10;
    for (let index = 0; index < 6; index++) {

      for (let K = 0; K < 13; K++) {
        if (K === 0) {
          let newK = $(`<td class="string">${keyNotes[i % k]}</td>`);
          $(`#${index}`).append(newK);
        } else {
          let newK = $(`<td>${keyNotes[i % k]}</td>`);
          $(`#${index}`).append(newK);
        }
        i++;
      }

      i -= 13;
      if (index === 0) {
        i += 7;
      } else if (index === 3) {
        i += 4;
      } else {
        i += 5;
      }
    }
  } else if (tuning === "dmodal") {
    i = 10;
    for (let index = 0; index < 6; index++) {

      for (let K = 0; K < 13; K++) {
        if (K === 0) {
          let newK = $(`<td class="string">${keyNotes[i % k]}</td>`);
          $(`#${index}`).append(newK);
        } else {
          let newK = $(`<td>${keyNotes[i % k]}</td>`);
          $(`#${index}`).append(newK);
        }
        i++;
      }

      i -= 13;
      if (index === 0) {
        i += 7;
      } else if (index === 3) {
        i += 2;
      } else {
        i += 5;
      }
    }
  }

  addEvents();

}


function addEvents() {
  let tdList = document.getElementsByTagName('TD');
  for (let index = 0; index < tdList.length; index++) {
    $(tdList[index]).on('click', event => {
      console.log(S);
      if (opt === false) {
        let one = getScale(ch,event.currentTarget.innerHTML);
        if (S === 0) {
          S += 1;
          playNotes(event.currentTarget.innerHTML);
        }
        //console.log(one);
        $('#info').html('');
        for (const key in one) {
          if (one.hasOwnProperty(key)) {
            $('#info').append(`- &nbsp;${one[key]}&nbsp; -`);
          }
        }
      } else {
        let two = getChord(ch,getScale(ch,event.currentTarget.innerHTML));
        if (S === 0) {
          S += 1;
          playNotes(event.currentTarget.innerHTML);
        }
        //console.log(two);
        $('#info').html('');
        for (const key in two) {
          if (two.hasOwnProperty(key)) {
            $('#info').append(`- &nbsp;${two[key]}&nbsp; -`);
          }
        }
      }
    });
    $(tdList[index]).on('mouseenter', event => {
      $(event.currentTarget).addClass('hover2');
    }).on('mouseleave', event => {
      $(event.currentTarget).removeClass('hover2');
    });
  }
}


const getChord = (chord,scale) => {
    let c = []; 
    if (chord === chords[0]) {
        c.push(scale[0]);
        c.push(scale[2]);
        c.push(scale[4]);
        return c;
    }
    else if (chord === chords[1]) {
        c.push(scale[0]);
        c.push(scale[2]);
        c.push(scale[4]);
        return c;
    }
    else if (chord === chords[2]) {
      c.push(scale[0]);
      c.push(scale[2]);
      c.push(scale[4]);
      c.push(scale[6]);
      return c;
    }
    else if (chord === chords[3]) {
      c.push(scale[0]);
      c.push(scale[2]);
      c.push(scale[4]);
      c.push(scale[6]);
      return c;
    }
    else if (chord === chords[4]) {
      c.push(scale[0]);
      c.push(scale[3]);
      c.push(scale[4]);
      return c;
    }
    else if (chord === chords[5]) {
      c.push(scale[0]);
      c.push(scale[3]);
      c.push(scale[4]);
      c.push(scale[6]);
      return c;
    }
    else if (chord === chords[6]) {
      c.push(scale[0]);
      c.push(scale[2]);
      c.push(scale[4]);
      c.push(scale[5]);
      return c;
    }
    else if (chord === chords[7]) {
      c.push(scale[0]);
      c.push(scale[2]);
      c.push(scale[4]);
      c.push(scale[5]);
      return c;
    }
    else if (chord === chords[8]) {
      c.push(scale[0]);
      c.push(scale[2]);
      c.push(scale[4]);
      c.push(scale[6]);
      return c;
    }
    else if (chord === chords[9]) {
      c.push(scale[0]);
      c.push(scale[2]);
      c.push(scale[4]);
      c.push(scale[6]);
      c.push(scale[1]);
      return c;
    }
    else if (chord === chords[10]) {
      c.push(scale[0]);
      c.push(scale[4]);
      return c;
    }
    else if (chord === chords[11]) {
      c.push(scale[0]);
      c.push(scale[2]);
      c.push(scale[4]);
      c.push(scale[5]);
      c.push(scale[1]);
      return c;
    }
    else if (chord === chords[12]) {
      c.push(scale[0]);
      c.push(scale[2]);
      c.push(scale[4]);
      c.push(scale[6]);
      c.push(scale[1]);
      c.push(scale[3]);
      return c;
    }
    else if (chord === chords[13]) {
      c.push(scale[0]);
      c.push(scale[2]);
      c.push(scale[4]);
      c.push(scale[6]);
      c.push(scale[1]);
      c.push(scale[5]);
      return c;
    }
    else if (chord === chords[14]) {
      c.push(scale[0]);
      c.push(scale[2]);
      c.push(scale[4]);
      c.push(scale[1]);
      return c;
    }
    else if (chord === chords[15]) {
      c.push(scale[0]);
      c.push(scale[2]);
      c.push(scale[4]);
      c.push(scale[6]);
      c.push(scale[1]);
      return c;
    }
    else if (chord === chords[16]) {
      c.push(scale[0]);
      c.push(scale[2]);
      c.push(scale[4]);
      c.push(scale[6]);
      c.push(scale[1]);
      return c;
    }
    else if (chord === chords[17]) {
      c.push(scale[0]);
      c.push(scale[2]);
      c.push(scale[4]);
      return c;
    }
    else if (chord === chords[18]) {
      c.push(scale[0]);
      c.push(scale[2]);
      c.push(scale[4]);
      c.push(scale[6]);
      return c;
    }
    else if (chord === chords[19]) {
      c.push(scale[0]);
      c.push(scale[2]);
      c.push(scale[4]);
      c.push(scale[6]);
      c.push(scale[1]);
      return c;
    }
    else if (chord === chords[20]) {
      c.push(scale[0]);
      c.push(scale[2]);
      c.push(scale[4]);
      c.push(scale[6]);
      return c;
    }
    else if (chord === chords[21]) {
      c.push(scale[0]);
      c.push(scale[2]);
      c.push(scale[4]);
      return c;
    }
    else if (chord === chords[22]) {
      c.push(scale[0]);
      c.push(scale[2]);
      c.push(scale[4]);
      c.push(scale[6]);
      return c;
    }
    else if (chord === chords[23]) {
      c.push(scale[0]);
      c.push(scale[2]);
      c.push(scale[4]);
      c.push(scale[6]);
      c.push(scale[1]);
      return c;
    }
    else if (chord === chords[24]) {
      c.push(scale[0]);
      c.push(scale[2]);
      c.push(scale[4]);
      c.push(scale[6]);
      c.push(scale[1]);
      return c;
    }
}

