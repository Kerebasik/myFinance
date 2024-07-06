import {useAppDispatch} from "@/hooks/redux/useAppDispatch.ts";
import {currencyRateFetch} from "@/store/bankStore/actions.ts";

const useInitialStore = ()=>{
    const dispatch = useAppDispatch()

    dispatch(currencyRateFetch())
}

export {useInitialStore}
