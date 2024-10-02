import { Injectable, HttpException } from "@nestjs/common";
import * as geoip from "geoip-lite";

@Injectable()
export class IpService {
    getIpInfo(ip: string): object {
        const lookupInfo = geoip.lookup(ip);
        const [lat, lng] = lookupInfo.ll;
        const { city, country } = lookupInfo;

        if (!lat && !lng) {
            throw new HttpException(`Couldn't find anything for ${ip}`, 404);
        } else {
            return { lat, lng, city, country };
        };
    };
};