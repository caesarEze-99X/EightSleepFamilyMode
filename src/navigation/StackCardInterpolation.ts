import { StackCardInterpolationProps } from '@react-navigation/stack';

export const FADE = ({ current }: StackCardInterpolationProps) => ({
	cardStyle: {
		opacity: current?.progress,
	},
});
