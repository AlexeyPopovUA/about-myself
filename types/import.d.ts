declare module "*.png" {
    const value: any;
    export default value;
}

// todo Implement better types for svg
declare module "*.svg" {
    const value: string;
    export default value;

    const ReactComponent: any;

    export { ReactComponent };
}

declare module "*.json" {
    const value: any;
    export default value;
}
