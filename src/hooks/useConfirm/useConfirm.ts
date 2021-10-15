import { useContext } from 'react';
import { ConfirmContext } from '../../components/molecules/Confirm/ConfirmContext';

const useConfirm = () => useContext(ConfirmContext);

export default useConfirm;
