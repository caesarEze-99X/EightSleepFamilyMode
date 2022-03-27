import * as Animatable from 'react-native-animatable';

import { ANIMATION, CONSTANT, FAKE_DB_USERS, SLIDE_UP_PANEL_CONFIG } from 'config/Config';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { RGB_GRADIENT_COMBO } from 'utils/Color';
import style from 'stylesheet/healthReport/HealthReport';
import Navbar from 'components/navbar/Navbar';
import { Text, useWindowDimensions, View, FlatList } from 'react-native';
import MiniCalendar from 'reusable/CalendarStrip';
import SlidingUpPanel from 'reusable/SlideUpPanel';
import { DESCRIPTIVE_MSG, STRING } from 'utils/String';
import AnimatedProgress from 'reusable/AnimatedProgress';
import { MarkedDates, NoParamFunc, RenderItemContent, SingleParamFunc } from 'types/Other';
import TimeSeriesCard from './TimeSeriesCard';
import {
	healthReportCardArrProps,
	healthReportProps,
	StagesHealthReport,
	Timeseries,
} from 'types/HealthReport';
import { useRoute } from '@react-navigation/native';
import { user1489036920, user1489037100, user1489046760 } from 'dataset';
import {
	COMPUTE_HEALTH_REPORT,
	COMPUTE_MARKED_DATES,
	EXTRACT_TIME_STAMP_FROM_DATA,
} from 'components/helper/Helper';
import moment from 'moment';
import LottieAnimation from 'reusable/LottieAnimation';
import { HealthStatus } from 'assets/animations';
import GraphicalDisplay from './GraphicalDisplay';
import { SheetManager } from 'react-native-actions-sheet';

const fixedHealthCardArr: Array<healthReportCardArrProps> = [
	'Heart Rate',
	'Respiratory Rate',
	'Bed Temperature',
	'Room Temperature',
	'Toss & Turn',
];

