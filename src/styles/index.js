import Assets from 'assets';

const Styles = {
    MainContainer: {
        flex: 1,
    },
    MainWrapper: {
        flex: 1,
    },
    TobBarContainer: {
        flexDirection: 'row',
        height: 30,
    },
    TopStatusBar: {
        flexDirection: 'row',
        flex: 1,
    },
    HeartIconStyle: {
        width: 30,
        height: 30,
    },
    TextScoreContainerStyle: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    TextScoreStyle: {
        fontFamily: Assets.ArcadeClassic,
        fontSize: 30,
    },
    FooterContainerStyle: {
        height: 80,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    FooterMainTextStyle: {
        fontFamily: Assets.ArcadeClassic,
        fontSize: 50,
    },
    HandsContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    HandImageStyle: {
        width: 250,
        height: 250,
    }
}

export default Styles;
