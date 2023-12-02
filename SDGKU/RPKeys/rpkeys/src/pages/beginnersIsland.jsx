import "./beginnersIsland.css";
import { Modal } from "bootstrap";

function Beginners() {
  return (
    <div className="beginner">
      <div className="level-selector">
        <div className="levels">
          <h2>Level 1</h2>
          <h3>Starting Location</h3>
        </div>
      </div>

      <div className="modal fade show" tabindex="-1" role="dialog">
        <div className="modal-dialog  modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="game-screen">
        <div className="checkpoint chk-start"></div>
        <div className="checkpoint chk-1"></div>
        <div className="checkpoint chk-2"></div>
        <div className="checkpoint chk-3"></div>
        <div className="checkpoint chk-4"></div>
        <div className="checkpoint chk-5"></div>
        <div className="checkpoint chk-6"></div>
        <div className="checkpoint chk-7"></div>
        <div className="checkpoint chk-8"></div>
        <div className="checkpoint chk-9"></div>
        <div className="checkpoint chk-10"></div>
        <div className="checkpoint chk-11"></div>
      </div>
    </div>
  );
}

export default Beginners;
