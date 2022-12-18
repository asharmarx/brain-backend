const whatIHaveDoneSkeme = `
    type WhatIHaveDone {
        id: ID!
        title: String!
        description: String!
        components: [String!]
        imageLink: [String!]
    }

   extend type Query {
        whatihavedone: [WhatIHaveDone!]!
   }
    `;

module.exports = whatIHaveDoneSkeme;
