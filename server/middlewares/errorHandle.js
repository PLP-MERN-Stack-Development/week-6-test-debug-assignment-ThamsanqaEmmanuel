function errorHandler(err, req, res, next) {
  console.error(`[${new Date().toISOString()}]`, err);
  
  if (err.name === 'ValidationError') {
    return res.status(400).json({ 
      error: 'Validation Error',
      details: err.errors 
    });
  }
  
  res.status(500).json({ error: 'Internal Server Error' });
}

module.exports = errorHandler;