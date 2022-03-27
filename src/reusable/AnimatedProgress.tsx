/* eslint-disable react-hooks/exhaustive-deps */
import * as Animatable from 'react-native-animatable';

import { COMPUTE_STAGES_REPORT } from 'components/helper/Helper';
import { ANIMATION, CONSTANT } from 'config/Config';
import React, { FC, memo, useEffect, useRef, useState } from 'react';
import { Easing, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import style from 'stylesheet/reusable/AnimatedProgress';
import { AnimatedProgressProps } from 'types/Other';
import { COLOR } from 'utils/Color';

const AnimatedProgress: FC<AnimatedProgressProps> = ({ title, stagesData, refresh }) => {
	const circularProgress = useRef<AnimatedCircularProgress>(null);
	const [avgPercentage, setPercentage] = useState<number>(CONSTANT.ZERO);
	const [subTitle, setSubTitle] = useState<string>('');

	useEffect(() => {
		circularProgress?.current &&
			circularProgress.current.animate(
				avgPercentage,
				CONSTANT.ONE_THOUSAND * CONSTANT.THREE,
				Easing.quad,
			);
	}, [avgPercentage]);

	useEffect(() => {
		const { percentage, hoursOrMins } = COMPUTE_STAGES_REPORT(title, stagesData);
		setPercentage(Math.round(percentage));
		setSubTitle(hoursOrMins);
	}, [stagesData, refresh]);

	return (
		<View style={style.animatedGeneralContainer}>
			<AnimatedCircularProgress
				ref={circularProgress}
				size={CONSTANT.EIGHTY + CONSTANT.FIVE}
				width={CONSTANT.THREE}
				fill={CONSTANT.ZERO}
				tintColor={COLOR.blue3}
				backgroundColor={COLOR.blue2}>
				{() => (
					<Animatable.View
						animation={ANIMATION.FADE_IN}
						delay={CONSTANT.HUNDRED + CONSTANT.FIFTY}
						duration={CONSTANT.ONE_THOUSAND + CONSTANT.HUNDRED * CONSTANT.TEN}
						easing={'ease-in'}
						useNativeDriver>
						<Text style={[style.txt, style.peercentageTxt]}>
							{isNaN(avgPercentage) ? CONSTANT.ZERO : avgPercentage}%
						</Text>
					</Animatable.View>
				)}
			</AnimatedCircularProgress>

			<View style={style.nameAndDurationContainer}>
				<Text style={[style.txt, style.peercentageTxt]}>{title}</Text>
				<Text style={[style.txt, style.durationsTxt]}>{subTitle}</Text>
			</View>
		</View>
	);
};

export default memo(AnimatedProgress);
