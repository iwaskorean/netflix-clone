import { Footer } from '../components';

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Break />
      <Footer.Title>질문이 있으신가요?</Footer.Title>

      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">자주 묻는 질문</Footer.Link>
          <Footer.Link href="#">투자 정보</Footer.Link>
          <Footer.Link href="#">시청 방법</Footer.Link>
          <Footer.Link href="#">개인 정보</Footer.Link>
          <Footer.Link href="#">넷플릭스 오리지널</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">고객 센터</Footer.Link>
          <Footer.Link href="#">채용 정보</Footer.Link>
          <Footer.Link href="#">쿠키 설정</Footer.Link>
          <Footer.Link href="#">법적 고지</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">계정</Footer.Link>
          <Footer.Link href="#">지원기기 정보</Footer.Link>
          <Footer.Link href="#">정책</Footer.Link>
          <Footer.Link href="#">오직 넷플릭스에서</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">미디어 센터</Footer.Link>
          <Footer.Link href="#">기프트 카드</Footer.Link>
          <Footer.Link href="#">문의하기</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Link href="https://github.com/SewookHan/netflix-clone">
        넷플릭스 대한민국
      </Footer.Link>
      <Footer.Link href="https://github.com/SewookHan/netflix-clone">
        created by Sewook Han
      </Footer.Link>
    </Footer>
  );
}
