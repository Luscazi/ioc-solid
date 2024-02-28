import { injectable } from "inversify"
import sqlite3 from "sqlite3"
import { IDatabase } from "../../shared/interfaces/database.interfaces"

@injectable()
export class Database implements IDatabase {
  private db: sqlite3.Database | null = null

  constructor(){
    this.initialize()
  }

  private initialize(): void {
    if (!this.db) {
      this.db = new sqlite3.Database('./db/database.db')
    }
  }

  async all<T>(query: string, params: any[] = []): Promise<T> {
    return new Promise((resolve, reject) => {
      this.db?.all(query, params, (error: Error | null, rows: T) =>  {
        if (error) {
          reject(error)
        } else {
          resolve(rows)
        }
      })
    })
  }
}