export declare type FieldValidator = (value: any) => string | void | undefined;
declare const handleValidator: (validate: string) => ((value: any) => string | void | undefined) | undefined;
export default handleValidator;
