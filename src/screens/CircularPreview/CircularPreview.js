import React from 'react';
import { StyleSheet, Dimensions, View, PermissionsAndroid, Alert, TouchableOpacity, Text } from 'react-native';
import Pdf from 'react-native-pdf';
import RNFetchBlob from 'rn-fetch-blob'
import Icon  from 'react-native-vector-icons/MaterialIcons'



export default function CircularPreview({route}) {

        const {item}=route.params;
    
        const source = { uri: `https://kec-circular.herokuapp.com/${item.filePath}`, cache: true };
        console.log(source.uri);
        const actualDownload = () => {
            // const { dirs } = RNFetchBlob.fs;
            const dirs = RNFetchBlob.fs.dirs;
            const android = RNFetchBlob.android
           RNFetchBlob.config({
             fileCache: true,
             addAndroidDownloads: {
             useDownloadManager: true,
             mime: 'application/pdf',
             notification: true,
             mediaScannable: true,
             title: `${item.title}.pdf`,
             path: `${dirs.DownloadDir}/${item.title}.pdf`,
             }, 
           })
             .fetch('GET',`https://kec-circular.herokuapp.com/${item.filePath}`, {})
             .then((res) => {
               console.log('The file saved to ', res.path());
             })
             .catch((e) => {
               console.log(e)
             });
         }

         const downloadFile = async() => {
            try {
                const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    actualDownload();
                } else {
                  Alert.alert('Permission Denied!', 'You need to give storage permission to download the file');
                }
              } catch (err) {
                    console.warn(err);
                    console.log("in downloadfile");
              } 
          }

        return (
            <View style={styles.container}>
                <View style={[styles.header,{opacity:0.6}]}><Text style={styles.title}>{item.title}</Text></View>
                <Pdf
                    trustAllCerts={false}
                    source={source}
                    onLoadComplete={(numberOfPages,filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages) => {
                        console.log(`Current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                    style={styles.pdf}/>
                    <TouchableOpacity onPress={downloadFile} style={styles.downloadBtn}>
                    <Icon name='file-download' color="white" size={28} />
                </TouchableOpacity>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'flex-start',
        // alignItems: 'center',
    },
    header:{
        zIndex:10,
        position:'absolute',
        backgroundColor:'#112D4E',
        opacity:10,
        height:40,
        width:'100%',
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        color:"white",
        fontWeight:'bold',
        fontSize:20,
    
    },
    pdf: {
        flex:1,
        width:'100%',
        height:'100%',
    },
    downloadBtn:{
        zIndex:10,
        position:'absolute',
        backgroundColor:'#112D4E',
        marginVertical:40,
        borderRadius:50,
        width:50,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        bottom:0,
        right:20
    },
   
});