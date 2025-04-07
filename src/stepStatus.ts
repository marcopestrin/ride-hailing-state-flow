export interface Step {
    title: string;
    description: string;
    tag: string;
}

export default [
    {
        title: 'Ready',
        description: "",
        tag: "ready"
    },
    {
        title: 'Request Created',
        description: "Looking for a driver...",
        tag: "LOOKING_DRIVER",
    },
    {
        title: 'Driver Found',
        description: '',
        tag: "DRIVER_FOUND",
    },
    {
        title: 'Driver Cooming',
        description: 'A driver has been found.',
        tag: "DRIVER_ACCEPTED",
    },
    {
        title: 'Meeting',
        description: 'The driver has arrived to the location.',
        tag: "DRIVER_ARRIVED",
    },
    {
        title: 'Riding',
        description: 'The ride has begun',
        tag: "IN_PROGRESS",
    },
]