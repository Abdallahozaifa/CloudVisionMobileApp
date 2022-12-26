import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import {Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {fixedWidth} from "../../styles/dimension";
import Colors from "../../styles/colors";
import CustomSpinner from "../Spinner";
import CameraUtil from "../../utils/CameraUtil";

const window = Dimensions.get('window');

export default function CameraCard() {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [camera, setCamera] = useState(null);
    const [displayTouchForTranslation, setDisplayTouchForTranslation] = useState(true);
    const [isTranslationLoading, setIsTranslationLoading] = useState(false);
    const [photo, setPhoto] = useState(null);

    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    const takePicture = async () => {
        if (!camera) return;
        setDisplayTouchForTranslation(false);
        setIsTranslationLoading(true);
        await CameraUtil.takePicture(camera, setPhoto);
        setIsTranslationLoading(false);
        setDisplayTouchForTranslation(true);
    };
    // console.log("window width: ", window.width);
    // console.log("window height: ", window.height);
    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} ref={(camera) => setCamera(camera)}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={takePicture}>
                        {displayTouchForTranslation && <Text style={styles.text}>Touch for Translation</Text>}
                        {isTranslationLoading && <CustomSpinner text={"Translating...."} />}
                    </TouchableOpacity>
                </View>
            </Camera>
            {/*{console.log("photo that is taken: ", photo)}*/}
        </View>
    );
}

// 2304/x = 380
const styles = StyleSheet.create({
    image: {
        width: 380,
        height: 660
        // width: window.width / 2.1263,
        // height: window.height, //362 is actual height of image
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        // width: "100%",
        width: "100%", paddingTop: fixedWidth * 10, paddingBottom: fixedWidth * 10, paddingLeft: fixedWidth * 10, paddingRight: fixedWidth * 10, elevation: 5, shadowOffset: { width: 0, height: 2.5 }, shadowOpacity: 0.2, backgroundColor: Colors.white, borderRadius: fixedWidth * 20, borderWidth: 0, borderColor: Colors.white, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
    },
    camera: {
        flex: 1,
        border: 'red',
        width: "100%", elevation: 5, shadowOffset: { width: 0, height: 2.5 }, shadowOpacity: 0.2, backgroundColor: Colors.white, borderRadius: fixedWidth * 20, borderWidth: 0, borderColor: Colors.white, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 330,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        margin: -270
    },
});
