/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Topic } from "../API.ts";
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
export declare type TopicUpdateFormInputValues = {
    value?: string;
};
export declare type TopicUpdateFormValidationValues = {
    value?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TopicUpdateFormOverridesProps = {
    TopicUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TopicUpdateFormProps = React.PropsWithChildren<{
    overrides?: TopicUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    topic?: Topic;
    onSubmit?: (fields: TopicUpdateFormInputValues) => TopicUpdateFormInputValues;
    onSuccess?: (fields: TopicUpdateFormInputValues) => void;
    onError?: (fields: TopicUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TopicUpdateFormInputValues) => TopicUpdateFormInputValues;
    onValidate?: TopicUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TopicUpdateForm(props: TopicUpdateFormProps): React.ReactElement;
