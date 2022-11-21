const whatIHaveDone = [
  {
    id: 1,
    title: "bizarro collective",
    imageLink: ["https://i.imgur.com/uGTSCeZm.jpg"],
    description: `bizarro is a fashion collective I started in 2020 to bring artists from all around the world together and give them a platform to represent their work. The artists were paid fairly for their art and 10% of profits from each sale were donated by bizarro to a charity of the artist's choice`,
  },
  {
    id: 2,
    title: "baking",
    imageLink: [
      "https://i.imgur.com/xF9DOF1m.jpg",
      "https://i.imgur.com/Ew9ejdQm.jpg",
    ],
    description: `I started baking bread late 2021. I wanted to find a way to make the best bread in the simplest way. I use honey, yeast, flour, salt, and water and the prep takes 10 minutes, rising 12hrs, and baking 37min`,
    components: [
      "1/2 tbsp honey",
      "1/2 tbsp yeast",
      "3 cups flour",
      "1/2 tbsp salt",
    ],
  },
  {
    id: 3,
    title: "bike lights",
    imageLink: ["https://i.imgur.com/0FIcv4j.gif"],
    description: `I wanted to do a project using the Pi-Pico and decided to make bike lights. These microcontrollers cost only $4 and are super easy to use. I coded everything in MicroPython`,
    components: [
      "WS2812B LED Strip ~ $8",
      "Pi-Pico Microcontroller ~ $4",
      "Clear Tubing - Ace Hardware ~ $3",
      "Velcro ~ $4",
      "Pi-Pico LiPo Shim ~ $9",
      "660mAh battery ~ $7",
    ],
  },
  {
    id: 4,
    title: "sharmanet",
    description: `This is a family website I built for my family to upload photos to. React Frontend w/ NodeJS + MongoDB backend running on Raspberry Pi with NGINX reverse proxy`,
  },
  {
    id: 5,
    title: "brain.aman.monster",
    description: `The brains (backend) for this website. It's running on the forever free tier of Google Compute Engine with NGINX reverse proxy`,
  },
  {
    id: 6,
    title: "aa_chat",
    description:
      "A chat app i built using socket.io. It runs on my local network and allows me and my partner to chat while we work.",
  },
  {
    id: 7,
    title: "Italian",
    description: `I started learning Italian during the summer of 2018 to pass time while I was searching for a job. Used the "Coffee Break Italian podcast. 4 years later (2022), and I can read and and understand ~90% common Italian. Can speak but slowly`,
  },
  {
    id: 8,
    title: "German grammar",
    description: `I wanted to understand the different German cases (nominative, accusative, genitive, and dative). This is how I understand/remember them:`,
    components: [
      "nominative: I think of the word nominated, so the main person/thing or, in a sentence, the one taking the action",
      "accusative: I think of accusing someone, so something is being done onto them. In a sentence, the object the action is being taken upon aka the direct object",
      "genitive: This is where Italian comes in handy. I think of the Italian word for parents (genitori) and parents reminds of possession. So this case is about possession",
      "dative: After thinking of the first three, all that is left is the indirect object, which is impacted by both the direct object (accusative) and the verb",
    ],
  },
  {
    id: 9,
    title: "walmart mask vid",
    imageLink: ["https://i.imgur.com/4hn6nBn.gif"],
    description: `i was living in small town az in 2020, and the mask usage during the pandemic was shite so i made this video to demonstrate that.`,
    components: ["camera work - my ma", "everything else - me"],
  },
];

module.exports = { whatIHaveDone };
