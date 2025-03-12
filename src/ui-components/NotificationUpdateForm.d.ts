/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Notification } from "../API.ts";
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
export declare type NotificationUpdateFormInputValues = {
    title?: string;
    body?: string;
    type?: string;
    fcmToken?: string;
    isSent?: boolean;
    isRead?: boolean;
};
export declare type NotificationUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    fcmToken?: ValidationFunction<string>;
    isSent?: ValidationFunction<boolean>;
    isRead?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotificationUpdateFormOverridesProps = {
    NotificationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    fcmToken?: PrimitiveOverrideProps<TextFieldProps>;
    isSent?: PrimitiveOverrideProps<SwitchFieldProps>;
    isRead?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type NotificationUpdateFormProps = React.PropsWithChildren<{
    overrides?: NotificationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    notification?: Notification;
    onSubmit?: (fields: NotificationUpdateFormInputValues) => NotificationUpdateFormInputValues;
    onSuccess?: (fields: NotificationUpdateFormInputValues) => void;
    onError?: (fields: NotificationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotificationUpdateFormInputValues) => NotificationUpdateFormInputValues;
    onValidate?: NotificationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NotificationUpdateForm(props: NotificationUpdateFormProps): React.ReactElement;
