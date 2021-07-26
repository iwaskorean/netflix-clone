import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export default function HeaderContainer({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>로그인</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
