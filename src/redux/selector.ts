import {RootState} from "./store"

export const getSearch =( state: RootState)=>{
  return state.table.search
}