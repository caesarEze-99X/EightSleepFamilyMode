import { StyleSheet } from 'react-native';
import { COLOR } from 'utils/Color';
import { FONT } from 'utils/Font';

const HealthReportStyle = StyleSheet.create({
	generalContainer: {
		flex: 1,
	},
	contentContainer: {
		flex: 1,
	},
	navbar: {
		marginTop: '2%',
		paddingHorizontal: 20,
	},
	txt: {
		fontFamily: FONT.NUNITO_BLACK,
		color: COLOR.white,
	},
	dragHandler: {
		paddingTop: 12,
		alignItems: 'center',
		height: 40,
	},
	dragButton: {
		height: 6,
		width: '11%',
		borderRadius: 40,
		backgroundColor: COLOR.blue3,
	},
	scrollViewContainer: {
		flex: 1,
		marginTop: '7%',
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		width: '100%',
	},
	shadow: {
		shadowColor: COLOR.black,
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.36,
		shadowRadius: 6.68,
		elevation: 15,
	},
	healthReportContainerShadow: {
		shadowOffset: { width: 0, height: 4.6 },
		shadowRadius: 20.68,
		shadowColor: COLOR.black,
	},
	healthReportInnerContainer: {
		flex: 1,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
		paddingHorizontal: 20,
	},
	headerTxt: {
		fontSize: 25,
		marginTop: '3%',
	},
	healhtStagesViewContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: '7%',
	},
	timeSeriesContainer: {
		justifyContent: 'space-between',
	},
	timeSeriesContentContainerStyle: {
		marginTop: '2%',
		paddingBottom: '15%',
	},
	timeSeriesCardContainer: {
		width: '48%',
		height: 240,
		borderRadius: 15,
		marginBottom: '4%',
		paddingHorizontal: 10,
		backgroundColor: COLOR.black3,
	},
	timeSeriesCardListContainer: {
		flex: 1,
		marginTop: '8%',
	},
	dateOrSeriesNameTxt: {
		fontSize: 13,
		marginTop: 10,
	},
	dateTxt: {
		fontSize: 12,
		color: COLOR.blue2,
	},
	typeOfSeries: {
		alignSelf: 'flex-end',
		position: 'absolute',
		bottom: 0,
		marginBottom: 10,
		paddingHorizontal: 10,
	},
	timeSeriesIconContainer: {
		alignSelf: 'center',
		marginTop: '18%',
	},
	descriptionContainer: {
		marginTop: '8%',
		alignItems: 'center',
	},
	avgTxt: {
		fontSize: 15,
		marginTop: 15,
		color: COLOR.grey2,
	},
	rateTxt: {
		fontSize: 15,
	},
	emptyContainerAnimation: {
		width: 200,
		marginTop: -13,
	},
	healthInfoTxt: {
		fontFamily: FONT.NUNITO_REGULAR,
		paddingHorizontal: '10%',
		color: COLOR.blue2,
		textAlign: 'center',
		fontSize: 13,
		marginTop: -30,
	},
	emptyContainer: {
		flex: 1,
		alignItems: 'center',
	},
	graphActionSheetContainer: {
		backgroundColor: COLOR.black2,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		paddingTop: 7,
	},
	graphContainer: {
		borderRadius: 16,
		marginTop: '5%',
	},
	timeSerieGraphicalDisplayContainer: {
		height: '46%',
		alignItems: 'center',
	},
	timeSerieGraphicalHeaderContainer: {
		marginTop: '6%',
		alignItems: 'center',
		flexDirection: 'row',
		width: '100%',
		paddingHorizontal: 20,
		justifyContent: 'space-between',
	},
	timeSerieAndDateContainer: {
		flexDirection: 'column',
	},
	timeSerieTxt: {
		fontSize: 25,
	},
	timeSeriesAvgContainer: {
		flexDirection: 'column',
		alignItems: 'flex-end',
	},
	timeSerieAvgTxt: {
		marginTop: 0,
		// color: COLOR.blue3,
	},
	timeSerieDateTxt: {
		fontSize: 15,
		color: COLOR.grey2,
		marginTop: 3,
	},
	timeSerieAvgValueTxt: {
		fontSize: 22,
		color: COLOR.white,
	},
	unitValueTxt: {
		fontSize: 15,
		color: COLOR.blue3,
	},
});

export default HealthReportStyle;
