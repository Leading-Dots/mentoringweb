/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createUser } from "../graphql/mutations";
const client = generateClient();
export default function UserCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    passwordHash: "",
    role: "",
    bio: "",
    profilePictureUrl: "",
    firebaseToken: "",
    mentorDetails: "",
    menteeDetails: "",
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [email, setEmail] = React.useState(initialValues.email);
  const [passwordHash, setPasswordHash] = React.useState(
    initialValues.passwordHash
  );
  const [role, setRole] = React.useState(initialValues.role);
  const [bio, setBio] = React.useState(initialValues.bio);
  const [profilePictureUrl, setProfilePictureUrl] = React.useState(
    initialValues.profilePictureUrl
  );
  const [firebaseToken, setFirebaseToken] = React.useState(
    initialValues.firebaseToken
  );
  const [mentorDetails, setMentorDetails] = React.useState(
    initialValues.mentorDetails
  );
  const [menteeDetails, setMenteeDetails] = React.useState(
    initialValues.menteeDetails
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setEmail(initialValues.email);
    setPasswordHash(initialValues.passwordHash);
    setRole(initialValues.role);
    setBio(initialValues.bio);
    setProfilePictureUrl(initialValues.profilePictureUrl);
    setFirebaseToken(initialValues.firebaseToken);
    setMentorDetails(initialValues.mentorDetails);
    setMenteeDetails(initialValues.menteeDetails);
    setErrors({});
  };
  const validations = {
    firstName: [],
    lastName: [],
    email: [],
    passwordHash: [],
    role: [],
    bio: [],
    profilePictureUrl: [],
    firebaseToken: [],
    mentorDetails: [{ type: "JSON" }],
    menteeDetails: [{ type: "JSON" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          firstName,
          lastName,
          email,
          passwordHash,
          role,
          bio,
          profilePictureUrl,
          firebaseToken,
          mentorDetails,
          menteeDetails,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createUser.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserCreateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName: value,
              lastName,
              email,
              passwordHash,
              role,
              bio,
              profilePictureUrl,
              firebaseToken,
              mentorDetails,
              menteeDetails,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName: value,
              email,
              passwordHash,
              role,
              bio,
              profilePictureUrl,
              firebaseToken,
              mentorDetails,
              menteeDetails,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email: value,
              passwordHash,
              role,
              bio,
              profilePictureUrl,
              firebaseToken,
              mentorDetails,
              menteeDetails,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Password hash"
        isRequired={false}
        isReadOnly={false}
        value={passwordHash}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              passwordHash: value,
              role,
              bio,
              profilePictureUrl,
              firebaseToken,
              mentorDetails,
              menteeDetails,
            };
            const result = onChange(modelFields);
            value = result?.passwordHash ?? value;
          }
          if (errors.passwordHash?.hasError) {
            runValidationTasks("passwordHash", value);
          }
          setPasswordHash(value);
        }}
        onBlur={() => runValidationTasks("passwordHash", passwordHash)}
        errorMessage={errors.passwordHash?.errorMessage}
        hasError={errors.passwordHash?.hasError}
        {...getOverrideProps(overrides, "passwordHash")}
      ></TextField>
      <SelectField
        label="Role"
        placeholder="Please select an option"
        isDisabled={false}
        value={role}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              passwordHash,
              role: value,
              bio,
              profilePictureUrl,
              firebaseToken,
              mentorDetails,
              menteeDetails,
            };
            const result = onChange(modelFields);
            value = result?.role ?? value;
          }
          if (errors.role?.hasError) {
            runValidationTasks("role", value);
          }
          setRole(value);
        }}
        onBlur={() => runValidationTasks("role", role)}
        errorMessage={errors.role?.errorMessage}
        hasError={errors.role?.hasError}
        {...getOverrideProps(overrides, "role")}
      >
        <option
          children="Mentor"
          value="MENTOR"
          {...getOverrideProps(overrides, "roleoption0")}
        ></option>
        <option
          children="Mentee"
          value="MENTEE"
          {...getOverrideProps(overrides, "roleoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Bio"
        isRequired={false}
        isReadOnly={false}
        value={bio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              passwordHash,
              role,
              bio: value,
              profilePictureUrl,
              firebaseToken,
              mentorDetails,
              menteeDetails,
            };
            const result = onChange(modelFields);
            value = result?.bio ?? value;
          }
          if (errors.bio?.hasError) {
            runValidationTasks("bio", value);
          }
          setBio(value);
        }}
        onBlur={() => runValidationTasks("bio", bio)}
        errorMessage={errors.bio?.errorMessage}
        hasError={errors.bio?.hasError}
        {...getOverrideProps(overrides, "bio")}
      ></TextField>
      <TextField
        label="Profile picture url"
        isRequired={false}
        isReadOnly={false}
        value={profilePictureUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              passwordHash,
              role,
              bio,
              profilePictureUrl: value,
              firebaseToken,
              mentorDetails,
              menteeDetails,
            };
            const result = onChange(modelFields);
            value = result?.profilePictureUrl ?? value;
          }
          if (errors.profilePictureUrl?.hasError) {
            runValidationTasks("profilePictureUrl", value);
          }
          setProfilePictureUrl(value);
        }}
        onBlur={() =>
          runValidationTasks("profilePictureUrl", profilePictureUrl)
        }
        errorMessage={errors.profilePictureUrl?.errorMessage}
        hasError={errors.profilePictureUrl?.hasError}
        {...getOverrideProps(overrides, "profilePictureUrl")}
      ></TextField>
      <TextField
        label="Firebase token"
        isRequired={false}
        isReadOnly={false}
        value={firebaseToken}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              passwordHash,
              role,
              bio,
              profilePictureUrl,
              firebaseToken: value,
              mentorDetails,
              menteeDetails,
            };
            const result = onChange(modelFields);
            value = result?.firebaseToken ?? value;
          }
          if (errors.firebaseToken?.hasError) {
            runValidationTasks("firebaseToken", value);
          }
          setFirebaseToken(value);
        }}
        onBlur={() => runValidationTasks("firebaseToken", firebaseToken)}
        errorMessage={errors.firebaseToken?.errorMessage}
        hasError={errors.firebaseToken?.hasError}
        {...getOverrideProps(overrides, "firebaseToken")}
      ></TextField>
      <TextAreaField
        label="Mentor details"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              passwordHash,
              role,
              bio,
              profilePictureUrl,
              firebaseToken,
              mentorDetails: value,
              menteeDetails,
            };
            const result = onChange(modelFields);
            value = result?.mentorDetails ?? value;
          }
          if (errors.mentorDetails?.hasError) {
            runValidationTasks("mentorDetails", value);
          }
          setMentorDetails(value);
        }}
        onBlur={() => runValidationTasks("mentorDetails", mentorDetails)}
        errorMessage={errors.mentorDetails?.errorMessage}
        hasError={errors.mentorDetails?.hasError}
        {...getOverrideProps(overrides, "mentorDetails")}
      ></TextAreaField>
      <TextAreaField
        label="Mentee details"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              passwordHash,
              role,
              bio,
              profilePictureUrl,
              firebaseToken,
              mentorDetails,
              menteeDetails: value,
            };
            const result = onChange(modelFields);
            value = result?.menteeDetails ?? value;
          }
          if (errors.menteeDetails?.hasError) {
            runValidationTasks("menteeDetails", value);
          }
          setMenteeDetails(value);
        }}
        onBlur={() => runValidationTasks("menteeDetails", menteeDetails)}
        errorMessage={errors.menteeDetails?.errorMessage}
        hasError={errors.menteeDetails?.hasError}
        {...getOverrideProps(overrides, "menteeDetails")}
      ></TextAreaField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
