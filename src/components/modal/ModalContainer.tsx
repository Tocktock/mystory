import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../features/modal/modalSlice";
import { RootState } from "../../features/rootReducer";
const ModalBackground: React.FC = (props) => {
  const dispatch = useDispatch();
  const modalState = useSelector((state: RootState) => state.modalState);
  function hideModal(e) {
    console.log(typeof e);
    dispatch(showModal);
  }
  return (
    <div
      className={`w-full h-full absolute bg-black opacity-50 z-10 ${modalState.displayStatus}`}
      onClick={hideModal}
    ></div>
  );
};

export default ModalBackground;
