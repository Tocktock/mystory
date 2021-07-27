import { SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../features/modal/modalSlice";
import { RootState } from "../../features/rootReducer";
import AuthModal from "./AuthModal";
const ModalBackground: React.FC = (props) => {
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.modalState);
  function hideModalFn(e: SyntheticEvent) {
    if (e.target != e.currentTarget) return;
    dispatch(hideModal());
  }
  return (
    <div
      className={`w-full h-full absolute bg-red-600 z-10 flex inset-0 overflow-y-auto justify-center items-center min-h-full text-center ${modalState.displayStatus}`}
      onClick={hideModalFn}
    >
      <AuthModal></AuthModal>
    </div>
  );
};

export default ModalBackground;
