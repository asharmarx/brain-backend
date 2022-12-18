const whatIHaveHeardSkeme = `
    type Aux {
        id: String!
        song: String!
        num: Int!
    }
    
    type WhatIHaveHeard {
        year: String!
        aux: [Aux!]!
    }
    extend type Query {
        whatihaveheard: [WhatIHaveHeard!]!
    }
  `;

module.exports = whatIHaveHeardSkeme;
