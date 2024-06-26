import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { Response } from 'express';

@Controller('notification')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService) { }
    @Get('/findall/:id')
    async findAll(@Param('id') id: string, @Res() res: Response) {
        console.log(" i am here")
        const data = await this.notificationService.findAll(id)
        console.log(data)
        return res.status(HttpStatus.OK).json({ status: true, payload:data });
        
    }
}

