/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getMentee } from "../graphql/queries";
import { updateMentee } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function MenteeUpdateForm(props) {
  const {
    id: idProp,
    mentee: menteeModelProp,
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
    bio: "",
    profilePictureUrl: "",
    firebaseToken: "",
    goals: [],
    preferredMentorExperience: "",
    profileStatus: "",
    menteeId: "",
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [email, setEmail] = React.useState(initialValues.email);
  const [bio, setBio] = React.useState(initialValues.bio);
  const [profilePictureUrl, setProfilePictureUrl] = React.useState(
    initialValues.profilePictureUrl
  );
  const [firebaseToken, setFirebaseToken] = React.useState(
    initialValues.firebaseToken
  );
  const [goals, setGoals] = React.useState(initialValues.goals);
  const [preferredMentorExperience, setPreferredMentorExperience] =
    React.useState(initialValues.preferredMentorExperience);
  const [profileStatus, setProfileStatus] = React.useState(
    initialValues.profileStatus
  );
  const [menteeId, setMenteeId] = React.useState(initialValues.menteeId);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = menteeRecord
      ? { ...initialValues, ...menteeRecord }
      : initialValues;
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setEmail(cleanValues.email);
    setBio(cleanValues.bio);
    setProfilePictureUrl(cleanValues.profilePictureUrl);
    setFirebaseToken(cleanValues.firebaseToken);
    setGoals(cleanValues.goals ?? []);
    setCurrentGoalsValue("");
    setPreferredMentorExperience(cleanValues.preferredMentorExperience);
    setProfileStatus(cleanValues.profileStatus);
    setMenteeId(cleanValues.menteeId);
    setErrors({});
  };
  const [menteeRecord, setMenteeRecord] = React.useState(menteeModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getMentee.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMentee
        : menteeModelProp;
      setMenteeRecord(record);
    };
    queryData();
  }, [idProp, menteeModelProp]);
  React.useEffect(resetStateValues, [menteeRecord]);
  const [currentGoalsValue, setCurrentGoalsValue] = React.useState("");
  const goalsRef = React.createRef();
  const validations = {
    firstName: [],
    lastName: [],
    email: [],
    bio: [],
    profilePictureUrl: [],
    firebaseToken: [],
    goals: [],
    preferredMentorExperience: [],
    profileStatus: [],
    menteeId: [],
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
          firstName: firstName ?? null,
          lastName: lastName ?? null,
          email: email ?? null,
          bio: bio ?? null,
          profilePictureUrl: profilePictureUrl ?? null,
          firebaseToken: firebaseToken ?? null,
          goals: goals ?? null,
          preferredMentorExperience: preferredMentorExperience ?? null,
          profileStatus: profileStatus ?? null,
          menteeId: menteeId ?? null,
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
            query: updateMentee.replaceAll("__typename", ""),
            variables: {
              input: {
                id: menteeRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "MenteeUpdateForm")}
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
              bio,
              profilePictureUrl,
              firebaseToken,
              goals,
              preferredMentorExperience,
              profileStatus,
              menteeId,
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
              bio,
              profilePictureUrl,
              firebaseToken,
              goals,
              preferredMentorExperience,
              profileStatus,
              menteeId,
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
              bio,
              profilePictureUrl,
              firebaseToken,
              goals,
              preferredMentorExperience,
              profileStatus,
              menteeId,
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
              bio: value,
              profilePictureUrl,
              firebaseToken,
              goals,
              preferredMentorExperience,
              profileStatus,
              menteeId,
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
              bio,
              profilePictureUrl: value,
              firebaseToken,
              goals,
              preferredMentorExperience,
              profileStatus,
              menteeId,
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
              bio,
              profilePictureUrl,
              firebaseToken: value,
              goals,
              preferredMentorExperience,
              profileStatus,
              menteeId,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              bio,
              profilePictureUrl,
              firebaseToken,
              goals: values,
              preferredMentorExperience,
              profileStatus,
              menteeId,
            };
            const result = onChange(modelFields);
            values = result?.goals ?? values;
          }
          setGoals(values);
          setCurrentGoalsValue("");
        }}
        currentFieldValue={currentGoalsValue}
        label={"Goals"}
        items={goals}
        hasError={errors?.goals?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("goals", currentGoalsValue)
        }
        errorMessage={errors?.goals?.errorMessage}
        setFieldValue={setCurrentGoalsValue}
        inputFieldRef={goalsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Goals"
          isRequired={false}
          isReadOnly={false}
          value={currentGoalsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.goals?.hasError) {
              runValidationTasks("goals", value);
            }
            setCurrentGoalsValue(value);
          }}
          onBlur={() => runValidationTasks("goals", currentGoalsValue)}
          errorMessage={errors.goals?.errorMessage}
          hasError={errors.goals?.hasError}
          ref={goalsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "goals")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Preferred mentor experience"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={preferredMentorExperience}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              bio,
              profilePictureUrl,
              firebaseToken,
              goals,
              preferredMentorExperience: value,
              profileStatus,
              menteeId,
            };
            const result = onChange(modelFields);
            value = result?.preferredMentorExperience ?? value;
          }
          if (errors.preferredMentorExperience?.hasError) {
            runValidationTasks("preferredMentorExperience", value);
          }
          setPreferredMentorExperience(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "preferredMentorExperience",
            preferredMentorExperience
          )
        }
        errorMessage={errors.preferredMentorExperience?.errorMessage}
        hasError={errors.preferredMentorExperience?.hasError}
        {...getOverrideProps(overrides, "preferredMentorExperience")}
      ></TextField>
      <SelectField
        label="Profile status"
        placeholder="Please select an option"
        isDisabled={false}
        value={profileStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              bio,
              profilePictureUrl,
              firebaseToken,
              goals,
              preferredMentorExperience,
              profileStatus: value,
              menteeId,
            };
            const result = onChange(modelFields);
            value = result?.profileStatus ?? value;
          }
          if (errors.profileStatus?.hasError) {
            runValidationTasks("profileStatus", value);
          }
          setProfileStatus(value);
        }}
        onBlur={() => runValidationTasks("profileStatus", profileStatus)}
        errorMessage={errors.profileStatus?.errorMessage}
        hasError={errors.profileStatus?.hasError}
        {...getOverrideProps(overrides, "profileStatus")}
      >
        <option
          children="Pending"
          value="PENDING"
          {...getOverrideProps(overrides, "profileStatusoption0")}
        ></option>
        <option
          children="Published"
          value="PUBLISHED"
          {...getOverrideProps(overrides, "profileStatusoption1")}
        ></option>
        <option
          children="Rejected"
          value="REJECTED"
          {...getOverrideProps(overrides, "profileStatusoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Mentee id"
        isRequired={false}
        isReadOnly={false}
        value={menteeId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              bio,
              profilePictureUrl,
              firebaseToken,
              goals,
              preferredMentorExperience,
              profileStatus,
              menteeId: value,
            };
            const result = onChange(modelFields);
            value = result?.menteeId ?? value;
          }
          if (errors.menteeId?.hasError) {
            runValidationTasks("menteeId", value);
          }
          setMenteeId(value);
        }}
        onBlur={() => runValidationTasks("menteeId", menteeId)}
        errorMessage={errors.menteeId?.errorMessage}
        hasError={errors.menteeId?.hasError}
        {...getOverrideProps(overrides, "menteeId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || menteeModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || menteeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
