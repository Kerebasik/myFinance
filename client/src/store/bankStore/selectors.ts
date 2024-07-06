import {
    createDraftSafeSelectorCreator,
    weakMapMemoize,
} from '@reduxjs/toolkit'
import {RootState} from "@/store";

const createWeakMapDraftSafeSelector =
    createDraftSafeSelectorCreator(weakMapMemoize)

const selectSelf = (state:RootState) => state.bankReducers;
export const currencyRate = createWeakMapDraftSafeSelector(
    selectSelf,
    (state) => state.currencyRate,
)
export const currencyRateLoading = createWeakMapDraftSafeSelector(
    selectSelf,
    (state) => state.currencyRateLoading,
)
export const currencyRateError = createWeakMapDraftSafeSelector(
    selectSelf,
    (state) => state.currencyRateError,
)