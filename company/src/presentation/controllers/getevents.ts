
import { NextFunction, Request, Response } from "express"
import cron from 'node-cron';
import iEvent from "../../../src/application/interfaces/eventInterface"

export const getEventController = (dependencies: any) => {
    const { useCases: { getEventUseCase,deleteEventUseCase } } = dependencies;
    console.log("i am here")
    cron.schedule('*/35 * * * *', () => {
        console.log('Running a task every minute');
        const getevents = async () => {
            const eventsArray = await getEventUseCase(dependencies).execute({})
            
            const currentDate = new Date();

            const expiredEventIds = eventsArray
            .filter((event: iEvent) => {
                const eventDate = new Date(event.eventEndDate);
                const eventTime = event.eventEndTime.split(':').map(Number);
        
                eventDate.setHours(eventTime[0], eventTime[1]);
        
                return currentDate >= eventDate;
            })
            .map((event: iEvent) => event._id as any); 
            console.log(expiredEventIds)
            for(var i=0;i<expiredEventIds.length;i++){
             const data=await deleteEventUseCase(dependencies).execute({_id:expiredEventIds[i]})
             console.log(data)
            }
        }
        getevents()

    });
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            const data = await getEventUseCase(dependencies).execute(req.body)
            console.log(data)
            res.json({ status: true, payload: data })
        } catch (err: any) {
            next(err)
        }
    }
} 