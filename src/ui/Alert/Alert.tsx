import React from 'react';

interface Props extends React.PropsWithChildren{
  type: string;
  onDismiss?: boolean;
  onClick: () => void;
}

const Alert: React.FC<Props> = ({type, children, onDismiss, onClick}) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      <div className="row">
        <div className="col-6">{children}</div>{onDismiss ? <span className="col-6 text-end" role="button" onClick={onClick}>X</span> : null}
      </div>
    </div>
  );
};

export default Alert;