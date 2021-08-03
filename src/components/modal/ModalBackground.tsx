import { SyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "../../features/modal/modalSlice";
import { RootState } from "../../features/rootReducer";
import ModalAuth from "./ModalAuth";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ModalBackground: React.FC = (props) => {
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.modalState);
  function hideModalFn(e: SyntheticEvent) {
    console.log(e.target);
    if (e.target != e.currentTarget) return;
    dispatch(hideModal());
  }
  return (
    <div
      className={
        "flex fixed inset-0 overflow-y-auto z-20 justify-center items-center min-h-full text-center " +
        modalState.displayStatus
      }
    >
      {/* background overlay */}
      <div className="fixed inset-0 transition-opacity">
        <div
          className="absolute inset-0 bg-gray-500 opacity-75"
          onClick={hideModalFn}
        ></div>
      </div>
      {/* trick the browser into centering the modal contents */}
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
      <div
        className="relative flex align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full "
        role="dialog"
      >
        <ModalAuth></ModalAuth>
      </div>
    </div>
  );
};

export default ModalBackground;
