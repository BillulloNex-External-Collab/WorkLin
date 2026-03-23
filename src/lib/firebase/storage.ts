/**
 * Firebase Storage Module
 *
 * Handles file uploads and deletions using Firebase Storage.
 * All upload functions return { url, error } for consistent error handling.
 */

import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from './config';

export interface UploadResult {
  url: string | null;
  error: string | null;
}

/**
 * Upload a file to Firebase Storage
 * @param file - The file to upload
 * @param path - Storage path (e.g., 'workspaces/workspace-id/images/image.jpg')
 */
export const uploadFile = async (file: File, path: string): Promise<UploadResult> => {
  try {
    const storageRef = ref(storage, path);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return { url: downloadURL, error: null };
  } catch (error: any) {
    console.error('Firebase Storage upload error:', error);
    return { url: null, error: error.message };
  }
};

/**
 * Upload image with auto-generated path
 * @param file - Image file to upload
 * @param workspaceId - ID of the workspace
 * @param _maxWidth - Unused (kept for API compatibility with previous Cloudinary signature)
 * @param _maxHeight - Unused (kept for API compatibility)
 */
export const uploadImage = async (
  file: File,
  workspaceId: string,
  _maxWidth?: number,
  _maxHeight?: number
): Promise<UploadResult> => {
  const timestamp = Date.now();
  const filename = `${timestamp}_${file.name}`;
  const path = `workspaces/${workspaceId}/images/${filename}`;
  return uploadFile(file, path);
};

/**
 * Upload page cover image
 * @param file - Image file
 * @param pageId - Page ID
 * @param workspaceId - Workspace ID
 */
export const uploadPageCover = async (
  file: File,
  pageId: string,
  workspaceId: string
): Promise<UploadResult> => {
  const path = `workspaces/${workspaceId}/pages/${pageId}/covers/cover_${Date.now()}`;
  return uploadFile(file, path);
};

/**
 * Upload user profile image
 * @param file - Image file
 * @param userId - User ID
 */
export const uploadProfileImage = async (
  file: File,
  userId: string
): Promise<UploadResult> => {
  const path = `users/${userId}/profile/avatar`;
  return uploadFile(file, path);
};

/**
 * Delete a file from Firebase Storage
 * @param url - Firebase Storage download URL or storage path
 */
export const deleteFile = async (url: string): Promise<{ success: boolean; error: string | null }> => {
  try {
    // If it's a download URL, create ref from URL; otherwise treat as a path
    const storageRef = url.startsWith('https://') ? ref(storage, url) : ref(storage, url);
    await deleteObject(storageRef);
    return { success: true, error: null };
  } catch (error: any) {
    console.error('Firebase Storage delete error:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Get optimized image URL — Firebase Storage doesn't have built-in transforms,
 * so this is a pass-through for API compatibility.
 */
export const getOptimizedImageUrl = (
  url: string,
  _width?: number,
  _height?: number,
  _crop?: string
): string => {
  return url;
};