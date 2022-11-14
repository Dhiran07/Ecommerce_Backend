const categoryController = require('../../controllers/category.controller')
const categoryService = require('../../services/category.services')
const {mockRequest, mockResponse} = require('./mocker');


const allCategoriesResponse = [
  {
    id: 1,
    name: "Electronics",
  },
  {
    id: 2,
    name: "Groceries",
  },
];



const categoryPayload = {
  name: "Fashion",
  description: "This is description for fashion",
};



test("when getCategories is called, it should return all the categories", async () => {
  const spy = jest
    .spyOn(categoryService, "getAllCategories")
    .mockReturnValue(allCategoriesResponse);
  const req = mockRequest();
  const res = mockResponse();
  const result = await categoryController.getCategories(req, res);
  expect(spy).toHaveBeenCalled();
  expect(result.json).toHaveBeenCalled();
  expect(result.json).toHaveBeenCalledWith({
    message: "Successfully fetched the categories",
    success: true,
    code: 200,
    data: allCategoriesResponse,
  });
});


test("when createCategory is called, it should return the category response", async () => {
  const spy = jest
    .spyOn(categoryService, "createNewCategory")
    .mockReturnValue(categoryPayload);
  const req = mockRequest();
  const res = mockResponse();
  const result = await categoryController.createCategory(req, res);
  expect(spy).toHaveBeenCalled();
  expect(result.json).toHaveBeenCalled();
  expect(result.json).toHaveBeenCalledWith({
    message: "Successfully created the category",
    success: true,
    code: 201,
    data: categoryPayload,
  });
});


test("when getCategoriesById is called, it should return the category response", async () => {
  const spy = jest
    .spyOn(categoryService, "getCategoriesById")
    .mockReturnValue(categoryPayload);
  const req = mockRequest();
  const res = mockResponse();
  const result = await categoryController.getCategoriesById(req, res);
  expect(spy).toHaveBeenCalled();
  expect(result.json).toHaveBeenCalled();
  expect(result.json).toHaveBeenCalledWith({
    message: "Successfully fetched the categories",
    success: true,
    code: 200,
    data: categoryPayload,
  });
});


test("when getCategoriesByName is called, it should return the category response", async () => {
  const spy = jest
    .spyOn(categoryService, "getCategoriesByName")
    .mockReturnValue(categoryPayload);
  const req = mockRequest();
  const res = mockResponse();
  const result = await categoryController.getCategoriesByName(req, res);
  expect(spy).toHaveBeenCalled();
  expect(result.json).toHaveBeenCalled();
  expect(result.json).toHaveBeenCalledWith({
    message: "Successfully fetched the categories",
    success: true,
    code: 200,
    data: categoryPayload,
  });
});


test("when updateCategory is called, it should return the category response", async () => {
  const spy = jest
    .spyOn(categoryService, "updateCategory")
    .mockReturnValue(categoryPayload);
  const req = mockRequest();
  const res = mockResponse();
  const result = await categoryController.updateCategory(req, res);
  expect(spy).toHaveBeenCalled();
  expect(result.json).toHaveBeenCalled();
  expect(result.json).toHaveBeenCalledWith({
    message: "Successfully updated the category",
    success: true,
    code: 201,
    data: categoryPayload,
  });
});


test("when deleteCategory is called, it should return the category response", async () => {
  const spy = jest
    .spyOn(categoryService, "deleteCategory")
    .mockReturnValue(categoryPayload);
  const req = mockRequest();
  const res = mockResponse();
  const result = await categoryController.deleteCategory(req, res);
  expect(spy).toHaveBeenCalled();
  expect(result.json).toHaveBeenCalled();
  expect(result.json).toHaveBeenCalledWith({
    message: "Successfully deleted the category",
    success: true,
    code: 200,
    data: categoryPayload,
  });
}); 
