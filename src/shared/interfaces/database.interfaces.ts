export interface IDatabase {
  all: <T>(query: string, params?: Array<string | number>) => Promise<T>
}