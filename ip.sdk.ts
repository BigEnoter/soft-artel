import axios, { AxiosError, AxiosInstance } from "axios";

export class IpServiceSdk {
    private apiBaseUrl: string;
    private instance: AxiosInstance;

    constructor(apiBaseUrl: string) {
        this.apiBaseUrl = apiBaseUrl;
        this.instance = axios.create({ baseURL: this.apiBaseUrl });
    }

    async getIpInfo(ip: string): Promise<object> {
        try {
            const response = await this.instance.get(`/ip?ip=${ip}`);
            return response.data;
        } catch (e) {
            this.handleError(e);
        }
    };

    private handleError(e: AxiosError): void {
        if (e.response.status === 404) {
            throw new Error(`Couldn't find info of provided IP`);
        } else if (e.request) {
            throw new Error('No response received from the server');
        } else {
            throw new Error(`Request error: ${e.message}`);
        }
    };
}

/**
 * Образец, который при желании можно выполнить через
 * npx ts-node ip.sdk.ts
 */
// const ipService = new IpServiceSdk('http://localhost:3000');
// ipService.getIpInfo('1.2.3.4')
//     .then(data => console.log(data))
//     .catch(error => console.error(error));