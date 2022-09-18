import { GetUsersQuery } from "./graphql/generated"

// users and messages
export type Message = GetUsersQuery["users"][0]["messages"][0]

export type User = GetUsersQuery["users"][0]