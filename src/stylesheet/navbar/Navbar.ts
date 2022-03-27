import { StyleSheet } from 'react-native';
import { COLOR } from 'utils/Color';
import { FONT } from 'utils/Font';
import { STRING } from 'utils/String';

const NavbarStyle = StyleSheet.create({
	navContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: '15%',
	},
	txt: {
		fontFamily: FONT.NUNITO_BLACK,
		fontSize: 14,
		color: COLOR.white,
	},
	profileImgContainer: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: COLOR.black1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	shadow: {
		shadowColor: COLOR.black,
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.36,
		shadowRadius: 6.68,
		elevation: 15,
	},
	transparent: {
		backgroundColor: STRING.transparent,
	},
	placeHolderContainer: {
		width: 50,
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
	},
	temperatureTxt: {
		fontFamily: FONT.NUNITO_REGULAR,
		fontSize: 15,
		marginLeft: 10,
	},
});

export default NavbarStyle;
