const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.set("strictQuery", false);
const app = express();
const path = require("path");

app.use(cors());
app.use(express.json({ extended: true }));
app.use("/uploadwork", express.static(path.join(__dirname, "uploadwork")));

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://0.0.0.0:27017/studiumspatium";

// Импорт созданных роутов
const indexRoutes = require("./routes/index-routes");
const puaprelevanceoftheprogramRoutes = require("./routes/puaprelevanceoftheprogram-routes");
const supervisorRoutes = require("./routes/supervisor-routes");
const puapportraitofagraduateRoutes = require("./routes/puapportraitofagraduate-routes");
const puapwhoistheprogramforRoutes = require("./routes/puapwhoistheprogramfor-routes");
const puappreparingaportfolioRoutes = require("./routes/puappreparingaportfolio-routes");
const puapandschooleducationRoutes = require("./routes/puapandschooleducation-routes");
const puapnecessaryknowledgeRoutes = require("./routes/puapnecessaryknowledge-routes");
const puaprelevancefortheschoolRoutes = require("./routes/puaprelevancefortheschool-routes");
const puaprelevanceforteachersRoutes = require("./routes/puaprelevanceforteachers-routes");
const puapimplementationoptionsatschoolRoutes = require("./routes/puapimplementationoptionsatschool-routes");
const puapdurationoflearningRoutes = require("./routes/puapdurationoflearning-routes");
const puaponlineandofflinelearningRoutes = require("./routes/puaponlineandofflinelearning-routes");
const puaptheoreticaltrainingRoutes = require("./routes/puaptheoreticaltraining-routes");
const puappracticalworkRoutes = require("./routes/puappracticalwork-routes");
const puapcurriculumRoutes = require("./routes/puapcurriculum-routes");
const puapmoduleresearchRoutes = require("./routes/puapmoduleresearch-routes");
const puapmoduleprojectactivitiesRoutes = require("./routes/puapmoduleprojectactivities-routes");
const puapmoduleacademicwritingRoutes = require("./routes/puapmoduleacademicwriting-routes");
const puapmodulestatisticaldataprocessingRoutes = require("./routes/puapmodulestatisticaldataprocessing-routes");
const puaphowtoimplementtheprogramatschoolRoutes = require("./routes/puaphowtoimplementtheprogramatschool-routes");
const puapportfolioRoutes = require("./routes/puapportfolio-routes");
const puaphowtostartonlinelearningRoutes = require("./routes/puaphowtostartonlinelearning-routes");
const puaponlinelearningRoutes = require("./routes/puaponlinelearning-routes");
const puaprequestapresentationoftheprogramRoutes = require("./routes/puaprequestapresentationoftheprogram-routes");
const puaprequestforonlinelearningRoutes = require("./routes/puaprequestforonlinelearning-routes");
const personalsupervisorRoutes = require("./routes/personalsupervisor-routes");
const requestapersonalsupervisorRoutes = require("./routes/requestapersonalsupervisor-routes");
const coursesRoutes = require("./routes/courses-routes");
const listofcoursesRoutes = require("./routes/listofcourses-routes");
const courseenglishthroughscienceRoutes = require("./routes/courseenglishthroughscience-routes");
const requestacourseRoutes = require("./routes/requestacourse-routes");
const studentconsultationRoutes = require("./routes/studentconsultation-routes");
const consultationRoutes = require("./routes/consultation-routes");
const requestaconsultationRoutes = require("./routes/requestaconsultation-routes");
const seminarsRoutes = require("./routes/seminars-routes");
const listofseminarsRoutes = require("./routes/listofseminars-routes");
const seminarresearchactivitiesattheschoolRoutes = require("./routes/seminarresearchactivitiesattheschool-routes");
const seminarresearchandprojectworkattheschoolRoutes = require("./routes/seminarresearchandprojectworkattheschool-routes");
const seminarcriteriaassessmentRoutes = require("./routes/seminarcriteriaassessment-routes");
const seminarprojectactivitiesatschoolRoutes = require("./routes/seminarprojectactivitiesatschool-routes");
const seminarplagiarismandcitationRoutes = require("./routes/seminarplagiarismandcitation-routes");
const requestaseminarRoutes = require("./routes/requestaseminar-routes");
const servicesRoutes = require("./routes/services-routes");
const askaquestionRoutes = require("./routes/askaquestion-routes");
const contactRoutes = require("./routes/contact-routes");
const thanksRoutes = require("./routes/thanks-routes");
const errorRoutes = require("./routes/error-routes");
const authportfolioRoutes = require("./routes/authportfolio-routes");
const authschoolRoutes = require("./routes/authschool-routes");
const authstudentRoutes = require("./routes/authstudent-routes");

