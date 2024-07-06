import {Header} from "@/components/Header/Header.tsx";
import { connect, ConnectedProps } from 'react-redux'
import {currencyRate, currencyRateError, currencyRateLoading} from "@/store/bankStore/selectors.ts";
import {RootState} from "@/store";

const mapStateToProps = (state: RootState) => {
    return {
        currencyRate: currencyRate(state),
        currencyRateLoading:currencyRateLoading(state),
        currencyRateError:currencyRateError(state)
    }
}

const connector = connect(mapStateToProps)

export type HeaderPropsFromRedux = ConnectedProps<typeof connector>
export default connector(Header)