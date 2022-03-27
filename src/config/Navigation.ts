import { StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';
import { Platform } from 'react-native';

export const STACK_NAVIGATION_SCREEN_OPTIONS: StackNavigationOptions = {
	headerShown: false,
};

export const STACK_NAVIGATION_MODAL_SCREEN_OPTIONS: StackNavigationOptions = {
	presentation: 'modal',
	...Platform.select({
		ios: {
			...TransitionPresets.ModalPresentationIOS,
		},
		android: {
			...TransitionPresets.RevealFromBottomAndroid,
		},
	}),
};

export const TAB_BAR_SCREEN_OPTIONS = {
	tabBarShowLabel: false,
};
