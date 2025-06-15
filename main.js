const input = document.getElementById("input")

//web audio api elements!
// audio context: making a new object which controls the playing and pausing of the computer's speakers.
const audioCtx = new AudioContext();
//gain node controls volume of the sound
const gainnode = audioCtx.createGain();

// create oscillator node
// creating the oscillator from the audiocontext
const oscillator = audioCtx.createOscillator();
oscillator.connect(gainnode);
gainnode.connect(audioCtx.destination);

//sets the oscillator type to sine
oscillator.type = "sine"

oscillator.start();
gainnode.gain.value = 0;

// try 1 - incorrect (didnt change note letters into strings). try 2 - incorrect: used = instead of , try 3 = correct
notenames = new Map();
notenames.set("C", 261.6);
notenames.set("D", 293.7);
notenames.set("E", 329.6);
notenames.set("F", 349.2);
notenames.set("G", 392.0);
notenames.set("A", 440);
notenames.set("B", 493.9);



function frequency(pitch) {
    // dont forget semicolons!!
    //try 1 - incorrect, didnt use audioctx in the right way. try 2 - correct!

    gainnode.gain.setValueAtTime(100,audioCtx.currentTime);
    oscillator.frequency.setValueAtTime(pitch, audioCtx.currentTime);
    gainnode.gain.setValueAtTime(0,audioCtx.currentTime + 1);
 

}

function handle() {
        // mistake: mistook mapName as an actual variable - replace with name of Map (notenames)
    // second mistake: const should be var

    audioCtx.resume();
    gainnode.gain.value = 0;

    // mistake: used const instead of var. Also used str() instead of String(). Need to replace pitch in frequency(input.value) with notenames.get(usernotes) to call. :D
    var usernotes = String(input.value);
    frequency(notenames.get(usernotes)); 
}


