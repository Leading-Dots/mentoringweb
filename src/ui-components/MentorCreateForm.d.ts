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
export declare type MentorCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    email?: string;
    bio?: string;
    profilePictureUrl?: string;
    firebaseToken?: string;
    expertise?: string[];
    yearsOfExperience?: number;
    hourlyRate?: number;
    profileStatus?: string;
    mentorId?: string;
    summary?: string;
    linkedInUrl?: string;
    websiteUrl?: string;
};
export declare type MentorCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    profilePictureUrl?: ValidationFunction<string>;
    firebaseToken?: ValidationFunction<string>;
    expertise?: ValidationFunction<string>;
    yearsOfExperience?: ValidationFunction<number>;
    hourlyRate?: ValidationFunction<number>;
    profileStatus?: ValidationFunction<string>;
    mentorId?: ValidationFunction<string>;
    summary?: ValidationFunction<string>;
    linkedInUrl?: ValidationFunction<string>;
    websiteUrl?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MentorCreateFormOverridesProps = {
    MentorCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
    profilePictureUrl?: PrimitiveOverrideProps<TextFieldProps>;
    firebaseToken?: PrimitiveOverrideProps<TextFieldProps>;
    expertise?: PrimitiveOverrideProps<TextFieldProps>;
    yearsOfExperience?: PrimitiveOverrideProps<TextFieldProps>;
    hourlyRate?: PrimitiveOverrideProps<TextFieldProps>;
    profileStatus?: PrimitiveOverrideProps<SelectFieldProps>;
    mentorId?: PrimitiveOverrideProps<TextFieldProps>;
    summary?: PrimitiveOverrideProps<TextFieldProps>;
    linkedInUrl?: PrimitiveOverrideProps<TextFieldProps>;
    websiteUrl?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MentorCreateFormProps = React.PropsWithChildren<{
    overrides?: MentorCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MentorCreateFormInputValues) => MentorCreateFormInputValues;
    onSuccess?: (fields: MentorCreateFormInputValues) => void;
    onError?: (fields: MentorCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MentorCreateFormInputValues) => MentorCreateFormInputValues;
    onValidate?: MentorCreateFormValidationValues;
} & React.CSSProperties>;
export default function MentorCreateForm(props: MentorCreateFormProps): React.ReactElement;
