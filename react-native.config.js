// react-native.config.js
module.exports = {
    dependency: {
        platforms: {
            ios: {
                podspecPath: './ios/react-native-external-display.podspec',
            },
            android: {
                packageImportPath: 'import com.externaldisplay.RNExternalDisplayPackage;',
                packageInstance: 'new RNExternalDisplayPackage()',
            },
        },
    },
};
