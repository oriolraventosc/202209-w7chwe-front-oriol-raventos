import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ModalStyled from "./ModalStyled";
import { closeModalActionCreator } from "../../redux/features/UiSlice/UiSlice";
import { useCallback, useEffect } from "react";

const Modal = (): JSX.Element => {
  const alert = useAppSelector(({ uiReducer }) => uiReducer.alert);
  const dispatch = useAppDispatch();
  const closeModal = useCallback(() => {
    dispatch(closeModalActionCreator(alert));
  }, [dispatch, alert]);

  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [closeModal]);
  return (
    <ModalStyled className="alert">
      <span className="alert__message">{alert}</span>
    </ModalStyled>
  );
};

export default Modal;
