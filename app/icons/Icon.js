import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome5, Fontisto, Foundation, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons, Zocial, FontAwesome } from '@expo/vector-icons';


const Icon = (props) => {

    const IconTypes = {
        "feather": Feather,
        "antdesign": AntDesign,
        "entypo": Entypo,
        "evilicon": EvilIcons,
        "font-awesome-5": FontAwesome5,
        "fontisto": Fontisto,
        "foundation": Foundation,
        "ionicon": Ionicons,
        "material-community": MaterialCommunityIcons,
        "material": MaterialIcons,
        "simple-line-icon": SimpleLineIcons,
        "octicon": Octicons,
        "zocial": Zocial,
        "font-awesome": FontAwesome
    }

    const CIcon = IconTypes[props.type];

    return (
        <CIcon {...props} />
    )
}

export default Icon