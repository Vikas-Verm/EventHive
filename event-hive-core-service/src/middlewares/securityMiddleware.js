// Helper function to recursively remove keys starting with '$' or containing '.'
// This prevents NoSQL Injection attacks.
const clean = (obj) => {
  if (obj instanceof Object) {
    for (const key in obj) {
      if (/^\$/.test(key) || key.includes(".")) {
        // Delete the dangerous key
        delete obj[key];
      } else {
        // Recursively clean nested objects
        clean(obj[key]);
      }
    }
  }
};

export const mongoSanitize = (req, res, next) => {
  // We mutate the objects in-place instead of reassigning them
  // This bypasses the "Cannot set property" error
  if (req.body) clean(req.body);
  if (req.query) clean(req.query);
  if (req.params) clean(req.params);

  next();
};
