/// <reference types="node" />
import Connection from './connection';
import { PROVIDER_CONTEXT_STATUS } from '../utils';
export default class Context {
    private data;
    private conn;
    private decoded;
    status: PROVIDER_CONTEXT_STATUS;
    body: any;
    attachments: {
        [name: string]: any;
    };
    req: {
        requestId: number;
        dubboVersion: string;
        interfaceName: string;
        interfaceVersion: string;
        method: string;
        parameters: any[];
        attachments: {
            path: string;
            interface: string;
            version: string;
            group?: string;
            timeout: number;
        };
    };
    constructor(conn: Connection, buf: Buffer);
    decode(): Promise<void>;
    encode(): Buffer;
    setRequestId(header: Buffer): void;
    private encodeHead;
    private isSupportAttachments;
    private encodeBody;
}
