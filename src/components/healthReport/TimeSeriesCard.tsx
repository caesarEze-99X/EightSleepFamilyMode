import * as Animatable from 'react-native-animatable';

import { HeartRate, RespiratoryRate, Temperature, Turns } from 'assets/icons';
import { COMPUTE_TIME_SERIES_AVG } from 'components/helper/Helper';
import { ANIMATION, CONSTANT } from 'config/Config';
import moment from 'moment';
import React, { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import style from 'stylesheet/healthReport/HealthReport';
import { TimeSeriesProps } from 'types/HealthReport';
import { NoFuncParamMemo, NoParamFunc } from 'types/Other';
import { COLOR } from 'utils/Color';
import { STRING } from 'utils/String';

const TimeSeriesCard: FC<TimeSeriesProps> = ({
	generalStyle = {},
	data,
	timeSeries,
	date,
	animationValue,
	onTimseriesCardPressed,
}) => {
	const formattedDate: string = moment(date).format('ddd, MMMM Do YYYY');
	const [timeSerieAvg, setTimeSerieAvg] = useState<number>(CONSTANT.ZERO);
	const [timeSerieUnit, setTimeSerieUnit] = useState<string>('');
	const [timeSeriesArr, setTimeSeriesArr] = useState<Array<Array<string | number>>>([]);

	useEffect(() => {
		computeTimeSeriesAvg();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [timeSeries]);

	const onCardPressed = useCallback<NoParamFunc<void>>(
		() =>
			onTimseriesCardPressed &&
			onTimseriesCardPressed(timeSeriesArr, data, formattedDate, timeSerieAvg, timeSerieUnit),
		[onTimseriesCardPressed, timeSeriesArr, data, formattedDate, timeSerieAvg, timeSerieUnit],
	);

	const iconToRender = useMemo<NoFuncParamMemo<JSX.Element>>(() => {
		let Icon: FC<SvgProps>;
		switch (data) {
			case STRING.heartRate:
				Icon = HeartRate;
				break;
			case STRING.respiratoryRate:
				Icon = RespiratoryRate;
				break;
			case STRING.bedTemperature:
				Icon = Temperature;
				break;
			case STRING.roomTemerpature:
				Icon = Temperature;
				break;
			default:
				Icon = Turns;
				break;
		}
		return <Icon fill={COLOR.blue3} width={CONSTANT.FOURTY} height={CONSTANT.FOURTY} />;
	}, [data]);

	const computeTimeSeriesAvg = useCallback<NoParamFunc<void>>((): void => {
		let timeSeriesArrValue: Array<Array<string | number>> = [];
		switch (data) {
			case STRING.heartRate:
				timeSeriesArrValue = timeSeries?.heartRate;
				break;
			case STRING.respiratoryRate:
				timeSeriesArrValue = timeSeries?.respiratoryRate;
				break;
			case STRING.bedTemperature:
				timeSeriesArrValue = timeSeries?.tempBedC;
				break;
			case STRING.roomTemerpature:
				timeSeriesArrValue = timeSeries?.tempRoomC;
				break;
			default:
				timeSeriesArrValue = timeSeries?.tnt;
				break;
		}
		const currTimeSerieAvg: number = COMPUTE_TIME_SERIES_AVG(timeSeriesArrValue);
		setTimeSeriesArr(timeSeriesArrValue);
		setTimeSerieAvg(currTimeSerieAvg);
	}, [
		data,
		timeSeries?.heartRate,
		timeSeries?.respiratoryRate,
		timeSeries?.tempBedC,
		timeSeries?.tempRoomC,
		timeSeries?.tnt,
	]);

	const renderUnit = useMemo<NoFuncParamMemo<string>>((): string => {
		let unit: string = '';
		switch (data) {
			case STRING.heartRate:
				unit = STRING.BPM;
				break;
			case STRING.respiratoryRate:
				unit = STRING.BPM;
				break;
			case STRING.bedTemperature:
				unit = '° C';
				break;
			case STRING.roomTemerpature:
				unit = '° C';
				break;
			default:
				unit = '';
				break;
		}
		setTimeSerieUnit(unit);
		return unit;
	}, [data]);

	return (
		<Animatable.View
			animation={ANIMATION.FADE_IN}
			delay={animationValue}
			duration={CONSTANT.ONE_THOUSAND + CONSTANT.HUNDRED * CONSTANT.TWO}
			easing={'ease-in'}
			style={[style.timeSeriesCardContainer, generalStyle]}
			useNativeDriver>
			<TouchableOpacity activeOpacity={CONSTANT.POINT_NINE} onPress={onCardPressed}>
				<Text style={[style.txt, style.dateOrSeriesNameTxt, style.dateTxt]}>
					{formattedDate}
				</Text>
				<Animatable.View
					animation={ANIMATION.PULSE}
					delay={CONSTANT.HUNDRED + CONSTANT.FIFTY}
					duration={CONSTANT.ONE_THOUSAND + CONSTANT.HUNDRED * CONSTANT.FIVE}
					easing={'ease-in'}
					style={style.timeSeriesIconContainer}
					useNativeDriver>
					<View style={style.descriptionContainer}>
						{iconToRender}
						<Text style={[style.txt, style.avgTxt]}>Avg</Text>
						<Text style={[style.txt, style.rateTxt]}>
							{timeSerieAvg.toFixed(CONSTANT.TWO)} {renderUnit}
						</Text>
					</View>
				</Animatable.View>
			</TouchableOpacity>
			<View style={style.typeOfSeries}>
				<Text style={[style.txt, style.dateOrSeriesNameTxt, { color: COLOR.blue1 }]}>
					{data}
				</Text>
			</View>
		</Animatable.View>
	);
};

export default memo(TimeSeriesCard);
