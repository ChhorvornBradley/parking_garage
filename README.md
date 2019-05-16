This is a simple implementation of the garage finder.  no UI, nor database.  


To run the test, simply 
`npm install`
`npm run test`
and you should see the test on each row and the full garage.

However, the database for this would mirror the json located within the mocks

specifically, a Garage table (one to many) to Rows (one to many) to Spaces.

Garage:
ID
Name
Various Asset information

Row:
ID
Position*
Level* (* unique non-nullable constraint, still would put the ID as the primary key hence the leaving it in)
GarageId (FK back to Garage, non nullable)


Spaces:
ID 
Position
RowID (FK back to the Row, non nullable)
Occupied
Size (for a relational table this would be a lookup to a VehicleSize table and such)


