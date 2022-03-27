import React, { FC, memo, useCallback } from 'react';
import { View } from 'react-native';
import { CALENDAR_ANIMATION, CALENDAR_DAY_SELECTION_ANIMATION } from 'config/Config';
import { COLOR } from 'utils/Color';
import CalendarStrip, { CalendarStripProps } from 'react-native-calendar-strip';
import style from 'stylesheet/reusable/CalendarStrip';
import { STRING } from 'utils/String';
import { SingleParamFunc } from 'types/Other';

const MiniCalendar: FC<CalendarStripProps> = ({
	markedDates,
	style: calenderStyle,
	startingDate,
	onDateSelected,
}): JSX.Element => {
	const onDatePicked = useCallback<SingleParamFunc<moment.Moment, void>>(
		(date: moment.Moment): void => {
			onDateSelected && onDateSelected(date);
		},
		[onDateSelected],
	);

	return (
		<View style={[style.calendarContainer]}>
			<CalendarStrip
				calendarAnimation={CALENDAR_ANIMATION}
				daySelectionAnimation={CALENDAR_DAY_SELECTION_ANIMATION}
				style={calenderStyle ?? style.calendarStyle}
				calendarHeaderStyle={style.calendarHeaderStyle}
				calendarColor={STRING.transparent}
				dateNumberStyle={style.calendarDateNumberStyle}
				dateNameStyle={style.dateNameStyle}
				highlightDateNumberStyle={style.highlightDateStyle}
				highlightDateNameStyle={style.highlightDateStyle}
				disabledDateNameStyle={style.disableDateStyle}
				disabledDateNumberStyle={style.disableDateStyle}
				iconStyle={{ tintColor: COLOR.blue1 }}
				iconContainer={style.iconContainer}
				markedDates={markedDates}
				startingDate={startingDate}
				onDateSelected={onDatePicked}
			/>
		</View>
	);
};

export default memo(MiniCalendar);
