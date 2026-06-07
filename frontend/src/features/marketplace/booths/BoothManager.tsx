import Booth from "./Booth";

import { booths } from "./data/booths";

export default function BoothManager() {
  return (
    <>
      {booths.map((booth) => (
        <Booth
          key={booth.id}
          sellerName={
            booth.sellerName
          }
          position={[
            booth.position.x,
            booth.position.y,
            booth.position.z,
          ]}
        />
      ))}
    </>
  );
}