import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
 models: {
   transaction: Model
 },

 seeds(server) {
    server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Freelancer de gestão',
            type: 'deposit',
            category: 'Dev',
            amount: 5000,
            createdAt: new Date('2021-03-03 10:00:00'),
          },
          {
            id: 2,
            title: 'Conta de luz',
            type: 'withdraw',
            category: 'contas a pagar',
            amount: 50,
            createdAt: new Date('2021-03-12 08:00:00'),
          }
        ] 
    })
 },
 

  routes(){
     this.namespace = 'api';

     this.get('/transactions', () => {
          return this.schema.all('transaction');  
        
     })

     this.post('/transactions', (schema, request) => {
         const data = JSON.parse(request.requestBody)

         return schema.create('transaction', data);
     })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
