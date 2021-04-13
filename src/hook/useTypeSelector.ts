import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducerc"


export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector