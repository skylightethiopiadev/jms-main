
function ReadCase(req, res) {
    Case.find()
      .then((resources) => {
        res.status(200).json(resources); // Return all resources
      })
      .catch((error) => {
        res.status(500).json({ error }); // Return an error if something goes wrong
      });
  };

function ReadCaseById(req, res) {
    Case.findById(req.params.id)
      .then((resource) => {
        if (!resource) {
          res.status(404).json({ message: 'Resource not found' });
        } else {
          res.status(200).json(resource); // Return the requested resource
        }
      })
      .catch((error) => {
        res.status(500).json({ error }); // Return an error if something goes wrong
      });
  }

  function UpdateCAseById(req, res) {
    Case.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((resource) => {
        if (!resource) {
          res.status(404).json({ message: 'Resource not found' });
        } else {
          res.status(200).json(resource); // Return the updated resource
        }
      })
      .catch((error) => {
        res.status(500).json({ error }); // Return an error if something goes wrong
      });
  }


  function DeleteCaseById(req, res) {
    Case.findByIdAndDelete(req.params.id)
      .then((resource) => {
        if (!resource) {
          res.status(404).json({ message: 'Resource not found' });
        } else {
          res.status(200).json({ message: 'Resource deleted' }); // Return a message when resource is successfully deleted
        }
      })
      .catch((error) => {
        res.status(500).json({ error }); // Return an error if something goes wrong
      });
  }

  export {ReadCase,ReadCaseById,UpdateCAseById,DeleteCaseById}