// Code generated by Prisma (prisma@1.17.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  application: (where?: ApplicationWhereInput) => Promise<boolean>;
  host: (where?: HostWhereInput) => Promise<boolean>;
  post: (where?: PostWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export interface Fragmentable {
  $fragment<T>(fragment: string | Object): T;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;
  $getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;

  /**
   * Queries
   */

  application: (where: ApplicationWhereUniqueInput) => Application;
  applications: (
    args?: {
      where?: ApplicationWhereInput;
      orderBy?: ApplicationOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => Promise<Array<ApplicationNode>>;
  applicationsConnection: (
    args?: {
      where?: ApplicationWhereInput;
      orderBy?: ApplicationOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => ApplicationConnection;
  host: (where: HostWhereUniqueInput) => Host;
  hosts: (
    args?: {
      where?: HostWhereInput;
      orderBy?: HostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => Promise<Array<HostNode>>;
  hostsConnection: (
    args?: {
      where?: HostWhereInput;
      orderBy?: HostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => HostConnection;
  post: (where: PostWhereUniqueInput) => Post;
  posts: (
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => Promise<Array<PostNode>>;
  postsConnection: (
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PostConnection;
  user: (where: UserWhereUniqueInput) => User;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => Promise<Array<UserNode>>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnection;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createApplication: (data: ApplicationCreateInput) => Application;
  updateApplication: (
    args: { data: ApplicationUpdateInput; where: ApplicationWhereUniqueInput }
  ) => Application;
  updateManyApplications: (
    args: { data: ApplicationUpdateInput; where?: ApplicationWhereInput }
  ) => BatchPayload;
  upsertApplication: (
    args: {
      where: ApplicationWhereUniqueInput;
      create: ApplicationCreateInput;
      update: ApplicationUpdateInput;
    }
  ) => Application;
  deleteApplication: (where: ApplicationWhereUniqueInput) => Application;
  deleteManyApplications: (where?: ApplicationWhereInput) => BatchPayload;
  createHost: (data: HostCreateInput) => Host;
  updateHost: (
    args: { data: HostUpdateInput; where: HostWhereUniqueInput }
  ) => Host;
  updateManyHosts: (
    args: { data: HostUpdateInput; where?: HostWhereInput }
  ) => BatchPayload;
  upsertHost: (
    args: {
      where: HostWhereUniqueInput;
      create: HostCreateInput;
      update: HostUpdateInput;
    }
  ) => Host;
  deleteHost: (where: HostWhereUniqueInput) => Host;
  deleteManyHosts: (where?: HostWhereInput) => BatchPayload;
  createPost: (data: PostCreateInput) => Post;
  updatePost: (
    args: { data: PostUpdateInput; where: PostWhereUniqueInput }
  ) => Post;
  updateManyPosts: (
    args: { data: PostUpdateInput; where?: PostWhereInput }
  ) => BatchPayload;
  upsertPost: (
    args: {
      where: PostWhereUniqueInput;
      create: PostCreateInput;
      update: PostUpdateInput;
    }
  ) => Post;
  deletePost: (where: PostWhereUniqueInput) => Post;
  deleteManyPosts: (where?: PostWhereInput) => BatchPayload;
  createUser: (data: UserCreateInput) => User;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => User;
  updateManyUsers: (
    args: { data: UserUpdateInput; where?: UserWhereInput }
  ) => BatchPayload;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => User;
  deleteUser: (where: UserWhereUniqueInput) => User;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayload;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  application: (
    where?: ApplicationSubscriptionWhereInput
  ) => ApplicationSubscriptionPayloadSubscription;
  host: (
    where?: HostSubscriptionWhereInput
  ) => HostSubscriptionPayloadSubscription;
  post: (
    where?: PostSubscriptionWhereInput
  ) => PostSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type HostOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "hostName_ASC"
  | "hostName_DESC"
  | "password_ASC"
  | "password_DESC"
  | "publicKey_ASC"
  | "publicKey_DESC"
  | "timeZone_ASC"
  | "timeZone_DESC"
  | "tunnelPort_ASC"
  | "tunnelPort_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type ApplicationOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "isSystem_ASC"
  | "isSystem_DESC"
  | "path_ASC"
  | "path_DESC"
  | "description_ASC"
  | "description_DESC"
  | "repository_ASC"
  | "repository_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type Role = "ADMIN" | "USER";

export type PostOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "isPublished_ASC"
  | "isPublished_DESC"
  | "title_ASC"
  | "title_DESC"
  | "text_ASC"
  | "text_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "login_ASC"
  | "login_DESC"
  | "name_ASC"
  | "name_DESC"
  | "password_ASC"
  | "password_DESC"
  | "role_ASC"
  | "role_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type PostWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface ApplicationUpdateInput {
  name?: String;
  isSystem?: Boolean;
  path?: String;
  description?: String;
  repository?: String;
}

export interface ApplicationWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  isSystem?: Boolean;
  isSystem_not?: Boolean;
  path?: String;
  path_not?: String;
  path_in?: String[] | String;
  path_not_in?: String[] | String;
  path_lt?: String;
  path_lte?: String;
  path_gt?: String;
  path_gte?: String;
  path_contains?: String;
  path_not_contains?: String;
  path_starts_with?: String;
  path_not_starts_with?: String;
  path_ends_with?: String;
  path_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  repository?: String;
  repository_not?: String;
  repository_in?: String[] | String;
  repository_not_in?: String[] | String;
  repository_lt?: String;
  repository_lte?: String;
  repository_gt?: String;
  repository_gte?: String;
  repository_contains?: String;
  repository_not_contains?: String;
  repository_starts_with?: String;
  repository_not_starts_with?: String;
  repository_ends_with?: String;
  repository_not_ends_with?: String;
  AND?: ApplicationWhereInput[] | ApplicationWhereInput;
  OR?: ApplicationWhereInput[] | ApplicationWhereInput;
  NOT?: ApplicationWhereInput[] | ApplicationWhereInput;
}

export type ApplicationWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  path?: String;
}>;

export interface PostWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  updatedAt?: DateTimeInput;
  updatedAt_not?: DateTimeInput;
  updatedAt_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_not_in?: DateTimeInput[] | DateTimeInput;
  updatedAt_lt?: DateTimeInput;
  updatedAt_lte?: DateTimeInput;
  updatedAt_gt?: DateTimeInput;
  updatedAt_gte?: DateTimeInput;
  isPublished?: Boolean;
  isPublished_not?: Boolean;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  text?: String;
  text_not?: String;
  text_in?: String[] | String;
  text_not_in?: String[] | String;
  text_lt?: String;
  text_lte?: String;
  text_gt?: String;
  text_gte?: String;
  text_contains?: String;
  text_not_contains?: String;
  text_starts_with?: String;
  text_not_starts_with?: String;
  text_ends_with?: String;
  text_not_ends_with?: String;
  author?: UserWhereInput;
  AND?: PostWhereInput[] | PostWhereInput;
  OR?: PostWhereInput[] | PostWhereInput;
  NOT?: PostWhereInput[] | PostWhereInput;
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutAuthorDataInput;
  create: PostCreateWithoutAuthorInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  login?: String;
  login_not?: String;
  login_in?: String[] | String;
  login_not_in?: String[] | String;
  login_lt?: String;
  login_lte?: String;
  login_gt?: String;
  login_gte?: String;
  login_contains?: String;
  login_not_contains?: String;
  login_starts_with?: String;
  login_not_starts_with?: String;
  login_ends_with?: String;
  login_not_ends_with?: String;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  role?: Role;
  role_not?: Role;
  role_in?: Role[] | Role;
  role_not_in?: Role[] | Role;
  posts_every?: PostWhereInput;
  posts_some?: PostWhereInput;
  posts_none?: PostWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutAuthorDataInput;
}

export interface HostSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: HostWhereInput;
  AND?: HostSubscriptionWhereInput[] | HostSubscriptionWhereInput;
  OR?: HostSubscriptionWhereInput[] | HostSubscriptionWhereInput;
  NOT?: HostSubscriptionWhereInput[] | HostSubscriptionWhereInput;
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput;
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
  update?:
    | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    | PostUpdateWithWhereUniqueWithoutAuthorInput;
  upsert?:
    | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    | PostUpsertWithWhereUniqueWithoutAuthorInput;
}

export interface UserUpdateOneRequiredWithoutPostsInput {
  create?: UserCreateWithoutPostsInput;
  update?: UserUpdateWithoutPostsDataInput;
  upsert?: UserUpsertWithoutPostsInput;
  connect?: UserWhereUniqueInput;
}

export interface ApplicationSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: ApplicationWhereInput;
  AND?: ApplicationSubscriptionWhereInput[] | ApplicationSubscriptionWhereInput;
  OR?: ApplicationSubscriptionWhereInput[] | ApplicationSubscriptionWhereInput;
  NOT?: ApplicationSubscriptionWhereInput[] | ApplicationSubscriptionWhereInput;
}

export interface PostUpdateInput {
  isPublished?: Boolean;
  title?: String;
  text?: String;
  author?: UserUpdateOneRequiredWithoutPostsInput;
}

export interface PostCreateWithoutAuthorInput {
  isPublished?: Boolean;
  title: String;
  text: String;
}

export interface UserCreateWithoutPostsInput {
  login: String;
  name: String;
  password: String;
  role?: Role;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  login?: String;
}>;

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput;
  create: UserCreateWithoutPostsInput;
}

export interface PostSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PostWhereInput;
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput;
}

export interface PostUpdateWithoutAuthorDataInput {
  isPublished?: Boolean;
  title?: String;
  text?: String;
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput;
  connect?: UserWhereUniqueInput;
}

export interface HostWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  hostName?: String;
  hostName_not?: String;
  hostName_in?: String[] | String;
  hostName_not_in?: String[] | String;
  hostName_lt?: String;
  hostName_lte?: String;
  hostName_gt?: String;
  hostName_gte?: String;
  hostName_contains?: String;
  hostName_not_contains?: String;
  hostName_starts_with?: String;
  hostName_not_starts_with?: String;
  hostName_ends_with?: String;
  hostName_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  publicKey?: String;
  publicKey_not?: String;
  publicKey_in?: String[] | String;
  publicKey_not_in?: String[] | String;
  publicKey_lt?: String;
  publicKey_lte?: String;
  publicKey_gt?: String;
  publicKey_gte?: String;
  publicKey_contains?: String;
  publicKey_not_contains?: String;
  publicKey_starts_with?: String;
  publicKey_not_starts_with?: String;
  publicKey_ends_with?: String;
  publicKey_not_ends_with?: String;
  timeZone?: String;
  timeZone_not?: String;
  timeZone_in?: String[] | String;
  timeZone_not_in?: String[] | String;
  timeZone_lt?: String;
  timeZone_lte?: String;
  timeZone_gt?: String;
  timeZone_gte?: String;
  timeZone_contains?: String;
  timeZone_not_contains?: String;
  timeZone_starts_with?: String;
  timeZone_not_starts_with?: String;
  timeZone_ends_with?: String;
  timeZone_not_ends_with?: String;
  tunnelPort?: Int;
  tunnelPort_not?: Int;
  tunnelPort_in?: Int[] | Int;
  tunnelPort_not_in?: Int[] | Int;
  tunnelPort_lt?: Int;
  tunnelPort_lte?: Int;
  tunnelPort_gt?: Int;
  tunnelPort_gte?: Int;
  AND?: HostWhereInput[] | HostWhereInput;
  OR?: HostWhereInput[] | HostWhereInput;
  NOT?: HostWhereInput[] | HostWhereInput;
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput;
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput;
}

export interface ApplicationCreateInput {
  name: String;
  isSystem?: Boolean;
  path?: String;
  description?: String;
  repository?: String;
}

export interface HostCreateInput {
  hostName: String;
  password: String;
  publicKey?: String;
  timeZone?: String;
  tunnelPort?: Int;
}

export interface HostUpdateInput {
  hostName?: String;
  password?: String;
  publicKey?: String;
  timeZone?: String;
  tunnelPort?: Int;
}

export interface PostCreateInput {
  isPublished?: Boolean;
  title: String;
  text: String;
  author: UserCreateOneWithoutPostsInput;
}

export interface UserCreateInput {
  login: String;
  name: String;
  password: String;
  role?: Role;
  posts?: PostCreateManyWithoutAuthorInput;
}

export interface UserUpdateInput {
  login?: String;
  name?: String;
  password?: String;
  role?: Role;
  posts?: PostUpdateManyWithoutAuthorInput;
}

export type HostWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  hostName?: String;
}>;

export interface UserUpdateWithoutPostsDataInput {
  login?: String;
  name?: String;
  password?: String;
  role?: Role;
}

export interface NodeNode {
  id: ID_Output;
}

export interface AggregateApplicationNode {
  count: Int;
}

export interface AggregateApplication
  extends Promise<AggregateApplicationNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateApplicationSubscription
  extends Promise<AsyncIterator<AggregateApplicationNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserPreviousValuesNode {
  id: ID_Output;
  login: String;
  name: String;
  password: String;
  role?: Role;
}

export interface UserPreviousValues
  extends Promise<UserPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  login: () => Promise<String>;
  name: () => Promise<String>;
  password: () => Promise<String>;
  role: () => Promise<Role>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  login: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  role: () => Promise<AsyncIterator<Role>>;
}

export interface ApplicationEdgeNode {
  cursor: String;
}

export interface ApplicationEdge
  extends Promise<ApplicationEdgeNode>,
    Fragmentable {
  node: <T = Application>() => T;
  cursor: () => Promise<String>;
}

export interface ApplicationEdgeSubscription
  extends Promise<AsyncIterator<ApplicationEdgeNode>>,
    Fragmentable {
  node: <T = ApplicationSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UserEdgeNode {
  cursor: String;
}

export interface UserEdge extends Promise<UserEdgeNode>, Fragmentable {
  node: <T = User>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdgeNode>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface ApplicationConnectionNode {}

export interface ApplicationConnection
  extends Promise<ApplicationConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<ApplicationEdgeNode>>>() => T;
  aggregate: <T = AggregateApplication>() => T;
}

export interface ApplicationConnectionSubscription
  extends Promise<AsyncIterator<ApplicationConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <
    T = Promise<AsyncIterator<Array<ApplicationEdgeSubscription>>>
  >() => T;
  aggregate: <T = AggregateApplicationSubscription>() => T;
}

export interface AggregatePostNode {
  count: Int;
}

export interface AggregatePost
  extends Promise<AggregatePostNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePostSubscription
  extends Promise<AsyncIterator<AggregatePostNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnectionNode {}

export interface UserConnection
  extends Promise<UserConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<UserEdgeNode>>>() => T;
  aggregate: <T = AggregateUser>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<UserEdgeSubscription>>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface ApplicationNode {
  id: ID_Output;
  name: String;
  isSystem?: Boolean;
  path?: String;
  description?: String;
  repository?: String;
}

export interface Application extends Promise<ApplicationNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  isSystem: () => Promise<Boolean>;
  path: () => Promise<String>;
  description: () => Promise<String>;
  repository: () => Promise<String>;
}

