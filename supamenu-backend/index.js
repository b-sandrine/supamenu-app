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
        getSuppliers : {
            type: new GraphQLList(suppliersType),
            description: 'List of all manufactures',
            resolve: () => Suppliers
        },
        getDrinks: {
            type: new GraphQLList(drinksType),
            description: 'List of all drinks',
            resolve: () => Drinks
        },
        getDrink: {
            type: drinksType,
            description: 'A single drink',
            args: {
                id: {type: GraphQLInt}
            },
            resolve: (parent, args) => Drinks.find((website => website.id === args.id))
        },
        getSupplier : {
            type: suppliersType,
            description: 'A single supplier record',
            args : {
                id: { type: GraphQLInt}
            },
            resolve: (parent, args) => Suppliers.find((Supplier => Supplier.id === args.id))
        }
    })
})

const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
        addSupplier: {
            type: suppliersType,
            description: 'Add a new supplier',
            args: {
                name: {type: GraphQLNonNull(GraphQLString)},
                ownerId: { type: GraphQLNonNull(GraphQLInt)}
            } ,
            resolve: (parent, args) => {
                const newSupplier = { id: Suppliers.length + 1, name: args.name, ownerId: args.ownerId}
                Suppliers.push(newSupplier)
                return newSupplier
            }
        },
        removeSupplier: {
            type: suppliersType,
            description: 'Remove a supplier',
            args: {
                id: {type: GraphQLNonNull(GraphQLInt)}
            },
            resolve: (parent, args) => {
                Suppliers = Suppliers.filter(supplier => supplier.id !== args.id)
                return Suppliers[args.id]
            }
        },
        updateSupplier: {
            type: suppliersType,
            description: 'Update a supplier',
            args: {
                id: {type: new GraphQLNonNull(GraphQLInt)},
                name: {type: new GraphQLNonNull(GraphQLString)},
                ownerId: { type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve: (parent, args) => {
                Suppliers[args.id - 1].name = args.name
                Suppliers[args.id - 1].ownerId = args.ownerId
                return Suppliers[args.id - 1]
            }
        }
    })
})

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(3000, () => {
    console.log('GraphQL server running on port http://localhost:3000')
})