const opentelemetry = require("@opentelemetry/sdk-node");
const { ZipkinExporter } = require('@opentelemetry/exporter-zipkin')
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
export const exporter = new opentelemetry.NodeSDK(
  {
    traceExporter: new ZipkinExporter({
      url: 'http://localhost:9411/api/v2/spans',
    }),
    serviceName: 'feedService',
    instrumentations: [getNodeAutoInstrumentations()]
  });
  // exporter.start()