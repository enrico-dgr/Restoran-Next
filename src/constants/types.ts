export type ENV = 'development' | 'production'

export type EnvLike<O> = Record<ENV, O>
