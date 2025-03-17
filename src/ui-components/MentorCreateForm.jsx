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
import { createMentor } from "../graphql/mutations";
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
export default function MentorCreateForm(props) {
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
    bio: "",
    profilePictureUrl: "",
    firebaseToken: "",
    expertise: [],
    yearsOfExperience: "",
    hourlyRate: "",
    profileStatus: "",
    mentorId: "",
    summary: "",
    linkedInUrl: "",
    websiteUrl: "",
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
  const [expertise, setExpertise] = React.useState(initialValues.expertise);
  const [yearsOfExperience, setYearsOfExperience] = React.useState(
    initialValues.yearsOfExperience
  );
  const [hourlyRate, setHourlyRate] = React.useState(initialValues.hourlyRate);
  const [profileStatus, setProfileStatus] = React.useState(
    initialValues.profileStatus
  );
  const [mentorId, setMentorId] = React.useState(initialValues.mentorId);
  const [summary, setSummary] = React.useState(initialValues.summary);
  const [linkedInUrl, setLinkedInUrl] = React.useState(
    initialValues.linkedInUrl
  );
  const [websiteUrl, setWebsiteUrl] = React.useState(initialValues.websiteUrl);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setEmail(initialValues.email);
    setBio(initialValues.bio);
    setProfilePictureUrl(initialValues.profilePictureUrl);
    setFirebaseToken(initialValues.firebaseToken);
    setExpertise(initialValues.expertise);
    setCurrentExpertiseValue("");
    setYearsOfExperience(initialValues.yearsOfExperience);
    setHourlyRate(initialValues.hourlyRate);
    setProfileStatus(initialValues.profileStatus);
    setMentorId(initialValues.mentorId);
    setSummary(initialValues.summary);
    setLinkedInUrl(initialValues.linkedInUrl);
    setWebsiteUrl(initialValues.websiteUrl);
    setErrors({});
  };
  const [currentExpertiseValue, setCurrentExpertiseValue] = React.useState("");
  const expertiseRef = React.createRef();
  const validations = {
    firstName: [],
    lastName: [],
    email: [],
    bio: [],
    profilePictureUrl: [],
    firebaseToken: [],
    expertise: [],
    yearsOfExperience: [],
    hourlyRate: [],
    profileStatus: [],
    mentorId: [],
    summary: [],
    linkedInUrl: [],
    websiteUrl: [],
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
          bio,
          profilePictureUrl,
          firebaseToken,
          expertise,
          yearsOfExperience,
          hourlyRate,
          profileStatus,
          mentorId,
          summary,
          linkedInUrl,
          websiteUrl,
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
            query: createMentor.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "MentorCreateForm")}
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
              expertise,
              yearsOfExperience,
              hourlyRate,
              profileStatus,
              mentorId,
              summary,
              linkedInUrl,
              websiteUrl,
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
              expertise,
              yearsOfExperience,
              hourlyRate,
              profileStatus,
              mentorId,
              summary,
              linkedInUrl,
              websiteUrl,
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
              expertise,
              yearsOfExperience,
              hourlyRate,
              profileStatus,
              mentorId,
              summary,
              linkedInUrl,
              websiteUrl,
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
              expertise,
              yearsOfExperience,
              hourlyRate,
              profileStatus,
              mentorId,
              summary,
              linkedInUrl,
              websiteUrl,
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
              expertise,
              yearsOfExperience,
              hourlyRate,
              profileStatus,
              mentorId,
              summary,
              linkedInUrl,
              websiteUrl,
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
              expertise,
              yearsOfExperience,
              hourlyRate,
              profileStatus,
              mentorId,
              summary,
              linkedInUrl,
              websiteUrl,
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
              expertise: values,
              yearsOfExperience,
              hourlyRate,
              profileStatus,
              mentorId,
              summary,
              linkedInUrl,
              websiteUrl,
            };
            const result = onChange(modelFields);
            values = result?.expertise ?? values;
          }
          setExpertise(values);
          setCurrentExpertiseValue("");
        }}
        currentFieldValue={currentExpertiseValue}
        label={"Expertise"}
        items={expertise}
        hasError={errors?.expertise?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("expertise", currentExpertiseValue)
        }
        errorMessage={errors?.expertise?.errorMessage}
        setFieldValue={setCurrentExpertiseValue}
        inputFieldRef={expertiseRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Expertise"
          isRequired={false}
          isReadOnly={false}
          value={currentExpertiseValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.expertise?.hasError) {
              runValidationTasks("expertise", value);
            }
            setCurrentExpertiseValue(value);
          }}
          onBlur={() => runValidationTasks("expertise", currentExpertiseValue)}
          errorMessage={errors.expertise?.errorMessage}
          hasError={errors.expertise?.hasError}
          ref={expertiseRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "expertise")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Years of experience"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={yearsOfExperience}
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
              expertise,
              yearsOfExperience: value,
              hourlyRate,
              profileStatus,
              mentorId,
              summary,
              linkedInUrl,
              websiteUrl,
            };
            const result = onChange(modelFields);
            value = result?.yearsOfExperience ?? value;
          }
          if (errors.yearsOfExperience?.hasError) {
            runValidationTasks("yearsOfExperience", value);
          }
          setYearsOfExperience(value);
        }}
        onBlur={() =>
          runValidationTasks("yearsOfExperience", yearsOfExperience)
        }
        errorMessage={errors.yearsOfExperience?.errorMessage}
        hasError={errors.yearsOfExperience?.hasError}
        {...getOverrideProps(overrides, "yearsOfExperience")}
      ></TextField>
      <TextField
        label="Hourly rate"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={hourlyRate}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              bio,
              profilePictureUrl,
              firebaseToken,
              expertise,
              yearsOfExperience,
              hourlyRate: value,
              profileStatus,
              mentorId,
              summary,
              linkedInUrl,
              websiteUrl,
            };
            const result = onChange(modelFields);
            value = result?.hourlyRate ?? value;
          }
          if (errors.hourlyRate?.hasError) {
            runValidationTasks("hourlyRate", value);
          }
          setHourlyRate(value);
        }}
        onBlur={() => runValidationTasks("hourlyRate", hourlyRate)}
        errorMessage={errors.hourlyRate?.errorMessage}
        hasError={errors.hourlyRate?.hasError}
        {...getOverrideProps(overrides, "hourlyRate")}
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
              expertise,
              yearsOfExperience,
              hourlyRate,
              profileStatus: value,
              mentorId,
              summary,
              linkedInUrl,
              websiteUrl,
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
        <option
          children="Inprogress"
          value="INPROGRESS"
          {...getOverrideProps(overrides, "profileStatusoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Mentor id"
        isRequired={false}
        isReadOnly={false}
        value={mentorId}
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
              expertise,
              yearsOfExperience,
              hourlyRate,
              profileStatus,
              mentorId: value,
              summary,
              linkedInUrl,
              websiteUrl,
            };
            const result = onChange(modelFields);
            value = result?.mentorId ?? value;
          }
          if (errors.mentorId?.hasError) {
            runValidationTasks("mentorId", value);
          }
          setMentorId(value);
        }}
        onBlur={() => runValidationTasks("mentorId", mentorId)}
        errorMessage={errors.mentorId?.errorMessage}
        hasError={errors.mentorId?.hasError}
        {...getOverrideProps(overrides, "mentorId")}
      ></TextField>
      <TextField
        label="Summary"
        isRequired={false}
        isReadOnly={false}
        value={summary}
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
              expertise,
              yearsOfExperience,
              hourlyRate,
              profileStatus,
              mentorId,
              summary: value,
              linkedInUrl,
              websiteUrl,
            };
            const result = onChange(modelFields);
            value = result?.summary ?? value;
          }
          if (errors.summary?.hasError) {
            runValidationTasks("summary", value);
          }
          setSummary(value);
        }}
        onBlur={() => runValidationTasks("summary", summary)}
        errorMessage={errors.summary?.errorMessage}
        hasError={errors.summary?.hasError}
        {...getOverrideProps(overrides, "summary")}
      ></TextField>
      <TextField
        label="Linked in url"
        isRequired={false}
        isReadOnly={false}
        value={linkedInUrl}
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
              expertise,
              yearsOfExperience,
              hourlyRate,
              profileStatus,
              mentorId,
              summary,
              linkedInUrl: value,
              websiteUrl,
            };
            const result = onChange(modelFields);
            value = result?.linkedInUrl ?? value;
          }
          if (errors.linkedInUrl?.hasError) {
            runValidationTasks("linkedInUrl", value);
          }
          setLinkedInUrl(value);
        }}
        onBlur={() => runValidationTasks("linkedInUrl", linkedInUrl)}
        errorMessage={errors.linkedInUrl?.errorMessage}
        hasError={errors.linkedInUrl?.hasError}
        {...getOverrideProps(overrides, "linkedInUrl")}
      ></TextField>
      <TextField
        label="Website url"
        isRequired={false}
        isReadOnly={false}
        value={websiteUrl}
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
              expertise,
              yearsOfExperience,
              hourlyRate,
              profileStatus,
              mentorId,
              summary,
              linkedInUrl,
              websiteUrl: value,
            };
            const result = onChange(modelFields);
            value = result?.websiteUrl ?? value;
          }
          if (errors.websiteUrl?.hasError) {
            runValidationTasks("websiteUrl", value);
          }
          setWebsiteUrl(value);
        }}
        onBlur={() => runValidationTasks("websiteUrl", websiteUrl)}
        errorMessage={errors.websiteUrl?.errorMessage}
        hasError={errors.websiteUrl?.hasError}
        {...getOverrideProps(overrides, "websiteUrl")}
      ></TextField>
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
