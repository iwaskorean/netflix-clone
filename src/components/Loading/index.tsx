import { Spinner, LockBody, ReleaseBody } from './styles/Loading';

export default function Loading() {
  return (
    <Spinner>
      <LockBody />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
