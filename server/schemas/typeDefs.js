// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs

const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    descriptionText: String
    category: String
    location: String
    preferences: String
}

type Preferences {
    _id: ID
    preferencesText: String
    username: String   
}

type Auth {
    token: ID!
    user: User
  }
  
type Query {
    me: User
    users: [User]
    user(username: String!): User
    preferences(username: String): [User]
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addFriend(friendId: ID!): User
}
`;

module.exports = typeDefs



// In mutation you will need an addPreferences function:
// addPreferences(username: String! preferencesText: String!): Preferences