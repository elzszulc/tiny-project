export const LoginCredentials = (p: Partial<LoginCredentials> = {}): LoginCredentials => ({
    email: "test@test.com",
    password: "TTH9mpsa",
    ...p
})