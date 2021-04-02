const express = require("express");
const app = express();
const expressip = require("express-ip");
const PORT = process.env.PORT || 4000;

app.use(expressip().getIpInfoMiddleware);
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
