import WeeklySelection from '../models/weeklySelection.js';

/**
 * Middleware function for POST /api/menu
 * Adds new weeklySelection
 */
export async function postWeeklySelection(req, res) {
  const newWeeklySelection = new WeeklySelection({
        recipes: req.body.recipes,
        plan: req.body.plan,
        startDate: req.body.startDate,
        endDate: req.body.endDate
    });
  await newWeeklySelection.save(err => {
    if(err) return res.status(400).json({ error: err.message });
    return res.status(200).json({ message: 'success' });
  });
}

/**
 * Middleware function for PUT /api/menu/:id
 * Edits specified weeklySelection
 */
export async function putweeklySelection(req, res) {
  try {
    const updateweeklySelection = await weeklySelection.findByIdAndUpdate(req.params.id, req.body, { new: true });
    await updateweeklySelection.save();
    res.status(200).send({ updatedweeklySelection: updateweeklySelection });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
  
}

/**
 * Middleware function for GET /api/menu
 * Retrieves all weeklySelections in database
 */
export function getAllWeeklySelections(req, res) {
  WeeklySelection.find({}, (err, weeklySelections) => {
    if (err) return res.status(404).json({ error: 'Menu not found' });
    res.status(200).json(weeklySelections);
  });
}

/**
 * Middleware function for GET /api/menu/:id
 * Retrieves the weeklySelection that has its id equal to the one given in
 * the request.
 */
export function getweeklySelectionByDate(req, res) {
  WeeklySelection.find({ startDate: req.params.startDate, endDate: req.params.endDate }, (err, weekly) => {
    if (err) return res.status(404).json({ error: 'No plans for the week yet' });
    res.status(200).json(weekly);
  });
}

export function deleteweeklySelection(req, res) {
  weeklySelection.deleteOne({ _id: req.params.id }, (err) => {
    if(err) return res.status(404).json({ error: 'weeklySelection not found' });
    res.status(200).json({ message: `successfully deleted weeklySelection ${req.params.id}` });
  });
}

export async function updateWeeklyCollection(req, res) {
  let weekly = req.body;
  try {
    for(let i=0;i<weekly.length;i++){
      if (weekly[i]._id){
        // put
        try {
          const updateWeeklyPlan = await WeeklySelection.findByIdAndUpdate(weekly[i]._id, weekly[i], { new: true });
          await updateWeeklyPlan.save();
        } catch (err) {
          console.log('asdf', err);
        }
      } else {
        // post
        try {
          const newWeeklyPlan = await new WeeklySelection(weekly[i]);
          await newWeeklyPlan.save();
        } catch (err) {
          console.log('erro', err);
        }
      }
    }
    res.status(200).send({ message: 'successfully updated weekly collection' });
  } catch (err) {
    res.status(400).send({ error: err });
  }
}

