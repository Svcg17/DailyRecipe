import Diet from '../models/diet';

/**
 * Middleware function for POST /api/diet
 * Adds new diet
 */
export async function postDiet(req, res) {
  const newDiet = new Diet({ 
    name: req.body.name,
  });
  await newDiet.save(err => {
    if(err) return res.status(400).json({ error: err.message });
    return res.status(200).json({ message: 'success' });
  });
}

/**
 * Middleware function for PUT /api/diet/:id
 * Edits specified diet
 */
export async function putDiet(req, res) {
  try {
    const updateDiet = await Diet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    await updateDiet.save();
    res.status(200).send({ updateDiet: updateDiet });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
  
}

/**
 * Middleware function for GET /api/diet
 * Retrieves all diet in database
 */
export function getAllDiet(req, res) {
  Diet.find({}, (err, diet) => {
    if (err) return res.status(404).json({ error: 'Diet not found' });
    res.status(200).json(diet);
  });
}

export function deleteDiet(req, res) {
  Diet.deleteOne({ _id: req.params.id }, (err, diet) => {
    if(err) return res.status(404).json({ error: 'Diet not found' });
    res.status(200).json({ message: `successfully deleted diet ${req.params.id}` });
  });
}
