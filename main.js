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

function frequency(pitch) {

}

function handle() {
    frequency(input.value);
}