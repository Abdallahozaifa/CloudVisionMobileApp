import {CameraCapturedPicture} from "expo-camera/src/Camera.types";

class CameraUtil {
    static async takePicture(camera, setPhoto) {
        try {
            const photo = await camera.takePictureAsync({
                quality: 0.7,
                // base64: true
            });

            if (photo) {
                await camera.pausePreview();

                console.log("Right After takePictureAsync....", photo);
                setPhoto(photo);
                // ImagePicker saves the taken photo to disk and returns a local URI to it
                let localUri = photo.uri;
                let filename = localUri.split('/').pop();

                // Infer the type of the image
                let match = /\.(\w+)$/.exec(filename);
                let type = match ? `image/${match[1]}` : `image`;

                // Upload the image using the fetch and FormData APIs
                let formData = new FormData();
                // Assume "photo" is the name of the form field the server expects
                formData.append('imagefile', { uri: localUri, name: filename, type });

                const SERVER_URL = "http://1f35-2600-4041-44a8-9c00-b9f9-3044-ad08-a734.ngrok.io/cloudvision/"
                const translated_text_response = await fetch(SERVER_URL, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'content-type': 'multipart/form-data',
                    },
                });

                await camera.resumePreview();
                const json_response = await translated_text_response.json();
                console.log("Data returned from Cloud Vision server with await .json(): ", json_response);
                return translated_text_response;
            }
        } catch(e) {
            console.log(e);
        }

    }
}

export default CameraUtil;