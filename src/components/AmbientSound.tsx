import { AmbientSoundProvider, AmbientSoundToggle } from "../context/AmbientSoundContext";

export default function AmbientSound() {
  return <AmbientSoundToggle placement="fixed" />;
}

export { AmbientSoundProvider, AmbientSoundToggle };
