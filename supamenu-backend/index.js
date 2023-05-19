const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLList, GraphQLSchema } = require('graphql')

var Suppliers = [ 
    {id: 1, name: 'Nyirangarama'},
    {id: 2, name: 'Mukamira'},
    {id: 3, name: 'Inyange'}
]

var Drinks = [
    { id: 1, name: 'Agashya', type: 'Juice', ownerId: 1 },
    { id: 2, name: 'Drinking Yoghurt', type: 'Milk', ownerId: 2},
    { id: 3, name: 'Inyange water',type: 'Water', ownerId: 3 },
    { id: 4, name: 'Akarabo', type: 'Biscuit', ownerId: 1 },
    { id: 5, name: 'Akandi', type: 'Water', ownerId: 1},
    { id: 6, name: 'Ikivuguto',type: 'Milk', ownerId: 2 },
    { id: 7, name: 'Inyange Juice', type: 'Juice' , ownerId: 3 },
]

const suppliersType = new GraphQLObjectType({
    name: 'Suppliers',
    description: 'The products manufactures and suppliers',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt)},
        name: { type: GraphQLNonNull(GraphQLString)},
    })
})

const drinksType = new GraphQLObjectType({
    name: 'Drinks',
    description: 'The products manufactured and suppliers some info',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt)},
        name: { type: GraphQLNonNull(GraphQLString)},
        type: { type: GraphQLNonNull(GraphQLString)},
        ownerId: { type: GraphQLNonNull(GraphQLString)},
    })
})

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: "Root Query",
    fields: () => ({
        Suppliers : {
            type: new GraphQLList(suppliersType),
            description: 'List of all manufactures',
            resolve: () => Suppliers
        },
        Drinks: {
            type: new GraphQLList(drinksType),
            description: 'List of all drinks',
            resolve: () => Drinks
        }
    })
})

const schema = new GraphQLSchema({
    query: RootQueryType
})

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(3000, () => {
    console.log('GraphQL server running on port http://localhost:3000')
})