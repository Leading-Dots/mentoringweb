/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createMessages = /* GraphQL */ `mutation CreateMessages(
  $input: CreateMessagesInput!
  $condition: ModelMessagesConditionInput
) {
  createMessages(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMessagesMutationVariables,
  APITypes.CreateMessagesMutation
>;
export const updateMessages = /* GraphQL */ `mutation UpdateMessages(
  $input: UpdateMessagesInput!
  $condition: ModelMessagesConditionInput
) {
  updateMessages(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMessagesMutationVariables,
  APITypes.UpdateMessagesMutation
>;
export const deleteMessages = /* GraphQL */ `mutation DeleteMessages(
  $input: DeleteMessagesInput!
  $condition: ModelMessagesConditionInput
) {
  deleteMessages(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMessagesMutationVariables,
  APITypes.DeleteMessagesMutation
>;
export const createNotification = /* GraphQL */ `mutation CreateNotification(
  $input: CreateNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  createNotification(input: $input, condition: $condition) {
    id
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateNotificationMutationVariables,
  APITypes.CreateNotificationMutation
>;
export const updateNotification = /* GraphQL */ `mutation UpdateNotification(
  $input: UpdateNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  updateNotification(input: $input, condition: $condition) {
    id
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateNotificationMutationVariables,
  APITypes.UpdateNotificationMutation
>;
export const deleteNotification = /* GraphQL */ `mutation DeleteNotification(
  $input: DeleteNotificationInput!
  $condition: ModelNotificationConditionInput
) {
  deleteNotification(input: $input, condition: $condition) {
    id
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteNotificationMutationVariables,
  APITypes.DeleteNotificationMutation
>;
export const createSession = /* GraphQL */ `mutation CreateSession(
  $input: CreateSessionInput!
  $condition: ModelSessionConditionInput
) {
  createSession(input: $input, condition: $condition) {
    id
    duration
    status
    mentorId
    menteeId
    Users {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSessionMutationVariables,
  APITypes.CreateSessionMutation
>;
export const updateSession = /* GraphQL */ `mutation UpdateSession(
  $input: UpdateSessionInput!
  $condition: ModelSessionConditionInput
) {
  updateSession(input: $input, condition: $condition) {
    id
    duration
    status
    mentorId
    menteeId
    Users {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSessionMutationVariables,
  APITypes.UpdateSessionMutation
>;
export const deleteSession = /* GraphQL */ `mutation DeleteSession(
  $input: DeleteSessionInput!
  $condition: ModelSessionConditionInput
) {
  deleteSession(input: $input, condition: $condition) {
    id
    duration
    status
    mentorId
    menteeId
    Users {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSessionMutationVariables,
  APITypes.DeleteSessionMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    firstName
    lastName
    email
    passwordHash
    role
    bio
    profilePictureUrl
    firebaseToken
    mentorDetails
    menteeDetails
    Notifications {
      nextToken
      __typename
    }
    sessions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    firstName
    lastName
    email
    passwordHash
    role
    bio
    profilePictureUrl
    firebaseToken
    mentorDetails
    menteeDetails
    Notifications {
      nextToken
      __typename
    }
    sessions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    firstName
    lastName
    email
    passwordHash
    role
    bio
    profilePictureUrl
    firebaseToken
    mentorDetails
    menteeDetails
    Notifications {
      nextToken
      __typename
    }
    sessions {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createSessionUser = /* GraphQL */ `mutation CreateSessionUser(
  $input: CreateSessionUserInput!
  $condition: ModelSessionUserConditionInput
) {
  createSessionUser(input: $input, condition: $condition) {
    id
    sessionId
    userId
    session {
      id
      duration
      status
      mentorId
      menteeId
      createdAt
      updatedAt
      __typename
    }
    user {
      id
      firstName
      lastName
      email
      passwordHash
      role
      bio
      profilePictureUrl
      firebaseToken
      mentorDetails
      menteeDetails
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSessionUserMutationVariables,
  APITypes.CreateSessionUserMutation
>;
export const updateSessionUser = /* GraphQL */ `mutation UpdateSessionUser(
  $input: UpdateSessionUserInput!
  $condition: ModelSessionUserConditionInput
) {
  updateSessionUser(input: $input, condition: $condition) {
    id
    sessionId
    userId
    session {
      id
      duration
      status
      mentorId
      menteeId
      createdAt
      updatedAt
      __typename
    }
    user {
      id
      firstName
      lastName
      email
      passwordHash
      role
      bio
      profilePictureUrl
      firebaseToken
      mentorDetails
      menteeDetails
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSessionUserMutationVariables,
  APITypes.UpdateSessionUserMutation
>;
export const deleteSessionUser = /* GraphQL */ `mutation DeleteSessionUser(
  $input: DeleteSessionUserInput!
  $condition: ModelSessionUserConditionInput
) {
  deleteSessionUser(input: $input, condition: $condition) {
    id
    sessionId
    userId
    session {
      id
      duration
      status
      mentorId
      menteeId
      createdAt
      updatedAt
      __typename
    }
    user {
      id
      firstName
      lastName
      email
      passwordHash
      role
      bio
      profilePictureUrl
      firebaseToken
      mentorDetails
      menteeDetails
      createdAt
      updatedAt
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSessionUserMutationVariables,
  APITypes.DeleteSessionUserMutation
>;
