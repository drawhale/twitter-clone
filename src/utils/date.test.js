import { elapsedTime } from "./date";

test("elapsedTime() test", () => {
  // mocking date 2022-11-01 12:00:000
  jest
    .spyOn(global.Date, "now")
    .mockImplementation(() => new Date("2022-11-01T12:10:02Z").valueOf());

  expect(elapsedTime("2022-11-01T12:10:00Z")).toBe("2 초");
  expect(elapsedTime("2022-11-01T12:05:00Z")).toBe("5 분");
  expect(elapsedTime("2022-11-01T04:05:00Z")).toBe("8 시간");
  expect(elapsedTime("2022-10-15T04:05:00Z")).toBe("10월 15일");
  expect(elapsedTime("2022-05-15T04:05:00Z")).toBe("5월 15일");
  expect(elapsedTime("2010-09-15T04:05:00Z")).toBe("9월 15일");
});
