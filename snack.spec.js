const { checkCoinInputs, checkSnackSelection, checkEnough } = require('./utils');

describe("Unit tests for validation coin input", () => {
  it("should return 760", () => {

    let actualInput = { '10c': '2', '20c': '2', '50c': '2', '$1': '2', '$2': '2' };
    coinInput = checkCoinInputs(actualInput);
    expect(coinInput).toBe(760);
  });

  it("should return err", () => {

    let actualInput = { '10c': '2', '20c': 's', '50c': '2', '$1': '2', '$2': '2' };
    coinInput = checkCoinInputs(actualInput);
    expect(coinInput).toBe('err');
  });

  it("should return 0", () => {

    let actualInput = { '10c': '0', '20c': '0', '50c': '0', '$1': '0', '$2': '0' };
    coinInput = checkCoinInputs(actualInput);
    expect(coinInput).toBe(0);
  });
});

describe("Unit tests for checking snack selection", () => {
  it("should return 1", () => {

    let actualInput = 3;
    snackInput = checkSnackSelection(actualInput);
    expect(snackInput).toBe(1);
  });

  it("should return 0", () => {

    let actualInput = 5;
    snackInput = checkSnackSelection(actualInput);
    expect(snackInput).toBe(0);
  });
});

describe("Unit tests for checking whether amount enough for snack", () => {
  it("should return 190", () => {

    let coinInput = 500;
    let snack = 2;
    snackInput = checkEnough(coinInput, snack);
    expect(snackInput).toBe(190);
  });

  it("should return err", () => {

    let coinInput = 200;
    let snack = 1;
    snackInput = checkEnough(coinInput, snack);
    expect(snackInput).toBe('err');
  });

  it("should return 0", () => {

    let coinInput = 200;
    let snack = 3;
    snackInput = checkEnough(coinInput, snack);
    expect(snackInput).toBe(0);
  });
});