import * as Animatable from 'react-native-animatable';

import { ANIMATION, CONSTANT } from 'config/Config';
import React, { FC, memo, useMemo, useState } from 'react';
import style from 'stylesheet/home/Home';
import { Text, View } from 'react-native';
import { STRING } from 'utils/String';
import { RETURN_TIME_OF_THE_DAY } from 'components/helper/Helper';
import LottieAnimation from 'reusable/LottieAnimation';
import { DayEffect, MorningEffect, NightEffect } from 'assets/animations';
import { NoFuncParamMemo } from 'types/Other';

const WelcomeHeader: FC<{}> = () => {
	const [timeOfTheDay] = useState<string>(RETURN_TIME_OF_THE_DAY());

	const animationTopMargin = useMemo<NoFuncParamMemo<number>>(() => {
		let margin: number = 0;
		switch (timeOfTheDay) {
			case STRING.goodMorning:
				margin = -CONSTANT.THREE;
				break;
			case STRING.goodAfternoon:
				margin = CONSTANT.TEN;
				break;
			default:
				margin = CONSTANT.ZERO;
				break;
		}
		return margin;
	}, [timeOfTheDay]);

	const animationSource = useMemo<NoFuncParamMemo<any>>(() => {
		let source: any = null;
		switch (timeOfTheDay) {
			case STRING.goodMorning:
				source = MorningEffect;
				break;
			case STRING.goodAfternoon:
				source = DayEffect;
				break;
			default:
				source = NightEffect;
				break;
		}
		return source;
	}, [timeOfTheDay]);

	const animationSize = useMemo<NoFuncParamMemo<number>>(() => {
		let animSize: number = CONSTANT.HUNDRED;
		if (timeOfTheDay === STRING.goodMorning) {
			animSize = CONSTANT.HUNDRED;
		}
		return animSize;
	}, [timeOfTheDay]);

	return (
		<Animatable.View
			animation={ANIMATION.TADA}
			delay={CONSTANT.HUNDRED * CONSTANT.TWO}
			duration={CONSTANT.ONE_THOUSAND + CONSTANT.HUNDRED * CONSTANT.FIFTEEN}
			easing={'ease-in'}
			useNativeDriver>
			<View style={[style.welcomeHeaderContainer, style.shadow]}>
				<View style={style.welcomeHeaderContentContainer}>
					<View style={style.salutationContainer}>
						<Text style={[style.txt, style.welcomeMsgTxt]}>{timeOfTheDay},</Text>
						<Text style={[style.txt, style.name]}>Christian</Text>
					</View>
					<LottieAnimation
						source={animationSource}
						style={[
							style.salutationAnimation,
							{ marginTop: animationTopMargin, width: animationSize },
						]}
					/>
				</View>
			</View>
		</Animatable.View>
	);
};

export default memo(WelcomeHeader);
