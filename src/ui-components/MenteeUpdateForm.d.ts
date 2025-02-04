/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Mentee } from "../API.ts";
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
export declare type MenteeUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    email?: string;
    bio?: string;
    profilePictureUrl?: string;
    firebaseToken?: string;
    goals?: string[];
    preferredMentorExperience?: string;
};
export declare type MenteeUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    profilePictureUrl?: ValidationFunction<string>;
    firebaseToken?: ValidationFunction<string>;
    goals?: ValidationFunction<string>;
    preferredMentorExperience?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MenteeUpdateFormOverridesProps = {
    MenteeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    bio?: PrimitiveOverrideProps<TextFieldProps>;
    profilePictureUrl?: PrimitiveOverrideProps<TextFieldProps>;
    firebaseToken?: PrimitiveOverrideProps<TextFieldProps>;
    goals?: PrimitiveOverrideProps<TextFieldProps>;
    preferredMentorExperience?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MenteeUpdateFormProps = React.PropsWithChildren<{
    overrides?: MenteeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mentee?: Mentee;
    onSubmit?: (fields: MenteeUpdateFormInputValues) => MenteeUpdateFormInputValues;
    onSuccess?: (fields: MenteeUpdateFormInputValues) => void;
    onError?: (fields: MenteeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MenteeUpdateFormInputValues) => MenteeUpdateFormInputValues;
    onValidate?: MenteeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MenteeUpdateForm(props: MenteeUpdateFormProps): React.ReactElement;
