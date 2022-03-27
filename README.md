# EightSleepFamilyMode
A simulated family mode app that shows users registered on the app and monitoring the sleep history as well as health reports visualization of each user


# Steps To Run Application
- Make sure you have yarn installed on your system globally before you begin as well as react native CLI 
- Make sure you also have **Pod** configured on your system and this what you will use to manage your iOS dependencies
- Most importantly we need to have xcode and android studio set up as well on our computers to be able to build and run on any desired platform

## Using yarn ( In projects directory )


Run `yarn install`
Migrate to the ios folder and run: `pod install`
Or your can use the npx command: `npx pod-install` without navigating to the ios folder.

Voila once the depencies are installed, now open xcode and after xcode is done indexing the project, make sure you generate your provisioning cert as well as signed into your apple developer accont on xcode.

If you want to run this on a real device plug in your device and to the top of xcode your device should appear. *Still don't see your device?* Expand the dropdown and select your device from the list or run a virtual simulator of your choice eg (iphone 12, iphone 13 pro max, etc)

Android by default should be all fine as we using linking or running `react-native link` **react above 0.60**. Linking is automatic for android from react above 0.60.
If your choose to run on android (Emulator can be really slow if your system don't have enough RAM space). Perferably just run iOS simualtor if you not using a real device

Very simple steps to run and you should be good to go! **Happy coding**
