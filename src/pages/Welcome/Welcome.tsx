import { FullSizeCentered } from '@/components/styled';
import useOrientation from '@/hooks/useOrientation';

import Landing from '../Landing';
import muiLogo from './logos/mui.svg';
import pwaLogo from './logos/pwa.svg';
import reactLogo from './logos/react_ed.svg';
import recoilLogo from './logos/recoil.svg';
import rrLogo from './logos/rr.svg';
import tsLogo from './logos/ts.svg';
import viteLogo from './logos/vite.svg';
import { Image } from './styled';

function Welcome() {
  const isPortrait = useOrientation();

  const width = isPortrait ? '40%' : '30%';
  const height = isPortrait ? '30%' : '40%';

  return (
    <>
      <meta name="title" content="Welcome" />
      <Landing />
      <FullSizeCentered flexDirection={isPortrait ? 'column' : 'row'}>
        <Image alt="react-router" src={rrLogo} />
        <Image alt="vite" src={viteLogo} />
        <Image alt="typescript" src={tsLogo} />
        <Image alt="react" src={reactLogo} sx={{ width, height }} />
        <Image alt="mui" src={muiLogo} />
        <Image alt="recoil" src={recoilLogo} />
        <Image alt="pwa" src={pwaLogo} />
      </FullSizeCentered>
    </>
  );
}

export default Welcome;
