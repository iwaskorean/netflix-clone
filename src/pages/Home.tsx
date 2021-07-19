import JumbotronContainer from '../containers/JumbotronContainer';
import FooterContainer from '../containers/FooterContainer';
import FaqsContainer from '../containers/FaqsContainer';
import HeaderContainer from '../containers/HeaderContainer';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <p>Header</p>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
