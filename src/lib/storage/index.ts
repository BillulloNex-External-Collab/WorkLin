/**
 * Unified Storage Interface
 *
 * Exports Firebase Storage as the storage provider for the app.
 */

export * from '../firebase/storage';

export const getStorageProvider = (): 'firebase' => {
  return 'firebase';
};
