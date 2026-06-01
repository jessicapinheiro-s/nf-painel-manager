import { useState } from "react";
import Cropper from "react-easy-crop";

export const AvatarCrop = () => {
    const [image, setImage] = useState<string>('');
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState<number>(1);
    const [croppedArea, setCroppedArea] = useState<any>(null);

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (!file) return;

        const url = URL.createObjectURL(file);
        setImage(url)
    }

    return (
        <div className="flex flex-col items-center gap-4">

            {/* INPUT ESCONDIDO */}
            <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={onFileChange}
                className="hidden"
            />

            {/* AVATAR */}
            <label
                htmlFor="avatar-upload"
                className="
      relative
      w-32
      h-32
      rounded-full
      overflow-hidden
      cursor-pointer
      border-4
      border-gray-300
      bg-gray-200
      flex
      items-center
      justify-center
      hover:opacity-80
      transition
    "
            >
                {image ? (
                    <img
                        src={image}
                        alt="avatar"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="flex flex-col items-center text-zinc-400">
                        <span className="text-3xl">📷</span>
                    </div>
                )}
            </label>

            {/* CROPPER */}
            {image && (
                <div className="relative w-72 h-72 rounded-2xl overflow-hidden">
                    <Cropper
                        image={image}
                        crop={crop}
                        zoom={zoom}
                        aspect={1}
                        cropShape="round"
                        showGrid={false}
                        onCropChange={setCrop}
                        onZoomChange={setZoom}
                        onCropComplete={(_, croppedPixels) => {
                            setCroppedArea(croppedPixels);
                        }}
                    />
                </div>
            )}
        </div>
    )
}