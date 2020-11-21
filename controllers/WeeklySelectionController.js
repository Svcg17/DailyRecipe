import WeeklySelection from '../models/weeklySelection';

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
export function getweeklySelection(req, res) {
  let weeklySelectionId = req.params.id;
  if (weeklySelectionId[0] === ':') weeklySelectionId = weeklySelectionId.slice(1);

  weeklySelection.findById(weeklySelectionId, (err, weeklySelection) => {
    if (err || !weeklySelection) return res.status(404).json({ error: 'weeklySelection not found' });
    res.status(200).json(weeklySelection);
  });
}

export function deleteweeklySelection(req, res) {
  weeklySelection.deleteOne({ _id: req.params.id }, (err) => {
    if(err) return res.status(404).json({ error: 'weeklySelection not found' });
    res.status(200).json({ message: `successfully deleted weeklySelection ${req.params.id}` });
  });
}
