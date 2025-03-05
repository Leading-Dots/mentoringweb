/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createReview = /* GraphQL */ `mutation CreateReview(
  $input: CreateReviewInput!
  $condition: ModelReviewConditionInput
) {
  createReview(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateReviewMutationVariables,
  APITypes.CreateReviewMutation
>;
export const updateReview = /* GraphQL */ `mutation UpdateReview(
  $input: UpdateReviewInput!
  $condition: ModelReviewConditionInput
) {
  updateReview(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateReviewMutationVariables,
  APITypes.UpdateReviewMutation
>;
export const deleteReview = /* GraphQL */ `mutation DeleteReview(
  $input: DeleteReviewInput!
  $condition: ModelReviewConditionInput
) {
  deleteReview(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteReviewMutationVariables,
  APITypes.DeleteReviewMutation
>;
export const createChatRoom = /* GraphQL */ `mutation CreateChatRoom(
  $input: CreateChatRoomInput!
  $condition: ModelChatRoomConditionInput
) {
  createChatRoom(input: $input, condition: $condition) {
    id
    mentorID
    menteeID
    Messages {
      nextToken
      __typename
    }
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateChatRoomMutationVariables,
  APITypes.CreateChatRoomMutation
>;
export const updateChatRoom = /* GraphQL */ `mutation UpdateChatRoom(
  $input: UpdateChatRoomInput!
  $condition: ModelChatRoomConditionInput
) {
  updateChatRoom(input: $input, condition: $condition) {
    id
    mentorID
    menteeID
    Messages {
      nextToken
      __typename
    }
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateChatRoomMutationVariables,
  APITypes.UpdateChatRoomMutation
>;
export const deleteChatRoom = /* GraphQL */ `mutation DeleteChatRoom(
  $input: DeleteChatRoomInput!
  $condition: ModelChatRoomConditionInput
) {
  deleteChatRoom(input: $input, condition: $condition) {
    id
    mentorID
    menteeID
    Messages {
      nextToken
      __typename
    }
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteChatRoomMutationVariables,
  APITypes.DeleteChatRoomMutation
>;
export const createSessionRequest = /* GraphQL */ `mutation CreateSessionRequest(
  $input: CreateSessionRequestInput!
  $condition: ModelSessionRequestConditionInput
) {
  createSessionRequest(input: $input, condition: $condition) {
    id
    proposedCost
    mentorNote
    menteeNote
    duration
    proposedSessionTime
    mentorID
    menteeID
    status
    initiatedBy
    sessionID
    sessionTitle
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSessionRequestMutationVariables,
  APITypes.CreateSessionRequestMutation
>;
export const updateSessionRequest = /* GraphQL */ `mutation UpdateSessionRequest(
  $input: UpdateSessionRequestInput!
  $condition: ModelSessionRequestConditionInput
) {
  updateSessionRequest(input: $input, condition: $condition) {
    id
    proposedCost
    mentorNote
    menteeNote
    duration
    proposedSessionTime
    mentorID
    menteeID
    status
    initiatedBy
    sessionID
    sessionTitle
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSessionRequestMutationVariables,
  APITypes.UpdateSessionRequestMutation
>;
export const deleteSessionRequest = /* GraphQL */ `mutation DeleteSessionRequest(
  $input: DeleteSessionRequestInput!
  $condition: ModelSessionRequestConditionInput
) {
  deleteSessionRequest(input: $input, condition: $condition) {
    id
    proposedCost
    mentorNote
    menteeNote
    duration
    proposedSessionTime
    mentorID
    menteeID
    status
    initiatedBy
    sessionID
    sessionTitle
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSessionRequestMutationVariables,
  APITypes.DeleteSessionRequestMutation
>;
export const createMessages = /* GraphQL */ `mutation CreateMessages(
  $input: CreateMessagesInput!
  $condition: ModelMessagesConditionInput
) {
  createMessages(input: $input, condition: $condition) {
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
    mentorID
    menteeID
    title
    body
    type
    fcmToken
    isSent
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
    mentorID
    menteeID
    title
    body
    type
    fcmToken
    isSent
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
    mentorID
    menteeID
    title
    body
    type
    fcmToken
    isSent
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSessionMutationVariables,
  APITypes.DeleteSessionMutation
>;
export const createMentor = /* GraphQL */ `mutation CreateMentor(
  $input: CreateMentorInput!
  $condition: ModelMentorConditionInput
) {
  createMentor(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMentorMutationVariables,
  APITypes.CreateMentorMutation
>;
export const updateMentor = /* GraphQL */ `mutation UpdateMentor(
  $input: UpdateMentorInput!
  $condition: ModelMentorConditionInput
) {
  updateMentor(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMentorMutationVariables,
  APITypes.UpdateMentorMutation
>;
export const deleteMentor = /* GraphQL */ `mutation DeleteMentor(
  $input: DeleteMentorInput!
  $condition: ModelMentorConditionInput
) {
  deleteMentor(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMentorMutationVariables,
  APITypes.DeleteMentorMutation
>;
export const createMentee = /* GraphQL */ `mutation CreateMentee(
  $input: CreateMenteeInput!
  $condition: ModelMenteeConditionInput
) {
  createMentee(input: $input, condition: $condition) {
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
    topics
    linkedInUrl
    websiteUrl
    resumeUrl
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMenteeMutationVariables,
  APITypes.CreateMenteeMutation
>;
export const updateMentee = /* GraphQL */ `mutation UpdateMentee(
  $input: UpdateMenteeInput!
  $condition: ModelMenteeConditionInput
) {
  updateMentee(input: $input, condition: $condition) {
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
    topics
    linkedInUrl
    websiteUrl
    resumeUrl
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMenteeMutationVariables,
  APITypes.UpdateMenteeMutation
>;
export const deleteMentee = /* GraphQL */ `mutation DeleteMentee(
  $input: DeleteMenteeInput!
  $condition: ModelMenteeConditionInput
) {
  deleteMentee(input: $input, condition: $condition) {
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
    topics
    linkedInUrl
    websiteUrl
    resumeUrl
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMenteeMutationVariables,
  APITypes.DeleteMenteeMutation
>;
