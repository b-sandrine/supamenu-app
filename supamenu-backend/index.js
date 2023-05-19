const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString, GraphQLList, GraphQLSchema, GraphQLUnionType } = require('graphql')

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
        getSupplier : {
            type: suppliersType,
            description: 'A single supplier record',
            args : {
                id: { type: GraphQLInt}
            },
            resolve: (parent, args) => Suppliers.find((Supplier => Supplier.id === args.id))
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
                name: {type: GraphQLNonNull(GraphQLString)}
            } ,
            resolve: (parent, args) => {
                const newSupplier = { id: Suppliers.length + 1, name: args.name}
                Suppliers.push(newSupplier)
                return newSupplier
            }
        },
        updateSupplier: {
            type: suppliersType,
            description: 'Update a supplier',
            args: {
                id: {type: new GraphQLNonNull(GraphQLInt)},
                name: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: (parent, args) => {
                Suppliers[args.id - 1].name = args.name
                return Suppliers[args.id - 1]
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
        addDrink: {
            type: drinksType,
            description: 'Adding a single drink',
            args: {
               name: { type: new GraphQLNonNull(GraphQLString)},
               type: { type: GraphQLString},
               ownerId: { type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve: (parent, args) => {
                const newDrink = { id: Drinks.length + 1, name: args.name, type: args.type, ownerId: args.ownerId}
                Drinks.push(newDrink)
                return newDrink
            }
        },
        updateDrink: {
            type: drinksType,
            description: 'Updating an existing drink',
            args: {
                id: {type: new GraphQLNonNull(GraphQLInt)},
                name: { type: new GraphQLNonNull(GraphQLString)},
                type: { type: new GraphQLNonNull(GraphQLString)},
                ownerId: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve: (parent, args) => {
                Drinks[args.id - 1].name = args.name
                Drinks[args.id -1].type = args.type
                Drinks[args.id - 1].ownerId = args.ownerId
                return Drinks[args.id - 1] 
            }
        },
        removeDrink: {
            type: drinksType,
            description: 'Operation to remove a drink',
            args: {
                id: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve: (parent, args) => {
                Drinks = Drinks.filter(drink => drink.id !== args.id)
                return Drinks[args.id]
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