import {t} from "../../trcp"
import {z} from "zod"
import {dateAndData} from "../db/date_data"
import{Allotment} from "../utils/Alloctment"


export const storingData=t.router({
    getter:t.procedure.query(async res=>{
        try{
            let data=await dateAndData.find({})
            
            return {"msg":data}
        }
        catch(e:any)
        {
            return {"msg":`${e.message}`}
        }

    }),
    poster:t.procedure.input(z.object({change:z.boolean()})).mutation(async res=>{
        try{

            var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');

            let data=await dateAndData.find({})

            if(!data[0] || data[0]['date']!=utc)
            {
    
                let {listinagArray,allignment}=Allotment()
                if(!data[0])
                {
                    let create=new dateAndData({
                        date:utc,
                        listinagArray,
                        allignment
                    })
                    await create.save()
                    return {"msg":`created successfully ${res.input.change}`}
                }
                await dateAndData.updateOne({_id:data[0]["_id"]},{$set:{date:utc,listinagArray,allignment}})
                return {"msg":`posted successfully ${res.input.change}`}
            }
            return {'msg':"no changes found"}

        }
        catch(e:any){
            return {"msg":`${e.message}`}
        }
    })
})

export type StoringData=typeof storingData 