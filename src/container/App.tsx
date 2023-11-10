import {useState} from 'react';
import Modal from '../ui/Modal/Modal';
import {ConfigButton} from '../types';
import Alert from '../ui/Alert/Alert';

const App = () => {
  const [showModal, setShowModal] = useState(true);
  const [alerts, setAlerts] = useState([
    {type: 'primary', children: 'A simple primary alert—check it out!', onDismiss: true},
    {type: 'secondary', children: 'A simple primary alert—check it out!'},
    {type: 'success', children: 'A simple primary alert—check it out!', onDismiss: true},
    {type: 'danger', children: 'A simple primary alert—check it out!'},
    {type: 'warning', children: 'A simple primary alert—check it out!'},
    {type: 'info', children: 'A simple primary alert—check it out!'},
    {type: 'light', children: 'A simple primary alert—check it out!'},
    {type: 'dark', children: 'A simple primary alert—check it out!'},
  ]);

  const deleteAlert = (index: number) => {
    setAlerts(prevState => {
      return prevState.filter((_, i) => i !== index);
    });
  };

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
      {
        alerts.map((alert, index) =>
          <Alert type={alert.type} key={alert.type} onDismiss={alert.onDismiss} onClick={() => deleteAlert(index)}>{alert.children}</Alert>
        )
      }
    </>
  );
};

export default App;