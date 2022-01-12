import React, { Component } from "react";
import AUDIOS from "./audios";
import AUDIO_NAMES from "./audio_names";
import SONGS from "./songs";
import display from "./waveform_display.png";
import knob from "./dial-knob2.png";
import Footer from "./Footer/Footer.js";

const numSongs = SONGS.length;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "HELLO",
      volumeBtns: 0.5,
      volumeSongs: 0.5,
      bank: 1,
      songInd: 0,
      smile: false,
    };

    this.playAudio = this.playAudio.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.changeVolumeBtns = this.changeVolumeBtns.bind(this);
    this.bank1 = this.bank1.bind(this);
    this.bank2 = this.bank2.bind(this);
    this.changeVolumeSongs = this.changeVolumeSongs.bind(this);
    document.onkeypress = this.handleKeyPress;
    this.nextSong = this.nextSong.bind(this);
    this.prevSong = this.prevSong.bind(this);
    this.playSong = this.playSong.bind(this);
    this.stopSong = this.stopSong.bind(this);
    this.smile = this.smile.bind(this);
  }

  handleKeyPress(event) {
    let k = event.key;
    switch (k) {
      case "q":
      case "Q":
        document.getElementById("Q").click();
        break;
      case "w":
      case "W":
        document.getElementById("W").click();
        break;
      case "E":
      case "e":
        document.getElementById("E").click();
        break;
      case "a":
      case "A":
        document.getElementById("A").click();
        break;
      case "s":
      case "S":
        document.getElementById("S").click();
        break;
      case "d":
      case "D":
        document.getElementById("D").click();
        break;
      case "z":
      case "Z":
        document.getElementById("Z").click();
        break;
      case "x":
      case "X":
        document.getElementById("X").click();
        break;
      case "c":
      case "C":
        document.getElementById("C").click();
        break;
    }
  }

  playAudio(id) {
    var elem = document.getElementById(id);
    elem.pause();
    elem.volume = this.state.volumeBtns;
    elem.currentTime = 0;
    elem.play();
    var ret = elem.getAttribute("name");
    console.log(elem);
    this.setState({
      display: ret,
    });
  }

  changeVolumeBtns(event) {
    this.setState({
      volumeBtns: event.target.value,
    });
  }

  bank1() {
    document.getElementById("Q").setAttribute("name", AUDIO_NAMES.heater1);
    document.getElementById("Q").src = AUDIOS.heater1;
    document.getElementById("W").setAttribute("name", AUDIO_NAMES.heater2);
    document.getElementById("W").src = AUDIOS.heater2;
    document.getElementById("E").setAttribute("name", AUDIO_NAMES.heater3);
    document.getElementById("E").src = AUDIOS.heater3;
    document.getElementById("A").setAttribute("name", AUDIO_NAMES.heater4_1);
    document.getElementById("A").src = AUDIOS.heater4_1;
    document.getElementById("S").setAttribute("name", AUDIO_NAMES.heater6);
    document.getElementById("S").src = AUDIOS.heater6;
    document.getElementById("D").setAttribute("name", AUDIO_NAMES.dsc_oh);
    document.getElementById("D").src = AUDIOS.dsc_oh;
    document.getElementById("Z").setAttribute("name", AUDIO_NAMES.kickn_hat);
    document.getElementById("Z").src = AUDIOS.kickn_hat;
    document.getElementById("X").setAttribute("name", AUDIO_NAMES.rp4_kick);
    document.getElementById("X").src = AUDIOS.rp4_kick;
    document.getElementById("C").setAttribute("name", AUDIO_NAMES.cev_h2);
    document.getElementById("C").src = AUDIOS.cev_h2;
    document.getElementById("bank1").style.backgroundColor = "green";

    if (this.state.smile) {
      document.getElementById("bank2").style.backgroundColor = "#00f6ff";
    } else {
      document.getElementById("bank2").style.backgroundColor =
        "rgb(202, 202, 202)";
    }

    this.setState({
      bank: 1,
    });
  }

  bank2() {
    document.getElementById("Q").setAttribute("name", AUDIO_NAMES.chord1);
    document.getElementById("Q").src = AUDIOS.chord1;
    document.getElementById("W").setAttribute("name", AUDIO_NAMES.chord2);
    document.getElementById("W").src = AUDIOS.chord2;
    document.getElementById("E").setAttribute("name", AUDIO_NAMES.chord3);
    document.getElementById("E").src = AUDIOS.chord3;
    document.getElementById("A").setAttribute("name", AUDIO_NAMES.light);
    document.getElementById("A").src = AUDIOS.light;
    document.getElementById("S").setAttribute("name", AUDIO_NAMES.dry_ohh);
    document.getElementById("S").src = AUDIOS.dry_ohh;
    document.getElementById("D").setAttribute("name", AUDIO_NAMES.bld_h1);
    document.getElementById("D").src = AUDIOS.bld_h1;
    document.getElementById("Z").setAttribute("name", AUDIO_NAMES.punchykick);
    document.getElementById("Z").src = AUDIOS.punchykick;
    document.getElementById("X").setAttribute("name", AUDIO_NAMES.sidestick);
    document.getElementById("X").src = AUDIOS.sidestick;
    document.getElementById("C").setAttribute("name", AUDIO_NAMES.brk_snr);
    document.getElementById("C").src = AUDIOS.brk_snr;
    document.getElementById("bank2").style.backgroundColor = "green";
    if (this.state.smile) {
      document.getElementById("bank1").style.backgroundColor = "#00f6ff";
    } else {
      document.getElementById("bank1").style.backgroundColor =
        "rgb(202, 202, 202)";
    }
    this.setState({
      bank: 2,
    });
  }

  nextSong() {
    this.stopSong();
    if (this.state.songInd == numSongs - 1) {
      this.setState({
        songInd: 0,
      });
    } else {
      let x = this.state.songInd;
      this.setState({
        songInd: x + 1,
      });
    }
  }

  prevSong() {
    this.stopSong();
    if (this.state.songInd == 0) {
      this.setState({
        songInd: numSongs - 1,
      });
    } else {
      let x = this.state.songInd;
      this.setState({
        songInd: x - 1,
      });
    }
  }

  playSong() {
    var elem = document.getElementById("beat");
    elem.play();
    if (this.state.smile) {
      document.getElementById("play-button").style.backgroundColor = "purple";
    } else {
      document.getElementById("play-button").style.backgroundColor = "#c79393";
    }
  }

  stopSong() {
    var elem = document.getElementById("beat");
    elem.pause();
    elem.currentTime = 0;
    if (this.state.smile) {
      document.getElementById("play-button").style.backgroundColor = "#ee00ff";
    } else {
      document.getElementById("play-button").style.backgroundColor =
        "rgb(202, 202, 202)";
    }
  }

  changeVolumeSongs(event) {
    const VOL = event.target.value;
    this.setState({
      volumeSongs: VOL,
    });
    document.getElementById("beat").volume = VOL;
  }

  smile() {
    this.setState({
      smile: true,
    });
    document.documentElement.style.backgroundColor = "rgb(8, 177, 255";
    document.getElementById("drum-machine").style.backgroundColor = "orange";
    document.getElementById("display").style.color = "black";
    document.getElementById("song-display").style.color = "black";
    document.getElementById("display").style.backgroundColor = "#07f840";
    document.getElementById("song-display").style.backgroundColor = "#07f840";
    document.getElementsByClassName("drum-pad").forEach((element) => {
      element.style.backgroundColor = "yellow";
      element.style.color = "yellow";
      element.style.boxShadow = "3px 3px 5px rgb(255, 0, 157)";
    });
    document.getElementsByClassName("bank-btn").forEach((element) => {
      element.style.backgroundColor = "#00f6ff";
    });
    document.getElementById("next-song").style.backgroundColor = "#ff001a";
    document.getElementById("prev-song").style.backgroundColor = "#ff001a";
    document.getElementById("play-button").style.backgroundColor = "#ee00ff";
    document.getElementById("stop-button").style.backgroundColor = "#ee00ff";
  }

  render() {
    return (
      <div className="App">
        <button id="smile" onClick={this.smile}>
          <i class="far fa-smile"></i>
        </button>
        <div id="drum-machine">
          <div id="left-side" className="side">
            <img src={display} alt="drum-machine-display" id="dm-display" />
            <div id="btn-container">
              <button
                className="drum-pad"
                id="one"
                onClick={() => this.playAudio("Q")}
              >
                <audio
                  className="clip"
                  name={AUDIO_NAMES.heater1}
                  src={AUDIOS.heater1}
                  id="Q"
                ></audio>
                Q
              </button>
              <button
                className="drum-pad"
                id="two"
                onClick={() => this.playAudio("W")}
              >
                <audio
                  className="clip"
                  name={AUDIO_NAMES.heater2}
                  src={AUDIOS.heater2}
                  id="W"
                ></audio>
                W
              </button>
              <button
                className="drum-pad"
                id="three"
                onClick={() => this.playAudio("E")}
              >
                <audio
                  className="clip"
                  name={AUDIO_NAMES.heater3}
                  src={AUDIOS.heater3}
                  id="E"
                ></audio>
                E
              </button>
              <button
                className="drum-pad"
                id="four"
                onClick={() => this.playAudio("A")}
              >
                <audio
                  className="clip"
                  name={AUDIO_NAMES.heater4_1}
                  src={AUDIOS.heater4_1}
                  id="A"
                ></audio>
                A
              </button>
              <button
                className="drum-pad"
                id="five"
                onClick={() => this.playAudio("S")}
              >
                <audio
                  className="clip"
                  name={AUDIO_NAMES.heater6}
                  src={AUDIOS.heater6}
                  id="S"
                ></audio>
                S
              </button>
              <button
                className="drum-pad"
                id="six"
                onClick={() => this.playAudio("D")}
              >
                <audio
                  className="clip"
                  name={AUDIO_NAMES.dsc_oh}
                  src={AUDIOS.dsc_oh}
                  id="D"
                ></audio>
                D
              </button>
              <button
                className="drum-pad"
                id="seven"
                onClick={() => this.playAudio("Z")}
              >
                <audio
                  className="clip"
                  name={AUDIO_NAMES.kickn_hat}
                  src={AUDIOS.kickn_hat}
                  id="Z"
                ></audio>
                Z
              </button>
              <button
                className="drum-pad"
                id="eight"
                onClick={() => this.playAudio("X")}
              >
                <audio
                  className="clip"
                  name={AUDIO_NAMES.rp4_kick}
                  src={AUDIOS.rp4_kick}
                  id="X"
                ></audio>
                X
              </button>
              <button
                className="drum-pad"
                id="nine"
                onClick={() => this.playAudio("C")}
              >
                <audio
                  className="clip"
                  name={AUDIO_NAMES.cev_h2}
                  src={AUDIOS.cev_h2}
                  id="C"
                ></audio>
                C
              </button>
            </div>
          </div>
          <div id="right-side" className="side">
            <div id="display-container">
              <div id="display">{this.state.display}</div>
            </div>
            <div id="beats-controls">
              <input
                type="range"
                min="0"
                max="1"
                step=".01"
                value={this.state.changeVolumeBtns}
                onChange={this.changeVolumeBtns}
                id="beats-volume"
              ></input>
              <div id="banks-container">
                <button className="bank-btn" id="bank1" onClick={this.bank1}>
                  Bank 1
                </button>
                <button className="bank-btn" id="bank2" onClick={this.bank2}>
                  Bank 2
                </button>
              </div>
            </div>
            <div id="knobs-container">
              <img className="knob" src={knob} alt="dial knob" />
              <img className="knob" src={knob} alt="dial knob" />
              <img className="knob" src={knob} alt="dial knob" />
            </div>
            <div id="bd-container">
              <div id="song-display">{SONGS[this.state.songInd].name}</div>
            </div>
            <div id="song-controls">
              <button id="play-button" onClick={this.playSong}>
                Play
              </button>
              <button id="stop-button" onClick={this.stopSong}>
                Stop
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step=".01"
                value={this.state.volumeSongs}
                onChange={this.changeVolumeSongs}
                id="songs-volume"
              ></input>
              <audio id="beat" src={SONGS[this.state.songInd].song} />
              <button id="next-song" onClick={this.nextSong}>
                Next Song
              </button>
              <button id="prev-song" onClick={this.prevSong}>
                Prev Song
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
