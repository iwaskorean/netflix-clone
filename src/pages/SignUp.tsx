import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderContainer from '../containers/HeaderContainer';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
  const history = useHistory();
  const firebase = useContext(FirebaseContext)?.firebase;

  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = name === '' || emailAddress === '' || password === '';

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    firebase
      ?.auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          ?.updateProfile({
            displayName: name,
            photoURL: Math.floor(Math.random() * 5) + 1 + '',
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((err) => {
        setName('');
        setEmailAddress('');
        setPassword('');
        setError(err.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>

          {/* Have to Fix */}
          <Form.Error>{error}</Form.Error>

          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="이름"
              value={name}
              onChange={({ target }) => setName(target.value)}
              autoComplete="off"
              type="text"
            />
            <Form.Input
              placeholder="이메일 주소"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
              autoComplete="off"
              type="text"
            />
            <Form.Input
              placeholder="비밀번호"
              value={password}
              autoComplete="off"
              type="password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
            <Form.Text>
              이미 가입하셨나요?{' '}
              <Form.Link to="/signin">지금 바로 시작하세요.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
              확인합니다.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
    </>
  );
}
