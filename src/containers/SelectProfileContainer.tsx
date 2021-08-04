import { Header, Profiles } from '../components';
import * as Routes from '../constants/routes';
import { ProfileType } from '../types/profile';
import logo from '../logo.svg';

interface SelectProfileContainerProps {
  setProfile: React.Dispatch<React.SetStateAction<ProfileType | undefined>>;
  // Have to Fix annotating user type
  user: any;
}

export default function SelectProfileContainer({
  user,
  setProfile,
}: SelectProfileContainerProps) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={Routes.HOME} alt="Netflix" src={logo} />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Netflix를 시청할 프로필을 선택하세요.</Profiles.Title>
        <Profiles.List>
          {user && (
            <Profiles.User
              onClick={() =>
                setProfile({
                  displayName: user.displayName,
                  photoURL: user.photoURL,
                })
              }
            >
              <Profiles.Picture src={user.photoURL} />
              <Profiles.Name>{user.displayName}</Profiles.Name>
            </Profiles.User>
          )}
        </Profiles.List>
      </Profiles>
    </>
  );
}
