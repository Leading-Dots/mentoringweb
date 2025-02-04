/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { Messages } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MessagesUpdateFormInputValues = {};
export declare type MessagesUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MessagesUpdateFormOverridesProps = {
    MessagesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type MessagesUpdateFormProps = React.PropsWithChildren<{
    overrides?: MessagesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    messages?: Messages;
    onSubmit?: (fields: MessagesUpdateFormInputValues) => MessagesUpdateFormInputValues;
    onSuccess?: (fields: MessagesUpdateFormInputValues) => void;
    onError?: (fields: MessagesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MessagesUpdateFormInputValues) => MessagesUpdateFormInputValues;
    onValidate?: MessagesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MessagesUpdateForm(props: MessagesUpdateFormProps): React.ReactElement;
