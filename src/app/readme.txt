

https://github.com/ionic-team/ionic-native

https://ionicframework.com/docs/native/

sudo ionic cordova plugin add phonegap-plugin-barcodescanner
sudo  npm install --save @ionic-native/barcode-scanner

Cordova plugins are not supported in the 'ionic serve' mode(on browser). it works only in emulator/actual device.

ionic g page <pagename>   -- How to add a new page to ionic project
sudo ionic corodova platform add android
sudo  cordova run android   --- for runnng the program on a connected device
https://ionicframework.com/docs/native/barcode-scanner/
https://www.joshmorony.com/a-simple-guide-to-navigation-in-ionic-2/    --- how to pass parameter values between pages and navigation

****Begin***SQLite

https://ionicframework.com/docs/storage/ -- Storage
https://www.thepolyglotdeveloper.com/2015/12/use-sqlite-in-ionic-2-instead-of-local-storage/ //Sqllite database

https://www.youtube.com/watch?v=e1JlVKPbjO4   -- sqllite
https://www.thepolyglotdeveloper.com/2014/11/use-sqlite-instead-local-storage-ionic-framework/

https://www.pluralsight.com/guides/software-engineering-best-practices/ionic-2-database-management-and-versioning
****End***SQLite

//***Begin *** How to publish to google play store
http://ionicframework.com/docs/v1/guide/publishing.html


    sudo ionic cordova plugin rm cordova-plugin-console   --- don’t want the debug console plugin enabled, so we should remove it before generating the release builds:
    sudo ionic cordova build --release android   --- generate a release build for Android -- this will generate the apk file.

Generate the key using the following command
    keytool -genkey -v -keystore melvinsoftware-release-key.keystore -alias msw_releasekey -keyalg RSA -keysize 2048 -validity 10000
Password: ionicapp2017


To sign the unsigned APK, run the jarsigner tool which is also included in the JDK:

    sudo jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore melvinsoftware-release-key.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk msw_releasekey

Finally, we need to run the zip align tool to optimize the APK. The zipalign tool can be found in <android sdk>/build-tools
-- copy the zipalign exe to the project folder
    zipalign -v 4 HelloWorld-release-unsigned.apk HelloWorld.apk -- just an e.g. -- didn't work
    ./zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk TransferOrderRcpt.apk
    the above command worked



    open Google Play Store Developer Console  https://play.google.com/apps/publish/?dev_acc=17073949706322634170
    an upload the app.



Short descripton about the app
Receiving the goods shipped via transfer order document in NAV.

Detailed description about the app
Receiving the goods shipped via transfer order document in NAV. This app facilitate to scan the barcode (Transfer Order No.) using the mobile camera and post the transfer order receipt in NAV.

//***End