import { Footer } from '../components';

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Break />
      <Footer.Title>Questions? Contack us.</Footer.Title>

      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Inverstor Relations</Footer.Link>
          <Footer.Link href="#">Way to watch</Footer.Link>
          <Footer.Link href="#">Coporate Information</Footer.Link>
          <Footer.Link href="#">Netflix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Help Center</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
          <Footer.Link href="#">Contact Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Redeem Gift Card</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Media Cntre</Footer.Link>
          <Footer.Link href="#">Buy Gift Card</Footer.Link>
          <Footer.Link href="#">Cookie</Footer.Link>
          <Footer.Link href="#">Legal</Footer.Link>
        </Footer.Column>
      </Footer.Row>

      <Footer.Text>Netflix United Kingdom</Footer.Text>
    </Footer>
  );
}
