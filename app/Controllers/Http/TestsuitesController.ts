// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Testsuite from '../../Models/Testsuite'
import TestsuiteValidator from '../../Validators/TestsuiteValidator'
export default class TestsuitesController {
  public async index({ response }: HttpContextContract) {
    try {
      const res = await Testsuite.all()
      return response.status(200).send(res)
    } catch (error) {
      return response.status(400).send('error')
    }
  }
  public async show({ response, params }: HttpContextContract) {
    try {
      const id = await Testsuite.findOrFail(params.id)
      return response.status(200).send(id)
    } catch (error) {
      return response.status(400).send({message: 'bad id' })
    }
  }
  public async create({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(TestsuiteValidator)
      await Testsuite.create(payload)
      return response.status(201).send({ message: 'Données insérées avec succès' })
    } catch (error) {
      console.error(error)
      return response.status(400).send(error.messages)
    }
  }

  public async delete({ response, params }: HttpContextContract) {
    try {
      const id = await Testsuite.findOrFail(params.id)
      await id.delete()
      return response.status(200).send({ message: 'Données supprimer avec success' })
    } catch (error) {
      return response.status(400).send({message: 'bad id' })
    }
  }
}
