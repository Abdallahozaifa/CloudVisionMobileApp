import { Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
const { width, height } = Dimensions.get("window");

export const ScreenWidth = width;
export const ScreenHeight = height;
export const ASPECT_RATIO = width / height;
export const STATUSBAR_HEIGHT = getStatusBarHeight(false);

const ArtBoardWidth = 395;
const ArtBoardHeight = 852.85;

export const fixedWidth = width / ArtBoardWidth;
export const fixedHeight = height / ArtBoardHeight;