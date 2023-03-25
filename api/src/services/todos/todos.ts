import type {
  QueryResolvers,
  MutationResolvers,
  TodoRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const todos: QueryResolvers['todos'] = () => {
  return db.todo.findMany()
}

export const todo: QueryResolvers['todo'] = ({ id }) => {
  return db.todo.findUnique({
    where: { id },
  })
}

export const createTodo: MutationResolvers['createTodo'] = ({ input }) => {
  return db.todo.create({
    data: input,
  })
}

export const updateTodo: MutationResolvers['updateTodo'] = ({ id, input }) => {
  return db.todo.update({
    data: input,
    where: { id },
  })
}

export const deleteTodo: MutationResolvers['deleteTodo'] = ({ id }) => {
  return db.todo.delete({
    where: { id },
  })
}

export const Todo: TodoRelationResolvers = {
  User: (_obj, { root }) => {
    return db.todo.findUnique({ where: { id: root?.id } }).User()
  },
}
