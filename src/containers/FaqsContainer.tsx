import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs.json';

export default function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>자주 묻는 질문</Accordion.Title>
      {faqsData.map((item) => {
        return (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        );
      })}

      <OptForm>
        <OptForm.Text>
          시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를
          입력하세요.
        </OptForm.Text>
        <br />
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>시작하기</OptForm.Button>
      </OptForm>
    </Accordion>
  );
}
