import { Controller, Get, Query } from "@nestjs/common";
import { IpService } from "./ip.service";

import { IpDto } from "./dto/ip.dto";

@Controller('ip')
export class IpController {
    constructor(private readonly ipService: IpService) { }

    @Get()
    getIpInfo(@Query() { ip }: IpDto): object {
        return this.ipService.getIpInfo(ip);
    };
};