import React from 'react';
import BackDrop from '../BackDrop/BackDrop';

interface Props extends React.PropsWithChildren{
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
}

const Modal: React.FC<Props> = ({show, title, children, onClose}) => {
  const onInnerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      <BackDrop show={show} onClick={onClose}/>
      <div className="modal show" style={{display: show ? 'block' : 'none'}} onClick={onClose}>
        <div className="modal-dialog" onClick={onInnerClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <span onClick={onClose} role="button" className="text-end">X</span>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;