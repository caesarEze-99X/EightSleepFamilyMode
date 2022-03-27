import * as Animatable from 'react-native-animatable';

import React, { FC, useCallback, useEffect, useState } from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import style from 'stylesheet/healthReport/HealthReport';
import ActionSheet from 'react-native-actions-sheet';
import { COLOR } from 'utils/Color';
import { ANIMATION, CHART_CONFIG, CONSTANT } from 'config/Config';
import { LineChart } from 'react-native-chart-kit';
import { NoParamFunc } from 'types/Other';
import { STRING } from 'utils/String';
import { EXTRACT_TIME_SERIES_X_AND_Y_AXIS_DATA_SET } from 'components/helper/Helper';

const GraphicalDisplay: FC<{}> = () => {
	const { width } = useWindowDimensions();
	const [timeSeriesArr, setTimeSeriesArr] = useState<Array<Array<string | number>>>([]);
	const [timeSerie, setTimeSerie] = useState<string>('');
	const [date, setDate] = useState<string>('');
	const [timeSerieAvg, setTimeSerieAvg] = useState<number>(CONSTANT.ZERO);
	const [timeSerieUnit, setTimeSerieUnit] = useState<string>('');

	const [timSeriesYAxis, setTimeSeriesYAxis] = useState<Array<number>>([]);
	const [timeSeriesXAxis, setTimeSeriesXAxis] = useState<Array<string>>([]);

	useEffect(() => {
		const { xAisArr, yAxisArr }: any = EXTRACT_TIME_SERIES_X_AND_Y_AXIS_DATA_SET(timeSeriesArr);
		setTimeSeriesXAxis(xAisArr);
		setTimeSeriesYAxis(yAxisArr);
	}, [timeSeriesArr]);

	const renderGraphicalRepresentation = useCallback<NoParamFunc<JSX.Element>>(
		(): JSX.Element => (
			<LineChart
				bezier
				fromZero
				chartConfig={CHART_CONFIG}
				withInnerLines={false}
				withOuterLines={false}
				withShadow={false}
				data={{
					labels: timeSeriesXAxis,
					datasets: [{ data: timSeriesYAxis }],
				}}
				height={CONSTANT.HUNDRED * CONSTANT.TWO + CONSTANT.SIXTY}
				style={style.graphContainer}
				width={width - CONSTANT.TWENTY_FIVE}
				withDots={true}
			/>
		),
		[timSeriesYAxis, timeSeriesXAxis, width],
	);

	const setTimeSerieInfo = (data: any): void => {
		const timeSerieInfo: any = data?.value;
		setTimeSeriesArr(timeSerieInfo?.timeSeriesArr);
		setTimeSerie(timeSerieInfo?.timeSerie);
		setDate(timeSerieInfo?.date);
		setTimeSerieAvg(timeSerieInfo?.avg);
		setTimeSerieUnit(timeSerieInfo?.timeSerieUnit);
	};

	const timeSerieHeaderInfo = useCallback<NoParamFunc<JSX.Element>>(
		(): JSX.Element => (
			<View style={style.timeSerieGraphicalHeaderContainer}>
				<View style={style.timeSerieAndDateContainer}>
					<Animatable.View
						animation={ANIMATION.FADE_IN}
						delay={CONSTANT.HUNDRED + CONSTANT.FIFTY}
						duration={CONSTANT.ONE_THOUSAND + CONSTANT.HUNDRED * CONSTANT.FIVE}
						easing={'ease-in'}
						useNativeDriver>
						<Text style={[style.txt, style.timeSerieTxt]}>{timeSerie}</Text>
					</Animatable.View>
					<Animatable.View
						animation={ANIMATION.FADE_IN}
						delay={CONSTANT.HUNDRED + CONSTANT.FIFTY * CONSTANT.EIGHT}
						duration={CONSTANT.ONE_THOUSAND + CONSTANT.HUNDRED * CONSTANT.FIVE}
						easing={'ease-in'}
						useNativeDriver>
						<Text style={[style.txt, style.timeSerieDateTxt]}>{date}</Text>
					</Animatable.View>
				</View>
				<View style={style.timeSeriesAvgContainer}>
					<Animatable.View
						animation={ANIMATION.FADE_IN}
						delay={CONSTANT.HUNDRED + CONSTANT.FIFTY * CONSTANT.EIGHT}
						duration={CONSTANT.ONE_THOUSAND + CONSTANT.HUNDRED * CONSTANT.FIVE}
						easing={'ease-in'}
						useNativeDriver>
						<Text style={[style.txt, style.avgTxt, style.timeSerieAvgTxt]}>
							{STRING.AVG}
						</Text>
					</Animatable.View>
					<Animatable.View
						animation={ANIMATION.FADE_IN}
						delay={CONSTANT.HUNDRED + CONSTANT.FIFTY * CONSTANT.FIFTEEN}
						duration={CONSTANT.ONE_THOUSAND + CONSTANT.HUNDRED * CONSTANT.FIVE}
						easing={'ease-in'}
						useNativeDriver>
						<Text style={[style.txt, style.timeSerieAvgValueTxt]}>
							{timeSerieAvg.toFixed(CONSTANT.TWO)}{' '}
							<Text style={style.unitValueTxt}>{timeSerieUnit}</Text>
						</Text>
					</Animatable.View>
				</View>
			</View>
		),
		[timeSerie, date, timeSerieAvg, timeSerieUnit],
	);

	return (
		<ActionSheet
			id={STRING.timeSeriesGraphicalRepresentation}
			gestureEnabled
			indicatorColor={COLOR.blue3}
			onBeforeShow={setTimeSerieInfo}
			bounceOnOpen
			containerStyle={style.graphActionSheetContainer}
			closeOnTouchBackdrop={true}
			elevation={CONSTANT.TWENTY}>
			<View style={style.timeSerieGraphicalDisplayContainer}>
				{timeSerieHeaderInfo()}
				<Animatable.View
					animation={ANIMATION.FADE_IN_UP_BIG}
					delay={CONSTANT.HUNDRED + CONSTANT.FIFTY}
					duration={CONSTANT.ONE_THOUSAND + CONSTANT.HUNDRED * CONSTANT.FIVE}
					easing={'ease-in'}
					useNativeDriver>
					{renderGraphicalRepresentation()}
				</Animatable.View>
			</View>
		</ActionSheet>
	);
};

export default GraphicalDisplay;
