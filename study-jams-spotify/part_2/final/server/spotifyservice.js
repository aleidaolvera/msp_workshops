ServiceConfiguration.configurations.update(
  { "service": "spotify" },
  {
    $set: {
      "clientId": "YOUR-CLIENT-ID",
      "secret": "YOUR-CLIENT-SECRET",
    }
  },
  { upsert: true }
)
