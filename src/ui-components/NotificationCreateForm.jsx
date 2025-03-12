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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createNotification } from "../graphql/mutations";
const client = generateClient();
export default function NotificationCreateForm(props) {
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
    title: "",
    body: "",
    type: "",
    fcmToken: "",
    isSent: false,
    isRead: false,
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [body, setBody] = React.useState(initialValues.body);
  const [type, setType] = React.useState(initialValues.type);
  const [fcmToken, setFcmToken] = React.useState(initialValues.fcmToken);
  const [isSent, setIsSent] = React.useState(initialValues.isSent);
  const [isRead, setIsRead] = React.useState(initialValues.isRead);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setBody(initialValues.body);
    setType(initialValues.type);
    setFcmToken(initialValues.fcmToken);
    setIsSent(initialValues.isSent);
    setIsRead(initialValues.isRead);
    setErrors({});
  };
  const validations = {
    title: [],
    body: [],
    type: [],
    fcmToken: [],
    isSent: [],
    isRead: [],
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
          title,
          body,
          type,
          fcmToken,
          isSent,
          isRead,
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
            query: createNotification.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "NotificationCreateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={false}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              body,
              type,
              fcmToken,
              isSent,
              isRead,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Body"
        isRequired={false}
        isReadOnly={false}
        value={body}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              body: value,
              type,
              fcmToken,
              isSent,
              isRead,
            };
            const result = onChange(modelFields);
            value = result?.body ?? value;
          }
          if (errors.body?.hasError) {
            runValidationTasks("body", value);
          }
          setBody(value);
        }}
        onBlur={() => runValidationTasks("body", body)}
        errorMessage={errors.body?.errorMessage}
        hasError={errors.body?.hasError}
        {...getOverrideProps(overrides, "body")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              body,
              type: value,
              fcmToken,
              isSent,
              isRead,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Fcm token"
        isRequired={false}
        isReadOnly={false}
        value={fcmToken}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              body,
              type,
              fcmToken: value,
              isSent,
              isRead,
            };
            const result = onChange(modelFields);
            value = result?.fcmToken ?? value;
          }
          if (errors.fcmToken?.hasError) {
            runValidationTasks("fcmToken", value);
          }
          setFcmToken(value);
        }}
        onBlur={() => runValidationTasks("fcmToken", fcmToken)}
        errorMessage={errors.fcmToken?.errorMessage}
        hasError={errors.fcmToken?.hasError}
        {...getOverrideProps(overrides, "fcmToken")}
      ></TextField>
      <SwitchField
        label="Is sent"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isSent}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              body,
              type,
              fcmToken,
              isSent: value,
              isRead,
            };
            const result = onChange(modelFields);
            value = result?.isSent ?? value;
          }
          if (errors.isSent?.hasError) {
            runValidationTasks("isSent", value);
          }
          setIsSent(value);
        }}
        onBlur={() => runValidationTasks("isSent", isSent)}
        errorMessage={errors.isSent?.errorMessage}
        hasError={errors.isSent?.hasError}
        {...getOverrideProps(overrides, "isSent")}
      ></SwitchField>
      <SwitchField
        label="Is read"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isRead}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              title,
              body,
              type,
              fcmToken,
              isSent,
              isRead: value,
            };
            const result = onChange(modelFields);
            value = result?.isRead ?? value;
          }
          if (errors.isRead?.hasError) {
            runValidationTasks("isRead", value);
          }
          setIsRead(value);
        }}
        onBlur={() => runValidationTasks("isRead", isRead)}
        errorMessage={errors.isRead?.errorMessage}
        hasError={errors.isRead?.hasError}
        {...getOverrideProps(overrides, "isRead")}
      ></SwitchField>
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
