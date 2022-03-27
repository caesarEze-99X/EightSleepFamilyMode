import { StyleSheet } from 'react-native';
import { COLOR } from 'utils/Color';
import { FONT } from 'utils/Font';

const AnimatedProgressStyle = StyleSheet.create({
	txt: {
		fontFamily: FONT.NUNITO_BLACK,
		color: COLOR.white,
	},
	peercentageTxt: {
		fontSize: 16,
	},
	animatedGeneralContainer: {
		flexDirection: 'column',
		alignItems: 'center',
	},
	nameAndDurationContainer: {
		marginTop: 15,
		alignItems: 'center',
	},
	durationsTxt: {
		fontFamily: FONT.NUNITO_REGULAR,
		fontSize: 12,
		color: COLOR.blue2,
		justifyContent: 'space-between',
		marginTop: 4,
	},
});

export default AnimatedProgressStyle;
