import { CONSTANT, FAKE_DB_USERS } from 'config/Config';
import React, { FC, useRef } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { RGB_GRADIENT_COMBO } from 'utils/Color';
import style from 'stylesheet/home/Home';
import Navbar from 'components/navbar/Navbar';
import { View, FlatList, StatusBar } from 'react-native';
import WelcomeHeader from './WelcomeHeader';
import { RenderItemContent } from 'types/Other';
import UserCard from './UserCard';

/* NOTE* This will be retrieved from a database. Just a simulation */
const DB_USERS: Array<string> = [
	FAKE_DB_USERS.user1489037100,
	FAKE_DB_USERS.user1489046760,
	FAKE_DB_USERS.user1489036920,
];

const Home: FC<{}> = () => {
	const animationDelayValue = useRef<number>(CONSTANT.ONE);

	const renderUserCardItem: FC<RenderItemContent> = ({ item, index }): JSX.Element => {
		animationDelayValue.current += CONSTANT.ONE_POINT_FIVE;
		const animationValue =
			index === CONSTANT.ZERO
				? CONSTANT.HUNDRED * CONSTANT.TWO
				: CONSTANT.HUNDRED * CONSTANT.TWO * animationDelayValue.current;
		return <UserCard data={item} animationValue={animationValue} />;
	};

	return (
		<View style={style.generalContainer}>
			<StatusBar animated={true} barStyle={'light-content'} showHideTransition={'fade'} />
			<LinearGradient
				colors={[
					RGB_GRADIENT_COMBO[CONSTANT.ZERO]?.start,
					RGB_GRADIENT_COMBO[CONSTANT.ZERO]?.end,
				]}
				end={{ x: CONSTANT.ZERO, y: CONSTANT.ZERO }}
				start={{ x: CONSTANT.SIX, y: CONSTANT.THREE }}
				style={style.generalContainer}>
				<View style={style.contentContainer}>
					<Navbar />
					<WelcomeHeader />
					<View style={style.userListOutterContainer}>
						<FlatList
							numColumns={CONSTANT.TWO}
							columnWrapperStyle={style.usersListContainer}
							contentContainerStyle={style.userListContentContainerStyle}
							data={DB_USERS}
							renderItem={renderUserCardItem}
							keyExtractor={(_, index) => String(index)}
						/>
					</View>
				</View>
			</LinearGradient>
		</View>
	);
};

export default Home;
