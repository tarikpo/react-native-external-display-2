import { getScreens } from "./src/js/screens";
import useExternalDisplay from "./src/js/useExternalDisplay";
import SceneManager from "./src/js/SceneManager";
import { StyleProp, ViewProps, ViewStyle } from "react-native";
import {Component} from "react";

export {getScreens, useExternalDisplay, SceneManager};

type Props = {
    mainScreenStyle?: StyleProp<ViewStyle>;
    screen?: string;
    fallbackInMainScreen?: boolean;
} & ExternalDisplayOptions & ViewProps;

export default Component<Props>;