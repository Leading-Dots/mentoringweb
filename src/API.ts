/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMentorServicesInput = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  cost?: string | null,
  isPaid?: boolean | null,
  mentorID: string,
  duration?: string | null,
};

export type ModelMentorServicesConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  cost?: ModelStringInput | null,
  isPaid?: ModelBooleanInput | null,
  mentorID?: ModelIDInput | null,
  duration?: ModelStringInput | null,
  and?: Array< ModelMentorServicesConditionInput | null > | null,
  or?: Array< ModelMentorServicesConditionInput | null > | null,
  not?: ModelMentorServicesConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type MentorServices = {
  __typename: "MentorServices",
  id: string,
  title?: string | null,
  description?: string | null,
  cost?: string | null,
  isPaid?: boolean | null,
  mentorID: string,
  duration?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMentorServicesInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  cost?: string | null,
  isPaid?: boolean | null,
  mentorID?: string | null,
  duration?: string | null,
};

export type DeleteMentorServicesInput = {
  id: string,
};

export type CreateIntroductionSessionInput = {
  id?: string | null,
  duration?: string | null,
  sessionDate?: string | null,
  meetingLink?: string | null,
  mentorshipID?: string | null,
  sessionStatus?: MentorshipStatus | null,
  menteeID: string,
  mentorID: string,
  mentorName?: string | null,
  MenteeName?: string | null,
};

export enum MentorshipStatus {
  INTRODUCTION = "INTRODUCTION",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  PENDING = "PENDING",
}


