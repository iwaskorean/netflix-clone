import { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../context/firebase';
import { ContentType } from '../types/content';
import SelectProfileContainer from '../containers/SelectProfileContainer';
import { Loading, Card, Player } from '../components';
import { ProfileType } from '../types/profile';
import { Header } from '../components';
import logo from '../logo.svg';
import * as ROUTES from '../constants/routes';

type SlidesType = {
  films: {
    title: string;
    data: ContentType[];
  }[];

  series: {
    title: string;
    data: ContentType[];
  }[];
};

type SlideItemType = {
  title: string;
  data: ContentType[];
};

export default function BrowseContainer({ slides }: { slides: SlidesType }) {
  const [profile, setProfile] = useState<ProfileType>();
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<'series' | 'films'>('series');
  const [slideRows, setSlideRows] = useState<SlideItemType[]>();

  const firebase = useContext(FirebaseContext)?.firebase;
  // Have to Fix type annotation for user
  const user: any = firebase ? firebase.auth().currentUser : {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [profile]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [category, slides]);

  return profile?.displayName ? (
    <>
      {loading ? <Loading /> : <Loading.ReleaseBody />}
      <Header src="joker1" bg={false}>
        <Header.Frame>
          <Header.Group>
            <Header.Logo src={logo} to={ROUTES.HOME} alt="Netflix" />
            <Header.TextLink
              active={category === 'series' ? 'true' : 'false'}
              onClick={() => setCategory('series')}
            >
              드라마
            </Header.TextLink>
            <Header.TextLink
              active={category === 'films' ? 'true' : 'false'}
              onClick={() => setCategory('films')}
            >
              영화
            </Header.TextLink>
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

      <Card.Group>
        {slideRows?.map((slideItem: SlideItemType) => (
          <Card key={`${category} - ${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item: ContentType) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src={'/vidoes/bunny.mp4'} />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
