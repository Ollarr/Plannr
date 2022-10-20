const asyncHandler = require('express-async-handler ')


// @desc Get goal
// @route Get/api/goals
// @access Private
const getGoals = asyncHandler (async (req, res) => {
    res.status(200).json({ message: 'Get goals'})
})
 
// @route POST/api/goals
// @access Private
const setGoals = asyncHandle (async (req, res)=> {
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: 'Set goals'})
})

// @desc Update goal
// @route PUT/api/goals/:id
// @access Private
const updateGoals = asyncHandle (async ('/:id', (req, res)=> {
    res.status(200).json({ message: `Update goals ${req.params.id}`})
}))

// @desc Delete goal
// @route DELETE/api/goals/:id
// @access Private
const deleteGoals = asyncHandle (async ('/:id', (req, res)=> {
    res.status(200).json({ message: `Delete goals ${req.params.id}`})
}))

module.exports ={
 getGoals, setGoals, updateGoals, deleteGoals
}