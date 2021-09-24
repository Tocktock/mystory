import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../features/rootReducer";

interface Props {}

const ModalAuth: React.FC<Props> = (props) => {
  // for test
  const dispatch = useDispatch();

  const { displayStatus } = useSelector((state: RootState) => state.modalState);

  return (
    <div
      className={
        "flex fixed inset-0 overflow-y-auto z-20 justify-center items-center min-h-full text-center " +
        displayStatus
      }
    >
      {/* background overlay */}
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      {/* trick the browser into centering the modal contents */}
      <span
        className="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
      ></span>
      <div
        className="relative flex align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full "
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      ></div>
    </div>
  );
};

export default ModalAuth;
