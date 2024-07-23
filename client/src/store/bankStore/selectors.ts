import {
    createDraftSafeSelectorCreator,
    weakMapMemoize,
} from '@reduxjs/toolkit'
import {RootState} from "@/store";

const createWeakMapDraftSafeSelector =
    createDraftSafeSelectorCreator(weakMapMemoize)

const baseBank = (state:RootState) => state.bankReducers;
export const currencyRate = createWeakMapDraftSafeSelector(
    baseBank,
    (state) => state.currencyRate,
)
export const currencyRateLoading = createWeakMapDraftSafeSelector(
    baseBank,
    (state) => state.currencyRateLoading,
)
export const currencyRateError = createWeakMapDraftSafeSelector(
    baseBank,
    (state) => state.currencyRateError,
)

export const userData = createWeakMapDraftSafeSelector(
    baseBank,
    (state)=> state.userData
)

export const userDataLoading = createWeakMapDraftSafeSelector(
    baseBank,
    (state)=> state.userDataLoading
)

export const userDataError = createWeakMapDraftSafeSelector(
    baseBank,
    (state)=> state.userDataError
)