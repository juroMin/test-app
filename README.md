
# test-app


# The New York Times API are in use for news Feed.

# Bottom navigation

It’s very important to place top-level and frequently-used actions at the bottom of the screen. This way, they are comfortably reached with one-handed and one-thumb interactions.



### Project setup

Please make sure you have following libraries/frameworks/apps installed in your system.
* [Node](https://nodejs.org/en/download/)

* [Latest JDK](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
* [Android Studio](https://developer.android.com/studio/install)
* [Android Emulator (API level 28+)](https://developer.android.com/studio/run/emulator)

* [XCode 11+](https://developer.apple.com/xcode/)
* [Cocoapods](https://cocoapods.org/)


### Android

Create `local.properties` file at the project/android folder. Place root to the sdk.dir on your system.
for mac: `sdk.dir = /Users/currentUser/Library/Android/sdk`


To launch app in Debug mode, launch your Android emulator/device and run following commands:
```bash
npm i
npx jetify
cd android && ./gradlew installDebug && cd ..
npm start
ifconfig

```
`ifconfig` is needed to get the Debug server host. Ex. `192.168.20.124`
Shake the device. Press settings and Debug server host & port for device. Ex. `192.168.20.124:8081`

### iOS

Before you open .xcworkspace file in Xcode, please run following commands:
```bash
cd ios && pod install
```

To run app on XCode emulator
1) Select device / emulator from dropdown near Run button (_top left_)
2) Press the Run button



### Tests

Before you run test  make sure that node packages are installed.

To run tests with Jest run
```
npm install jest --global
jest
```
To update snapshots run:
```
jest --updateSnapshot
```
