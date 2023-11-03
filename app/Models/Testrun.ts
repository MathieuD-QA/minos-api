import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Testrun extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column({})
  public name: string
  @column({})
  public description: string
  @column({})
  public testcaseSlot: object
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
