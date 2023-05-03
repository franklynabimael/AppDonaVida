export interface UserResponse {
    name: string;
    address: string;
    age: number;
    id: string;
    userName: string | null;
    email: string | null;
    passwordHash: string | null;
    phoneNumber: string | null;
    lockoutEnabled: boolean;
    accessFailedCount: number;
    birthDate: string;
}