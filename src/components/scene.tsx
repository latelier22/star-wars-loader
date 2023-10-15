import { Canvas } from "@react-three/fiber";
import { Ambient } from "./ambient/ambient";
import { Cam } from "./cam";
import { Ground } from "./ground";
import { Loading } from "./Loading/loading";
import { MountainRidges } from "./mountainridge";
import { XWing } from "./xwing";
import { Model } from "./model";

export const Scene = () => {
  return (
    <Canvas flat shadows>
      <Cam />
      <Model/>
      <XWing />
      <Loading />
      <MountainRidges animate />
      <Ground />
      <Ambient />
    </Canvas>
  );
};