export interface ApplicationSubscription
  extends Promise<AsyncIterator<ApplicationNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  isSystem: () => Promise<AsyncIterator<Boolean>>;
  path: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  repository: () => Promise<AsyncIterator<String>>;
}

export interface PostEdgeNode {
  cursor: String;
}

export interface PostEdge extends Promise<PostEdgeNode>, Fragmentable {
  node: <T = Post>() => T;
  cursor: () => Promise<String>;
}

export interface PostEdgeSubscription
  extends Promise<AsyncIterator<PostEdgeNode>>,
    Fragmentable {
  node: <T = PostSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PostConnectionNode {}

export interface PostConnection
  extends Promise<PostConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<PostEdgeNode>>>() => T;
  aggregate: <T = AggregatePost>() => T;
}

export interface PostConnectionSubscription
  extends Promise<AsyncIterator<PostConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<PostEdgeSubscription>>>>() => T;
  aggregate: <T = AggregatePostSubscription>() => T;
}

export interface UserNode {
  id: ID_Output;
  login: String;
  name: String;
  password: String;
  role?: Role;
}

export interface User extends Promise<UserNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  login: () => Promise<String>;
  name: () => Promise<String>;
  password: () => Promise<String>;
  role: () => Promise<Role>;
  posts: <T = Promise<Array<PostNode>>>(
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<UserNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  login: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  role: () => Promise<AsyncIterator<Role>>;
  posts: <T = Promise<AsyncIterator<Array<PostSubscription>>>>(
    args?: {
      where?: PostWhereInput;
      orderBy?: PostOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface PostNode {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  isPublished: Boolean;
  title: String;
  text: String;
}

export interface Post extends Promise<PostNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  isPublished: () => Promise<Boolean>;
  title: () => Promise<String>;
  text: () => Promise<String>;
  author: <T = User>() => T;
}

export interface PostSubscription
  extends Promise<AsyncIterator<PostNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  isPublished: () => Promise<AsyncIterator<Boolean>>;
  title: () => Promise<AsyncIterator<String>>;
  text: () => Promise<AsyncIterator<String>>;
  author: <T = UserSubscription>() => T;
}

export interface ApplicationSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface ApplicationSubscriptionPayload
  extends Promise<ApplicationSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Application>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ApplicationPreviousValues>() => T;
}

