import { StyleSheet } from 'react-native';
import { COLOR } from 'utils/Color';
import { FONT } from 'utils/Font';

const CalendarStripStyle = StyleSheet.create({
	calendarContainer: {
		marginTop: '5%',
	},
	calendarStyle: {
		height: 100,
		paddingTop: 20,
		paddingBottom: 10,
		paddingHorizontal: 10,
	},
	calendarHeaderStyle: {
		color: COLOR.grey0,
		fontFamily: FONT.NUNITO_BLACK,
		marginBottom: 10,
	},
	calendarDateNumberStyle: {
		color: COLOR.grey0,
		fontSize: 18,
		fontFamily: FONT.NUNITO_BLACK,
	},
	dateNameStyle: {
		color: COLOR.grey0,
		fontFamily: FONT.NUNITO_BOLD,
	},
	highlightDateStyle: {
		color: COLOR.blue3,
	},
	disableDateStyle: {
		color: 'grey',
	},
	iconContainer: {
		flex: 0.1,
	},
});

export default CalendarStripStyle;
