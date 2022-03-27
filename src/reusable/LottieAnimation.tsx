import React, { FC } from 'react';
import LottieView, { AnimatedLottieViewProps } from 'lottie-react-native';
import { CONSTANT } from 'config/Config';

const LottieAnimation: FC<AnimatedLottieViewProps> = ({ autoPlay, source, loop, style }) => {
	const width: number = CONSTANT.HUNDRED + CONSTANT.FIFTY;
	const height: number = CONSTANT.HUNDRED + CONSTANT.FIFTY;

	return (
		<LottieView
			source={source}
			autoPlay={autoPlay || true}
			loop={loop || true}
			style={style || { width, height }}
		/>
	);
};

export default LottieAnimation;
