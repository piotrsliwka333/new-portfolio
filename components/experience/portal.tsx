import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./modal";
import { Button } from "../elements/button";
import { useTranslations } from "next-intl";

export default function Portal(props: OwnProps) {
  const { description } = props;
  const [showModal, setShowModal] = useState(false);

  const t = useTranslations("shared.buttons");
  return (
    <>
      <Button
        variant={"primary"}
        onClick={() => setShowModal(true)}
        className="mt-8 md:hidden"
      >
        {t("showResponsibilities")}
      </Button>
      {showModal &&
        createPortal(
          <Modal
            description={description}
            onClose={() => setShowModal(false)}
          />,
          document.body
        )}
    </>
  );
}

interface OwnProps {
  description: Description;
}
