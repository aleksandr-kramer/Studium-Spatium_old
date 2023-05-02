const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploadwork/");
  },
  filename(req, file, cb) {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

// const fileFilter = (req, file, cb) => {
//   const ext = path.extname(file.originalname);
//   if (
//     ext !== ".pdf" &&
//     ext !== ".doc*" &&
//     ext !== ".zip" &&
//     ext !== ".rar" &&
//     ext !== ".7z" &&
//     ext !== ".gz"
//   ) {
//     return cb(null, false);
//   }
//   cb(null, true);
// };

module.exports = multer({ storage });
