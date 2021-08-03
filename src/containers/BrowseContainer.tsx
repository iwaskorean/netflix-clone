import { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../context/firebase';
import { ContentType, InitialContentType } from '../types/content';
import SelectProfileContainer from '../containers/SelectProfileContainer';
import { Loading } from '../components';
import { ProfileType } from '../types/profile';
import { Header } from '../components';
import logo from '../logo.svg';
import * as ROUTES from '../constants/routes';

type SlidesType = {
  films: {
    title: string;
    data: ContentType[] | InitialContentType[];
  };
  series: {
    title: string;
    data: ContentType[] | InitialContentType[];
  };
};

export default function BrowseContainer({ slides }: { slides: SlidesType }) {
  const [profile, setProfile] = useState<ProfileType>();
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const firebase = useContext(FirebaseContext)?.firebase;
  // Have to Fix type annotation for user
  const user: any = firebase ? firebase.auth().currentUser : {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [profile]);

  return profile?.displayName ? (
    <>
      {loading ? <Loading /> : <Loading.ReleaseBody />}
      <Header src="joker1" bg={false}>
        <Header.Frame>
          <Header.Group>
            <Header.Logo src={logo} to={ROUTES.HOME} alt="Netflix" />
            <Header.TextLink>드라마</Header.TextLink>
            <Header.TextLink>영화</Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => firebase?.auth().signOut()}>
                    로그아웃
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>조커</Header.FeatureCallOut>
          <Header.Text>
            고담시의 광대 아서 플렉은 코미디언을 꿈꾸는 남자. 하지만 모두가
            미쳐가는 코미디 같은 세상에서 맨 정신으로는 그가 설 자리가 없음을
            깨닫게 되는데… 이제껏 본 적 없는 진짜 ‘조커’를 만나라!
          </Header.Text>
          <Header.PlayButton>재생</Header.PlayButton>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
