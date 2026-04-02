const customSchema = `
    directive @cacheControl (maxAge: Int) on FIELD_DEFINITION | OBJECT

    type LocationType @cacheControl(maxAge: 86400) {
        address: String!
        zipcode: String!
        borough: String!
        cuisine: String!
        name: String!
        on_wishlist: [String!]! @cacheControl(maxAge: 60)
        location_id: String!
    }
`;

export default customSchema;