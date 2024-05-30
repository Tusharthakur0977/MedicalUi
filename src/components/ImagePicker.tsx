// imagePicker.tsx

import { launchImageLibrary } from 'react-native-image-picker';

export const openImagePicker = (setSelectedImage: any) => {
  const options = {
    mediaType: 'photo',
    includeBase64: false,
    maxHeight: 2000,
    maxWidth: 2000,
  };

  const handleResponse = (response: any) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error:', response.error);
    } else {
      const imageUri =
        response.assets && response.assets.length > 0
          ? response.assets[0].uri
          : null;
      setSelectedImage(imageUri);
    }
  };

  launchImageLibrary(options, handleResponse);
};
