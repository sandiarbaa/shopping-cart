// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "../store";

// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// export const useAppSelector = useSelector.withTypes<RootState>();

import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "../store";

// Custom hook untuk dispatch dengan type AppDispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

// Custom hook untuk selector dengan type RootState
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
