import { useState } from "react";
import Headline from "./components/Headline";
import Modal from "./components/Modal";
import Text from "./components/Text";
import Button from "./components/Button";
import TextButton from "./components/TextButton";
import "./App.css";

export default function App() {
  const [showModal, setShowModal] = useState(true);
  console.log(showModal);
  return (
    <>
      <button onClick={() => setShowModal(!showModal)}>Show Modal</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {(dismiss) => (
            <>
              <Headline as="h2">Add Note</Headline>
              <Text as="p" my={3}>
                Ensure that all participants are aware of the change.
              </Text>
              <Button onClick={dismiss}>Add Note</Button>
              <TextButton onClick={dismiss}>Cancel</TextButton>
            </>
          )}
        </Modal>
      )}
    </>
  );
}
