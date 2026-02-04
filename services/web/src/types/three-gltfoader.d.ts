declare module "three/examples/jsm/loaders/GLTFLoader.js" {
  import { Loader, LoadingManager, Group, AnimationClip } from "three";

  export interface GLTF {
    scene: Group;
    scenes: Group[];
    animations: AnimationClip[];
    asset: {
      version: string;
      generator: string;
    };
  }

  export class GLTFLoader extends Loader {
    constructor(manager?: LoadingManager);

    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent<EventTarget>) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}
