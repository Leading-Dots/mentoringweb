/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMessagesInput = {
  id?: string | null,
};

export type ModelMessagesConditionInput = {
  and?: Array< ModelMessagesConditionInput | null > | null,
  or?: Array< ModelMessagesConditionInput | null > | null,
  not?: ModelMessagesConditionInput | null,
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

export type Messages = {
  __typename: "Messages",
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMessagesInput = {
  id: string,
};

export type DeleteMessagesInput = {
  id: string,
};

export type CreateNotificationInput = {
  id?: string | null,
  mentorID?: string | null,
  menteeID?: string | null,
};

export type ModelNotificationConditionInput = {
  mentorID?: ModelIDInput | null,
  menteeID?: ModelIDInput | null,
  and?: Array< ModelNotificationConditionInput | null > | null,
  or?: Array< ModelNotificationConditionInput | null > | null,
  not?: ModelNotificationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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

export type Notification = {
  __typename: "Notification",
  id: string,
  mentorID?: string | null,
  menteeID?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNotificationInput = {
  id: string,
  mentorID?: string | null,
  menteeID?: string | null,
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
  and?: Array< ModelSessionConditionInput | null > | null,
  or?: Array< ModelSessionConditionInput | null > | null,
  not?: ModelSessionConditionInput | null,
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
  createdAt: string,
  updatedAt: string,
};

export type UpdateSessionInput = {
  id: string,
  duration?: number | null,
  status?: Status | null,
  sessionDate?: string | null,
  menteeID?: string | null,
  mentorID?: string | null,
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
};

export enum ProfileStatus {
  PENDING = "PENDING",
  PUBLISHED = "PUBLISHED",
  REJECTED = "REJECTED",
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
  preferredMentorExperience?: string | null,
  profileStatus?: ProfileStatus | null,
  menteeId?: string | null,
};

export type ModelMenteeConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  profilePictureUrl?: ModelStringInput | null,
  firebaseToken?: ModelStringInput | null,
  goals?: ModelStringInput | null,
  preferredMentorExperience?: ModelStringInput | null,
  profileStatus?: ModelProfileStatusInput | null,
  menteeId?: ModelStringInput | null,
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
  preferredMentorExperience?: string | null,
  Sessions?: ModelSessionConnection | null,
  Notifications?: ModelNotificationConnection | null,
  profileStatus?: ProfileStatus | null,
  menteeId?: string | null,
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
  preferredMentorExperience?: string | null,
  profileStatus?: ProfileStatus | null,
  menteeId?: string | null,
};

export type DeleteMenteeInput = {
  id: string,
};

export type ModelMessagesFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMessagesFilterInput | null > | null,
  or?: Array< ModelMessagesFilterInput | null > | null,
  not?: ModelMessagesFilterInput | null,
};

export type ModelMessagesConnection = {
  __typename: "ModelMessagesConnection",
  items:  Array<Messages | null >,
  nextToken?: string | null,
};

export type ModelNotificationFilterInput = {
  id?: ModelIDInput | null,
  mentorID?: ModelIDInput | null,
  menteeID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelNotificationFilterInput | null > | null,
  or?: Array< ModelNotificationFilterInput | null > | null,
  not?: ModelNotificationFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSessionFilterInput = {
  id?: ModelIDInput | null,
  duration?: ModelIntInput | null,
  status?: ModelStatusInput | null,
  sessionDate?: ModelStringInput | null,
  menteeID?: ModelIDInput | null,
  mentorID?: ModelIDInput | null,
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
  preferredMentorExperience?: ModelStringInput | null,
  profileStatus?: ModelProfileStatusInput | null,
  menteeId?: ModelStringInput | null,
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

export type ModelSubscriptionMessagesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMessagesFilterInput | null > | null,
  or?: Array< ModelSubscriptionMessagesFilterInput | null > | null,
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

export type ModelSubscriptionNotificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  mentorID?: ModelSubscriptionIDInput | null,
  menteeID?: ModelSubscriptionIDInput | null,
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
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSessionFilterInput | null > | null,
  or?: Array< ModelSubscriptionSessionFilterInput | null > | null,
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
  preferredMentorExperience?: ModelSubscriptionStringInput | null,
  profileStatus?: ModelSubscriptionStringInput | null,
  menteeId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMenteeFilterInput | null > | null,
  or?: Array< ModelSubscriptionMenteeFilterInput | null > | null,
};

export type CreateMessagesMutationVariables = {
  input: CreateMessagesInput,
  condition?: ModelMessagesConditionInput | null,
};

export type CreateMessagesMutation = {
  createMessages?:  {
    __typename: "Messages",
    id: string,
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
    preferredMentorExperience?: string | null,
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
    preferredMentorExperience?: string | null,
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
    preferredMentorExperience?: string | null,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMessagesQueryVariables = {
  id: string,
};

export type GetMessagesQuery = {
  getMessages?:  {
    __typename: "Messages",
    id: string,
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
    preferredMentorExperience?: string | null,
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
      preferredMentorExperience?: string | null,
      profileStatus?: ProfileStatus | null,
      menteeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMessagesSubscriptionVariables = {
  filter?: ModelSubscriptionMessagesFilterInput | null,
};

export type OnCreateMessagesSubscription = {
  onCreateMessages?:  {
    __typename: "Messages",
    id: string,
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
    preferredMentorExperience?: string | null,
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
    preferredMentorExperience?: string | null,
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
    preferredMentorExperience?: string | null,
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
    createdAt: string,
    updatedAt: string,
  } | null,
};
