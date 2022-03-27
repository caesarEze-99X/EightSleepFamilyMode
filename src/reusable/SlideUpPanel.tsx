import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import SlideUpPanel from 'rn-sliding-up-panel';
import { SlideUpPanelHandler, SlidingUpPanelProps } from 'types/Other';

const SlidingUpPanel = forwardRef<SlideUpPanelHandler, SlidingUpPanelProps>(
	({ children, props }, ref) => {
		const slideUpPanelRef = useRef<SlideUpPanel>(null);

		useImperativeHandle(ref, () => ({
			resetSlideUpPanel,
		}));

		const resetSlideUpPanel = (): void => slideUpPanelRef.current?.hide();

		return (
			<SlideUpPanel ref={slideUpPanelRef} {...props}>
				{dragHandler => children(dragHandler)}
			</SlideUpPanel>
		);
	},
);

export default SlidingUpPanel;
