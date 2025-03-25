/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Mentor } from "../API.ts";
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
export declare type MentorUpdateFormInputValues = {
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
    availability?: string;
    name?: string;
};
export declare type MentorUpdateFormValidationValues = {
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
    availability?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MentorUpdateFormOverridesProps = {
    MentorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
    availability?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MentorUpdateFormProps = React.PropsWithChildren<{
    overrides?: MentorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mentor?: Mentor;
    onSubmit?: (fields: MentorUpdateFormInputValues) => MentorUpdateFormInputValues;
    onSuccess?: (fields: MentorUpdateFormInputValues) => void;
    onError?: (fields: MentorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MentorUpdateFormInputValues) => MentorUpdateFormInputValues;
    onValidate?: MentorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MentorUpdateForm(props: MentorUpdateFormProps): React.ReactElement;
