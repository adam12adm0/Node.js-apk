const express = require("express")
const sqlite3 = require("sqlite3").verbose()
const path = require("path")

const app = express()
const port = 3000

// إعداد قاعدة البيانات
const db = new sqlite3.Database("./pythonapp.db")

// إعداد EJS كمحرك قوالب
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

// الملفات الثابتة
app.use(express.static("public"))
app.use("/codemirror", express.static(__dirname + "/node_modules/codemirror/"))

// تحليل البيانات المرسلة في الطلب
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// الصفحة الرئيسية
app.get("/", (req, res) => {
  res.render("index", { title: "تعلم بايثون" })
})

// صفحة الدرس
app.get("/lesson/:id", (req, res) => {
  const lessonId = req.params.id
  // هنا يمكنك استرجاع بيانات الدرس من قاعدة البيانات
  res.render("lesson", { lessonId, title: `الدرس ${lessonId}` })
})

// API لحفظ تقدم المستخدم
app.post("/api/progress", (req, res) => {
  const { userId, lessonId, progress } = req.body
  // هنا يمكنك حفظ التقدم في قاعدة البيانات
  res.json({ success: true })
})

// تشغيل الخادم
app.listen(port, () => {
  console.log(`التطبيق يعمل على المنفذ ${port}`)
})

