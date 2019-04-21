import chartOptions from "@/views/Plans/PlanChartOptions";
describe("chart options", () => {
  it("formats the label", () => {
    expect(
      chartOptions.dataLabels.formatter("test", {
        w: {
          globals: {
            labels: ["label"]
          }
        },
        dataPointIndex: 0
      })
    ).toEqual("label:  test");
  });
});
