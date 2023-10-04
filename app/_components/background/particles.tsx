import { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import {loadSlim} from 'tsparticles-slim'
import {loadFull} from 'tsparticles'

const ParticlesBackground = () => {
  const options = useMemo(() => {
    return {
      particles: {
        move: {
          enable: true
        }
      }
    }
  }, [])

  const particlesInit = useCallback((engine:any) => {
    loadSlim(engine)
  }, [])
  return (
    <>
      <Particles init={particlesInit as any} options={options} />
    </>
  )
}

export default ParticlesBackground