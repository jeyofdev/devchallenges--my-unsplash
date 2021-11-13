import Modal from 'react-modal';
import { ImgModalType } from '../../types';

const customStyles = {
  content: {
    background: '#fff',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '12px',
    maxWidth: '620px',
    width: '100%',
    padding: '24px 32px',
  },
  overlay: {
    background: 'rgba(0,0,0, 0.85)',
  },
};

const ImgModal = ({ children }: ImgModalType) => (
  <Modal isOpen={true} style={customStyles}>
    <div className="">{children}</div>
  </Modal>
);

export default ImgModal;
