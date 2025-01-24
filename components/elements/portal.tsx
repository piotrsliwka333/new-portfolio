import { ReactNode } from "react";
import { createPortal } from "react-dom";
import Modal from "./modal";

export default function Portal(props: OwnProps) {
  const { fancyBackground, onClose, showModal, children } = props;
  if (showModal)
    return createPortal(
      <Modal fancyBackground={fancyBackground} onClose={onClose}>
        {children}
      </Modal>,
      document.body
    );
  return null;
}

interface OwnProps {
  showModal: boolean;
  fancyBackground: boolean;
  children: ReactNode;
  onClose: () => void;
}
