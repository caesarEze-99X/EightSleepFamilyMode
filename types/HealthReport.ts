import { ViewStyle } from 'react-native';

export type healthReportCardArrProps =
	| 'Toss & Turn'
	| 'Room Temperature'
	| 'Bed Temperature'
	| 'Respiratory Rate'
	| 'Heart Rate';

export declare interface TimeSeriesProps {
	longerHeight?: boolean;
	generalStyle?: ViewStyle;
	data: healthReportCardArrProps;
	seriesContainerStyle?: ViewStyle;
	date: string;
	timeSeries: Timeseries;
	animationValue: number;
	onTimseriesCardPressed?: (
		timeSeriesArr: Array<Array<string | number>>,
		data: string,
		date: string,
		timeSerieAvg: number,
		timeSerieUnit: string,
	) => void;
}

export type healthReportProps = {
	userId: string;
};

export type StagesHealthReport = {
	stage: string;
	duration: number;
};
export type Timeseries = {
	tnt: Array<Array<string | number>>;
	tempRoomC: Array<Array<string | number>>;
	tempBedC: Array<Array<string | number>>;
	respiratoryRate: Array<Array<string | number>>;
	heartRate: Array<Array<string | number>>;
	heating: Array<Array<string | number>>;
};

export declare type UserIntervalsHealthReportData = {
	id: string;
	ts: string;
	stages: Array<StagesHealthReport>;
	score: number;
	timeseries: Timeseries;
};
