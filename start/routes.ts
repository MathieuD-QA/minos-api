/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for the majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('testcase', 'TestcasesController.index')
Route.post('testcase', 'TestcasesController.create')
Route.get('testcase/:id', 'TestcasesController.show')
Route.delete('testcase/:id', 'TestcasesController.delete')

Route.post('testplan','TestplansController.create')
Route.get('testplan','TestplansController.index')
Route.get('testplan/:id','TestplansController.show')
Route.delete('testplan/:id','TestplansController.delete')

Route.post('testsuite', 'TestsuitesController.create')
Route.get('testsuite', 'TestsuitesController.index')
Route.get('testsuite/:id', 'TestsuitesController.show')
Route.delete('testsuite/:id', 'TestsuitesController.delete')


Route.post('testrun', 'TestrunsController.create')
Route.get('testrun', 'TestrunsController.index')
Route.get('testrun/:id', 'TestrunsController.show')
Route.delete('testrun/:id', 'TestrunsController.delete')
