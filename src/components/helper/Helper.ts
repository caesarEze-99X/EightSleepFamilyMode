import { CommonActions, NavigationProp } from '@react-navigation/native';
import { CONSTANT } from 'config/Config';
import moment from 'moment';
import { StagesHealthReport, Timeseries, UserIntervalsHealthReportData } from 'types/HealthReport';
import { MarkedDates } from 'types/Other';
import { COLOR } from 'utils/Color';
import { STRING } from 'utils/String';

export const NAVIGATE_TO_COMPONENT = (
	navigation: NavigationProp<EventTarget>,
	key: string,
	params?: any | {},
): void => {
	navigation.dispatch(CommonActions.navigate({ name: key, params }));
};

export const RETURN_TIME_OF_THE_DAY = (): string => {
	const date: Date = new Date();
	const hours: number = date.getHours();
	const ampm: string = hours >= CONSTANT.TWELVE ? STRING.PM : STRING.AM;
	return ampm === STRING.AM
		? STRING.goodMorning
		: hours >= CONSTANT.TWELVE && hours < CONSTANT.SEVENTEEN
		? STRING.goodAfternoon
		: STRING.goodEvening;
};

export const COMPUTE_MARKED_DATES = (datesArr: Array<string>): Array<MarkedDates> => {
	const newlyMarkedDates: Array<MarkedDates> = [];
	datesArr.forEach((currentDate: string) => {
		newlyMarkedDates.push({ date: currentDate, dots: [{ color: COLOR.blue3 }] });
	});
	return newlyMarkedDates;
};

export const EXTRACT_TIME_STAMP_FROM_DATA = (
	intervalsArr: Array<UserIntervalsHealthReportData>,
): Array<string> => {
	let timestampsArr: Array<string> = [];
	intervalsArr.forEach((interval: UserIntervalsHealthReportData) => {
		timestampsArr.push(interval?.ts);
	});
	return timestampsArr;
};

export const COMPUTE_HEALTH_REPORT = (
	intervalsArr: Array<UserIntervalsHealthReportData>,
	selectedTime: string,
): any => {
	let stageshealthArr: Array<StagesHealthReport> = [];
	let timeSeries: Timeseries = {
		tnt: [],
		tempRoomC: [],
		tempBedC: [],
		respiratoryRate: [],
		heartRate: [],
		heating: [],
	};

	let selectedMonth: number = moment(selectedTime).month() + CONSTANT.ONE;
	let SelectedDay: number = moment(selectedTime).date();
	let selectedYear: number = moment(selectedTime).year();
	for (let i = CONSTANT.ZERO; i < intervalsArr?.length; i++) {
		let tsMonth: number = moment(intervalsArr[i]?.ts).month() + CONSTANT.ONE;
		let tsDay: number = moment(intervalsArr[i]?.ts).date() + CONSTANT.ONE;
		let tsYear: number = moment(intervalsArr[i]?.ts)?.year();
		if (selectedMonth === tsMonth && SelectedDay === tsDay && selectedYear === tsYear) {
			stageshealthArr = intervalsArr[i].stages;
			timeSeries = intervalsArr[i].timeseries;
			break;
		}
	}
	return { stageshealthArr, timeSeries };
};

export const COMPUTE_STAGES_REPORT = (stage: string, stages: any): any => {
	const stageLowercase: string = stage.toLowerCase();
	const stagesToCompute: Array<StagesHealthReport> = stages;
	const stageDurationsValuesArr: Array<number> = [];
	let stageDurationTotal: number = CONSTANT.ZERO;
	let stagesTotal: number = CONSTANT.ZERO;

	stagesToCompute.forEach((stageObj: StagesHealthReport) => {
		stagesTotal += stageObj?.duration;
		if (stageObj?.stage === stageLowercase) {
			stageDurationsValuesArr.push(stageObj?.duration);
			stageDurationTotal += stageObj?.duration;
		}
	});
	const percentage: number = (stageDurationTotal / stagesTotal) * CONSTANT.HUNDRED;
	const hoursOrMins: string = secondsToHourAndMins(stageDurationTotal);
	return { percentage, hoursOrMins };
};

const secondsToHourAndMins = (timeInSecs: number): string => {
	const hour: number = Math.floor(timeInSecs / 3600);
	const mins: number = Math.floor((timeInSecs % 3600) / CONSTANT.SIXTY);

	var formattedHour =
		hour > CONSTANT.ZERO
			? hour + (hour === CONSTANT.ONE ? `${STRING.hour}` : `${STRING.hour}s`)
			: '';
	var formattedMins =
		mins > CONSTANT.ZERO
			? mins + (mins === CONSTANT.ONE ? `${STRING.minute}` : `${STRING.minute}s`)
			: '';

	return hour > CONSTANT.ZERO ? formattedHour : formattedMins;
};

export const COMPUTE_TIME_SERIES_AVG = (timeSeriesArr: Array<Array<string | number>>): number => {
	let totalTimeSeries: number = CONSTANT.ZERO;
	const timeSeriesArrLength: number = timeSeriesArr?.length;
	timeSeriesArr.forEach((timeSeries: any) => {
		const valueForTimeSeries = timeSeries[CONSTANT.ONE];
		totalTimeSeries += valueForTimeSeries;
	});
	return totalTimeSeries / timeSeriesArrLength;
};

export const EXTRACT_TIME_SERIES_X_AND_Y_AXIS_DATA_SET = (
	timeSerieArr: Array<Array<string | number>>,
): any => {
	const xAisArr: Array<string> = [];
	const yAxisArr: Array<number> = [];
	timeSerieArr.forEach((timeSeries: any) => {
		const xAxisTimeFormatted: string = moment(timeSeries[CONSTANT.ZERO]).format('hh:mm a');
		const yAxisValue: number = Number(timeSeries[CONSTANT.ONE]);
		xAisArr.push(xAxisTimeFormatted);
		yAxisArr.push(yAxisValue);
	});
	const firstXAxisArrValue: string = xAisArr[CONSTANT.ZERO];
	const xAxisArrMidValue: string = xAisArr[Math.round(xAisArr?.length / CONSTANT.TWO)];
	const lastXAxisArrValue: string = xAisArr[xAisArr?.length - CONSTANT.ONE];
	const newXaxisArr: Array<string> = [firstXAxisArrValue, xAxisArrMidValue, lastXAxisArrValue];
	return { xAisArr: newXaxisArr, yAxisArr };
};
