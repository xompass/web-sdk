export type DockerRegistryAuthContent = {
  type: "ACR" | "CredentialBased" | "TokenBased";
  registryAuth?: any;
};
