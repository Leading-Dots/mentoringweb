/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getIntroductionRequest = /* GraphQL */ `query GetIntroductionRequest($id: ID!) {
  getIntroductionRequest(id: $id) {
    id
    mentorID
    menteeID
    note
    title
    status
    initiatedBy
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetIntroductionRequestQueryVariables,
  APITypes.GetIntroductionRequestQuery
>;
export const listIntroductionRequests = /* GraphQL */ `query ListIntroductionRequests(
  $filter: ModelIntroductionRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  listIntroductionRequests(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      mentorID
      menteeID
      note
      title
      status
      initiatedBy
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListIntroductionRequestsQueryVariables,
  APITypes.ListIntroductionRequestsQuery
>;
export const introductionRequestsByMentorID = /* GraphQL */ `query IntroductionRequestsByMentorID(
  $mentorID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelIntroductionRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  introductionRequestsByMentorID(
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
      note
      title
      status
      initiatedBy
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.IntroductionRequestsByMentorIDQueryVariables,
  APITypes.IntroductionRequestsByMentorIDQuery
>;
export const introductionRequestsByMenteeID = /* GraphQL */ `query IntroductionRequestsByMenteeID(
  $menteeID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelIntroductionRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  introductionRequestsByMenteeID(
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
      note
      title
      status
      initiatedBy
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.IntroductionRequestsByMenteeIDQueryVariables,
  APITypes.IntroductionRequestsByMenteeIDQuery
>;
export const getMentorship = /* GraphQL */ `query GetMentorship($id: ID!) {
  getMentorship(id: $id) {
    id
    mentorID
    menteeID
    mentorshipStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMentorshipQueryVariables,
  APITypes.GetMentorshipQuery
>;
export const listMentorships = /* GraphQL */ `query ListMentorships(
  $filter: ModelMentorshipFilterInput
  $limit: Int
  $nextToken: String
) {
  listMentorships(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      mentorID
      menteeID
      mentorshipStatus
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMentorshipsQueryVariables,
  APITypes.ListMentorshipsQuery
>;
export const mentorshipsByMentorID = /* GraphQL */ `query MentorshipsByMentorID(
  $mentorID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMentorshipFilterInput
  $limit: Int
  $nextToken: String
) {
  mentorshipsByMentorID(
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
      mentorshipStatus
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MentorshipsByMentorIDQueryVariables,
  APITypes.MentorshipsByMentorIDQuery
>;
export const mentorshipsByMenteeID = /* GraphQL */ `query MentorshipsByMenteeID(
  $menteeID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMentorshipFilterInput
  $limit: Int
  $nextToken: String
) {
  mentorshipsByMenteeID(
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
      mentorshipStatus
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MentorshipsByMenteeIDQueryVariables,
  APITypes.MentorshipsByMenteeIDQuery
>;
export const getCategory = /* GraphQL */ `query GetCategory($id: ID!) {
  getCategory(id: $id) {
    id
    value
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategoryQueryVariables,
  APITypes.GetCategoryQuery
>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      value
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const getReview = /* GraphQL */ `query GetReview($id: ID!) {
  getReview(id: $id) {
    id
    rating
    comment
    reviewerRole
    reviewerID
    reviewedID
    sessionID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetReviewQueryVariables, APITypes.GetReviewQuery>;
export const listReviews = /* GraphQL */ `query ListReviews(
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      rating
      comment
      reviewerRole
      reviewerID
      reviewedID
      sessionID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReviewsQueryVariables,
  APITypes.ListReviewsQuery
>;
export const reviewsBySessionID = /* GraphQL */ `query ReviewsBySessionID(
  $sessionID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  reviewsBySessionID(
    sessionID: $sessionID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      rating
      comment
      reviewerRole
      reviewerID
      reviewedID
      sessionID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ReviewsBySessionIDQueryVariables,
  APITypes.ReviewsBySessionIDQuery
>;
export const getChatRoom = /* GraphQL */ `query GetChatRoom($id: ID!) {
  getChatRoom(id: $id) {
    id
    mentorID
    menteeID
    Messages {
      nextToken
      __typename
    }
    name
    mentorshipID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetChatRoomQueryVariables,
  APITypes.GetChatRoomQuery
>;
export const listChatRooms = /* GraphQL */ `query ListChatRooms(
  $filter: ModelChatRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      mentorID
      menteeID
      name
      mentorshipID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChatRoomsQueryVariables,
  APITypes.ListChatRoomsQuery
>;
export const chatRoomsByMentorID = /* GraphQL */ `query ChatRoomsByMentorID(
  $mentorID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelChatRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  chatRoomsByMentorID(
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
      name
      mentorshipID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ChatRoomsByMentorIDQueryVariables,
  APITypes.ChatRoomsByMentorIDQuery
>;
export const chatRoomsByMenteeID = /* GraphQL */ `query ChatRoomsByMenteeID(
  $menteeID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelChatRoomFilterInput
  $limit: Int
  $nextToken: String
) {
  chatRoomsByMenteeID(
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
      name
      mentorshipID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ChatRoomsByMenteeIDQueryVariables,
  APITypes.ChatRoomsByMenteeIDQuery
>;
export const getSessionRequest = /* GraphQL */ `query GetSessionRequest($id: ID!) {
  getSessionRequest(id: $id) {
    id
    proposedCost
    mentorNote
    menteeNote
    duration
    proposedSessionTime
    menteeID
    status
    initiatedBy
    sessionID
    sessionTitle
    mentorshipID
    mentorID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSessionRequestQueryVariables,
  APITypes.GetSessionRequestQuery
>;
export const listSessionRequests = /* GraphQL */ `query ListSessionRequests(
  $filter: ModelSessionRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  listSessionRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      proposedCost
      mentorNote
      menteeNote
      duration
      proposedSessionTime
      menteeID
      status
      initiatedBy
      sessionID
      sessionTitle
      mentorshipID
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
  APITypes.ListSessionRequestsQueryVariables,
  APITypes.ListSessionRequestsQuery
>;
export const sessionRequestsByMenteeID = /* GraphQL */ `query SessionRequestsByMenteeID(
  $menteeID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSessionRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  sessionRequestsByMenteeID(
    menteeID: $menteeID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      proposedCost
      mentorNote
      menteeNote
      duration
      proposedSessionTime
      menteeID
      status
      initiatedBy
      sessionID
      sessionTitle
      mentorshipID
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
  APITypes.SessionRequestsByMenteeIDQueryVariables,
  APITypes.SessionRequestsByMenteeIDQuery
>;
export const sessionRequestsByMentorID = /* GraphQL */ `query SessionRequestsByMentorID(
  $mentorID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelSessionRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  sessionRequestsByMentorID(
    mentorID: $mentorID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      proposedCost
      mentorNote
      menteeNote
      duration
      proposedSessionTime
      menteeID
      status
      initiatedBy
      sessionID
      sessionTitle
      mentorshipID
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
  APITypes.SessionRequestsByMentorIDQueryVariables,
  APITypes.SessionRequestsByMentorIDQuery
>;
export const getMessages = /* GraphQL */ `query GetMessages($id: ID!) {
  getMessages(id: $id) {
    id
    content
    username
    userRole
    chatroomID
    senderId
    timestamp
    imageUrl
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
      content
      username
      userRole
      chatroomID
      senderId
      timestamp
      imageUrl
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
export const messagesByChatroomID = /* GraphQL */ `query MessagesByChatroomID(
  $chatroomID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelMessagesFilterInput
  $limit: Int
  $nextToken: String
) {
  messagesByChatroomID(
    chatroomID: $chatroomID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      username
      userRole
      chatroomID
      senderId
      timestamp
      imageUrl
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MessagesByChatroomIDQueryVariables,
  APITypes.MessagesByChatroomIDQuery
>;
export const getNotification = /* GraphQL */ `query GetNotification($id: ID!) {
  getNotification(id: $id) {
    id
    mentorID
    menteeID
    title
    body
    type
    fcmToken
    isSent
    isRead
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
      title
      body
      type
      fcmToken
      isSent
      isRead
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
      title
      body
      type
      fcmToken
      isSent
      isRead
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
      title
      body
      type
      fcmToken
      isSent
      isRead
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
    cost
    meetingLink
    sessionRequestID
    sessionTitle
    objectives
    Reviews {
      nextToken
      __typename
    }
    untitledfield
    mentorshipID
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
      cost
      meetingLink
      sessionRequestID
      sessionTitle
      objectives
      untitledfield
      mentorshipID
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
      cost
      meetingLink
      sessionRequestID
      sessionTitle
      objectives
      untitledfield
      mentorshipID
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
      cost
      meetingLink
      sessionRequestID
      sessionTitle
      objectives
      untitledfield
      mentorshipID
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
    profileStatus
    mentorId
    ChatRooms {
      nextToken
      __typename
    }
    summary
    linkedInUrl
    websiteUrl
    Mentorships {
      nextToken
      __typename
    }
    SessionRequests {
      nextToken
      __typename
    }
    IntroductionRequests {
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
      profileStatus
      mentorId
      summary
      linkedInUrl
      websiteUrl
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
    profileStatus
    menteeId
    SessionRequests {
      nextToken
      __typename
    }
    ChatRooms {
      nextToken
      __typename
    }
    summary
    linkedInUrl
    websiteUrl
    resumeUrl
    topics
    Mentorships {
      nextToken
      __typename
    }
    IntroductionRequests {
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
      profileStatus
      menteeId
      summary
      linkedInUrl
      websiteUrl
      resumeUrl
      topics
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
