import {Router, Response, Request} from 'express';
import {db, ObjectID} from '../bin/www';

const astronautsRouter: Router = Router();

astronautsRouter.get('/', (request: Request, response: Response) => {
  db.collection('astronauts').find({}).toArray(
    (err, docs) => response.json(docs)
  );
});

astronautsRouter.post('/', (request: Request, response: Response) =>
  db.collection('astronauts').insertOne(
    request.body,
    (err, doc) => response.status(201).json(doc.ops[0])
  )
);

astronautsRouter.get('/:id', (request: Request, response: Response) =>
  db.collection('astronauts').findOne(
    {_id: new ObjectID(request.params.id)},
    (err, doc) => response.status(200).json(doc)
  )
);

astronautsRouter.put('/:id', (request: Request, response: Response) => {
  delete request.body._id;

  db.collection('astronauts').updateOne(
    {_id: new ObjectID(request.params.id)},
    request.body,
    () => response.status(204).end()
  );
});

astronautsRouter.delete('/:id', (request: Request, response: Response) =>
  db.collection('astronauts').deleteOne(
    {_id: new ObjectID(request.params.id)},
    () => response.status(204).end()
  )
);

export {astronautsRouter};
