import {Jars} from './Jars.tsx';
import {RootState} from "@/store";
import {userData, userDataError, userDataLoading} from "@/store/bankStore/selectors.ts";
import {connect, ConnectedProps} from "react-redux";

const mapStateToProps = (state: RootState) => {
    return {
        userData: userData(state),
        userDataLoading:userDataLoading(state),
        userDataError:userDataError(state)
    }
}

const connector = connect(mapStateToProps)

export type JarsPropsFromRedux = ConnectedProps<typeof connector>
export default connector(Jars)