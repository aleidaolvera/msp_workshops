ServiceConfiguration.configurations.update(
  { "service": "spotify" },
  {
    $set: {
      "clientId": "YOUR-CLIENT-ID",
      "secret": "YOUR-SECRET",
    }
  },
  { upsert: true }
)
