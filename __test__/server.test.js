/*
    server.test.js is file used for unit testing
*/
const app = require("../app");
const request = require("supertest");

describe("addUser", () => {
    //test case for successfull user creation
  it("it returns status code 200 if name and email passed", async () => {
    const value = { name: "roopz", email: "roopz" };
    const res = await request(app).post("/addUser").send(value);
    expect(res.statusCode).toEqual(200);
  });
   // test case for failed user creation
  it("it returns status code 500 if name and email is not passed", async () => {
    const value = { name: "roopz", email: "roopz" };
    const res = await request(app).post("/addUser").send();
    expect(res.statusCode).toEqual(500);
    expect(res.body).toEqual({"message": "User validation failed: email: Path `email` is required., name: Please enter name"});
  });
});

   // test case for succefully fetching user details
describe("fetchUser", () => {
    it("it returns status code 200 if data fetched successfully", async () => {
      const res = await request(app).get("/fetchUser");
      expect(res.statusCode).toEqual(200);
    });
  });

   // test case for updating successfully
  describe("updateUser", () => {
    it("returns status code 200 if data is updated successfully", async () => {
      const userId = "6451f8f745a659bb1279d6e9"; // replace with a valid user ID
      const userData = { name: "Roopesh" }; // replace with the data to update the user with
      const res = await request(app).put(`/update/${userId}`).send(userData);
      expect(res.statusCode).toEqual(200);
    });
  });
  // test case for failed update
describe("updateUser", () => {
    it("returns status code 500 if data is not updated successfully", async () => {
      const userId = "6451f8f745a659bb1279d6e"; // replace with a non valid user ID
      const userData = { name: "Roopesh" }; // replace with the data to update the user with
      const res = await request(app).put(`/update/${userId}`).send(userData);
      expect(res.statusCode).toEqual(500);
    });
  });


