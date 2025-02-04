/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateMessages = /* GraphQL */ `subscription OnCreateMessages($filter: ModelSubscriptionMessagesFilterInput) {
  onCreateMessages(filter: $filter) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMessagesSubscriptionVariables,
  APITypes.OnCreateMessagesSubscription
>;
export const onUpdateMessages = /* GraphQL */ `subscription OnUpdateMessages($filter: ModelSubscriptionMessagesFilterInput) {
  onUpdateMessages(filter: $filter) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMessagesSubscriptionVariables,
  APITypes.OnUpdateMessagesSubscription
>;
export const onDeleteMessages = /* GraphQL */ `subscription OnDeleteMessages($filter: ModelSubscriptionMessagesFilterInput) {
  onDeleteMessages(filter: $filter) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMessagesSubscriptionVariables,
  APITypes.OnDeleteMessagesSubscription
>;
export const onCreateNotification = /* GraphQL */ `subscription OnCreateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onCreateNotification(filter: $filter) {
    id
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateNotificationSubscriptionVariables,
  APITypes.OnCreateNotificationSubscription
>;
export const onUpdateNotification = /* GraphQL */ `subscription OnUpdateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onUpdateNotification(filter: $filter) {
    id
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateNotificationSubscriptionVariables,
  APITypes.OnUpdateNotificationSubscription
>;
export const onDeleteNotification = /* GraphQL */ `subscription OnDeleteNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onDeleteNotification(filter: $filter) {
    id
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteNotificationSubscriptionVariables,
  APITypes.OnDeleteNotificationSubscription
>;
export const onCreateSession = /* GraphQL */ `subscription OnCreateSession($filter: ModelSubscriptionSessionFilterInput) {
  onCreateSession(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSessionSubscriptionVariables,
  APITypes.OnCreateSessionSubscription
>;
export const onUpdateSession = /* GraphQL */ `subscription OnUpdateSession($filter: ModelSubscriptionSessionFilterInput) {
  onUpdateSession(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSessionSubscriptionVariables,
  APITypes.OnUpdateSessionSubscription
>;
export const onDeleteSession = /* GraphQL */ `subscription OnDeleteSession($filter: ModelSubscriptionSessionFilterInput) {
  onDeleteSession(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSessionSubscriptionVariables,
  APITypes.OnDeleteSessionSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateSessionUser = /* GraphQL */ `subscription OnCreateSessionUser(
  $filter: ModelSubscriptionSessionUserFilterInput
) {
  onCreateSessionUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSessionUserSubscriptionVariables,
  APITypes.OnCreateSessionUserSubscription
>;
export const onUpdateSessionUser = /* GraphQL */ `subscription OnUpdateSessionUser(
  $filter: ModelSubscriptionSessionUserFilterInput
) {
  onUpdateSessionUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSessionUserSubscriptionVariables,
  APITypes.OnUpdateSessionUserSubscription
>;
export const onDeleteSessionUser = /* GraphQL */ `subscription OnDeleteSessionUser(
  $filter: ModelSubscriptionSessionUserFilterInput
) {
  onDeleteSessionUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSessionUserSubscriptionVariables,
  APITypes.OnDeleteSessionUserSubscription
>;
