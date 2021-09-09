const KILO_BYTES_PER_BYTE = 1000;

export default (bytes: number) => Math.round(bytes / KILO_BYTES_PER_BYTE);
