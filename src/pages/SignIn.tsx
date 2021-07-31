import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import HeaderContainer from '../containers/HeaderContainer';
import { Form } from '../components';
import FooterContainer from '../containers/FooterContainer';
import * as ROUTES from '../constants/routes';

export default function SignIn() {
  const history = useHistory();
  const firebase = useContext(FirebaseContext)?.firebase;

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = emailAddress === '' || password === '';

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    firebase
      ?.auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((err) => {
        setEmailAddress('');
        setPassword('');
        setError(err.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>로그인</Form.Title>

          {/* Have to Fix */}
          <Form.Error>{error}</Form.Error>

          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="이메일 주소 또는 전화번호"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
              autoComplete="off"
              type="text"
            />
            <Form.Input
              placeholder="비밀번호"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              autoComplete="off"
              type="password"
            />
            <Form.Submit disabled={isInvalid} type="submit">
              로그인
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Netflix 회원이 아닌가요?
            <Form.Link to="/signup"> 지금 가입하세요.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
            확인합니다.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
