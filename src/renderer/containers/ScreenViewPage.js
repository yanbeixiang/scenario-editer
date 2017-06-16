import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ScreenViewAction from '../actions/ScreenView';
import ScreenView from '../components/ScreenView';

function mapStateToProps (state) {
    return state.screenView;
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(ScreenViewAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenView)