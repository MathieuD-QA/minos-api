import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TestcaseValidator from '../../Validators/TestcaseValidator'
import Testcase from '../../Models/Testcase'

export default class TestcasesController {



  public async index({ response }: HttpContextContract) {
    try {
      const res = await Testcase.all()
      return response.status(200).send(res)
    } catch (error) {
      return response.status(400).send('error')
    }
  }
  public async show({ response, params }: HttpContextContract) {
    try {
      const id = await Testcase.findOrFail(params.id)
      return response.status(200).send(id)
    } catch (error) {
      return response.status(400).send({message: 'bad id' })
    }
  }
  public async create({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(TestcaseValidator)
      await Testcase.create(payload)
      return response.status(201).send({ message: 'Données insérées avec succès' })
    } catch (error) {
      console.error(error.messages)
      return response.status(400).send(error.messages)
      }
    }

  public async delete({ response, params }: HttpContextContract) {
    try {
      const id = await Testcase.findOrFail(params.id)
      await id.delete()
      return response.status(200).send({ message: 'Données supprimer avec success' })
    } catch (error) {
      return response.status(400).send({message: 'bad id' })
    }
  }
  }
