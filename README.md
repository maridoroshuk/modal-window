<h1 align="center"> Modal-window implementing render-props pattern</h1>
<br>

<p>
Component, which returns a modal window with text you can modify. 
It's also allowed to change submit and cancel button text.
</p>

<p align="center">
Isn't that amazing?
</p>

```
function App() {
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
```
