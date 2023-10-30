import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TestcaseValidator from '../../Validators/TestcaseValidator'
import Testcase from '../../Models/Testcase'

export default class TestcasesController {
  public async create({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(TestcaseValidator)
      await Testcase.create(payload)
      return response.status(200).send({ message: 'Données insérées avec succès' })
    } catch (error) {
      console.error(error.messages)
      return response.status(400).send(error.messages)
      }
    }
  }
