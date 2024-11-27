import {useAppDispatch} from "@/hooks/redux/useAppDispatch.ts";
import {currencyRateFetch, userInfoFetch} from "@/store/bankStore/actions.ts";

const useInitialStore = ()=>{
    const dispatch = useAppDispatch()
    dispatch(currencyRateFetch())
    dispatch(userInfoFetch())
}

export {useInitialStore}
