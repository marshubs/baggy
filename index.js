const express = require('express');
const app = express();

const items = [
    {
        "name": "Java Bean",
        "level": 0,
        "exp": 11.6,
        "craftTime": "05:00:00",
        "energyCost": 2,
        "energyGiven": 0,
        "seedPrice": 1,
        "sellPrice": 0
      },
      {
        "name": "Popberry",
        "level": 0,
        "exp": 3.5,
        "craftTime": "00:01:00",
        "energyCost": 2,
        "energyGiven": 0.35,
        "seedPrice": 1,
        "sellPrice": 3
      },
      {
        "name": "Shorelime",
        "level": 0,
        "exp": 3.5,
        "craftTime": "00:01:00",
        "energyCost": 1.5,
        "energyGiven": 1.50,
        "seedPrice": 0,
        "sellPrice": 8
      },
      {
        "name": "Butterberry",
        "level": 2,
        "exp": 4,
        "craftTime": "00:20:00",
        "energyCost": 2,
        "energyGiven": 0.41,
        "seedPrice": 1,
        "sellPrice": 5
      },
      {
        "name": "Heartbeet",
        "level": 2,
        "exp": 4,
        "craftTime": "00:08:00",
        "energyCost": 2,
        "energyGiven": 0.35,
        "seedPrice": 0,
        "sellPrice": 5
      },
      {
        "name": "Clover",
        "level": 3,
        "exp": 3.5,
        "craftTime": "00:45:00",
        "energyCost": 3.5,
        "energyGiven": 0.36,
        "seedPrice": 3,
        "sellPrice": 6
      },
      {
        "name": "4 Leaf Clover",
        "level": 3,
        "exp": 280,
        "craftTime": "00:45:00",
        "energyCost": 3.5,
        "energyGiven": 27.58,
        "seedPrice": 3,
        "sellPrice": 300
      },
      {
        "name": "Grainbow",
        "level": 5,
        "exp": 5.4,
        "craftTime": "01:00:00",
        "energyCost": 2.5,
        "energyGiven": 0.57,
        "seedPrice": 3,
        "sellPrice": 8
      },
      {
        "name": "Grumpkin",
        "level": 8,
        "exp": 11.6,
        "craftTime": "03:00:00",
        "energyCost": 5.5,
        "energyGiven": 1.27,
        "seedPrice": 9,
        "sellPrice": 19
      },
      {
        "name": "Watermint",
        "level": 11,
        "exp": 14,
        "craftTime": "04:00:00",
        "energyCost": 6.5,
        "energyGiven": 1.76,
        "seedPrice": 12,
        "sellPrice": 24
      },
      {
        "name": "Scarrot",
        "level": 15,
        "exp": 14.6,
        "craftTime": "06:00:00",
        "energyCost": 6.5,
        "energyGiven": 1.76,
        "seedPrice": 15,
        "sellPrice": 26
      },
      {
        "name": "Astracactus",
        "level": 21,
        "exp": 20,
        "craftTime": "07:00:00",
        "energyCost": 10,
        "energyGiven": 2.56,
        "seedPrice": 18,
        "sellPrice": 35
      },
      {
        "name": "Hotato",
        "level": 25,
        "exp": 5,
        "craftTime": "05:00:00",
        "energyCost": 9,
        "energyGiven": 2.48,
        "seedPrice": 0,
        "sellPrice": 0
      },
      {
        "name": "Muckchuck",
        "level": 32,
        "exp": 4,
        "craftTime": "01:00:00",
        "energyCost": 7,
        "energyGiven": 3.50,
        "seedPrice": 36,
        "sellPrice": 49
      }
];

app.get('/farmseed', (req, res) => {
  res.json(items);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
