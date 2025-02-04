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
  userID: string,
};

export type ModelNotificationConditionInput = {
  userID?: ModelIDInput | null,
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
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNotificationInput = {
  id: string,
  userID?: string | null,
};

export type DeleteNotificationInput = {
  id: string,
};

export type CreateSessionInput = {
  id?: string | null,
  duration?: number | null,
  status?: Status | null,
  mentorId?: string | null,
  menteeId?: string | null,
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
  mentorId?: ModelStringInput | null,
  menteeId?: ModelStringInput | null,
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
  mentorId?: string | null,
  menteeId?: string | null,
  Users?: ModelSessionUserConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSessionUserConnection = {
  __typename: "ModelSessionUserConnection",
  items:  Array<SessionUser | null >,
  nextToken?: string | null,
};

export type SessionUser = {
  __typename: "SessionUser",
  id: string,
  sessionId: string,
  userId: string,
  session: Session,
  user: User,
  createdAt: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  passwordHash?: string | null,
  role?: Role | null,
  bio?: string | null,
  profilePictureUrl?: string | null,
  firebaseToken?: string | null,
  mentorDetails?: string | null,
  menteeDetails?: string | null,
  Notifications?: ModelNotificationConnection | null,
  sessions?: ModelSessionUserConnection | null,
  createdAt: string,
  updatedAt: string,
};

export enum Role {
  MENTOR = "MENTOR",
  MENTEE = "MENTEE",
}


export type ModelNotificationConnection = {
  __typename: "ModelNotificationConnection",
  items:  Array<Notification | null >,
  nextToken?: string | null,
};

export type UpdateSessionInput = {
  id: string,
  duration?: number | null,
  status?: Status | null,
  mentorId?: string | null,
  menteeId?: string | null,
};

export type DeleteSessionInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  passwordHash?: string | null,
  role?: Role | null,
  bio?: string | null,
  profilePictureUrl?: string | null,
  firebaseToken?: string | null,
  mentorDetails?: string | null,
  menteeDetails?: string | null,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  passwordHash?: ModelStringInput | null,
  role?: ModelRoleInput | null,
  bio?: ModelStringInput | null,
  profilePictureUrl?: ModelStringInput | null,
  firebaseToken?: ModelStringInput | null,
  mentorDetails?: ModelStringInput | null,
  menteeDetails?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelRoleInput = {
  eq?: Role | null,
  ne?: Role | null,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  passwordHash?: string | null,
  role?: Role | null,
  bio?: string | null,
  profilePictureUrl?: string | null,
  firebaseToken?: string | null,
  mentorDetails?: string | null,
  menteeDetails?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateSessionUserInput = {
  id?: string | null,
  sessionId: string,
  userId: string,
};

export type ModelSessionUserConditionInput = {
  sessionId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelSessionUserConditionInput | null > | null,
  or?: Array< ModelSessionUserConditionInput | null > | null,
  not?: ModelSessionUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type UpdateSessionUserInput = {
  id: string,
  sessionId?: string | null,
  userId?: string | null,
};

export type DeleteSessionUserInput = {
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
  userID?: ModelIDInput | null,
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
  mentorId?: ModelStringInput | null,
  menteeId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSessionFilterInput | null > | null,
  or?: Array< ModelSessionFilterInput | null > | null,
  not?: ModelSessionFilterInput | null,
};

export type ModelSessionConnection = {
  __typename: "ModelSessionConnection",
  items:  Array<Session | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  passwordHash?: ModelStringInput | null,
  role?: ModelRoleInput | null,
  bio?: ModelStringInput | null,
  profilePictureUrl?: ModelStringInput | null,
  firebaseToken?: ModelStringInput | null,
  mentorDetails?: ModelStringInput | null,
  menteeDetails?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSessionUserFilterInput = {
  id?: ModelIDInput | null,
  sessionId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSessionUserFilterInput | null > | null,
  or?: Array< ModelSessionUserFilterInput | null > | null,
  not?: ModelSessionUserFilterInput | null,
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
  userID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionNotificationFilterInput | null > | null,
};

export type ModelSubscriptionSessionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  duration?: ModelSubscriptionIntInput | null,
  status?: ModelSubscriptionStringInput | null,
  mentorId?: ModelSubscriptionStringInput | null,
  menteeId?: ModelSubscriptionStringInput | null,
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

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  passwordHash?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  profilePictureUrl?: ModelSubscriptionStringInput | null,
  firebaseToken?: ModelSubscriptionStringInput | null,
  mentorDetails?: ModelSubscriptionStringInput | null,
  menteeDetails?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionSessionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sessionId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSessionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionSessionUserFilterInput | null > | null,
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
    userID: string,
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
    userID: string,
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
    userID: string,
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
    mentorId?: string | null,
    menteeId?: string | null,
    Users?:  {
      __typename: "ModelSessionUserConnection",
      nextToken?: string | null,
    } | null,
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
    mentorId?: string | null,
    menteeId?: string | null,
    Users?:  {
      __typename: "ModelSessionUserConnection",
      nextToken?: string | null,
    } | null,
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
    mentorId?: string | null,
    menteeId?: string | null,
    Users?:  {
      __typename: "ModelSessionUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    passwordHash?: string | null,
    role?: Role | null,
    bio?: string | null,
    profilePictureUrl?: string | null,
    firebaseToken?: string | null,
    mentorDetails?: string | null,
    menteeDetails?: string | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    sessions?:  {
      __typename: "ModelSessionUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    passwordHash?: string | null,
    role?: Role | null,
    bio?: string | null,
    profilePictureUrl?: string | null,
    firebaseToken?: string | null,
    mentorDetails?: string | null,
    menteeDetails?: string | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    sessions?:  {
      __typename: "ModelSessionUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    passwordHash?: string | null,
    role?: Role | null,
    bio?: string | null,
    profilePictureUrl?: string | null,
    firebaseToken?: string | null,
    mentorDetails?: string | null,
    menteeDetails?: string | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    sessions?:  {
      __typename: "ModelSessionUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSessionUserMutationVariables = {
  input: CreateSessionUserInput,
  condition?: ModelSessionUserConditionInput | null,
};

export type CreateSessionUserMutation = {
  createSessionUser?:  {
    __typename: "SessionUser",
    id: string,
    sessionId: string,
    userId: string,
    session:  {
      __typename: "Session",
      id: string,
      duration?: number | null,
      status?: Status | null,
      mentorId?: string | null,
      menteeId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      passwordHash?: string | null,
      role?: Role | null,
      bio?: string | null,
      profilePictureUrl?: string | null,
      firebaseToken?: string | null,
      mentorDetails?: string | null,
      menteeDetails?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSessionUserMutationVariables = {
  input: UpdateSessionUserInput,
  condition?: ModelSessionUserConditionInput | null,
};

export type UpdateSessionUserMutation = {
  updateSessionUser?:  {
    __typename: "SessionUser",
    id: string,
    sessionId: string,
    userId: string,
    session:  {
      __typename: "Session",
      id: string,
      duration?: number | null,
      status?: Status | null,
      mentorId?: string | null,
      menteeId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      passwordHash?: string | null,
      role?: Role | null,
      bio?: string | null,
      profilePictureUrl?: string | null,
      firebaseToken?: string | null,
      mentorDetails?: string | null,
      menteeDetails?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSessionUserMutationVariables = {
  input: DeleteSessionUserInput,
  condition?: ModelSessionUserConditionInput | null,
};

export type DeleteSessionUserMutation = {
  deleteSessionUser?:  {
    __typename: "SessionUser",
    id: string,
    sessionId: string,
    userId: string,
    session:  {
      __typename: "Session",
      id: string,
      duration?: number | null,
      status?: Status | null,
      mentorId?: string | null,
      menteeId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      passwordHash?: string | null,
      role?: Role | null,
      bio?: string | null,
      profilePictureUrl?: string | null,
      firebaseToken?: string | null,
      mentorDetails?: string | null,
      menteeDetails?: string | null,
      createdAt: string,
      updatedAt: string,
    },
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
    userID: string,
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
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type NotificationsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotificationsByUserIDQuery = {
  notificationsByUserID?:  {
    __typename: "ModelNotificationConnection",
    items:  Array< {
      __typename: "Notification",
      id: string,
      userID: string,
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
    mentorId?: string | null,
    menteeId?: string | null,
    Users?:  {
      __typename: "ModelSessionUserConnection",
      nextToken?: string | null,
    } | null,
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
      mentorId?: string | null,
      menteeId?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    passwordHash?: string | null,
    role?: Role | null,
    bio?: string | null,
    profilePictureUrl?: string | null,
    firebaseToken?: string | null,
    mentorDetails?: string | null,
    menteeDetails?: string | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    sessions?:  {
      __typename: "ModelSessionUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      passwordHash?: string | null,
      role?: Role | null,
      bio?: string | null,
      profilePictureUrl?: string | null,
      firebaseToken?: string | null,
      mentorDetails?: string | null,
      menteeDetails?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSessionUserQueryVariables = {
  id: string,
};

export type GetSessionUserQuery = {
  getSessionUser?:  {
    __typename: "SessionUser",
    id: string,
    sessionId: string,
    userId: string,
    session:  {
      __typename: "Session",
      id: string,
      duration?: number | null,
      status?: Status | null,
      mentorId?: string | null,
      menteeId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      passwordHash?: string | null,
      role?: Role | null,
      bio?: string | null,
      profilePictureUrl?: string | null,
      firebaseToken?: string | null,
      mentorDetails?: string | null,
      menteeDetails?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSessionUsersQueryVariables = {
  filter?: ModelSessionUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSessionUsersQuery = {
  listSessionUsers?:  {
    __typename: "ModelSessionUserConnection",
    items:  Array< {
      __typename: "SessionUser",
      id: string,
      sessionId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SessionUsersBySessionIdQueryVariables = {
  sessionId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSessionUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SessionUsersBySessionIdQuery = {
  sessionUsersBySessionId?:  {
    __typename: "ModelSessionUserConnection",
    items:  Array< {
      __typename: "SessionUser",
      id: string,
      sessionId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SessionUsersByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSessionUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SessionUsersByUserIdQuery = {
  sessionUsersByUserId?:  {
    __typename: "ModelSessionUserConnection",
    items:  Array< {
      __typename: "SessionUser",
      id: string,
      sessionId: string,
      userId: string,
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
    userID: string,
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
    userID: string,
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
    userID: string,
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
    mentorId?: string | null,
    menteeId?: string | null,
    Users?:  {
      __typename: "ModelSessionUserConnection",
      nextToken?: string | null,
    } | null,
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
    mentorId?: string | null,
    menteeId?: string | null,
    Users?:  {
      __typename: "ModelSessionUserConnection",
      nextToken?: string | null,
    } | null,
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
    mentorId?: string | null,
    menteeId?: string | null,
    Users?:  {
      __typename: "ModelSessionUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    passwordHash?: string | null,
    role?: Role | null,
    bio?: string | null,
    profilePictureUrl?: string | null,
    firebaseToken?: string | null,
    mentorDetails?: string | null,
    menteeDetails?: string | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    sessions?:  {
      __typename: "ModelSessionUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    passwordHash?: string | null,
    role?: Role | null,
    bio?: string | null,
    profilePictureUrl?: string | null,
    firebaseToken?: string | null,
    mentorDetails?: string | null,
    menteeDetails?: string | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    sessions?:  {
      __typename: "ModelSessionUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    email?: string | null,
    passwordHash?: string | null,
    role?: Role | null,
    bio?: string | null,
    profilePictureUrl?: string | null,
    firebaseToken?: string | null,
    mentorDetails?: string | null,
    menteeDetails?: string | null,
    Notifications?:  {
      __typename: "ModelNotificationConnection",
      nextToken?: string | null,
    } | null,
    sessions?:  {
      __typename: "ModelSessionUserConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSessionUserSubscriptionVariables = {
  filter?: ModelSubscriptionSessionUserFilterInput | null,
};

export type OnCreateSessionUserSubscription = {
  onCreateSessionUser?:  {
    __typename: "SessionUser",
    id: string,
    sessionId: string,
    userId: string,
    session:  {
      __typename: "Session",
      id: string,
      duration?: number | null,
      status?: Status | null,
      mentorId?: string | null,
      menteeId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      passwordHash?: string | null,
      role?: Role | null,
      bio?: string | null,
      profilePictureUrl?: string | null,
      firebaseToken?: string | null,
      mentorDetails?: string | null,
      menteeDetails?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSessionUserSubscriptionVariables = {
  filter?: ModelSubscriptionSessionUserFilterInput | null,
};

export type OnUpdateSessionUserSubscription = {
  onUpdateSessionUser?:  {
    __typename: "SessionUser",
    id: string,
    sessionId: string,
    userId: string,
    session:  {
      __typename: "Session",
      id: string,
      duration?: number | null,
      status?: Status | null,
      mentorId?: string | null,
      menteeId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      passwordHash?: string | null,
      role?: Role | null,
      bio?: string | null,
      profilePictureUrl?: string | null,
      firebaseToken?: string | null,
      mentorDetails?: string | null,
      menteeDetails?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSessionUserSubscriptionVariables = {
  filter?: ModelSubscriptionSessionUserFilterInput | null,
};

export type OnDeleteSessionUserSubscription = {
  onDeleteSessionUser?:  {
    __typename: "SessionUser",
    id: string,
    sessionId: string,
    userId: string,
    session:  {
      __typename: "Session",
      id: string,
      duration?: number | null,
      status?: Status | null,
      mentorId?: string | null,
      menteeId?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      email?: string | null,
      passwordHash?: string | null,
      role?: Role | null,
      bio?: string | null,
      profilePictureUrl?: string | null,
      firebaseToken?: string | null,
      mentorDetails?: string | null,
      menteeDetails?: string | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
