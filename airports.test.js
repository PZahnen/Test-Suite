const { request, expect } = require("./config");

describe("GET /airports", function () {
  it("returns all airports, limited to 30 per page", async function () {
    const response = await request.get("/airports");

    expect(response.status).to.eql(200);
    expect(response.body.data.length).to.eql(30);
  });
});

describe("POST /airports/distance", function () {
  it("calculates the distance between two airports", async function () {
    const response = await request
      .post("/airports/distance")
      .send({ from: "KIX", to: "SFO" });

    expect(response.status).to.eql(200);

    const attributes = response.body.data.attributes;
    expect(attributes).to.include.keys("kilometers", "miles", "nautical_miles");
  });
});

// include.keys und to.eql etc. sind aus Chai, genau wie oben expect. request ist aus SuperTest.Mocca ist decribe und it. Test
