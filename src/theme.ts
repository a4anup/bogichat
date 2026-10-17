export const C = {
  bg:'#070B1B', surface:'#10172D', elevated:'#17203C', outline:'#2A3152',
  primary:'#8247FA', purple:'#A765FF', blue:'#32BDFC', pink:'#DE68F5',
  text:'#F8F8FF', muted:'#A2AACC', dim:'#6D779C', green:'#31D49A',
  red:'#FF6984', amber:'#FFBC72', white:'#FFFFFF',
};
export const GRADIENT = ['#9348FF','#6638ED'] as const;
export const RADIUS = {sm:10, md:16, lg:22, xl:28};
export const SPACING = {xs:4,sm:8,md:12,lg:16,xl:24,xxl:32};
export const CLASSES = [
  {id:'first',label:'1 Tier',subtitle:'1 on 1',capacity:2},
  {id:'second',label:'2 Tier',subtitle:'4 people',capacity:4},
  {id:'third',label:'3 Tier',subtitle:'6 people',capacity:6},
  {id:'sleeper',label:'Sleeper',subtitle:'10 people',capacity:10},
  {id:'general',label:'General',subtitle:'20 people',capacity:20},
] as const;
