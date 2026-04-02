const queriesSchema = `
    allLocations: [LocationType]
    locationsById(id: String): [LocationType]
    onUserWishlist(user: String): [LocationType]    
`;

export default queriesSchema;