import { FirebaseError } from "firebase/app";

export function mapFirebaseAuthError(error: unknown): string {
  if (!(error instanceof FirebaseError)) {
    return "Ocorreu um erro inesperado. Tente novamente.";
  }

  const messages: Record<string, string> = {
    "auth/invalid-email": "Endereço de e-mail inválido.",
    "auth/invalid-credential": "E-mail ou senha incorretos.",
    "auth/user-disabled": "Esta conta foi desativada.",
    "auth/user-not-found": "E-mail ou senha incorretos.",
    "auth/wrong-password": "E-mail ou senha incorretos.",
    "auth/email-already-in-use": "Este e-mail já está cadastrado.",
    "auth/weak-password": "A senha é muito fraca. Use pelo menos 6 caracteres.",
    "auth/operation-not-allowed": "Operação não permitida.",
    "auth/network-request-failed": "Falha de rede. Verifique sua conexão.",
    "auth/too-many-requests": "Muitas tentativas. Aguarde e tente novamente.",
  };

  return (
    messages[error.code] ??
    "Não foi possível concluir a operação. Tente novamente."
  );
}