export type ModelIntroductionSessionConditionInput = {
  duration?: ModelStringInput | null,
  sessionDate?: ModelStringInput | null,
  meetingLink?: ModelStringInput | null,
  mentorshipID?: ModelStringInput | null,
  sessionStatus?: ModelMentorshipStatusInput | null,
  menteeID?: ModelIDInput | null,
  mentorID?: ModelIDInput | null,
  mentorName?: ModelStringInput | null,
  MenteeName?: ModelStringInput | null,
  and?: Array< ModelIntroductionSessionConditionInput | null > | null,
  or?: Array< ModelIntroductionSessionConditionInput | null > | null,
  not?: ModelIntroductionSessionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelMentorshipStatusInput = {
  eq?: MentorshipStatus | null,
  ne?: MentorshipStatus | null,
};

export type IntroductionSession = {
  __typename: "IntroductionSession",
  id: string,
  duration?: string | null,
  sessionDate?: string | null,
  meetingLink?: string | null,
  mentorshipID?: string | null,
  sessionStatus?: MentorshipStatus | null,
  menteeID: string,
  mentorID: string,
  mentorName?: string | null,
  MenteeName?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateIntroductionSessionInput = {
  id: string,
  duration?: string | null,
  sessionDate?: string | null,
  meetingLink?: string | null,
  mentorshipID?: string | null,
  sessionStatus?: MentorshipStatus | null,
  menteeID?: string | null,
  mentorID?: string | null,
  mentorName?: string | null,
  MenteeName?: string | null,
};

export type DeleteIntroductionSessionInput = {
  id: string,
};

export type CreateIntroductionRequestInput = {
  id?: string | null,
  mentorID: string,
  menteeID: string,
  note?: string | null,
  title?: string | null,
  status?: MentorshipStatus | null,
  initiatedBy?: string | null,
};

export type ModelIntroductionRequestConditionInput = {
  mentorID?: ModelIDInput | null,
  menteeID?: ModelIDInput | null,
  note?: ModelStringInput | null,
  title?: ModelStringInput | null,
  status?: ModelMentorshipStatusInput | null,
  initiatedBy?: ModelStringInput | null,
  and?: Array< ModelIntroductionRequestConditionInput | null > | null,
  or?: Array< ModelIntroductionRequestConditionInput | null > | null,
  not?: ModelIntroductionRequestConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type IntroductionRequest = {
  __typename: "IntroductionRequest",
  id: string,
  mentorID: string,
  menteeID: string,
  note?: string | null,
  title?: string | null,
  status?: MentorshipStatus | null,
  initiatedBy?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateIntroductionRequestInput = {
  id: string,
  mentorID?: string | null,
  menteeID?: string | null,
  note?: string | null,
  title?: string | null,
  status?: MentorshipStatus | null,
  initiatedBy?: string | null,
};

export type DeleteIntroductionRequestInput = {
  id: string,
};

export type CreateMentorshipInput = {
  id?: string | null,
  mentorID: string,
  menteeID: string,
  mentorshipStatus?: MentorshipStatus | null,
};

export type ModelMentorshipConditionInput = {
  mentorID?: ModelIDInput | null,
  menteeID?: ModelIDInput | null,
  mentorshipStatus?: ModelMentorshipStatusInput | null,
  and?: Array< ModelMentorshipConditionInput | null > | null,
  or?: Array< ModelMentorshipConditionInput | null > | null,
  not?: ModelMentorshipConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Mentorship = {
  __typename: "Mentorship",
  id: string,
  mentorID: string,
  menteeID: string,
  mentorshipStatus?: MentorshipStatus | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMentorshipInput = {
  id: string,
  mentorID?: string | null,
  menteeID?: string | null,
  mentorshipStatus?: MentorshipStatus | null,
};

export type DeleteMentorshipInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  value?: string | null,
};

export type ModelCategoryConditionInput = {
  value?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  value?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCategoryInput = {
  id: string,
  value?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type CreateReviewInput = {
  id?: string | null,
  rating?: string | null,
  comment?: string | null,
  reviewerRole?: string | null,
  reviewerID?: string | null,
  reviewedID?: string | null,
  sessionID: string,
};

export type ModelReviewConditionInput = {
  rating?: ModelStringInput | null,
  comment?: ModelStringInput | null,
  reviewerRole?: ModelStringInput | null,
  reviewerID?: ModelStringInput | null,
  reviewedID?: ModelStringInput | null,
  sessionID?: ModelIDInput | null,
  and?: Array< ModelReviewConditionInput | null > | null,
  or?: Array< ModelReviewConditionInput | null > | null,
  not?: ModelReviewConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Review = {
  __typename: "Review",
  id: string,
  rating?: string | null,
  comment?: string | null,
  reviewerRole?: string | null,
  reviewerID?: string | null,
  reviewedID?: string | null,
  sessionID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReviewInput = {
  id: string,
  rating?: string | null,
  comment?: string | null,
  reviewerRole?: string | null,
  reviewerID?: string | null,
  reviewedID?: string | null,
  sessionID?: string | null,
};

export type DeleteReviewInput = {
  id: string,
};

export type CreateChatRoomInput = {
  id?: string | null,
  mentorID: string,
  menteeID: string,
  name?: string | null,
  mentorshipID?: string | null,
};

export type ModelChatRoomConditionInput = {
  mentorID?: ModelIDInput | null,
  menteeID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  mentorshipID?: ModelStringInput | null,
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id: string,
  mentorID: string,
  menteeID: string,
  Messages?: ModelMessagesConnection | null,
  name?: string | null,
  mentorshipID?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMessagesConnection = {
  __typename: "ModelMessagesConnection",
  items:  Array<Messages | null >,
  nextToken?: string | null,
};

export type Messages = {
  __typename: "Messages",
  id: string,
  content?: string | null,
  username?: string | null,
  userRole?: string | null,
  chatroomID: string,
  senderId: string,
  timestamp?: string | null,
  imageUrl?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateChatRoomInput = {
  id: string,
  mentorID?: string | null,
  menteeID?: string | null,
  name?: string | null,
  mentorshipID?: string | null,
};

export type DeleteChatRoomInput = {
  id: string,
};

export type CreateSessionRequestInput = {
  id?: string | null,
  proposedCost?: string | null,
  note?: string | null,
  duration?: number | null,
  proposedSessionTime?: string | null,
  menteeID: string,
  status?: SessionRequestStatus | null,
  initiatedBy?: string | null,
  sessionID?: string | null,
  sessionTitle?: string | null,
  mentorshipID?: string | null,
  mentorID: string,
  sessionDescription?: string | null,
  mentorServicesID?: string | null,
};

export enum SessionRequestStatus {
  SENT = "SENT",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
}


export type ModelSessionRequestConditionInput = {
  proposedCost?: ModelStringInput | null,
  note?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  proposedSessionTime?: ModelStringInput | null,
  menteeID?: ModelIDInput | null,
  status?: ModelSessionRequestStatusInput | null,
  initiatedBy?: ModelStringInput | null,
  sessionID?: ModelStringInput | null,
  sessionTitle?: ModelStringInput | null,
  mentorshipID?: ModelStringInput | null,
  mentorID?: ModelIDInput | null,
  sessionDescription?: ModelStringInput | null,
  mentorServicesID?: ModelStringInput | null,
  and?: Array< ModelSessionRequestConditionInput | null > | null,
  or?: Array< ModelSessionRequestConditionInput | null > | null,
  not?: ModelSessionRequestConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelSessionRequestStatusInput = {
  eq?: SessionRequestStatus | null,
  ne?: SessionRequestStatus | null,
};

export type SessionRequest = {
  __typename: "SessionRequest",
  id: string,
  proposedCost?: string | null,
  note?: string | null,
  duration?: number | null,
  proposedSessionTime?: string | null,
  menteeID: string,
  status?: SessionRequestStatus | null,
  initiatedBy?: string | null,
  sessionID?: string | null,
  sessionTitle?: string | null,
  mentorshipID?: string | null,
  mentorID: string,
  sessionDescription?: string | null,
  mentorServicesID?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSessionRequestInput = {
  id: string,
  proposedCost?: string | null,
  note?: string | null,
  duration?: number | null,
  proposedSessionTime?: string | null,
  menteeID?: string | null,
  status?: SessionRequestStatus | null,
  initiatedBy?: string | null,
  sessionID?: string | null,
  sessionTitle?: string | null,
  mentorshipID?: string | null,
  mentorID?: string | null,
  sessionDescription?: string | null,
  mentorServicesID?: string | null,
};

export type DeleteSessionRequestInput = {
  id: string,
};

export type CreateMessagesInput = {
  id?: string | null,
  content?: string | null,
  username?: string | null,
  userRole?: string | null,
  chatroomID: string,
  senderId: string,
  timestamp?: string | null,
  imageUrl?: string | null,
};

export type ModelMessagesConditionInput = {
  content?: ModelStringInput | null,
  username?: ModelStringInput | null,
  userRole?: ModelStringInput | null,
  chatroomID?: ModelIDInput | null,
  senderId?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  and?: Array< ModelMessagesConditionInput | null > | null,
  or?: Array< ModelMessagesConditionInput | null > | null,
  not?: ModelMessagesConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateMessagesInput = {
  id: string,
  content?: string | null,
  username?: string | null,
  userRole?: string | null,
  chatroomID?: string | null,
  senderId?: string | null,
  timestamp?: string | null,
  imageUrl?: string | null,
};

export type DeleteMessagesInput = {
  id: string,
};

export type CreateNotificationInput = {
  id?: string | null,
  mentorID?: string | null,
  menteeID?: string | null,
  title?: string | null,
  body?: string | null,
  type?: string | null,
  fcmToken?: string | null,
  isSent?: boolean | null,
  isRead?: boolean | null,
};

export type ModelNotificationConditionInput = {
  mentorID?: ModelIDInput | null,
  menteeID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  type?: ModelStringInput | null,
  fcmToken?: ModelStringInput | null,
  isSent?: ModelBooleanInput | null,
  isRead?: ModelBooleanInput | null,
  and?: Array< ModelNotificationConditionInput | null > | null,
  or?: Array< ModelNotificationConditionInput | null > | null,
  not?: ModelNotificationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Notification = {
  __typename: "Notification",
  id: string,
  mentorID?: string | null,
  menteeID?: string | null,
  title?: string | null,
  body?: string | null,
  type?: string | null,
  fcmToken?: string | null,
  isSent?: boolean | null,
  isRead?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNotificationInput = {
  id: string,
  mentorID?: string | null,
  menteeID?: string | null,
  title?: string | null,
  body?: string | null,
  type?: string | null,
  fcmToken?: string | null,
  isSent?: boolean | null,
  isRead?: boolean | null,
};

export type DeleteNotificationInput = {
  id: string,
};

export type CreateSessionInput = {
  id?: string | null,
  duration?: number | null,
  status?: Status | null,
  sessionDate?: string | null,
  menteeID: string,
  mentorID: string,
  cost?: string | null,
  meetingLink?: string | null,
  sessionRequestID: string,
  sessionTitle?: string | null,
  objectives?: Array< string | null > | null,
  mentorshipID?: string | null,
  sessionDescription?: string | null,
  mentorServicesID?: string | null,
};

export enum Status {
  SCHEDULED = "SCHEDULED",
  RESCHEDULED = "RESCHEDULED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}


export type ModelSessionConditionInput = {
  duration?: ModelIntInput | null,
  status?: ModelStatusInput | null,
  sessionDate?: ModelStringInput | null,
  menteeID?: ModelIDInput | null,
  mentorID?: ModelIDInput | null,
  cost?: ModelStringInput | null,
  meetingLink?: ModelStringInput | null,
  sessionRequestID?: ModelStringInput | null,
  sessionTitle?: ModelStringInput | null,
  objectives?: ModelStringInput | null,
  mentorshipID?: ModelStringInput | null,
  sessionDescription?: ModelStringInput | null,
  mentorServicesID?: ModelStringInput | null,
  and?: Array< ModelSessionConditionInput | null > | null,
  or?: Array< ModelSessionConditionInput | null > | null,
  not?: ModelSessionConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type Session = {
  __typename: "Session",
  id: string,
  duration?: number | null,
  status?: Status | null,
  sessionDate?: string | null,
  menteeID: string,
  mentorID: string,
  cost?: string | null,
  meetingLink?: string | null,
  sessionRequestID: string,
  sessionTitle?: string | null,
  objectives?: Array< string | null > | null,
  Reviews?: ModelReviewConnection | null,
  mentorshipID?: string | null,
  sessionDescription?: string | null,
  mentorServicesID?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelReviewConnection = {
  __typename: "ModelReviewConnection",
  items:  Array<Review | null >,
  nextToken?: string | null,
};

export type UpdateSessionInput = {
  id: string,
  duration?: number | null,
  status?: Status | null,
  sessionDate?: string | null,
  menteeID?: string | null,
  mentorID?: string | null,
  cost?: string | null,
  meetingLink?: string | null,
  sessionRequestID?: string | null,
  sessionTitle?: string | null,
  objectives?: Array< string | null > | null,
  mentorshipID?: string | null,
  sessionDescription?: string | null,
  mentorServicesID?: string | null,
};

export type DeleteSessionInput = {
  id: string,
};

export type CreateMentorInput = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  bio?: string | null,
  profilePictureUrl?: string | null,
  firebaseToken?: string | null,
  expertise?: Array< string | null > | null,
  yearsOfExperience?: number | null,
  hourlyRate?: number | null,
  profileStatus?: ProfileStatus | null,
  mentorId?: string | null,
  summary?: string | null,
  linkedInUrl?: string | null,
  websiteUrl?: string | null,
  availability?: string | null,
  name?: string | null,
};

export enum ProfileStatus {
  PENDING = "PENDING",
  PUBLISHED = "PUBLISHED",
  REJECTED = "REJECTED",
  INPROGRESS = "INPROGRESS",
}


export type ModelMentorConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  profilePictureUrl?: ModelStringInput | null,
  firebaseToken?: ModelStringInput | null,
  expertise?: ModelStringInput | null,
  yearsOfExperience?: ModelIntInput | null,
  hourlyRate?: ModelFloatInput | null,
  profileStatus?: ModelProfileStatusInput | null,
  mentorId?: ModelStringInput | null,
  summary?: ModelStringInput | null,
  linkedInUrl?: ModelStringInput | null,
  websiteUrl?: ModelStringInput | null,
  availability?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelMentorConditionInput | null > | null,
  or?: Array< ModelMentorConditionInput | null > | null,
  not?: ModelMentorConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelProfileStatusInput = {
  eq?: ProfileStatus | null,
  ne?: ProfileStatus | null,
};

export type Mentor = {
  __typename: "Mentor",
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  bio?: string | null,
  profilePictureUrl?: string | null,
  firebaseToken?: string | null,
  expertise?: Array< string | null > | null,
  yearsOfExperience?: number | null,
  hourlyRate?: number | null,
  Sessions?: ModelSessionConnection | null,
  Notifications?: ModelNotificationConnection | null,
  profileStatus?: ProfileStatus | null,
  mentorId?: string | null,
  ChatRooms?: ModelChatRoomConnection | null,
  summary?: string | null,
  linkedInUrl?: string | null,
  websiteUrl?: string | null,
  Mentorships?: ModelMentorshipConnection | null,
  SessionRequests?: ModelSessionRequestConnection | null,
  IntroductionRequests?: ModelIntroductionRequestConnection | null,
  IntroductionSessions?: ModelIntroductionSessionConnection | null,
  availability?: string | null,
  MentorServices?: ModelMentorServicesConnection | null,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSessionConnection = {
  __typename: "ModelSessionConnection",
  items:  Array<Session | null >,
  nextToken?: string | null,
};

export type ModelNotificationConnection = {
  __typename: "ModelNotificationConnection",
  items:  Array<Notification | null >,
  nextToken?: string | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items:  Array<ChatRoom | null >,
  nextToken?: string | null,
};

export type ModelMentorshipConnection = {
  __typename: "ModelMentorshipConnection",
  items:  Array<Mentorship | null >,
  nextToken?: string | null,
};

export type ModelSessionRequestConnection = {
  __typename: "ModelSessionRequestConnection",
  items:  Array<SessionRequest | null >,
  nextToken?: string | null,
};

export type ModelIntroductionRequestConnection = {
  __typename: "ModelIntroductionRequestConnection",
  items:  Array<IntroductionRequest | null >,
  nextToken?: string | null,
};

export type ModelIntroductionSessionConnection = {
  __typename: "ModelIntroductionSessionConnection",
  items:  Array<IntroductionSession | null >,
  nextToken?: string | null,
};

export type ModelMentorServicesConnection = {
  __typename: "ModelMentorServicesConnection",
  items:  Array<MentorServices | null >,
  nextToken?: string | null,
};

export type UpdateMentorInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  bio?: string | null,
  profilePictureUrl?: string | null,
  firebaseToken?: string | null,
  expertise?: Array< string | null > | null,
  yearsOfExperience?: number | null,
  hourlyRate?: number | null,
  profileStatus?: ProfileStatus | null,
  mentorId?: string | null,
  summary?: string | null,
  linkedInUrl?: string | null,
  websiteUrl?: string | null,
  availability?: string | null,
  name?: string | null,
};

export type DeleteMentorInput = {
  id: string,
};

export type CreateMenteeInput = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  bio?: string | null,
  profilePictureUrl?: string | null,
  firebaseToken?: string | null,
  goals?: Array< string | null > | null,
  preferredMentorExperience?: number | null,
  profileStatus?: ProfileStatus | null,
  menteeId?: string | null,
  summary?: string | null,
  linkedInUrl?: string | null,
  websiteUrl?: string | null,
  resumeUrl?: string | null,
  topics?: Array< string | null > | null,
  name?: string | null,
};

export type ModelMenteeConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  profilePictureUrl?: ModelStringInput | null,
  firebaseToken?: ModelStringInput | null,
  goals?: ModelStringInput | null,
  preferredMentorExperience?: ModelIntInput | null,
  profileStatus?: ModelProfileStatusInput | null,
  menteeId?: ModelStringInput | null,
  summary?: ModelStringInput | null,
  linkedInUrl?: ModelStringInput | null,
  websiteUrl?: ModelStringInput | null,
  resumeUrl?: ModelStringInput | null,
  topics?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelMenteeConditionInput | null > | null,
  or?: Array< ModelMenteeConditionInput | null > | null,
  not?: ModelMenteeConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Mentee = {
  __typename: "Mentee",
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  bio?: string | null,
  profilePictureUrl?: string | null,
  firebaseToken?: string | null,
  goals?: Array< string | null > | null,
  preferredMentorExperience?: number | null,
  Sessions?: ModelSessionConnection | null,
  Notifications?: ModelNotificationConnection | null,
  profileStatus?: ProfileStatus | null,
  menteeId?: string | null,
  SessionRequests?: ModelSessionRequestConnection | null,
  ChatRooms?: ModelChatRoomConnection | null,
  summary?: string | null,
  linkedInUrl?: string | null,
  websiteUrl?: string | null,
  resumeUrl?: string | null,
  topics?: Array< string | null > | null,
  Mentorships?: ModelMentorshipConnection | null,
  IntroductionRequests?: ModelIntroductionRequestConnection | null,
  IntroductionSessions?: ModelIntroductionSessionConnection | null,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMenteeInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  bio?: string | null,
  profilePictureUrl?: string | null,
  firebaseToken?: string | null,
  goals?: Array< string | null > | null,
  preferredMentorExperience?: number | null,
  profileStatus?: ProfileStatus | null,
  menteeId?: string | null,
  summary?: string | null,
  linkedInUrl?: string | null,
  websiteUrl?: string | null,
  resumeUrl?: string | null,
  topics?: Array< string | null > | null,
  name?: string | null,
};

export type DeleteMenteeInput = {
  id: string,
};

export type ModelMentorServicesFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  cost?: ModelStringInput | null,
  isPaid?: ModelBooleanInput | null,
  mentorID?: ModelIDInput | null,
  duration?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMentorServicesFilterInput | null > | null,
  or?: Array< ModelMentorServicesFilterInput | null > | null,
  not?: ModelMentorServicesFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelIntroductionSessionFilterInput = {
  id?: ModelIDInput | null,
  duration?: ModelStringInput | null,
  sessionDate?: ModelStringInput | null,
  meetingLink?: ModelStringInput | null,
  mentorshipID?: ModelStringInput | null,
  sessionStatus?: ModelMentorshipStatusInput | null,
  menteeID?: ModelIDInput | null,
  mentorID?: ModelIDInput | null,
  mentorName?: ModelStringInput | null,
  MenteeName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelIntroductionSessionFilterInput | null > | null,
  or?: Array< ModelIntroductionSessionFilterInput | null > | null,
  not?: ModelIntroductionSessionFilterInput | null,
};

export type ModelIntroductionRequestFilterInput = {
  id?: ModelIDInput | null,
  mentorID?: ModelIDInput | null,
  menteeID?: ModelIDInput | null,
  note?: ModelStringInput | null,
  title?: ModelStringInput | null,
  status?: ModelMentorshipStatusInput | null,
  initiatedBy?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelIntroductionRequestFilterInput | null > | null,
  or?: Array< ModelIntroductionRequestFilterInput | null > | null,
  not?: ModelIntroductionRequestFilterInput | null,
};

export type ModelMentorshipFilterInput = {
  id?: ModelIDInput | null,
  mentorID?: ModelIDInput | null,
  menteeID?: ModelIDInput | null,
  mentorshipStatus?: ModelMentorshipStatusInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMentorshipFilterInput | null > | null,
  or?: Array< ModelMentorshipFilterInput | null > | null,
  not?: ModelMentorshipFilterInput | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  value?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type ModelReviewFilterInput = {
  id?: ModelIDInput | null,
  rating?: ModelStringInput | null,
  comment?: ModelStringInput | null,
  reviewerRole?: ModelStringInput | null,
  reviewerID?: ModelStringInput | null,
  reviewedID?: ModelStringInput | null,
  sessionID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelReviewFilterInput | null > | null,
  or?: Array< ModelReviewFilterInput | null > | null,
  not?: ModelReviewFilterInput | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  mentorID?: ModelIDInput | null,
  menteeID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  mentorshipID?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
};

export type ModelSessionRequestFilterInput = {
  id?: ModelIDInput | null,
  proposedCost?: ModelStringInput | null,
  note?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  proposedSessionTime?: ModelStringInput | null,
  menteeID?: ModelIDInput | null,
  status?: ModelSessionRequestStatusInput | null,
  initiatedBy?: ModelStringInput | null,
  sessionID?: ModelStringInput | null,
  sessionTitle?: ModelStringInput | null,
  mentorshipID?: ModelStringInput | null,
  mentorID?: ModelIDInput | null,
  sessionDescription?: ModelStringInput | null,
  mentorServicesID?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSessionRequestFilterInput | null > | null,
  or?: Array< ModelSessionRequestFilterInput | null > | null,
  not?: ModelSessionRequestFilterInput | null,
};

export type ModelMessagesFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  username?: ModelStringInput | null,
  userRole?: ModelStringInput | null,
  chatroomID?: ModelIDInput | null,
  senderId?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMessagesFilterInput | null > | null,
  or?: Array< ModelMessagesFilterInput | null > | null,
  not?: ModelMessagesFilterInput | null,
};

export type ModelNotificationFilterInput = {
  id?: ModelIDInput | null,
  mentorID?: ModelIDInput | null,
  menteeID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  body?: ModelStringInput | null,
  type?: ModelStringInput | null,
  fcmToken?: ModelStringInput | null,
  isSent?: ModelBooleanInput | null,
  isRead?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelNotificationFilterInput | null > | null,
  or?: Array< ModelNotificationFilterInput | null > | null,
  not?: ModelNotificationFilterInput | null,
};

export type ModelSessionFilterInput = {
  id?: ModelIDInput | null,
  duration?: ModelIntInput | null,
  status?: ModelStatusInput | null,
  sessionDate?: ModelStringInput | null,
  menteeID?: ModelIDInput | null,
  mentorID?: ModelIDInput | null,
  cost?: ModelStringInput | null,
  meetingLink?: ModelStringInput | null,
  sessionRequestID?: ModelStringInput | null,
  sessionTitle?: ModelStringInput | null,
  objectives?: ModelStringInput | null,
  mentorshipID?: ModelStringInput | null,
  sessionDescription?: ModelStringInput | null,
  mentorServicesID?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSessionFilterInput | null > | null,
  or?: Array< ModelSessionFilterInput | null > | null,
  not?: ModelSessionFilterInput | null,
};

export type ModelMentorFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  profilePictureUrl?: ModelStringInput | null,
  firebaseToken?: ModelStringInput | null,
  expertise?: ModelStringInput | null,
  yearsOfExperience?: ModelIntInput | null,
  hourlyRate?: ModelFloatInput | null,
  profileStatus?: ModelProfileStatusInput | null,
  mentorId?: ModelStringInput | null,
  summary?: ModelStringInput | null,
  linkedInUrl?: ModelStringInput | null,
  websiteUrl?: ModelStringInput | null,
  availability?: ModelStringInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMentorFilterInput | null > | null,
  or?: Array< ModelMentorFilterInput | null > | null,
  not?: ModelMentorFilterInput | null,
};

export type ModelMentorConnection = {
  __typename: "ModelMentorConnection",
  items:  Array<Mentor | null >,
  nextToken?: string | null,
};

export type ModelMenteeFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  profilePictureUrl?: ModelStringInput | null,
  firebaseToken?: ModelStringInput | null,
  goals?: ModelStringInput | null,
  preferredMentorExperience?: ModelIntInput | null,
  profileStatus?: ModelProfileStatusInput | null,
  menteeId?: ModelStringInput | null,
  summary?: ModelStringInput | null,
  linkedInUrl?: ModelStringInput | null,
  websiteUrl?: ModelStringInput | null,
  resumeUrl?: ModelStringInput | null,
  topics?: ModelStringInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMenteeFilterInput | null > | null,
  or?: Array< ModelMenteeFilterInput | null > | null,
  not?: ModelMenteeFilterInput | null,
};

export type ModelMenteeConnection = {
  __typename: "ModelMenteeConnection",
  items:  Array<Mentee | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionMentorServicesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  cost?: ModelSubscriptionStringInput | null,
  isPaid?: ModelSubscriptionBooleanInput | null,
  mentorID?: ModelSubscriptionIDInput | null,
  duration?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMentorServicesFilterInput | null > | null,
  or?: Array< ModelSubscriptionMentorServicesFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionIntroductionSessionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  duration?: ModelSubscriptionStringInput | null,
  sessionDate?: ModelSubscriptionStringInput | null,
  meetingLink?: ModelSubscriptionStringInput | null,
  mentorshipID?: ModelSubscriptionStringInput | null,
  sessionStatus?: ModelSubscriptionStringInput | null,
  menteeID?: ModelSubscriptionIDInput | null,
  mentorID?: ModelSubscriptionIDInput | null,
  mentorName?: ModelSubscriptionStringInput | null,
  MenteeName?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionIntroductionSessionFilterInput | null > | null,
  or?: Array< ModelSubscriptionIntroductionSessionFilterInput | null > | null,
};

export type ModelSubscriptionIntroductionRequestFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  mentorID?: ModelSubscriptionIDInput | null,
  menteeID?: ModelSubscriptionIDInput | null,
  note?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  initiatedBy?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionIntroductionRequestFilterInput | null > | null,
  or?: Array< ModelSubscriptionIntroductionRequestFilterInput | null > | null,
};

export type ModelSubscriptionMentorshipFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  mentorID?: ModelSubscriptionIDInput | null,
  menteeID?: ModelSubscriptionIDInput | null,
  mentorshipStatus?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMentorshipFilterInput | null > | null,
  or?: Array< ModelSubscriptionMentorshipFilterInput | null > | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  value?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
};

export type ModelSubscriptionReviewFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  rating?: ModelSubscriptionStringInput | null,
  comment?: ModelSubscriptionStringInput | null,
  reviewerRole?: ModelSubscriptionStringInput | null,
  reviewerID?: ModelSubscriptionStringInput | null,
  reviewedID?: ModelSubscriptionStringInput | null,
  sessionID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReviewFilterInput | null > | null,
  or?: Array< ModelSubscriptionReviewFilterInput | null > | null,
};

export type ModelSubscriptionChatRoomFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  mentorID?: ModelSubscriptionIDInput | null,
  menteeID?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  mentorshipID?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
  or?: Array< ModelSubscriptionChatRoomFilterInput | null > | null,
};

export type ModelSubscriptionSessionRequestFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  proposedCost?: ModelSubscriptionStringInput | null,
  note?: ModelSubscriptionStringInput | null,
  duration?: ModelSubscriptionIntInput | null,
  proposedSessionTime?: ModelSubscriptionStringInput | null,
  menteeID?: ModelSubscriptionIDInput | null,
  status?: ModelSubscriptionStringInput | null,
  initiatedBy?: ModelSubscriptionStringInput | null,
  sessionID?: ModelSubscriptionStringInput | null,
  sessionTitle?: ModelSubscriptionStringInput | null,
  mentorshipID?: ModelSubscriptionStringInput | null,
  mentorID?: ModelSubscriptionIDInput | null,
  sessionDescription?: ModelSubscriptionStringInput | null,
  mentorServicesID?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSessionRequestFilterInput | null > | null,
  or?: Array< ModelSubscriptionSessionRequestFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionMessagesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  userRole?: ModelSubscriptionStringInput | null,
  chatroomID?: ModelSubscriptionIDInput | null,
  senderId?: ModelSubscriptionStringInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  imageUrl?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessagesFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessagesFilterInput | null > | null,
};

export type ModelSubscriptionNotificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  mentorID?: ModelSubscriptionIDInput | null,
  menteeID?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  body?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  fcmToken?: ModelSubscriptionStringInput | null,
  isSent?: ModelSubscriptionBooleanInput | null,
  isRead?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
};

export type ModelSubscriptionSessionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  duration?: ModelSubscriptionIntInput | null,
  status?: ModelSubscriptionStringInput | null,
  sessionDate?: ModelSubscriptionStringInput | null,
  menteeID?: ModelSubscriptionIDInput | null,
  mentorID?: ModelSubscriptionIDInput | null,
  cost?: ModelSubscriptionStringInput | null,
  meetingLink?: ModelSubscriptionStringInput | null,
  sessionRequestID?: ModelSubscriptionStringInput | null,
  sessionTitle?: ModelSubscriptionStringInput | null,
  objectives?: ModelSubscriptionStringInput | null,
  mentorshipID?: ModelSubscriptionStringInput | null,
  sessionDescription?: ModelSubscriptionStringInput | null,
  mentorServicesID?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSessionFilterInput | null > | null,
  or?: Array< ModelSubscriptionSessionFilterInput | null > | null,
};

export type ModelSubscriptionMentorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  profilePictureUrl?: ModelSubscriptionStringInput | null,
  firebaseToken?: ModelSubscriptionStringInput | null,
  expertise?: ModelSubscriptionStringInput | null,
  yearsOfExperience?: ModelSubscriptionIntInput | null,
  hourlyRate?: ModelSubscriptionFloatInput | null,
  profileStatus?: ModelSubscriptionStringInput | null,
  mentorId?: ModelSubscriptionStringInput | null,
  summary?: ModelSubscriptionStringInput | null,
  linkedInUrl?: ModelSubscriptionStringInput | null,
  websiteUrl?: ModelSubscriptionStringInput | null,
  availability?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMentorFilterInput | null > | null,
  or?: Array< ModelSubscriptionMentorFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionMenteeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  profilePictureUrl?: ModelSubscriptionStringInput | null,
  firebaseToken?: ModelSubscriptionStringInput | null,
  goals?: ModelSubscriptionStringInput | null,
  preferredMentorExperience?: ModelSubscriptionIntInput | null,
  profileStatus?: ModelSubscriptionStringInput | null,
  menteeId?: ModelSubscriptionStringInput | null,
  summary?: ModelSubscriptionStringInput | null,
  linkedInUrl?: ModelSubscriptionStringInput | null,
  websiteUrl?: ModelSubscriptionStringInput | null,
  resumeUrl?: ModelSubscriptionStringInput | null,
  topics?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMenteeFilterInput | null > | null,
  or?: Array< ModelSubscriptionMenteeFilterInput | null > | null,
};

export type CreateMentorServicesMutationVariables = {
  input: CreateMentorServicesInput,
  condition?: ModelMentorServicesConditionInput | null,
};

export type CreateMentorServicesMutation = {
  createMentorServices?:  {
    __typename: "MentorServices",
    id: string,
    title?: string | null,
    description?: string | null,
    cost?: string | null,
    isPaid?: boolean | null,
    mentorID: string,
    duration?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMentorServicesMutationVariables = {
  input: UpdateMentorServicesInput,
  condition?: ModelMentorServicesConditionInput | null,
};

export type UpdateMentorServicesMutation = {
  updateMentorServices?:  {
    __typename: "MentorServices",
    id: string,
    title?: string | null,
    description?: string | null,
    cost?: string | null,
    isPaid?: boolean | null,
    mentorID: string,
    duration?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMentorServicesMutationVariables = {
  input: DeleteMentorServicesInput,
  condition?: ModelMentorServicesConditionInput | null,
};

export type DeleteMentorServicesMutation = {
  deleteMentorServices?:  {
    __typename: "MentorServices",
    id: string,
    title?: string | null,
    description?: string | null,
    cost?: string | null,
    isPaid?: boolean | null,
    mentorID: string,
    duration?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateIntroductionSessionMutationVariables = {
  input: CreateIntroductionSessionInput,
  condition?: ModelIntroductionSessionConditionInput | null,
};

export type CreateIntroductionSessionMutation = {
  createIntroductionSession?:  {
    __typename: "IntroductionSession",
    id: string,
    duration?: string | null,
    sessionDate?: string | null,
    meetingLink?: string | null,
    mentorshipID?: string | null,
    sessionStatus?: MentorshipStatus | null,
    menteeID: string,
    mentorID: string,
    mentorName?: string | null,
    MenteeName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIntroductionSessionMutationVariables = {
  input: UpdateIntroductionSessionInput,
  condition?: ModelIntroductionSessionConditionInput | null,
};

export type UpdateIntroductionSessionMutation = {
  updateIntroductionSession?:  {
    __typename: "IntroductionSession",
    id: string,
    duration?: string | null,
    sessionDate?: string | null,
    meetingLink?: string | null,
    mentorshipID?: string | null,
    sessionStatus?: MentorshipStatus | null,
    menteeID: string,
    mentorID: string,
    mentorName?: string | null,
    MenteeName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIntroductionSessionMutationVariables = {
  input: DeleteIntroductionSessionInput,
  condition?: ModelIntroductionSessionConditionInput | null,
};

export type DeleteIntroductionSessionMutation = {
  deleteIntroductionSession?:  {
    __typename: "IntroductionSession",
    id: string,
    duration?: string | null,
    sessionDate?: string | null,
    meetingLink?: string | null,
    mentorshipID?: string | null,
    sessionStatus?: MentorshipStatus | null,
    menteeID: string,
    mentorID: string,
    mentorName?: string | null,
    MenteeName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateIntroductionRequestMutationVariables = {
  input: CreateIntroductionRequestInput,
  condition?: ModelIntroductionRequestConditionInput | null,
};

export type CreateIntroductionRequestMutation = {
  createIntroductionRequest?:  {
    __typename: "IntroductionRequest",
    id: string,
    mentorID: string,
    menteeID: string,
    note?: string | null,
    title?: string | null,
    status?: MentorshipStatus | null,
    initiatedBy?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateIntroductionRequestMutationVariables = {
  input: UpdateIntroductionRequestInput,
  condition?: ModelIntroductionRequestConditionInput | null,
};

export type UpdateIntroductionRequestMutation = {
  updateIntroductionRequest?:  {
    __typename: "IntroductionRequest",
    id: string,
    mentorID: string,
    menteeID: string,
    note?: string | null,
    title?: string | null,
    status?: MentorshipStatus | null,
    initiatedBy?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteIntroductionRequestMutationVariables = {
  input: DeleteIntroductionRequestInput,
  condition?: ModelIntroductionRequestConditionInput | null,
};

export type DeleteIntroductionRequestMutation = {
  deleteIntroductionRequest?:  {
    __typename: "IntroductionRequest",
    id: string,
    mentorID: string,
    menteeID: string,
    note?: string | null,
    title?: string | null,
    status?: MentorshipStatus | null,
    initiatedBy?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMentorshipMutationVariables = {
  input: CreateMentorshipInput,
  condition?: ModelMentorshipConditionInput | null,
};

export type CreateMentorshipMutation = {
  createMentorship?:  {
    __typename: "Mentorship",
    id: string,
    mentorID: string,
    menteeID: string,
    mentorshipStatus?: MentorshipStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMentorshipMutationVariables = {
  input: UpdateMentorshipInput,
  condition?: ModelMentorshipConditionInput | null,
};

export type UpdateMentorshipMutation = {
  updateMentorship?:  {
    __typename: "Mentorship",
    id: string,
    mentorID: string,
    menteeID: string,
    mentorshipStatus?: MentorshipStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMentorshipMutationVariables = {
  input: DeleteMentorshipInput,
  condition?: ModelMentorshipConditionInput | null,
};

export type DeleteMentorshipMutation = {
  deleteMentorship?:  {
    __typename: "Mentorship",
    id: string,
    mentorID: string,
    menteeID: string,
    mentorshipStatus?: MentorshipStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    value?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    value?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    value?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReviewMutationVariables = {
  input: CreateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type CreateReviewMutation = {
  createReview?:  {
    __typename: "Review",
    id: string,
    rating?: string | null,
    comment?: string | null,
    reviewerRole?: string | null,
    reviewerID?: string | null,
    reviewedID?: string | null,
    sessionID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReviewMutationVariables = {
  input: UpdateReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type UpdateReviewMutation = {
  updateReview?:  {
    __typename: "Review",
    id: string,
    rating?: string | null,
    comment?: string | null,
    reviewerRole?: string | null,
    reviewerID?: string | null,
    reviewedID?: string | null,
    sessionID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReviewMutationVariables = {
  input: DeleteReviewInput,
  condition?: ModelReviewConditionInput | null,
};

export type DeleteReviewMutation = {
  deleteReview?:  {
    __typename: "Review",
    id: string,
    rating?: string | null,
    comment?: string | null,
    reviewerRole?: string | null,
    reviewerID?: string | null,
    reviewedID?: string | null,
    sessionID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    mentorID: string,
    menteeID: string,
    Messages?:  {
      __typename: "ModelMessagesConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    mentorshipID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    mentorID: string,
    menteeID: string,
    Messages?:  {
      __typename: "ModelMessagesConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    mentorshipID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    mentorID: string,
    menteeID: string,
    Messages?:  {
      __typename: "ModelMessagesConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    mentorshipID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSessionRequestMutationVariables = {
  input: CreateSessionRequestInput,
  condition?: ModelSessionRequestConditionInput | null,
};

export type CreateSessionRequestMutation = {
  createSessionRequest?:  {
    __typename: "SessionRequest",
    id: string,
    proposedCost?: string | null,
    note?: string | null,
    duration?: number | null,
    proposedSessionTime?: string | null,
    menteeID: string,
    status?: SessionRequestStatus | null,
    initiatedBy?: string | null,
    sessionID?: string | null,
    sessionTitle?: string | null,
    mentorshipID?: string | null,
    mentorID: string,
    sessionDescription?: string | null,
    mentorServicesID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSessionRequestMutationVariables = {
  input: UpdateSessionRequestInput,
  condition?: ModelSessionRequestConditionInput | null,
};

export type UpdateSessionRequestMutation = {
  updateSessionRequest?:  {
    __typename: "SessionRequest",
    id: string,
    proposedCost?: string | null,
    note?: string | null,
    duration?: number | null,
    proposedSessionTime?: string | null,
    menteeID: string,
    status?: SessionRequestStatus | null,
    initiatedBy?: string | null,
    sessionID?: string | null,
    sessionTitle?: string | null,
    mentorshipID?: string | null,
    mentorID: string,
    sessionDescription?: string | null,
    mentorServicesID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSessionRequestMutationVariables = {
  input: DeleteSessionRequestInput,
  condition?: ModelSessionRequestConditionInput | null,
};

export type DeleteSessionRequestMutation = {
  deleteSessionRequest?:  {
    __typename: "SessionRequest",
    id: string,
    proposedCost?: string | null,
    note?: string | null,
    duration?: number | null,
    proposedSessionTime?: string | null,
    menteeID: string,
    status?: SessionRequestStatus | null,
    initiatedBy?: string | null,
    sessionID?: string | null,
    sessionTitle?: string | null,
    mentorshipID?: string | null,
    mentorID: string,
    sessionDescription?: string | null,
    mentorServicesID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessagesMutationVariables = {
  input: CreateMessagesInput,
  condition?: ModelMessagesConditionInput | null,
};

export type CreateMessagesMutation = {
  createMessages?:  {
    __typename: "Messages",
    id: string,
    content?: string | null,
    username?: string | null,
    userRole?: string | null,
    chatroomID: string,
    senderId: string,
    timestamp?: string | null,
    imageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMessagesMutationVariables = {
  input: UpdateMessagesInput,
  condition?: ModelMessagesConditionInput | null,
};

export type UpdateMessagesMutation = {
  updateMessages?:  {
    __typename: "Messages",
    id: string,
    content?: string | null,
    username?: string | null,
    userRole?: string | null,
    chatroomID: string,
    senderId: string,
    timestamp?: string | null,
    imageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMessagesMutationVariables = {
  input: DeleteMessagesInput,
  condition?: ModelMessagesConditionInput | null,
};

export type DeleteMessagesMutation = {
  deleteMessages?:  {
    __typename: "Messages",
    id: string,
    content?: string | null,
    username?: string | null,
    userRole?: string | null,
    chatroomID: string,
    senderId: string,
    timestamp?: string | null,
    imageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateNotificationMutationVariables = {
  input: CreateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type CreateNotificationMutation = {
  createNotification?:  {
    __typename: "Notification",
    id: string,
    mentorID?: string | null,
    menteeID?: string | null,
    title?: string | null,
    body?: string | null,
    type?: string | null,
    fcmToken?: string | null,
    isSent?: boolean | null,
    isRead?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNotificationMutationVariables = {
  input: UpdateNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type UpdateNotificationMutation = {
  updateNotification?:  {
    __typename: "Notification",
    id: string,
    mentorID?: string | null,
    menteeID?: string | null,
    title?: string | null,
    body?: string | null,
    type?: string | null,
    fcmToken?: string | null,
    isSent?: boolean | null,
    isRead?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNotificationMutationVariables = {
  input: DeleteNotificationInput,
  condition?: ModelNotificationConditionInput | null,
};

export type DeleteNotificationMutation = {
  deleteNotification?:  {
    __typename: "Notification",
    id: string,
    mentorID?: string | null,
    menteeID?: string | null,
    title?: string | null,
    body?: string | null,
    type?: string | null,
    fcmToken?: string | null,
    isSent?: boolean | null,
    isRead?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSessionMutationVariables = {
  input: CreateSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type CreateSessionMutation = {
  createSession?:  {
    __typename: "Session",
    id: string,
    duration?: number | null,
    status?: Status | null,
    sessionDate?: string | null,
    menteeID: string,
    mentorID: string,
    cost?: string | null,
    meetingLink?: string | null,
    sessionRequestID: string,
    sessionTitle?: string | null,
    objectives?: Array< string | null > | null,
    Reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    mentorshipID?: string | null,
    sessionDescription?: string | null,
    mentorServicesID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSessionMutationVariables = {
  input: UpdateSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type UpdateSessionMutation = {
  updateSession?:  {
    __typename: "Session",
    id: string,
    duration?: number | null,
    status?: Status | null,
    sessionDate?: string | null,
    menteeID: string,
    mentorID: string,
    cost?: string | null,
    meetingLink?: string | null,
    sessionRequestID: string,
    sessionTitle?: string | null,
    objectives?: Array< string | null > | null,
    Reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    mentorshipID?: string | null,
    sessionDescription?: string | null,
    mentorServicesID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSessionMutationVariables = {
  input: DeleteSessionInput,
  condition?: ModelSessionConditionInput | null,
};

export type DeleteSessionMutation = {
  deleteSession?:  {
    __typename: "Session",
    id: string,
    duration?: number | null,
    status?: Status | null,
    sessionDate?: string | null,
    menteeID: string,
    mentorID: string,
    cost?: string | null,
    meetingLink?: string | null,
    sessionRequestID: string,
    sessionTitle?: string | null,
    objectives?: Array< string | null > | null,
    Reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    mentorshipID?: string | null,
    sessionDescription?: string | null,
    mentorServicesID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMentorMutationVariables = {
  input: CreateMentorInput,
  condition?: ModelMentorConditionInput | null,
};

export type CreateMentorMutation = {
  createMentor?:  {
    __typename: "Mentor",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    bio?: string | null,
    profilePictureUrl?: string | null,
    firebaseToken?: string | null,
    expertise?: Array< string | null > | null,
    yearsOfExperience?: number | null,
    hourlyRate?: number | null,
    Sessions?:  {
      __typename: "ModelSessionConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
    mentorId?: string | null,
    ChatRooms?:  {
      __typename: "ModelChatRoomConnection",
      nextToken?: string | null,
    } | null,
    summary?: string | null,
    linkedInUrl?: string | null,
    websiteUrl?: string | null,
    Mentorships?:  {
      __typename: "ModelMentorshipConnection",
      nextToken?: string | null,
    } | null,
    SessionRequests?:  {
      __typename: "ModelSessionRequestConnection",
      nextToken?: string | null,
    } | null,
    IntroductionRequests?:  {
      __typename: "ModelIntroductionRequestConnection",
      nextToken?: string | null,
    } | null,
    IntroductionSessions?:  {
      __typename: "ModelIntroductionSessionConnection",
      nextToken?: string | null,
    } | null,
    availability?: string | null,
    MentorServices?:  {
      __typename: "ModelMentorServicesConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMentorMutationVariables = {
  input: UpdateMentorInput,
  condition?: ModelMentorConditionInput | null,
};

export type UpdateMentorMutation = {
  updateMentor?:  {
    __typename: "Mentor",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    bio?: string | null,
    profilePictureUrl?: string | null,
    firebaseToken?: string | null,
    expertise?: Array< string | null > | null,
    yearsOfExperience?: number | null,
    hourlyRate?: number | null,
    Sessions?:  {
      __typename: "ModelSessionConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
    mentorId?: string | null,
    ChatRooms?:  {
      __typename: "ModelChatRoomConnection",
      nextToken?: string | null,
    } | null,
    summary?: string | null,
    linkedInUrl?: string | null,
    websiteUrl?: string | null,
    Mentorships?:  {
      __typename: "ModelMentorshipConnection",
      nextToken?: string | null,
    } | null,
    SessionRequests?:  {
      __typename: "ModelSessionRequestConnection",
      nextToken?: string | null,
    } | null,
    IntroductionRequests?:  {
      __typename: "ModelIntroductionRequestConnection",
      nextToken?: string | null,
    } | null,
    IntroductionSessions?:  {
      __typename: "ModelIntroductionSessionConnection",
      nextToken?: string | null,
    } | null,
    availability?: string | null,
    MentorServices?:  {
      __typename: "ModelMentorServicesConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMentorMutationVariables = {
  input: DeleteMentorInput,
  condition?: ModelMentorConditionInput | null,
};

export type DeleteMentorMutation = {
  deleteMentor?:  {
    __typename: "Mentor",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    bio?: string | null,
    profilePictureUrl?: string | null,
    firebaseToken?: string | null,
    expertise?: Array< string | null > | null,
    yearsOfExperience?: number | null,
    hourlyRate?: number | null,
    Sessions?:  {
      __typename: "ModelSessionConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
    mentorId?: string | null,
    ChatRooms?:  {
      __typename: "ModelChatRoomConnection",
      nextToken?: string | null,
    } | null,
    summary?: string | null,
    linkedInUrl?: string | null,
    websiteUrl?: string | null,
    Mentorships?:  {
      __typename: "ModelMentorshipConnection",
      nextToken?: string | null,
    } | null,
    SessionRequests?:  {
      __typename: "ModelSessionRequestConnection",
      nextToken?: string | null,
    } | null,
    IntroductionRequests?:  {
      __typename: "ModelIntroductionRequestConnection",
      nextToken?: string | null,
    } | null,
    IntroductionSessions?:  {
      __typename: "ModelIntroductionSessionConnection",
      nextToken?: string | null,
    } | null,
    availability?: string | null,
    MentorServices?:  {
      __typename: "ModelMentorServicesConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMenteeMutationVariables = {
  input: CreateMenteeInput,
  condition?: ModelMenteeConditionInput | null,
};

export type CreateMenteeMutation = {
  createMentee?:  {
    __typename: "Mentee",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    bio?: string | null,
    profilePictureUrl?: string | null,
    firebaseToken?: string | null,
    goals?: Array< string | null > | null,
    preferredMentorExperience?: number | null,
    Sessions?:  {
      __typename: "ModelSessionConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
    menteeId?: string | null,
    SessionRequests?:  {
      __typename: "ModelSessionRequestConnection",
      nextToken?: string | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelChatRoomConnection",
      nextToken?: string | null,
    } | null,
    summary?: string | null,
    linkedInUrl?: string | null,
    websiteUrl?: string | null,
    resumeUrl?: string | null,
    topics?: Array< string | null > | null,
    Mentorships?:  {
      __typename: "ModelMentorshipConnection",
      nextToken?: string | null,
    } | null,
    IntroductionRequests?:  {
      __typename: "ModelIntroductionRequestConnection",
      nextToken?: string | null,
    } | null,
    IntroductionSessions?:  {
      __typename: "ModelIntroductionSessionConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMenteeMutationVariables = {
  input: UpdateMenteeInput,
  condition?: ModelMenteeConditionInput | null,
};

export type UpdateMenteeMutation = {
  updateMentee?:  {
    __typename: "Mentee",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    bio?: string | null,
    profilePictureUrl?: string | null,
    firebaseToken?: string | null,
    goals?: Array< string | null > | null,
    preferredMentorExperience?: number | null,
    Sessions?:  {
      __typename: "ModelSessionConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
    menteeId?: string | null,
    SessionRequests?:  {
      __typename: "ModelSessionRequestConnection",
      nextToken?: string | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelChatRoomConnection",
      nextToken?: string | null,
    } | null,
    summary?: string | null,
    linkedInUrl?: string | null,
    websiteUrl?: string | null,
    resumeUrl?: string | null,
    topics?: Array< string | null > | null,
    Mentorships?:  {
      __typename: "ModelMentorshipConnection",
      nextToken?: string | null,
    } | null,
    IntroductionRequests?:  {
      __typename: "ModelIntroductionRequestConnection",
      nextToken?: string | null,
    } | null,
    IntroductionSessions?:  {
      __typename: "ModelIntroductionSessionConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMenteeMutationVariables = {
  input: DeleteMenteeInput,
  condition?: ModelMenteeConditionInput | null,
};

export type DeleteMenteeMutation = {
  deleteMentee?:  {
    __typename: "Mentee",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    bio?: string | null,
    profilePictureUrl?: string | null,
    firebaseToken?: string | null,
    goals?: Array< string | null > | null,
    preferredMentorExperience?: number | null,
    Sessions?:  {
      __typename: "ModelSessionConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
    menteeId?: string | null,
    SessionRequests?:  {
      __typename: "ModelSessionRequestConnection",
      nextToken?: string | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelChatRoomConnection",
      nextToken?: string | null,
    } | null,
    summary?: string | null,
    linkedInUrl?: string | null,
    websiteUrl?: string | null,
    resumeUrl?: string | null,
    topics?: Array< string | null > | null,
    Mentorships?:  {
      __typename: "ModelMentorshipConnection",
      nextToken?: string | null,
    } | null,
    IntroductionRequests?:  {
      __typename: "ModelIntroductionRequestConnection",
      nextToken?: string | null,
    } | null,
    IntroductionSessions?:  {
      __typename: "ModelIntroductionSessionConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMentorServicesQueryVariables = {
  id: string,
};

export type GetMentorServicesQuery = {
  getMentorServices?:  {
    __typename: "MentorServices",
    id: string,
    title?: string | null,
    description?: string | null,
    cost?: string | null,
    isPaid?: boolean | null,
    mentorID: string,
    duration?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMentorServicesQueryVariables = {
  filter?: ModelMentorServicesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMentorServicesQuery = {
  listMentorServices?:  {
    __typename: "ModelMentorServicesConnection",
    items:  Array< {
      __typename: "MentorServices",
      id: string,
      title?: string | null,
      description?: string | null,
      cost?: string | null,
      isPaid?: boolean | null,
      mentorID: string,
      duration?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MentorServicesByMentorIDQueryVariables = {
  mentorID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMentorServicesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MentorServicesByMentorIDQuery = {
  mentorServicesByMentorID?:  {
    __typename: "ModelMentorServicesConnection",
    items:  Array< {
      __typename: "MentorServices",
      id: string,
      title?: string | null,
      description?: string | null,
      cost?: string | null,
      isPaid?: boolean | null,
      mentorID: string,
      duration?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetIntroductionSessionQueryVariables = {
  id: string,
};

export type GetIntroductionSessionQuery = {
  getIntroductionSession?:  {
    __typename: "IntroductionSession",
    id: string,
    duration?: string | null,
    sessionDate?: string | null,
    meetingLink?: string | null,
    mentorshipID?: string | null,
    sessionStatus?: MentorshipStatus | null,
    menteeID: string,
    mentorID: string,
    mentorName?: string | null,
    MenteeName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIntroductionSessionsQueryVariables = {
  filter?: ModelIntroductionSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIntroductionSessionsQuery = {
  listIntroductionSessions?:  {
    __typename: "ModelIntroductionSessionConnection",
    items:  Array< {
      __typename: "IntroductionSession",
      id: string,
      duration?: string | null,
      sessionDate?: string | null,
      meetingLink?: string | null,
      mentorshipID?: string | null,
      sessionStatus?: MentorshipStatus | null,
      menteeID: string,
      mentorID: string,
      mentorName?: string | null,
      MenteeName?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type IntroductionSessionsByMenteeIDQueryVariables = {
  menteeID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelIntroductionSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type IntroductionSessionsByMenteeIDQuery = {
  introductionSessionsByMenteeID?:  {
    __typename: "ModelIntroductionSessionConnection",
    items:  Array< {
      __typename: "IntroductionSession",
      id: string,
      duration?: string | null,
      sessionDate?: string | null,
      meetingLink?: string | null,
      mentorshipID?: string | null,
      sessionStatus?: MentorshipStatus | null,
      menteeID: string,
      mentorID: string,
      mentorName?: string | null,
      MenteeName?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type IntroductionSessionsByMentorIDQueryVariables = {
  mentorID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelIntroductionSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type IntroductionSessionsByMentorIDQuery = {
  introductionSessionsByMentorID?:  {
    __typename: "ModelIntroductionSessionConnection",
    items:  Array< {
      __typename: "IntroductionSession",
      id: string,
      duration?: string | null,
      sessionDate?: string | null,
      meetingLink?: string | null,
      mentorshipID?: string | null,
      sessionStatus?: MentorshipStatus | null,
      menteeID: string,
      mentorID: string,
      mentorName?: string | null,
      MenteeName?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetIntroductionRequestQueryVariables = {
  id: string,
};

export type GetIntroductionRequestQuery = {
  getIntroductionRequest?:  {
    __typename: "IntroductionRequest",
    id: string,
    mentorID: string,
    menteeID: string,
    note?: string | null,
    title?: string | null,
    status?: MentorshipStatus | null,
    initiatedBy?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListIntroductionRequestsQueryVariables = {
  filter?: ModelIntroductionRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListIntroductionRequestsQuery = {
  listIntroductionRequests?:  {
    __typename: "ModelIntroductionRequestConnection",
    items:  Array< {
      __typename: "IntroductionRequest",
      id: string,
      mentorID: string,
      menteeID: string,
      note?: string | null,
      title?: string | null,
      status?: MentorshipStatus | null,
      initiatedBy?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type IntroductionRequestsByMentorIDQueryVariables = {
  mentorID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelIntroductionRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type IntroductionRequestsByMentorIDQuery = {
  introductionRequestsByMentorID?:  {
    __typename: "ModelIntroductionRequestConnection",
    items:  Array< {
      __typename: "IntroductionRequest",
      id: string,
      mentorID: string,
      menteeID: string,
      note?: string | null,
      title?: string | null,
      status?: MentorshipStatus | null,
      initiatedBy?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type IntroductionRequestsByMenteeIDQueryVariables = {
  menteeID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelIntroductionRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type IntroductionRequestsByMenteeIDQuery = {
  introductionRequestsByMenteeID?:  {
    __typename: "ModelIntroductionRequestConnection",
    items:  Array< {
      __typename: "IntroductionRequest",
      id: string,
      mentorID: string,
      menteeID: string,
      note?: string | null,
      title?: string | null,
      status?: MentorshipStatus | null,
      initiatedBy?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMentorshipQueryVariables = {
  id: string,
};

export type GetMentorshipQuery = {
  getMentorship?:  {
    __typename: "Mentorship",
    id: string,
    mentorID: string,
    menteeID: string,
    mentorshipStatus?: MentorshipStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMentorshipsQueryVariables = {
  filter?: ModelMentorshipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMentorshipsQuery = {
  listMentorships?:  {
    __typename: "ModelMentorshipConnection",
    items:  Array< {
      __typename: "Mentorship",
      id: string,
      mentorID: string,
      menteeID: string,
      mentorshipStatus?: MentorshipStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MentorshipsByMentorIDQueryVariables = {
  mentorID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMentorshipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MentorshipsByMentorIDQuery = {
  mentorshipsByMentorID?:  {
    __typename: "ModelMentorshipConnection",
    items:  Array< {
      __typename: "Mentorship",
      id: string,
      mentorID: string,
      menteeID: string,
      mentorshipStatus?: MentorshipStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MentorshipsByMenteeIDQueryVariables = {
  menteeID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMentorshipFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MentorshipsByMenteeIDQuery = {
  mentorshipsByMenteeID?:  {
    __typename: "ModelMentorshipConnection",
    items:  Array< {
      __typename: "Mentorship",
      id: string,
      mentorID: string,
      menteeID: string,
      mentorshipStatus?: MentorshipStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    value?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      value?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReviewQueryVariables = {
  id: string,
};

export type GetReviewQuery = {
  getReview?:  {
    __typename: "Review",
    id: string,
    rating?: string | null,
    comment?: string | null,
    reviewerRole?: string | null,
    reviewerID?: string | null,
    reviewedID?: string | null,
    sessionID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReviewsQueryVariables = {
  filter?: ModelReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReviewsQuery = {
  listReviews?:  {
    __typename: "ModelReviewConnection",
    items:  Array< {
      __typename: "Review",
      id: string,
      rating?: string | null,
      comment?: string | null,
      reviewerRole?: string | null,
      reviewerID?: string | null,
      reviewedID?: string | null,
      sessionID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ReviewsBySessionIDQueryVariables = {
  sessionID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReviewFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReviewsBySessionIDQuery = {
  reviewsBySessionID?:  {
    __typename: "ModelReviewConnection",
    items:  Array< {
      __typename: "Review",
      id: string,
      rating?: string | null,
      comment?: string | null,
      reviewerRole?: string | null,
      reviewerID?: string | null,
      reviewedID?: string | null,
      sessionID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    mentorID: string,
    menteeID: string,
    Messages?:  {
      __typename: "ModelMessagesConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    mentorshipID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items:  Array< {
      __typename: "ChatRoom",
      id: string,
      mentorID: string,
      menteeID: string,
      name?: string | null,
      mentorshipID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ChatRoomsByMentorIDQueryVariables = {
  mentorID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChatRoomsByMentorIDQuery = {
  chatRoomsByMentorID?:  {
    __typename: "ModelChatRoomConnection",
    items:  Array< {
      __typename: "ChatRoom",
      id: string,
      mentorID: string,
      menteeID: string,
      name?: string | null,
      mentorshipID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ChatRoomsByMenteeIDQueryVariables = {
  menteeID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChatRoomsByMenteeIDQuery = {
  chatRoomsByMenteeID?:  {
    __typename: "ModelChatRoomConnection",
    items:  Array< {
      __typename: "ChatRoom",
      id: string,
      mentorID: string,
      menteeID: string,
      name?: string | null,
      mentorshipID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSessionRequestQueryVariables = {
  id: string,
};

export type GetSessionRequestQuery = {
  getSessionRequest?:  {
    __typename: "SessionRequest",
    id: string,
    proposedCost?: string | null,
    note?: string | null,
    duration?: number | null,
    proposedSessionTime?: string | null,
    menteeID: string,
    status?: SessionRequestStatus | null,
    initiatedBy?: string | null,
    sessionID?: string | null,
    sessionTitle?: string | null,
    mentorshipID?: string | null,
    mentorID: string,
    sessionDescription?: string | null,
    mentorServicesID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSessionRequestsQueryVariables = {
  filter?: ModelSessionRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSessionRequestsQuery = {
  listSessionRequests?:  {
    __typename: "ModelSessionRequestConnection",
    items:  Array< {
      __typename: "SessionRequest",
      id: string,
      proposedCost?: string | null,
      note?: string | null,
      duration?: number | null,
      proposedSessionTime?: string | null,
      menteeID: string,
      status?: SessionRequestStatus | null,
      initiatedBy?: string | null,
      sessionID?: string | null,
      sessionTitle?: string | null,
      mentorshipID?: string | null,
      mentorID: string,
      sessionDescription?: string | null,
      mentorServicesID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SessionRequestsByMenteeIDQueryVariables = {
  menteeID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSessionRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SessionRequestsByMenteeIDQuery = {
  sessionRequestsByMenteeID?:  {
    __typename: "ModelSessionRequestConnection",
    items:  Array< {
      __typename: "SessionRequest",
      id: string,
      proposedCost?: string | null,
      note?: string | null,
      duration?: number | null,
      proposedSessionTime?: string | null,
      menteeID: string,
      status?: SessionRequestStatus | null,
      initiatedBy?: string | null,
      sessionID?: string | null,
      sessionTitle?: string | null,
      mentorshipID?: string | null,
      mentorID: string,
      sessionDescription?: string | null,
      mentorServicesID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SessionRequestsByMentorIDQueryVariables = {
  mentorID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSessionRequestFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SessionRequestsByMentorIDQuery = {
  sessionRequestsByMentorID?:  {
    __typename: "ModelSessionRequestConnection",
    items:  Array< {
      __typename: "SessionRequest",
      id: string,
      proposedCost?: string | null,
      note?: string | null,
      duration?: number | null,
      proposedSessionTime?: string | null,
      menteeID: string,
      status?: SessionRequestStatus | null,
      initiatedBy?: string | null,
      sessionID?: string | null,
      sessionTitle?: string | null,
      mentorshipID?: string | null,
      mentorID: string,
      sessionDescription?: string | null,
      mentorServicesID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMessagesQueryVariables = {
  id: string,
};

export type GetMessagesQuery = {
  getMessages?:  {
    __typename: "Messages",
    id: string,
    content?: string | null,
    username?: string | null,
    userRole?: string | null,
    chatroomID: string,
    senderId: string,
    timestamp?: string | null,
    imageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessagesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessagesConnection",
    items:  Array< {
      __typename: "Messages",
      id: string,
      content?: string | null,
      username?: string | null,
      userRole?: string | null,
      chatroomID: string,
      senderId: string,
      timestamp?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MessagesByChatroomIDQueryVariables = {
  chatroomID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessagesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByChatroomIDQuery = {
  messagesByChatroomID?:  {
    __typename: "ModelMessagesConnection",
    items:  Array< {
      __typename: "Messages",
      id: string,
      content?: string | null,
      username?: string | null,
      userRole?: string | null,
      chatroomID: string,
      senderId: string,
      timestamp?: string | null,
      imageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetNotificationQueryVariables = {
  id: string,
};

export type GetNotificationQuery = {
  getNotification?:  {
    __typename: "Notification",
    id: string,
    mentorID?: string | null,
    menteeID?: string | null,
    title?: string | null,
    body?: string | null,
    type?: string | null,
    fcmToken?: string | null,
    isSent?: boolean | null,
    isRead?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNotificationsQueryVariables = {
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotificationsQuery = {
  listNotifications?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      mentorID?: string | null,
      menteeID?: string | null,
      title?: string | null,
      body?: string | null,
      type?: string | null,
      fcmToken?: string | null,
      isSent?: boolean | null,
      isRead?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NotificationsByMentorIDQueryVariables = {
  mentorID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotificationsByMentorIDQuery = {
  notificationsByMentorID?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      mentorID?: string | null,
      menteeID?: string | null,
      title?: string | null,
      body?: string | null,
      type?: string | null,
      fcmToken?: string | null,
      isSent?: boolean | null,
      isRead?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NotificationsByMenteeIDQueryVariables = {
  menteeID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotificationsByMenteeIDQuery = {
  notificationsByMenteeID?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      mentorID?: string | null,
      menteeID?: string | null,
      title?: string | null,
      body?: string | null,
      type?: string | null,
      fcmToken?: string | null,
      isSent?: boolean | null,
      isRead?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSessionQueryVariables = {
  id: string,
};

export type GetSessionQuery = {
  getSession?:  {
    __typename: "Session",
    id: string,
    duration?: number | null,
    status?: Status | null,
    sessionDate?: string | null,
    menteeID: string,
    mentorID: string,
    cost?: string | null,
    meetingLink?: string | null,
    sessionRequestID: string,
    sessionTitle?: string | null,
    objectives?: Array< string | null > | null,
    Reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    mentorshipID?: string | null,
    sessionDescription?: string | null,
    mentorServicesID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSessionsQueryVariables = {
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSessionsQuery = {
  listSessions?:  {
    __typename: "ModelSessionConnection",
    items:  Array< {
      __typename: "Session",
      id: string,
      duration?: number | null,
      status?: Status | null,
      sessionDate?: string | null,
      menteeID: string,
      mentorID: string,
      cost?: string | null,
      meetingLink?: string | null,
      sessionRequestID: string,
      sessionTitle?: string | null,
      objectives?: Array< string | null > | null,
      mentorshipID?: string | null,
      sessionDescription?: string | null,
      mentorServicesID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SessionsByMenteeIDQueryVariables = {
  menteeID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SessionsByMenteeIDQuery = {
  sessionsByMenteeID?:  {
    __typename: "ModelSessionConnection",
    items:  Array< {
      __typename: "Session",
      id: string,
      duration?: number | null,
      status?: Status | null,
      sessionDate?: string | null,
      menteeID: string,
      mentorID: string,
      cost?: string | null,
      meetingLink?: string | null,
      sessionRequestID: string,
      sessionTitle?: string | null,
      objectives?: Array< string | null > | null,
      mentorshipID?: string | null,
      sessionDescription?: string | null,
      mentorServicesID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SessionsByMentorIDQueryVariables = {
  mentorID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSessionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SessionsByMentorIDQuery = {
  sessionsByMentorID?:  {
    __typename: "ModelSessionConnection",
    items:  Array< {
      __typename: "Session",
      id: string,
      duration?: number | null,
      status?: Status | null,
      sessionDate?: string | null,
      menteeID: string,
      mentorID: string,
      cost?: string | null,
      meetingLink?: string | null,
      sessionRequestID: string,
      sessionTitle?: string | null,
      objectives?: Array< string | null > | null,
      mentorshipID?: string | null,
      sessionDescription?: string | null,
      mentorServicesID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMentorQueryVariables = {
  id: string,
};

export type GetMentorQuery = {
  getMentor?:  {
    __typename: "Mentor",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    bio?: string | null,
    profilePictureUrl?: string | null,
    firebaseToken?: string | null,
    expertise?: Array< string | null > | null,
    yearsOfExperience?: number | null,
    hourlyRate?: number | null,
    Sessions?:  {
      __typename: "ModelSessionConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
    mentorId?: string | null,
    ChatRooms?:  {
      __typename: "ModelChatRoomConnection",
      nextToken?: string | null,
    } | null,
    summary?: string | null,
    linkedInUrl?: string | null,
    websiteUrl?: string | null,
    Mentorships?:  {
      __typename: "ModelMentorshipConnection",
      nextToken?: string | null,
    } | null,
    SessionRequests?:  {
      __typename: "ModelSessionRequestConnection",
      nextToken?: string | null,
    } | null,
    IntroductionRequests?:  {
      __typename: "ModelIntroductionRequestConnection",
      nextToken?: string | null,
    } | null,
    IntroductionSessions?:  {
      __typename: "ModelIntroductionSessionConnection",
      nextToken?: string | null,
    } | null,
    availability?: string | null,
    MentorServices?:  {
      __typename: "ModelMentorServicesConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMentorsQueryVariables = {
  filter?: ModelMentorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMentorsQuery = {
  listMentors?:  {
    __typename: "ModelMentorConnection",
    items:  Array< {
      __typename: "Mentor",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      bio?: string | null,
      profilePictureUrl?: string | null,
      firebaseToken?: string | null,
      expertise?: Array< string | null > | null,
      yearsOfExperience?: number | null,
      hourlyRate?: number | null,
      profileStatus?: ProfileStatus | null,
      mentorId?: string | null,
      summary?: string | null,
      linkedInUrl?: string | null,
      websiteUrl?: string | null,
      availability?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMenteeQueryVariables = {
  id: string,
};

export type GetMenteeQuery = {
  getMentee?:  {
    __typename: "Mentee",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    bio?: string | null,
    profilePictureUrl?: string | null,
    firebaseToken?: string | null,
    goals?: Array< string | null > | null,
    preferredMentorExperience?: number | null,
    Sessions?:  {
      __typename: "ModelSessionConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
    menteeId?: string | null,
    SessionRequests?:  {
      __typename: "ModelSessionRequestConnection",
      nextToken?: string | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelChatRoomConnection",
      nextToken?: string | null,
    } | null,
    summary?: string | null,
    linkedInUrl?: string | null,
    websiteUrl?: string | null,
    resumeUrl?: string | null,
    topics?: Array< string | null > | null,
    Mentorships?:  {
      __typename: "ModelMentorshipConnection",
      nextToken?: string | null,
    } | null,
    IntroductionRequests?:  {
      __typename: "ModelIntroductionRequestConnection",
      nextToken?: string | null,
    } | null,
    IntroductionSessions?:  {
      __typename: "ModelIntroductionSessionConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMenteesQueryVariables = {
  filter?: ModelMenteeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenteesQuery = {
  listMentees?:  {
    __typename: "ModelMenteeConnection",
    items:  Array< {
      __typename: "Mentee",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      bio?: string | null,
      profilePictureUrl?: string | null,
      firebaseToken?: string | null,
      goals?: Array< string | null > | null,
      preferredMentorExperience?: number | null,
      profileStatus?: ProfileStatus | null,
      menteeId?: string | null,
      summary?: string | null,
      linkedInUrl?: string | null,
      websiteUrl?: string | null,
      resumeUrl?: string | null,
      topics?: Array< string | null > | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMentorServicesSubscriptionVariables = {
  filter?: ModelSubscriptionMentorServicesFilterInput | null,
};

export type OnCreateMentorServicesSubscription = {
  onCreateMentorServices?:  {
    __typename: "MentorServices",
    id: string,
    title?: string | null,
    description?: string | null,
    cost?: string | null,
    isPaid?: boolean | null,
    mentorID: string,
    duration?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMentorServicesSubscriptionVariables = {
  filter?: ModelSubscriptionMentorServicesFilterInput | null,
};

export type OnUpdateMentorServicesSubscription = {
  onUpdateMentorServices?:  {
    __typename: "MentorServices",
    id: string,
    title?: string | null,
    description?: string | null,
    cost?: string | null,
    isPaid?: boolean | null,
    mentorID: string,
    duration?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMentorServicesSubscriptionVariables = {
  filter?: ModelSubscriptionMentorServicesFilterInput | null,
};

export type OnDeleteMentorServicesSubscription = {
  onDeleteMentorServices?:  {
    __typename: "MentorServices",
    id: string,
    title?: string | null,
    description?: string | null,
    cost?: string | null,
    isPaid?: boolean | null,
    mentorID: string,
    duration?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateIntroductionSessionSubscriptionVariables = {
  filter?: ModelSubscriptionIntroductionSessionFilterInput | null,
};

export type OnCreateIntroductionSessionSubscription = {
  onCreateIntroductionSession?:  {
    __typename: "IntroductionSession",
    id: string,
    duration?: string | null,
    sessionDate?: string | null,
    meetingLink?: string | null,
    mentorshipID?: string | null,
    sessionStatus?: MentorshipStatus | null,
    menteeID: string,
    mentorID: string,
    mentorName?: string | null,
    MenteeName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIntroductionSessionSubscriptionVariables = {
  filter?: ModelSubscriptionIntroductionSessionFilterInput | null,
};

export type OnUpdateIntroductionSessionSubscription = {
  onUpdateIntroductionSession?:  {
    __typename: "IntroductionSession",
    id: string,
    duration?: string | null,
    sessionDate?: string | null,
    meetingLink?: string | null,
    mentorshipID?: string | null,
    sessionStatus?: MentorshipStatus | null,
    menteeID: string,
    mentorID: string,
    mentorName?: string | null,
    MenteeName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIntroductionSessionSubscriptionVariables = {
  filter?: ModelSubscriptionIntroductionSessionFilterInput | null,
};

export type OnDeleteIntroductionSessionSubscription = {
  onDeleteIntroductionSession?:  {
    __typename: "IntroductionSession",
    id: string,
    duration?: string | null,
    sessionDate?: string | null,
    meetingLink?: string | null,
    mentorshipID?: string | null,
    sessionStatus?: MentorshipStatus | null,
    menteeID: string,
    mentorID: string,
    mentorName?: string | null,
    MenteeName?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateIntroductionRequestSubscriptionVariables = {
  filter?: ModelSubscriptionIntroductionRequestFilterInput | null,
};

export type OnCreateIntroductionRequestSubscription = {
  onCreateIntroductionRequest?:  {
    __typename: "IntroductionRequest",
    id: string,
    mentorID: string,
    menteeID: string,
    note?: string | null,
    title?: string | null,
    status?: MentorshipStatus | null,
    initiatedBy?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateIntroductionRequestSubscriptionVariables = {
  filter?: ModelSubscriptionIntroductionRequestFilterInput | null,
};

export type OnUpdateIntroductionRequestSubscription = {
  onUpdateIntroductionRequest?:  {
    __typename: "IntroductionRequest",
    id: string,
    mentorID: string,
    menteeID: string,
    note?: string | null,
    title?: string | null,
    status?: MentorshipStatus | null,
    initiatedBy?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteIntroductionRequestSubscriptionVariables = {
  filter?: ModelSubscriptionIntroductionRequestFilterInput | null,
};

export type OnDeleteIntroductionRequestSubscription = {
  onDeleteIntroductionRequest?:  {
    __typename: "IntroductionRequest",
    id: string,
    mentorID: string,
    menteeID: string,
    note?: string | null,
    title?: string | null,
    status?: MentorshipStatus | null,
    initiatedBy?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMentorshipSubscriptionVariables = {
  filter?: ModelSubscriptionMentorshipFilterInput | null,
};

export type OnCreateMentorshipSubscription = {
  onCreateMentorship?:  {
    __typename: "Mentorship",
    id: string,
    mentorID: string,
    menteeID: string,
    mentorshipStatus?: MentorshipStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMentorshipSubscriptionVariables = {
  filter?: ModelSubscriptionMentorshipFilterInput | null,
};

export type OnUpdateMentorshipSubscription = {
  onUpdateMentorship?:  {
    __typename: "Mentorship",
    id: string,
    mentorID: string,
    menteeID: string,
    mentorshipStatus?: MentorshipStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMentorshipSubscriptionVariables = {
  filter?: ModelSubscriptionMentorshipFilterInput | null,
};

export type OnDeleteMentorshipSubscription = {
  onDeleteMentorship?:  {
    __typename: "Mentorship",
    id: string,
    mentorID: string,
    menteeID: string,
    mentorshipStatus?: MentorshipStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    value?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    value?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    value?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnCreateReviewSubscription = {
  onCreateReview?:  {
    __typename: "Review",
    id: string,
    rating?: string | null,
    comment?: string | null,
    reviewerRole?: string | null,
    reviewerID?: string | null,
    reviewedID?: string | null,
    sessionID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnUpdateReviewSubscription = {
  onUpdateReview?:  {
    __typename: "Review",
    id: string,
    rating?: string | null,
    comment?: string | null,
    reviewerRole?: string | null,
    reviewerID?: string | null,
    reviewedID?: string | null,
    sessionID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReviewSubscriptionVariables = {
  filter?: ModelSubscriptionReviewFilterInput | null,
};

export type OnDeleteReviewSubscription = {
  onDeleteReview?:  {
    __typename: "Review",
    id: string,
    rating?: string | null,
    comment?: string | null,
    reviewerRole?: string | null,
    reviewerID?: string | null,
    reviewedID?: string | null,
    sessionID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    mentorID: string,
    menteeID: string,
    Messages?:  {
      __typename: "ModelMessagesConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    mentorshipID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    mentorID: string,
    menteeID: string,
    Messages?:  {
      __typename: "ModelMessagesConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    mentorshipID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatRoomSubscriptionVariables = {
  filter?: ModelSubscriptionChatRoomFilterInput | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    mentorID: string,
    menteeID: string,
    Messages?:  {
      __typename: "ModelMessagesConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    mentorshipID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSessionRequestSubscriptionVariables = {
  filter?: ModelSubscriptionSessionRequestFilterInput | null,
};

export type OnCreateSessionRequestSubscription = {
  onCreateSessionRequest?:  {
    __typename: "SessionRequest",
    id: string,
    proposedCost?: string | null,
    note?: string | null,
    duration?: number | null,
    proposedSessionTime?: string | null,
    menteeID: string,
    status?: SessionRequestStatus | null,
    initiatedBy?: string | null,
    sessionID?: string | null,
    sessionTitle?: string | null,
    mentorshipID?: string | null,
    mentorID: string,
    sessionDescription?: string | null,
    mentorServicesID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSessionRequestSubscriptionVariables = {
  filter?: ModelSubscriptionSessionRequestFilterInput | null,
};

export type OnUpdateSessionRequestSubscription = {
  onUpdateSessionRequest?:  {
    __typename: "SessionRequest",
    id: string,
    proposedCost?: string | null,
    note?: string | null,
    duration?: number | null,
    proposedSessionTime?: string | null,
    menteeID: string,
    status?: SessionRequestStatus | null,
    initiatedBy?: string | null,
    sessionID?: string | null,
    sessionTitle?: string | null,
    mentorshipID?: string | null,
    mentorID: string,
    sessionDescription?: string | null,
    mentorServicesID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSessionRequestSubscriptionVariables = {
  filter?: ModelSubscriptionSessionRequestFilterInput | null,
};

export type OnDeleteSessionRequestSubscription = {
  onDeleteSessionRequest?:  {
    __typename: "SessionRequest",
    id: string,
    proposedCost?: string | null,
    note?: string | null,
    duration?: number | null,
    proposedSessionTime?: string | null,
    menteeID: string,
    status?: SessionRequestStatus | null,
    initiatedBy?: string | null,
    sessionID?: string | null,
    sessionTitle?: string | null,
    mentorshipID?: string | null,
    mentorID: string,
    sessionDescription?: string | null,
    mentorServicesID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessagesSubscriptionVariables = {
  filter?: ModelSubscriptionMessagesFilterInput | null,
};

export type OnCreateMessagesSubscription = {
  onCreateMessages?:  {
    __typename: "Messages",
    id: string,
    content?: string | null,
    username?: string | null,
    userRole?: string | null,
    chatroomID: string,
    senderId: string,
    timestamp?: string | null,
    imageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMessagesSubscriptionVariables = {
  filter?: ModelSubscriptionMessagesFilterInput | null,
};

export type OnUpdateMessagesSubscription = {
  onUpdateMessages?:  {
    __typename: "Messages",
    id: string,
    content?: string | null,
    username?: string | null,
    userRole?: string | null,
    chatroomID: string,
    senderId: string,
    timestamp?: string | null,
    imageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMessagesSubscriptionVariables = {
  filter?: ModelSubscriptionMessagesFilterInput | null,
};

export type OnDeleteMessagesSubscription = {
  onDeleteMessages?:  {
    __typename: "Messages",
    id: string,
    content?: string | null,
    username?: string | null,
    userRole?: string | null,
    chatroomID: string,
    senderId: string,
    timestamp?: string | null,
    imageUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnCreateNotificationSubscription = {
  onCreateNotification?:  {
    __typename: "Notification",
    id: string,
    mentorID?: string | null,
    menteeID?: string | null,
    title?: string | null,
    body?: string | null,
    type?: string | null,
    fcmToken?: string | null,
    isSent?: boolean | null,
    isRead?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnUpdateNotificationSubscription = {
  onUpdateNotification?:  {
    __typename: "Notification",
    id: string,
    mentorID?: string | null,
    menteeID?: string | null,
    title?: string | null,
    body?: string | null,
    type?: string | null,
    fcmToken?: string | null,
    isSent?: boolean | null,
    isRead?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionNotificationFilterInput | null,
};

export type OnDeleteNotificationSubscription = {
  onDeleteNotification?:  {
    __typename: "Notification",
    id: string,
    mentorID?: string | null,
    menteeID?: string | null,
    title?: string | null,
    body?: string | null,
    type?: string | null,
    fcmToken?: string | null,
    isSent?: boolean | null,
    isRead?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSessionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionFilterInput | null,
};

export type OnCreateSessionSubscription = {
  onCreateSession?:  {
    __typename: "Session",
    id: string,
    duration?: number | null,
    status?: Status | null,
    sessionDate?: string | null,
    menteeID: string,
    mentorID: string,
    cost?: string | null,
    meetingLink?: string | null,
    sessionRequestID: string,
    sessionTitle?: string | null,
    objectives?: Array< string | null > | null,
    Reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    mentorshipID?: string | null,
    sessionDescription?: string | null,
    mentorServicesID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSessionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionFilterInput | null,
};

export type OnUpdateSessionSubscription = {
  onUpdateSession?:  {
    __typename: "Session",
    id: string,
    duration?: number | null,
    status?: Status | null,
    sessionDate?: string | null,
    menteeID: string,
    mentorID: string,
    cost?: string | null,
    meetingLink?: string | null,
    sessionRequestID: string,
    sessionTitle?: string | null,
    objectives?: Array< string | null > | null,
    Reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    mentorshipID?: string | null,
    sessionDescription?: string | null,
    mentorServicesID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSessionSubscriptionVariables = {
  filter?: ModelSubscriptionSessionFilterInput | null,
};

export type OnDeleteSessionSubscription = {
  onDeleteSession?:  {
    __typename: "Session",
    id: string,
    duration?: number | null,
    status?: Status | null,
    sessionDate?: string | null,
    menteeID: string,
    mentorID: string,
    cost?: string | null,
    meetingLink?: string | null,
    sessionRequestID: string,
    sessionTitle?: string | null,
    objectives?: Array< string | null > | null,
    Reviews?:  {
      __typename: "ModelReviewConnection",
      nextToken?: string | null,
    } | null,
    mentorshipID?: string | null,
    sessionDescription?: string | null,
    mentorServicesID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMentorSubscriptionVariables = {
  filter?: ModelSubscriptionMentorFilterInput | null,
};

export type OnCreateMentorSubscription = {
  onCreateMentor?:  {
    __typename: "Mentor",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    bio?: string | null,
    profilePictureUrl?: string | null,
    firebaseToken?: string | null,
    expertise?: Array< string | null > | null,
    yearsOfExperience?: number | null,
    hourlyRate?: number | null,
    Sessions?:  {
      __typename: "ModelSessionConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
    mentorId?: string | null,
    ChatRooms?:  {
      __typename: "ModelChatRoomConnection",
      nextToken?: string | null,
    } | null,
    summary?: string | null,
    linkedInUrl?: string | null,
    websiteUrl?: string | null,
    Mentorships?:  {
      __typename: "ModelMentorshipConnection",
      nextToken?: string | null,
    } | null,
    SessionRequests?:  {
      __typename: "ModelSessionRequestConnection",
      nextToken?: string | null,
    } | null,
    IntroductionRequests?:  {
      __typename: "ModelIntroductionRequestConnection",
      nextToken?: string | null,
    } | null,
    IntroductionSessions?:  {
      __typename: "ModelIntroductionSessionConnection",
      nextToken?: string | null,
    } | null,
    availability?: string | null,
    MentorServices?:  {
      __typename: "ModelMentorServicesConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMentorSubscriptionVariables = {
  filter?: ModelSubscriptionMentorFilterInput | null,
};

export type OnUpdateMentorSubscription = {
  onUpdateMentor?:  {
    __typename: "Mentor",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    bio?: string | null,
    profilePictureUrl?: string | null,
    firebaseToken?: string | null,
    expertise?: Array< string | null > | null,
    yearsOfExperience?: number | null,
    hourlyRate?: number | null,
    Sessions?:  {
      __typename: "ModelSessionConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
    mentorId?: string | null,
    ChatRooms?:  {
      __typename: "ModelChatRoomConnection",
      nextToken?: string | null,
    } | null,
    summary?: string | null,
    linkedInUrl?: string | null,
    websiteUrl?: string | null,
    Mentorships?:  {
      __typename: "ModelMentorshipConnection",
      nextToken?: string | null,
    } | null,
    SessionRequests?:  {
      __typename: "ModelSessionRequestConnection",
      nextToken?: string | null,
    } | null,
    IntroductionRequests?:  {
      __typename: "ModelIntroductionRequestConnection",
      nextToken?: string | null,
    } | null,
    IntroductionSessions?:  {
      __typename: "ModelIntroductionSessionConnection",
      nextToken?: string | null,
    } | null,
    availability?: string | null,
    MentorServices?:  {
      __typename: "ModelMentorServicesConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMentorSubscriptionVariables = {
  filter?: ModelSubscriptionMentorFilterInput | null,
};

export type OnDeleteMentorSubscription = {
  onDeleteMentor?:  {
    __typename: "Mentor",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    bio?: string | null,
    profilePictureUrl?: string | null,
    firebaseToken?: string | null,
    expertise?: Array< string | null > | null,
    yearsOfExperience?: number | null,
    hourlyRate?: number | null,
    Sessions?:  {
      __typename: "ModelSessionConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
    mentorId?: string | null,
    ChatRooms?:  {
      __typename: "ModelChatRoomConnection",
      nextToken?: string | null,
    } | null,
    summary?: string | null,
    linkedInUrl?: string | null,
    websiteUrl?: string | null,
    Mentorships?:  {
      __typename: "ModelMentorshipConnection",
      nextToken?: string | null,
    } | null,
    SessionRequests?:  {
      __typename: "ModelSessionRequestConnection",
      nextToken?: string | null,
    } | null,
    IntroductionRequests?:  {
      __typename: "ModelIntroductionRequestConnection",
      nextToken?: string | null,
    } | null,
    IntroductionSessions?:  {
      __typename: "ModelIntroductionSessionConnection",
      nextToken?: string | null,
    } | null,
    availability?: string | null,
    MentorServices?:  {
      __typename: "ModelMentorServicesConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMenteeSubscriptionVariables = {
  filter?: ModelSubscriptionMenteeFilterInput | null,
};

export type OnCreateMenteeSubscription = {
  onCreateMentee?:  {
    __typename: "Mentee",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    bio?: string | null,
    profilePictureUrl?: string | null,
    firebaseToken?: string | null,
    goals?: Array< string | null > | null,
    preferredMentorExperience?: number | null,
    Sessions?:  {
      __typename: "ModelSessionConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
    menteeId?: string | null,
    SessionRequests?:  {
      __typename: "ModelSessionRequestConnection",
      nextToken?: string | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelChatRoomConnection",
      nextToken?: string | null,
    } | null,
    summary?: string | null,
    linkedInUrl?: string | null,
    websiteUrl?: string | null,
    resumeUrl?: string | null,
    topics?: Array< string | null > | null,
    Mentorships?:  {
      __typename: "ModelMentorshipConnection",
      nextToken?: string | null,
    } | null,
    IntroductionRequests?:  {
      __typename: "ModelIntroductionRequestConnection",
      nextToken?: string | null,
    } | null,
    IntroductionSessions?:  {
      __typename: "ModelIntroductionSessionConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMenteeSubscriptionVariables = {
  filter?: ModelSubscriptionMenteeFilterInput | null,
};

export type OnUpdateMenteeSubscription = {
  onUpdateMentee?:  {
    __typename: "Mentee",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    bio?: string | null,
    profilePictureUrl?: string | null,
    firebaseToken?: string | null,
    goals?: Array< string | null > | null,
    preferredMentorExperience?: number | null,
    Sessions?:  {
      __typename: "ModelSessionConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
    menteeId?: string | null,
    SessionRequests?:  {
      __typename: "ModelSessionRequestConnection",
      nextToken?: string | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelChatRoomConnection",
      nextToken?: string | null,
    } | null,
    summary?: string | null,
    linkedInUrl?: string | null,
    websiteUrl?: string | null,
    resumeUrl?: string | null,
    topics?: Array< string | null > | null,
    Mentorships?:  {
      __typename: "ModelMentorshipConnection",
      nextToken?: string | null,
    } | null,
    IntroductionRequests?:  {
      __typename: "ModelIntroductionRequestConnection",
      nextToken?: string | null,
    } | null,
    IntroductionSessions?:  {
      __typename: "ModelIntroductionSessionConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMenteeSubscriptionVariables = {
  filter?: ModelSubscriptionMenteeFilterInput | null,
};

export type OnDeleteMenteeSubscription = {
  onDeleteMentee?:  {
    __typename: "Mentee",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    bio?: string | null,
    profilePictureUrl?: string | null,
    firebaseToken?: string | null,
    goals?: Array< string | null > | null,
    preferredMentorExperience?: number | null,
    Sessions?:  {
      __typename: "ModelSessionConnection",
      nextToken?: string | null,
    } | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: ProfileStatus | null,
    menteeId?: string | null,
    SessionRequests?:  {
      __typename: "ModelSessionRequestConnection",
      nextToken?: string | null,
    } | null,
    ChatRooms?:  {
      __typename: "ModelChatRoomConnection",
      nextToken?: string | null,
    } | null,
    summary?: string | null,
    linkedInUrl?: string | null,
    websiteUrl?: string | null,
    resumeUrl?: string | null,
    topics?: Array< string | null > | null,
    Mentorships?:  {
      __typename: "ModelMentorshipConnection",
      nextToken?: string | null,
    } | null,
    IntroductionRequests?:  {
      __typename: "ModelIntroductionRequestConnection",
      nextToken?: string | null,
    } | null,
    IntroductionSessions?:  {
      __typename: "ModelIntroductionSessionConnection",
      nextToken?: string | null,
    } | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
