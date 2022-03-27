import { EightSleepLogo, Home, User } from 'assets/icons';
import { CONSTANT } from 'config/Config';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import style from 'stylesheet/navbar/Navbar';
import { NavbarProps } from 'types/Navbar';
import { COLOR } from 'utils/Color';

/* NOTE: Room or home temperature is fake just to simulate Eightsleep design concept */
const Navbar: FC<NavbarProps> = ({ generalStyle = {} }) => {
	return (
		<View style={[style.navContainer, generalStyle]}>
			<View style={[style.profileImgContainer, style.shadow]}>
				<User
					fill={COLOR.blue1}
					width={CONSTANT.TWENTY_SEVEN}
					height={CONSTANT.TWENTY_SEVEN}
				/>
			</View>
			<EightSleepLogo />
			<View
				style={[style.profileImgContainer, style.transparent, style.placeHolderContainer]}>
				<Home
					fill={COLOR.white1}
					width={CONSTANT.TWENTY_FIVE}
					height={CONSTANT.TWENTY_FIVE}
				/>
				<Text style={[style.txt, style.temperatureTxt]}>{CONSTANT.TWENTY}°</Text>
			</View>
		</View>
	);
};

export default Navbar;
