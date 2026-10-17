import { CLASSES } from './theme';
export type ClassId = typeof CLASSES[number]['id'];
export type Seat = {id:string; occupant:string|null};
export type Coach = {id:string; type:ClassId; seats:Seat[]};
export type Message = {id:string; sender:string; text:string; at:number};
export type Train = {id:string; name:string; from:string; to:string; topic:string; language:string; region:string; departure:number; arrival:number; coaches:Coach[]; host:string; lateBoarding:boolean; chats:Record<string,Message[]>};
export type Membership = {trainId:string; coachId:string; seatId:string};
export type Account = {name:string; email:string; phone:string; nickname:string; avatar:string; verified:boolean};
export type Store = {account:Account|null; trains:Train[]; memberships:Membership[]};
export const uid=()=>Math.random().toString(36).slice(2,10);
export const makeCoach=(type:ClassId,index:number):Coach=>{const config=CLASSES.find(x=>x.id===type)!; const id=`${type.toUpperCase().slice(0,2)}${index}`;return {id,type,seats:Array.from({length:config.capacity},(_,n)=>({id:`${id}-${n+1}`,occupant:null}))};};
const sample=(id:string,name:string,from:string,to:string,topic:string,language:string,hours:number,coaches:ClassId[],offset:number):Train=>{
 const departure=Date.now()+offset*60000; const cs=coaches.map((c,i)=>makeCoach(c,i+1));
 cs.forEach((c,j)=>c.seats.forEach((s,i)=>{if(i<Math.min(c.seats.length-1,j+1))s.occupant=`Guest${i+1}`;}));
 return {id,name,from,to,topic,language,region:'India',departure,arrival:departure+hours*3600000,coaches:cs,host:'Demo Conductor',lateBoarding:true,chats:{}};
};
export const initialStore=():Store=>({account:null,memberships:[],trains:[
 sample('demo-moon','Moonlight Express','Mumbai','Goa','Music & life stories','English',2.5,-10,['first','second','third','sleeper'],),
 sample('demo-chai','Midnight Chai Express','Bengaluru','Mysuru','Late night conversations','Kannada',1.5,25,['first','second','general'],),
 sample('demo-tech','Startup Junction','Bengaluru','Chennai','Technology & startups','English',2,50,['first','second','third'],),
 sample('demo-himalaya','Himalaya Explorer','Delhi','Dehradun','Travel & memories','Hindi',3,90,['second','sleeper'],),
 ]});
export const trainStatus=(t:Train,now=Date.now())=>now>=t.arrival?'Ended':now>=t.departure?'Live':'Scheduled';
export const seatsUsed=(t:Train)=>t.coaches.reduce((acc,c)=>acc+c.seats.filter(s=>s.occupant).length,0);
export const seatTotal=(t:Train)=>t.coaches.reduce((acc,c)=>acc+c.seats.length,0);
