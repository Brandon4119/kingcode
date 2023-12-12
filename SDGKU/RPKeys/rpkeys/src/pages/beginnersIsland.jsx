import { useState } from "react";
import "./beginnersIsland.css";
import { Modal } from "bootstrap";

const pointsData = [
  {
    header: "Warms-Ups",
    content: "Get you fingers warmed up with the hannon finger exercises.",
    video: "https://www.youtube.com/watch?v=vH-l5SQ2Dhc&t=346s",
  },
  {
    header: "Hand Independence",
    content: "Hand independence is one of the toughest skills to master for pianists. Stick with this exercise and soon you’ll be playing with more autonomy and efficiency. "
  },
  {
    header: "Speed",
    content: "Playing fast starts with playing slowly and gradually ramping up the speed. Make sure you can articulate all your notes clearly before you get faster."
  },
  {
    header: "Speed ll",
    content: "5 piano finger speed exercises that will help improve your playing skills."
  },
  {
    header: "Finger Strength",
    content: "Piano finger exercises, to strengthen the weaker fingers and create better finger independance."
  },
  {
    header: "Finger Strength ll",
    content: "This piano tutorial is for everyone who is having trouble controlling or getting their 4th finger to play along. In this lesson, I have four exercises designed to help get better control of your wayward finger and at the same time, build strength."
  },
  {
    header: "Piano Pedal",
    content: "Many students are confused about how to use the pedal, namely timing the changing of pedal accurately so that the music flows smoothly. When the pedal is changed too quickly, it resulting in awkward 'breaks' in the music. When the pedal is changed too late or not changed at all, it results in messy soundscapes due to the clash of non-harmonic notes. I teach you exactly how to use the pedal and provide ample examples so you can watch how it's done and learn from it. I hope it helps you out!"
  },
  {
    header: "Ear Training",
    content: "Music is an aural art form, so exercising your ears is pretty essential! You don’t need perfect pitch to be an excellent musician, you just have to work on your listening skills."
  },
  {
    header: "Scales",
    content: "It’s almost universally agreed upon that music students dread scales. But scales are necessary because they train everything: speed, agility, hand independence…and they reinforce your understanding of keys."
  },
  {
    header: "Chords and Chord Inversions",
    content: "Chords are the building block of music. This is especially true for piano players because we often comp for other musicians, or accompany ourselves with our left hand. So, having chord shapes down pat in all keys and all inversions makes this so much easier."
  },
  {
    header: "Test 10",
    content: "Test with the hannon finger exercises."
  },
  {
    header: "Creativity",
    content: "Did you know that musical creativity can be practiced too? It’s a skill like any other, and unlike scales and chords, creativity is fun!"
  },
]



function Beginners() {
  const [modalVisible, setModalVisible]= useState(false);
  const [modalData, setModalData] = useState({});

  function pointClicked(point) {
    setModalData(pointsData[point]);
    setModalVisible(true);
  }

  function letsBegin(point) {
    setModalData(pointsData[point]);
  }

  function handleClose() {
    setModalVisible(false);
  }

  return (
    <div className="beginner">
      <div className="level-selector center">
        <div className="levels">
          <h2>Level 1</h2>
          <h3>Starting Location</h3>
        </div>
      </div>

      {modalVisible ? 
        <div className="modal fade show" tabindex="-1" role="dialog">
          <div className="modal-dialog  modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <div className="center">
                  <img src="/img/Piano_logo.png" alt="" />
                  <h5 className="modal-title">{modalData?.header}</h5>
                </div>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true" onClick={handleClose}>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{modalData?.content}</p>
              </div>
              <div className="modal-footer">
                <button type="button"
                className="btn btn-primary"
                onClick={letsBegin}
                >
                  Let's Begin!
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        : null
      }

      <div className="game-screen">
        <div className="checkpoint chk-start" onClick={() => pointClicked(0)}></div>
        <div className="checkpoint chk-1" onClick={() => pointClicked(1)}></div>
        <div className="checkpoint chk-2" onClick={() => pointClicked(2)}></div>
        <div className="checkpoint chk-3" onClick={() => pointClicked(3)}></div>
        <div className="checkpoint chk-4" onClick={() => pointClicked(4)}></div>
        <div className="checkpoint chk-5" onClick={() => pointClicked(5)}></div>
        <div className="checkpoint chk-6" onClick={() => pointClicked(6)}></div>
        <div className="checkpoint chk-7" onClick={() => pointClicked(7)}></div>
        <div className="checkpoint chk-8" onClick={() => pointClicked(8)}></div>
        <div className="checkpoint chk-9" onClick={() => pointClicked(9)}></div>
        <div className="checkpoint chk-10" onClick={() => pointClicked(10)}></div>
        <div className="checkpoint chk-11" onClick={() => pointClicked(11)}></div>
      </div>
    </div>
  );
}

export default Beginners;