const HelathReport: FC<healthReportProps> = () => {
	const route = useRoute();
	const animationDelayValue = useRef<number>(CONSTANT.ONE);
	const { userId }: any = route?.params;
	const { height }: { height?: number; width?: number } = useWindowDimensions();
	const [selectedDated, setSelectedDates] = useState<Array<MarkedDates>>([]);
	const [stagesData, setStagesData] = useState<Array<StagesHealthReport>>([]);
	const [userSelectedDate, setUserSelectedDate] = useState<string>('');
	const [timeSeries, setTimeSeries] = useState<Timeseries>({
		tnt: [],
		tempRoomC: [],
		tempBedC: [],
		respiratoryRate: [],
		heartRate: [],
		heating: [],
	});

	useEffect(() => {
		const fileToRead = fileToParse();
		const extractedTimestampsFromData = EXTRACT_TIME_STAMP_FROM_DATA(fileToRead?.intervals);
		const markedDatesFromData = COMPUTE_MARKED_DATES(extractedTimestampsFromData);
		setSelectedDates(markedDatesFromData);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const fileToParse = useCallback<NoParamFunc<any>>((): any => {
		let parsedUserSleepingInfo: any = user1489036920;
		switch (userId) {
			case FAKE_DB_USERS.user1489036920:
				parsedUserSleepingInfo = user1489036920;
				break;
			case FAKE_DB_USERS.user1489037100:
				parsedUserSleepingInfo = user1489037100;
				break;

			case FAKE_DB_USERS.user1489046760:
				parsedUserSleepingInfo = user1489046760;
				break;
		}
		return parsedUserSleepingInfo;
	}, [userId]);

	const onDateSelected = useCallback<SingleParamFunc<moment.Moment, void>>(
		(date: moment.Moment): void => {
			const selectedDate: string = date.add(CONSTANT.ONE, 'day').format();
			const fileToRead = fileToParse();
			const computedReport: any = COMPUTE_HEALTH_REPORT(fileToRead?.intervals, selectedDate);
			const timeSeriesReport = computedReport?.timeSeries;
			const stageshealthArr = computedReport?.stageshealthArr;
			setStagesData(stageshealthArr);
			setTimeSeries(timeSeriesReport);
			setUserSelectedDate(selectedDate);
		},
		[fileToParse],
	);

	const onTimeseriesCardPressed = (
		timeSeriesArr: Array<Array<string | number>>,
		timeSerie: string,
		date: string,
		avg: number,
		timeSerieUnit: string,
	): void => {
		SheetManager.show(STRING.timeSeriesGraphicalRepresentation, {
			value: { timeSeriesArr, timeSerie, date, avg, timeSerieUnit },
		});
	};

	const renderTimeSeriesCardItem: FC<RenderItemContent> = useCallback<
		SingleParamFunc<RenderItemContent, JSX.Element>
	>(
		({ item, index }): JSX.Element => {
			animationDelayValue.current += CONSTANT.ZERO;
			const animationValue =
				index === CONSTANT.ZERO
					? CONSTANT.HUNDRED * CONSTANT.TWO
					: CONSTANT.HUNDRED * CONSTANT.TWO * animationDelayValue.current;
			return (
				<TimeSeriesCard
					data={item}
					timeSeries={timeSeries}
					date={userSelectedDate}
					animationValue={animationValue}
					onTimseriesCardPressed={onTimeseriesCardPressed}
				/>
			);
		},
		[timeSeries, userSelectedDate],
	);

	const listEmptyContainer = useCallback(
		(): JSX.Element => (
			<View style={style.emptyContainer}>
				<LottieAnimation source={HealthStatus} style={[style.emptyContainerAnimation]} />
				<Text style={[style.txt, style.healthInfoTxt]}>
					{DESCRIPTIVE_MSG.emptyHealthRecordTime} {userId}
				</Text>
			</View>
		),
		[userId],
	);

	const healthReportContainer = useCallback(
		(dragHandler: React.ReactNode): JSX.Element => (
			<Animatable.View
				animation={ANIMATION.FADE_IN_UP_BIG}
				duration={CONSTANT.ONE_THOUSAND + CONSTANT.HUNDRED * CONSTANT.TWO}
				easing={'ease-in'}
				useNativeDriver
				style={[
					style.scrollViewContainer,
					style.shadow,
					style.healthReportContainerShadow,
				]}>
				<LinearGradient
					colors={[
						RGB_GRADIENT_COMBO[CONSTANT.ONE]?.start,
						RGB_GRADIENT_COMBO[CONSTANT.ONE]?.end,
					]}
					end={{ x: CONSTANT.ZERO, y: CONSTANT.ZERO }}
					start={{ x: CONSTANT.POINT_TWO, y: CONSTANT.ONE }}
					style={[
						style.healthReportInnerContainer,
						style.shadow,
						style.healthReportContainerShadow,
					]}>
					<View style={style.dragHandler} {...dragHandler}>
						<View style={style.dragButton} />
					</View>
					<Text style={[style.txt, style.headerTxt]}>{STRING.healthReport}</Text>
					<View style={style.healhtStagesViewContainer}>
						<AnimatedProgress
							title={STRING.awake}
							stagesData={stagesData}
							refresh={Math.random()}
						/>
						<AnimatedProgress
							title={STRING.light}
							stagesData={stagesData}
							refresh={Math.random()}
						/>
						<AnimatedProgress
							title={STRING.deep}
							stagesData={stagesData}
							refresh={Math.random()}
						/>
						<AnimatedProgress
							title={STRING.out}
							stagesData={stagesData}
							refresh={Math.random()}
						/>
					</View>
					<View style={style.timeSeriesCardListContainer}>
						<FlatList
							numColumns={CONSTANT.TWO}
							columnWrapperStyle={style.timeSeriesContainer}
							contentContainerStyle={style.timeSeriesContentContainerStyle}
							data={
								userSelectedDate && timeSeries?.tnt?.length
									? fixedHealthCardArr
									: []
							}
							showsVerticalScrollIndicator={false}
							renderItem={renderTimeSeriesCardItem}
							ListEmptyComponent={listEmptyContainer}
							keyExtractor={(_, index) => String(index)}
						/>
					</View>
				</LinearGradient>
			</Animatable.View>
		),
		[
			listEmptyContainer,
			renderTimeSeriesCardItem,
			stagesData,
			timeSeries?.tnt?.length,
			userSelectedDate,
		],
	);

	return (
		<View style={[style.generalContainer]}>
			<LinearGradient
				colors={[
					RGB_GRADIENT_COMBO[CONSTANT.ZERO]?.start,
					RGB_GRADIENT_COMBO[CONSTANT.ZERO]?.end,
				]}
				end={{ x: CONSTANT.ZERO, y: CONSTANT.ZERO }}
				start={{ x: CONSTANT.SIX, y: CONSTANT.THREE }}
				style={style.generalContainer}>
				<View style={style.contentContainer}>
					<Navbar generalStyle={style.navbar} />
					<MiniCalendar
						markedDates={selectedDated}
						style={undefined}
						startingDate={moment(selectedDated[CONSTANT.ZERO]?.date)}
						onDateSelected={onDateSelected}
					/>
					<SlidingUpPanel
						children={healthReportContainer}
						props={SLIDE_UP_PANEL_CONFIG(height)?.HEALTH_REPORT}
					/>
				</View>
				<GraphicalDisplay />
			</LinearGradient>
		</View>
	);
};

export default HelathReport;
