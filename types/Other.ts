import React from 'react';
import { StagesHealthReport } from './HealthReport';

export type SingleParamFunc<T, R> = (param: T) => R;
export type NoParamFunc<R> = () => R;
export type NoFuncParamMemo<R> = R;
export declare type RenderItemContent = {
	item: any;
	index: number;
};
export declare interface SlidingUpPanelProps {
	children: (dragHandler: React.ReactNode) => JSX.Element;
	props: React.ReactNode;
}

export type SlideUpPanelHandler = {
	resetSlideUpPanel: () => void;
};

export declare interface AnimatedProgressProps {
	title: string;
	stagesData?: Array<StagesHealthReport>;
	refresh: number;
}

type dots = {
	color: string;
};

export type MarkedDates = {
	date: string;
	dots?: Array<dots>;
};

export declare interface CalendarStripProps {
	props?: React.ReactNode;
}
