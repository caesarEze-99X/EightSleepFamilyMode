import { StyleSheet } from 'react-native';
import { COLOR } from 'utils/Color';
import { FONT } from 'utils/Font';

const NavbarStyle = StyleSheet.create({
	generalContainer: {
		flex: 1,
	},
	contentContainer: {
		flex: 1,
		paddingHorizontal: 20,
	},
	welcomeHeaderContainer: {
		height: 130,
		borderRadius: 15,
		width: '100%',
		zIndex: 2,
		marginTop: '10%',
	},
	welcomeHeaderContentContainer: {
		marginTop: '0%',
		zIndex: undefined,
		width: '100%',
		height: '100%',
		borderRadius: 15,
		backgroundColor: COLOR.black2,
		paddingHorizontal: 20,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	txt: {
		fontFamily: FONT.NUNITO_REGULAR,
		fontSize: 14,
		color: COLOR.white,
	},
	welcomeMsgTxt: {
		fontFamily: FONT.NUNITO_BLACK,
		fontSize: 23,
	},
	name: {
		fontSize: 18,
		marginTop: 3,
		color: COLOR.grey0,
		fontFamily: FONT.NUNITO_BOLD,
	},
	salutationContainer: {
		flexDirection: 'column',
		marginRight: 37,
	},
	salutationAnimation: {
		width: 100,
	},
	usersListContainer: {
		justifyContent: 'space-between',
	},
	hitSlop: {
		bottom: 20,
		left: 20,
		right: 20,
		top: 20,
	},
	userContainer: {
		width: '48%',
		height: 200,
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: '4%',
		zIndex: 2,
		backgroundColor: COLOR.black3,
	},
	userContentContainer: {
		zIndex: undefined,
		marginBottom: 0,
		width: '100%',
		height: '100%',
		borderRadius: 0,
		backgroundColor: COLOR.black2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	userListContentContainerStyle: {
		flex: 1,
		marginTop: '2%',
	},
	nameOfUsers: {
		fontFamily: FONT.NUNITO_BLACK,
		color: COLOR.grey0,
		fontSize: 15,
		marginTop: '13%',
	},
	shadow: {
		shadowColor: COLOR.black,
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.36,
		shadowRadius: 6.68,
		elevation: 15,
	},
	userListOutterContainer: {
		flex: 1,
		marginTop: '4%',
	},
	userCardButton: {
		alignItems: 'center',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
	},
});

export default NavbarStyle;
