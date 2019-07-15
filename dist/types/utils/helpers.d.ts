interface Key {
    [key: string]: any;
}
export declare const getFnc: <T, K extends keyof T>(obj: T, key: K) => T[K];
export declare const setFocus: {
    (e: any): void;
    displayName: string;
    __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {};
    };
};
export declare const isExtendable: {
    (value: any): boolean;
    displayName: string;
    __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {};
    };
};
export declare const omit: (obj: any, props: string | string[], fn?: ((value: any, key: string, object: any) => boolean) | undefined) => Key;
export {};
