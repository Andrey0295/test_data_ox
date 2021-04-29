const ghpages = require("gh-pages");

const publish = ghpages.publish(
  "dist",
  {
    repo: "https://Andrey0295.github.io/test_data_ox",
  },
  callback
);

publish();
