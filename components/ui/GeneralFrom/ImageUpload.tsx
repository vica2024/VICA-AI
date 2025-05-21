"use client";

import { useState, useRef, ChangeEvent, DragEvent } from "react";
import Image from "next/image";

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  maxSize?: number; // in MB
  allowedTypes?: string[];
}

export default function ImageUpload({
  onImageUpload,
  maxSize = 10,
  allowedTypes = ["image/jpeg", "image/png"],
}: ImageUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File) => {
    setError(null);

    // Check file type
    if (!allowedTypes.includes(file.type)) {
      setError("Unsupported file format. Please upload a JPG, JPEG, or PNG image.");
      return;
    }

    // Check file size (in bytes)
    if (file.size > maxSize * 1024 * 1024) {
      setError(`File is too large. Maximum size is ${maxSize}MB.`);
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Pass file to parent component
    onImageUpload(file);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileChange(e.target.files[0]);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="mb-4 lg:mb-6">
      <div
        role="presentation"
        tabIndex={0}
        className={`group relative flex h-40 cursor-pointer items-center justify-center rounded-xl border backdrop-blur-md lg:h-48 ${
          isDragging
            ? "border-purple-500/60 bg-black/70"
            : "border-purple-500/30 bg-black/60 hover:bg-black/70 hover:border-purple-500/40 hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
        } transition-all duration-300`}
        onClick={triggerFileInput}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          accept={allowedTypes.join(",")}
          tabIndex={-1}
          type="file"
          className="hidden"
          onChange={handleInputChange}
        />

        {previewUrl ? (
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <Image
              src={previewUrl}
              alt="Preview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-medium">Click to change image</span>
            </div>
          </div>
        ) : (
          <div className="relative z-10 text-center">
            <div className="mb-3">
              <svg
                className={`mx-auto h-12 w-12 ${
                  isDragging ? "text-purple-500" : "text-purple-400"
                } transition-colors duration-300`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                ></path>
              </svg>
            </div>
            <div className="space-y-1.5">
              <p className="text-sm font-medium text-purple-400">
                Drag and drop image here or click to upload
              </p>
              <p className="text-xs text-gray-400">
                Supported formats: JPG, JPEG, PNG
              </p>
              <div className="text-[10px] text-gray-500">Max Size: {maxSize}MB</div>
            </div>
          </div>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}