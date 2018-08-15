export class Vehicle {
    public VehicleId: number;
    public Type: string;
    public ManufacturerNameShort: string;
    public Price: number;
    constructor () {}
}

export class VehicleResponse {
    public VehicleId: number;
    public returnCode: {
        name: string,
        id: number
    };

}
