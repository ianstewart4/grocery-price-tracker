// @desc    Get trackers
// @route   GET /api/trackers
// @access  Private

const getTrackers = (req: Request, res: Response) => {
    res.json({ message: 'Winning!!!' })
}

// @desc    Set trackers
// @route   POST /api/trackers
// @access  Private

const setTracker = (req: Request, res: Response) => {
    res.json({ message: 'SETTING!!!' })
}

// @desc    Update trackers
// @route   PUT /api/trackers/:id
// @access  Private

const updateTracker = (req: Request, res: Response) => {
    res.status(200).json({ message: `Update tracker ${req.params.id}` })
}

// @desc    Delete trackers
// @route   DELETE /api/trackers/:id
// @access  Private

const deleteTracker = (req: Request, res: Response) => {
    res.status(200).json({ message: `Delete tracker ${req.params.id}` })
}

module.exports = {
    getTrackers,
    setTracker,
    updateTracker,
    deleteTracker,
}