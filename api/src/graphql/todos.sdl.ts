export const schema = gql`
  type Todo {
    id: String!
    title: String!
    User: User
    userId: String
  }

  type Query {
    todos: [Todo!]! @skipAuth
    todo(id: String!): Todo @requireAuth
  }

  input CreateTodoInput {
    title: String!
    userId: String
  }

  input UpdateTodoInput {
    title: String
    userId: String
  }

  type Mutation {
    createTodo(input: CreateTodoInput!): Todo! @requireAuth
    updateTodo(id: String!, input: UpdateTodoInput!): Todo! @requireAuth
    deleteTodo(id: String!): Todo! @requireAuth
  }
`
