export function Allotment(){
let teamMembers=["Krishnaveni","Prakash","Venkat","Hafeez","Akash","Shaquib","Rashmi","Rohit","Deepak"]
let array:number[]=Array.from({length: teamMembers.length}, () => Math.floor(Math.random() * Date.now()));

let allignment:any={}

for(let i=0;i<teamMembers.length;i++)
{
    allignment[array[i]]=teamMembers[i] 
}


let listinagArray=Object.keys(allignment)

// console.log(listinagArray.sort(),"after sorting")
listinagArray.sort()

return {listinagArray,allignment}
}


