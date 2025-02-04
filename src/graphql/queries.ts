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
    mentorID
    menteeID
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
      mentorID
      menteeID
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
export const notificationsByMentorID = /* GraphQL */ `query NotificationsByMentorID(
  $mentorID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  notificationsByMentorID(
    mentorID: $mentorID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      mentorID
      menteeID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.NotificationsByMentorIDQueryVariables,
  APITypes.NotificationsByMentorIDQuery
>;
export const notificationsByMenteeID = /* GraphQL */ `query NotificationsByMenteeID(
  $menteeID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelNotificationFilterInput
  $limit: Int
  $nextToken: String
) {
  notificationsByMenteeID(
    menteeID: $menteeID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      mentorID
      menteeID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.NotificationsByMenteeIDQueryVariables,
  APITypes.NotificationsByMenteeIDQuery
>;
export const getSession = /* GraphQL */ `query GetSession($id: ID!) {
  getSession(id: $id) {
    id
    duration
    status
    sessionDate
    menteeID
    mentorID
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
      sessionDate
      menteeID
      mentorID
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
export const sessionsByMenteeID = /* GraphQL */ `query SessionsByMenteeID(
  $menteeID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  sessionsByMenteeID(
    menteeID: $menteeID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      duration
      status
      sessionDate
      menteeID
      mentorID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SessionsByMenteeIDQueryVariables,
  APITypes.SessionsByMenteeIDQuery
>;
export const sessionsByMentorID = /* GraphQL */ `query SessionsByMentorID(
  $mentorID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSessionFilterInput
  $limit: Int
  $nextToken: String
) {
  sessionsByMentorID(
    mentorID: $mentorID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      duration
      status
      sessionDate
      menteeID
      mentorID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SessionsByMentorIDQueryVariables,
  APITypes.SessionsByMentorIDQuery
>;
export const getMentor = /* GraphQL */ `query GetMentor($id: ID!) {
  getMentor(id: $id) {
    id
    firstName
    lastName
    email
    bio
    profilePictureUrl
    firebaseToken
    expertise
    yearsOfExperience
    hourlyRate
    Sessions {
      nextToken
      __typename
    }
    Notifications {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetMentorQueryVariables, APITypes.GetMentorQuery>;
export const listMentors = /* GraphQL */ `query ListMentors(
  $filter: ModelMentorFilterInput
  $limit: Int
  $nextToken: String
) {
  listMentors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      email
      bio
      profilePictureUrl
      firebaseToken
      expertise
      yearsOfExperience
      hourlyRate
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMentorsQueryVariables,
  APITypes.ListMentorsQuery
>;
export const getMentee = /* GraphQL */ `query GetMentee($id: ID!) {
  getMentee(id: $id) {
    id
    firstName
    lastName
    email
    bio
    profilePictureUrl
    firebaseToken
    goals
    preferredMentorExperience
    Sessions {
      nextToken
      __typename
    }
    Notifications {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetMenteeQueryVariables, APITypes.GetMenteeQuery>;
export const listMentees = /* GraphQL */ `query ListMentees(
  $filter: ModelMenteeFilterInput
  $limit: Int
  $nextToken: String
) {
  listMentees(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      email
      bio
      profilePictureUrl
      firebaseToken
      goals
      preferredMentorExperience
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMenteesQueryVariables,
  APITypes.ListMenteesQuery
>;
