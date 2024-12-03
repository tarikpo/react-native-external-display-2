type SceneTypes = {
    EXTERNAL_DISPLAY: '@RNExternalDisplay_externalDisplay';
    CREATED_SCENE: '@RNExternalDisplay_createdScene';
};

type SceneManager = {
    types: SceneTypes;
    isAvailable: () => void;
    requestScene: (options: any) => void;
    closeScene: (sceneId: string) => void;
    isMainSceneActive: () => void;
    resumeMainScene: () => void;
};

export default SceneManager;