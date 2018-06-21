function Reporter(baseReporterDecorator) {
    baseReporterDecorator(this);

    var resultSet = {};

    this.onRunComplete = function (browsers, resultInfo) {
        this.write('\nCompleted\n');
    };

    this.specSuccess = function (browser, result) {
        var browser = browser.name;
        var suite = result.benchmark.suite;
        var name = result.benchmark.name;
        this.write('\n\n');
        this.write(name);
        this.write('\n');
        this.write('\nops/sec: ' + result.benchmark.hz);
        this.write('\nMargin of error: ' + result.benchmark.stats.moe);
        this.write('\nMean: ' + result.benchmark.stats.mean);
        this.write('\nDeviation: ' + result.benchmark.stats.deviation);
        this.write('\nVariance: ' + result.benchmark.stats.variance);
        this.write('\n');
    };
}

Reporter.$inject = ['baseReporterDecorator'];

module.exports = {
    'reporter:carto-benchmark': ['type', Reporter]
};
