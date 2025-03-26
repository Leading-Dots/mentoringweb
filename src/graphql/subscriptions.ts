/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateMentorServices = /* GraphQL */ `subscription OnCreateMentorServices(
  $filter: ModelSubscriptionMentorServicesFilterInput
) {
  onCreateMentorServices(filter: $filter) {
    id
    title
    description
    cost
    isPaid
    mentorID
    duration
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMentorServicesSubscriptionVariables,
  APITypes.OnCreateMentorServicesSubscription
>;
export const onUpdateMentorServices = /* GraphQL */ `subscription OnUpdateMentorServices(
  $filter: ModelSubscriptionMentorServicesFilterInput
) {
  onUpdateMentorServices(filter: $filter) {
    id
    title
    description
    cost
    isPaid
    mentorID
    duration
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMentorServicesSubscriptionVariables,
  APITypes.OnUpdateMentorServicesSubscription
>;
export const onDeleteMentorServices = /* GraphQL */ `subscription OnDeleteMentorServices(
  $filter: ModelSubscriptionMentorServicesFilterInput
) {
  onDeleteMentorServices(filter: $filter) {
    id
    title
    description
    cost
    isPaid
    mentorID
    duration
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMentorServicesSubscriptionVariables,
  APITypes.OnDeleteMentorServicesSubscription
>;
export const onCreateIntroductionSession = /* GraphQL */ `subscription OnCreateIntroductionSession(
  $filter: ModelSubscriptionIntroductionSessionFilterInput
) {
  onCreateIntroductionSession(filter: $filter) {
    id
    duration
    sessionDate
    meetingLink
    mentorshipID
    sessionStatus
    menteeID
    mentorID
    mentorName
    MenteeName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateIntroductionSessionSubscriptionVariables,
  APITypes.OnCreateIntroductionSessionSubscription
>;
export const onUpdateIntroductionSession = /* GraphQL */ `subscription OnUpdateIntroductionSession(
  $filter: ModelSubscriptionIntroductionSessionFilterInput
) {
  onUpdateIntroductionSession(filter: $filter) {
    id
    duration
    sessionDate
    meetingLink
    mentorshipID
    sessionStatus
    menteeID
    mentorID
    mentorName
    MenteeName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateIntroductionSessionSubscriptionVariables,
  APITypes.OnUpdateIntroductionSessionSubscription
>;
export const onDeleteIntroductionSession = /* GraphQL */ `subscription OnDeleteIntroductionSession(
  $filter: ModelSubscriptionIntroductionSessionFilterInput
) {
  onDeleteIntroductionSession(filter: $filter) {
    id
    duration
    sessionDate
    meetingLink
    mentorshipID
    sessionStatus
    menteeID
    mentorID
    mentorName
    MenteeName
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteIntroductionSessionSubscriptionVariables,
  APITypes.OnDeleteIntroductionSessionSubscription
>;
export const onCreateIntroductionRequest = /* GraphQL */ `subscription OnCreateIntroductionRequest(
  $filter: ModelSubscriptionIntroductionRequestFilterInput
) {
  onCreateIntroductionRequest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateIntroductionRequestSubscriptionVariables,
  APITypes.OnCreateIntroductionRequestSubscription
>;
export const onUpdateIntroductionRequest = /* GraphQL */ `subscription OnUpdateIntroductionRequest(
  $filter: ModelSubscriptionIntroductionRequestFilterInput
) {
  onUpdateIntroductionRequest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateIntroductionRequestSubscriptionVariables,
  APITypes.OnUpdateIntroductionRequestSubscription
>;
export const onDeleteIntroductionRequest = /* GraphQL */ `subscription OnDeleteIntroductionRequest(
  $filter: ModelSubscriptionIntroductionRequestFilterInput
) {
  onDeleteIntroductionRequest(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteIntroductionRequestSubscriptionVariables,
  APITypes.OnDeleteIntroductionRequestSubscription
>;
export const onCreateMentorship = /* GraphQL */ `subscription OnCreateMentorship(
  $filter: ModelSubscriptionMentorshipFilterInput
) {
  onCreateMentorship(filter: $filter) {
    id
    mentorID
    menteeID
    mentorshipStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMentorshipSubscriptionVariables,
  APITypes.OnCreateMentorshipSubscription
>;
export const onUpdateMentorship = /* GraphQL */ `subscription OnUpdateMentorship(
  $filter: ModelSubscriptionMentorshipFilterInput
) {
  onUpdateMentorship(filter: $filter) {
    id
    mentorID
    menteeID
    mentorshipStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMentorshipSubscriptionVariables,
  APITypes.OnUpdateMentorshipSubscription
>;
export const onDeleteMentorship = /* GraphQL */ `subscription OnDeleteMentorship(
  $filter: ModelSubscriptionMentorshipFilterInput
) {
  onDeleteMentorship(filter: $filter) {
    id
    mentorID
    menteeID
    mentorshipStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMentorshipSubscriptionVariables,
  APITypes.OnDeleteMentorshipSubscription
>;
export const onCreateCategory = /* GraphQL */ `subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onCreateCategory(filter: $filter) {
    id
    value
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCategorySubscriptionVariables,
  APITypes.OnCreateCategorySubscription
>;
export const onUpdateCategory = /* GraphQL */ `subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onUpdateCategory(filter: $filter) {
    id
    value
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCategorySubscriptionVariables,
  APITypes.OnUpdateCategorySubscription
>;
export const onDeleteCategory = /* GraphQL */ `subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onDeleteCategory(filter: $filter) {
    id
    value
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCategorySubscriptionVariables,
  APITypes.OnDeleteCategorySubscription
>;
export const onCreateReview = /* GraphQL */ `subscription OnCreateReview($filter: ModelSubscriptionReviewFilterInput) {
  onCreateReview(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateReviewSubscriptionVariables,
  APITypes.OnCreateReviewSubscription
>;
export const onUpdateReview = /* GraphQL */ `subscription OnUpdateReview($filter: ModelSubscriptionReviewFilterInput) {
  onUpdateReview(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateReviewSubscriptionVariables,
  APITypes.OnUpdateReviewSubscription
>;
export const onDeleteReview = /* GraphQL */ `subscription OnDeleteReview($filter: ModelSubscriptionReviewFilterInput) {
  onDeleteReview(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteReviewSubscriptionVariables,
  APITypes.OnDeleteReviewSubscription
>;
export const onCreateChatRoom = /* GraphQL */ `subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
  onCreateChatRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChatRoomSubscriptionVariables,
  APITypes.OnCreateChatRoomSubscription
>;
export const onUpdateChatRoom = /* GraphQL */ `subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
  onUpdateChatRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChatRoomSubscriptionVariables,
  APITypes.OnUpdateChatRoomSubscription
>;
export const onDeleteChatRoom = /* GraphQL */ `subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
  onDeleteChatRoom(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChatRoomSubscriptionVariables,
  APITypes.OnDeleteChatRoomSubscription
>;
export const onCreateSessionRequest = /* GraphQL */ `subscription OnCreateSessionRequest(
  $filter: ModelSubscriptionSessionRequestFilterInput
) {
  onCreateSessionRequest(filter: $filter) {
    id
    proposedCost
    note
    duration
    proposedSessionTime
    menteeID
    status
    initiatedBy
    sessionID
    sessionTitle
    mentorshipID
    mentorID
    sessionDescription
    mentorServicesID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSessionRequestSubscriptionVariables,
  APITypes.OnCreateSessionRequestSubscription
>;
export const onUpdateSessionRequest = /* GraphQL */ `subscription OnUpdateSessionRequest(
  $filter: ModelSubscriptionSessionRequestFilterInput
) {
  onUpdateSessionRequest(filter: $filter) {
    id
    proposedCost
    note
    duration
    proposedSessionTime
    menteeID
    status
    initiatedBy
    sessionID
    sessionTitle
    mentorshipID
    mentorID
    sessionDescription
    mentorServicesID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSessionRequestSubscriptionVariables,
  APITypes.OnUpdateSessionRequestSubscription
>;
export const onDeleteSessionRequest = /* GraphQL */ `subscription OnDeleteSessionRequest(
  $filter: ModelSubscriptionSessionRequestFilterInput
) {
  onDeleteSessionRequest(filter: $filter) {
    id
    proposedCost
    note
    duration
    proposedSessionTime
    menteeID
    status
    initiatedBy
    sessionID
    sessionTitle
    mentorshipID
    mentorID
    sessionDescription
    mentorServicesID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSessionRequestSubscriptionVariables,
  APITypes.OnDeleteSessionRequestSubscription
>;
export const onCreateMessages = /* GraphQL */ `subscription OnCreateMessages($filter: ModelSubscriptionMessagesFilterInput) {
  onCreateMessages(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMessagesSubscriptionVariables,
  APITypes.OnCreateMessagesSubscription
>;
export const onUpdateMessages = /* GraphQL */ `subscription OnUpdateMessages($filter: ModelSubscriptionMessagesFilterInput) {
  onUpdateMessages(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMessagesSubscriptionVariables,
  APITypes.OnUpdateMessagesSubscription
>;
export const onDeleteMessages = /* GraphQL */ `subscription OnDeleteMessages($filter: ModelSubscriptionMessagesFilterInput) {
  onDeleteMessages(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMessagesSubscriptionVariables,
  APITypes.OnDeleteMessagesSubscription
>;
export const onCreateNotification = /* GraphQL */ `subscription OnCreateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onCreateNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateNotificationSubscriptionVariables,
  APITypes.OnCreateNotificationSubscription
>;
export const onUpdateNotification = /* GraphQL */ `subscription OnUpdateNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onUpdateNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateNotificationSubscriptionVariables,
  APITypes.OnUpdateNotificationSubscription
>;
export const onDeleteNotification = /* GraphQL */ `subscription OnDeleteNotification(
  $filter: ModelSubscriptionNotificationFilterInput
) {
  onDeleteNotification(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteNotificationSubscriptionVariables,
  APITypes.OnDeleteNotificationSubscription
>;
export const onCreateSession = /* GraphQL */ `subscription OnCreateSession($filter: ModelSubscriptionSessionFilterInput) {
  onCreateSession(filter: $filter) {
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
    mentorshipID
    sessionDescription
    mentorServicesID
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
    mentorshipID
    sessionDescription
    mentorServicesID
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
    mentorshipID
    sessionDescription
    mentorServicesID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSessionSubscriptionVariables,
  APITypes.OnDeleteSessionSubscription
>;
export const onCreateMentor = /* GraphQL */ `subscription OnCreateMentor($filter: ModelSubscriptionMentorFilterInput) {
  onCreateMentor(filter: $filter) {
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
    IntroductionSessions {
      nextToken
      __typename
    }
    availability
    MentorServices {
      nextToken
      __typename
    }
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMentorSubscriptionVariables,
  APITypes.OnCreateMentorSubscription
>;
export const onUpdateMentor = /* GraphQL */ `subscription OnUpdateMentor($filter: ModelSubscriptionMentorFilterInput) {
  onUpdateMentor(filter: $filter) {
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
    IntroductionSessions {
      nextToken
      __typename
    }
    availability
    MentorServices {
      nextToken
      __typename
    }
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMentorSubscriptionVariables,
  APITypes.OnUpdateMentorSubscription
>;
export const onDeleteMentor = /* GraphQL */ `subscription OnDeleteMentor($filter: ModelSubscriptionMentorFilterInput) {
  onDeleteMentor(filter: $filter) {
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
    IntroductionSessions {
      nextToken
      __typename
    }
    availability
    MentorServices {
      nextToken
      __typename
    }
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMentorSubscriptionVariables,
  APITypes.OnDeleteMentorSubscription
>;
export const onCreateMentee = /* GraphQL */ `subscription OnCreateMentee($filter: ModelSubscriptionMenteeFilterInput) {
  onCreateMentee(filter: $filter) {
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
    IntroductionSessions {
      nextToken
      __typename
    }
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMenteeSubscriptionVariables,
  APITypes.OnCreateMenteeSubscription
>;
export const onUpdateMentee = /* GraphQL */ `subscription OnUpdateMentee($filter: ModelSubscriptionMenteeFilterInput) {
  onUpdateMentee(filter: $filter) {
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
    IntroductionSessions {
      nextToken
      __typename
    }
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMenteeSubscriptionVariables,
  APITypes.OnUpdateMenteeSubscription
>;
export const onDeleteMentee = /* GraphQL */ `subscription OnDeleteMentee($filter: ModelSubscriptionMenteeFilterInput) {
  onDeleteMentee(filter: $filter) {
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
    IntroductionSessions {
      nextToken
      __typename
    }
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMenteeSubscriptionVariables,
  APITypes.OnDeleteMenteeSubscription
>;
