import {useState} from 'react';
import Modal from '../ui/Modal/Modal';
import {ConfigButton} from '../types';

const App = () => {
  const [showModal, setShowModal] = useState(true);

  const onContinue = () => {
    setShowModal(false);
    alert('You click "Continue"!');
  };

  const onCancel = () => {
    setShowModal(false);
  };

  const configButtons: ConfigButton[] = [
    {type: 'primary', label: 'Continue', onClick: onContinue},
    {type: 'danger', label: 'Close', onClick: onCancel}
  ];

  return (
    <>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Some kinda modal title"
      >
        <div className="modal-body">
          <p>This is modal content</p>
        </div>
        <div className="modal-footer">
          {
            configButtons.map((button) => {
              return <button className={`btn btn-${button.type}`} onClick={button.onClick}>{button.label}</button>;
            })
          }
        </div>
      </Modal>
    </>
  );
};

export default App;