export interface ApplicationSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ApplicationSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ApplicationSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ApplicationPreviousValuesSubscription>() => T;
}

export interface HostEdgeNode {
  cursor: String;
}

export interface HostEdge extends Promise<HostEdgeNode>, Fragmentable {
  node: <T = Host>() => T;
  cursor: () => Promise<String>;
}

export interface HostEdgeSubscription
  extends Promise<AsyncIterator<HostEdgeNode>>,
    Fragmentable {
  node: <T = HostSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface HostNode {
  id: ID_Output;
  hostName: String;
  password: String;
  publicKey?: String;
  timeZone: String;
  tunnelPort?: Int;
}

export interface Host extends Promise<HostNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  hostName: () => Promise<String>;
  password: () => Promise<String>;
  publicKey: () => Promise<String>;
  timeZone: () => Promise<String>;
  tunnelPort: () => Promise<Int>;
}

export interface HostSubscription
  extends Promise<AsyncIterator<HostNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  hostName: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  publicKey: () => Promise<AsyncIterator<String>>;
  timeZone: () => Promise<AsyncIterator<String>>;
  tunnelPort: () => Promise<AsyncIterator<Int>>;
}

export interface HostPreviousValuesNode {
  id: ID_Output;
  hostName: String;
  password: String;
  publicKey?: String;
  timeZone: String;
  tunnelPort?: Int;
}

