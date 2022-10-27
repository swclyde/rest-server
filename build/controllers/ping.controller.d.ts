interface PingResponse {
    message: string;
}
export default class PingController {
    getMessage(): Promise<PingResponse>;
}
export {};
