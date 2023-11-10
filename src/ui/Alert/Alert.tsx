import React from 'react';
import {motion} from 'framer-motion';

interface Props extends React.PropsWithChildren {
  id: number;
  type: string;
  onDismiss?: boolean;
  onClick: () => void;
}

const Alert: React.FC<Props> = ({id, type, children, onDismiss, onClick}) => {
  return (
    <motion.div
      key={id}
      initial={{opacity: 0, x: -50}}
      animate={{opacity: 1, x: 0}}
      exit={{opacity: 0, x: 50}}
      transition={{duration: 0.5, ease: 'easeInOut'}}
      className={`alert alert-${type}`} role="alert"
    >
      <div className="row">
        <div className="col-6">{children}</div>
        {onDismiss ? <span className="col-6 text-end" role="button" onClick={onClick}>X</span> : null}
      </div>
    </motion.div>
  );
};

export default Alert;