export interface HostPreviousValues
  extends Promise<HostPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  hostName: () => Promise<String>;
  password: () => Promise<String>;
  publicKey: () => Promise<String>;
  timeZone: () => Promise<String>;
  tunnelPort: () => Promise<Int>;
}

export interface HostPreviousValuesSubscription
  extends Promise<AsyncIterator<HostPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  hostName: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  publicKey: () => Promise<AsyncIterator<String>>;
  timeZone: () => Promise<AsyncIterator<String>>;
  tunnelPort: () => Promise<AsyncIterator<Int>>;
}

export interface HostSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface HostSubscriptionPayload
  extends Promise<HostSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Host>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = HostPreviousValues>() => T;
}

export interface HostSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<HostSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = HostSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = HostPreviousValuesSubscription>() => T;
}

export interface PostSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface PostSubscriptionPayload
  extends Promise<PostSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Post>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PostPreviousValues>() => T;
}

export interface PostSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PostSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PostSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PostPreviousValuesSubscription>() => T;
}

export interface ApplicationPreviousValuesNode {
  id: ID_Output;
  name: String;
  isSystem?: Boolean;
  path?: String;
  description?: String;
  repository?: String;
}

export interface ApplicationPreviousValues
  extends Promise<ApplicationPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  isSystem: () => Promise<Boolean>;
  path: () => Promise<String>;
  description: () => Promise<String>;
  repository: () => Promise<String>;
}

