import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface CustomAudioPlayerProps {
	audioLink: string;
}

export default function CustomAudioPlayer({
	audioLink,
}: CustomAudioPlayerProps) {
	const audioRef = useRef<HTMLAudioElement | null>(null); // Nullable type
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState(1);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [isMuted, setIsMuted] = useState(false);

	// Toggle play/pause
	const togglePlayPause = () => {
		if (audioRef.current) {
			if (audioRef.current.paused) {
				audioRef.current.play();
				setIsPlaying(true);
			} else {
				audioRef.current.pause();
				setIsPlaying(false);
			}
		}
	};

	// Update seek bar and current time as audio plays
	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		const updateTime = () => setCurrentTime(audio.currentTime);

		audio.addEventListener("timeupdate", updateTime);
		audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));

		return () => {
			audio.removeEventListener("timeupdate", updateTime);
		};
	}, []);

	// Seek functionality
	const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newTime = (Number(event.target.value) / 100) * duration;
		if (audioRef.current) {
			audioRef.current.currentTime = newTime;
		}
		setCurrentTime(newTime);
	};

	// Mute/Unmute functionality
	const toggleMute = () => {
		if (audioRef.current) {
			audioRef.current.muted = !isMuted;
		}
		setIsMuted(!isMuted);
	};

	// Volume control
	const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newVolume = Number(event.target.value);
		if (audioRef.current) {
			audioRef.current.volume = newVolume;
		}
		setVolume(newVolume);
	};

	return (
		<div className="w-full h-full lg:row-start-9 lg:col-span-7 backdrop-blur-md lg:col-start-2 row-start-8 col-start-2 z-[100] row-span-1 col-span-8 flex items-center rounded-t-none p-4 rounded-lg shadow-lg space-x-4">
			{/* Play/Pause Button */}
			<button
				type="button"
				onClick={togglePlayPause}
				className="text-white text-4xl invert"
			>
				{isPlaying ? (
					<Image
						src="/icons/pauseButton.png"
						alt="pause"
						width={48}
						height={48}
					/>
				) : (
					<Image
						src="/icons/playButton.png"
						alt="play"
						width={48}
						height={48}
					/>
				)}
			</button>

			{/* Seek Bar */}
			<input
				type="range"
				min="0"
				max="100"
				value={(currentTime / duration) * 100 || 0}
				onChange={handleSeek}
				className="w-full h-2 bg-gray-500 rounded-lg appearance-none cursor-pointer"
			/>

			{/* Volume Control */}
			<input
				type="range"
				min="0"
				max="1"
				step="0.1"
				value={volume}
				onChange={handleVolumeChange}
				className="w-20 h-2 bg-gray-500 rounded-lg appearance-none cursor-pointer"
			/>

			{/* Mute Button */}
			<button
				type="button"
				onClick={toggleMute}
				className="text-white text-4xl invert"
			>
				{isMuted ? (
					<Image src="/icons/muted.png" alt="muted" width={48} height={48} />
				) : (
					<Image src="/icons/sound.png" alt="un-muted" width={48} height={48} />
				)}
			</button>

			{/* Hidden Audio Element */}
			{/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
			<audio ref={audioRef} src={audioLink} />
		</div>
	);
}
