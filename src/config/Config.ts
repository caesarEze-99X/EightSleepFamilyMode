import { COLOR } from 'utils/Color';
import { FONT } from 'utils/Font';

export const CONSTANT = {
	TWENTY_SEVEN: 27,
	SIXTY_FOUR: 64,
	ELEVEN: 11,
	ONE: 1,
	ZERO: 0,
	THREE: 3,
	SIX: 6,
	EIGHT: 8,
	TWENTY_FOUR: 24,
	SEVENTEEN: 17,
	TWELVE: 12,
	HUNDRED: 100,
	FIFTY: 50,
	TEN: 10,
	TWO: 2,
	POINT_NINE: 0.9,
	SIXTY: 60,
	THIRTY: 30,
	ONE_THOUSAND: 1000,
	POINT_TWO: 0.2,
	FIVE: 5,
	EIGHTY: 80,
	FOURTY: 40,
	THIRTY_FIVE: 35,
	POINT_SEVEN: 0.7,
	ONE_MIN_FROM_SECS: 0.0166667,
	ONE_POINT_FIVE: 1.5,
	FIFTEEN: 15,
	TWENTY: 20,
	SIXTEEN: 16,
	TWENTY_FIVE: 25,
};

export const FAKE_DB_USERS = {
	user1489046760: '1489046760',
	user1489036920: '1489036920',
	user1489037100: '1489037100',
};

export const CALENDAR_DAY_SELECTION_ANIMATION: any = {
	type: 'border',
	duration: CONSTANT.HUNDRED * CONSTANT.TWO,
	borderWidth: CONSTANT.POINT_SEVEN,
	padding: CONSTANT.TEN,
	borderHighlightColor: COLOR.blue3,
};

export const CALENDAR_ANIMATION: any = {
	type: 'sequence',
	duration: CONSTANT.THIRTY,
};

export const ANIMATION = {
	FADE_IN_UP_BIG: 'fadeInUpBig',
	FADE_IN: 'fadeIn',
	FADE_IN_LEFT: 'fadeInLeft',
	BOUNCE_IN: 'bounceIn',
	BOUNCE_IN_LEFT: 'bounceInLeft',
	ZOOM_IN: 'zoomIn',
	TADA: 'tada',
	PULSE: 'pulse',
};

export const SLIDE_UP_PANEL_CONFIG = (height: number) => ({
	HEALTH_REPORT: {
		height: height - 110,
		draggableRange: {
			top: height - 110,
			bottom: height - 230,
		},
		snappingPoints: [height - 95, height - 230],
		showBackdrop: false,
	},
});

export const CHART_CONFIG = {
	fontFamily: FONT.NUNITO_BLACK,
	paddingRight: CONSTANT.ZERO,
	backgroundGradientFrom: COLOR.black3,
	backgroundGradientTo: COLOR.black2,
	decimalPlaces: CONSTANT.ZERO,
	color: () => COLOR.grey2,
	labelColor: () => COLOR.blue3,
	style: {
		borderRadius: CONSTANT.SIXTEEN,
	},
	propsForDots: {
		r: '3',
		strokeWidth: '2',
		stroke: COLOR.blue3,
	},
};