export interface ApplicationPreviousValuesSubscription
  extends Promise<AsyncIterator<ApplicationPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  isSystem: () => Promise<AsyncIterator<Boolean>>;
  path: () => Promise<AsyncIterator<String>>;
  description: () => Promise<AsyncIterator<String>>;
  repository: () => Promise<AsyncIterator<String>>;
}

export interface PostPreviousValuesNode {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  isPublished: Boolean;
  title: String;
  text: String;
}

export interface PostPreviousValues
  extends Promise<PostPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  isPublished: () => Promise<Boolean>;
  title: () => Promise<String>;
  text: () => Promise<String>;
}

export interface PostPreviousValuesSubscription
  extends Promise<AsyncIterator<PostPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  isPublished: () => Promise<AsyncIterator<Boolean>>;
  title: () => Promise<AsyncIterator<String>>;
  text: () => Promise<AsyncIterator<String>>;
}

export interface HostConnectionNode {}

export interface HostConnection
  extends Promise<HostConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<HostEdgeNode>>>() => T;
  aggregate: <T = AggregateHost>() => T;
}

export interface HostConnectionSubscription
  extends Promise<AsyncIterator<HostConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<HostEdgeSubscription>>>>() => T;
  aggregate: <T = AggregateHostSubscription>() => T;
}

export interface AggregateHostNode {
  count: Int;
}

export interface AggregateHost
  extends Promise<AggregateHostNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateHostSubscription
  extends Promise<AsyncIterator<AggregateHostNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UserSubscriptionPayload
  extends Promise<UserSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = User>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValues>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface AggregateUserNode {
  count: Int;
}

export interface AggregateUser
  extends Promise<AggregateUserNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUserNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  endpoint: "https://eu1.prisma.sh/pilou-f64910/graphql-server-dummy/dev",
  secret: `${process.env["PRISMA_SECRET"]}`
});
export const prisma = new Prisma();
