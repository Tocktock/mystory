import Welcome from "../auth/ModalWelcome";
import Authentication from "../auth/Authentication";
import { useSelector, useDispatch } from "react-redux";
import { hideModal } from "../../features/modal/modalSlice";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RootState } from "../../features/rootReducer";
import { SyntheticEvent } from "react";

interface Props {}

const ModalAuth: React.FC<Props> = (props) => {
  const dispatch = useDispatch();
  const { displayStatus: modalDisplay } = useSelector(
    (state: RootState) => state.modalState
  );
  function hideModalFn(e: SyntheticEvent) {
    e.preventDefault();
    dispatch(hideModal());
  }
  return (
    <>
      <div className="hidden sm:flex sm:flex-col w-1/2 py-4 px-4">
        <Welcome />
      </div>
      <div className="min-h-full w-1/2 pt-4 px-4">
        <Authentication />
      </div>
      <button
        className="absolute right-2 top-0 w-8 pt-2 pr-2"
        onClick={hideModalFn}
      >
        <FontAwesomeIcon icon={faTimesCircle} />
      </button>
    </>
  );
};

export default ModalAuth;
