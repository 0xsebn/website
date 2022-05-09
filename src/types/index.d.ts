export {};

declare global {
  interface Window {
    ethereum: ethereum; // 👈️ turn off type checking
  }
}