// Смотрим, как сделано у других программистов и, возможно,
// переписываем подключение к БД и запуск сервера с учётом
// асинхронной функции и операторов try и catch:

app.listen(5000, (err) => {
  err ? console.log(err) : console.log("Server OK!");
});

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connect to MongoDB"))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

// Для каждого отдельного роутера создаём отдельную строку app.use:
app.use("/api", indexRoutes);
app.use("/api", puaprelevanceoftheprogramRoutes);
app.use("/api", supervisorRoutes);
app.use("/api", puapportraitofagraduateRoutes);
app.use("/api", puapwhoistheprogramforRoutes);
app.use("/api", puappreparingaportfolioRoutes);
app.use("/api", puapandschooleducationRoutes);
app.use("/api", puapnecessaryknowledgeRoutes);
app.use("/api", puaprelevancefortheschoolRoutes);
app.use("/api", puaprelevanceforteachersRoutes);
app.use("/api", puapimplementationoptionsatschoolRoutes);
app.use("/api", puapdurationoflearningRoutes);
app.use("/api", puaponlineandofflinelearningRoutes);
app.use("/api", puaptheoreticaltrainingRoutes);
app.use("/api", puappracticalworkRoutes);
app.use("/api", puapcurriculumRoutes);
app.use("/api", puapmoduleresearchRoutes);
app.use("/api", puapmoduleprojectactivitiesRoutes);
app.use("/api", puapmoduleacademicwritingRoutes);
app.use("/api", puapmodulestatisticaldataprocessingRoutes);
app.use("/api", puaphowtoimplementtheprogramatschoolRoutes);
app.use("/api", puapportfolioRoutes);
app.use("/api", puaphowtostartonlinelearningRoutes);
app.use("/api", puaponlinelearningRoutes);
app.use("/api", puaprequestapresentationoftheprogramRoutes);
app.use("/api", puaprequestforonlinelearningRoutes);
app.use("/api", personalsupervisorRoutes);
app.use("/api", requestapersonalsupervisorRoutes);
app.use("/api", coursesRoutes);
app.use("/api", listofcoursesRoutes);
app.use("/api", courseenglishthroughscienceRoutes);
app.use("/api", requestacourseRoutes);
app.use("/api", studentconsultationRoutes);
app.use("/api", consultationRoutes);
app.use("/api", requestaconsultationRoutes);
app.use("/api", seminarsRoutes);
app.use("/api", listofseminarsRoutes);
app.use("/api", seminarresearchactivitiesattheschoolRoutes);
app.use("/api", seminarresearchandprojectworkattheschoolRoutes);
app.use("/api", seminarcriteriaassessmentRoutes);
app.use("/api", seminarprojectactivitiesatschoolRoutes);
app.use("/api", seminarplagiarismandcitationRoutes);
app.use("/api", requestaseminarRoutes);
app.use("/api", servicesRoutes);
app.use("/api", askaquestionRoutes);
app.use("/api", contactRoutes);
app.use("/api", thanksRoutes);
app.use("/api", errorRoutes);
app.use("/api", authportfolioRoutes);
app.use("/api", authschoolRoutes);
app.use("/api", authstudentRoutes);
