import {useState} from 'react';
import Modal from '../ui/Modal/Modal';
import {ConfigButton} from '../types';
import Alert from '../ui/Alert/Alert';
import {AnimatePresence} from 'framer-motion';

const App = () => {
  const [showModal, setShowModal] = useState(true);
  const [alerts, setAlerts] = useState([
    {id: 1, type: 'primary', children: 'A simple primary alert—check it out!', onDismiss: true},
    {id: 2, type: 'secondary', children: 'A simple secondary alert—check it out!'},
    {id: 3, type: 'success', children: 'A simple success alert—check it out!', onDismiss: true},
    {id: 4, type: 'danger', children: 'A simple danger alert—check it out!'},
    {id: 5, type: 'warning', children: 'A simple warning alert—check it out!', onDismiss: true},
    {id: 6, type: 'info', children: 'A simple info alert—check it out!'},
    {id: 7, type: 'light', children: 'A simple light alert—check it out!', onDismiss: true},
    {id: 8, type: 'dark', children: 'A simple dark alert—check it out!', onDismiss: true},
  ]);

  const deleteAlert = (id: number) => {
    setAlerts(prevState => {
      return prevState.filter((alert) => alert.id !== id);
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
    <div className="container mx-auto mt-4">
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
      <AnimatePresence>
        {
          alerts.map((alert) => {
              return (
                <Alert id={alert.id} type={alert.type} key={alert.type} onDismiss={alert.onDismiss}
                       onClick={() => deleteAlert(alert.id)}>{alert.children}</Alert>
              );
            }
          )
        }
      </AnimatePresence>
    </div>
  );
};

export default App;