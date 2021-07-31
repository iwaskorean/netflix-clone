import { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../context/firebase';
import { ContentType, InitialContentType } from '../types/content';

export default function useContent(target: string) {
  const [content, setContent] = useState<ContentType[] | InitialContentType[]>(
    []
  );
  const firebase = useContext(FirebaseContext)?.firebase;

  useEffect(() => {
    if (firebase) {
      firebase
        .firestore()
        .collection(target)
        .get()
        .then((snapshot) => {
          const allContent = snapshot.docs.map((contentObj) => ({
            ...contentObj.data(),
            docId: contentObj.id,
          }));
          setContent(allContent);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [firebase, target]);

  return { [target]: content };
}
