import Accordion from 'react-bootstrap/Accordion';

function FaqDetails({ items }) {
  return (
    <>
        <Accordion defaultActiveKey="0">
            {items.map((item, index) => (
                <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>{item.question}</Accordion.Header>
                    <Accordion.Body>
                        {item.answer}
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    </>
  );
}

export default FaqDetails;