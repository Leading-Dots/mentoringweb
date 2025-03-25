/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type MenteeCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    email?: string;
    bio?: string;
    profilePictureUrl?: string;
    firebaseToken?: string;
    goals?: string[];
    preferredMentorExperience?: number;
    profileStatus?: string;
    menteeId?: string;
    summary?: string;
    linkedInUrl?: string;
    websiteUrl?: string;
    resumeUrl?: string;
    topics?: string[];
    name?: string;
};
export declare type MenteeCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    profilePictureUrl?: ValidationFunction<string>;
    firebaseToken?: ValidationFunction<string>;
    goals?: ValidationFunction<string>;
    preferredMentorExperience?: ValidationFunction<number>;
    profileStatus?: ValidationFunction<string>;
    menteeId?: ValidationFunction<string>;
    summary?: ValidationFunction<string>;
    linkedInUrl?: ValidationFunction<string>;
    websiteUrl?: ValidationFunction<string>;
    resumeUrl?: ValidationFunction<string>;
    topics?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MenteeCreateFormOverridesProps = {
    MenteeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
    profilePictureUrl?: PrimitiveOverrideProps<TextFieldProps>;
    firebaseToken?: PrimitiveOverrideProps<TextFieldProps>;
    goals?: PrimitiveOverrideProps<TextFieldProps>;
    preferredMentorExperience?: PrimitiveOverrideProps<TextFieldProps>;
    profileStatus?: PrimitiveOverrideProps<SelectFieldProps>;
    menteeId?: PrimitiveOverrideProps<TextFieldProps>;
    summary?: PrimitiveOverrideProps<TextFieldProps>;
    linkedInUrl?: PrimitiveOverrideProps<TextFieldProps>;
    websiteUrl?: PrimitiveOverrideProps<TextFieldProps>;
    resumeUrl?: PrimitiveOverrideProps<TextFieldProps>;
    topics?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MenteeCreateFormProps = React.PropsWithChildren<{
    overrides?: MenteeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MenteeCreateFormInputValues) => MenteeCreateFormInputValues;
    onSuccess?: (fields: MenteeCreateFormInputValues) => void;
    onError?: (fields: MenteeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MenteeCreateFormInputValues) => MenteeCreateFormInputValues;
    onValidate?: MenteeCreateFormValidationValues;
} & React.CSSProperties>;
export default function MenteeCreateForm(props: MenteeCreateFormProps): React.ReactElement;
