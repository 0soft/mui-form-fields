import handleParser, { FieldParser, ParserOptions } from './parsers';
import handleValidator, { FieldValidator } from './validators';
import handleFormatter, { FieldFormatter, FormatterOptions } from './formatters';
interface Key {
    [key: string]: any;
}
export declare const createNumberMask: {
    (options?: Object): any;
    displayName: string;
    __docgenInfo: {
        "description": string;
        "displayName": string;
        "props": {
            "constructor": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "toString": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "toLocaleString": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "valueOf": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "hasOwnProperty": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "isPrototypeOf": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
            "propertyIsEnumerable": {
                "defaultValue": null;
                "description": string;
                "name": string;
                "required": boolean;
                "type": {
                    "name": string;
                };
            };
        };
    };
};
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
export { handleFormatter, handleParser, handleValidator, FieldValidator, FieldFormatter, FieldParser, ParserOptions, FormatterOptions, };
