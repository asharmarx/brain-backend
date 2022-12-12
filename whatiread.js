const whatIRead = [
  {
    id: 1,
    title: "The Cask of Amontillado - Edgar Allan Poe",
    summary: "dude buries someone in his cellar for revenge",
    resources: [
      {
        title: "PDF",
        link: "https://americanenglish.state.gov/files/ae/resource_files/the_cask_of_amontillado.pdf",
      },
    ],
    seeAlso: [],
  },
  {
    id: 2,
    title: "Zero Point Energy",
    summary:
      "the vibrational energy that exists in quantum mechanical systems even at 0K",
    resources: [
      {
        title: "Wikipedia",
        link: "https://en.wikipedia.org/wiki/Zero-point_energy",
      },
    ],
    seeAlso: [],
  },
  {
    id: 3,
    title: "Y-Most Common Recent Ancestor",
    summary: "the most common recent ancestor of all living human males",
    resources: [
      {
        title: "NCBI",
        link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC16550/",
      },
      {
        title: "Wikipedia",
        link: "https://en.wikipedia.org/wiki/Y-chromosomal_Adam",
      },
    ],
    seeAlso: [],
  },
  {
    id: 4,
    title: "The Nature of Fascism by Roger Griffin",
    summary:
      "book that talks about how people think and the complexity of that affects how difficult it is to come to a singular definition for an ideology eg fascism.",
    resources: [],
    seeAlso: [
      {
        title: "palingenetic ultranationalism",
        link: "https://en.wikipedia.org/wiki/Palingenetic_ultranationalism",
      },
    ],
  },
  {
    id: 5,
    title: "Double Irish",
    summary:
      "a technique by which companies avoid paying taxes. Essentially, US Company develops tech for $x, sells it to a company in Bermuda for $x, which appreciates it to $100x (no gains tax in Bermuda). The Bermuda company licenses it to Irland_1 for $100x which licenses it Ireland_2 for $100x which sells it customer in Germany for $100x. They money is then pushed back to Bermuda as royalty payments which loans it back to US Company",
    resources: [],
    seeAlso: [],
  },
  {
    id: 6,
    title: "Single Malt",
    summary:
      "double irish got some heat, so companies use this to avoid paying taxes. Malt because Malta is used",
    resources: [],
    seeAlso: [],
  },
  {
    id: 7,
    title: "Treasure Islands",
    summary: "paper about tax havens, and how they operate",
    resources: [
      {
        title: "Sci-Hub",
        link: "https://sci-hub.se/10.1257/jep.24.4.103",
      },
    ],
    seeAlso: [],
  },
  {
    id: 8,
    title: "War Is Not Part of Human Nature",
    summary: "article about how war originated within humans",
    resources: [
      {
        title: "Scientific American",
        link: "https://www.scientificamerican.com/article/war-is-not-part-of-human-nature/",
      },
    ],
    seeAlso: [],
  },
  {
    id: 9,
    title: "Co-Moving Distance",
    summary:
      "co-moving distance between two object does not change as they move further apart",
    resources: [{ title: "Co-Moving Distance", link: "" }],
    seeAlso: [],
  },
  {
    id: 10,
    title: "Next Turn Repair Initiators",
    summary:
      "Words or phrases in language that, when engaged in a conversation, one party uses to inform the other that they have not understood them.",
    resources: [
      {
        title: "Sci-Hub - Journal Of Pragmatics",
        link: "https://sci-hub.se/10.1016/s0378-2166(97)89759-7",
      },
    ],
  },
  {
    id: 11,
    title: "Berbers",
    summary:
      "North African indigenous group. One theory of where the word 'Barbarian' comes from.",
    resources: [
      {
        title: "Wikipedia",
        link: "https://en.wikipedia.org/wiki/Berbers?wprov=sfti1",
      },
    ],
  },
  {
    id: 12,
    title: "Dual Inheritance Theory",
    summary:
      "The theory relating to the evolution of culture and genetics together. It talks about how humans are imitation machines and it is because of this imitation we were able to pass down useful cultural knowledge which, in turn, impacted genetic evolution.",
    resources: [
      {
        title: "Sci-Hub - Oxford Online Handbook",
        link: "https://sci-hub.se/10.1093/oxfordhb/9780198568308.013.0038",
      },
    ],
  },
  {
    id: 13,
    title: "The Government Securities Market: In the Wake of ESM",
    summary:
      "Talks about repurchase agreements (repos), and what regulations should be introduced to make them more corruption proof",
    resources: [
      {
        title: "Santa Clara Law Review",
        link: "https://digitalcommons.law.scu.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1842&context=lawreview",
      },
    ],
  },
  {
    id: 14,
    title: "Piaget's Theory of Cognitive Development",
    summary:
      "Breaks down the development of the brain from birth to adulthood, and how humans gather data about their environment to make sense out of it",
    resources: [
      {
        title: "Wikipedia",
        link: "https://en.wikipedia.org/wiki/Piaget%27s_theory_of_cognitive_development",
      },
    ],
  },
  {
    id: 15,
    title: "The Baby Boom and World War II: A Macroeconomic Analysis",
    summary:
      "Talks about the causes of the Baby Boom and it's impact on the labor market",
    resources: [
      {
        title: "National Bureau of Economic Research",
        link: "https://www.nber.org/system/files/working_papers/w13707/w13707.pdf",
      },
    ],
  },
  {
    id: 16,
    title:
      "The Universe Is Not Locally Real, and the Physics Nobel Prize Winners Proved It",
    summary: "Do not render what is not seen as a dev would say",
    resources: [
      {
        title: "Scientific American",
        link: "https://www.scientificamerican.com/article/the-universe-is-not-locally-real-and-the-physics-nobel-prize-winners-proved-it/",
      },
    ],
  },
  {
    id: 17,
    title: "Late Bronze Age Collapse",
    summary:
      "Collapse of a bunch of (fairly successful) civilizations in the fertile crescent that happened in a short amount of time. A lot of similarities to current times 🤷🏽‍♂️",
    resources: [
      {
        title: "Wikipedia",
        link: "https://en.wikipedia.org/wiki/Late_Bronze_Age_collapse?wprov=sfti1",
      },
    ],
  },
  {
    id: 18,
    title: "The Question of Structure and Vision in European Integration",
    summary:
      "A paper by James W. Skillen that talks about the future of Europe post WWII and post Soviet Union and what work Europe as a continent needs to do in order to emerge as a successful and powerful society.",
    resources: [
      {
        title: "Sci-Hub",
        link: "https://sci-hub.se/https://doi.org/10.1016/0191-6599(92)90137-2",
      },
    ],
  },
];

module.exports = { whatIRead };
