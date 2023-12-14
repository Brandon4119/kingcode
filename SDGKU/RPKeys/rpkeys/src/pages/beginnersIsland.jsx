import { useState } from "react";
import "./beginnersIsland.css";
import { Modal } from "bootstrap";

const pointsData = [
  {
    header: "Warms-Ups",
    content: "Get you fingers warmed up with the hannon finger exercises.",
    video: "https://www.youtube.com/embed/aUbDQEPh_5g?si=j801wIN8UUV0zqxL",
  },
  {
    header: "Hand Independence",
    content: "Hand independence is one of the toughest skills to master for pianists. Stick with this exercise and soon you’ll be playing with more autonomy and efficiency. ",
    video: "https://www.youtube.com/embed/aUbDQEPh_5g?si=NtaJdgcXLZ0poeQh"
  },
  {
    header: "Speed",
    content: "Playing fast starts with playing slowly and gradually ramping up the speed. Make sure you can articulate all your notes clearly before you get faster.",
    video: "https://www.youtube.com/embed/7b9j5BS3KME?si=03qJLtmXC_LNz5jv"
  },
  {
    header: "Speed ll",
    content: "5 piano finger speed exercises that will help improve your playing skills.",
    video: "https://www.youtube.com/embed/SHWRlucqpe8?si=ArS9IhgIc2hmQJ94"
  },
  {
    header: "Finger Strength",
    content: "Piano finger exercises, to strengthen the weaker fingers and create better finger independance.",
    video: "https://www.youtube.com/embed/phaRYSx6Nz4?si=XmBqrr2Wgg5cuTdn"
  },
  {
    header: "Finger Strength ll",
    content: "This piano tutorial is for everyone who is having trouble controlling or getting their 4th finger to play along. In this lesson, I have four exercises designed to help get better control of your wayward finger and at the same time, build strength.",
    video: "https://www.youtube.com/embed/3KzgQma7B4E?si=D9EV8Utw5AVeiwhl"
  },
  {
    header: "Piano Pedal",
    content: "Many students are confused about how to use the pedal, namely timing the changing of pedal accurately so that the music flows smoothly. When the pedal is changed too quickly, it resulting in awkward 'breaks' in the music. When the pedal is changed too late or not changed at all, it results in messy soundscapes due to the clash of non-harmonic notes. I teach you exactly how to use the pedal and provide ample examples so you can watch how it's done and learn from it. I hope it helps you out!",
    video: "https://www.youtube.com/embed/lzbgr6H3BE0?si=4uwYBY4MpCa6pIz_"
  },
  {
    header: "Ear Training",
    content: "Music is an aural art form, so exercising your ears is pretty essential! You don’t need perfect pitch to be an excellent musician, you just have to work on your listening skills.",
    video: "https://www.youtube.com/embed/U8xQfdKPRXs?si=Kpch4ng40GqIoPrS"
  },
  {
    header: "Scales",
    content: "It’s almost universally agreed upon that music students dread scales. But scales are necessary because they train everything: speed, agility, hand independence…and they reinforce your understanding of keys.",
    video: "https://www.youtube.com/embed/l3q0d81D0Ag?si=mWJb0KxXQI1DWtHp"
  },
  {
    header: "Chords and Chord Inversions",
    content: "Chords are the building block of music. This is especially true for piano players because we often comp for other musicians, or accompany ourselves with our left hand. So, having chord shapes down pat in all keys and all inversions makes this so much easier.",
    video: "https://www.youtube.com/embed/6GSEYxrTSlU?si=ICgQfIVo_XLzXbsG"
  },
  {
    header: "Emotion",
    content: "You can create beautiful, emotional, piano using just 3 notes. Even if you know nothing about music. Even if you're not a piano player. Create emotion with just 3 notes and follow along with Lisa. We'll be playing in the key of Am, and will use a simple chord progression of just four chords.",
    video: "https://www.youtube.com/embed/TZteV8UW3ds?si=WNLEx0ECiFbq8rau"
  },
  {
    header: "Creativity",
    content: "Did you know that musical creativity can be practiced too? It’s a skill like any other, and unlike scales and chords, creativity is fun!",
    video: "https://www.youtube.com/embed/eDVqZLrB8K0?si=rYgaMxWZZMddgsnA"
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
              <iframe width="560" height="315" src={modalData?.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p>{modalData?.content}</p>
              </div>
              <div className="modal-footer">
                <button type="button"
                className="btn btn-primary"
                onClick={letsBegin}
                >
                  Completed
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
