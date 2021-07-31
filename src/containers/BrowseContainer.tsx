import { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../context/firebase';
import { ContentType, InitialContentType } from '../types/content';
import SelectProfileContainer from '../containers/SelectProfileContainer';

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
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const firebase = useContext(FirebaseContext)?.firebase;
  const user = firebase ? firebase.auth().currentUser : {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile]);

  return (
    <>
      {/* loading ? <Loaidng /> : null */}
      <SelectProfileContainer />
    </>
  );
}
