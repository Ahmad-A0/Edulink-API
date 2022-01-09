import { AxiosResponse } from 'axios';
export declare function roughType(object: any): any;
export declare function convertRoughToString(rough: any): string;
export declare function handleResponse(response: AxiosResponse, output_full?: boolean): any;
export declare function method_server_url(method: string, server: string, method_prepend?: string): string;
export declare function uuid(): string;
