const express = require("express");
const app = express();
const ipMiddleware = require("./ipMiddleware");
const PORT = process.env.PORT || 4000;
app.set("trust proxy", true);
app.use(ipMiddleware().getIpInfoMiddleware);
app.set("view engine", "ejs");
app.set("PORT", PORT);

app.get("/ip", function (req, res) {
  res.render("ip", { req });
  console.log(req.ipInfo);
});

app.listen(app.get("PORT"), function () {
  console.log(
    "Express started on http://localhost:" +
      app.get("PORT") +
      "; press Ctrl-C to terminate."
  );
});
