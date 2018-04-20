ServiceConfiguration.configurations.update(
  { "service": "spotify" },
  {
    $set: {
      "clientId": "f97e095faef241b3ad64e198cc6791f2",
      "secret": "aadb9885d35c44c8bb5982046c87b816",
    }
  },
  { upsert: true }
)
