const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectID } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();
const port = 3500;

app.use(bodyParser.json());
app.use(cors());

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useNewUrlParser: true });

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

// Create a new document
app.post('/api/documents', async (req, res) => {
  const db = client.db('cals-calc');
  const collection = db.collection('meals');
  const document = req.body;
  //console.log(document);
  try {
    const check = await collection.countDocuments({"meal_id": document.meal_id})
    if(check === 0) {
      const check2 = await collection.countDocuments({"meal_name": document.meal_name});
      if( check2 === 0 ) {
        const result = await collection.insertOne(document);
        res.send({ success: true, insertedId: result.insertedId, message: "meal added!"});
      } else {
        res.send({ success: false, message: "meal already exists!!"});
      }
    } else {
      res.send({ success: false, message: "meal_id already taken"});
    }
  } catch (err) {
    console.error('Error creating document:', err);
    res.status(500).send({ success: false, error: err.message });
  }
});

// Read documents
app.get('/api/documents', async (req, res) => {
  const db = client.db('cals-calc');
  const collection = db.collection('meals');

  try {
    const documents = await collection.find().toArray();
    res.send(JSON.stringify(documents));
  } catch (err) {
    console.error('Error reading documents:', err);
    res.status(500).send({ success: false, error: err.message });
  }
});

// Update a document
app.put('/api/documents/:id', async (req, res) => {
  const db = client.db('cals-calc');
  const collection = db.collection('meals');
  const id = new ObjectID(req.params.id);
  const update = { $set: req.body };

  try {
    const result = await collection.updateOne({ _id: id }, update);
    res.send({ success: true, modifiedCount: result.modifiedCount });
  } catch (err) {
    console.error('Error updating document:', err);
    res.status(500).send({ success: false, error: err.message });
  }
});

// Delete a document
app.delete('/api/documents/:id', async (req, res) => {
  const db = client.db('cals-calc');
  const collection = db.collection('meals');
  const id = new ObjectID(req.params.id);

  try {
    const result = await collection.deleteOne({ _id: id });
    res.send({ success: true, deletedCount: result.deletedCount });
  } catch (err) {
    console.error('Error deleting document:', err);
    res.status(500).send({ success: false, error: err.message });
  }
});

app.post('/api/log', async (req, res) => {
  const db = client.db('cals-calc');
  const collection = db.collection('log');
  const document = req.body;
  console.log(document);
  try {
    const check = await collection.countDocuments({"meal_id": document.meal_id})
    if(check === 0) {
      const check2 = await collection.countDocuments({"meal_name": document.meal_name});
      if( check2 === 0 ) {
        const result = await collection.insertOne(document);
        res.send({ success: true, insertedId: result.insertedId, message: "meal added!"});
      } else {
        res.send({ success: false, message: "meal already exists!!"});
      }
    } else {
      res.send({ success: false, message: "meal_id already taken"});
    }
  } catch (err) {
    console.error('Error creating document:', err);
    res.status(500).send({ success: false, error: err.message });
  }
});

app.get('/api/log', async (req, res) => {
  const db = client.db('cals-calc');
  const collection = db.collection('log');
  
  try {
    const documents = await collection.find({"datetime": {$lt: "2023-12-20T00:00"}}).toArray();
    res.send(JSON.stringify(documents));
  } catch (err) {
    console.error('Error reading documents:', err);
    res.status(500).send({ success: false, error: err.message });
  }
});

connectToMongoDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
