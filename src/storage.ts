import AsyncStorage from '@react-native-async-storage/async-storage';
import {Store,initialStore} from './model';
const KEY='bogichat-demo-v1';
export async function loadStore():Promise<Store>{try{const raw=await AsyncStorage.getItem(KEY);return raw?JSON.parse(raw):initialStore();}catch{return initialStore();}}
export async function saveStore(s:Store){await AsyncStorage.setItem(KEY,JSON.stringify(s));}
export async function clearStore(){await AsyncStorage.removeItem(KEY);}
