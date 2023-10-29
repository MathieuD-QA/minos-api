// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Testcase from '../../Models/Testcase'

export default class TestcasesController {
  public async create({ request, response }: HttpContextContract) {
    const { name } = request.only([
      'name',
    ])
    await Testcase.create({name })
    return response.status(200).send({ message: 'Données insérées avec succès' })
  }
}
