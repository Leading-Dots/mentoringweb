/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type NotificationCreateFormInputValues = {
    title?: string;
    body?: string;
    type?: string;
    fcmToken?: string;
    isSent?: boolean;
    isRead?: boolean;
};
export declare type NotificationCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    fcmToken?: ValidationFunction<string>;
    isSent?: ValidationFunction<boolean>;
    isRead?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotificationCreateFormOverridesProps = {
    NotificationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    fcmToken?: PrimitiveOverrideProps<TextFieldProps>;
    isSent?: PrimitiveOverrideProps<SwitchFieldProps>;
    isRead?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type NotificationCreateFormProps = React.PropsWithChildren<{
    overrides?: NotificationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NotificationCreateFormInputValues) => NotificationCreateFormInputValues;
    onSuccess?: (fields: NotificationCreateFormInputValues) => void;
    onError?: (fields: NotificationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotificationCreateFormInputValues) => NotificationCreateFormInputValues;
    onValidate?: NotificationCreateFormValidationValues;
} & React.CSSProperties>;
export default function NotificationCreateForm(props: NotificationCreateFormProps): React.ReactElement;
