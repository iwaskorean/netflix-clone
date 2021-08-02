import { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../context/firebase';
import { ContentType, InitialContentType } from '../types/content';
import SelectProfileContainer from '../containers/SelectProfileContainer';
import { Loading } from '../components';
import { ProfileType } from '../types/profile';

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

  const firebase = useContext(FirebaseContext)?.firebase;
  const user = firebase ? firebase.auth().currentUser : {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [profile]);

  return profile?.displayName ? (
    loading ? (
      <Loading />
    ) : (
      <Loading.ReleaseBody />
    )
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
