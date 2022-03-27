import * as Animatable from 'react-native-animatable';

import { ANIMATION, CONSTANT } from 'config/Config';
import React, { FC, useCallback } from 'react';
import style from 'stylesheet/home/Home';
import { Text, TouchableOpacity } from 'react-native';
import { User } from 'assets/icons';
import { COLOR } from 'utils/Color';
import { useNavigation } from '@react-navigation/native';
import { NoParamFunc } from 'types/Other';
import { TAB_NAVIGATION_KEY } from 'utils/String';
import { NAVIGATE_TO_COMPONENT } from 'components/helper/Helper';
import { UserCardProps } from 'types/Home';

const UserCard: FC<UserCardProps> = ({ data, animationValue }) => {
	const navigation = useNavigation();

	const navigateUser = useCallback<NoParamFunc<void>>((): void => {
		NAVIGATE_TO_COMPONENT(navigation, TAB_NAVIGATION_KEY.HealthReport, { userId: data });
	}, [navigation, data]);

	return (
		<Animatable.View
			animation={ANIMATION.FADE_IN}
			delay={animationValue}
			duration={CONSTANT.ONE_THOUSAND + CONSTANT.HUNDRED * CONSTANT.TWO}
			easing={'ease-in'}
			style={[style.userContainer, style.shadow]}
			useNativeDriver>
			<TouchableOpacity
				activeOpacity={CONSTANT.POINT_NINE}
				onPress={navigateUser}
				style={style.userCardButton}>
				<User fill={COLOR.blue1} width={CONSTANT.SIXTY} height={CONSTANT.SIXTY} />
				<Text style={[style.txt, style.nameOfUsers]}>{data}</Text>
			</TouchableOpacity>
		</Animatable.View>
	);
};

export default UserCard;
