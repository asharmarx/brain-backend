const whatIReadSkeme = `
    type SeeAlso {
        title: String!
        link: String!
    }

    type Resources {
        title: String!
        link: String!
    }

    type WhatIRead {
        id: ID!
        title: String!
        summary: String!
        seeAlso: [SeeAlso!]
        resources: [Resources!]
    }

    extend type Query {
        whatiread: [WhatIRead!]!
    }
`;

module.exports = whatIReadSkeme;
