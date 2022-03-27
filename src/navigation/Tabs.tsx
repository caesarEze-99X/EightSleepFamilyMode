import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
	STACK_NAVIGATION_MODAL_SCREEN_OPTIONS,
	STACK_NAVIGATION_SCREEN_OPTIONS,
} from 'config/Navigation';
import { TAB_NAVIGATION_KEY } from 'utils/String';
import Home from 'components/home/Home';
import HealthReport from 'components/healthReport/HealthReport';
import { FADE } from './StackCardInterpolation';

const Stack = createStackNavigator();

const Tabs: FC<{}> = () => {
	return (
		<Stack.Navigator
			screenOptions={STACK_NAVIGATION_SCREEN_OPTIONS}
			initialRouteName={TAB_NAVIGATION_KEY.Home}>
			<Stack.Group screenOptions={{ cardStyleInterpolator: FADE }}>
				<Stack.Screen name={TAB_NAVIGATION_KEY.Home} component={Home} />
			</Stack.Group>
			<Stack.Group screenOptions={STACK_NAVIGATION_MODAL_SCREEN_OPTIONS}>
				<Stack.Screen name={TAB_NAVIGATION_KEY.HealthReport} component={HealthReport} />
			</Stack.Group>
		</Stack.Navigator>
	);
};

export default Tabs;
