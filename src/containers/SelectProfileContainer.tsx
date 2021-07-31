import { Header } from '../components';
import * as Routes from '../constants/routes';
import logo from '../logo.svg';

export default function SelectProfileContainer() {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={Routes.HOME} alt="Netflix" src={logo} />
        </Header.Frame>
      </Header>
    </>
  );
}
