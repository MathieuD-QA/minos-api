import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TestcaseValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    description: schema.string(),
    type: schema.string(),
    status: schema.string(),
  })


  public messages: CustomMessages = {
    'name.required': 'Title is a required field',
    'description.required': 'Description is a required field',
    'type.required': 'type is a required field',
    'status.required': 'type is a required field',
  }
}
