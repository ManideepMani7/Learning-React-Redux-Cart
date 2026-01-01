import { useDispatch } from "react-redux"
import type { AppDispatch } from "../Redux/store";

export const useAppDispatch = () =>{
    return useDispatch<AppDispatch>();
}