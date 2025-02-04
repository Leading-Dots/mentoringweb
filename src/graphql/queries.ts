/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getMessages = /* GraphQL */ `query GetMessages($id: ID!) {
  getMessages(id: $id) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMessagesQueryVariables,
  APITypes.GetMessagesQuery
>;
export const listMessages = /* GraphQL */ `query ListMessages(
  $filter: ModelMessagesFilterInput
  $limit: Int
  $nextToken: String
) {
  listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMessagesQueryVariables,
  APITypes.ListMessagesQuery
>;
export const getNotification = /* GraphQL */ `query GetNotification($id: ID!) {
  getNotification(id: $id) {
    id
    userID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetNotificationQueryVariables,
  APITypes.GetNotificationQuery
>;
export const listNotifications = /* GraphQL */ `query ListNotifications(
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNotificationsQueryVariables,
  APITypes.ListNotificationsQuery
>;
export const notificationsByUserID = /* GraphQL */ `query NotificationsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  notificationsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.NotificationsByUserIDQueryVariables,
  APITypes.NotificationsByUserIDQuery
>;
export const getSession = /* GraphQL */ `query GetSession($id: ID!) {
  getSession(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSessionQueryVariables,
  APITypes.GetSessionQuery
>;
export const listSessions = /* GraphQL */ `query ListSessions(
  $filter: ModelSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      duration
      status
      mentorId
      menteeId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSessionsQueryVariables,
  APITypes.ListSessionsQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
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
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getSessionUser = /* GraphQL */ `query GetSessionUser($id: ID!) {
  getSessionUser(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSessionUserQueryVariables,
  APITypes.GetSessionUserQuery
>;
export const listSessionUsers = /* GraphQL */ `query ListSessionUsers(
  $filter: ModelSessionUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listSessionUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      sessionId
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSessionUsersQueryVariables,
  APITypes.ListSessionUsersQuery
>;
export const sessionUsersBySessionId = /* GraphQL */ `query SessionUsersBySessionId(
  $sessionId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSessionUserFilterInput
  $limit: Int
  $nextToken: String
) {
  sessionUsersBySessionId(
    sessionId: $sessionId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      sessionId
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SessionUsersBySessionIdQueryVariables,
  APITypes.SessionUsersBySessionIdQuery
>;
export const sessionUsersByUserId = /* GraphQL */ `query SessionUsersByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSessionUserFilterInput
  $limit: Int
  $nextToken: String
) {
  sessionUsersByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      sessionId
      userId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SessionUsersByUserIdQueryVariables,
  APITypes.SessionUsersByUserIdQuery
>;
